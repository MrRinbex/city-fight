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
const context = canvas.getContext("2d");

canvas.width = (window.innerWidth * 60) / 100;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

let gameStart = false;
let gameOver = false;
let startEffect = true;

// gravity effect
let gravity = 0.002;
setTimeout(() => (gravity = 0.1), 2000);

// golem
const golem = new Fighter({
  position: {
    x: (canvas.width * 20) / 100,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 0,
    y: 0,
  },
  dirX: 1,
  imageSrc: "./image/Golem/Golem_normal.png",
  sprites: {
    idle: {
      imageSrc: "./image/Golem/Golem_normal.png",
    },
    walk: {
      imageSrc: "./image//Golem/Golem_Walking.png",
    },
    jump: {
      imageSrc: "./image/Golem/Golem_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/Golem/Golem_fall.png",
    },
    startAttack: {
      imageSrc: "./image/Golem/Golem_start_Attacking_.png",
    },
    endAttack: {
      imageSrc: "./image/Golem/Golem_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/Golem/Golem_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_green.png",
    },
  },
});

// minotaur
const minotaur = new Fighter({
  position: {
    x: (canvas.width * 70) / 100,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "red",
  offset: {
    x: 0,
    y: 0,
  },
  dirX: -1,
  imageSrc: "./image/Minotaur/Minotaur_normal.png",
  sprites: {
    idle: {
      imageSrc: "./image/Minotaur/Minotaur_normal.png",
    },
    walk: {
      imageSrc: "./image/Minotaur/Minotaur_Walking.png",
    },
    jump: {
      imageSrc: "./image/Minotaur/Minotaur_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/Minotaur/Minotaur_fall.png",
    },
    startAttack: {
      imageSrc: "./image/Minotaur/Minotaur_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/Minotaur/Minotaur_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/Minotaur/Minotaur_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_white.png",
    },
  },
});

//Hits
const golemHit = new Hits({
  position: {
    x: golem.position.x,
    y: golem.position.y,
  },
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
let start = false;
const decreaseTimer = () => {
  if (timerCount > 0 && gameStart) {
    timerCount--;
    timer.innerHTML = timerCount;
    setTimeout(() => {}, 1000);
  }
  if (golem.health === minotaur.health && timerCount === 0) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    gameOver = true;
  } else if (
    (golem.health > minotaur.health && timerCount === 0) ||
    minotaur.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timer.innerHTML = "Game Over";
    timerCount = 0;
    gameOver = true;
  } else if (
    (golem.health < minotaur.health && timerCount === 0) ||
    golem.health <= 0
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

const keys = {
  d: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowDown: { pressed: false },
};

function golemminotaurCollision({ body1, body2 }) {
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
    // start effect
    setTimeout(() => (startEffect = false), 2000);
    mapsContainer.style.display = "none";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    clearCanvas();
    golem.update();
    minotaur.update();
  }
  // game Over
  if (gameOver) {
    canvas.style.animation = "none";
    canvas.style.background = "url('./image/background/background.jpg')";
  }

  // golem Move
  golem.velocity.x = 0;
  if (startEffect) {
    golem.image = golem.sprites.startEffect.image;
  } else if (keys.s.pressed) {
    golem.image = golem.sprites.startAttack.image;
  } else {
    golem.image = golem.sprites.idle.image;
  }

  if (
    keys.d.pressed &&
    golem.lastKey === "d" &&
    golem.position.x + golem.width <= canvas.width
  ) {
    golem.velocity.x = 1.5;
    golem.image = golem.sprites.walk.image;
  } else if (
    keys.q.pressed &&
    golem.lastKey === "q" &&
    golem.position.x >= 10
  ) {
    golem.velocity.x = -1.5;
    golem.image = golem.sprites.walk.image;
  }

  if (golem.velocity.y < 0 && !startEffect) {
    golem.image = golem.sprites.jump.image;
  } else if (golem.velocity.y > 0 && !startEffect) {
    golem.image = golem.sprites.fall.image;
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
  //attack box collision
  if (
    golemminotaurCollision({ body1: golem, body2: minotaur }) &&
    golem.isAttacking &&
    (golem.dirX === 1 || golem.dirX === -1)
  ) {
    golemHit.update();
    setTimeout(() => {
      golem.isAttacking = false;
    }, 100);
    minotaur.health -= 0.05;
    minotaurHealth.style.width = minotaur.health + "%";
  }
  if (
    golemminotaurCollision({ body1: minotaur, body2: golem }) &&
    minotaur.isAttacking &&
    (minotaur.dirX === 1 || minotaur.dirX === -1)
  ) {
    minotaurHit.update();
    setTimeout(() => {
      minotaur.isAttacking = false;
    }, 100);
    golem.health -= 0.05;
    golemHealth.style.width = golem.health + "%";
  }

  // Game over
  if (gameOver && minotaur.health < golem.health) {
    minotaur.image = minotaur.sprites.death.image;
  } else if (gameOver && minotaur.health > golem.health) {
    golem.image = golem.sprites.death.image;
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
        golem.lastKey = "d";
        golem.dirX = 1;
        break;
      case "q":
        keys.q.pressed = true;
        golem.lastKey = "q";
        golem.dirX = -1;
        break;
      case "z":
        if (golem.velocity.y === 0) {
          golem.velocity.y = -7;
        }
        break;
      case "s":
        golem.isAttacking = true;
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
  if (golem.health && minotaur.health) {
    switch (e.key) {
      // golem keys
      case "d":
        keys.d.pressed = false;
        break;
      case "q":
        keys.q.pressed = false;
        break;
      case "s":
        golem.isAttacking = false;
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

city1.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City1.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
  start = true;
});
city2.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City2.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
  start = true;
});
city3.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City3.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
  start = true;
});
city4.addEventListener("click", () => {
  canvas.style.background = "url('./image/background/City4.png')";
  canvas.style.backgroundSize = "cover";
  gameStart = true;
  start = true;
});
