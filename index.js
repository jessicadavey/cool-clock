let currentTime = new Date();

let currentHours = currentTime.getHours();

document.querySelector(`._${currentHours}`).classList.add("active");
