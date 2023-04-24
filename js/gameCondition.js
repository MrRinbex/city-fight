// timer function with display text and game over conditions
const decreaseTimer = () => {
  if (timerCount > 0 && gameStart) {
    timerCount--;
    timer.innerHTML = timerCount;
  }

  //golem 1
  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    golem_1.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 1" &&
      golem_1.health > minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 1" &&
      minotaur_1.health <= 0)
  ) {
    notification.style.display = "flex";
    notification.innerHTML = `${golem_1.name} won ${minotaur_1.name}`;
    console.log(`${golem_1.name} won ${minotaur_1.name}`);
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_1.name;
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 1" &&
      golem_1.health < minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 1" &&
      golem_1.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_1.name} won ${golem_1.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_1.name;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    golem_1.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 2" &&
      golem_1.health > minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 2" &&
      minotaur_2.health <= 0)
  ) {
    notification.innerHTML = `${golem_1.name} won ${minotaur_2.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_1.name;
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 2" &&
      golem_1.health < minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 2" &&
      golem_1.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_2.name} won ${golem_1.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_2.name;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    golem_1.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 3" &&
      golem_1.health > minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 3" &&
      minotaur_3.health <= 0)
  ) {
    notification.innerHTML = `${golem_1.name} won ${minotaur_3.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_1.name;
  } else if (
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 3" &&
      golem_1.health < minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 1" &&
      minotaurSkin === "minotaur 3" &&
      golem_1.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_3.name} won ${golem_1.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_3.name;
  }

  //golem 2
  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    golem_2.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 1" &&
      golem_2.health > minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 1" &&
      minotaur_1.health <= 0)
  ) {
    notification.innerHTML = `${golem_2.name} won ${minotaur_1.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_2.name;
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 1" &&
      golem_2.health < minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 1" &&
      golem_2.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_1.name} won ${golem_2.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_1.name;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    golem_2.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 2" &&
      golem_2.health > minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 2" &&
      minotaur_2.health <= 0)
  ) {
    notification.innerHTML = `${golem_2.name} won ${minotaur_2.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_2.name;
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 2" &&
      golem_2.health < minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 2" &&
      golem_2.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_2.name} won ${golem_2.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_2.name;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    golem_2.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 3" &&
      golem_2.health > minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 3" &&
      minotaur_3.health <= 0)
  ) {
    notification.innerHTML = `${golem_2.name} won ${minotaur_3.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_2.name;
  } else if (
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 3" &&
      golem_2.health < minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 2" &&
      minotaurSkin === "minotaur 3" &&
      golem_2.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_3.name} won ${golem_2.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_3.name;
  }

  //golem 3
  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    golem_3.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 1" &&
      golem_3.health > minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 1" &&
      minotaur_1.health <= 0)
  ) {
    notification.innerHTML = `${golem_3.name} won ${minotaur_1.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_3.name;
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 1" &&
      golem_3.health < minotaur_1.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 1" &&
      golem_3.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_1.name} won ${golem_3.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_1.name;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    golem_3.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 2" &&
      golem_3.health > minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 2" &&
      minotaur_2.health <= 0)
  ) {
    notification.innerHTML = `${golem_3.name} won ${minotaur_2.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_3.name;
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 2" &&
      golem_3.health < minotaur_2.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 2" &&
      golem_3.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_2.name} won ${golem_3.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_2.name;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    golem_3.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = "Tie Game";
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 3" &&
      golem_3.health > minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 3" &&
      minotaur_3.health <= 0)
  ) {
    notification.innerHTML = `${golem_3.name} won ${minotaur_3.name}`;
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
    winner = golem_3.name;
  } else if (
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 3" &&
      golem_3.health < minotaur_3.health &&
      timerCount === 0) ||
    (golemSkin === "golem 3" &&
      minotaurSkin === "minotaur 3" &&
      golem_3.health <= 0)
  ) {
    notification.innerHTML = `${minotaur_3.name} won ${golem_3.name}`;
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
    winner = minotaur_3.name;
  }
};

setInterval(() => {
  decreaseTimer();
}, 1000);
