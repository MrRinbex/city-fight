const canvas = document.querySelector("canvas");
const minotaurHealth = document.querySelector("#minotaurHealth");
const golemHealth = document.querySelector("#golemHealth");
const timer = document.querySelector("#timer");
const notification = document.querySelector("#notification");
const mapsContainer = document.querySelector(".maps-container");

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

const containerCanvas = document.querySelector(".container-canvas");
const context = canvas.getContext("2d");

canvas.width = containerCanvas.offsetWidth;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

let gameStart = false;
let gameOver = false;
let startEffect = true;
