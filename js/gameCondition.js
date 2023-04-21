// timer function with display text and game over conditions
let timerCount = 60;
const decreaseTimer = () => {
  if (timerCount > 0 && gameStart) {
    timerCount--;
    timer.innerHTML = timerCount;
  }

  //golem 1
  if (
    golemSkin === "golem 1" &&
    golem_1.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health > minotaur_1.health &&
      timerCount === 0) ||
    minotaur_1.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health < minotaur_1.health &&
      timerCount === 0) ||
    golem_1.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 1" &&
    golem_1.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health > minotaur_2.health &&
      timerCount === 0) ||
    minotaur_2.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health < minotaur_2.health &&
      timerCount === 0) ||
    golem_1.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 1" &&
    golem_1.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health > minotaur_3.health &&
      timerCount === 0) ||
    minotaur_3.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health < minotaur_3.health &&
      timerCount === 0) ||
    golem_1.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  //golem 2
  if (
    golemSkin === "golem 2" &&
    golem_2.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health > minotaur_1.health &&
      timerCount === 0) ||
    minotaur_1.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health < minotaur_1.health &&
      timerCount === 0) ||
    golem_2.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 2" &&
    golem_2.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health > minotaur_2.health &&
      timerCount === 0) ||
    minotaur_2.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health < minotaur_2.health &&
      timerCount === 0) ||
    golem_2.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 2" &&
    golem_2.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health > minotaur_3.health &&
      timerCount === 0) ||
    minotaur_3.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health < minotaur_3.health &&
      timerCount === 0) ||
    golem_2.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  //golem 3
  if (
    golemSkin === "golem 3" &&
    golem_3.health === minotaur_1.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health > minotaur_1.health &&
      timerCount === 0) ||
    minotaur_1.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health < minotaur_1.health &&
      timerCount === 0) ||
    golem_3.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 3" &&
    golem_3.health === minotaur_2.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health > minotaur_2.health &&
      timerCount === 0) ||
    minotaur_2.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health < minotaur_2.health &&
      timerCount === 0) ||
    golem_3.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }

  if (
    golemSkin === "golem 3" &&
    golem_3.health === minotaur_3.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health > minotaur_3.health &&
      timerCount === 0) ||
    minotaur_3.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health < minotaur_3.health &&
      timerCount === 0) ||
    golem_3.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    timer.innerHTML = "Game Over";
    gameOver = true;
  }
};

setInterval(() => {
  decreaseTimer();
}, 1000);
