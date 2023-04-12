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

const gravity = 0.6;

class SpriteObject {
  constructor({ position, velocity, color, offset }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset,
      width: 100,
      height: 25,
    };
    this.color = color;
    this.isAttacking;
    this.health = 100;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    // attack box
    if (this.isAttacking) {
      context.fillStyle = "white";
      context.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
  }

  update() {
    this.draw();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }

  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }
}

// Player
const player = new SpriteObject({
  position: {
    x: 300,
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
});

// Enemy
const enemy = new SpriteObject({
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
  } else if (
    (player.health < enemy.health && timerCount === 0) ||
    player.health <= 0
  ) {
    notification.innerHTML = "Red Win";
    notification.style.display = "flex";
    timerCount = 0;
  }
};
decreaseTimer();

const keys = {
  d: { pressed: false },
  q: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
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

  if (
    keys.d.pressed &&
    player.lastKey === "d" &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 6;
  } else if (
    keys.q.pressed &&
    player.lastKey === "q" &&
    player.position.x >= 0
  ) {
    player.velocity.x = -6;
  }

  //enemy move
  enemy.velocity.x = 0;

  if (
    keys.ArrowRight.pressed &&
    enemy.lastKey === "ArrowRight" &&
    enemy.position.x + enemy.width <= canvas.width
  ) {
    enemy.velocity.x = 6;
  } else if (
    keys.ArrowLeft.pressed &&
    enemy.lastKey === "ArrowLeft" &&
    enemy.position.x >= 0
  ) {
    enemy.velocity.x = -6;
  }

  //attack box collision
  if (
    playerEnemyCollision({ body1: player, body2: enemy }) &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    enemy.health -= 10;
    enemyHealth.style.width = enemy.health + "%";
  }
  if (
    playerEnemyCollision({ body1: enemy, body2: player }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    player.health -= 10;
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
        player.velocity.y = -20;
        break;
      case "s":
        player.isAttacking = true;
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
        enemy.velocity.y = -20;
        break;
      case "ArrowDown":
        enemy.isAttacking = true;
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
        break;

      default:
        break;
    }
  }
});
