


//! today date 
const d = new Date();
let dates =document.getElementById("date");
let time = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`
dates.innerHTML = time;