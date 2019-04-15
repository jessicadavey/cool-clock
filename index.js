document.getElementById("1").innerHTML = "hello";

let currentTime = new Date();

let currentHours = currentTime.getHours();

if (currentHours >= 12) currentHours -= 12; // Convert from 24 hour time

document.getElementById(currentHours).classList.add("active");
