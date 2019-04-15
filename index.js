let currentTime = new Date();
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

if (currentMinutes >= 33) currentHours++;
document.querySelector(`._${currentHours}`).classList.add("active");

if (currentMinutes >= 33 && currentMinutes < 57)
  document.querySelector(`.to`).classList.add("active");

if (currentMinutes >= 3 && currentMinutes < 33)
  document.querySelector(`.past`).classList.add("active");

if (currentMinutes >= 27 && currentMinutes < 33)
  document.querySelector(`.half`).classList.add("active");

if (
  (currentMinutes >= 33 && currentMinutes < 37) ||
  (currentMinutes >= 23 && currentMinutes < 27)
) {
  document.querySelector(`.twenty`).classList.add("active");
  document.querySelector(`.five`).classList.add("active");
  document.querySelector(`.minutes`).classList.add("active");
}

if (
  (currentMinutes >= 37 && currentMinutes < 43) ||
  (currentMinutes >= 17 && currentMinutes < 23)
) {
  document.querySelector(`.twenty`).classList.add("active");
  document.querySelector(`.minutes`).classList.add("active");
}

if (
  (currentMinutes >= 43 && currentMinutes < 47) ||
  (currentMinutes >= 13 && currentMinutes < 17)
)
  document.querySelector(`.quarter`).classList.add("active");

if (
  (currentMinutes >= 47 && currentMinutes < 53) ||
  (currentMinutes >= 7 && currentMinutes < 13)
) {
  document.querySelector(`.ten`).classList.add("active");
  document.querySelector(`.minutes`).classList.add("active");
}

if (
  (currentMinutes >= 53 && currentMinutes < 57) ||
  (currentMinutes >= 3 && currentMinutes < 7)
) {
  document.querySelector(`.five`).classList.add("active");
  document.querySelector(`.minutes`).classList.add("active");
}
