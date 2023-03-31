//Declaring vars and const from html

const hmsd = document.getElementById('hmsd');
const dmy = document.getElementById('dmy');

//Runnning the time loop

setInterval(() => {

    //Fetching the data
let d = new Date();
var min = d.getMinutes();
var sec = d.getSeconds();
var hrs = d.getHours();
var day = d.getDay();
var date = d.getDate();
var year = d.getFullYear();
var mon = d.getMonth();
var AMPM;
//Array for month and day

var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//getting the month and dayname

var monname = mL[mon];
var dayname = dayNames[day];



//Writing if else for AMPM and hours and adding 0 in min and seconds

if (hrs>12) {
    hrs = hrs - 12;
    AMPM = "PM";
}
else{
    AMPM = "AM";
}


if (min < 10) {
    min = "0" + min;
}

if (sec < 10) {
    sec = "0" +sec;
}

//Joining Data

var hmsddata = `${hrs}:${min}:${sec} ${AMPM}  ${dayname}`
var dmydata = `${date}/${monname}/${year}`;

console.log(hmsddata);
console.log(dmydata);
//Push the data in html

dmy.innerText = dmydata;
hmsd.innerText = hmsddata;
},1000)


//Running the first second

let d = new Date();
var min = d.getMinutes();
var sec = d.getSeconds();
var hrs = d.getHours();
var day = d.getDay();
var date = d.getDate();
var year = d.getFullYear();
var mon = d.getMonth();
var AMPM;
//Array for month and day

var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//getting the month and dayname

var monname = mL[mon];
var dayname = dayNames[day];



//Writing if else for AMPM and hours and adding 0 in min and seconds

if (hrs>12) {
    hrs = hrs - 12;
    AMPM = "PM";
}
else{
    AMPM = "AM";
}


if (min < 10) {
    min = "0" + min;
}

if (sec < 10) {
    sec = "0" +sec;
}

//Joining Data

var hmsddata = `${hrs}:${min}:${sec} ${AMPM}  ${dayname}`
var dmydata = `${date}/${monname}/${year}`;

console.log(hmsddata);
console.log(dmydata);
//Push the data in html

dmy.innerText = dmydata;
hmsd.innerText = hmsddata;