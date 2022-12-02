//Date & Time
let noClock = false;
let _12hour = false;
let noDate = false;
let ddmmyy = true;
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let background = "#0e0e0e";

document.addEventListener('contextmenu', event => event.preventDefault());

function UpdateClock() {
    let timeEl = document.getElementById('clock');
    let dateEl = document.getElementById('date');
    let dayEl = document.getElementById('day');
    if (noClock)
        timeEl.style.display = "none";
    else
        timeEl.style.display = "block";
    if (noDate) {
        dateEl.style.display = "none";
        dayEl.style.display = "none";
    } else {
        dateEl.style.display = "block";
        dayEl.style.display = "block";
    }
    let d = new Date();
    if (_12hour)
        timeEl.innerHTML = `${new Intl.DateTimeFormat('en-US', { 'hour': '2-digit', 'minute': '2-digit', 'hour12': false }).format(d)}`.replace("AM", '').replace("PM", '');
    else
        timeEl.innerHTML = `${new Intl.DateTimeFormat('en-US', { 'hour': '2-digit', 'minute': '2-digit', 'hour12': false }).format(d)}`;
    if (ddmmyy)
        dateEl.innerText = `${new Intl.DateTimeFormat('en-GB', { 'day': '2-digit', 'month': 'long', 'year': 'numeric' }).format(d).replace(',', '')}`;
    else
        dateEl.innerText = `${new Intl.DateTimeFormat('en-US', { 'day': '2-digit', 'month': '2-digit', 'year': '2-digit' }).format(d).replace(',', '')}`;
    dayEl.innerText = dayArr[d.getDay()];
    setTimeout(UpdateClock, 1);
}
UpdateClock();

function Listener(name, val) {
    switch (name) {
        case "timeToggle":
            noClock = !val;
            break;
        case "dateToggle":
            noDate = !val;
            break;
        case "_12hour":
            _12hour = val;
            break;
        case "ddmmyy":
            ddmmyy = !val;
            break;
        case "fontColor":
            document.querySelector(".date-time").style.color = val;
    }
}