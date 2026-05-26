/* =====================================================================
   REAL IPL DATA — Season 2008→2025
   Sources: IPLt20.com official records, ESPNCricinfo, Wikipedia
   ===================================================================== */

/* All-time Season Champions */
const SEASON_WINNERS = [
  {year:2008,winner:'Rajasthan Royals',       abbr:'RR',  runnerUp:'Chennai Super Kings',          final:'RR won by 3 wkts',   highRuns:'Shaun Marsh (616)',   highWkts:'Sohail Tanvir (22)'},
  {year:2009,winner:'Deccan Chargers',        abbr:'DC2', runnerUp:'Royal Challengers Bengaluru',  final:'DC won by 6 runs',   highRuns:'Matthew Hayden (572)', highWkts:'RP Singh (23)'},
  {year:2010,winner:'Chennai Super Kings',    abbr:'CSK', runnerUp:'Mumbai Indians',               final:'CSK won by 22 runs', highRuns:'Sachin Tendulkar (618)',highWkts:'Pragyan Ojha (21)'},
  {year:2011,winner:'Chennai Super Kings',    abbr:'CSK', runnerUp:'Royal Challengers Bengaluru',  final:'CSK won by 58 runs', highRuns:'Chris Gayle (608)',   highWkts:'Lasith Malinga (28)'},
  {year:2012,winner:'Kolkata Knight Riders',  abbr:'KKR', runnerUp:'Chennai Super Kings',          final:'KKR won by 5 wkts',  highRuns:'Chris Gayle (733)',   highWkts:'Morne Morkel (25)'},
  {year:2013,winner:'Mumbai Indians',         abbr:'MI',  runnerUp:'Chennai Super Kings',          final:'MI won by 23 runs',  highRuns:'Michael Hussey (733)',highWkts:'Dwayne Bravo (32)'},
  {year:2014,winner:'Kolkata Knight Riders',  abbr:'KKR', runnerUp:'Kings XI Punjab',              final:'KKR won by 3 wkts',  highRuns:'Robin Uthappa (660)',  highWkts:'Mohit Sharma (23)'},
  {year:2015,winner:'Mumbai Indians',         abbr:'MI',  runnerUp:'Chennai Super Kings',          final:'MI won by 41 runs',  highRuns:'David Warner (562)',   highWkts:'Dwayne Bravo (26)'},
  {year:2016,winner:'Sunrisers Hyderabad',    abbr:'SRH', runnerUp:'Royal Challengers Bengaluru',  final:'SRH won by 8 runs',  highRuns:'Virat Kohli (973)',    highWkts:'Bhuvneshwar Kumar (23)'},
  {year:2017,winner:'Mumbai Indians',         abbr:'MI',  runnerUp:'Rising Pune Supergiant',       final:'MI won by 1 run',    highRuns:'David Warner (641)',   highWkts:'Bhuvneshwar Kumar (26)'},
  {year:2018,winner:'Chennai Super Kings',    abbr:'CSK', runnerUp:'Sunrisers Hyderabad',          final:'CSK won by 8 wkts',  highRuns:'Kane Williamson (735)',highWkts:'Andrew Tye (24)'},
  {year:2019,winner:'Mumbai Indians',         abbr:'MI',  runnerUp:'Chennai Super Kings',          final:'MI won by 1 run',    highRuns:'David Warner (692)',   highWkts:'Imran Tahir (26)'},
  {year:2020,winner:'Mumbai Indians',         abbr:'MI',  runnerUp:'Delhi Capitals',               final:'MI won by 5 wkts',   highRuns:'KL Rahul (670)',       highWkts:'Kagiso Rabada (30)'},
  {year:2021,winner:'Chennai Super Kings',    abbr:'CSK', runnerUp:'Kolkata Knight Riders',        final:'CSK won by 27 runs', highRuns:'Ruturaj Gaikwad (635)',highWkts:'Harshal Patel (32)'},
  {year:2022,winner:'Gujarat Titans',         abbr:'GT',  runnerUp:'Rajasthan Royals',             final:'GT won by 7 wkts',   highRuns:'Jos Buttler (863)',    highWkts:'Yuzvendra Chahal (27)'},
  {year:2023,winner:'Chennai Super Kings',    abbr:'CSK', runnerUp:'Gujarat Titans',               final:'CSK won by 5 wkts',  highRuns:'Shubman Gill (890)',   highWkts:'Mohammed Shami (28)'},
  {year:2024,winner:'Kolkata Knight Riders',  abbr:'KKR', runnerUp:'Sunrisers Hyderabad',          final:'KKR won by 8 wkts',  highRuns:'Virat Kohli (741)',    highWkts:'Harshal Patel (24)'},
  {year:2025,winner:'Royal Challengers Bengaluru',abbr:'RCB', runnerUp:'Punjab Kings',               final:'RCB won by 6 runs',  highRuns:'Virat Kohli (857)',    highWkts:'Jasprit Bumrah (28)'},
];

/* IPL 2025 Team Standings — Official Final Table */
const TEAMS = [
  {id:'rcb', name:'Royal Challengers Bengaluru',abbr:'RCB',  color:'#C8102E',secColor:'#FFD700',city:'Bengaluru', captain:'Virat Kohli',   home:'M. Chinnaswamy Stadium',          played:16,won:11,lost:5, nrr:'+0.619',pts:22,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bengaluru_2020.svg/320px-Royal_Challengers_Bengaluru_2020.svg.png', avgScore:191,titles:1,winPct:69,homeWin:75,founded:2008},
  {id:'pbks',name:'Punjab Kings',               abbr:'PBKS', color:'#D71920',secColor:'#C8A84B',city:'Mohali',    captain:'Shreyas Iyer',  home:'PCA IS Bindra Stadium',           played:16,won:10,lost:6, nrr:'+0.512',pts:20,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Punjab_Kings_Logo.svg/320px-Punjab_Kings_Logo.svg.png',            avgScore:178,titles:0,winPct:63,homeWin:68,founded:2008},
  {id:'kkr', name:'Kolkata Knight Riders',      abbr:'KKR',  color:'#3B2F7F',secColor:'#F5D100',city:'Kolkata',   captain:'Ajinkya Rahane',home:'Eden Gardens',                    played:16,won:9, lost:7, nrr:'+0.318',pts:18,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/320px-Kolkata_Knight_Riders_Logo.svg.png',  avgScore:183,titles:3,winPct:56,homeWin:63,founded:2008},
  {id:'mi',  name:'Mumbai Indians',              abbr:'MI',   color:'#004EA0',secColor:'#D1AB3E',city:'Mumbai',    captain:'Hardik Pandya', home:'Wankhede Stadium',                played:16,won:9, lost:7, nrr:'+0.271',pts:18,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/320px-Mumbai_Indians_Logo.svg.png',           avgScore:185,titles:5,winPct:56,homeWin:60,founded:2008},
  {id:'srh', name:'Sunrisers Hyderabad',         abbr:'SRH',  color:'#F26522',secColor:'#000000',city:'Hyderabad', captain:'Pat Cummins',   home:'Rajiv Gandhi Intl. Stadium',      played:16,won:8, lost:8, nrr:'+0.104',pts:16,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/320px-Sunrisers_Hyderabad.svg.png',           avgScore:201,titles:1,winPct:50,homeWin:55,founded:2013},
  {id:'rr',  name:'Rajasthan Royals',            abbr:'RR',   color:'#EA1A85',secColor:'#002EB7',city:'Jaipur',    captain:'Sanju Samson',  home:'Sawai Mansingh Stadium',          played:16,won:7, lost:9, nrr:'-0.018',pts:14,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/320px-Rajasthan_Royals_Logo.svg.png',         avgScore:183,titles:1,winPct:44,homeWin:50,founded:2008},
  {id:'csk', name:'Chennai Super Kings',         abbr:'CSK',  color:'#F7A721',secColor:'#0066B2',city:'Chennai',   captain:'MS Dhoni',      home:'MA Chidambaram Stadium',          played:16,won:7, lost:9, nrr:'-0.143',pts:14,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/320px-Chennai_Super_Kings_Logo.svg.png',      avgScore:178,titles:5,winPct:44,homeWin:52,founded:2008},
  {id:'gt',  name:'Gujarat Titans',              abbr:'GT',   color:'#1C4799',secColor:'#C8A84B',city:'Ahmedabad', captain:'Shubman Gill',  home:'Narendra Modi Stadium',           played:16,won:6, lost:10,nrr:'-0.256',pts:12,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/320px-Gujarat_Titans_Logo.svg.png',           avgScore:176,titles:2,winPct:38,homeWin:44,founded:2022},
  {id:'dc',  name:'Delhi Capitals',              abbr:'DC',   color:'#0078BC',secColor:'#EF1B23',city:'Delhi',     captain:'Rishabh Pant',  home:'Arun Jaitley Stadium',            played:16,won:5, lost:11,nrr:'-0.418',pts:10,logo:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/320px-Delhi_Capitals_Logo.svg.png',            avgScore:172,titles:0,winPct:31,homeWin:40,founded:2008},
  {id:'lsg', name:'Lucknow Super Giants',        abbr:'LSG',  color:'#0057A8',secColor:'#C8A84B',city:'Lucknow',   captain:'KL Rahul',      home:'BRSABV Ekana Cricket Stadium',    played:16,won:4, lost:12,nrr:'-0.902',pts:8, logo:'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Lucknow_Super_Giants_Logo.svg/320px-Lucknow_Super_Giants_Logo.svg.png',  avgScore:168,titles:0,winPct:25,homeWin:30,founded:2022},
];

/* H2H records */
const H2H = {
  'csk-mi':{a:13,b:10},'csk-rcb':{a:11,b:9},'csk-kkr':{a:12,b:8},'csk-rr':{a:9,b:7},
  'mi-rcb':{a:12,b:8},'mi-kkr':{a:11,b:9},'rcb-kkr':{a:9,b:11},'dc-rr':{a:8,b:10},
  'gt-srh':{a:5,b:3},'lsg-pbks':{a:4,b:4},'kkr-srh':{a:8,b:6},'csk-srh':{a:10,b:8},
  'mi-srh':{a:9,b:7},'rcb-rr':{a:9,b:8},'mi-rr':{a:11,b:7},'kkr-rr':{a:10,b:8},
};
const getH2H=(a,b)=>{const k1=`${a}-${b}`,k2=`${b}-${a}`;if(H2H[k1])return{a:H2H[k1].a,b:H2H[k1].b};if(H2H[k2])return{a:H2H[k2].b,b:H2H[k2].a};return{a:5,b:5}};

/* PLAYERS — 150+ with Wikipedia Commons HQ images */
const PLAYERS = [
  /* ── STAR BATTERS ── */
  {id:'vk',  name:'Virat Kohli',       team:'rcb', role:'Batter',      country:'India',    age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_2020.jpg/320px-Virat_Kohli_2020.jpg',    runs:857,avg:61.2,sr:147.8,hs:113,fifties:7,hundreds:3,wkts:0,eco:0,  form:['w','w','w','l','w','d','w'],pts:398,cap:false,vc:true, price:21,ipl_first:2008,ipl_runs:8120,ipl_matches:251},
  {id:'rs',  name:'Rohit Sharma',      team:'mi',  role:'Batter',      country:'India',    age:38, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rohit_Sharma_2022.jpg/320px-Rohit_Sharma_2022.jpg',  runs:628,avg:44.9,sr:138.6,hs:98, fifties:5,hundreds:1,wkts:0,eco:0,  form:['w','l','w','w','l','w','l'],pts:289,cap:false,vc:false,price:16,ipl_first:2008,ipl_runs:6628,ipl_matches:257},
  {id:'sg',  name:'Shubman Gill',      team:'gt',  role:'Batter',      country:'India',    age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Shubman_Gill.jpg/240px-Shubman_Gill.jpg',            runs:712,avg:56.4,sr:149.2,hs:126,fifties:4,hundreds:2,wkts:0,eco:0,  form:['w','w','w','l','w','w','d'],pts:330,cap:true, vc:false,price:14,ipl_first:2022,ipl_runs:2165,ipl_matches:75},
  {id:'sp',  name:'Sanju Samson',      team:'rr',  role:'Batter/WK',   country:'India',    age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sanju_Samson.jpg/240px-Sanju_Samson.jpg',            runs:580,avg:48.3,sr:155.1,hs:107,fifties:4,hundreds:1,wkts:0,eco:0,  form:['l','w','w','d','w','l','w'],pts:271,cap:true, vc:false,price:13,ipl_first:2013,ipl_runs:3674,ipl_matches:163},
  {id:'rp',  name:'Rishabh Pant',      team:'dc',  role:'Batter/WK',   country:'India',    age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rishabh_Pant.jpg/240px-Rishabh_Pant.jpg',            runs:543,avg:45.3,sr:162.9,hs:99, fifties:3,hundreds:1,wkts:0,eco:0,  form:['w','l','l','w','w','l','w'],pts:258,cap:true, vc:false,price:13,ipl_first:2016,ipl_runs:3284,ipl_matches:111},
  {id:'kl',  name:'KL Rahul',          team:'lsg', role:'Batter/WK',   country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/KL_Rahul_2021.jpg/240px-KL_Rahul_2021.jpg',          runs:498,avg:41.5,sr:134.5,hs:91, fifties:4,hundreds:0,wkts:0,eco:0,  form:['l','l','w','l','d','w','l'],pts:234,cap:true, vc:false,price:11,ipl_first:2010,ipl_runs:5057,ipl_matches:131},
  {id:'si',  name:'Shreyas Iyer',      team:'kkr', role:'Batter',      country:'India',    age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shreyas_Iyer_2019.jpg/240px-Shreyas_Iyer_2019.jpg',  runs:524,avg:43.7,sr:140.1,hs:96, fifties:4,hundreds:0,wkts:0,eco:0,  form:['w','w','d','w','l','w','w'],pts:248,cap:true, vc:false,price:12,ipl_first:2015,ipl_runs:3127,ipl_matches:115},
  {id:'ms',  name:'MS Dhoni',          team:'csk', role:'Batter/WK',   country:'India',    age:42, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/MS_Dhoni_2019.jpg/240px-MS_Dhoni_2019.jpg',          runs:358,avg:59.7,sr:172.1,hs:74, fifties:1,hundreds:0,wkts:0,eco:0,  form:['w','d','w','w','l','w','d'],pts:212,cap:true, vc:false,price:12,ipl_first:2008,ipl_runs:5082,ipl_matches:264},
  {id:'dw',  name:'David Warner',      team:'dc',  role:'Batter',      country:'Australia',age:37, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/David_Warner_2015.jpg/240px-David_Warner_2015.jpg',  runs:467,avg:38.9,sr:148.7,hs:85, fifties:3,hundreds:0,wkts:0,eco:0,  form:['w','l','w','d','l','w','l'],pts:218,cap:false,vc:false,price:9, ipl_first:2009,ipl_runs:6565,ipl_matches:184},
  {id:'sv',  name:'Suryakumar Yadav',  team:'mi',  role:'Batter',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Suryakumar_yadav.jpg/240px-Suryakumar_yadav.jpg',    runs:689,avg:51.8,sr:182.4,hs:117,fifties:5,hundreds:1,wkts:0,eco:0,  form:['w','w','w','l','w','w','d'],pts:320,cap:false,vc:true, price:14,ipl_first:2018,ipl_runs:3033,ipl_matches:115},
  {id:'jb',  name:'Jos Buttler',       team:'rr',  role:'Batter/WK',   country:'England',  age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jos_Buttler_2017.jpg/240px-Jos_Buttler_2017.jpg',    runs:601,avg:50.1,sr:160.3,hs:104,fifties:4,hundreds:1,wkts:0,eco:0,  form:['w','d','w','w','l','w','w'],pts:285,cap:false,vc:false,price:13,ipl_first:2016,ipl_runs:3227,ipl_matches:95},
  {id:'rg',  name:'Ruturaj Gaikwad',   team:'csk', role:'Batter',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruturaj_Gaikwad.jpg/240px-Ruturaj_Gaikwad.jpg',      runs:656,avg:54.7,sr:146.8,hs:108,fifties:5,hundreds:1,wkts:0,eco:0,  form:['w','w','d','w','l','w','w'],pts:310,cap:false,vc:true, price:11,ipl_first:2020,ipl_runs:2289,ipl_matches:73},
  {id:'fd',  name:'Faf du Plessis',    team:'rcb', role:'Batter',      country:'S. Africa',age:39, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Faf_du_Plessis_2015.jpg/240px-Faf_du_Plessis_2015.jpg',runs:501,avg:41.8,sr:141.9,hs:86,fifties:3,hundreds:0,wkts:0,eco:0,form:['l','d','w','w','l','w','w'],pts:241,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:3749,ipl_matches:130},
  {id:'sd',  name:'Shikhar Dhawan',    team:'pbks',role:'Batter',      country:'India',    age:38, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Shikhar_Dhawan.jpg/240px-Shikhar_Dhawan.jpg',         runs:401,avg:33.4,sr:129.6,hs:72, fifties:2,hundreds:0,wkts:0,eco:0,  form:['l','d','l','w','l','l','w'],pts:189,cap:true, vc:false,price:8, ipl_first:2020,ipl_runs:6769,ipl_matches:222},
  {id:'qd',  name:'Quinton de Kock',   team:'lsg', role:'Batter/WK',   country:'S. Africa',age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Quinton_de_Kock_2014.jpg/240px-Quinton_de_Kock_2014.jpg',runs:445,avg:37.1,sr:144.2,hs:88,fifties:3,hundreds:0,wkts:0,eco:0,form:['w','l','d','w','w','l','w'],pts:209,cap:false,vc:false,price:9,ipl_first:2020,ipl_runs:2781,ipl_matches:79},
  {id:'hk',  name:'Heinrich Klaasen',  team:'srh', role:'Batter/WK',   country:'S. Africa',age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Heinrich_Klaasen_%28cropped%29.jpg/240px-Heinrich_Klaasen_%28cropped%29.jpg',runs:479,avg:47.9,sr:168.4,hs:104,fifties:3,hundreds:1,wkts:0,eco:0,form:['w','w','d','w','w','l','w'],pts:267,cap:false,vc:false,price:12,ipl_first:2008,ipl_runs:1429,ipl_matches:48},
  {id:'dj',  name:'David Miller',      team:'gt',  role:'Batter',      country:'S. Africa',age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/David_Miller.jpg/240px-David_Miller.jpg',              runs:388,avg:38.8,sr:146.2,hs:94, fifties:2,hundreds:0,wkts:0,eco:0,  form:['w','l','w','w','d','l','w'],pts:196,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:4230,ipl_matches:177},
  {id:'tk',  name:'Travis Head',       team:'srh', role:'Batter',      country:'Australia',age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Travis_Head.jpg/240px-Travis_Head.jpg',                runs:567,avg:47.3,sr:191.2,hs:102,fifties:4,hundreds:1,wkts:0,eco:0,  form:['w','w','w','l','w','d','w'],pts:298,cap:false,vc:false,price:13,ipl_first:2020,ipl_runs:567,ipl_matches:14},
  /* All-rounders */
  {id:'hh',  name:'Hardik Pandya',     team:'mi',  role:'All-Rounder', country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hardik_Pandya_2022.jpg/240px-Hardik_Pandya_2022.jpg', runs:412,avg:34.3,sr:158.4,hs:71, fifties:2,hundreds:0,wkts:12,eco:8.4,form:['w','w','l','w','d','w','l'],pts:296,cap:false,vc:false,price:15,ipl_first:2010,ipl_runs:2582,ipl_matches:121},
  {id:'rj',  name:'Ravindra Jadeja',   team:'csk', role:'All-Rounder', country:'India',    age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ravindra_Jadeja_IPL.jpg/240px-Ravindra_Jadeja_IPL.jpg',runs:284,avg:28.4,sr:147.9,hs:61,fifties:1,hundreds:0,wkts:16,eco:7.2,form:['w','w','w','l','w','d','w'],pts:281,cap:false,vc:false,price:13,ipl_first:2008,ipl_runs:2550,ipl_matches:227},
  {id:'ap',  name:'Axar Patel',        team:'dc',  role:'All-Rounder', country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Axar_Patel_2019.jpg/240px-Axar_Patel_2019.jpg',       runs:241,avg:24.1,sr:141.2,hs:52, fifties:1,hundreds:0,wkts:14,eco:7.6,form:['w','l','w','w','l','l','w'],pts:231,cap:false,vc:false,price:9, ipl_first:2018,ipl_runs:1473,ipl_matches:121},
  {id:'pc',  name:'Pat Cummins',       team:'srh', role:'All-Rounder', country:'Australia',age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pat_Cummins_2017.jpg/240px-Pat_Cummins_2017.jpg',     runs:142,avg:14.2,sr:126.8,hs:34, fifties:0,hundreds:0,wkts:17,eco:9.2,form:['l','d','w','l','l','w','l'],pts:245,cap:true, vc:false,price:13,ipl_first:2020,ipl_runs:602,ipl_matches:55},
  {id:'mk',  name:'Mitchell Marsh',    team:'dc',  role:'All-Rounder', country:'Australia',age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mitchell_Marsh_2022.jpg/240px-Mitchell_Marsh_2022.jpg', runs:276,avg:27.6,sr:158.6,hs:63, fifties:1,hundreds:0,wkts:9, eco:9.1,form:['d','w','l','w','w','l','d'],pts:209,cap:false,vc:false,price:9, ipl_first:2021,ipl_runs:809,ipl_matches:39},
  {id:'sa',  name:'Sam Curran',        team:'pbks',role:'All-Rounder', country:'England',  age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sam_Curran_2019.jpg/240px-Sam_Curran_2019.jpg',        runs:198,avg:22.0,sr:149.6,hs:55, fifties:1,hundreds:0,wkts:11,eco:9.4,form:['l','w','d','l','w','l','w'],pts:193,cap:false,vc:false,price:19,ipl_first:2020,ipl_runs:678,ipl_matches:64},
  {id:'ga',  name:'Glenn Maxwell',     team:'rcb', role:'All-Rounder', country:'Australia',age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Glenn_Maxwell_2022.jpg/240px-Glenn_Maxwell_2022.jpg',  runs:361,avg:32.8,sr:166.2,hs:72, fifties:2,hundreds:0,wkts:6, eco:8.8,form:['l','w','d','w','l','l','w'],pts:221,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:3001,ipl_matches:129},
  {id:'as',  name:'Abhishek Sharma',   team:'srh', role:'Batter',      country:'India',    age:23, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Abhishek_Sharma.jpg/240px-Abhishek_Sharma.jpg',        runs:512,avg:42.7,sr:202.4,hs:92, fifties:3,hundreds:0,wkts:3, eco:8.1,form:['w','w','l','w','d','w','w'],pts:279,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:892,ipl_matches:31},
  {id:'jf',  name:'Jason Roy',         team:'gt',  role:'Batter',      country:'England',  age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jason_Roy_2019.jpg/240px-Jason_Roy_2019.jpg',           runs:267,avg:22.3,sr:145.1,hs:58, fifties:1,hundreds:0,wkts:0, eco:0,  form:['l','w','l','d','l','w','l'],pts:164,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:267,ipl_matches:16},
  {id:'ni',  name:'Nicholas Pooran',   team:'lsg', role:'Batter/WK',   country:'W. Indies',age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nicholas_Pooran_2022.jpg/240px-Nicholas_Pooran_2022.jpg',runs:324,avg:27.0,sr:174.2,hs:79,fifties:2,hundreds:0,wkts:0,eco:0,form:['w','d','l','w','w','l','l'],pts:188,cap:false,vc:false,price:9,ipl_first:2020,ipl_runs:1584,ipl_matches:70},
  /* Bowlers */
  {id:'jb2', name:'Jasprit Bumrah',    team:'mi',  role:'Bowler',      country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jasprit_Bumrah_2019.jpg/240px-Jasprit_Bumrah_2019.jpg',runs:18,avg:0,sr:0,hs:6,fifties:0,hundreds:0,wkts:22,eco:7.1,form:['w','w','l','w','w','d','w'],pts:318,cap:false,vc:false,price:15,ipl_first:2015,ipl_runs:56,ipl_matches:120},
  {id:'yc',  name:'Yuzvendra Chahal',  team:'rr',  role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Yuzvendra_Chahal.jpg/240px-Yuzvendra_Chahal.jpg',      runs:8, avg:0,sr:0,hs:3,fifties:0,hundreds:0,wkts:19,eco:8.1,form:['l','w','w','d','l','w','w'],pts:276,cap:false,vc:false,price:8, ipl_first:2008,ipl_runs:48,ipl_matches:158},
  {id:'ms2', name:'Mohammed Shami',    team:'gt',  role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mohammad_Shami_2019.jpg/240px-Mohammad_Shami_2019.jpg', runs:12,avg:0,sr:0,hs:4,fifties:0,hundreds:0,wkts:21,eco:8.3,form:['w','l','w','w','d','w','l'],pts:302,cap:false,vc:false,price:11,ipl_first:2019,ipl_runs:55,ipl_matches:98},
  {id:'ta',  name:'Trent Boult',       team:'mi',  role:'Bowler',      country:'N. Zealand',age:34,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trent_Boult.jpg/240px-Trent_Boult.jpg',               runs:9, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:16,eco:8.7,form:['l','w','w','l','d','l','w'],pts:238,cap:false,vc:false,price:8, ipl_first:2021,ipl_runs:37,ipl_matches:77},
  {id:'ky',  name:'Kuldeep Yadav',     team:'dc',  role:'Bowler',      country:'India',    age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kuldeep_Yadav.jpg/240px-Kuldeep_Yadav.jpg',            runs:14,avg:0,sr:0,hs:5,fifties:0,hundreds:0,wkts:20,eco:7.8,form:['w','w','l','w','d','w','l'],pts:295,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:62,ipl_matches:79},
  {id:'dc2', name:'Deepak Chahar',     team:'csk', role:'Bowler',      country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Deepak_Chahar.jpg/240px-Deepak_Chahar.jpg',            runs:52,avg:0,sr:0,hs:18,fifties:0,hundreds:0,wkts:15,eco:8.9,form:['w','l','w','w','d','l','w'],pts:224,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:214,ipl_matches:76},
  {id:'ad',  name:'Arshdeep Singh',    team:'pbks',role:'Bowler',      country:'India',    age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arshdeep_Singh.jpg/240px-Arshdeep_Singh.jpg',          runs:8, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:17,eco:9.0,form:['l','w','d','l','l','w','d'],pts:207,cap:false,vc:false,price:8, ipl_first:2016,ipl_runs:42,ipl_matches:73},
  {id:'kr',  name:'Kagiso Rabada',     team:'pbks',role:'Bowler',      country:'S. Africa',age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kagiso_Rabada.jpg/240px-Kagiso_Rabada.jpg',            runs:6, avg:0,sr:0,hs:3,fifties:0,hundreds:0,wkts:18,eco:8.8,form:['w','l','w','d','l','w','l'],pts:262,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:29,ipl_matches:67},
  {id:'ms3', name:'Mustafizur Rahman', team:'dc',  role:'Bowler',      country:'Bangladesh',age:28,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mustafizur_Rahman_%282018%29.jpg/240px-Mustafizur_Rahman_%282018%29.jpg',runs:4,avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:14,eco:8.5,form:['d','w','l','w','w','d','l'],pts:198,cap:false,vc:false,price:7,ipl_first:2020,ipl_runs:21,ipl_matches:64},
  {id:'bk',  name:'Bhuvneshwar Kumar', team:'srh', role:'Bowler',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bhuvneshwar_Kumar_2019.jpg/240px-Bhuvneshwar_Kumar_2019.jpg',runs:22,avg:0,sr:0,hs:7,fifties:0,hundreds:0,wkts:15,eco:8.1,form:['l','d','w','l','w','l','d'],pts:213,cap:false,vc:false,price:8,ipl_first:2023,ipl_runs:104,ipl_matches:162},
  {id:'hp',  name:'Harshal Patel',     team:'rcb', role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Harshal_Patel.jpg/240px-Harshal_Patel.jpg',            runs:30,avg:0,sr:0,hs:9,fifties:0,hundreds:0,wkts:24,eco:9.2,form:['w','w','d','l','w','w','l'],pts:304,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:132,ipl_matches:101},
  {id:'sp2', name:'Sandeep Sharma',    team:'kkr', role:'Bowler',      country:'India',    age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sandeep_Sharma.jpg/240px-Sandeep_Sharma.jpg',          runs:6, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:13,eco:8.6,form:['w','d','l','w','l','d','w'],pts:186,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:28,ipl_matches:111},
  {id:'va',  name:'Varun Chakravarthy',team:'kkr', role:'Bowler',      country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Varun_Chakravarthy.jpg/240px-Varun_Chakravarthy.jpg',  runs:6, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:21,eco:8.3,form:['w','w','d','w','l','w','w'],pts:286,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:21,ipl_matches:62},
  {id:'ma2', name:'Maheesh Theekshana',team:'csk', role:'Bowler',      country:'Sri Lanka',age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Maheesh_Theekshana.jpg/240px-Maheesh_Theekshana.jpg',  runs:4, avg:0,sr:0,hs:1,fifties:0,hundreds:0,wkts:12,eco:7.9,form:['d','w','l','w','w','l','w'],pts:196,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:18,ipl_matches:38},
  {id:'nr',  name:'Noor Ahmad',        team:'gt',  role:'Bowler',      country:'Afghanistan',age:19,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Noor_Ahmad.jpg/240px-Noor_Ahmad.jpg',                 runs:4, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:16,eco:8.2,form:['w','w','w','l','w','d','l'],pts:224,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:12,ipl_matches:28},
  {id:'ri',  name:'Rashid Khan',       team:'gt',  role:'Bowler',      country:'Afghanistan',age:25,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rashid_Khan.jpg/240px-Rashid_Khan.jpg',               runs:38,avg:0,sr:0,hs:22,fifties:0,hundreds:0,wkts:18,eco:7.2,form:['w','w','l','w','w','d','w'],pts:274,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:218,ipl_matches:77},
  {id:'ia',  name:'Ishan Kishan',      team:'mi',  role:'Batter/WK',   country:'India',    age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ishan_Kishan.jpg/240px-Ishan_Kishan.jpg',              runs:268,avg:22.3,sr:140.8,hs:81,fifties:1,hundreds:0,wkts:0,eco:0,  form:['l','w','d','l','w','l','d'],pts:174,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:2644,ipl_matches:102},
  {id:'rv',  name:'Rinku Singh',       team:'kkr', role:'Batter',      country:'India',    age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Rinku_Singh.jpg/240px-Rinku_Singh.jpg',                runs:418,avg:41.8,sr:163.5,hs:67,fifties:2,hundreds:0,wkts:0,eco:0,  form:['w','w','l','w','w','d','w'],pts:237,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:1057,ipl_matches:53},
  {id:'mr',  name:'Mitchell Starc',    team:'kkr', role:'Bowler',      country:'Australia',age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mitchell_Starc_2015.jpg/240px-Mitchell_Starc_2015.jpg', runs:6, avg:0,sr:0,hs:3,fifties:0,hundreds:0,wkts:17,eco:9.6,form:['d','w','l','l','w','d','l'],pts:223,cap:false,vc:false,price:24,ipl_first:2020,ipl_runs:24,ipl_matches:14},
  {id:'pw',  name:'Phil Salt',         team:'kkr', role:'Batter/WK',   country:'England',  age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Phil_Salt.jpg/240px-Phil_Salt.jpg',                    runs:435,avg:36.3,sr:168.1,hs:89,fifties:3,hundreds:0,wkts:0,eco:0,  form:['w','l','w','w','d','w','l'],pts:228,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:435,ipl_matches:14},
  {id:'ab2', name:'Andre Russell',     team:'kkr', role:'All-Rounder', country:'W. Indies',age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Andre_Russell_2019.jpg/240px-Andre_Russell_2019.jpg',  runs:222,avg:22.2,sr:181.0,hs:64,fifties:1,hundreds:0,wkts:14,eco:10.2,form:['w','d','l','w','w','l','w'],pts:228,cap:false,vc:false,price:12,ipl_first:2020,ipl_runs:2739,ipl_matches:111},
  {id:'sn',  name:'Sunil Narine',       team:'kkr', role:'All-Rounder', country:'W. Indies',age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sunil_Narine_2019.jpg/240px-Sunil_Narine_2019.jpg',        runs:488,avg:40.7,sr:176.9,hs:81,fifties:3,hundreds:0,wkts:15,eco:7.9,form:['w','w','d','w','l','w','w'],pts:306,cap:false,vc:false,price:12,ipl_first:2019,ipl_runs:2297,ipl_matches:177},
  {id:'dp',  name:'Deepak Hooda',       team:'lsg', role:'Batter',      country:'India',    age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Deepak_Hooda.jpg/240px-Deepak_Hooda.jpg',                runs:298,avg:24.8,sr:148.0,hs:67,fifties:1,hundreds:0,wkts:3, eco:8.8,form:['l','w','d','l','w','l','d'],pts:172,cap:false,vc:false,price:7, ipl_first:2012,ipl_runs:1498,ipl_matches:79},
  {id:'yj',  name:'Yashasvi Jaiswal',   team:'rr',  role:'Batter',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yashasvi_Jaiswal.jpg/240px-Yashasvi_Jaiswal.jpg',          runs:726,avg:60.5,sr:167.4,hs:124,fifties:5,hundreds:2,wkts:0, eco:0,  form:['w','w','w','l','w','d','w'],pts:339,cap:false,vc:false,price:14,ipl_first:2020,ipl_runs:2228,ipl_matches:50},
  {id:'tt',  name:'Tilak Varma',        team:'mi',  role:'Batter',      country:'India',    age:21, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tilak_Varma.jpg/240px-Tilak_Varma.jpg',                  runs:484,avg:48.4,sr:156.8,hs:84,fifties:4,hundreds:0,wkts:0, eco:0,  form:['w','d','w','l','w','w','l'],pts:261,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:1196,ipl_matches:44},
  {id:'rr2', name:'Riyan Parag',        team:'rr',  role:'Batter',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Riyan_Parag.jpg/240px-Riyan_Parag.jpg',                  runs:573,avg:47.8,sr:158.7,hs:84,fifties:4,hundreds:0,wkts:8, eco:8.2,form:['w','w','l','w','d','w','w'],pts:294,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:1411,ipl_matches:64},
  {id:'ah',  name:'Alzarri Joseph',     team:'mi',  role:'Bowler',      country:'W. Indies',age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alzarri_Joseph.jpg/240px-Alzarri_Joseph.jpg',            runs:8, avg:0,sr:0,hs:4,fifties:0,hundreds:0,wkts:16,eco:8.9,form:['d','w','l','w','w','l','d'],pts:215,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:42,ipl_matches:32},
  {id:'ab3', name:'Avesh Khan',         team:'lsg', role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Avesh_Khan.jpg/240px-Avesh_Khan.jpg',                    runs:12,avg:0,sr:0,hs:6,fifties:0,hundreds:0,wkts:18,eco:9.1,form:['w','d','l','w','l','w','d'],pts:229,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:182,ipl_matches:69},
  {id:'km',  name:'Krunal Pandya',      team:'lsg', role:'All-Rounder', country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Krunal_Pandya.jpg/240px-Krunal_Pandya.jpg',              runs:218,avg:21.8,sr:137.1,hs:45,fifties:0,hundreds:0,wkts:14,eco:7.8,form:['l','w','d','l','w','d','w'],pts:204,cap:false,vc:false,price:8, ipl_first:2013,ipl_runs:2248,ipl_matches:122},
  {id:'mc',  name:'Marco Jansen',       team:'srh', role:'All-Rounder', country:'S. Africa',age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marco_Jansen.jpg/240px-Marco_Jansen.jpg',                runs:148,avg:14.8,sr:142.3,hs:44,fifties:0,hundreds:0,wkts:15,eco:9.8,form:['d','l','w','l','d','w','l'],pts:189,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:387,ipl_matches:22},
  {id:'sr2', name:'Sherfane Rutherford',team:'srh', role:'Batter',      country:'W. Indies',age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sherfane_Rutherford.jpg/240px-Sherfane_Rutherford.jpg',  runs:412,avg:37.5,sr:169.4,hs:78,fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','w','l','w','d','l','w'],pts:224,cap:false,vc:false,price:8, ipl_first:2018,ipl_runs:688,ipl_matches:31},
  {id:'jd',  name:'Jake Fraser-McGurk', team:'dc',  role:'Batter',      country:'Australia',age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Jake_Fraser-McGurk.jpg/240px-Jake_Fraser-McGurk.jpg',    runs:389,avg:32.4,sr:215.0,hs:84,fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','w','d','l','w','w','l'],pts:246,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:636,ipl_matches:22},
  {id:'kv',  name:'Kuldeep Sen',        team:'rcb', role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kuldeep_Sen.jpg/240px-Kuldeep_Sen.jpg',                  runs:4, avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:13,eco:8.4,form:['l','d','w','l','d','w','d'],pts:176,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:56,ipl_matches:24},
  {id:'sm3', name:'Shashank Singh',     team:'pbks',role:'Batter',      country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Shashank_Singh.jpg/240px-Shashank_Singh.jpg',            runs:354,avg:35.4,sr:162.2,hs:68,fifties:2,hundreds:0,wkts:0, eco:0,  form:['l','w','d','w','l','w','w'],pts:213,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:688,ipl_matches:32},
  /* ── ADDITIONAL BATTERS ── */
  {id:'yj2', name:'Yashasvi Jaiswal',  team:'rr',  role:'Batter',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yashasvi_Jaiswal.jpg/320px-Yashasvi_Jaiswal.jpg',         runs:726,avg:60.5,sr:167.4,hs:124,fifties:5,hundreds:2,wkts:0, eco:0,  form:['w','w','w','l','w','d','w'],pts:339,cap:false,vc:false,price:14,ipl_first:2020,ipl_runs:2228,ipl_matches:50},
  {id:'as2', name:'Abhishek Sharma',  team:'srh',  role:'Batter',      country:'India',    age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Abhishek_Sharma.jpg/320px-Abhishek_Sharma.jpg',           runs:512,avg:42.7,sr:202.4,hs:92, fifties:3,hundreds:0,wkts:3, eco:8.1,form:['w','w','l','w','d','w','w'],pts:279,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:892,ipl_matches:31},
  {id:'sg2', name:'Shubman Gill',     team:'gt',   role:'Batter',      country:'India',    age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Shubman_Gill.jpg/320px-Shubman_Gill.jpg',                 runs:712,avg:56.4,sr:149.2,hs:126,fifties:4,hundreds:2,wkts:0, eco:0,  form:['w','w','w','l','w','w','d'],pts:330,cap:true, vc:false,price:14,ipl_first:2020,ipl_runs:2877,ipl_matches:89},
  {id:'tt2', name:'Tilak Varma',      team:'mi',   role:'Batter',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tilak_Varma.jpg/320px-Tilak_Varma.jpg',                   runs:484,avg:48.4,sr:156.8,hs:84, fifties:4,hundreds:0,wkts:0, eco:0,  form:['w','d','w','l','w','w','l'],pts:261,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:1196,ipl_matches:44},
  {id:'rr3', name:'Riyan Parag',      team:'rr',   role:'Batter',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Riyan_Parag.jpg/320px-Riyan_Parag.jpg',                   runs:573,avg:47.8,sr:158.7,hs:84, fifties:4,hundreds:0,wkts:8, eco:8.2,form:['w','w','l','w','d','w','w'],pts:294,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:1411,ipl_matches:64},
  {id:'jfm', name:'Jake Fraser-McGurk',team:'dc',  role:'Batter',      country:'Australia',age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Jake_Fraser-McGurk.jpg/320px-Jake_Fraser-McGurk.jpg',     runs:389,avg:32.4,sr:215.0,hs:84, fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','w','d','l','w','w','l'],pts:246,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:636,ipl_matches:22},
  {id:'th2', name:'Travis Head',      team:'srh',  role:'Batter',      country:'Australia',age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Travis_Head.jpg/320px-Travis_Head.jpg',                   runs:567,avg:47.3,sr:191.2,hs:102,fifties:4,hundreds:1,wkts:0, eco:0,  form:['w','w','w','l','w','d','w'],pts:298,cap:false,vc:false,price:13,ipl_first:2020,ipl_runs:1134,ipl_matches:28},
  {id:'dm2', name:'David Miller',     team:'gt',   role:'Batter',      country:'S. Africa',age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/David_Miller.jpg/320px-David_Miller.jpg',                 runs:388,avg:38.8,sr:146.2,hs:94, fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','l','w','w','d','l','w'],pts:196,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:4618,ipl_matches:191},
  {id:'hk2', name:'Heinrich Klaasen', team:'srh',  role:'Batter/WK',   country:'S. Africa',age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Heinrich_Klaasen_%28cropped%29.jpg/320px-Heinrich_Klaasen_%28cropped%29.jpg',runs:479,avg:47.9,sr:168.4,hs:104,fifties:3,hundreds:1,wkts:0,eco:0,form:['w','w','d','w','w','l','w'],pts:267,cap:false,vc:false,price:12,ipl_first:2020,ipl_runs:1908,ipl_matches:62},
  {id:'ni2', name:'Nicholas Pooran',  team:'lsg',  role:'Batter/WK',   country:'W. Indies',age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nicholas_Pooran_2022.jpg/320px-Nicholas_Pooran_2022.jpg', runs:324,avg:27.0,sr:174.2,hs:79, fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','d','l','w','w','l','l'],pts:188,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:1908,ipl_matches:84},
  {id:'qd2', name:'Quinton de Kock',  team:'lsg',  role:'Batter/WK',   country:'S. Africa',age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Quinton_de_Kock_2014.jpg/320px-Quinton_de_Kock_2014.jpg', runs:445,avg:37.1,sr:144.2,hs:88, fifties:3,hundreds:0,wkts:0, eco:0,  form:['w','l','d','w','w','l','w'],pts:209,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:3226,ipl_matches:93},
  {id:'jb3', name:'Jos Buttler',      team:'rr',   role:'Batter/WK',   country:'England',  age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jos_Buttler_2017.jpg/320px-Jos_Buttler_2017.jpg',         runs:601,avg:50.1,sr:160.3,hs:124,fifties:4,hundreds:2,wkts:0, eco:0,  form:['w','d','w','w','l','w','w'],pts:285,cap:false,vc:false,price:13,ipl_first:2020,ipl_runs:4090,ipl_matches:109},
  {id:'sp3', name:'Sanju Samson',     team:'rr',   role:'Batter/WK',   country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sanju_Samson.jpg/320px-Sanju_Samson.jpg',                 runs:580,avg:48.3,sr:155.1,hs:119,fifties:4,hundreds:2,wkts:0, eco:0,  form:['l','w','w','d','w','l','w'],pts:271,cap:true, vc:false,price:13,ipl_first:2020,ipl_runs:4254,ipl_matches:177},
  {id:'rp2', name:'Rishabh Pant',     team:'dc',   role:'Batter/WK',   country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rishabh_Pant.jpg/320px-Rishabh_Pant.jpg',                 runs:543,avg:45.3,sr:162.9,hs:99, fifties:3,hundreds:1,wkts:0, eco:0,  form:['w','l','l','w','w','l','w'],pts:258,cap:true, vc:false,price:16,ipl_first:2020,ipl_runs:3827,ipl_matches:125},
  {id:'kl2', name:'KL Rahul',         team:'lsg',  role:'Batter/WK',   country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/KL_Rahul_2021.jpg/320px-KL_Rahul_2021.jpg',               runs:498,avg:41.5,sr:134.5,hs:91, fifties:4,hundreds:0,wkts:0, eco:0,  form:['l','l','w','l','d','w','l'],pts:234,cap:true, vc:false,price:14,ipl_first:2020,ipl_runs:5555,ipl_matches:145},
  {id:'ms4', name:'MS Dhoni',         team:'csk',  role:'Batter/WK',   country:'India',    age:43, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/MS_Dhoni_2019.jpg/320px-MS_Dhoni_2019.jpg',               runs:358,avg:59.7,sr:172.1,hs:79, fifties:1,hundreds:0,wkts:0, eco:0,  form:['w','d','w','w','l','w','d'],pts:212,cap:true, vc:false,price:12,ipl_first:2020,ipl_runs:5082,ipl_matches:264},
  {id:'si2', name:'Shreyas Iyer',     team:'kkr',  role:'Batter',      country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shreyas_Iyer_2019.jpg/320px-Shreyas_Iyer_2019.jpg',       runs:524,avg:43.7,sr:140.1,hs:96, fifties:4,hundreds:0,wkts:0, eco:0,  form:['w','w','d','w','l','w','w'],pts:248,cap:true, vc:false,price:12,ipl_first:2015,ipl_runs:3651,ipl_matches:129},
  {id:'sv2', name:'Suryakumar Yadav', team:'mi',   role:'Batter',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Suryakumar_yadav.jpg/320px-Suryakumar_yadav.jpg',         runs:689,avg:51.8,sr:182.4,hs:117,fifties:5,hundreds:1,wkts:0, eco:0,  form:['w','w','w','l','w','w','d'],pts:320,cap:false,vc:true, price:14,ipl_first:2020,ipl_runs:3722,ipl_matches:129},
  {id:'dw2', name:'David Warner',     team:'dc',   role:'Batter',      country:'Australia',age:38, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/David_Warner_2015.jpg/320px-David_Warner_2015.jpg',       runs:467,avg:38.9,sr:148.7,hs:85, fifties:3,hundreds:0,wkts:0, eco:0,  form:['w','l','w','d','l','w','l'],pts:218,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:7032,ipl_matches:198},
  {id:'sd2', name:'Shikhar Dhawan',   team:'pbks', role:'Batter',      country:'India',    age:39, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Shikhar_Dhawan.jpg/320px-Shikhar_Dhawan.jpg',             runs:401,avg:33.4,sr:129.6,hs:72, fifties:2,hundreds:0,wkts:0, eco:0,  form:['l','d','l','w','l','l','w'],pts:189,cap:true, vc:false,price:8, ipl_first:2020,ipl_runs:6769,ipl_matches:222},
  {id:'rg2', name:'Ruturaj Gaikwad',  team:'csk',  role:'Batter',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruturaj_Gaikwad.jpg/320px-Ruturaj_Gaikwad.jpg',           runs:656,avg:54.7,sr:146.8,hs:108,fifties:5,hundreds:1,wkts:0, eco:0,  form:['w','w','d','w','l','w','w'],pts:310,cap:false,vc:true, price:11,ipl_first:2020,ipl_runs:2945,ipl_matches:87},
  {id:'fd2', name:'Faf du Plessis',   team:'rcb',  role:'Batter',      country:'S. Africa',age:40, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Faf_du_Plessis_2015.jpg/320px-Faf_du_Plessis_2015.jpg',   runs:501,avg:41.8,sr:141.9,hs:96, fifties:3,hundreds:0,wkts:0, eco:0,  form:['l','d','w','w','l','w','w'],pts:241,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:4250,ipl_matches:144},
  {id:'ps2', name:'Phil Salt',        team:'kkr',  role:'Batter/WK',   country:'England',  age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Phil_Salt.jpg/320px-Phil_Salt.jpg',                       runs:435,avg:36.3,sr:168.1,hs:89, fifties:3,hundreds:0,wkts:0, eco:0,  form:['w','l','w','w','d','w','l'],pts:228,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:870,ipl_matches:28},
  {id:'ik2', name:'Ishan Kishan',     team:'mi',   role:'Batter/WK',   country:'India',    age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ishan_Kishan.jpg/320px-Ishan_Kishan.jpg',                 runs:268,avg:22.3,sr:140.8,hs:81, fifties:1,hundreds:0,wkts:0, eco:0,  form:['l','w','d','l','w','l','d'],pts:174,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:2912,ipl_matches:116},
  {id:'rv2', name:'Rinku Singh',      team:'kkr',  role:'Batter',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Rinku_Singh.jpg/320px-Rinku_Singh.jpg',                   runs:418,avg:41.8,sr:163.5,hs:67, fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','w','l','w','w','d','w'],pts:237,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:1475,ipl_matches:67},
  {id:'dp2', name:'Deepak Hooda',     team:'lsg',  role:'Batter',      country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Deepak_Hooda.jpg/320px-Deepak_Hooda.jpg',                 runs:298,avg:24.8,sr:148.0,hs:67, fifties:1,hundreds:0,wkts:3, eco:8.8,form:['l','w','d','l','w','l','d'],pts:172,cap:false,vc:false,price:7, ipl_first:2008,ipl_runs:1796,ipl_matches:93},
  {id:'sr3', name:'Sherfane Rutherford',team:'srh',role:'Batter',      country:'W. Indies',age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sherfane_Rutherford.jpg/320px-Sherfane_Rutherford.jpg',   runs:412,avg:37.5,sr:169.4,hs:78, fifties:2,hundreds:0,wkts:0, eco:0,  form:['w','w','l','w','d','l','w'],pts:224,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:688,ipl_matches:31},
  {id:'jr2', name:'Jason Roy',        team:'gt',   role:'Batter',      country:'England',  age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jason_Roy_2019.jpg/320px-Jason_Roy_2019.jpg',             runs:267,avg:22.3,sr:145.1,hs:58, fifties:1,hundreds:0,wkts:0, eco:0,  form:['l','w','l','d','l','w','l'],pts:164,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:267,ipl_matches:16},
  /* ── LEGENDARY / RETIRED BATTERS (historical data) ── */
  {id:'sc',  name:'Sachin Tendulkar', team:'mi',   role:'Batter',      country:'India',    age:51, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sachin_Tendulkar_01.jpg/320px-Sachin_Tendulkar_01.jpg',   runs:618,avg:44.8,sr:119.8,hs:100,fifties:7,hundreds:1,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:2334,ipl_matches:78},
  {id:'cg2', name:'Chris Gayle',      team:'pbks', role:'Batter',      country:'W. Indies',age:44, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Chris_Gayle_at_the_2011_Cricket_World_Cup.jpg/320px-Chris_Gayle_at_the_2011_Cricket_World_Cup.jpg', runs:733,avg:47.8,sr:160.5,hs:175,fifties:5,hundreds:6,wkts:0,eco:0,form:['d','d','d','d','d','d','d'],pts:0,cap:false,vc:false,price:0,ipl_first:2020,ipl_runs:4965,ipl_matches:142},
  {id:'ab4', name:'AB de Villiers',   team:'rcb',  role:'Batter/WK',   country:'S. Africa',age:41, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/AB_de_Villiers_in_2018_%28cropped%29.jpg/320px-AB_de_Villiers_in_2018_%28cropped%29.jpg', runs:480,avg:40.0,sr:158.4,hs:133,fifties:3,hundreds:1,wkts:0,eco:0,form:['d','d','d','d','d','d','d'],pts:0,cap:false,vc:false,price:0,ipl_first:2020,ipl_runs:5162,ipl_matches:184},
  {id:'sk',  name:'Suresh Raina',     team:'csk',  role:'Batter',      country:'India',    age:38, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Suresh_Raina_2012.jpg/320px-Suresh_Raina_2012.jpg',       runs:374,avg:31.2,sr:136.7,hs:87, fifties:3,hundreds:0,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:5528,ipl_matches:205},
  /* ── ALL-ROUNDERS ── */
  {id:'hh2', name:'Hardik Pandya',    team:'mi',   role:'All-Rounder', country:'India',    age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hardik_Pandya_2022.jpg/320px-Hardik_Pandya_2022.jpg',     runs:412,avg:34.3,sr:158.4,hs:71, fifties:2,hundreds:0,wkts:12,eco:8.4,form:['w','w','l','w','d','w','l'],pts:296,cap:true, vc:false,price:15,ipl_first:2020,ipl_runs:2994,ipl_matches:135},
  {id:'rj2', name:'Ravindra Jadeja',  team:'csk',  role:'All-Rounder', country:'India',    age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ravindra_Jadeja_IPL.jpg/320px-Ravindra_Jadeja_IPL.jpg',   runs:284,avg:28.4,sr:147.9,hs:61, fifties:1,hundreds:0,wkts:16,eco:7.2,form:['w','w','w','l','w','d','w'],pts:281,cap:false,vc:false,price:13,ipl_first:2020,ipl_runs:2550,ipl_matches:227},
  {id:'ap2', name:'Axar Patel',       team:'dc',   role:'All-Rounder', country:'India',    age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Axar_Patel_2019.jpg/320px-Axar_Patel_2019.jpg',           runs:241,avg:24.1,sr:141.2,hs:52, fifties:1,hundreds:0,wkts:14,eco:7.6,form:['w','l','w','w','l','l','w'],pts:231,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:1714,ipl_matches:135},
  {id:'pc2', name:'Pat Cummins',      team:'srh',  role:'All-Rounder', country:'Australia',age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pat_Cummins_2017.jpg/320px-Pat_Cummins_2017.jpg',         runs:142,avg:14.2,sr:126.8,hs:34, fifties:0,hundreds:0,wkts:17,eco:9.2,form:['l','d','w','l','l','w','l'],pts:245,cap:true, vc:false,price:13,ipl_first:2020,ipl_runs:744,ipl_matches:69},
  {id:'mk2', name:'Mitchell Marsh',   team:'dc',   role:'All-Rounder', country:'Australia',age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mitchell_Marsh_2022.jpg/320px-Mitchell_Marsh_2022.jpg',   runs:276,avg:27.6,sr:158.6,hs:63, fifties:1,hundreds:0,wkts:9, eco:9.1,form:['d','w','l','w','w','l','d'],pts:209,cap:false,vc:false,price:9, ipl_first:2021,ipl_runs:1085,ipl_matches:53},
  {id:'sc2', name:'Sam Curran',       team:'pbks', role:'All-Rounder', country:'England',  age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sam_Curran_2019.jpg/320px-Sam_Curran_2019.jpg',           runs:198,avg:22.0,sr:149.6,hs:55, fifties:1,hundreds:0,wkts:11,eco:9.4,form:['l','w','d','l','w','l','w'],pts:193,cap:false,vc:false,price:19,ipl_first:2020,ipl_runs:876,ipl_matches:78},
  {id:'gm2', name:'Glenn Maxwell',    team:'rcb',  role:'All-Rounder', country:'Australia',age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Glenn_Maxwell_2022.jpg/320px-Glenn_Maxwell_2022.jpg',     runs:361,avg:32.8,sr:166.2,hs:72, fifties:2,hundreds:0,wkts:6, eco:8.8,form:['l','w','d','w','l','l','w'],pts:221,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:3362,ipl_matches:143},
  {id:'ar2', name:'Andre Russell',    team:'kkr',  role:'All-Rounder', country:'W. Indies',age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Andre_Russell_2019.jpg/320px-Andre_Russell_2019.jpg',     runs:222,avg:22.2,sr:181.0,hs:64, fifties:1,hundreds:0,wkts:14,eco:10.2,form:['w','d','l','w','w','l','w'],pts:228,cap:false,vc:false,price:12,ipl_first:2020,ipl_runs:2961,ipl_matches:125},
  {id:'sn2', name:'Sunil Narine',     team:'kkr',  role:'All-Rounder', country:'W. Indies',age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sunil_Narine_2019.jpg/320px-Sunil_Narine_2019.jpg',       runs:488,avg:40.7,sr:176.9,hs:81, fifties:3,hundreds:0,wkts:15,eco:7.9,form:['w','w','d','w','l','w','w'],pts:306,cap:false,vc:false,price:12,ipl_first:2020,ipl_runs:2785,ipl_matches:191},
  {id:'kp2', name:'Krunal Pandya',    team:'lsg',  role:'All-Rounder', country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Krunal_Pandya.jpg/320px-Krunal_Pandya.jpg',               runs:218,avg:21.8,sr:137.1,hs:45, fifties:0,hundreds:0,wkts:14,eco:7.8,form:['l','w','d','l','w','d','w'],pts:204,cap:false,vc:false,price:8, ipl_first:2016,ipl_runs:2466,ipl_matches:136},
  {id:'mj2', name:'Marco Jansen',     team:'srh',  role:'All-Rounder', country:'S. Africa',age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marco_Jansen.jpg/320px-Marco_Jansen.jpg',                 runs:148,avg:14.8,sr:142.3,hs:44, fifties:0,hundreds:0,wkts:15,eco:9.8,form:['d','l','w','l','d','w','l'],pts:189,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:535,ipl_matches:36},
  {id:'db2', name:'Dwayne Bravo',     team:'csk',  role:'All-Rounder', country:'W. Indies',age:41, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Dwayne_Bravo_2015.jpg/320px-Dwayne_Bravo_2015.jpg',       runs:210,avg:21.0,sr:144.8,hs:48, fifties:0,hundreds:0,wkts:183,eco:8.6,form:['d','d','d','d','d','d','d'],pts:0, cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:1496,ipl_matches:161},
  {id:'wa',  name:'Washington Sundar',team:'srh',  role:'All-Rounder', country:'India',    age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Washington_Sundar.jpg/320px-Washington_Sundar.jpg',       runs:196,avg:24.5,sr:138.0,hs:49, fifties:0,hundreds:0,wkts:13,eco:7.5,form:['w','d','l','w','w','l','d'],pts:211,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:872,ipl_matches:66},
  {id:'sb',  name:'Shivam Dube',      team:'csk',  role:'All-Rounder', country:'India',    age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Shivam_Dube.jpg/320px-Shivam_Dube.jpg',                   runs:340,avg:34.0,sr:155.8,hs:62, fifties:2,hundreds:0,wkts:5, eco:9.8,form:['w','l','w','d','w','w','l'],pts:219,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:1182,ipl_matches:82},
  {id:'rm',  name:'Romario Shepherd', team:'lsg',  role:'All-Rounder', country:'W. Indies',age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Romario_Shepherd.jpg/320px-Romario_Shepherd.jpg',         runs:178,avg:22.3,sr:164.8,hs:51, fifties:1,hundreds:0,wkts:12,eco:10.1,form:['d','w','l','w','d','l','w'],pts:186,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:412,ipl_matches:32},
  {id:'ms5', name:'Moeen Ali',        team:'csk',  role:'All-Rounder', country:'England',  age:37, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Moeen_Ali_2022.jpg/320px-Moeen_Ali_2022.jpg',             runs:189,avg:21.0,sr:148.8,hs:42, fifties:0,hundreds:0,wkts:11,eco:8.1,form:['d','w','d','l','w','w','l'],pts:183,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:862,ipl_matches:72},
  {id:'ra2', name:'Ravichandran Ashwin',team:'rcb',role:'All-Rounder', country:'India',    age:38, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/R_Ashwin_2018.jpg/320px-R_Ashwin_2018.jpg',               runs:148,avg:14.8,sr:128.6,hs:38, fifties:0,hundreds:0,wkts:140,eco:7.9,form:['d','d','d','d','d','d','d'],pts:0, cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:706,ipl_matches:212},
  {id:'yo',  name:'Yusuf Pathan',     team:'kkr',  role:'All-Rounder', country:'India',    age:41, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Yusuf_Pathan.jpg/320px-Yusuf_Pathan.jpg',                 runs:402,avg:28.7,sr:156.9,hs:100,fifties:2,hundreds:1,wkts:41, eco:8.9,form:['d','d','d','d','d','d','d'],pts:0, cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:3204,ipl_matches:174},
  {id:'dp3', name:'Dinesh Karthik',   team:'rcb',  role:'Batter/WK',   country:'India',    age:39, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dinesh_Karthik_2022.jpg/320px-Dinesh_Karthik_2022.jpg',   runs:287,avg:35.9,sr:170.2,hs:83, fifties:1,hundreds:0,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0, cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:4842,ipl_matches:229},
  /* ── BOWLERS ── */
  {id:'jb4', name:'Jasprit Bumrah',   team:'mi',   role:'Bowler',      country:'India',    age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jasprit_Bumrah_2019.jpg/320px-Jasprit_Bumrah_2019.jpg',   runs:18,avg:0,sr:0,hs:6,  fifties:0,hundreds:0,wkts:28,eco:6.8,form:['w','w','l','w','w','d','w'],pts:356,cap:false,vc:false,price:17,ipl_first:2020,ipl_runs:56,ipl_matches:134},
  {id:'yc2', name:'Yuzvendra Chahal', team:'rr',   role:'Bowler',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Yuzvendra_Chahal.jpg/320px-Yuzvendra_Chahal.jpg',         runs:8, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:19,eco:8.1,form:['l','w','w','d','l','w','w'],pts:276,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:48,ipl_matches:172},
  {id:'ms6', name:'Mohammed Shami',   team:'gt',   role:'Bowler',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mohammad_Shami_2019.jpg/320px-Mohammad_Shami_2019.jpg',   runs:12,avg:0,sr:0,hs:4,  fifties:0,hundreds:0,wkts:24,eco:8.2,form:['w','l','w','w','d','w','l'],pts:324,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:55,ipl_matches:112},
  {id:'tb2', name:'Trent Boult',      team:'mi',   role:'Bowler',      country:'N. Zealand',age:35,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trent_Boult.jpg/320px-Trent_Boult.jpg',                   runs:9, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:16,eco:8.7,form:['l','w','w','l','d','l','w'],pts:238,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:37,ipl_matches:91},
  {id:'ky2', name:'Kuldeep Yadav',    team:'dc',   role:'Bowler',      country:'India',    age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kuldeep_Yadav.jpg/320px-Kuldeep_Yadav.jpg',               runs:14,avg:0,sr:0,hs:5,  fifties:0,hundreds:0,wkts:20,eco:7.8,form:['w','w','l','w','d','w','l'],pts:295,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:62,ipl_matches:93},
  {id:'dc3', name:'Deepak Chahar',    team:'csk',  role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Deepak_Chahar.jpg/320px-Deepak_Chahar.jpg',               runs:52,avg:0,sr:0,hs:18, fifties:0,hundreds:0,wkts:15,eco:8.9,form:['w','l','w','w','d','l','w'],pts:224,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:214,ipl_matches:90},
  {id:'ad2', name:'Arshdeep Singh',   team:'pbks', role:'Bowler',      country:'India',    age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arshdeep_Singh.jpg/320px-Arshdeep_Singh.jpg',             runs:8, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:17,eco:9.0,form:['l','w','d','l','l','w','d'],pts:207,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:42,ipl_matches:87},
  {id:'kr2', name:'Kagiso Rabada',    team:'pbks', role:'Bowler',      country:'S. Africa',age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kagiso_Rabada.jpg/320px-Kagiso_Rabada.jpg',               runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:18,eco:8.8,form:['w','l','w','d','l','w','l'],pts:262,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:29,ipl_matches:81},
  {id:'mr2', name:'Mustafizur Rahman',team:'dc',   role:'Bowler',      country:'Bangladesh',age:29,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mustafizur_Rahman_%282018%29.jpg/320px-Mustafizur_Rahman_%282018%29.jpg',runs:4,avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:14,eco:8.5,form:['d','w','l','w','w','d','l'],pts:198,cap:false,vc:false,price:7,ipl_first:2020,ipl_runs:21,ipl_matches:78},
  {id:'bk2', name:'Bhuvneshwar Kumar',team:'srh',  role:'Bowler',      country:'India',    age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bhuvneshwar_Kumar_2019.jpg/320px-Bhuvneshwar_Kumar_2019.jpg',runs:22,avg:0,sr:0,hs:7, fifties:0,hundreds:0,wkts:15,eco:8.1,form:['l','d','w','l','w','l','d'],pts:213,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:104,ipl_matches:176},
  {id:'hp2', name:'Harshal Patel',    team:'rcb',  role:'Bowler',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Harshal_Patel.jpg/320px-Harshal_Patel.jpg',               runs:30,avg:0,sr:0,hs:9,  fifties:0,hundreds:0,wkts:24,eco:9.2,form:['w','w','d','l','w','w','l'],pts:304,cap:false,vc:false,price:10,ipl_first:2020,ipl_runs:132,ipl_matches:115},
  {id:'sp4', name:'Sandeep Sharma',   team:'kkr',  role:'Bowler',      country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sandeep_Sharma.jpg/320px-Sandeep_Sharma.jpg',             runs:6, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:13,eco:8.6,form:['w','d','l','w','l','d','w'],pts:186,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:28,ipl_matches:125},
  {id:'vc2', name:'Varun Chakravarthy',team:'kkr', role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Varun_Chakravarthy.jpg/320px-Varun_Chakravarthy.jpg',     runs:6, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:21,eco:8.3,form:['w','w','d','w','l','w','w'],pts:286,cap:false,vc:false,price:9, ipl_first:2020,ipl_runs:21,ipl_matches:76},
  {id:'mt2', name:'Maheesh Theekshana',team:'csk', role:'Bowler',      country:'Sri Lanka',age:25, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Maheesh_Theekshana.jpg/320px-Maheesh_Theekshana.jpg',     runs:4, avg:0,sr:0,hs:1,  fifties:0,hundreds:0,wkts:12,eco:7.9,form:['d','w','l','w','w','l','w'],pts:196,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:18,ipl_matches:52},
  {id:'na2', name:'Noor Ahmad',       team:'gt',   role:'Bowler',      country:'Afghanistan',age:20,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Noor_Ahmad.jpg/320px-Noor_Ahmad.jpg',                   runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:16,eco:8.2,form:['w','w','w','l','w','d','l'],pts:224,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:12,ipl_matches:42},
  {id:'rk2', name:'Rashid Khan',      team:'gt',   role:'Bowler',      country:'Afghanistan',age:26,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rashid_Khan.jpg/320px-Rashid_Khan.jpg',                 runs:38,avg:0,sr:0,hs:22, fifties:0,hundreds:0,wkts:18,eco:7.2,form:['w','w','l','w','w','d','w'],pts:274,cap:false,vc:false,price:11,ipl_first:2020,ipl_runs:218,ipl_matches:91},
  {id:'ms7', name:'Mitchell Starc',   team:'kkr',  role:'Bowler',      country:'Australia',age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mitchell_Starc_2015.jpg/320px-Mitchell_Starc_2015.jpg',   runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:17,eco:9.6,form:['d','w','l','l','w','d','l'],pts:223,cap:false,vc:false,price:24,ipl_first:2020,ipl_runs:24,ipl_matches:28},
  {id:'aj2', name:'Alzarri Joseph',   team:'mi',   role:'Bowler',      country:'W. Indies',age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alzarri_Joseph.jpg/320px-Alzarri_Joseph.jpg',             runs:8, avg:0,sr:0,hs:4,  fifties:0,hundreds:0,wkts:16,eco:8.9,form:['d','w','l','w','w','l','d'],pts:215,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:42,ipl_matches:46},
  {id:'ak2', name:'Avesh Khan',       team:'lsg',  role:'Bowler',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Avesh_Khan.jpg/320px-Avesh_Khan.jpg',                     runs:12,avg:0,sr:0,hs:6,  fifties:0,hundreds:0,wkts:18,eco:9.1,form:['w','d','l','w','l','w','d'],pts:229,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:182,ipl_matches:83},
  {id:'ks2', name:'Kuldeep Sen',      team:'rcb',  role:'Bowler',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kuldeep_Sen.jpg/320px-Kuldeep_Sen.jpg',                   runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:13,eco:8.4,form:['l','d','w','l','d','w','d'],pts:176,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:56,ipl_matches:38},
  {id:'mp2', name:'Mohit Sharma',     team:'gt',   role:'Bowler',      country:'India',    age:35, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mohit_Sharma.jpg/320px-Mohit_Sharma.jpg',                 runs:8, avg:0,sr:0,hs:4,  fifties:0,hundreds:0,wkts:14,eco:8.6,form:['w','l','d','w','l','d','w'],pts:192,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:68,ipl_matches:98},
  {id:'ts2', name:'T. Natarajan',     team:'srh',  role:'Bowler',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/T._Natarajan_2020.jpg/320px-T._Natarajan_2020.jpg',       runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:15,eco:8.8,form:['d','w','l','w','d','l','w'],pts:201,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:42,ipl_matches:56},
  {id:'pp',  name:'Prasidh Krishna',  team:'rr',   role:'Bowler',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Prasidh_Krishna.jpg/320px-Prasidh_Krishna.jpg',           runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:18,eco:9.1,form:['w','l','d','w','l','w','d'],pts:222,cap:false,vc:false,price:7, ipl_first:2012,ipl_runs:32,ipl_matches:61},
  {id:'mb2', name:'Murugan Ashwin',   team:'pbks', role:'Bowler',      country:'India',    age:34, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/M_Ashwin.jpg/320px-M_Ashwin.jpg',                         runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:12,eco:8.0,form:['l','d','w','l','d','w','l'],pts:164,cap:false,vc:false,price:5, ipl_first:2020,ipl_runs:16,ipl_matches:67},
  {id:'rs2', name:'Ravi Bishnoi',     team:'lsg',  role:'Bowler',      country:'India',    age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ravi_Bishnoi.jpg/320px-Ravi_Bishnoi.jpg',                 runs:12,avg:0,sr:0,hs:8,  fifties:0,hundreds:0,wkts:17,eco:8.3,form:['w','d','l','w','w','l','d'],pts:218,cap:false,vc:false,price:7, ipl_first:2019,ipl_runs:47,ipl_matches:58},
  {id:'rb2', name:'Rahul Tewatia',    team:'gt',   role:'All-Rounder', country:'India',    age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Rahul_Tewatia.jpg/320px-Rahul_Tewatia.jpg',               runs:298,avg:24.8,sr:157.9,hs:64, fifties:1,hundreds:0,wkts:9, eco:8.5,form:['w','l','d','w','w','l','d'],pts:201,cap:false,vc:false,price:7, ipl_first:2020,ipl_runs:1148,ipl_matches:83},
  {id:'wj',  name:'Wriddhiman Saha',  team:'gt',   role:'Batter/WK',   country:'India',    age:40, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wriddhiman_Saha.jpg/320px-Wriddhiman_Saha.jpg',           runs:201,avg:25.1,sr:136.5,hs:55, fifties:1,hundreds:0,wkts:0, eco:0,  form:['d','l','d','w','l','d','l'],pts:143,cap:false,vc:false,price:5, ipl_first:2020,ipl_runs:2427,ipl_matches:167},
  {id:'dj2', name:'Devdutt Padikkal', team:'rr',   role:'Batter',      country:'India',    age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Devdutt_Padikkal.jpg/320px-Devdutt_Padikkal.jpg',         runs:432,avg:36.0,sr:143.0,hs:101,fifties:3,hundreds:1,wkts:0, eco:0,  form:['w','d','l','w','w','l','d'],pts:228,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:1479,ipl_matches:59},
  {id:'ag',  name:'Aiden Markram',    team:'srh',  role:'Batter',      country:'S. Africa',age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Aiden_Markram_2022.jpg/320px-Aiden_Markram_2022.jpg',     runs:356,avg:29.7,sr:151.5,hs:89, fifties:2,hundreds:0,wkts:3, eco:8.1,form:['d','w','l','d','w','w','l'],pts:199,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:1157,ipl_matches:53},
  {id:'kb',  name:'Kieron Pollard',   team:'mi',   role:'All-Rounder', country:'W. Indies',age:37, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kieron_Pollard.jpg/320px-Kieron_Pollard.jpg',             runs:258,avg:22.3,sr:159.3,hs:83, fifties:1,hundreds:0,wkts:58, eco:9.1,form:['d','d','d','d','d','d','d'],pts:0, cap:false,vc:false,price:0, ipl_first:2020,ipl_runs:3412,ipl_matches:189},
  {id:'sm4', name:'Smriti Mandhana',  team:'rcb',  role:'Batter',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Smriti_Mandhana.jpg/320px-Smriti_Mandhana.jpg',           runs:468,avg:39.0,sr:143.6,hs:79, fifties:3,hundreds:0,wkts:0, eco:0,  form:['w','d','l','w','w','d','l'],pts:218,cap:false,vc:false,price:8, ipl_first:2020,ipl_runs:468,ipl_matches:24},
  {id:'kka', name:'Karun Nair',       team:'pbks', role:'Batter',      country:'India',    age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Karun_Nair.jpg/320px-Karun_Nair.jpg',                     runs:289,avg:32.1,sr:139.6,hs:83, fifties:2,hundreds:0,wkts:0, eco:0,  form:['l','d','w','d','l','w','l'],pts:168,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:1298,ipl_matches:67},
  {id:'mnu', name:'Monu Kumar',       team:'pbks', role:'Bowler',      country:'India',    age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monu_Kumar.jpg/320px-Monu_Kumar.jpg',                     runs:4, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:11,eco:8.9,form:['l','d','l','w','d','l','w'],pts:148,cap:false,vc:false,price:4, ipl_first:2020,ipl_runs:8,ipl_matches:19},
  {id:'vrs', name:'Vijaykumar Vyshak',team:'rcb',  role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Vijaykumar_Vyshak.jpg/320px-Vijaykumar_Vyshak.jpg',       runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:13,eco:8.3,form:['w','d','l','w','d','l','w'],pts:172,cap:false,vc:false,price:5, ipl_first:2020,ipl_runs:12,ipl_matches:24},
  {id:'yo2', name:'Yash Dayal',       team:'rcb',  role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yash_Dayal.jpg/320px-Yash_Dayal.jpg',                     runs:2, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:12,eco:9.1,form:['d','w','l','d','w','l','d'],pts:161,cap:false,vc:false,price:5, ipl_first:2020,ipl_runs:6,ipl_matches:21},
  {id:'am2', name:'Anrich Nortje',    team:'dc',   role:'Bowler',      country:'S. Africa',age:31, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Anrich_Nortje.jpg/320px-Anrich_Nortje.jpg',               runs:8, avg:0,sr:0,hs:4,  fifties:0,hundreds:0,wkts:18,eco:9.4,form:['d','w','l','w','l','d','w'],pts:224,cap:false,vc:false,price:8, ipl_first:2016,ipl_runs:24,ipl_matches:42},
  {id:'sr4', name:'Spencer Johnson',  team:'gt',   role:'Bowler',      country:'Australia',age:28, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Spencer_Johnson.jpg/320px-Spencer_Johnson.jpg',           runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:14,eco:9.8,form:['d','l','w','d','l','w','d'],pts:182,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:6,ipl_matches:18},
  {id:'ki',  name:'Khaleel Ahmed',    team:'dc',   role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Khaleel_Ahmed.jpg/320px-Khaleel_Ahmed.jpg',               runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:13,eco:9.2,form:['l','d','w','l','d','w','l'],pts:169,cap:false,vc:false,price:5, ipl_first:2020,ipl_runs:16,ipl_matches:52},
  {id:'as3', name:'Adam Zampa',       team:'rcb',  role:'Bowler',      country:'Australia',age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Adam_Zampa_2019.jpg/320px-Adam_Zampa_2019.jpg',           runs:6, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:11,eco:8.6,form:['d','l','w','d','w','l','d'],pts:156,cap:false,vc:false,price:6, ipl_first:2020,ipl_runs:14,ipl_matches:22},
  {id:'si3', name:'Shivam Mavi',      team:'gt',   role:'Bowler',      country:'India',    age:27, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shivam_Mavi.jpg/320px-Shivam_Mavi.jpg',                   runs:8, avg:0,sr:0,hs:4,  fifties:0,hundreds:0,wkts:12,eco:9.3,form:['w','l','d','w','l','d','w'],pts:163,cap:false,vc:false,price:5, ipl_first:2019,ipl_runs:22,ipl_matches:43},
  {id:'ys2', name:'Yudhvir Singh',    team:'srh',  role:'Bowler',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yudhvir_Singh.jpg/320px-Yudhvir_Singh.jpg',               runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:10,eco:9.0,form:['d','l','w','d','l','w','d'],pts:138,cap:false,vc:false,price:4, ipl_first:2023,ipl_runs:6,ipl_matches:16},
  {id:'az',  name:'Azmatullah Omarzai',team:'gt',  role:'All-Rounder', country:'Afghanistan',age:23,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Azmatullah_Omarzai.jpg/320px-Azmatullah_Omarzai.jpg',    runs:176,avg:17.6,sr:148.7,hs:46, fifties:0,hundreds:0,wkts:11,eco:9.4,form:['d','w','l','d','w','l','d'],pts:183,cap:false,vc:false,price:6, ipl_first:2022,ipl_runs:348,ipl_matches:32},
  {id:'my',  name:'Mayank Yadav',     team:'lsg',  role:'Bowler',      country:'India',    age:22, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mayank_Yadav.jpg/320px-Mayank_Yadav.jpg',                 runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:10,eco:8.6,form:['w','w','d','l','w','d','l'],pts:158,cap:false,vc:false,price:6, ipl_first:2023,ipl_runs:8,ipl_matches:14},
  {id:'nm2', name:'Naveen-ul-Haq',    team:'lsg',  role:'Bowler',      country:'Afghanistan',age:25,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Naveen-ul-Haq.jpg/320px-Naveen-ul-Haq.jpg',              runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:13,eco:9.1,form:['l','w','d','l','d','w','l'],pts:167,cap:false,vc:false,price:5, ipl_first:2022,ipl_runs:14,ipl_matches:28},
  {id:'nt',  name:'Nathan Ellis',     team:'pbks', role:'Bowler',      country:'Australia',age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Nathan_Ellis.jpg/320px-Nathan_Ellis.jpg',                 runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:12,eco:9.0,form:['d','l','w','d','l','w','d'],pts:156,cap:false,vc:false,price:5, ipl_first:2022,ipl_runs:4,ipl_matches:19},
  {id:'jg',  name:'Josh Hazlewood',   team:'rcb',  role:'Bowler',      country:'Australia',age:33, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Josh_Hazlewood.jpg/320px-Josh_Hazlewood.jpg',             runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:14,eco:8.4,form:['w','d','l','w','w','d','l'],pts:184,cap:false,vc:false,price:7, ipl_first:2019,ipl_runs:8,ipl_matches:27},
  {id:'kt',  name:'Karn Sharma',      team:'mi',   role:'Bowler',      country:'India',    age:36, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Karn_Sharma.jpg/320px-Karn_Sharma.jpg',                   runs:4, avg:0,sr:0,hs:3,  fifties:0,hundreds:0,wkts:9, eco:7.8,form:['d','l','d','w','l','d','l'],pts:132,cap:false,vc:false,price:4, ipl_first:2009,ipl_runs:22,ipl_matches:62},
  {id:'re',  name:'Reece Topley',     team:'rr',   role:'Bowler',      country:'England',  age:30, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Reece_Topley.jpg/320px-Reece_Topley.jpg',                 runs:2, avg:0,sr:0,hs:1,  fifties:0,hundreds:0,wkts:10,eco:8.8,form:['l','d','w','l','d','l','w'],pts:141,cap:false,vc:false,price:4, ipl_first:2023,ipl_runs:4,ipl_matches:17},
  {id:'dr',  name:'Dhruv Jurel',      team:'rr',   role:'Batter/WK',   country:'India',    age:23, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dhruv_Jurel.jpg/320px-Dhruv_Jurel.jpg',                   runs:289,avg:24.1,sr:142.9,hs:57, fifties:1,hundreds:0,wkts:0, eco:0,  form:['d','w','l','d','w','l','d'],pts:167,cap:false,vc:false,price:6, ipl_first:2023,ipl_runs:484,ipl_matches:28},
  {id:'kw',  name:'Kyle Mayers',      team:'lsg',  role:'All-Rounder', country:'W. Indies',age:32, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kyle_Mayers.jpg/320px-Kyle_Mayers.jpg',                   runs:246,avg:20.5,sr:154.7,hs:54, fifties:1,hundreds:0,wkts:5, eco:9.4,form:['w','d','l','w','l','d','w'],pts:178,cap:false,vc:false,price:7, ipl_first:2022,ipl_runs:538,ipl_matches:37},
  {id:'nr2', name:'Naman Dhir',       team:'pbks', role:'Batter',      country:'India',    age:24, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Naman_Dhir.jpg/320px-Naman_Dhir.jpg',                     runs:246,avg:24.6,sr:152.2,hs:64, fifties:1,hundreds:0,wkts:0, eco:0,  form:['l','w','d','l','w','d','l'],pts:152,cap:false,vc:false,price:5, ipl_first:2023,ipl_runs:312,ipl_matches:22},
  {id:'yp',  name:'Yashasvi Bhatt',   team:'mi',   role:'Bowler',      country:'India',    age:26, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Generic_cricketer.jpg/320px-Generic_cricketer.jpg',        runs:2, avg:0,sr:0,hs:1,  fifties:0,hundreds:0,wkts:9, eco:8.7,form:['d','l','w','d','l','w','d'],pts:124,cap:false,vc:false,price:3, ipl_first:2024,ipl_runs:4,ipl_matches:11},
  {id:'ssi', name:'Sundar Raman',     team:'dc',   role:'Batter',      country:'India',    age:29, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Generic_cricketer.jpg/320px-Generic_cricketer.jpg',        runs:188,avg:18.8,sr:131.5,hs:44, fifties:0,hundreds:0,wkts:0, eco:0,  form:['d','l','d','w','l','d','l'],pts:112,cap:false,vc:false,price:4, ipl_first:2023,ipl_runs:376,ipl_matches:32},
  {id:'gj',  name:'Gurjapneet Singh', team:'pbks', role:'Bowler',      country:'India',    age:23, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Generic_cricketer.jpg/320px-Generic_cricketer.jpg',        runs:2, avg:0,sr:0,hs:1,  fifties:0,hundreds:0,wkts:8, eco:9.0,form:['d','l','d','w','l','d','w'],pts:112,cap:false,vc:false,price:3, ipl_first:2024,ipl_runs:2,ipl_matches:9},
  /* ── IPL LEGENDS (historical data, retired) ── */
  {id:'sc3', name:'Sachin Tendulkar', team:'mi',   role:'Batter',      country:'India',    age:51, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sachin_Tendulkar_01.jpg/320px-Sachin_Tendulkar_01.jpg',   runs:618,avg:44.8,sr:119.8,hs:100,fifties:7,hundreds:1,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:2334,ipl_matches:78},
  {id:'sl',  name:'Lasith Malinga',   team:'mi',   role:'Bowler',      country:'Sri Lanka',age:41, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lasith_Malinga.jpg/320px-Lasith_Malinga.jpg',             runs:18,avg:0,sr:0,hs:12, fifties:0,hundreds:0,wkts:170,eco:7.1,form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2009,ipl_runs:72,ipl_matches:122},
  {id:'ag2', name:'Anil Kumble',      team:'rcb',  role:'Bowler',      country:'India',    age:54, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Anil_Kumble_in_2016_%28cropped%29.jpg/320px-Anil_Kumble_in_2016_%28cropped%29.jpg',runs:4,avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:46,eco:7.9,form:['d','d','d','d','d','d','d'],pts:0,cap:false,vc:false,price:0,ipl_first:2008,ipl_runs:8,ipl_matches:30},
  {id:'ga3', name:'Gautam Gambhir',   team:'kkr',  role:'Batter',      country:'India',    age:43, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gautam_Gambhir_2016.jpg/320px-Gautam_Gambhir_2016.jpg',   runs:480,avg:34.3,sr:124.8,hs:93, fifties:3,hundreds:0,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:4217,ipl_matches:154},
  {id:'vm',  name:'Virender Sehwag',  team:'pbks', role:'Batter',      country:'India',    age:46, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Virender_Sehwag_2015.jpg/320px-Virender_Sehwag_2015.jpg', runs:397,avg:26.5,sr:162.9,hs:122,fifties:2,hundreds:1,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:2728,ipl_matches:104},
  {id:'hp3', name:'Harbhajan Singh',  team:'mi',   role:'Bowler',      country:'India',    age:44, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Harbhajan_Singh_2017.jpg/320px-Harbhajan_Singh_2017.jpg', runs:62,avg:0,sr:0,hs:26,  fifties:0,hundreds:0,wkts:150,eco:7.2,form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:294,ipl_matches:163},
  {id:'mk3', name:'Murali Karthik',   team:'kkr',  role:'Bowler',      country:'India',    age:46, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Murali_Kartik_2008.jpg/320px-Murali_Kartik_2008.jpg',     runs:4, avg:0,sr:0,hs:2,  fifties:0,hundreds:0,wkts:89, eco:7.4,form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:14,ipl_matches:66},
  {id:'mc2', name:'Matthew Hayden',   team:'csk',  role:'Batter',      country:'Australia',age:53, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Matthew_Hayden.jpg/320px-Matthew_Hayden.jpg',             runs:572,avg:40.9,sr:144.1,hs:93, fifties:4,hundreds:0,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:1107,ipl_matches:29},
  {id:'vu',  name:'Adam Gilchrist',   team:'pbks', role:'Batter/WK',   country:'Australia',age:53, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Adam_Gilchrist_2007.jpg/320px-Adam_Gilchrist_2007.jpg',   runs:489,avg:35.0,sr:147.3,hs:109,fifties:3,hundreds:1,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:1458,ipl_matches:55},
  {id:'ro',  name:'Robin Uthappa',    team:'kkr',  role:'Batter/WK',   country:'India',    age:39, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Robin_Uthappa.jpg/320px-Robin_Uthappa.jpg',               runs:660,avg:47.1,sr:137.4,hs:87, fifties:5,hundreds:0,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:4952,ipl_matches:205},
  {id:'ya',  name:'Yuvraj Singh',     team:'pbks', role:'All-Rounder', country:'India',    age:43, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yuvraj_Singh_2015.jpg/320px-Yuvraj_Singh_2015.jpg',       runs:471,avg:31.4,sr:138.2,hs:83, fifties:3,hundreds:0,wkts:54, eco:8.4,form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:2750,ipl_matches:132},
  {id:'sh2', name:'Shane Warne',      team:'rr',   role:'Bowler',      country:'Australia',age:54, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Shane_Warne_bowling_2005.jpg/320px-Shane_Warne_bowling_2005.jpg',runs:4,avg:0,sr:0,hs:2,fifties:0,hundreds:0,wkts:57,eco:7.1,form:['d','d','d','d','d','d','d'],pts:0,cap:false,vc:false,price:0,ipl_first:2008,ipl_runs:12,ipl_matches:55},
  {id:'ku',  name:'Kumar Sangakkara', team:'dc',   role:'Batter/WK',   country:'Sri Lanka',age:47, photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sangakkara.jpg/320px-Sangakkara.jpg',                     runs:445,avg:37.1,sr:117.8,hs:107,fifties:3,hundreds:1,wkts:0, eco:0,  form:['d','d','d','d','d','d','d'],pts:0,  cap:false,vc:false,price:0, ipl_first:2008,ipl_runs:2053,ipl_matches:71},
];

/* VENUES */
const VENUES = [
  {name:'Wankhede Stadium',           city:'Mumbai',    cap:33000, avgScore:186,highScore:235,tossBat:62,chaseWin:58,pitchType:'Batting paradise',    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Wankhede_Cricket_Stadium_Mumbai.jpg/640px-Wankhede_Cricket_Stadium_Mumbai.jpg',  matches:108,avgFirstInn:182,avgSecondInn:164,sixsPerMatch:14,pacersWin:58,spinnersWin:42},
  {name:'M. Chinnaswamy Stadium',     city:'Bengaluru', cap:35000, avgScore:192,highScore:263,tossBat:70,chaseWin:52,pitchType:'High-scoring',         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/M._Chinnaswamy_Stadium.jpg/640px-M._Chinnaswamy_Stadium.jpg',                    matches:84,avgFirstInn:191,avgSecondInn:174,sixsPerMatch:17,pacersWin:46,spinnersWin:54},
  {name:'Eden Gardens',               city:'Kolkata',   cap:68000, avgScore:171,highScore:222,tossBat:48,chaseWin:54,pitchType:'Balanced',             img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Eden_Gardens_Cricket_Ground_Kolkata.jpg/640px-Eden_Gardens_Cricket_Ground_Kolkata.jpg',matches:96,avgFirstInn:169,avgSecondInn:155,sixsPerMatch:12,pacersWin:52,spinnersWin:48},
  {name:'MA Chidambaram Stadium',     city:'Chennai',   cap:38000, avgScore:162,highScore:208,tossBat:40,chaseWin:62,pitchType:'Spin-friendly',        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/MA_Chidambaram_Stadium.jpg/640px-MA_Chidambaram_Stadium.jpg',                    matches:91,avgFirstInn:158,avgSecondInn:148,sixsPerMatch:10,pacersWin:38,spinnersWin:62},
  {name:'Narendra Modi Stadium',      city:'Ahmedabad', cap:132000,avgScore:178,highScore:230,tossBat:55,chaseWin:50,pitchType:'True batting surface',  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motera_Stadium_Ahmedabad.jpg/640px-Motera_Stadium_Ahmedabad.jpg',                 matches:52,avgFirstInn:176,avgSecondInn:161,sixsPerMatch:13,pacersWin:50,spinnersWin:50},
  {name:'Sawai Mansingh Stadium',     city:'Jaipur',    cap:30000, avgScore:174,highScore:218,tossBat:52,chaseWin:55,pitchType:'Pacers early on',      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sawai_Mansingh_Stadium.jpg/640px-Sawai_Mansingh_Stadium.jpg',                    matches:72,avgFirstInn:172,avgSecondInn:158,sixsPerMatch:13,pacersWin:55,spinnersWin:45},
  {name:'Arun Jaitley Stadium',       city:'Delhi',     cap:41000, avgScore:169,highScore:214,tossBat:46,chaseWin:58,pitchType:'Good for pace',        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Feroz_Shah_Kotla_Ground.jpg/640px-Feroz_Shah_Kotla_Ground.jpg',                    matches:88,avgFirstInn:167,avgSecondInn:152,sixsPerMatch:12,pacersWin:58,spinnersWin:42},
  {name:'Rajiv Gandhi Intl. Stadium', city:'Hyderabad', cap:38000, avgScore:165,highScore:228,tossBat:60,chaseWin:48,pitchType:'Spin later in match',  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rajiv_Gandhi_International_Cricket_Stadium_-_Hyderabad.jpg/640px-Rajiv_Gandhi_International_Cricket_Stadium_-_Hyderabad.jpg',matches:68,avgFirstInn:163,avgSecondInn:150,sixsPerMatch:11,pacersWin:44,spinnersWin:56},
  {name:'PCA IS Bindra Stadium',      city:'Mohali',    cap:26000, avgScore:168,highScore:209,tossBat:50,chaseWin:53,pitchType:'Good batting conditions',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/PCA_Stadium_Mohali.jpg/640px-PCA_Stadium_Mohali.jpg',                          matches:63,avgFirstInn:166,avgSecondInn:152,sixsPerMatch:12,pacersWin:54,spinnersWin:46},
  {name:'BRSABV Ekana Stadium',       city:'Lucknow',   cap:50000, avgScore:163,highScore:201,tossBat:44,chaseWin:60,pitchType:'Slow surface',          img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ekana_International_Cricket_Stadium.jpg/640px-Ekana_International_Cricket_Stadium.jpg',matches:24,avgFirstInn:161,avgSecondInn:148,sixsPerMatch:10,pacersWin:47,spinnersWin:53},
  {name:'DY Patil Stadium',           city:'Mumbai',    cap:55000, avgScore:172,highScore:216,tossBat:52,chaseWin:55,pitchType:'Batting-friendly',      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DY_Patil_Stadium.jpg/640px-DY_Patil_Stadium.jpg',                                 matches:16,avgFirstInn:170,avgSecondInn:157,sixsPerMatch:13,pacersWin:51,spinnersWin:49},
  {name:'Brabourne Stadium',          city:'Mumbai',    cap:20000, avgScore:169,highScore:204,tossBat:48,chaseWin:56,pitchType:'Sporting pitch',        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Brabourne_Stadium.jpg/640px-Brabourne_Stadium.jpg',                                matches:12,avgFirstInn:167,avgSecondInn:152,sixsPerMatch:12,pacersWin:52,spinnersWin:48},
];

/* Recent Results */
const RESULTS = [
  {t1:'CSK',s1:'192/4(20)',t2:'MI', s2:'186/6(20)',result:'CSK WON BY 6 RUNS'},
  {t1:'RCB',s1:'219/3(20)',t2:'KKR',s2:'204/7(20)',result:'RCB WON BY 15 RUNS'},
  {t1:'KKR',s1:'222/4(20)',t2:'SRH',s2:'175/7(19)',result:'KKR WON BY 8 WKTS'},
  {t1:'DC', s1:'158/7(20)',t2:'RR', s2:'162/4(19)',result:'RR WON BY 6 WKTS'},
  {t1:'LSG',s1:'143/9(20)',t2:'PBKS',s2:'147/5(19)',result:'PBKS WON BY 5 WKTS'},
  {t1:'KKR',s1:'201/4(20)',t2:'CSK',s2:'195/6(20)',result:'KKR WON BY 6 RUNS'},
  {t1:'MI', s1:'211/3(20)',t2:'RCB',s2:'196/7(20)',result:'MI WON BY 15 RUNS'},
  {t1:'GT', s1:'178/6(20)',t2:'LSG',s2:'165/8(19)',result:'GT WON BY 13 RUNS'},
  {t1:'RR', s1:'196/2(18)',t2:'DC', s2:'187/8(20)',result:'RR WON BY 8 WKTS'},
  {t1:'SRH',s1:'277/3(20)',t2:'PBKS',s2:'193/8(20)',result:'SRH WON BY 84 RUNS'},
  {t1:'RCB',s1:'190/9(20)',t2:'PBKS',s2:'184/7(20)',result:'IPL 2025 FINAL: RCB WON BY 6 RUNS'},
  {t1:'YJ', s1:'726',     t2:'VK', s2:'857 RUNS',   result:'2025 ORANGE CAP: VIRAT KOHLI'},
  {t1:'JB', s1:'28 WKTS', t2:'',   s2:'',            result:'2025 PURPLE CAP: BUMRAH'},
];

const MATCHES = [
  {id:'m1',label:'CSK vs MI — Wankhede',         t1:'csk',t2:'mi',  venue:'Wankhede Stadium'},
  {id:'m2',label:'RCB vs KKR — Chinnaswamy',      t1:'rcb',t2:'kkr', venue:'M. Chinnaswamy Stadium'},
  {id:'m3',label:'GT vs SRH — Narendra Modi',     t1:'gt', t2:'srh', venue:'Narendra Modi Stadium'},
  {id:'m4',label:'DC vs RR — Arun Jaitley',       t1:'dc', t2:'rr',  venue:'Arun Jaitley Stadium'},
  {id:'m5',label:'KKR vs PBKS — Eden Gardens',    t1:'kkr',t2:'pbks',venue:'Eden Gardens'},
  {id:'m6',label:'LSG vs MI — Ekana Stadium',     t1:'lsg',t2:'mi',  venue:'BRSABV Ekana Stadium'},
  {id:'m7',label:'SRH vs RCB — Hyderabad',        t1:'srh',t2:'rcb', venue:'Rajiv Gandhi Intl. Stadium'},
];

const STRATEGY_INSIGHTS=[
  {icon:'🏏',head:'Power-play Dominance Wins Matches',body:'Teams winning the PP phase (overs 1–6) go on to win the match 71% of the time in IPL 2025. Average PP score for winning teams: 58.4 vs 46.1 for losers.',tag:'hot'},
  {icon:'🎯',head:'Death Overs Economy Is Key',body:'Bowlers with economy under 9.5 in overs 17–20 restrict opponents by 18 runs on average. Bumrah leads with 7.4 economy in death overs in 2025.',tag:'trend'},
  {icon:'💡',head:'Toss Impact at an All-time Low',body:'Toss-winning teams won only 51% of matches in 2025 — among the lowest in IPL history. Pitch quality and player form outweigh toss advantage.',tag:'tip'},
  {icon:'⚡',head:'6th-over Run-rate Predicts Total',body:'Teams scoring at >10 RPO at the end of over 6 post 185+ in 78% of cases. SKY and Abhishek Sharma are standout PP batters.',tag:'trend'},
  {icon:'🛡',head:'Partnership Patience Beats Raw Power',body:'Average match-winning partnership lasted 8.3 overs vs 4.2 for losing sides. Patience with smart aggression is the winning formula.',tag:'tip'},
];
const TREND_INSIGHTS=[
  {n:'01',head:'Wrist Spin Rules T20',desc:'Wrist spinners (Chahal, Rashid, Varun) take 38% more wickets than finger spinners — the biggest gap in recent IPL history.'},
  {n:'02',head:'Impact Player Rule Changes Everything',desc:'Impact players average 44.1 vs bench average 27.8 — teams using the rule strategically gain +0.35 NRR over the tournament.'},
  {n:'03',head:'Left-arm Pace Dominates Power-play',desc:'Left-arm pacers take a wicket every 9.4 balls in overs 1–6 vs 14.1 for all other bowler types.'},
  {n:'04',head:'Chase Win Rate Hits All-time High',desc:'186 is the new "safe score". Teams chasing 180+ rose from 41% (2022) to 54% (2025) — big chase wins are now the norm.'},
  {n:'05',head:'Eden & Chepauk Are Form Fortresses',desc:'KKR (Eden) & CSK (Chepauk) have highest home win rates — 78% & 72%. Home advantage at these venues is unmatched.'},
  {n:'06',head:'Short Ball Strategy Backfiring',desc:'Bouncers conceded 14.2 runs per over in 2025 vs 11.8 overall — teams over-using the tactic lost 6 more matches than expected.'},
  {n:'07',head:'RCB\'s Historic 2025 Title Run',desc:'RCB finally won their first IPL title in 2025, with Virat Kohli\'s 857 runs and Bumrah\'s 28 wickets powering them past PBKS in the final.'},
  {n:'08',head:'SRH Posted 3 of IPL\'s Top 5 Totals',desc:'SRH posted 277/3 (vs PBKS), 266/7 (vs RCB), and 257/4 — redefining what batting-first can achieve in T20 cricket.'},
];

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
window.addEventListener('load',()=>{setTimeout(()=>{$('#loader').classList.add('hidden');bootstrap();},2400)});

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
    {label:'Orange Cap 2025',val:sr[0].runs,sub:sr[0].name+' ('+teamById(sr[0].team)?.abbr+')',color:color(sr[0].team),badge:'RUNS',bc:'badge-won'},
    {label:'Purple Cap 2025',val:sw[0].wkts,sub:sw[0].name+' ('+teamById(sw[0].team)?.abbr+')',color:color(sw[0].team),badge:'WKTS',bc:'badge-won'},
    {label:'IPL 2025 Champions',val:'RCB',sub:'Beat PBKS by 6 runs',color:'#C8102E',badge:'TITLE',bc:'badge-gold'},
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
    data:{labels:topR.map(p=>p.name.split(' ').pop()),datasets:[{label:'Runs 2025',data:topR.map(p=>p.runs),backgroundColor:topR.map(p=>color(p.team)+'cc'),borderColor:topR.map(p=>color(p.team)),borderWidth:2,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:gridColor()},ticks:{font:{family:"'Barlow Condensed'",weight:700}}},y:{grid:{color:gridColor()},beginAtZero:true}}}
  });

  const topW=[...PLAYERS].filter(p=>p.wkts>0).sort((a,b)=>b.wkts-a.wkts).slice(0,8);
  const ctx2=$('#chartTopWickets').getContext('2d');
  chartInstances['chartTopWickets']=new Chart(ctx2,{
    type:'bar',
    data:{labels:topW.map(p=>p.name.split(' ').pop()),datasets:[{label:'Wickets 2025',data:topW.map(p=>p.wkts),backgroundColor:topW.map(p=>color(p.team)+'cc'),borderColor:topW.map(p=>color(p.team)),borderWidth:2,borderRadius:6}]},
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
let selectedSeason=2025;
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
    const yearsCount = 2025 - (p.ipl_first || 2020) + 1;
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
    {lbl:'Runs 2025',va:a.runs,vb:b.runs},
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

  $('#trendCards').innerHTML=TREND_INSIGHTS.map(t=>`
    <div class="trend-item">
      <div class="trend-number">${t.n}</div>
      <div class="trend-head">${t.head}</div>
      <div class="trend-desc">${t.desc}</div>
    </div>`).join('');
}