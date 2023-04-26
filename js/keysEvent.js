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
        playJumpEffect1();
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
        playPunchEffect1();
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
        playJumpEffect2();
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
        playPunchEffect2();
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
