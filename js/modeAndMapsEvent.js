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
  mapSet = true;
  map = 1;
  canvas.style.background = "url('./image/background/City1.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city2.addEventListener("click", () => {
  mapSet = true;
  map = 2;
  canvas.style.background = "url('./image/background/City2.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city3.addEventListener("click", () => {
  mapSet = true;
  map = 3;
  canvas.style.background = "url('./image/background/City3.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city4.addEventListener("click", () => {
  mapSet = true;
  map = 4;
  canvas.style.background = "url('./image/background/City4.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city5.addEventListener("click", () => {
  mapSet = true;
  map = 5;
  canvas.style.background = "url('./image/background/City5.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city6.addEventListener("click", () => {
  mapSet = true;
  map = 6;
  canvas.style.background = "url('./image/background/City6.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city7.addEventListener("click", () => {
  mapSet = true;
  map = 7;
  canvas.style.background = "url('./image/background/City7.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city8.style.display = "none";
  }, 200);
});

city8.addEventListener("click", () => {
  mapSet = true;
  map = 8;
  canvas.style.background = "url('./image/background/City8.png')";
  canvas.style.backgroundSize = "cover";
  setTimeout(() => {
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
  }, 200);
});
