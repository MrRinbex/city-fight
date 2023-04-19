class Fighter {
  constructor({ position, velocity, color, offset, imageSrc, sprites, dirX }) {
    this.position = position;
    this.velocity = velocity;
    this.lastKey;
    this.image = new Image();
    this.image.src = imageSrc;
    this.width = 155;
    this.height = 175;
    this.dirX = dirX;

    //sprites images
    this.sprites = sprites;
    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }

    // attackBox
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset,
      width: 150,
      height: 25,
    };
    this.color = color;
    this.isAttacking;
    this.health = 100;
  }

  draw() {
    context.save();
    context.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );
    context.scale(this.dirX, 1);
    context.drawImage(
      this.image,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    context.restore();
  }

  update() {
    this.draw();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 50) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }

  attack() {
    this.isAttacking = true;
  }
}

class Hits {
  constructor({ position, color, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.width = 55;
    this.height = 55;
    this.color = color;
  }

  draw() {
    context.save();
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    context.restore();
  }

  update() {
    this.draw();

    if (golem.isAttacking) {
      this.position.x = golem.attackBox.position.x + golem.attackBox.width;
      this.position.y = golem.attackBox.position.y + golem.attackBox.height;
    } else if (minotaur.isAttacking) {
      this.position.x =
        minotaur.attackBox.position.x + minotaur.attackBox.width;
      this.position.y =
        minotaur.attackBox.position.y + minotaur.attackBox.height;
    }

    if (golem.dirX === -1 && golem.isAttacking) {
      this.position.x += -200;
    } else if (
      golem.dirX === 1 &&
      golem.position.x >= minotaur.position.x &&
      golem.isAttacking
    ) {
      this.position.x += 0;
    }

    if (minotaur.dirX === 1 && minotaur.isAttacking) {
      this.position.x += 0;
    } else if (
      minotaur.dirX === -1 &&
      minotaur.position.x <= golem.position.x &&
      minotaur.isAttacking
    ) {
      this.position.x += -150;
    } else if (minotaur.dirX === -1 && minotaur.isAttacking) {
      this.position.x += -200;
    }
  }
}
