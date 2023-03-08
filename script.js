const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 877;

context.fillRect(0, 0, canvas.width, canvas.height);

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

const player = new SpriteObject({
  position: {
    x: 0,
    y: 0,
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

const enemy = new SpriteObject({
  position: {
    x: 440,
    y: 550,
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

const keys = {
  d: { pressed: false },
  q: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
};

function animate() {
  window.requestAnimationFrame(animate);
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  // player Move
  player.velocity.x = 0;
  if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 6;
  } else if (keys.q.pressed && player.lastKey === "q") {
    player.velocity.x = -6;
  }

  //enemy move
  enemy.velocity.x = 0;
  if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 6;
  } else if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -6;
  }

  //attack box collision
  if (
    player.attackBox.position.x + player.attackBox.width >= enemy.position.x &&
    player.attackBox.position.x <= enemy.position.x + enemy.width &&
    player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
    player.attackBox.position.y <= enemy.position.y + enemy.height &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    console.log("contact");
  }
}
animate();

window.addEventListener("keydown", (e) => {
  console.log(e.key);
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
    case " ":
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
  console.log(e.key);
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // player keys
    case "d":
      keys.d.pressed = false;
      break;
    case "q":
      keys.q.pressed = false;
      break;
    case " ":
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
  console.log(e.key);
});
