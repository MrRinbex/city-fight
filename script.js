const canvas = document.querySelector("canvas");
const enemyHealth = document.querySelector("#enemyHealth");
const playerHealth = document.querySelector("#playerHealth");
const timer = document.querySelector("#timer");
const notification = document.querySelector("#notification");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
const gravity = 0.1;

// Player
const player = new Fighter({
  position: {
    x: 100,
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
  },
});

// Enemy
const enemy = new Fighter({
  position: {
    x: 740,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "red",
  offset: {
    x: -50,
    y: 0,
  },
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
  },
});

// timer function with display text
let timerCount = 50;
const decreaseTimer = () => {
  if (timerCount > 0) {
    setTimeout(decreaseTimer, 1000);
    timerCount--;
    timer.innerHTML = timerCount;
  }
  if (player.health === enemy.health && timerCount === 0) {
    notification.innerHTML = "Tie Game";
    notification.style.display = "flex";
  } else if (
    (player.health > enemy.health && timerCount === 0) ||
    enemy.health <= 0
  ) {
    notification.innerHTML = "Blue Win";
    notification.style.display = "flex";
    timerCount = 0;
    // canvas.style.animation = "fadeIn 1.5s ease forwards";
  } else if (
    (player.health < enemy.health && timerCount === 0) ||
    player.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
    // canvas.style.animation = "fadeIn 1.5s ease forwards";
  }
};
decreaseTimer();

const keys = {
  d: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowDown: { pressed: false },
};

function playerEnemyCollision({ body1, body2 }) {
  return (
    body1.attackBox.position.x + body1.attackBox.width >= body2.position.x &&
    body1.attackBox.position.x <= body2.position.x + body2.width &&
    body1.attackBox.position.y + body1.attackBox.height >= body2.position.y &&
    body1.attackBox.position.y <= body2.position.y + body2.height
  );
}

function animate() {
  window.requestAnimationFrame(animate);
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  clearCanvas();
  player.update();
  enemy.update();

  // player Move
  player.velocity.x = 0;
  if (keys.s.pressed) {
    player.image = player.sprites.startAttack.image;
  } else {
    player.image = player.sprites.idle.image;
  }

  if (
    keys.d.pressed &&
    player.lastKey === "d" &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 1.5;
    player.image = player.sprites.walk.image;
  } else if (
    keys.q.pressed &&
    player.lastKey === "q" &&
    player.position.x >= 10
  ) {
    player.velocity.x = -1.5;
    player.image = player.sprites.walk.image;
  }

  if (player.velocity.y < 0) {
    player.image = player.sprites.jump.image;
  } else if (player.velocity.y > 0) {
    player.image = player.sprites.fall.image;
  }

  //enemy move
  enemy.velocity.x = 0;
  if (keys.ArrowDown.pressed) {
    enemy.image = enemy.sprites.startAttack.image;
  } else {
    enemy.image = enemy.sprites.idle.image;
  }

  if (
    keys.ArrowRight.pressed &&
    enemy.lastKey === "ArrowRight" &&
    enemy.position.x + enemy.width <= canvas.width
  ) {
    enemy.velocity.x = 1.5;
    enemy.image = enemy.sprites.walk.image;
  } else if (
    keys.ArrowLeft.pressed &&
    enemy.lastKey === "ArrowLeft" &&
    enemy.position.x >= 0
  ) {
    enemy.velocity.x = -1.5;
    enemy.image = enemy.sprites.walk.image;
  }

  if (enemy.velocity.y < 0) {
    enemy.image = enemy.sprites.jump.image;
  } else if (enemy.velocity.y > 0) {
    enemy.image = enemy.sprites.fall.image;
  }
  //attack box collision
  if (
    playerEnemyCollision({ body1: player, body2: enemy }) &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    enemy.health -= 1;
    enemyHealth.style.width = enemy.health + "%";
  }
  if (
    playerEnemyCollision({ body1: enemy, body2: player }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    player.health -= 1;
    playerHealth.style.width = player.health + "%";
  }

  // change offset direction
  if (enemy.position.x < player.position.x) {
    enemy.attackBox.offset.x = 0;
  } else enemy.attackBox.offset.x = -50;

  if (enemy.position.x < player.position.x) {
    player.attackBox.offset.x = -50;
  } else player.attackBox.offset.x = 0;
}
animate();

// keys event
window.addEventListener("keydown", (e) => {
  if (player.health && enemy.health && timerCount > 0) {
    switch (e.key) {
      // player keys
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        break;
      case "q":
        keys.q.pressed = true;
        player.lastKey = "q";
        break;
      case "z":
        if (player.velocity.y === 0) {
          player.velocity.y = -7;
        }
        break;
      case "s":
        player.isAttacking = true;
        keys.s.pressed = true;
        break;

      // enemy keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.velocity.y === 0) {
          enemy.velocity.y = -7;
        }
        break;
      case "ArrowDown":
        enemy.isAttacking = true;
        keys.ArrowDown.pressed = true;
        break;

      default:
        break;
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (player.health && enemy.health) {
    switch (e.key) {
      // player keys
      case "d":
        keys.d.pressed = false;
        break;
      case "q":
        keys.q.pressed = false;
        break;
      case "s":
        player.isAttacking = false;
        setTimeout(() => {
          keys.s.pressed = false;
        }, 250);
        break;

      // enemy keys
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowDown":
        enemy.isAttacking = false;
        setTimeout(() => {
          keys.ArrowDown.pressed = false;
        }, 250);
        break;

      default:
        break;
    }
  }
});
