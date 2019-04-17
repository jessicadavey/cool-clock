function tellTime() {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();

  timeIntoWords(currentHours, currentMinutes);
}

function timeIntoWords(hours, minutes) {
  let active = document.querySelectorAll(".active");

  function removeClasses(els) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove("active");
    }
  }

  removeClasses(active);

  document.querySelector(".it-is").classList.add("active");

  if (minutes >= 33) hours++;
  document.querySelector(`._${hours}`).classList.add("active");

  if (minutes >= 33 && minutes < 57)
    document.querySelector(`.to`).classList.add("active");

  if (minutes >= 3 && minutes < 33)
    document.querySelector(`.past`).classList.add("active");

  if (minutes >= 27 && minutes < 33)
    document.querySelector(`.half`).classList.add("active");

  if (minutes >= 57 || minutes < 3)
    document.querySelector(`.oclock`).classList.add("active");

  if ((minutes >= 33 && minutes < 37) || (minutes >= 23 && minutes < 27)) {
    document.querySelector(`.twenty`).classList.add("active");
    document.querySelector(`.five`).classList.add("active");
    document.querySelector(`.minutes`).classList.add("active");
  }

  if ((minutes >= 37 && minutes < 43) || (minutes >= 17 && minutes < 23)) {
    document.querySelector(`.twenty`).classList.add("active");
    document.querySelector(`.minutes`).classList.add("active");
  }

  if ((minutes >= 43 && minutes < 47) || (minutes >= 13 && minutes < 17))
    document.querySelector(`.quarter`).classList.add("active");

  if ((minutes >= 47 && minutes < 53) || (minutes >= 7 && minutes < 13)) {
    document.querySelector(`.ten`).classList.add("active");
    document.querySelector(`.minutes`).classList.add("active");
  }

  if ((minutes >= 53 && minutes < 57) || (minutes >= 3 && minutes < 7)) {
    document.querySelector(`.five`).classList.add("active");
    document.querySelector(`.minutes`).classList.add("active");
  }
}

tellTime();
setInterval(tellTime, 1000);

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener("click", changeColor));

function changeColor() {
  document.documentElement.style.setProperty(
    `--active-color`,
    `${this.dataset.hue}`
  );

  function removeClasses(els) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove("button-active");
    }
  }
  removeClasses(buttons);

  this.classList.add("button-active");
}
