/* ==========================================================
   F7 PLANNER
   Semester III
========================================================== */

const timetable = {

  monday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Object Oriented Programming using Java",
      code:"24B15CS214",
      teacher:"Pallavi",
      room:"228",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Economics",
      code:"15B11HS211",
      teacher:"Alok",
      room:"3040",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Theory of Computation",
      code:"24B11CS212",
      teacher:"Ankit",
      room:"3040",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Free Time",
      type:"Free"
    },
    {
      start:"01:00 PM",
      end:"01:50 PM",
      subject:"Lunch Break",
      type:"Lunch"
    },
    {
      start:"02:00 PM",
      end:"03:50 PM",
      subject:"Database Management Systems Lab",
      code:"24B15CS215",
      teacher:"Vaibhav, Ankit, Priyanka Kwatra, NFCS19",
      room:"Lab C12",
      type:"Lab",
      batch:"F7 + F8 + F9"
    },
    {
      start:"04:00 PM",
      end:"04:50 PM",
      subject:"Free Time",
      type:"Free"
    }
  ],

  tuesday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Mathematical Foundations for AI & Data Science Tutorial",
      code:"25B11MA213",
      teacher:"Ajay",
      room:"3117",
      type:"Tutorial",
      batch:"F7"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Mathematical Foundations for AI & Data Science",
      code:"25B11MA213",
      teacher:"Ajay",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Database Management Systems Lab",
      code:"24B11CS213",
      teacher:"Noor Muhammad, Aditi Sharma, SHG, Kedar Nath, SKM",
      room:"Lab C12",
      type:"Lab",
      batch:"F7 + F8 + F9"
    },
    {
      start:"01:00 PM",
      end:"01:50 PM",
      subject:"Lunch Break",
      type:"Lunch"
    },
    {
      start:"02:00 PM",
      end:"02:50 PM",
      subject:"Data Structures Tutorial",
      code:"15B11CI311",
      teacher:"NFCS12",
      room:"3116",
      type:"Tutorial",
      batch:"F7"
    },
    {
      start:"03:00 PM",
      end:"04:50 PM",
      subject:"Free Time",
      type:"Free"
    }
  ],

  wednesday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Free Time",
      type:"Free"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Mathematical Foundations for AI & Data Science",
      code:"25B11MA213",
      teacher:"NFMATHS3",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Data Structures",
      code:"15B11CI311",
      teacher:"Ayushi Pandey",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Economics",
      code:"15B11HS211",
      teacher:"Alok",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"01:00 PM",
      end:"01:50 PM",
      subject:"Lunch Break",
      type:"Lunch"
    },
    {
      start:"02:00 PM",
      end:"02:50 PM",
      subject:"Mathematical Foundations for AI & Data Science",
      code:"25B11MA213",
      teacher:"Ajay",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"03:00 PM",
      end:"03:50 PM",
      subject:"Free Time",
      type:"Free"
    },
    {
      start:"04:00 PM",
      end:"04:50 PM",
      subject:"Database Management Systems",
      code:"24B11CS213",
      teacher:"Gaurav Sinha",
      room:"3093",
      type:"Lecture",
      batch:"F7 + F8"
    }
  ],
  thursday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Mathematical Foundations for AI & Data Science",
      code:"25B11MA213",
      teacher:"NFMATHS4",
      room:"3045",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Data Structures Lab",
      code:"15B17CI518",
      teacher:"DTS",
      room:"244B",
      type:"Lab",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Python Lab",
      code:"15B17CI371",
      teacher:"Zubair, NFCS32, NFCS17",
      room:"Cyber Security Lab (CR105)",
      type:"Lab",
      batch:"F7 + F8 + F9"
    },
    {
      start:"01:00 PM",
      end:"01:50 PM",
      subject:"Lunch Break",
      type:"Lunch"
    },
    {
      start:"02:00 PM",
      end:"02:50 PM",
      subject:"Theory of Computation",
      code:"24B11CS212",
      teacher:"Ankit",
      room:"3096",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"03:00 PM",
      end:"03:50 PM",
      subject:"Data Structures",
      code:"15B11CI311",
      teacher:"Ayushi Pandey",
      room:"3096",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"04:00 PM",
      end:"04:50 PM",
      subject:"Free Time",
      type:"Free"
    }
  ],

  friday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Free Time",
      type:"Free"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Economics",
      code:"15B11HS211",
      teacher:"Amba Aggarwal",
      room:"3045",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Object Oriented Programming using Java Lab",
      code:"24B15CS214",
      teacher:"Naved",
      room:"Computer Lab 2",
      type:"Lab",
      batch:"F7 + F8 + F9"
    },
    {
      start:"01:00 PM",
      end:"01:50 PM",
      subject:"Lunch Break",
      type:"Lunch"
    },
    {
      start:"02:00 PM",
      end:"02:50 PM",
      subject:"Database Management Systems",
      code:"24B11CS213",
      teacher:"Gaurav Sinha",
      room:"3096",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"03:00 PM",
      end:"03:50 PM",
      subject:"Mathematical Foundations for AI & Data Science Tutorial",
      code:"25B11MA213",
      teacher:"NFMATHS",
      room:"3117",
      type:"Tutorial",
      batch:"F7"
    },
    {
      start:"04:00 PM",
      end:"04:50 PM",
      subject:"Software Engineering",
      code:"24B11CS223",
      teacher:"Kedar Nath",
      room:"3045",
      type:"Lecture",
      batch:"F7 + F8"
    }
  ],

  saturday:[
    {
      start:"09:00 AM",
      end:"09:50 AM",
      subject:"Free Time",
      type:"Free"
    },
    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Database Management Systems",
      code:"24B11CS213",
      teacher:"Vikas Sharma",
      room:"3045",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Database Management Systems",
      code:"24B11CS213",
      teacher:"Gaurav Sinha",
      room:"3098",
      type:"Lecture",
      batch:"F7 + F8"
    },
    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Free Time",
      type:"Free"
    }
  ]

};

const days=[
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const jsDays=[
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

function toMinutes(time){

  let [clock,ampm]=time.split(" ");

  let [h,m]=clock.split(":").map(Number);

  if(ampm==="PM" && h!==12) h+=12;

  if(ampm==="AM" && h===12) h=0;

  return h*60+m;

}

const subjectColors={

  "Object Oriented Programming using Java":"#588157",

  "Object Oriented Programming using Java Lab":"#588157",

  "Database Management Systems":"#6B705C",

  "Database Management Systems Lab":"#6B705C",

  "Theory of Computation":"#7F5539",

  "Economics":"#D4A373",

  "Data Structures":"#52796F",

  "Data Structures Lab":"#52796F",

  "Software Engineering":"#3A5A40",

  "Python Lab":"#457B9D",

  "Mathematical Foundations for AI & Data Science":"#A3B18A",

  "Mathematical Foundations for AI & Data Science Tutorial":"#A3B18A"

};

function getSubjectColor(name){

  return subjectColors[name] || "#6B705C";

}

function getBadgeColor(type){

  switch(type){

    case "Lecture":
      return "#588157";

    case "Tutorial":
      return "#E9C46A";

    case "Lab":
      return "#7B2CBF";

    case "Lunch":
      return "#DDB892";

    case "Free":
      return "#ADB5BD";

    default:
      return "#588157";

  }

}
/* ==========================================================
   DOM ELEMENTS
========================================================== */

let currentDayIndex = 0;

const slotsEl = document.getElementById("slots");
const ball = document.getElementById("motionBall");
const dayButtons = document.querySelectorAll(".day");

const currentClassEl = document.getElementById("currentClass");
const nextClassEl = document.getElementById("nextClass");
const todayNameEl = document.getElementById("todayName");
const clockEl = document.getElementById("clock");


/* ==========================================================
   DASHBOARD
========================================================== */

function updateDashboard(){

  const day = days[currentDayIndex];

  if(todayNameEl){

    todayNameEl.innerHTML =
        day.charAt(0).toUpperCase()+day.slice(1);

  }

  const current=getCurrentClass(day);
  const next=getNextClass(day);

  if(currentClassEl){

    currentClassEl.innerHTML=
        current
            ? current.subject
            : "No Class";

  }

  if(nextClassEl){

    nextClassEl.innerHTML=
        next
            ? `${next.start}<br>${next.subject}`
            : "No More Classes";

  }

}



/* ==========================================================
   CURRENT CLASS
========================================================== */

function getCurrentClass(day){

  const classes=timetable[day];

  const nowMin=
      new Date().getHours()*60+
      new Date().getMinutes();

  for(const cls of classes){

    if(!cls.start) continue;

    if(

        nowMin>=toMinutes(cls.start)

        &&

        nowMin<=toMinutes(cls.end)

    ){

      return cls;

    }

  }

  return null;

}



/* ==========================================================
   NEXT CLASS
========================================================== */

function getNextClass(day){

  const classes=timetable[day];

  const nowMin=
      new Date().getHours()*60+
      new Date().getMinutes();

  for(const cls of classes){

    if(!cls.start) continue;

    if(toMinutes(cls.start)>nowMin){

      return cls;

    }

  }

  return null;

}



/* ==========================================================
   CLOCK
========================================================== */

function updateClock(){

  if(!clockEl) return;

  clockEl.innerHTML=

      new Date().toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

      });

}

setInterval(updateClock,1000);

updateClock();
/* ==========================================================
   RENDER TIMETABLE
========================================================== */

function renderDayByIndex(index){

  currentDayIndex=index;

  const day=days[index];

  dayButtons.forEach(btn=>btn.classList.remove("active"));

  dayButtons[index].classList.add("active");

  slotsEl.innerHTML="";

  const classes=timetable[day];

  const nowMin=new Date().getHours()*60+new Date().getMinutes();

  classes.forEach(cls=>{

    const current=

        cls.start &&

        nowMin>=toMinutes(cls.start)

        &&

        nowMin<=toMinutes(cls.end);

    const badgeColor=getBadgeColor(cls.type);

    const subjectColor=getSubjectColor(cls.subject);

    slotsEl.innerHTML+=`

<div class="slot">

<div class="card ${current?"current":""}">

<div class="top-row">

<div class="time">

${cls.start || ""} - ${cls.end || ""}

</div>

<div class="badge"

style="background:${badgeColor};">

${cls.type}

</div>

</div>

<div class="subject"

style="color:${subjectColor};">

${cls.subject}

</div>

${cls.code ? `

<div class="code">

${cls.code}

</div>

`:""}

${cls.teacher ? `

<div class="info">

👨‍🏫 ${cls.teacher}

</div>

`:""}

${cls.room ? `

<div class="info">

📍 ${cls.room}

</div>

`:""}

${cls.batch ? `

<div class="info">

👥 ${cls.batch}

</div>

`:""}

</div>

</div>

`;

  });

  updateDashboard();

  requestAnimationFrame(updateBall);

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

}
/* ==========================================================
   TIMELINE BALL
========================================================== */

function updateBall(){

  const timeline=document.querySelector(".timeline");

  if(!timeline) return;

  const rect=timeline.getBoundingClientRect();

  const middle=

      window.scrollY+

      window.innerHeight/2;

  const progress=Math.min(

      Math.max(

          (middle-rect.top)/rect.height,

          0

      ),

      1

  );

  ball.style.top=

      progress*(rect.height-18)

      +"px";

}

window.addEventListener("scroll",updateBall);

window.addEventListener("resize",updateBall);
/* ==========================================================
   DAY BUTTON EVENTS
========================================================== */

dayButtons.forEach((btn,index)=>{

  btn.addEventListener("click",()=>{

    renderDayByIndex(index);

  });

});


/* ==========================================================
   TOUCH SWIPE
========================================================== */

let startX=0;
let endX=0;

const swipeArea=document.querySelector(".swipe-area");

if(swipeArea){

  swipeArea.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

  });

  swipeArea.addEventListener("touchend",(e)=>{

    endX=e.changedTouches[0].clientX;

    handleSwipe();

  });

}


/* ==========================================================
   DESKTOP SWIPE
========================================================== */

let mouseDown=false;

if(swipeArea){

  swipeArea.addEventListener("mousedown",(e)=>{

    mouseDown=true;

    startX=e.clientX;

  });

  swipeArea.addEventListener("mouseup",(e)=>{

    if(!mouseDown)return;

    mouseDown=false;

    endX=e.clientX;

    handleSwipe();

  });

}


/* ==========================================================
   HANDLE SWIPE
========================================================== */

function handleSwipe(){

  const diff=endX-startX;

  if(Math.abs(diff)<60)return;

  if(diff<0){

    if(currentDayIndex<days.length-1){

      renderDayByIndex(currentDayIndex+1);

    }

  }

  if(diff>0){

    if(currentDayIndex>0){

      renderDayByIndex(currentDayIndex-1);

    }

  }

}


/* ==========================================================
   KEYBOARD SUPPORT
========================================================== */

document.addEventListener("keydown",(e)=>{

  if(e.key==="ArrowLeft"){

    if(currentDayIndex>0){

      renderDayByIndex(currentDayIndex-1);

    }

  }

  if(e.key==="ArrowRight"){

    if(currentDayIndex<days.length-1){

      renderDayByIndex(currentDayIndex+1);

    }

  }

});
/* ==========================================================
   AUTO SELECT TODAY
========================================================== */

let today=jsDays[new Date().getDay()];

if(!days.includes(today)){

  today="monday";

}

currentDayIndex=days.indexOf(today);


/* ==========================================================
   AUTO REFRESH
========================================================== */

setInterval(()=>{

  renderDayByIndex(currentDayIndex);

},60000);


/* ==========================================================
   UPDATE TITLE
========================================================== */

function updateTitle(){

  const dayName=

      days[currentDayIndex];

  document.title=

      `🌿 F7 Planner • ${dayName.charAt(0).toUpperCase()+dayName.slice(1)}`;

}

setInterval(updateTitle,1000);

updateTitle();
/* ==========================================================
   CURRENT CLASS AUTO HIGHLIGHT
========================================================== */

function highlightCurrentCard(){

  const cards=document.querySelectorAll(".card");

  cards.forEach(card=>{

    card.classList.remove("current");

  });

  const classes=timetable[days[currentDayIndex]];

  const nowMin=new Date().getHours()*60+new Date().getMinutes();

  classes.forEach((cls,index)=>{

    if(!cls.start) return;

    if(

        nowMin>=toMinutes(cls.start)

        &&

        nowMin<=toMinutes(cls.end)

    ){

      if(cards[index]){

        cards[index].classList.add("current");

      }

    }

  });

}

setInterval(highlightCurrentCard,30000);


/* ==========================================================
   REFRESH DASHBOARD
========================================================== */

setInterval(()=>{

  updateDashboard();

  highlightCurrentCard();

},30000);


/* ==========================================================
   TODAY NAME
========================================================== */

function updateTodayName(){

  if(!todayNameEl) return;

  const day=days[currentDayIndex];

  todayNameEl.innerHTML=

      day.charAt(0).toUpperCase()

      +

      day.slice(1);

}

updateTodayName();


/* ==========================================================
   SMOOTH CARD ANIMATION
========================================================== */

function animateCards(){

  const cards=document.querySelectorAll(".card");

  cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(20px)";

    setTimeout(()=>{

      card.style.transition=".35s ease";

      card.style.opacity="1";

      card.style.transform="translateY(0px)";

    },index*70);

  });

}


/* ==========================================================
   OVERRIDE RENDER
========================================================== */

const oldRender=renderDayByIndex;

renderDayByIndex=function(index){

  oldRender(index);

  updateDashboard();

  updateTodayName();

  highlightCurrentCard();

  animateCards();

  updateBall();

};


/* ==========================================================
   START APP
========================================================== */

renderDayByIndex(currentDayIndex);

updateDashboard();

updateTodayName();

highlightCurrentCard();

animateCards();

updateClock();

updateTitle();

updateBall();


/* ==========================================================
   SERVICE FUNCTIONS
========================================================== */

window.addEventListener("focus",()=>{

  renderDayByIndex(currentDayIndex);

});

window.addEventListener("visibilitychange",()=>{

  if(!document.hidden){

    renderDayByIndex(currentDayIndex);

  }

});


/* ==========================================================
   END
========================================================== */

console.log("🌿 F7 Planner Loaded Successfully");