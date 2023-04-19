// gravity effect
let gravity = 0.002;
setTimeout(() => (gravity = 0.1), 2000);

console.log(golem_1);
console.log(golem_2);

//Hits
const golemHit = new Hits({
  color: "green",
  imageSrc: "./image/start-effect/Explosion_white.png",
});

const minotaurHit = new Hits({
  position: {
    x: minotaur.position.x,
    y: minotaur.position.y,
  },
  color: "red",
  imageSrc: "./image/start-effect/Explosion_green.png",
});

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
    golem_1.health === minotaur.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health > minotaur.health &&
      timerCount === 0) ||
    minotaur.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 1" &&
      golem_1.health < minotaur.health &&
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
    golem_2.health === minotaur.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health > minotaur.health &&
      timerCount === 0) ||
    minotaur.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 2" &&
      golem_2.health < minotaur.health &&
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
    golem_3.health === minotaur.health &&
    timerCount === 0
  ) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health > minotaur.health &&
      timerCount === 0) ||
    minotaur.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golemSkin === "golem 3" &&
      golem_3.health < minotaur.health &&
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
  console.log(gameOver);
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

  // Game Start
  if (gameStart) {
    setTimeout(() => (startEffect = false), 2000);
    mapsContainer.style.display = "none";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    clearCanvas();
    if (golemSkin === "golem 1") {
      golem_1.update();
    } else if (golemSkin === "golem 2") {
      golem_2.update();
    } else if (golemSkin === "golem 3") {
      golem_3.update();
      console.log(3);
    }
    minotaur.update();
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
  minotaur.velocity.x = 0;
  if (startEffect) {
    minotaur.image = minotaur.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur.image = minotaur.sprites.startAttack.image;
  } else {
    minotaur.image = minotaur.sprites.idle.image;
  }

  if (
    keys.ArrowRight.pressed &&
    minotaur.lastKey === "ArrowRight" &&
    minotaur.position.x + minotaur.width <= canvas.width
  ) {
    minotaur.velocity.x = 1.5;
    minotaur.image = minotaur.sprites.walk.image;
  } else if (
    keys.ArrowLeft.pressed &&
    minotaur.lastKey === "ArrowLeft" &&
    minotaur.position.x >= 0
  ) {
    minotaur.velocity.x = -1.5;
    minotaur.image = minotaur.sprites.walk.image;
  }

  if (minotaur.velocity.y < 0 && !startEffect) {
    minotaur.image = minotaur.sprites.jump.image;
  } else if (minotaur.velocity.y > 0 && !startEffect) {
    minotaur.image = minotaur.sprites.fall.image;
  }
  //attack box collision Golem
  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    golemHit.update();
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur.health -= 0.05;
    minotaurHealth.style.width = minotaur.health + "%";
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    golemHit.update();
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur.health -= 0.05;
    minotaurHealth.style.width = minotaur.health + "%";
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    golemHit.update();
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur.health -= 0.05;
    minotaurHealth.style.width = minotaur.health + "%";
  }

  //attack box collision Minotaur
  if (
    golemMinotaurCollision({
      body1: minotaur,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaur.isAttacking &&
    (minotaur.dirX === 1 || minotaur.dirX === -1)
  ) {
    minotaurHit.update();
    setTimeout(() => {
      minotaur.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";
  }

  if (
    golemMinotaurCollision({
      body1: minotaur,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaur.isAttacking &&
    (minotaur.dirX === 1 || minotaur.dirX === -1)
  ) {
    minotaurHit.update();
    setTimeout(() => {
      minotaur.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";
  }

  if (
    golemMinotaurCollision({
      body1: minotaur,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaur.isAttacking &&
    (minotaur.dirX === 1 || minotaur.dirX === -1)
  ) {
    minotaurHit.update();
    setTimeout(() => {
      minotaur.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";
  }

  // Game over
  if (gameOver) {
    canvas.style.animation = "none";
    canvas.style.background = "url('./image/background/background.jpg')";
  }

  if (golemSkin === "golem 1" && gameOver && minotaur.health < golem_1.health) {
    minotaur.image = minotaur.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    gameOver &&
    minotaur.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (golemSkin === "golem 2" && gameOver && minotaur.health < golem_2.health) {
    minotaur.image = minotaur.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    gameOver &&
    minotaur.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (golemSkin === "golem 3" && gameOver && minotaur.health < golem_3.health) {
    minotaur.image = minotaur.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    gameOver &&
    minotaur.health > golem_3.health
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
        minotaur.lastKey = "ArrowRight";
        minotaur.dirX = 1;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        minotaur.lastKey = "ArrowLeft";
        minotaur.dirX = -1;
        break;
      case "ArrowUp":
        if (minotaur.velocity.y === 0) {
          minotaur.velocity.y = -7;
        }
        break;
      case "ArrowDown":
        minotaur.isAttacking = true;
        keys.ArrowDown.pressed = true;
        break;

      default:
        break;
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (
    (golem_1.health && minotaur.health) ||
    (golem_2.health && minotaur.health) ||
    (golem_3.health && minotaur.health)
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
        minotaur.isAttacking = false;
        setTimeout(() => {
          keys.ArrowDown.pressed = false;
        }, 250);
        break;

      default:
        break;
    }
  }
});

// Maps event
city1.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City1.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
});
city2.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City2.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
});
city3.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City3.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
});
city4.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City4.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
});
