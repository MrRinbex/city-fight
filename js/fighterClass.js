class Fighter {
  constructor({ position, velocity, color, offset, sprites, dirX }) {
    this.position = position;
    this.velocity = velocity;
    this.lastKey;
    this.image = new Image();
    this.width = 255;
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
  constructor({ color, imageSrc }) {
    this.position();
    this.image = new Image();
    this.image.src = imageSrc;
    this.width = 55;
    this.height = 55;
    this.color = color;
  }
  position() {
    if (golemSkin === "golem 1") {
      x = golem_1.position.x;
      y = golem_1.position.y;
    } else if (golemSkin === "golem 2") {
      x = golem_2.position.x;
      y = golem_2.position.y;
    } else if (golemSkin === "golem 3") {
      x = golem_3.position.x;
      y = golem_3.position.y;
    }
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

    if (golem_1.isAttacking || golem_2.isAttacking || golem_3.isAttacking) {
      this.position.x =
        golem_1.attackBox.position.x + golem_1.attackBox.width ||
        golem_2.attackBox.position.x + golem_2.attackBox.width ||
        golem_3.attackBox.position.x + golem_3.attackBox.width;
      this.position.y =
        golem_1.attackBox.position.y + golem_1.attackBox.height ||
        golem_2.attackBox.position.y + golem_2.attackBox.height ||
        golem_3.attackBox.position.y + golem_3.attackBox.height;
    } else if (minotaur.isAttacking) {
      this.position.x =
        minotaur.attackBox.position.x + minotaur.attackBox.width;
      this.position.y =
        minotaur.attackBox.position.y + minotaur.attackBox.height;
    }

    if (
      (golem_1.dirX === -1 && golem_1.isAttacking) ||
      (golem_2.dirX === -1 && golem_2.isAttacking) ||
      (golem_3.dirX === -1 && golem_3.isAttacking)
    ) {
      this.position.x += -250;
    } else if (
      (golem_1.dirX === 1 && golem_1.isAttacking) ||
      (golem_2.dirX === 1 && golem_2.isAttacking) ||
      (golem_3.dirX === 1 && golem_3.isAttacking)
    ) {
      this.position.x += 50;
    } else if (
      (golem_1.dirX === 1 &&
        golem_1.position.x >= minotaur.position.x &&
        golem_1.isAttacking) ||
      (golem_2.dirX === 1 &&
        golem_2.position.x >= minotaur.position.x &&
        golem_2.isAttacking) ||
      (golem_3.dirX === 1 &&
        golem_3.position.x >= minotaur.position.x &&
        golem_3.isAttacking)
    ) {
      this.position.x += 0;
    }

    if (minotaur.dirX === 1 && minotaur.isAttacking) {
      this.position.x += 50;
    } else if (
      (minotaur.dirX === -1 &&
        minotaur.position.x <= golem_1.position.x &&
        minotaur.isAttacking) ||
      (minotaur.dirX === -1 &&
        minotaur.position.x <= golem_2.position.x &&
        minotaur.isAttacking) ||
      (minotaur.dirX === -1 &&
        minotaur.position.x <= golem_3.position.x &&
        minotaur.isAttacking)
    ) {
      this.position.x += -150;
    } else if (minotaur.dirX === -1 && minotaur.isAttacking) {
      this.position.x += -250;
    }
  }
}
