const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 877;

context.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

class SpriteObject {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 100;
  }
  draw() {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, 50, this.height);
  }
  update() {
    this.draw();
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

function animate() {
  window.requestAnimationFrame(animate);
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
}
animate();
