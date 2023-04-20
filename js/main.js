const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const minotaurHealth = document.querySelector("#minotaurHealth");
const golemHealth = document.querySelector("#golemHealth");
const timer = document.querySelector("#timer");

const notification = document.querySelector("#notification");

const mapsContainer = document.querySelector("#maps-container");
const hiddenContainer = document.querySelector("#hidden-container");
const textDisplay = document.querySelector(".text-display");

const city1 = document.querySelector("#city1");
const city2 = document.querySelector("#city2");
const city3 = document.querySelector("#city3");
const city4 = document.querySelector("#city4");

const golem1 = document.querySelector(".golem-fighter-1");
const golem2 = document.querySelector(".golem-fighter-2");
const golem3 = document.querySelector(".golem-fighter-3");
const minotaur1 = document.querySelector(".minotaur-fighter-1");
const minotaur2 = document.querySelector(".minotaur-fighter-2");
const minotaur3 = document.querySelector(".minotaur-fighter-3");

const golemProfile = document.querySelector("#golem-static");
const minotaurProfile = document.querySelector("#minotaur-static");
const selectedImageGolem = document.querySelector(".image-golem");
const selectedImageMinotaur = document.querySelector(".image-minotaur");

// health Images
const heartBlue1 = document.querySelector(".heart-blue-1");
const heartBlue2 = document.querySelector(".heart-blue-2");
const heartBlue3 = document.querySelector(".heart-blue-3");
const heartBlue4 = document.querySelector(".heart-blue-4");
const heartBlue5 = document.querySelector(".heart-blue-5");

const heartRed1 = document.querySelector(".heart-red-1");
const heartRed2 = document.querySelector(".heart-red-2");
const heartRed3 = document.querySelector(".heart-red-3");
const heartRed4 = document.querySelector(".heart-red-4");
const heartRed5 = document.querySelector(".heart-red-5");

const containerCanvas = document.querySelector(".container-canvas");
const entranceContainer = document.querySelector(".entrance-container");

const fighterVsFighter = document.querySelector("#fighter-vs-fighter");
const teamVsTeam = document.querySelector("#team-vs-team");
const startBtn = document.querySelector("#go");

canvas.width = containerCanvas.offsetWidth;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

let gameStart = false;
let gameOver = false;
let startEffect = true;
let mapSet = false;
let map = 0;
let modeGame = 0;
let golemReady = false;
let minotaurReady = false;

// Mode Game event
fighterVsFighter.addEventListener("click", () => {
  modeGame = 1;
  setTimeout(() => {
    teamVsTeam.style.display = "none";
  }, 200);
  setTimeout(() => {
    textDisplay.style.animation = "fadeIn 10s linear infinite";
    textDisplay.style.backgroundSize = "100%";
  }, 1500);
  setTimeout(() => {
    textDisplay.innerHTML =
      "Pick your Golem & Minotaur fighter and don't forget the city!";
  }, 2000);
});

teamVsTeam.addEventListener("click", () => {
  modeGame = 2;
  setTimeout(() => {
    fighterVsFighter.style.display = "none";
  }, 200);
});

startBtn.addEventListener("click", () => {
  textDisplay.style.display = "none";
  setTimeout(() => {
    startBtn.innerHTML = "3";
  }, 1000);
  setTimeout(() => {
    startBtn.innerHTML = "2";
  }, 2000);
  setTimeout(() => {
    startBtn.innerHTML = "1";
  }, 3000);
  setTimeout(() => {
    startBtn.innerHTML = "GO";
  }, 4000);
  setTimeout(() => {
    gameStart = true;
  }, 4500);
});

// Maps event
city1.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City1.png')";
  canvas.style.backgroundSize = "cover";
  mapSet = true;
  map = 1;
  setTimeout(() => {
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
  }, 200);
});

city2.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City2.png')";
  canvas.style.backgroundSize = "cover";
  mapSet = true;
  map = 2;
  setTimeout(() => {
    city1.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
  }, 200);
});

city3.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City3.png')";
  canvas.style.backgroundSize = "cover";
  mapSet = true;
  map = 3;
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city4.style.display = "none";
  }, 200);
});

city4.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City4.png')";
  canvas.style.backgroundSize = "cover";
  mapSet = true;
  map = 4;
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
  }, 200);
});
