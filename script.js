const timetable = {
  monday: [
    { start:"09:00 AM", end:"10:50 AM", subject:"Software Development Lab-II", teacher:"Shruti Gupta, Arti Jain, Jatin", room:"CL1", type:"Lab" },
    { start:"11:00 AM", end:"11:50 AM", subject:"Software Development Fundamentals-II", teacher:"MKS", room:"217", type:"Lecture" }
  ],
  tuesday: [
    { start:"09:00 AM", end:"09:50 AM", subject:"SDF-II Tutorial", teacher:"MKS, Zubair", room:"3084", type:"Tutorial" },
    { start:"10:00 AM", end:"10:50 AM", subject:"Mathematics-2", teacher:"Pritee Agarwal", room:"3045", type:"Lecture" },
    { start:"11:00 AM", end:"11:50 AM", subject:"Mathematics-2 Tutorial", teacher:"Haroon Sir", room:"127", type:"Tutorial" },
    { start:"01:00 PM", end:"03:50 PM", subject:"Workshop", teacher:"Niraj Kumar", room:"WS04", type:"Lab" }
  ],
  wednesday: [
    { start:"09:00 AM", end:"10:50 AM", subject:"Physics Lab-2", teacher:"Suneet Kumar Awasthi", room:"41", type:"Lab" },
    { start:"11:00 AM", end:"11:50 AM", subject:"SDF-II", teacher:"MKS", room:"228", type:"Lecture" },
    { start:"01:00 PM", end:"01:50 PM", subject:"Universal Human Values", teacher:"Urbashi Satpathy", room:"3028", type:"Lecture" },
    { start:"02:00 PM", end:"02:50 PM", subject:"Mathematics-2", teacher:"Pritee Agarwal", room:"3028", type:"Lecture" },
    { start:"03:00 PM", end:"03:50 PM", subject:"Physics-2", teacher:"Urbashi Satpathy", room:"3028", type:"Lecture" }
  ],
  thursday: [
    { start:"09:00 AM", end:"10:50 AM", subject:"Life Skills & Professional Communication Lab", teacher:"Sanjay", room:"240", type:"Lab" },
    { start:"11:00 AM", end:"11:50 AM", subject:"Mathematics-2", teacher:"Pritee Agarwal", room:"3037", type:"Lecture" },
    { start:"01:00 PM", end:"01:50 PM", subject:"SDF-II", teacher:"MKS", room:"3045", type:"Lecture" },
    { start:"02:00 PM", end:"02:50 PM", subject:"Mathematics-2", teacher:"Pritee Agarwal", room:"3045", type:"Lecture" },
    { start:"03:00 PM", end:"03:50 PM", subject:"Physics-2", teacher:"Urbashi Satpathy", room:"3045", type:"Lecture" },
    { start:"04:00 PM", end:"04:50 PM", subject:"UHV Tutorial", teacher:"Nilu Chaudhary", room:"116", type:"Tutorial" }
  ],
  friday: "OFF",
  saturday: [
    { start:"09:00 AM", end:"09:50 AM", subject:"Physics-2 Tutorial", teacher:"Urbashi Satpathy", room:"116", type:"Tutorial" },
    { start:"10:00 AM", end:"10:50 AM", subject:"Physics-2", teacher:"Urbashi Satpathy", room:"3045", type:"Lecture" },
    { start:"12:00 PM", end:"12:50 PM", subject:"Universal Human Values", teacher:"Urbashi Satpathy", room:"3045", type:"Lecture" }
  ]
};

const days = ["monday","tuesday","wednesday","thursday","friday","saturday"];
const jsDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const timeline = document.querySelector(".timeline");
const motionBall = document.querySelector(".motion-ball");
const dayButtons = document.querySelectorAll(".day");

function toMinutes(t){
  let [time,ampm]=t.split(" ");
  let [h,m]=time.split(":").map(Number);
  if(ampm==="PM" && h!==12) h+=12;
  if(ampm==="AM" && h===12) h=0;
  return h*60+m;
}

function renderDay(day){
  timeline.innerHTML = `<div class="motion-ball"></div>`;
  timetable[day].forEach(cls=>{
    timeline.innerHTML += `
      <div class="slot">
        <div class="card">
          <div class="time">${cls.start} – ${cls.end}</div>
          <div class="title">${cls.subject}</div>
          <div class="meta">
            <div>👨‍🏫 ${cls.teacher}</div>
            <div>📍 ${cls.room}</div>
            <div>📘 ${cls.type}</div>
          </div>
        </div>
      </div>`;
  });
  setTimeout(updateMotionBall,200);
}

function updateMotionBall(){
  const ball = document.querySelector(".motion-ball");
  const slots = document.querySelectorAll(".slot");
  if(!ball||!slots.length) return;

  let target = slots[0];
  const now = new Date();
  const nowMin = now.getHours()*60 + now.getMinutes();

  slots.forEach(slot=>{
    const start = slot.querySelector(".time").innerText.split("–")[0].trim();
    if(nowMin >= toMinutes(start)) target = slot;
  });

  ball.style.top = target.offsetTop + 20 + "px";
}

let today = jsDays[new Date().getDay()];
if(!days.includes(today)) today="monday";

dayButtons.forEach(btn=>{
  btn.onclick=()=>{
    dayButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderDay(btn.dataset.day);
  };
});

document.querySelector(`[data-day="${today}"]`).classList.add("active");
renderDay(today);

