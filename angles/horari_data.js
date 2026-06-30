const CLOCK_POOL = [
  {h:3,  m:0,  expr:"It's three o'clock"},
  {h:6,  m:0,  expr:"It's six o'clock"},
  {h:9,  m:0,  expr:"It's nine o'clock"},
  {h:12, m:0,  expr:"It's twelve o'clock"},
  {h:1,  m:0,  expr:"It's one o'clock"},
  {h:4,  m:15, expr:"It's quarter past four"},
  {h:7,  m:15, expr:"It's quarter past seven"},
  {h:9,  m:15, expr:"It's quarter past nine"},
  {h:11, m:15, expr:"It's quarter past eleven"},
  {h:2,  m:30, expr:"It's half past two"},
  {h:5,  m:30, expr:"It's half past five"},
  {h:8,  m:30, expr:"It's half past eight"},
  {h:11, m:30, expr:"It's half past eleven"},
  {h:3,  m:45, expr:"It's quarter to four"},
  {h:6,  m:45, expr:"It's quarter to seven"},
  {h:9,  m:45, expr:"It's quarter to ten"},
  {h:11, m:45, expr:"It's quarter to twelve"},
];

const EXPR_POOL = [
  {expr:"It's quarter past nine",   dig:"9:15"},
  {expr:"It's half past two",       dig:"2:30"},
  {expr:"It's quarter to six",      dig:"5:45"},
  {expr:"It's three o'clock",       dig:"3:00"},
  {expr:"It's quarter past twelve", dig:"12:15"},
  {expr:"It's half past seven",     dig:"7:30"},
  {expr:"It's quarter to four",     dig:"3:45"},
  {expr:"It's one o'clock",         dig:"1:00"},
  {expr:"It's half past eleven",    dig:"11:30"},
  {expr:"It's quarter to ten",      dig:"9:45"},
  {expr:"It's quarter past five",   dig:"5:15"},
  {expr:"It's half past nine",      dig:"9:30"},
  {expr:"It's four o'clock",        dig:"4:00"},
  {expr:"It's eight o'clock",       dig:"8:00"},
  {expr:"It's ten o'clock",         dig:"10:00"},
  {expr:"It's two o'clock",         dig:"2:00"},
  {expr:"It's quarter past one",    dig:"1:15"},
  {expr:"It's quarter past three",  dig:"3:15"},
  {expr:"It's quarter past six",    dig:"6:15"},
  {expr:"It's half past one",       dig:"1:30"},
  {expr:"It's half past three",     dig:"3:30"},
  {expr:"It's half past six",       dig:"6:30"},
  {expr:"It's quarter to two",      dig:"1:45"},
  {expr:"It's quarter to five",     dig:"4:45"},
  {expr:"It's quarter to eight",    dig:"7:45"},
];

const MTT = {
  days: ['Monday','Tuesday','Wednesday'],
  times: ['9:00','10:00','11:00'],
  grid: [
    ['Maths','English','Science'],
    ['History','Art','Maths'],
    ['PE','Science','Music'],
  ],
};

const ALL_SUBJ = ['Maths','English','Science','History','Art','PE','Music','Geography','Drama','ICT'];

const S5 = {
  days: ['Monday','Tuesday','Wednesday'],
  times: ['9:00','10:00','11:00'],
  grid: [
    ['English','Maths','History'],
    ['Science','PE','Drama'],
    ['Art', null, null],
  ],
};

const S6_POOL = [
  {words:["Have","we","got","English","on","Monday?"],         correct:"Have we got English on Monday?"},
  {words:["I've","got","Maths","at","nine","o'clock."],        correct:"I've got Maths at nine o'clock."},
  {words:["We","haven't","got","PE","on","Tuesday."],          correct:"We haven't got PE on Tuesday."},
  {words:["Have","we","got","Art","on","Wednesday?"],          correct:"Have we got Art on Wednesday?"},
  {words:["She's","got","Science","on","Wednesday."],          correct:"She's got Science on Wednesday."},
  {words:["We","haven't","got","Drama","on","Monday."],        correct:"We haven't got Drama on Monday."},
  {words:["I've","got","History","at","ten","o'clock."],       correct:"I've got History at ten o'clock."},
  {words:["Have","we","got","Music","on","Wednesday?"],        correct:"Have we got Music on Wednesday?"},
  {words:["He","hasn't","got","Art","on","Thursday."],         correct:"He hasn't got Art on Thursday."},
  {words:["She","hasn't","got","ICT","on","Friday."],          correct:"She hasn't got ICT on Friday."},
  {words:["Have","you","got","PE","at","eleven","o'clock?"],   correct:"Have you got PE at eleven o'clock?"},
  {words:["I've","got","Geography","on","Thursday."],           correct:"I've got Geography on Thursday."},
  {words:["We","haven't","got","Drama","on","Wednesday."],      correct:"We haven't got Drama on Wednesday."},
  {words:["I","haven't","got","Maths","on","Friday."],          correct:"I haven't got Maths on Friday."},
];

const S7_POOL = [
  {stmt:"We've got Maths on Monday at 9:00.",      ans:true},
  {stmt:"We've got History on Tuesday at 10:00.",  ans:false},
  {stmt:"We've got PE on Monday at 11:00.",        ans:true},
  {stmt:"We've got English on Wednesday at 9:00.", ans:false},
  {stmt:"We haven't got Drama this week.",          ans:true},
  {stmt:"We've got Science on Tuesday at 11:00.",  ans:true},
  {stmt:"We've got Music on Wednesday at 11:00.",  ans:true},
  {stmt:"We've got Art on Wednesday at 10:00.",    ans:false},
  {stmt:"We've got English on Tuesday at 9:00.",   ans:true},
  {stmt:"We've got History on Wednesday at 10:00.",  ans:false},
  {stmt:"We've got Science on Wednesday at 9:00.",   ans:true},
  {stmt:"We've got History on Monday at 10:00.",     ans:true},
  {stmt:"We've got Art on Tuesday at 10:00.",        ans:true},
  {stmt:"We've got Maths on Tuesday at 11:00.",      ans:false},
  {stmt:"We haven't got Geography this week.",        ans:true},
];
