/* ==========================================================
   F7 PLANNER
   Semester III
========================================================== */

const LUNCH = {
  subject: "🍽️ Lunch Break",
  code: "",
  teacher: "",
  room: "",
  batch: "",
  type: "Break"
};

const timetable = {

  monday: [

    {
      start:"9:00 AM",
      end:"9:50 AM",
      subject:"Unix Programming Lab",
      code:"UPL",
      teacher:"PLV",
      room:"228",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Economics",
      code:"ECO",
      teacher:"ALOK",
      room:"3040",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Theory of Computation",
      code:"TOC",
      teacher:"ANK",
      room:"3040",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Math. Foundations for AI & DS",
      code:"MFAIDS",
      teacher:"MUKESH",
      room:"225",
      batch:"F7 + F8",
      type:"Tutorial"
    },

    {
      ...LUNCH,
      start:"12:50 PM",
      end:"2:00 PM"
    },

    {
      start:"2:00 PM",
      end:"3:50 PM",
      subject:"OOP using Java Lab",
      code:"OOP Lab",
      teacher:"Vaibhav / ANK / PRM",
      room:"CL2",
      batch:"F8 + F7(NFCS19)",
      type:"Practical"
    }

  ],

  tuesday:[

    {
      start:"9:00 AM",
      end:"9:50 AM",
      subject:"Math. Foundations for AI & DS",
      code:"MFAIDS",
      teacher:"AJAY",
      room:"3117",
      batch:"F7 + F8",
      type:"Tutorial"
    },

    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Math. Foundations for AI & DS",
      code:"MFAIDS",
      teacher:"AJAY",
      room:"3093",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Database Management Systems Lab",
      code:"DBMS Lab",
      teacher:"NMD / ADS / SHG / KNS / SKM",
      room:"CL2",
      batch:"F8 + F7(NFCS19)",
      type:"Practical"
    },

    {
      ...LUNCH,
      start:"12:50 PM",
      end:"2:00 PM"
    },

    {
      start:"2:00 PM",
      end:"2:50 PM",
      subject:"Data Structures",
      code:"DS",
      teacher:"NFCS12",
      room:"3116",
      batch:"F7 + F8",
      type:"Tutorial"
    }

  ],

  wednesday:[

    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Data Structures",
      code:"DS",
      teacher:"AYP",
      room:"3093",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Economics",
      code:"ECO",
      teacher:"ALOK",
      room:"3093",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      ...LUNCH,
      start:"12:50 PM",
      end:"2:00 PM"
    },

    {
      start:"2:00 PM",
      end:"2:50 PM",
      subject:"Math. Foundations for AI & DS",
      code:"MFAIDS",
      teacher:"AJAY",
      room:"3093",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"3:00 PM",
      end:"3:50 PM",
      subject:"Database Management Systems",
      code:"DBMS",
      teacher:"GAH",
      room:"3093",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"4:00 PM",
      end:"4:50 PM",
      subject:"Economics",
      code:"ECO",
      teacher:"PRV",
      room:"3116",
      batch:"F7 + F8",
      type:"Tutorial"
    }

  ],

  thursday:[

    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Data Structures Lab",
      code:"DS Lab",
      teacher:"NRP / ANU / AYP / DTS",
      room:"CL1",
      batch:"F8 + f7 (NFCS12)",
      type:"Practical"
    },

    {
      ...LUNCH,
      start:"12:50 PM",
      end:"2:00 PM"
    },

    {
      start:"2:00 PM",
      end:"2:50 PM",
      subject:"Theory of Computation",
      code:"TOC",
      teacher:"ANK",
      room:"3096",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"3:00 PM",
      end:"3:50 PM",
      subject:"Data Structures",
      code:"DS",
      teacher:"AYP",
      room:"3096",
      batch:"F7 + F8",
      type:"Lecture"
    }

  ],

  friday:[

    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Database Management Systems",
      code:"DBMS",
      teacher:"GAH",
      room:"3096",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"11:00 AM",
      end:"12:50 PM",
      subject:"Unix Programming Lab",
      code:"UP Lab",
      teacher:"ARJ / Naved",
      room:"CL2",
      batch:"F8+F7",
      type:"Practical"
    },

    {
      ...LUNCH,
      start:"12:50 PM",
      end:"3:00 PM"
    },

    {
      start:"3:00 PM",
      end:"3:50 PM",
      subject:"Data Structures",
      code:"DS",
      teacher:"AYP",
      room:"TBA",
      batch:"F7 + F8",
      type:"Lecture"
    }

  ],

  saturday:[

    {
      start:"10:00 AM",
      end:"10:50 AM",
      subject:"Math. Foundations for AI & DS",
      code:"MFAIDS",
      teacher:"AJAY",
      room:"3098",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"11:00 AM",
      end:"11:50 AM",
      subject:"Database Management Systems",
      code:"DBMS",
      teacher:"GAH",
      room:"3098",
      batch:"F7 + F8",
      type:"Lecture"
    },

    {
      start:"12:00 PM",
      end:"12:50 PM",
      subject:"Theory of Computation",
      code:"TOC",
      teacher:"ANK",
      room:"3098",
      batch:"F7 + F8",
      type:"Lecture"
    }

  ]

};
const days = [
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

    case "Break":
      return "#F4B183";

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


}
/* ==========================================================
   TIMELINE BALL
========================================================== */

function updateBall() {

  const timeline = document.querySelector(".timeline");

  if (!timeline || !ball) return;

  const timelineRect = timeline.getBoundingClientRect();

  const timelineTop = timelineRect.top + window.scrollY;

  const timelineHeight = timeline.offsetHeight;

  const viewportCenter =
      window.scrollY + window.innerHeight / 2;

  let progress =
      (viewportCenter - timelineTop) / timelineHeight;

  progress = Math.max(0, Math.min(progress, 1));

  ball.style.top =
      (timelineHeight - ball.offsetHeight) * progress + "px";
}


/* ---------- Events ---------- */

window.addEventListener(
    "scroll",
    () => requestAnimationFrame(updateBall),
    { passive: true }
);

window.addEventListener(
    "resize",
    updateBall
);

window.addEventListener(
    "load",
    updateBall
);
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