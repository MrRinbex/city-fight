// gravity effect
let gravity = 0.002;
setTimeout(() => (gravity = 0.1), 2000);

// timer function with display text
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
  // console.log(golemReady);
  // console.log(minotaurReady);
  // console.log(mapSet);
  // console.log(selectedImageGolem.style.background);
}, 1000);

const keys = {
  d: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowDown: { pressed: false },
};

function golemMinotaurCollision({ body1, body2 }) {
  if (
    (body1.position.x < body2.position.x && body1.dirX === 1) ||
    (body1.position.x > body2.position.x && body1.dirX === -1)
  ) {
    return (
      body1.attackBox.position.x + body1.attackBox.width >= body2.position.x &&
      body1.attackBox.position.x <= body2.position.x + body2.width &&
      body1.attackBox.position.y + body1.attackBox.height >= body2.position.y &&
      body1.attackBox.position.y <= body2.position.y + body2.height
    );
  }
}

function animate() {
  window.requestAnimationFrame(animate);

  //Entrance manipulation
  if (modeGame > 0) {
    hiddenContainer.style.display = "none";
    rightSlide.style.display = "flex";
    leftSlide.style.display = "flex";
  }
  if (modeGame === 1 && golemReady && minotaurReady && mapSet) {
    minotaur1.style.display = "none";
    minotaur2.style.display = "none";
    minotaur3.style.display = "none";
    golem1.style.display = "none";
    golem2.style.display = "none";
    golem3.style.display = "none";
  }

  if (golemReady && minotaurReady && mapSet) {
    startBtn.style.display = "flex";
    teamVsTeam.style.display = "none";
    fighterVsFighter.style.display = "none";
    textDisplay.innerHTML = "Click START!";
    golemProfile.style.display = "flex";
    minotaurProfile.style.display = "flex";
  }

  // Game Start
  if (gameStart) {
    setTimeout(() => (startEffect = false), 2000);
    entranceContainer.style.display = "none";
    containerCanvas.style.border = "4px solid white";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    clearCanvas();

    if (golemSkin === "golem 1") {
      golem_1.update();
    } else if (golemSkin === "golem 2") {
      golem_2.update();
    } else if (golemSkin === "golem 3") {
      golem_3.update();
    }

    if (minotaurSkin === "minotaur 1") {
      minotaur_1.update();
    } else if (minotaurSkin === "minotaur 2") {
      minotaur_2.update();
    } else if (minotaurSkin === "minotaur 3") {
      minotaur_3.update();
    }
  } else {
    containerCanvas.style.borderBottom = "none";
  }

  // golem Move
  golem_1.velocity.x = 0;
  golem_2.velocity.x = 0;
  golem_3.velocity.x = 0;

  if (startEffect && golemSkin === "golem 1") {
    golem_1.image = golem_1.sprites.startEffect.image;
  } else if (keys.s.pressed) {
    golem_1.image = golem_1.sprites.startAttack.image;
  } else {
    golem_1.image = golem_1.sprites.idle.image;
  }

  if (startEffect && golemSkin === "golem 2") {
    golem_2.image = golem_2.sprites.startEffect.image;
  } else if (keys.s.pressed) {
    golem_2.image = golem_2.sprites.startAttack.image;
  } else {
    golem_2.image = golem_2.sprites.idle.image;
  }

  if (startEffect && golemSkin === "golem 3") {
    golem_3.image = golem_3.sprites.startEffect.image;
  } else if (keys.s.pressed) {
    golem_3.image = golem_3.sprites.startAttack.image;
  } else {
    golem_3.image = golem_3.sprites.idle.image;
  }

  if (
    golemSkin === "golem 1" &&
    keys.d.pressed &&
    golem_1.lastKey === "d" &&
    golem_1.position.x + golem_1.width <= canvas.width
  ) {
    golem_1.velocity.x = 1.5;
    golem_1.image = golem_1.sprites.walk.image;
  } else if (
    golemSkin === "golem 1" &&
    keys.q.pressed &&
    golem_1.lastKey === "q" &&
    golem_1.position.x >= 10
  ) {
    golem_1.velocity.x = -1.5;
    golem_1.image = golem_1.sprites.walk.image;
  }

  if (
    golemSkin === "golem 2" &&
    keys.d.pressed &&
    golem_2.lastKey === "d" &&
    golem_2.position.x + golem_2.width <= canvas.width
  ) {
    golem_2.velocity.x = 1.5;
    golem_2.image = golem_2.sprites.walk.image;
  } else if (
    golemSkin === "golem 2" &&
    keys.q.pressed &&
    golem_2.lastKey === "q" &&
    golem_2.position.x >= 10
  ) {
    golem_2.velocity.x = -1.5;
    golem_2.image = golem_2.sprites.walk.image;
  }

  if (
    golemSkin === "golem 3" &&
    keys.d.pressed &&
    golem_3.lastKey === "d" &&
    golem_3.position.x + golem_3.width <= canvas.width
  ) {
    golem_3.velocity.x = 1.5;
    golem_3.image = golem_3.sprites.walk.image;
  } else if (
    golemSkin === "golem 3" &&
    keys.q.pressed &&
    golem_3.lastKey === "q" &&
    golem_3.position.x >= 10
  ) {
    golem_3.velocity.x = -1.5;
    golem_3.image = golem_3.sprites.walk.image;
  }

  if (golem_1.velocity.y < 0 && !startEffect && golemSkin === "golem 1") {
    golem_1.image = golem_1.sprites.jump.image;
  } else if (
    golem_1.velocity.y > 0 &&
    !startEffect &&
    golemSkin === "golem 1"
  ) {
    golem_1.image = golem_1.sprites.fall.image;
  }

  if (golem_2.velocity.y < 0 && !startEffect && golemSkin === "golem 2") {
    golem_2.image = golem_2.sprites.jump.image;
  } else if (
    golem_2.velocity.y > 0 &&
    !startEffect &&
    golemSkin === "golem 2"
  ) {
    golem_2.image = golem_2.sprites.fall.image;
  }

  if (golem_3.velocity.y < 0 && !startEffect && golemSkin === "golem 3") {
    golem_3.image = golem_3.sprites.jump.image;
  } else if (
    golem_3.velocity.y > 0 &&
    !startEffect &&
    golemSkin === "golem 3"
  ) {
    golem_3.image = golem_3.sprites.fall.image;
  }

  //minotaur move
  minotaur_1.velocity.x = 0;
  minotaur_2.velocity.x = 0;
  minotaur_3.velocity.x = 0;

  if (startEffect && minotaurSkin === "minotaur 1") {
    minotaur_1.image = minotaur_1.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_1.image = minotaur_1.sprites.startAttack.image;
  } else {
    minotaur_1.image = minotaur_1.sprites.idle.image;
  }

  if (startEffect && minotaurSkin === "minotaur 2") {
    minotaur_2.image = minotaur_2.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_2.image = minotaur_2.sprites.startAttack.image;
  } else {
    minotaur_2.image = minotaur_2.sprites.idle.image;
  }

  if (startEffect && minotaurSkin === "minotaur 3") {
    minotaur_3.image = minotaur_3.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_3.image = minotaur_3.sprites.startAttack.image;
  } else {
    minotaur_3.image = minotaur_3.sprites.idle.image;
  }

  if (
    minotaurSkin === "minotaur 1" &&
    keys.ArrowRight.pressed &&
    minotaur_1.lastKey === "ArrowRight" &&
    minotaur_1.position.x + minotaur_1.width <= canvas.width
  ) {
    minotaur_1.velocity.x = 1.5;
    minotaur_1.image = minotaur_1.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 1" &&
    keys.ArrowLeft.pressed &&
    minotaur_1.lastKey === "ArrowLeft" &&
    minotaur_1.position.x >= 0
  ) {
    minotaur_1.velocity.x = -1.5;
    minotaur_1.image = minotaur_1.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 2" &&
    keys.ArrowRight.pressed &&
    minotaur_2.lastKey === "ArrowRight" &&
    minotaur_2.position.x + minotaur_2.width <= canvas.width
  ) {
    minotaur_2.velocity.x = 1.5;
    minotaur_2.image = minotaur_2.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 2" &&
    keys.ArrowLeft.pressed &&
    minotaur_2.lastKey === "ArrowLeft" &&
    minotaur_2.position.x >= 0
  ) {
    minotaur_2.velocity.x = -1.5;
    minotaur_2.image = minotaur_2.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 3" &&
    keys.ArrowRight.pressed &&
    minotaur_3.lastKey === "ArrowRight" &&
    minotaur_3.position.x + minotaur_3.width <= canvas.width
  ) {
    minotaur_3.velocity.x = 1.5;
    minotaur_3.image = minotaur_3.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 3" &&
    keys.ArrowLeft.pressed &&
    minotaur_3.lastKey === "ArrowLeft" &&
    minotaur_3.position.x >= 0
  ) {
    minotaur_3.velocity.x = -1.5;
    minotaur_3.image = minotaur_3.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 1" &&
    minotaur_1.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_1.image = minotaur_1.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 1" &&
    minotaur_1.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_1.image = minotaur_1.sprites.fall.image;
  }

  if (
    minotaurSkin === "minotaur 2" &&
    minotaur_2.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_2.image = minotaur_2.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 2" &&
    minotaur_2.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_2.image = minotaur_2.sprites.fall.image;
  }

  if (
    minotaurSkin === "minotaur 3" &&
    minotaur_3.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_3.image = minotaur_3.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 3" &&
    minotaur_3.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_3.image = minotaur_3.sprites.fall.image;
  }

  //attack box collision Golem
  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_1,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_2,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_3,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_1,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_2,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_3,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_1,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_2,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_3,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.display = "none";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.display = "none";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.display = "none";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.display = "none";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.display = "none";
    }
  }

  //attack box collision Minotaur
  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_3.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_3.health <= 20) {
      heartBlue3.style.display = "none";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.display = "none";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.display = "none";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.display = "none";
    }
    if (golem_3.health <= 20) {
      heartBlue2.style.display = "none";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.display = "none";
    }
  }

  // Game over
  if (gameOver) {
    canvas.style.animation = "none";
    canvas.style.background = "url('./image/background/background.jpg')";
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_1.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_1.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_1.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_2.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_2.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_2.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_3.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_3.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_3.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }
}
animate();

// keys event
window.addEventListener("keydown", (e) => {
  if (!gameOver && !startEffect) {
    switch (e.key) {
      // golem keys
      case "d":
        keys.d.pressed = true;
        if (golemSkin === "golem 1") {
          golem_1.lastKey = "d";
          golem_1.dirX = 1;
        }
        if (golemSkin === "golem 2") {
          golem_2.lastKey = "d";
          golem_2.dirX = 1;
        }
        if (golemSkin === "golem 3") {
          golem_3.lastKey = "d";
          golem_3.dirX = 1;
        }
        break;
      case "q":
        keys.q.pressed = true;
        if (golemSkin === "golem 1") {
          golem_1.lastKey = "q";
          golem_1.dirX = -1;
        }
        if (golemSkin === "golem 2") {
          golem_2.lastKey = "q";
          golem_2.dirX = -1;
        }
        if (golemSkin === "golem 3") {
          golem_3.lastKey = "q";
          golem_3.dirX = -1;
        }

        break;
      case "z":
        if (golem_1.velocity.y === 0 && golemSkin === "golem 1") {
          golem_1.velocity.y = -7;
        }
        if (golem_2.velocity.y === 0 && golemSkin === "golem 2") {
          golem_2.velocity.y = -7;
        }
        if (golem_3.velocity.y === 0 && golemSkin === "golem 3") {
          golem_3.velocity.y = -7;
        }
        break;
      case "s":
        if (golemSkin === "golem 1") {
          golem_1.isAttacking = true;
        }
        if (golemSkin === "golem 2") {
          golem_2.isAttacking = true;
        }
        if (golemSkin === "golem 3") {
          golem_3.isAttacking = true;
        }
        keys.s.pressed = true;
        break;

      // minotaur keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        if (minotaurSkin === "minotaur 1") {
          minotaur_1.lastKey = "ArrowRight";
          minotaur_1.dirX = 1;
        }
        if (minotaurSkin === "minotaur 2") {
          minotaur_2.lastKey = "ArrowRight";
          minotaur_2.dirX = 1;
        }
        if (minotaurSkin === "minotaur 3") {
          minotaur_3.lastKey = "ArrowRight";
          minotaur_3.dirX = 1;
        }
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        if (minotaurSkin === "minotaur 1") {
          minotaur_1.lastKey = "ArrowLeft";
          minotaur_1.dirX = -1;
        }
        if (minotaurSkin === "minotaur 2") {
          minotaur_2.lastKey = "ArrowLeft";
          minotaur_2.dirX = -1;
        }
        if (minotaurSkin === "minotaur 3") {
          minotaur_3.lastKey = "ArrowLeft";
          minotaur_3.dirX = -1;
        }
        break;
      case "ArrowUp":
        if (minotaur_1.velocity.y === 0 && minotaurSkin === "minotaur 1") {
          minotaur_1.velocity.y = -7;
        }
        if (minotaur_2.velocity.y === 0 && minotaurSkin === "minotaur 2") {
          minotaur_2.velocity.y = -7;
        }
        if (minotaur_3.velocity.y === 0 && minotaurSkin === "minotaur 3") {
          minotaur_3.velocity.y = -7;
        }
        break;
      case "ArrowDown":
        keys.ArrowDown.pressed = true;
        if (minotaurSkin === "minotaur 1") {
          minotaur_1.isAttacking = true;
        }
        if (minotaurSkin === "minotaur 2") {
          minotaur_2.isAttacking = true;
        }
        if (minotaurSkin === "minotaur 3") {
          minotaur_3.isAttacking = true;
        }
        break;

      default:
        break;
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (
    (golem_1.health && minotaur_1.health) ||
    (golem_2.health && minotaur_1.health) ||
    (golem_3.health && minotaur_1.health) ||
    (golem_1.health && minotaur_2.health) ||
    (golem_2.health && minotaur_2.health) ||
    (golem_3.health && minotaur_2.health) ||
    (golem_1.health && minotaur_3.health) ||
    (golem_2.health && minotaur_3.health) ||
    (golem_3.health && minotaur_3.health)
  ) {
    switch (e.key) {
      // golem keys
      case "d":
        keys.d.pressed = false;
        break;
      case "q":
        keys.q.pressed = false;
        break;
      case "s":
        golem_1.isAttacking = false;
        golem_2.isAttacking = false;
        golem_3.isAttacking = false;
        setTimeout(() => {
          keys.s.pressed = false;
        }, 250);
        break;

      // minotaur keys
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowDown":
        minotaur_1.isAttacking = false;
        minotaur_2.isAttacking = false;
        minotaur_3.isAttacking = false;
        setTimeout(() => {
          keys.ArrowDown.pressed = false;
        }, 250);
        break;

      default:
        break;
    }
  }
});
