// Mode Game event
fighterVsFighter.addEventListener("click", () => {
  playClickEffect();
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
  playClickEffect();
  modeGame = 2;
  setTimeout(() => {
    fighterVsFighter.style.display = "none";
  }, 200);
  setTimeout(() => {
    textDisplay.style.animation = "fadeIn 10s linear infinite";
    textDisplay.style.backgroundSize = "100%";
  }, 1500);
  setTimeout(() => {
    textDisplay.innerHTML = "Pick 3 city!";
  }, 2000);
});

startBtn.addEventListener("click", () => {
  playClickStart();
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
    playStartEffect();
  }, 4500);
});

// Maps event
city1.addEventListener("click", () => {
  playClickEffect1();
  if (modeGame === 1) {
    map = 1;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City1.png')");
    city1.style.pointerEvents = "none";
    city1.innerText = "X";
  }
});

city2.addEventListener("click", () => {
  playClickEffect2();
  if (modeGame === 1) {
    map = 2;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City2.png')");
    city2.style.pointerEvents = "none";
    city2.innerText = "X";
  }
});

city3.addEventListener("click", () => {
  playClickEffect3();
  if (modeGame === 1) {
    map = 3;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City3.png')");
    city3.style.pointerEvents = "none";
    city3.innerText = "X";
  }
});

city4.addEventListener("click", () => {
  playClickEffect4();
  if (modeGame === 1) {
    map = 4;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City4.png')");
    city4.style.pointerEvents = "none";
    city4.innerText = "X";
  }
});

city5.addEventListener("click", () => {
  playClickEffect5();
  if (modeGame === 1) {
    map = 5;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City5.png')");
    city5.style.pointerEvents = "none";
    city5.innerText = "X";
  }
});

city6.addEventListener("click", () => {
  playClickEffect6();
  if (modeGame === 1) {
    map = 6;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City6.png')");
    city6.style.pointerEvents = "none";
    city6.innerText = "X";
  }
});

city7.addEventListener("click", () => {
  playClickEffect7();
  if (modeGame === 1) {
    map = 7;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City7.png')");
    city7.style.pointerEvents = "none";
    city7.innerText = "X";
  }
});

city8.addEventListener("click", () => {
  playClickEffect8();
  if (modeGame === 1) {
    map = 8;
    mapSet = true;
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
  }
  if (modeGame === 2) {
    mapModeTeam.push("url('./image/background/City8.png')");
    city8.style.pointerEvents = "none";
    city8.innerText = "X";
  }
});
