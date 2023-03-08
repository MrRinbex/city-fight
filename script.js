const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 877;

context.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.6;

class SpriteObject {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 100;
    this.lastKey;
  }
  draw() {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, 50, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
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

    // enemy keys
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;

    default:
      break;
  }
  console.log(e.key);
});
