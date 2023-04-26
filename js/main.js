let canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const minotaurHealth = document.querySelector("#minotaurHealth");
const golemHealth = document.querySelector("#golemHealth");
const timer = document.querySelector("#timer");

const notification = document.querySelector("#notification");

const mapsContainer = document.querySelector("#maps-container");
const hiddenContainer = document.querySelector("#hidden-container");
const textDisplay = document.querySelector(".text-display");

// City
const city1 = document.querySelector("#city1");
const city2 = document.querySelector("#city2");
const city3 = document.querySelector("#city3");
const city4 = document.querySelector("#city4");
const city5 = document.querySelector("#city5");
const city6 = document.querySelector("#city6");
const city7 = document.querySelector("#city7");
const city8 = document.querySelector("#city8");

// Fighter Selection
const golem1 = document.querySelector(".golem-fighter-1");
const golem2 = document.querySelector(".golem-fighter-2");
const golem3 = document.querySelector(".golem-fighter-3");
const minotaur1 = document.querySelector(".minotaur-fighter-1");
const minotaur2 = document.querySelector(".minotaur-fighter-2");
const minotaur3 = document.querySelector(".minotaur-fighter-3");

// right and left Sliders
const rightSlide = document.querySelector(".right-side");
const leftSlide = document.querySelector(".left-side");

const golemProfile = document.querySelector("#golem-static");
const minotaurProfile = document.querySelector("#minotaur-static");
const selectedImageGolem = document.querySelector(".image-golem");
const selectedImageMinotaur = document.querySelector(".image-minotaur");

// Profile information
const golemName = document.querySelector(".golem-name");
const golemAge = document.querySelector(".golem-age");
const golemColor = document.querySelector(".golem-skin");
const golemWeapon = document.querySelector(".golem-weapon");
const golemTitle = document.querySelector(".golem-title");

const minotaurName = document.querySelector(".minotaur-name");
const minotaurAge = document.querySelector(".minotaur-age");
const minotaurColor = document.querySelector(".minotaur-skin");
const minotaurWeapon = document.querySelector(".minotaur-weapon");
const minotaurTitle = document.querySelector(".minotaur-title");

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

// canvas
const containerCanvas = document.querySelector(".container-canvas");
const entranceContainer = document.querySelector(".entrance-container");

// Entrance
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
let mapModeTeam = [];
let mapModeTeamSelected = [];
let map = 0;
let modeGame = 0;
let golemReady = false;
let minotaurReady = false;
let timerCount = 120;
let winner = "";
let gravity = 0.002;
let TeamGolemPoints = 0;
let TeamMinotaurPoints = 0;
setTimeout(() => (gravity = 0.1), 2000);
