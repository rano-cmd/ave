// Initial References
const container = document.querySelector(".container");
let drawHearts;
let mouseX = 0, mouseY = 0;
let hearts = [];

// Pink Shades
let colors = ["#ff99cc", "#ff6699", "#ff66b2", "#ff3399", "#ff1493"];

// Events Object
let events = {
  mouse: {
    move: "mousemove",
    stop: "mouseout",
  },
  touch: {
    move: "touchmove",
    stop: "touchend",
  },
};

let deviceType = "";

// Detect touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

// Random number generator
function randomNumberGenerator(min, max) {
  return Math.random() * (max - min) + min;
}

// Create Hearts
function startCreation() {
  if (drawHearts) {
    let div = document.createElement("div");
    div.classList.add("heart-container");
    div.style.left = mouseX + randomNumberGenerator(-50, 50) + "px";
    div.style.top = mouseY + randomNumberGenerator(-50, 50) + "px";

    let randomColor = colors[Math.floor(randomNumberGenerator(0, colors.length - 1))];

    div.innerHTML = `<div class="heart" style="background: ${randomColor};"></div>`;
    div.style.opacity = 1;

    container.appendChild(div);
    hearts.push({ visible: true });

    setTimeout(() => {
