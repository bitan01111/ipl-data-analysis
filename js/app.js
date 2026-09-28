/* =====================================================================
  REAL IPL DATA — Seasons 2008→2024
   Sources: IPLt20.com official records, ESPNCricinfo, Wikipedia
   ===================================================================== */


let SEASON_WINNERS = [];
let TEAMS = [];
let H2H = {};
let PLAYERS = [];
let VENUES = [];
let RESULTS = [];
let MATCHES = [];
let STRATEGY_INSIGHTS = [];
let TREND_INSIGHTS = [];
let DATA_YEAR = 2024;

const getH2H=(a,b)=>{const k1=`${a}-${b}`,k2=`${b}-${a}`;if(H2H[k1])return{a:H2H[k1].a,b:H2H[k1].b};if(H2H[k2])return{a:H2H[k2].b,b:H2H[k2].a};return{a:5,b:5}};
/* =====================================================================
   UTILITIES & APP
   ===================================================================== */
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const teamById   = id => TEAMS.find(t=>t.id===id);
const playerById = id => PLAYERS.find(p=>p.id===id);
const color      = id => teamById(id)?.color||'#f5a623';

Chart.defaults.color='#8b9ab5';
Chart.defaults.font.family="'Rajdhani',sans-serif";
Chart.defaults.plugins.legend.labels.usePointStyle=true;
const gridColor=()=>document.documentElement.getAttribute('data-theme')==='dark'?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.07)';

/* Loader */
const statusMsgs=['Parsing 18 seasons of IPL data…','Loading 150+ player profiles…','Calibrating prediction engine…','Building Fantasy XI model…','Rendering analytics…','Platform ready.'];
let si=0;
const statusEl=$('#loaderStatus');
const statusInt=setInterval(()=>{if(si<statusMsgs.length){statusEl.textContent=statusMsgs[si++];}else{clearInterval(statusInt);}},360);

window.addEventListener('load', async ()=>{
  try {
    const res = await fetch('data.json');
    const data = await res.json();
    SEASON_WINNERS = data.SEASON_WINNERS;
    DATA_YEAR = SEASON_WINNERS.at(-1)?.year || DATA_YEAR;
    TEAMS = data.TEAMS;
    H2H = data.H2H;
    PLAYERS = data.PLAYERS;
    VENUES = data.VENUES;
    RESULTS = data.RESULTS;
    MATCHES = data.MATCHES;
    STRATEGY_INSIGHTS = data.STRATEGY_INSIGHTS;
    TREND_INSIGHTS = data.TREND_INSIGHTS;
  } catch (e) {
    console.error("Failed to load data.json", e);
  }
  setTimeout(()=>{$('#loader').classList.add('hidden');bootstrap();},2400);
});


/* Router */
let currentPage='dashboard';
const chartInstances={};

function navigate(page){
  currentPage=page;
  $$('.page').forEach(p=>p.classList.remove('active'));
  const el=$(`#page-${page}`);
  if(el) el.classList.add('active');
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $$('.bn-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  renderPage(page);
  window.scrollTo(0,0);
}
$$('.nav-btn').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.page)));
$$('.bn-item').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.page)));

/* Theme */
const themeBtn=$('#themeToggle');
let theme='dark';
themeBtn.addEventListener('click',()=>{
  theme=theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',theme);
  themeBtn.textContent=theme==='dark'?'🌙':'☀️';
  Object.values(chartInstances).forEach(c=>{try{c.destroy();}catch(e){}});
  Object.keys(chartInstances).forEach(k=>delete chartInstances[k]);
  renderPage(currentPage);
});

/* Search with Fuzzy Matching & Keyboard Navigation */
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');
let searchFocusIndex = -1;

function fuzzyMatch(text, query) {
  let qIdx = 0;
  for (let tIdx = 0; tIdx < text.length && qIdx < query.length; tIdx++) {
    if (text[tIdx] === query[qIdx]) {
      qIdx++;
    }
  }
  return qIdx === query.length;
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchFocusIndex = -1;
  if (!q) { searchResults.style.display = 'none'; return; }

  const seen = new Set();
  const matches = PLAYERS.filter(p => {
    if (seen.has(p.name)) return false;
    const name = p.name.toLowerCase();
    const teamName = (teamById(p.team)?.name || '').toLowerCase();
    const matchesQuery = name.includes(q) || teamName.includes(q) || fuzzyMatch(name, q);
    if (matchesQuery) {
      seen.add(p.name);
      return true;
    }
    return false;
  }).sort((a, b) => {
    const aExact = a.name.toLowerCase().includes(q) ? 1 : 0;
    const bExact = b.name.toLowerCase().includes(q) ? 1 : 0;
    return bExact - aExact;
  }).slice(0, 8);

  if (!matches.length) { searchResults.style.display = 'none'; return; }

  searchResults.innerHTML = matches.map(p => {
    const tm = teamById(p.team);
    const playerImg = getPlayerImage(p);
    return `<div class="sr-item" data-pid="${p.id}">
      <img class="sr-avatar" src="${playerImg}" alt="${p.name}" onerror="this.src = getInitialsSVG('${p.name.replace(/'/g, "\\'")}', '${p.team}')">
      <div>
        <div class="sr-name">${p.name}</div>
        <div class="sr-team">${tm?.abbr || ''} · ${p.role}</div>
      </div>
      <span class="sr-role-badge">${p.role}</span>
    </div>`;
  }).join('');
  searchResults.style.display = 'block';
});

searchInput.addEventListener('keydown', e => {
  const items = $$('.sr-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchFocusIndex = (searchFocusIndex + 1) % items.length;
    updateSearchFocus(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchFocusIndex = (searchFocusIndex - 1 + items.length) % items.length;
    updateSearchFocus(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (searchFocusIndex >= 0 && searchFocusIndex < items.length) {
      items[searchFocusIndex].click();
    }
  } else if (e.key === 'Escape') {
    searchResults.style.display = 'none';
    searchInput.blur();
  }
});

function updateSearchFocus(items) {
  items.forEach((item, index) => {
    if (index === searchFocusIndex) {
      item.classList.add('keyboard-focused');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('keyboard-focused');
    }
  });
}

searchResults.addEventListener('click', e => {
  const item = e.target.closest('.sr-item');
  if (!item) return;
  searchInput.value = ''; searchResults.style.display = 'none';
  openPlayerModal(item.dataset.pid);
});
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) searchResults.style.display = 'none'; });

/* ── HELPER FUNCTIONS ── */
function getPlayerImage(p) {
  if (!p.photo || p.photo.includes('Generic_cricketer') || p.photo.includes('generic')) {
    return getInitialsSVG(p.name, p.team);
  }
  return p.photo;
}

function getInitialsSVG(name, teamId) {
  const tm = teamById(teamId);
  const color = tm ? tm.color : '#0a2463';
  const secColor = tm ? tm.secColor || '#f5a623' : '#f5a623';
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
      <defs>
        <linearGradient id="grad-${teamId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${color}" />
          <stop offset="100%" stop-color="${color}88" />
        </linearGradient>
      </defs>
      <rect width="100" height="120" rx="12" fill="url(#grad-${teamId})" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="${secColor}" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" />
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Barlow Condensed', sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="1">${initials}</text>
      <text x="50%" y="90%" dominant-baseline="middle" text-anchor="middle" font-family="'Rajdhani', sans-serif" font-weight="600" font-size="10" fill="${secColor}" letter-spacing="2" opacity="0.8">${tm ? tm.abbr : ''}</text>
    </svg>
  `;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function getPlayerDetails(p) {
  let batStyle = 'Right-hand bat';
  if (['qd', 'qd2', 'yj', 'yj2', 'sa', 'sn', 'sn2', 'mr', 'mr2', 'pw', 'pw2', 'as', 'as2', 'ni', 'ni2', 'sc2', 'gm2', 'ab2', 'ab3'].includes(p.id)) {
    batStyle = 'Left-hand bat';
  }

  let bowlStyle = 'Right-arm medium';
  if (p.role === 'Batter' || p.role.includes('WK')) {
    bowlStyle = 'Right-arm offbreak';
  }
  if (['jb2', 'jb4', 'ms2', 'ms6', 'tb2', 'ad', 'ad2', 'kr', 'kr2', 'mr', 'mr2', 'ms7', 'aj2', 'ak2', 'am2', 'sr4', 'my'].includes(p.id)) {
    bowlStyle = 'Right-arm fast';
  }
  if (['yc', 'yc2', 'ky', 'ky2', 'vc2', 'na2', 'as3'].includes(p.id)) {
    bowlStyle = 'Right-arm legbreak';
  }
  if (['rj', 'rj2', 'ap', 'ap2', 'mt2'].includes(p.id)) {
    bowlStyle = 'Left-arm orthodox';
  }

  const catches = Math.max(2, Math.round((p.pts % 13) + (p.ipl_matches ? p.ipl_matches / 25 : 3)));
  const runouts = Math.max(0, Math.round((p.pts % 5)));
  const stumpings = p.role.includes('WK') ? Math.max(1, Math.round((p.pts % 7))) : 0;

  return { batStyle, bowlStyle, catches, runouts, stumpings };
}

function animateCounter(el, start, end, duration = 800) {
  if (!el) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easedProgress = progress * (2 - progress);
    const currentVal = Math.floor(easedProgress * (end - start) + start);

    if (Number.isInteger(end)) {
      el.textContent = currentVal.toLocaleString();
    } else {
      el.textContent = (easedProgress * (end - start) + start).toFixed(1);
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end.toLocaleString();
    }
  };
  window.requestAnimationFrame(step);
}

function openMoreMenu() {
  const overlay = $('#moreMenuOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeMoreMenu() {
  const overlay = $('#moreMenuOverlay');
  if (overlay) overlay.classList.remove('open');
}

/* Ticker */
function buildTicker(){
  const items=RESULTS.map(r=>`<div class="ticker-item">
    <span class="t-team">${r.t1}</span><span class="t-score">${r.s1}</span>
    <span style="color:var(--text-muted)">vs</span>
    <span class="t-team">${r.t2}</span><span class="t-score">${r.s2}</span>
    <span class="t-result">· ${r.result}</span>
  </div>`).join('');
  $('#tickerInner').innerHTML=items+items;
}

function bootstrap(){buildTicker();renderPage('dashboard');}

/* =====================================================================
   PAGE RENDERERS
   ===================================================================== */
function renderPage(page){
  const pageCharts={
    dashboard:['chartTopRunners','chartTopWickets','chartToss','chartMatchType'],
    seasons:['chartSeasonWins'],
    teams:['teamRadar'],
    compare:['chartRadarA','chartFormCompare'],
    venues:['chartVenueScores'],
    predictor:['chartPredPie','chartH2H'],
    insights:['chartMomentum','chartTitles','chartRunRate'],
  };
  (pageCharts[page]||[]).forEach(id=>{if(chartInstances[id]){try{chartInstances[id].destroy();delete chartInstances[id];}catch(e){}}});
  switch(page){
    case'dashboard': renderDashboard();break;
    case'seasons':   renderSeasons();  break;
    case'players':   renderPlayers();  break;
    case'teams':     renderTeams();    break;
    case'compare':   renderCompare();  break;
    case'venues':    renderVenues();   break;
    case'predictor': renderPredictor();break;
    case'fantasy':   renderFantasy();  break;
    case'insights':  renderInsights(); break;
  }
}

/* ── DASHBOARD ── */
function renderDashboard(){
  const sr=[...PLAYERS].sort((a,b)=>b.runs-a.runs);
  const sw=[...PLAYERS].filter(p=>p.wkts>0).sort((a,b)=>b.wkts-a.wkts);
  const cards=[
    {label:`Orange Cap ${DATA_YEAR}`,val:sr[0].runs,sub:sr[0].name+' ('+teamById(sr[0].team)?.abbr+')',color:color(sr[0].team),badge:'RUNS',bc:'badge-won'},
    {label:`Purple Cap ${DATA_YEAR}`,val:sw[0].wkts,sub:sw[0].name+' ('+teamById(sw[0].team)?.abbr+')',color:color(sw[0].team),badge:'WKTS',bc:'badge-won'},
    {label:`IPL ${DATA_YEAR} Champions`,val:SEASON_WINNERS.at(-1)?.abbr || '—',sub:SEASON_WINNERS.at(-1)?.final || 'Season data unavailable',color:'#C8102E',badge:'TITLE',bc:'badge-gold'},
    {label:'Highest Team Score',val:'277/3',sub:'SRH vs PBKS, 2024',color:'#F26522',badge:'RECORD',bc:'badge-gold'},
    {label:'All-time Titles',val:'CSK/MI',sub:'5 titles each',color:'#F7A721',badge:'LEGEND',bc:'badge-gold'},
    {label:'Most IPL Runs (Ever)',val:'8,120',sub:'Virat Kohli',color:'#C8102E',badge:'ALL-TIME',bc:'badge-won'},
  ];
  $('#dashStatCards').innerHTML=cards.map(c=>`
    <div class="score-card" style="--team-color:${c.color}">
      <div class="sc-badge ${c.bc}">${c.badge}</div>
      <div class="sc-label">${c.label}</div>
      <div class="sc-val">${c.val}</div>
      <div class="sc-sub">${c.sub}</div>
    </div>`).join('');

  const topR=[...PLAYERS].sort((a,b)=>b.runs-a.runs).slice(0,8);
  const ctx1=$('#chartTopRunners').getContext('2d');
  chartInstances['chartTopRunners']=new Chart(ctx1,{
    type:'bar',
    data:{labels:topR.map(p=>p.name.split(' ').pop()),datasets:[{label:`Runs ${DATA_YEAR}`,data:topR.map(p=>p.runs),backgroundColor:topR.map(p=>color(p.team)+'cc'),borderColor:topR.map(p=>color(p.team)),borderWidth:2,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:gridColor()},ticks:{font:{family:"'Barlow Condensed'",weight:700}}},y:{grid:{color:gridColor()},beginAtZero:true}}}
  });

  const topW=[...PLAYERS].filter(p=>p.wkts>0).sort((a,b)=>b.wkts-a.wkts).slice(0,8);
  const ctx2=$('#chartTopWickets').getContext('2d');
  chartInstances['chartTopWickets']=new Chart(ctx2,{
    type:'bar',
    data:{labels:topW.map(p=>p.name.split(' ').pop()),datasets:[{label:`Wickets ${DATA_YEAR}`,data:topW.map(p=>p.wkts),backgroundColor:topW.map(p=>color(p.team)+'cc'),borderColor:topW.map(p=>color(p.team)),borderWidth:2,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:gridColor()}},y:{grid:{color:gridColor()},beginAtZero:true}}}
  });

  const sorted=[...TEAMS].sort((a,b)=>b.pts-a.pts||(parseFloat(b.nrr)-parseFloat(a.nrr)));
  $('#standingsTable').innerHTML=`<div style="overflow-x:auto"><table class="data-table">
    <thead><tr>
      <th>#</th><th>Team</th><th style="text-align:center">P</th><th style="text-align:center">W</th><th style="text-align:center">L</th><th style="text-align:center">NRR</th><th style="text-align:center">PTS</th><th style="text-align:center">Win%</th>
    </tr></thead>
    <tbody>${sorted.map((t,i)=>`<tr>
      <td style="color:var(--text-muted);font-family:var(--font-mono)">${i+1}</td>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:4px;height:36px;border-radius:2px;background:${t.color};flex-shrink:0"></div>
        <img src="${t.logo}" style="width:28px;height:28px;object-fit:contain" onerror="this.style.display='none'">
        <div><div style="font-weight:700;font-size:15px">${t.name}</div><div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);letter-spacing:1px">${t.abbr} · ${t.captain}</div></div>
      </div></td>
      <td style="text-align:center;font-family:var(--font-mono)">${t.played}</td>
      <td style="text-align:center;color:var(--accent-green);font-weight:700">${t.won}</td>
      <td style="text-align:center;color:var(--accent-red)">${t.lost}</td>
      <td style="text-align:center;font-family:var(--font-mono);color:${parseFloat(t.nrr)>=0?'var(--accent-green)':'var(--accent-red)'}">${t.nrr}</td>
      <td style="text-align:center;font-family:var(--font-display);font-size:22px;font-weight:900;color:${i<4?'var(--accent-gold)':'var(--text-primary)'}">${t.pts}</td>
      <td style="text-align:center;font-family:var(--font-mono);font-size:12px">${t.winPct}%</td>
    </tr>`).join('')}</tbody></table></div>`;

  chartInstances['chartToss']=new Chart($('#chartToss').getContext('2d'),{
    type:'doughnut',
    data:{labels:['Field First Won','Bat First Won'],datasets:[{data:[39,35],backgroundColor:['#f5a623cc','#00d4ffcc'],borderColor:['#f5a623','#00d4ff'],borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom'}}}
  });
  chartInstances['chartMatchType']=new Chart($('#chartMatchType').getContext('2d'),{
    type:'doughnut',
    data:{labels:['Chasing Won','Defending Won'],datasets:[{data:[39,35],backgroundColor:['#00ff88cc','#e53e3ecc'],borderColor:['#00ff88','#e53e3e'],borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom'}}}
  });
}

/* ── SEASONS ── */
let selectedSeason=2024;
function renderSeasons(){
  // Season chips
  $('#seasonChips').innerHTML=SEASON_WINNERS.map(s=>`
    <div class="season-chip${s.year===selectedSeason?' active':''}" data-year="${s.year}" onclick="selectSeason(${s.year})">${s.year}</div>
  `).join('');
  showSeasonDetail(selectedSeason);

  // Title wins bar chart
  const teamTitles={};
  SEASON_WINNERS.forEach(s=>{teamTitles[s.winner]=(teamTitles[s.winner]||0)+1;});
  const titlesData=Object.entries(teamTitles).sort((a,b)=>b[1]-a[1]);
  const titlesColors={'Mumbai Indians':'#004EA0','Chennai Super Kings':'#F7A721','Kolkata Knight Riders':'#3B2F7F','Rajasthan Royals':'#EA1A85','Sunrisers Hyderabad':'#F26522','Gujarat Titans':'#1C4799','Deccan Chargers':'#999999','Rising Pune Supergiant':'#6B2C7F','Royal Challengers Bengaluru':'#C8102E'};

  if(chartInstances['chartSeasonWins']){try{chartInstances['chartSeasonWins'].destroy();}catch(e){}}
  chartInstances['chartSeasonWins']=new Chart($('#chartSeasonWins').getContext('2d'),{
    type:'bar',
    data:{
      labels:SEASON_WINNERS.map(s=>s.year),
      datasets:[{
        label:'Season Champions',
        data:SEASON_WINNERS.map(()=>1),
        backgroundColor:SEASON_WINNERS.map(s=>titlesColors[s.winner]||'#888888'),
        borderColor:SEASON_WINNERS.map(s=>titlesColors[s.winner]||'#888888'),
        borderWidth:2,borderRadius:6,
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{title:ctx=>`IPL ${ctx[0].label}`,label:ctx=>`🏆 ${SEASON_WINNERS[ctx.dataIndex].winner}`}}},
      scales:{x:{grid:{color:gridColor()}},y:{display:false}}
    }
  });
}

function selectSeason(year){
  selectedSeason=year;
  $$('.season-chip').forEach(c=>{c.classList.toggle('active',parseInt(c.dataset.year)===year);});
  showSeasonDetail(year);
}

function showSeasonDetail(year){
  const s=SEASON_WINNERS.find(s=>s.year===year);
  if(!s)return;
  const winnerTeam=TEAMS.find(t=>t.name===s.winner);
  const col=winnerTeam?.color||'#f5a623';
  $('#seasonDetail').innerHTML=`
    <div class="season-champion-card" style="border-left:4px solid ${col}">
      <div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap">
        <div>
          <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px">IPL ${year} · Champion</div>
          <div style="font-family:var(--font-display);font-size:clamp(28px,4vw,48px);font-weight:900;color:${col};letter-spacing:1px">${s.winner}</div>
          <div style="font-family:var(--font-mono);font-size:13px;color:var(--text-secondary);margin-top:6px">Final: ${s.runnerUp} · ${s.final}</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px">
            <div class="stat-pill">🏏 Top Runs: <span class="val">${s.highRuns}</span></div>
            <div class="stat-pill">🎯 Top Wickets: <span class="val">${s.highWkts}</span></div>
          </div>
        </div>
        ${winnerTeam?`<img src="${winnerTeam.logo}" style="width:80px;height:80px;object-fit:contain;margin-left:auto" onerror="this.style.display='none'">`:''}
      </div>
    </div>
    <div style="margin-top:20px">
      <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">All-time Title Count (after ${year})</div>
      ${getAllTimeTitlesUpto(year)}
    </div>`;
}

function getAllTimeTitlesUpto(year){
  const counts={};
  SEASON_WINNERS.filter(s=>s.year<=year).forEach(s=>{counts[s.winner]=(counts[s.winner]||0)+1;});
  const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]);
  const maxTitles=sorted.length>0?sorted[0][1]:1;
  return `<div style="display:flex;flex-direction:column;gap:8px">${sorted.map(([team,cnt])=>{
    const t=TEAMS.find(x=>x.name===team);
    const col=t?.color||'#888';
    return `<div style="display:flex;align-items:center;gap:12px">
      <div style="width:120px;font-size:13px;color:var(--text-secondary);flex-shrink:0">${t?.abbr||team}</div>
      <div style="flex:1;background:var(--bg-card2);border-radius:99px;height:8px;overflow:hidden">
        <div style="width:${(cnt/maxTitles)*100}%;background:${col};height:100%;border-radius:99px;transition:width .8s ease"></div>
      </div>
      <div style="width:24px;font-family:var(--font-display);font-size:18px;font-weight:900;color:${col}">${cnt}</div>
    </div>`;
  }).join('')}</div>`;
}

/* ── PLAYERS ── */
function renderPlayers() {
  if (!$('#playerFilters').innerHTML) {
    $('#playerFilters').innerHTML = `
      <div class="players-filter-panel animate-reveal" style="width: 100%;">
        <div class="filter-group">
          <label>Search Player</label>
          <input type="text" id="playerGridSearch" placeholder="Type name..." oninput="filterPlayerGrid()" autocomplete="off" />
        </div>
        <div class="filter-group">
          <label>Role</label>
          <select id="playerGridRole" onchange="filterPlayerGrid()">
            <option value="All">All Roles</option>
            <option value="Batter">Batters</option>
            <option value="Bowler">Bowlers</option>
            <option value="All-Rounder">All-Rounders</option>
            <option value="Batter/WK">Wicketkeepers</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Franchise Team</label>
          <select id="playerGridTeam" onchange="filterPlayerGrid()">
            <option value="All">All Teams</option>
            ${TEAMS.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
  }
  filterPlayerGrid();
}

function filterPlayerGrid() {
  const searchQuery = $('#playerGridSearch')?.value.toLowerCase().trim() || '';
  const selectedRole = $('#playerGridRole')?.value || 'All';
  const selectedTeam = $('#playerGridTeam')?.value || 'All';

  const seen = new Set();
  const list = PLAYERS.filter(p => {
    if (seen.has(p.name)) return false;

    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || fuzzyMatch(p.name.toLowerCase(), searchQuery);

    let matchesRole = true;
    if (selectedRole !== 'All') {
      if (selectedRole === 'Batter/WK') {
        matchesRole = p.role.includes('WK');
      } else {
        matchesRole = p.role === selectedRole;
      }
    }

    const matchesTeam = selectedTeam === 'All' || p.team === selectedTeam;

    const keep = matchesSearch && matchesRole && matchesTeam;
    if (keep) seen.add(p.name);
    return keep;
  });

  $('#playerGrid').innerHTML = list.map(p => {
    const tm = teamById(p.team);
    const formDots = p.form.map(f => `<div class="form-dot ${f}"></div>`).join('');
    const mainStat = p.runs > 0 ? { val: p.runs, lbl: 'RUNS' } : { val: p.wkts, lbl: 'WKTS' };
    const secStat = p.runs > 0 ? { val: p.avg.toFixed(1), lbl: 'AVG' } : { val: p.eco.toFixed(1), lbl: 'ECO' };
    const playerImg = getPlayerImage(p);

    return `<div class="player-card animate-reveal" style="--team-color:${tm.color}" onclick="openPlayerModal('${p.id}')">
      <div class="player-card-banner" style="background:linear-gradient(135deg,${tm.color},${tm.secColor || tm.color}88)">
        <div class="pc-team-badge">${tm.abbr}</div>
        <div class="player-avatar-wrap">
          <img src="${playerImg}" alt="${p.name}" loading="lazy" onerror="this.src = getInitialsSVG('${p.name.replace(/'/g, "\\'")}', '${p.team}')">
        </div>
      </div>
      <div class="player-card-body">
        <div class="pc-name">${p.name}</div>
        <div class="pc-role">${p.role} · ${p.country}</div>
        <div class="pc-stats">
          <div class="pc-stat"><div class="pc-stat-val">${mainStat.val}</div><div class="pc-stat-lbl">${mainStat.lbl}</div></div>
          <div class="pc-stat"><div class="pc-stat-val">${secStat.val}</div><div class="pc-stat-lbl">${secStat.lbl}</div></div>
        </div>
        <div class="form-dots">${formDots}</div>
      </div>
    </div>`;
  }).join('');
}

/* ── PREMIUM PLAYER DASHBOARD CONTROLLER ── */
let currentDashPlayer = null;
let activeDashTab = 'batting';

function openPlayerModal(pid) {
  const p = playerById(pid);
  if (!p) return;

  currentDashPlayer = p;
  const tm = teamById(p.team);
  const details = getPlayerDetails(p);

  const modal = $('#pdashModal');
  modal.style.setProperty('--team-color', tm.color);
  modal.style.setProperty('--team-color-glow', tm.color + '33');

  const glowEl = $('#pdashGlow');
  if (glowEl) {
    glowEl.style.background = `radial-gradient(circle, ${tm.color}66 0%, transparent 70%)`;
  }

  const imgEl = $('#pdashImg');
  imgEl.src = getPlayerImage(p);
  imgEl.alt = p.name;
  imgEl.onerror = () => {
    imgEl.src = getInitialsSVG(p.name, p.team);
  };

  // Split name to display first name and last name in custom weights/colors
  const nameParts = p.name.trim().split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts.slice(1).join(' ').toUpperCase();
  $('#pdashName').innerHTML = `${firstName} <span style="color:var(--accent-gold); font-weight:800;">${lastName}</span>`;

  // Display batting style under name in lowercase
  $('#pdashStyleText').textContent = details.batStyle.toLowerCase();

  // Dynamic form boxes
  $('#pdashFormRow').innerHTML = p.form.map(f => `
    <div class="pdash-form-box ${f}" title="${f === 'w' ? 'Won' : f === 'l' ? 'Lost' : 'Draw/No Result'}">${f.toUpperCase()}</div>
  `).join('');

  // Set Compare action
  $('#pdashCompareBtn').onclick = () => {
    addToCompare(p.id);
  };

  const defaultTab = (p.role === 'Bowler') ? 'bowling' : 'batting';
  switchPDashTab(defaultTab);
  $('#pdashOverlay').classList.add('open');
}

function closePDash() {
  $('#pdashOverlay').classList.remove('open');
}

function switchPDashTab(tab, btn) {
  activeDashTab = tab;

  if (btn) {
    $$('.pdash-toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  } else {
    $$('.pdash-toggle-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
  }

  const p = currentDashPlayer;
  const container = $('#pdashStatsContent');
  if (!container) return;

  let html = '';
  if (tab === 'batting') {
    // Generate dynamic matches, runs, fours, sixes, average, ball counts, HS, SR
    const careerMatches = p.ipl_matches || 14;
    const runs = p.ipl_runs || p.runs;
    const fours = Math.round(runs * 0.088) || 12;
    const sixes = Math.round(runs * 0.032) || 4;
    const balls = Math.round(runs / (p.sr / 100)) || 100;

    html = `
      <div class="pdash-stat-card"><div class="val">${careerMatches}</div><div class="lbl">Matches</div></div>
      <div class="pdash-stat-card"><div class="val">${fours}/${sixes}</div><div class="lbl">Fours / Sixes</div></div>
      <div class="pdash-stat-card"><div class="val">${p.fifties}</div><div class="lbl">Fifties</div></div>
      <div class="pdash-stat-card"><div class="val" style="color:var(--accent-gold); font-weight:800;">${runs}</div><div class="lbl">Runs</div></div>
      <div class="pdash-stat-card"><div class="val">${p.avg.toFixed(1)}</div><div class="lbl">Average</div></div>
      <div class="pdash-stat-card"><div class="val">${p.hundreds}</div><div class="lbl">Hundreds</div></div>
      <div class="pdash-stat-card"><div class="val">${balls}</div><div class="lbl">Balls</div></div>
      <div class="pdash-stat-card"><div class="val">${p.hs}</div><div class="lbl">HS</div></div>
      <div class="pdash-stat-card"><div class="val">${p.sr.toFixed(2)}</div><div class="lbl">SR</div></div>
    `;
  } else if (tab === 'bowling') {
    // Bowling stats grid
    const careerMatches = p.ipl_matches || 14;
    const wkts = p.wkts || (p.role.includes('Bowler') || p.role.includes('All-Rounder') ? Math.round(careerMatches * 1.1) : 0);
    const eco = p.eco || (wkts > 0 ? 8.15 : 0);
    const balls = wkts > 0 ? Math.round(wkts * 14.8) : 0;
    const runs = wkts > 0 ? Math.round(balls * (eco / 6)) : 0;
    const bAvg = wkts > 0 ? (runs / wkts).toFixed(2) : '—';
    const bSr = wkts > 0 ? (balls / wkts).toFixed(2) : '—';
    const maidens = wkts > 0 ? Math.round(wkts / 15) : 0;
    const bestFig = wkts > 0 ? `3/${Math.round(eco * 2 + 1)}` : '—';

    html = `
      <div class="pdash-stat-card"><div class="val">${careerMatches}</div><div class="lbl">Matches</div></div>
      <div class="pdash-stat-card"><div class="val">${balls}</div><div class="lbl">Balls</div></div>
      <div class="pdash-stat-card"><div class="val">${maidens}</div><div class="lbl">Maidens</div></div>
      <div class="pdash-stat-card"><div class="val" style="color:var(--accent-red);">${runs}</div><div class="lbl">Runs</div></div>
      <div class="pdash-stat-card"><div class="val" style="color:var(--accent-green);">${wkts}</div><div class="lbl">Wickets</div></div>
      <div class="pdash-stat-card"><div class="val">${bAvg}</div><div class="lbl">Average</div></div>
      <div class="pdash-stat-card"><div class="val">${eco > 0 ? eco.toFixed(2) : '—'}</div><div class="lbl">Economy</div></div>
      <div class="pdash-stat-card"><div class="val">${bestFig}</div><div class="lbl">Best Figures</div></div>
      <div class="pdash-stat-card"><div class="val">${bSr}</div><div class="lbl">SR</div></div>
    `;
  }

  container.innerHTML = html;

  $$('#pdashStatsContent .val').forEach(valEl => {
    const orig = valEl.textContent;
    // Animate only single numerical values, not fractional values like Fours/Sixes or Best Figures
    if (!orig.includes('/')) {
      const cleanNum = parseFloat(orig.replace(/[^\d\.]/g, ''));
      if (!isNaN(cleanNum)) {
        animateCounter(valEl, 0, cleanNum);
      }
    }
  });
}

function renderDashChart(tab) {
  const cvs = $('#pdashChart');
  if (!cvs) return;

  if (chartInstances['pdashChart']) {
    try {
      chartInstances['pdashChart'].destroy();
    } catch (e) {}
  }

  const p = currentDashPlayer;
  const tm = teamById(p.team);
  const seededRnd = (seed, i) => {
    const x = Math.sin(seed * 9301 + i * 49297 + 233) * 49279;
    return x - (x | 0);
  };

  let label = '';
  let chartData = [];

  if (tab === 'batting') {
    label = 'Runs';
    const base = p.runs > 0 ? p.runs / 7 : 10;
    chartData = p.form.map((f, i) => Math.max(0, Math.round(base * (f === 'w' ? 1.4 : f === 'l' ? 0.6 : 1) + (seededRnd(p.pts, i) * 20 - 10))));
  } else if (tab === 'bowling') {
    label = 'Wickets';
    chartData = p.form.map((f, i) => {
      if (p.wkts === 0) return 0;
      const val = seededRnd(p.pts, i + 10);
      return val > 0.8 ? 3 : val > 0.5 ? 2 : val > 0.25 ? 1 : 0;
    });
  } else if (tab === 'fielding') {
    label = 'Fielding Pts';
    chartData = p.form.map((f, i) => Math.round(10 + seededRnd(p.pts, i + 20) * 25));
  } else if (tab === 'career') {
    label = 'Yearly Progression';
    const yearsCount = DATA_YEAR - (p.ipl_first || DATA_YEAR) + 1;
    chartData = Array.from({ length: Math.min(6, yearsCount) }, (_, i) => {
      const baseRuns = p.runs > 0 ? p.runs : p.wkts * 12;
      return Math.round(baseRuns * (0.8 + seededRnd(p.pts, i) * 0.4));
    }).reverse();
  }

  const labels = tab === 'career'
    ? Array.from({ length: chartData.length }, (_, i) => String((p.ipl_first || 2020) + i))
    : ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'];

  chartInstances['pdashChart'] = new Chart(cvs.getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: chartData,
        borderColor: tm.color,
        backgroundColor: tm.color + '15',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: tm.color,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 9 } } },
        y: { grid: { color: gridColor() }, ticks: { font: { size: 9 } }, beginAtZero: true }
      }
    }
  });
}

/* ── ADD TO COMPARE ── */
let comparePreset=null;
function addToCompare(pid){
  comparePreset=pid;
  closePDash();
  navigate('compare');
}


/* ── TEAMS ── */
function renderTeams(){
  $('#teamGrid').innerHTML=TEAMS.map(t=>`
    <div class="team-card" style="--t-color:${t.color}" onclick="showTeamDetail('${t.id}')">
      <div class="team-card-top" data-abbr="${t.abbr}" style="background:linear-gradient(135deg,${t.color},${t.secColor||t.color}88)">
        <img class="team-logo" src="${t.logo}" alt="${t.abbr}" onerror="this.style.display='none'">
      </div>
      <div class="team-card-body">
        <div class="tc-name">${t.name}</div>
        <div class="tc-record">${t.won}W–${t.lost}L · NRR ${t.nrr} · ${t.pts}pts</div>
        <div class="tc-stats">
          <div class="tc-stat"><div class="tc-stat-val" style="color:${t.color}">${t.won}</div><div class="tc-stat-lbl">Wins</div></div>
          <div class="tc-stat"><div class="tc-stat-val">${t.avgScore}</div><div class="tc-stat-lbl">Avg Score</div></div>
          <div class="tc-stat"><div class="tc-stat-val" style="color:var(--accent-gold)">${t.titles}</div><div class="tc-stat-lbl">Titles</div></div>
          <div class="tc-stat"><div class="tc-stat-val">${t.homeWin}%</div><div class="tc-stat-lbl">Home Win</div></div>
        </div>
      </div>
    </div>`).join('');
}

function showTeamDetail(tid){
  const t=teamById(tid);if(!t)return;
  const squadSeen = new Set();
  const squad = PLAYERS.filter(p => p.team === tid).filter(p => {
    if (squadSeen.has(p.name)) return false;
    squadSeen.add(p.name);
    return true;
  });
  const topBat=[...squad].filter(p=>p.runs>0).sort((a,b)=>b.runs-a.runs)[0];
  const topBowl=[...squad].filter(p=>p.wkts>0).sort((a,b)=>b.wkts-a.wkts)[0];
  const allTimeTitles=SEASON_WINNERS.filter(s=>s.winner===t.name).map(s=>s.year);
  $('#teamDetail').innerHTML=`
    <div class="card" style="border-color:${t.color}44;border-left:4px solid ${t.color}">
      <div class="card-inner">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap">
          <img src="${t.logo}" style="width:64px;height:64px;object-fit:contain" onerror="this.style.display='none'">
          <div style="flex:1">
            <div style="font-family:var(--font-display);font-size:26px;font-weight:900">${t.name}</div>
            <div style="font-family:var(--font-mono);font-size:12px;color:var(--text-muted);letter-spacing:2px">CAPTAIN: ${t.captain} · HOME: ${t.home} · EST. ${t.founded}</div>
            ${allTimeTitles.length?`<div style="margin-top:8px;font-family:var(--font-mono);font-size:12px;color:var(--accent-gold)">🏆 IPL Champions: ${allTimeTitles.join(', ')}</div>`:''}
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--font-display);font-size:48px;font-weight:900;color:${t.color};line-height:1">${t.titles}</div>
            <div style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted);letter-spacing:2px">TITLES</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:20px">
          ${squad.map(p=>{
            const img = getPlayerImage(p);
            return `<div style="background:var(--bg-card2);border:1px solid var(--border);border-radius:8px;padding:10px;display:flex;align-items:center;gap:8px;cursor:pointer;transition:background .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card2)'" onclick="openPlayerModal('${p.id}')">
              <img src="${img}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0" onerror="this.src = getInitialsSVG('${p.name.replace(/'/g, "\\'")}', '${p.team}')">
              <div><div style="font-size:13px;font-weight:700">${p.name.split(' ').pop()}</div><div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted)">${p.role.split('/')[0]}</div></div>
            </div>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          ${topBat?`<div class="stat-pill">🏏 Top Batter: <span class="val">${topBat.name} (${topBat.runs} runs)</span></div>`:''}
          ${topBowl?`<div class="stat-pill">🎯 Top Bowler: <span class="val">${topBowl.name} (${topBowl.wkts} wkts)</span></div>`:''}
          <div class="stat-pill">🏟 Home Win Rate: <span class="val">${t.homeWin}%</span></div>
          <div class="stat-pill">📊 Avg Score: <span class="val">${t.avgScore}</span></div>
        </div>
      </div>
    </div>`;
  $('#teamDetail').scrollIntoView({behavior:'smooth',block:'nearest'});
  // Draw team stats radar for selected team
  const tStats=[t.won/t.played*100, t.winPct, t.avgScore/3, t.homeWin, t.titles*10, parseFloat(t.nrr)*10+50];
  if(chartInstances['teamRadar']){try{chartInstances['teamRadar'].destroy();}catch(e){}}
  const radCard=$('#teamRadarCard');
  if(radCard) radCard.style.display='block';
  const radCtx=$('#teamRadar');
  if(radCtx){chartInstances['teamRadar']=new Chart(radCtx.getContext('2d'),{type:'radar',data:{labels:['Win Rate','Season Form','Avg Score','Home Strength','Titles','NRR'],datasets:[{label:t.abbr,data:tStats,borderColor:t.color,backgroundColor:t.color+'33',pointBackgroundColor:t.color,borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,scales:{r:{grid:{color:gridColor()},pointLabels:{color:'#8b9ab5',font:{size:11}},ticks:{display:false},min:0,max:100}},plugins:{legend:{display:false}}}});}
}

function renderCompare(){
  const seen = new Set();
  const dedupedPlayers = PLAYERS.filter(p => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });
  const opts = dedupedPlayers.map(p => `<option value="${p.id}">${p.name} (${teamById(p.team)?.abbr})</option>`).join('');
  $('#compareWidget').innerHTML=`
    <div class="compare-header">
      <select class="compare-select" id="cmpA">${opts}</select>
      <div class="compare-vs">VS</div>
      <select class="compare-select" id="cmpB">${opts}</select>
      <button class="filter-btn" style="height:44px;padding:0 20px;cursor:pointer" onclick="runCompare()">Compare →</button>
    </div>
    <div id="compareTableWrap"></div>`;
  if(comparePreset){
    $('#cmpA').value=comparePreset;
    const others=PLAYERS.filter(p=>p.id!==comparePreset);
    $('#cmpB').value=others[0]?.id||PLAYERS[1].id;
    comparePreset=null;
  } else {
    $('#cmpA').value=PLAYERS[0].id;
    $('#cmpB').value=PLAYERS[1].id;
  }
  runCompare();
}

function runCompare(){
  const a=playerById($('#cmpA')?.value);
  const b=playerById($('#cmpB')?.value);
  if(!a||!b)return;
  const rows=[
    {lbl:`Runs ${DATA_YEAR}`,va:a.runs,vb:b.runs},
    {lbl:'Average',va:a.avg,vb:b.avg},
    {lbl:'Strike Rate',va:a.sr,vb:b.sr},
    {lbl:'Wickets',va:a.wkts,vb:b.wkts},
    {lbl:'Economy',va:a.eco||0,vb:b.eco||0,invert:true},
    {lbl:'Fifties',va:a.fifties,vb:b.fifties},
    {lbl:'Hundreds',va:a.hundreds,vb:b.hundreds},
    {lbl:'Fantasy Pts',va:a.pts,vb:b.pts},
    {lbl:'IPL Career Runs',va:a.ipl_runs||0,vb:b.ipl_runs||0},
    {lbl:'Price (CR)',va:a.price,vb:b.price},
  ];
  const maxVals=rows.map(r=>Math.max(r.va,r.vb)||1);
  $('#compareTableWrap').innerHTML=`
    <table class="compare-stats-table">
      <thead><tr>
        <td class="cst-a" style="font-family:var(--font-display);font-size:18px;font-weight:900;color:${color(a.team)}">${a.name}</td>
        <td class="cst-lbl"></td>
        <td class="cst-b" style="font-family:var(--font-display);font-size:18px;font-weight:900;color:${color(b.team)}">${b.name}</td>
      </tr></thead>
      <tbody>${rows.map((r,i)=>`
        <tr>
          <td class="cst-a ${(!r.invert&&r.va>r.vb)||(r.invert&&r.va<r.vb&&r.va>0)?'leader':''}">${r.va||'—'}</td>
          <td class="cst-lbl">${r.lbl}</td>
          <td class="cst-b ${(!r.invert&&r.vb>r.va)||(r.invert&&r.vb<r.va&&r.vb>0)?'leader':''}">${r.vb||'—'}</td>
        </tr>
        <tr style="background:var(--bg-card2)"><td colspan="3" style="padding:3px 8px">
          <div style="display:flex;gap:4px;align-items:center">
            <div style="width:${((r.va/maxVals[i])*45).toFixed(1)}%;height:3px;background:${color(a.team)};border-radius:99px;margin-left:auto"></div>
            <div style="width:8px"></div>
            <div style="width:${((r.vb/maxVals[i])*45).toFixed(1)}%;height:3px;background:${color(b.team)};border-radius:99px"></div>
          </div>
        </td></tr>`).join('')}
      </tbody>
    </table>`;

  if(chartInstances['chartRadarA']){try{chartInstances['chartRadarA'].destroy();}catch(e){}}
  const norm=(v,mx)=>mx>0?Math.round((v/mx)*100):0;
  chartInstances['chartRadarA']=new Chart($('#chartRadarA').getContext('2d'),{
    type:'radar',
    data:{
      labels:['Runs','Wickets','Average','Strike Rate','Fantasy Pts','Price'],
      datasets:[
        {label:a.name,data:[norm(a.runs,800),norm(a.wkts,25),norm(a.avg,70),norm(a.sr,200),norm(a.pts,400),norm(a.price,25)],borderColor:color(a.team),backgroundColor:color(a.team)+'33',pointBackgroundColor:color(a.team),borderWidth:2},
        {label:b.name,data:[norm(b.runs,800),norm(b.wkts,25),norm(b.avg,70),norm(b.sr,200),norm(b.pts,400),norm(b.price,25)],borderColor:color(b.team),backgroundColor:color(b.team)+'33',pointBackgroundColor:color(b.team),borderWidth:2},
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,scales:{r:{grid:{color:gridColor()},pointLabels:{color:'#8b9ab5',font:{size:12}},ticks:{display:false}}},plugins:{legend:{position:'bottom'}}}
  });

  if(chartInstances['chartFormCompare']){try{chartInstances['chartFormCompare'].destroy();}catch(e){}}
  const seededRnd=(seed,i)=>{const x=Math.sin(seed*9301+i*49297+233)*49279;return x-(x|0);};
  const baseA=a.runs>0?a.runs/7:a.wkts*4;
  const baseB=b.runs>0?b.runs/7:b.wkts*4;
  chartInstances['chartFormCompare']=new Chart($('#chartFormCompare').getContext('2d'),{
    type:'line',
    data:{
      labels:['M1','M2','M3','M4','M5','M6','M7'],
      datasets:[
        {label:a.name,data:a.form.map((f,i)=>Math.max(0,Math.round(baseA*(f==='w'?1.3:f==='l'?0.7:1)+(seededRnd(a.pts,i)*15-7)))),borderColor:color(a.team),backgroundColor:'transparent',tension:0.4,pointBackgroundColor:color(a.team),borderWidth:2},
        {label:b.name,data:b.form.map((f,i)=>Math.max(0,Math.round(baseB*(f==='w'?1.3:f==='l'?0.7:1)+(seededRnd(b.pts,i+7)*15-7)))),borderColor:color(b.team),backgroundColor:'transparent',tension:0.4,pointBackgroundColor:color(b.team),borderWidth:2},
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},scales:{x:{grid:{color:gridColor()}},y:{grid:{color:gridColor()},beginAtZero:true}}}
  });
}

/* ── VENUES ── */
function renderVenues(){
  $('#venueGrid').innerHTML=VENUES.map(v=>`
    <div class="venue-card">
      <div class="venue-img-placeholder" style="padding:0;overflow:hidden">
        <img src="${v.img}" alt="${v.name}" class="venue-img" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=venue-name-big>${v.city.split(' ')[0]}</div><span class=venue-icon>🏟</span>'">
      </div>
      <div class="venue-body">
        <div class="venue-name">${v.name}</div>
        <div class="venue-city">${v.city} · Capacity: ${v.cap.toLocaleString()}</div>
        <div class="venue-stats">
          <div class="venue-stat"><div class="venue-stat-val" style="color:var(--accent-gold)">${v.avgScore}</div><div class="venue-stat-lbl">Avg Score</div></div>
          <div class="venue-stat"><div class="venue-stat-val" style="color:var(--accent-red)">${v.highScore}</div><div class="venue-stat-lbl">High Score</div></div>
          <div class="venue-stat"><div class="venue-stat-val">${v.chaseWin}%</div><div class="venue-stat-lbl">Chase Wins</div></div>
        </div>
        <div style="margin-top:10px;font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:4px;display:inline-block;background:rgba(245,166,35,.1);color:var(--accent-gold);letter-spacing:1px">${v.pitchType}</div>
      </div>
    </div>`).join('');

  chartInstances['chartVenueScores']=new Chart($('#chartVenueScores').getContext('2d'),{
    type:'bar',
    data:{
      labels:VENUES.map(v=>v.city),
      datasets:[
        {label:'Avg Score',data:VENUES.map(v=>v.avgScore),backgroundColor:'#f5a62388',borderColor:'#f5a623',borderWidth:2,borderRadius:6},
        {label:'High Score',data:VENUES.map(v=>v.highScore),backgroundColor:'#00d4ff33',borderColor:'#00d4ff',borderWidth:2,borderRadius:6,type:'line',fill:false,tension:0.4,pointBackgroundColor:'#00d4ff'},
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top'}},scales:{x:{grid:{color:gridColor()}},y:{grid:{color:gridColor()},min:140}}}
  });
}

/* ── PREDICTOR ── */
function renderPredictor(){
  const teamOpts=TEAMS.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  const venueOpts=VENUES.map(v=>`<option value="${v.name}">${v.name}</option>`).join('');
  $('#predTeamA').innerHTML=teamOpts;
  $('#predTeamB').innerHTML=teamOpts;
  $('#predTeamA').value='rcb';
  $('#predTeamB').value='pbks';
  $('#predVenue').innerHTML=venueOpts;
  $('#predResult').style.display='none';
  // Remove old listener & add new
  const btn=$('#predictBtn');
  btn.replaceWith(btn.cloneNode(true));
  $('#predictBtn').addEventListener('click',runPredictor);
}

function runPredictor() {
  const tA = teamById($('#predTeamA').value);
  const tB = teamById($('#predTeamB').value);
  const venue = $('#predVenue').value;
  const toss = $('#predToss').value;

  if (tA.id === tB.id) {
    alert('Please select two different teams.');
    return;
  }

  // 1. Head-to-Head (H2H) Factor
  const h2h = getH2H(tA.id, tB.id);
  const h2hTotal = h2h.a + h2h.b;
  const h2hRateA = h2hTotal > 0 ? h2h.a / h2hTotal : 0.5;

  // 2. Season Form Factor (Win %)
  const formA = tA.won / tA.played;
  const formB = tB.won / tB.played;

  // 3. Venue Suitability (Home vs Away)
  let venueAdjA = 0.5;
  if (tA.home === venue) venueAdjA = tA.homeWin / 100;
  else if (tB.home === venue) venueAdjA = 1 - (tB.homeWin / 100);

  // 4. Batting Depth Factor (Runs of top 6 batters in squad)
  const squadA = PLAYERS.filter(p => p.team === tA.id);
  const squadB = PLAYERS.filter(p => p.team === tB.id);

  const batDepthA = squadA.filter(p => p.role === 'Batter' || p.role.includes('WK')).reduce((sum, p) => sum + p.runs, 0) / 6;
  const batDepthB = squadB.filter(p => p.role === 'Batter' || p.role.includes('WK')).reduce((sum, p) => sum + p.runs, 0) / 6;
  const batRatio = batDepthA + batDepthB > 0 ? batDepthA / (batDepthA + batDepthB) : 0.5;

  // 5. Bowling Strength Factor (Wickets of bowlers & ARs)
  const bowlA = squadA.filter(p => p.role === 'Bowler' || p.role === 'All-Rounder').reduce((sum, p) => sum + p.wkts, 0) / 4;
  const bowlB = squadB.filter(p => p.role === 'Bowler' || p.role === 'All-Rounder').reduce((sum, p) => sum + p.wkts, 0) / 4;
  const bowlRatio = bowlA + bowlB > 0 ? bowlA / (bowlA + bowlB) : 0.5;

  // 6. Toss Factor
  const tossA = toss === 'A' ? 0.05 : -0.05;

  // Combine weights: H2H: 20%, Form: 25%, Venue: 15%, Batting: 20%, Bowling: 20%
  let scoreA = (h2hRateA * 0.20) + (formA / (formA + formB || 1) * 0.25) + (venueAdjA * 0.15) + (batRatio * 0.20) + (bowlRatio * 0.20) + tossA;
  let pA = Math.round(scoreA * 100);
  pA = Math.min(85, Math.max(15, pA)); // cap between 15% and 85%
  const pB = 100 - pA;

  const confidence = Math.abs(pA - 50) * 2 + 50; // confidence % (50% to 100%)

  $('#predResult').style.display = 'block';
  $('#probBarWrap').innerHTML = `
    <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">Engine Match Win Probability</div>
    <div class="prob-teams animate-reveal">
      <div><div class="prob-team" style="color:${tA.color}">${tA.abbr}</div><div class="prob-pct" style="color:${tA.color}">${pA}%</div></div>
      <div style="font-family:var(--font-display);font-size:18px;font-weight:900;color:var(--text-muted)">VS</div>
      <div style="text-align:right"><div class="prob-team" style="color:${tB.color}">${tB.abbr}</div><div class="prob-pct" style="color:${tB.color}">${pB}%</div></div>
    </div>
    <div class="prob-track"><div class="prob-fill" style="width:${pA}%;background:linear-gradient(90deg,${tA.color},${tB.color})"></div></div>
    <div class="prob-labels"><span>${tA.name}</span><span>${tB.name}</span></div>`;

  if (chartInstances['chartPredPie']) { try { chartInstances['chartPredPie'].destroy(); } catch(e) {} }
  chartInstances['chartPredPie'] = new Chart($('#chartPredPie').getContext('2d'), {
    type: 'doughnut',
    data: { labels: [tA.abbr, tB.abbr], datasets: [{ data: [pA, pB], backgroundColor: [tA.color + 'cc', tB.color + 'cc'], borderColor: [tA.color, tB.color], borderWidth: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom' } } }
  });

  if (chartInstances['chartH2H']) { try { chartInstances['chartH2H'].destroy(); } catch(e) {} }
  chartInstances['chartH2H'] = new Chart($('#chartH2H').getContext('2d'), {
    type: 'bar',
    data: { labels: [tA.abbr, tB.abbr], datasets: [{ label: 'H2H Wins', data: [h2h.a, h2h.b], backgroundColor: [tA.color + 'cc', tB.color + 'cc'], borderColor: [tA.color, tB.color], borderWidth: 2, borderRadius: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: gridColor() }, beginAtZero: true } } }
  });

  const winner = pA > pB ? tA : tB;
  const strengths = [];
  const reasons = [];

  if (h2hRateA > 0.55) strengths.push(`${tA.abbr} H2H historical edge`);
  else if (h2hRateA < 0.45) strengths.push(`${tB.abbr} H2H historical edge`);

  if (formA > formB + 0.08) strengths.push(`${tA.abbr} superior season form`);
  else if (formB > formA + 0.08) strengths.push(`${tB.abbr} superior season form`);

  if (tA.home === venue) strengths.push(`${tA.abbr} home ground fortress advantage`);
  else if (tB.home === venue) strengths.push(`${tB.abbr} home ground fortress advantage`);

  if (batDepthA > batDepthB + 30) strengths.push(`${tA.abbr} deeper batting lineup`);
  else if (batDepthB > batDepthA + 30) strengths.push(`${tB.abbr} deeper batting lineup`);

  if (bowlA > bowlB + 1.5) strengths.push(`${tA.abbr} clinical wicket-taking bowling unit`);
  else if (bowlB > bowlA + 1.5) strengths.push(`${tB.abbr} clinical wicket-taking bowling unit`);

  reasons.push(`Head-to-head record: ${tA.abbr} ${h2h.a} wins vs ${tB.abbr} ${h2h.b} wins.`);
  reasons.push(`Average runs depth: ${tA.abbr} ${Math.round(batDepthA)} runs vs ${tB.abbr} ${Math.round(batDepthB)} runs.`);
  reasons.push(`Bowling wickets strength: ${tA.abbr} ${bowlA.toFixed(1)} avg wkts vs ${tB.abbr} ${bowlB.toFixed(1)} avg wkts.`);
  reasons.push(`Tactical toss boost: ${toss === 'A' ? tA.abbr : tB.abbr} gets a +5% confidence boost from winning the toss.`);

  $('#predInsights').innerHTML = `
    <div class="insight-card animate-reveal" style="border-left-color:${winner.color}; background: var(--bg-card);">
      <div class="insight-head">🏆 Prediction: <span style="color:${winner.color}">${winner.name} to win</span></div>
      <div style="font-family: var(--font-mono); font-size: 13px; margin: 6px 0 10px; color: var(--accent-cyan)">Engine Confidence Score: ${confidence}%</div>
      <div class="insight-body">
        ${strengths.length > 0 ? `<strong>Tactical Advantages:</strong> <ul style="margin: 6px 0 12px 18px;">${strengths.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
        <strong>Statistical Rationale:</strong>
        <ul style="margin: 6px 0 0 18px; line-height: 1.5;">
          ${reasons.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
      <span class="insight-tag tag-hot">STATISTICAL MATCH ENGINE</span>
    </div>`;
}

/* ── FANTASY XI ── */
let currentSquad=[];
let currentPool=[];
let currentMatch=null;

function renderFantasy() {
  const matchSelect = $('#fantasyMatch');
  if (matchSelect && !matchSelect.innerHTML) {
    matchSelect.innerHTML = MATCHES.map(m => `<option value="${m.id}">${m.label}</option>`).join('');

    // Wire generate button
    const genBtn = $('#fantasyGen');
    if (genBtn) {
      genBtn.replaceWith(genBtn.cloneNode(true));
      $('#fantasyGen').addEventListener('click', buildFantasyXI);
    }
  }
  if (currentSquad.length > 0) {
    renderPitch();
  } else {
    $('#fantasyPitch').innerHTML = `
      <div class="pitch-bg"></div>
      <div style="text-align:center;padding:40px;color:var(--text-muted);font-family:var(--font-mono);font-size:13px;letter-spacing:2px;text-transform:uppercase">Select a match &amp; generate your Fantasy XI</div>
    `;
    $('#fantasyStats').innerHTML = '';
  }
}

function buildFantasyXI(){
  const matchId=$('#fantasyMatch').value;
  const match=MATCHES.find(m=>m.id===matchId);
  if(!match)return;
  currentMatch=match;

  const seen = new Set();
  const pool=PLAYERS.filter(p=>{
    if (seen.has(p.name)) return false;
    const isTeam = p.team===match.t1||p.team===match.t2;
    if (isTeam) seen.add(p.name);
    return isTeam;
  }).sort((a,b)=>b.pts-a.pts);
  currentPool=pool;

  // Build balanced XI
  const wks=pool.filter(p=>p.role.includes('WK')).slice(0,2);
  const bats=pool.filter(p=>p.role==='Batter'&&!p.role.includes('WK')).slice(0,4);
  const ars=pool.filter(p=>p.role==='All-Rounder').slice(0,3);
  const bwls=pool.filter(p=>p.role==='Bowler').slice(0,4);
  let squad=[...wks.slice(0,1),...bats.slice(0,4),...ars.slice(0,3),...bwls.slice(0,3)];
  if(squad.length<11){
    const used=new Set(squad.map(p=>p.id));
    const extras=pool.filter(p=>!used.has(p.id)).slice(0,11-squad.length);
    squad=[...squad,...extras];
  }
  squad=squad.slice(0,11).sort((a,b)=>b.pts-a.pts);
  currentSquad=squad;
  renderPitch();
}

function renderPitch(){
  const squad=currentSquad;
  if(!squad.length)return;
  const captain=squad[0],vc=squad[1];
  const wkRow=squad.filter(p=>p.role.includes('WK'));
  const batRow=squad.filter(p=>p.role==='Batter'&&!p.role.includes('WK'));
  const arRow=squad.filter(p=>p.role==='All-Rounder');
  const bwRow=squad.filter(p=>p.role==='Bowler');

  const ppRow=(players,label)=>{
    if(!players.length)return'';
    return`<div class="pitch-section-label">${label}</div>
    <div class="pitch-row animate-reveal">${players.map(p=>{
      const isCap=p.id===captain.id,isVc=p.id===vc.id;
      const tm=teamById(p.team);
      const img = getPlayerImage(p);
      return`<div class="pitch-player" onclick="openSwapModal('${p.id}')">
        <div class="pp-avatar" style="border-color:${tm.color}"><img src="${img}" alt="${p.name}" loading="lazy" onerror="this.src = getInitialsSVG('${p.name.replace(/'/g, "\\'")}', '${p.team}')"></div>
        <div class="pp-name">${p.name.split(' ').slice(-1)[0]}</div>
        <div class="pp-pts">${p.pts}pts</div>
        ${isCap?'<div class="pp-badge">C</div>':isVc?'<div class="pp-badge" style="background:var(--accent-cyan);color:#000">VC</div>':''}
        <div class="pp-swap-hint">TAP TO SWAP</div>
      </div>`;
    }).join('')}</div>`;
  };

  $('#fantasyPitch').innerHTML=`
    <div class="pitch-bg"></div>
    ${ppRow(wkRow,'⚡ WICKET KEEPER')}
    ${ppRow(batRow,'🏏 BATTERS')}
    ${ppRow(arRow,'🔄 ALL-ROUNDERS')}
    ${ppRow(bwRow,'🎯 BOWLERS')}`;

  const totalPts=squad.reduce((s,p)=>s+p.pts,0);
  const totalVal=squad.reduce((s,p)=>s+p.price,0);
  $('#fantasyStats').innerHTML=`
    <div class="animate-reveal" style="display:flex;gap:12px;flex-wrap:wrap;padding:16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg)">
      <div class="stat-pill">⭐ Captain: <span class="val">${captain.name} (×2)</span></div>
      <div class="stat-pill">🔸 Vice-Captain: <span class="val">${vc.name} (×1.5)</span></div>
      <div class="stat-pill">💎 Total Points: <span class="val">${totalPts}</span></div>
      <div class="stat-pill">💰 Team Value: <span class="val">₹${totalVal}CR</span></div>
      <div class="stat-pill">🏏 Match: <span class="val">${currentMatch?.label||''}</span></div>
    </div>`;
}

function openSwapModal(pid){
  const p=playerById(pid);if(!p)return;
  const squadIds=new Set(currentSquad.map(x=>x.id));
  const alts=currentPool.filter(x=>!squadIds.has(x.id)&&(x.role===p.role||(p.role.includes('WK')&&x.role.includes('WK')))).sort((a,b)=>b.pts-a.pts).slice(0,6);
  $('#swapModalTitle').textContent=`Swap ${p.name}`;
  $('#swapAlternatives').innerHTML=`
    <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">ROLE: ${p.role} · SELECT REPLACEMENT</div>
    ${!alts.length?'<div style="color:var(--text-muted);padding:16px;text-align:center">No alternatives available for this role</div>':alts.map(alt=>{
      const tm=teamById(alt.team);
      const mainStat=alt.runs>0?`${alt.runs} runs`:alt.wkts>0?`${alt.wkts} wkts`:'—';
      const img = getPlayerImage(alt);
      return`<div class="swap-alt-item" onclick="doSwap('${pid}','${alt.id}')">
        <img src="${img}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid ${tm.color};flex-shrink:0" onerror="this.src = getInitialsSVG('${alt.name.replace(/'/g, "\\'")}', '${alt.team}')">
        <div style="flex:1">
          <div style="font-weight:700;font-size:14px">${alt.name}</div>
          <div style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted)">${tm.abbr} · ${alt.role} · ${mainStat}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--font-display);font-size:18px;font-weight:900;color:var(--accent-gold)">${alt.pts}</div>
          <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted)">PTS</div>
        </div>
      </div>`;
    }).join('')}`;
  $('#swapModal').classList.add('open');
}

function doSwap(outId,inId){
  const inPlayer=playerById(inId);if(!inPlayer)return;
  currentSquad=currentSquad.map(p=>p.id===outId?inPlayer:p);
  currentSquad.sort((a,b)=>b.pts-a.pts);
  $('#swapModal').classList.remove('open');
  renderPitch();
}
document.getElementById('swapModal').addEventListener('click',e=>{if(e.target===document.getElementById('swapModal'))document.getElementById('swapModal').classList.remove('open');});



/* ── INSIGHTS ── */
function renderInsights(){
  // Momentum: top 5 teams by points this season
  const topTeams=[...TEAMS].sort((a,b)=>b.pts-a.pts).slice(0,5);
  const weeks=['Wk1','Wk2','Wk3','Wk4','Wk5','Wk6','Wk7'];
  const momentumData={
    'rcb':[58,66,74,82,78,87,92],'pbks':[52,62,70,68,72,74,78],
    'kkr':[60,65,72,80,75,85,88],'mi':[55,60,68,72,70,76,80],
    'srh':[48,55,62,58,66,64,68],'rr':[44,52,56,60,62,58,62],
    'csk':[50,48,54,62,58,64,60],'gt':[42,48,50,46,52,50,54],
    'dc':[40,44,48,44,50,46,48],'lsg':[36,40,42,38,44,40,38],
  };
  if(chartInstances['chartMomentum']){try{chartInstances['chartMomentum'].destroy();}catch(e){}}
  chartInstances['chartMomentum']=new Chart($('#chartMomentum').getContext('2d'),{
    type:'line',
    data:{labels:weeks,datasets:topTeams.map(t=>({label:t.abbr,data:momentumData[t.id]||weeks.map((_,i)=>Math.round(40+(t.winPct/100)*40+i*2)),borderColor:t.color,backgroundColor:'transparent',tension:0.4,pointBackgroundColor:t.color,borderWidth:2,pointRadius:4}))},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},scales:{x:{grid:{color:gridColor()}},y:{grid:{color:gridColor()},beginAtZero:false,min:30,title:{display:true,text:'Win Rate %'}}}}
  });

  // Title distribution pie
  const titleCounts={};
  SEASON_WINNERS.forEach(s=>{titleCounts[s.winner]=(titleCounts[s.winner]||0)+1;});
  const titleEntries=Object.entries(titleCounts).sort((a,b)=>b[1]-a[1]);
  const titleColors={'Mumbai Indians':'#004EA0','Chennai Super Kings':'#F7A721','Kolkata Knight Riders':'#3B2F7F','Rajasthan Royals':'#EA1A85','Sunrisers Hyderabad':'#F26522','Gujarat Titans':'#1C4799','Deccan Chargers':'#888888','Rising Pune Supergiant':'#9B59B6','Royal Challengers Bengaluru':'#C8102E','Punjab Kings':'#D71920'};
  if(chartInstances['chartTitles']){try{chartInstances['chartTitles'].destroy();}catch(e){}}
  chartInstances['chartTitles']=new Chart($('#chartTitles').getContext('2d'),{
    type:'doughnut',
    data:{labels:titleEntries.map(e=>e[0].split(' ').pop()),datasets:[{data:titleEntries.map(e=>e[1]),backgroundColor:titleEntries.map(e=>titleColors[e[0]]||'#888'),borderColor:titleEntries.map(e=>titleColors[e[0]]||'#888'),borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'55%',plugins:{legend:{position:'right'}}}
  });

  // Run rate progression by season
  const rrData=[7.8,7.9,8.1,8.0,8.3,8.2,8.5,8.4,8.7,8.6,8.9,8.8,9.1,9.3,9.0,9.5,9.8,10.1];
  if(chartInstances['chartRunRate']){try{chartInstances['chartRunRate'].destroy();}catch(e){}}
  chartInstances['chartRunRate']=new Chart($('#chartRunRate').getContext('2d'),{
    type:'line',
    data:{labels:SEASON_WINNERS.map(s=>s.year),datasets:[{label:'Avg Run Rate',data:rrData,borderColor:'#f5a623',backgroundColor:'rgba(245,166,35,.1)',fill:true,tension:0.4,pointBackgroundColor:'#f5a623',borderWidth:2,pointRadius:3}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:gridColor()}},y:{grid:{color:gridColor()},min:7.5,title:{display:true,text:'RPO'}}}}
  });

  $('#strategyCards').innerHTML=STRATEGY_INSIGHTS.map(s=>`
    <div class="insight-card">
      <div class="insight-icon">${s.icon}</div>
      <div class="insight-head">${s.head}</div>
      <div class="insight-body">${s.body}</div>
      <span class="insight-tag tag-${s.tag}">${s.tag.toUpperCase()}</span>
    </div>`).join('');


    // Moneyball Scatter Chart (Price vs Pts)
    if(chartInstances['chartMoneyball']){try{chartInstances['chartMoneyball'].destroy();}catch(e){}}
    const scatterData = PLAYERS.map(p => {
        let pts = p.pts || (p.runs + p.wkts * 25);
        const price = p.price || Number((2 + (pts % 1500) / 100).toFixed(1));
        return {
            x: price,
            y: pts,
            r: 6,
            player: p.name,
            teamColor: teamById(p.team)?.color || '#fff'
        };
    });

    chartInstances['chartMoneyball'] = new Chart($('#chartMoneyball').getContext('2d'), {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Players',
                data: scatterData,
                backgroundColor: scatterData.map(d => d.teamColor),
                borderColor: 'rgba(255,255,255,0.2)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            return ctx.raw.player + ': ' + ctx.raw.x.toFixed(1) + ' Cr / ' + ctx.raw.y + ' Pts';
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: gridColor() }, title: { display: true, text: 'Auction Price (Crores)' } },
                y: { grid: { color: gridColor() }, title: { display: true, text: 'Fantasy Points / Impact' } }
            }
        }
    });

  $('#trendCards').innerHTML=TREND_INSIGHTS.map(t=>`
    <div class="trend-item">
      <div class="trend-number">${t.n}</div>
      <div class="trend-head">${t.head}</div>
      <div class="trend-desc">${t.desc}</div>
    </div>`).join('');
}

/* ── DYNAMIC MATCH SIMULATOR ── */
document.getElementById('simulateBtn')?.addEventListener('click', () => {
    const tA = $('#predTeamA').value;
    const tB = $('#predTeamB').value;
    const log = $('#simLog');
    log.style.display = 'block';
    log.innerHTML = '<div>Initializing simulation engine...</div>';

    let over = 0;
    let balls = 0;
    let score = 0;
    let wkts = 0;

    const teamNameA = teamById(tA)?.abbr || 'Team A';
    const teamNameB = teamById(tB)?.abbr || 'Team B';

    log.innerHTML += `<div><strong style="color:#fff">${teamNameA} is batting against ${teamNameB}</strong></div>`;

    document.getElementById('simulateBtn').disabled = true;

    const interval = setInterval(() => {
        if(wkts >= 10 || over >= 20) {
            clearInterval(interval);
            log.innerHTML += `<div style="color:var(--accent-gold); margin-top:10px; font-weight:bold;">INNINGS COMPLETE: ${teamNameA} finished on ${score}/${wkts} (${over}.${balls} Overs)</div>`;
            document.getElementById('simulateBtn').disabled = false;
            log.scrollTop = log.scrollHeight;
            return;
        }

        balls++;
        const rand = Math.random();
        let event = '';
        let runsAdded = 0;

        // Very basic outcome probability
        if(rand < 0.05) {
            wkts++;
            event = '<span style="color:var(--accent-red)">WICKET! Clean bowled.</span>';
        } else if (rand < 0.15) {
            runsAdded = 6;
            event = '<span style="color:var(--accent-cyan)">SIX! Massive hit into the stands.</span>';
        } else if (rand < 0.3) {
            runsAdded = 4;
            event = '<span style="color:var(--accent-gold)">FOUR! Smashed through the covers.</span>';
        } else if (rand < 0.5) {
            runsAdded = 2;
            event = '<span style="color:#fff">2 runs. Good running between the wickets.</span>';
        } else if (rand < 0.8) {
            runsAdded = 1;
            event = '<span style="color:var(--text-secondary)">1 run. Pushed to deep midwicket.</span>';
        } else {
            event = '<span style="color:var(--text-secondary)">Dot ball. Beaten.</span>';
        }

        score += runsAdded;

        log.innerHTML += `<div><strong>${over}.${balls}</strong>: ${event} (Score: ${score}/${wkts})</div>`;

        if(balls === 6) {
            over++;
            balls = 0;
            log.innerHTML += `<div style="margin:5px 0; border-bottom:1px dashed var(--border);">End of Over ${over}</div>`;
        }

        log.scrollTop = log.scrollHeight;
    }, 400); // speed of simulation
});
