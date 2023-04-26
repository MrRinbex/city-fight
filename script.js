mapModeTeamSelected = [city1, city2, city3, city4, city5, city6, city7, city8];

function animate() {
  window.requestAnimationFrame(animate);

  checkGolem();
  checkMinotaur();

  // Mode game Teams
  if (modeGame === 2) {
    hiddenContainer.style.display = "none";
    golemProfile.style.display = "none";
    minotaurProfile.style.display = "none";
    rightSlide.style.display = "flex";
    leftSlide.style.display = "flex";
  }

  if (modeGame === 2 && mapModeTeam.length === 3) {
    startBtn.style.display = "flex";
    teamVsTeam.style.display = "none";
    fighterVsFighter.style.display = "none";
    textDisplay.innerHTML = "Click START!";
    canvas.style.background = mapModeTeam[0];
    canvas.style.backgroundSize = "cover";
    city1.style.display = "none";
    city2.style.display = "none";
    city3.style.display = "none";
    city4.style.display = "none";
    city5.style.display = "none";
    city6.style.display = "none";
    city7.style.display = "none";
    city8.style.display = "none";

    const cityPicked = mapModeTeamSelected.filter((city) => {
      return city.innerText === "X";
    });
    cityPicked.map((city) => {
      return (
        (city.style.display = "flex"),
        (city.style.animation = "blink 9s infinite")
      );
    });

    if (golem_1.health <= 0 || minotaur_1.health <= 0) {
      notification.style.display = "none";
      canvas.style.background = mapModeTeam[1];
      canvas.style.backgroundSize = "cover";
    }
    if (golem_2.health <= 0 || minotaur_2.health <= 0) {
      notification.style.display = "none";
      canvas.style.background = mapModeTeam[2];
      canvas.style.backgroundSize = "cover";
    }

    if (
      (timerCount === 0 && TeamGolemPoints < TeamMinotaurPoints) ||
      (timerCount === 0 && golem_1.health < minotaur_1.health) ||
      golem_3.health <= 0
    ) {
      notification.style.display = "flex";
      notification.innerHTML = `Team Minotaur The Winner`;
      notification.style.animation = "blinkRed 1s infinite";
      gameOver = true;
      winner = "Team Minotaur";
      canvas.style.animation = "fadeIn 3s";
      canvas.style.background = "url('./image/background/gameOverBlue.png')";
      canvas.style.backgroundPosition = "left bottom";
      canvas.style.backgroundRepeat = "no-repeat";
    }

    if (
      (timerCount === 0 && TeamGolemPoints > TeamMinotaurPoints) ||
      (timerCount === 0 && golem_1.health > minotaur_1.health) ||
      minotaur_3.health <= 0
    ) {
      notification.style.display = "flex";
      notification.innerHTML = `Team Golem The Winner`;
      notification.style.animation = "blinkBlue 1s infinite";
      gameOver = true;
      winner = "Team Golem";
      canvas.style.animation = "fadeIn 3s";
      canvas.style.background = "url('./image/background/gameOverRed.png')";
      canvas.style.backgroundPosition = "right bottom";
      canvas.style.backgroundRepeat = "no-repeat";
    }
  }

  //Entrance manipulation
  if (modeGame === 1) {
    hiddenContainer.style.display = "none";
    rightSlide.style.display = "flex";
    leftSlide.style.display = "flex";
  }

  if (modeGame === 1 && golemReady && minotaurReady && mapSet) {
    minotaur1.style.display = "none";
    minotaur2.style.display = "none";
    minotaur3.style.display = "none";
    golem1.style.display = "none";
    golem2.style.display = "none";
    golem3.style.display = "none";
    startBtn.style.display = "flex";
    teamVsTeam.style.display = "none";
    fighterVsFighter.style.display = "none";
    textDisplay.innerHTML = "Click START!";
    golemProfile.style.display = "flex";
    minotaurProfile.style.display = "flex";

    if (golemSkin === "golem 1") {
      golemName.innerHTML = golem_1.name;
      golemAge.innerHTML = golem_1.age;
      golemColor.innerHTML = golem_1.skin;
      golemWeapon.innerHTML = golem_1.weapon;
      golemTitle.innerHTML = golem_1.titleNbr;
    } else if (golemSkin === "golem 2") {
      golemName.innerHTML = golem_2.name;
      golemAge.innerHTML = golem_2.age;
      golemColor.innerHTML = golem_2.skin;
      golemWeapon.innerHTML = golem_2.weapon;
      golemTitle.innerHTML = golem_2.titleNbr;
    } else if (golemSkin === "golem 3") {
      golemName.innerHTML = golem_3.name;
      golemAge.innerHTML = golem_3.age;
      golemColor.innerHTML = golem_3.skin;
      golemWeapon.innerHTML = golem_3.weapon;
      golemTitle.innerHTML = golem_3.titleNbr;
    }

    if (minotaurSkin === "minotaur 1") {
      minotaurName.innerHTML = minotaur_1.name;
      minotaurAge.innerHTML = minotaur_1.age;
      minotaurColor.innerHTML = minotaur_1.skin;
      minotaurWeapon.innerHTML = minotaur_1.weapon;
      minotaurTitle.innerHTML = minotaur_1.titleNbr;
    } else if (minotaurSkin === "minotaur 2") {
      minotaurName.innerHTML = minotaur_2.name;
      minotaurAge.innerHTML = minotaur_2.age;
      minotaurColor.innerHTML = minotaur_2.skin;
      minotaurWeapon.innerHTML = minotaur_2.weapon;
      minotaurTitle.innerHTML = minotaur_2.titleNbr;
    } else if (minotaurSkin === "minotaur 3") {
      minotaurName.innerHTML = minotaur_3.name;
      minotaurAge.innerHTML = minotaur_3.age;
      minotaurColor.innerHTML = minotaur_3.skin;
      minotaurWeapon.innerHTML = minotaur_3.weapon;
      minotaurTitle.innerHTML = minotaur_3.titleNbr;
    }
  }

  // Game Start
  if (gameStart) {
    setTimeout(() => (startEffect = false), 2000);
    entranceContainer.style.display = "none";

    if (modeGame === 2) {
      canvas.style.borderTop = "4px dashed black";
      canvas.style.borderLeft = "4px dashed blue";
      canvas.style.borderRight = "4px dashed red";
      canvas.style.borderBottom = "4px dashed black";
    }

    switch (map) {
      case 1:
        canvas.style.outline = "4px dashed green";
        break;
      case 2:
        canvas.style.outline = "4px dashed goldenrod";
        break;
      case 3:
        canvas.style.outline = "4px dashed palevioletred";
        break;
      case 4:
        canvas.style.outline = "4px dashed burlywood";
        break;
      case 5:
        canvas.style.outline = "4px dashed #cea00b";
        break;
      case 6:
        canvas.style.outline = "4px dashed #20dabb";
        break;
      case 7:
        canvas.style.outline = "4px dashed white";
        break;
      case 8:
        canvas.style.outline = "4px dashed #19a6dd";
        break;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    clearCanvas();

    if (golemSkin === "golem 1") {
      golem_1.update();
    } else if (golemSkin === "golem 2") {
      golem_2.update();
      TeamMinotaurPoints = 1;
    } else if (golemSkin === "golem 3") {
      golem_3.update();
      TeamMinotaurPoints = 2;
    }

    if (minotaurSkin === "minotaur 1") {
      minotaur_1.update();
    } else if (minotaurSkin === "minotaur 2") {
      minotaur_2.update();
      TeamGolemPoints = 1;
    } else if (minotaurSkin === "minotaur 3") {
      minotaur_3.update();
      TeamGolemPoints = 2;
    }
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
  minotaur_1.velocity.x = 0;
  minotaur_2.velocity.x = 0;
  minotaur_3.velocity.x = 0;

  if (startEffect && minotaurSkin === "minotaur 1") {
    minotaur_1.image = minotaur_1.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_1.image = minotaur_1.sprites.startAttack.image;
  } else {
    minotaur_1.image = minotaur_1.sprites.idle.image;
  }

  if (startEffect && minotaurSkin === "minotaur 2") {
    minotaur_2.image = minotaur_2.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_2.image = minotaur_2.sprites.startAttack.image;
  } else {
    minotaur_2.image = minotaur_2.sprites.idle.image;
  }

  if (startEffect && minotaurSkin === "minotaur 3") {
    minotaur_3.image = minotaur_3.sprites.startEffect.image;
  } else if (keys.ArrowDown.pressed) {
    minotaur_3.image = minotaur_3.sprites.startAttack.image;
  } else {
    minotaur_3.image = minotaur_3.sprites.idle.image;
  }

  if (
    minotaurSkin === "minotaur 1" &&
    keys.ArrowRight.pressed &&
    minotaur_1.lastKey === "ArrowRight" &&
    minotaur_1.position.x + minotaur_1.width <= canvas.width
  ) {
    minotaur_1.velocity.x = 1.5;
    minotaur_1.image = minotaur_1.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 1" &&
    keys.ArrowLeft.pressed &&
    minotaur_1.lastKey === "ArrowLeft" &&
    minotaur_1.position.x >= 0
  ) {
    minotaur_1.velocity.x = -1.5;
    minotaur_1.image = minotaur_1.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 2" &&
    keys.ArrowRight.pressed &&
    minotaur_2.lastKey === "ArrowRight" &&
    minotaur_2.position.x + minotaur_2.width <= canvas.width
  ) {
    minotaur_2.velocity.x = 1.5;
    minotaur_2.image = minotaur_2.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 2" &&
    keys.ArrowLeft.pressed &&
    minotaur_2.lastKey === "ArrowLeft" &&
    minotaur_2.position.x >= 0
  ) {
    minotaur_2.velocity.x = -1.5;
    minotaur_2.image = minotaur_2.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 3" &&
    keys.ArrowRight.pressed &&
    minotaur_3.lastKey === "ArrowRight" &&
    minotaur_3.position.x + minotaur_3.width <= canvas.width
  ) {
    minotaur_3.velocity.x = 1.5;
    minotaur_3.image = minotaur_3.sprites.walk.image;
  } else if (
    minotaurSkin === "minotaur 3" &&
    keys.ArrowLeft.pressed &&
    minotaur_3.lastKey === "ArrowLeft" &&
    minotaur_3.position.x >= 0
  ) {
    minotaur_3.velocity.x = -1.5;
    minotaur_3.image = minotaur_3.sprites.walk.image;
  }

  if (
    minotaurSkin === "minotaur 1" &&
    minotaur_1.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_1.image = minotaur_1.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 1" &&
    minotaur_1.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_1.image = minotaur_1.sprites.fall.image;
  }

  if (
    minotaurSkin === "minotaur 2" &&
    minotaur_2.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_2.image = minotaur_2.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 2" &&
    minotaur_2.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_2.image = minotaur_2.sprites.fall.image;
  }

  if (
    minotaurSkin === "minotaur 3" &&
    minotaur_3.velocity.y < 0 &&
    !startEffect
  ) {
    minotaur_3.image = minotaur_3.sprites.jump.image;
  } else if (
    minotaurSkin === "minotaur 3" &&
    minotaur_3.velocity.y > 0 &&
    !startEffect
  ) {
    minotaur_3.image = minotaur_3.sprites.fall.image;
  }

  //attack box collision Golem
  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_1,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_2,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_1,
      body2: minotaur_3,
    }) &&
    golem_1.isAttacking &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    (golem_1.dirX === 1 || golem_1.dirX === -1)
  ) {
    setTimeout(() => {
      golem_1.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_1,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_2,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_2,
      body2: minotaur_3,
    }) &&
    golem_2.isAttacking &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    (golem_2.dirX === 1 || golem_2.dirX === -1)
  ) {
    setTimeout(() => {
      golem_2.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_1,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_1.health -= 0.05;
    minotaurHealth.style.width = minotaur_1.health + "%";

    if (minotaur_1.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_1.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_2,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_2.health -= 0.05;
    minotaurHealth.style.width = minotaur_2.health + "%";

    if (minotaur_2.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_2.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: golem_3,
      body2: minotaur_3,
    }) &&
    golem_3.isAttacking &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    (golem_3.dirX === 1 || golem_3.dirX === -1)
  ) {
    setTimeout(() => {
      golem_3.isAttacking = false;
    }, 100);
    minotaur_3.health -= 0.05;
    minotaurHealth.style.width = minotaur_3.health + "%";

    if (minotaur_3.health <= 80) {
      heartRed5.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed5.style.backgroundSize = "contain";
      heartRed5.style.backgroundRepeat = "no-repeat";
      heartRed5.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 60) {
      heartRed4.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed4.style.backgroundSize = "contain";
      heartRed4.style.backgroundRepeat = "no-repeat";
      heartRed4.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 40) {
      heartRed3.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed3.style.backgroundSize = "contain";
      heartRed3.style.backgroundRepeat = "no-repeat";
      heartRed3.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 20) {
      heartRed2.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed2.style.backgroundSize = "contain";
      heartRed2.style.backgroundRepeat = "no-repeat";
      heartRed2.style.backgroundPosition = "center";
    }
    if (minotaur_3.health <= 0) {
      heartRed1.style.background =
        "url('./image/team-minotaur/empty-red-heart.png')";
      heartRed1.style.backgroundSize = "contain";
      heartRed1.style.backgroundRepeat = "no-repeat";
      heartRed1.style.backgroundPosition = "center";
    }
  }

  //attack box collision Minotaur
  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_1,
    }) &&
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_1.health -= 0.05;
    golemHealth.style.width = golem_1.health + "%";

    if (golem_1.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_1.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_2,
    }) &&
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_2.health -= 0.05;
    golemHealth.style.width = golem_2.health + "%";

    if (golem_2.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_2.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_1,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    minotaur_1.isAttacking &&
    (minotaur_1.dirX === 1 || minotaur_1.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_1.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_2,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    minotaur_2.isAttacking &&
    (minotaur_2.dirX === 1 || minotaur_2.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_2.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  if (
    golemMinotaurCollision({
      body1: minotaur_3,
      body2: golem_3,
    }) &&
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    minotaur_3.isAttacking &&
    (minotaur_3.dirX === 1 || minotaur_3.dirX === -1)
  ) {
    setTimeout(() => {
      minotaur_3.isAttacking = false;
    }, 100);
    golem_3.health -= 0.05;
    golemHealth.style.width = golem_3.health + "%";

    if (golem_3.health <= 80) {
      heartBlue5.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue5.style.backgroundSize = "contain";
      heartBlue5.style.backgroundRepeat = "no-repeat";
      heartBlue5.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 60) {
      heartBlue4.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue4.style.backgroundSize = "contain";
      heartBlue4.style.backgroundRepeat = "no-repeat";
      heartBlue4.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 40) {
      heartBlue3.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue3.style.backgroundSize = "contain";
      heartBlue3.style.backgroundRepeat = "no-repeat";
      heartBlue3.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 20) {
      heartBlue2.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue2.style.backgroundSize = "contain";
      heartBlue2.style.backgroundRepeat = "no-repeat";
      heartBlue2.style.backgroundPosition = "center";
    }
    if (golem_3.health <= 0) {
      heartBlue1.style.background =
        "url('./image/team-golem/empty-blue-heart.png')";
      heartBlue1.style.backgroundSize = "contain";
      heartBlue1.style.backgroundRepeat = "no-repeat";
      heartBlue1.style.backgroundPosition = "center";
    }
  }

  // Game over
  if (gameOver && winner === "Tie Game") {
    canvas.style.animation = "fadeIn 3s";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundRepeat = "no-repeat";
  } else if (
    (gameOver && winner === golem_1.name) ||
    (gameOver && winner === golem_2.name) ||
    (gameOver && winner === golem_3.name)
  ) {
    canvas.style.animation = "fadeIn 3s";
    canvas.style.background = "url('./image/background/gameOverRed.png')";
    canvas.style.backgroundPosition = "right bottom";
    canvas.style.backgroundRepeat = "no-repeat";
  } else if (
    (gameOver && winner === minotaur_1.name) ||
    (gameOver && winner === minotaur_2.name) ||
    (gameOver && winner === minotaur_3.name)
  ) {
    canvas.style.animation = "fadeIn 3s";
    canvas.style.background = "url('./image/background/gameOverBlue.png')";
    canvas.style.backgroundPosition = "left bottom";
    canvas.style.backgroundRepeat = "no-repeat";
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_1.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_1.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_1.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 1" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_1.health
  ) {
    golem_1.image = golem_1.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_2.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_2.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_2.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 2" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_2.health
  ) {
    golem_2.image = golem_2.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health < golem_3.health
  ) {
    minotaur_1.image = minotaur_1.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 1" &&
    gameOver &&
    minotaur_1.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health < golem_3.health
  ) {
    minotaur_2.image = minotaur_2.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 2" &&
    gameOver &&
    minotaur_2.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }

  if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health < golem_3.health
  ) {
    minotaur_3.image = minotaur_3.sprites.death.image;
  } else if (
    golemSkin === "golem 3" &&
    minotaurSkin === "minotaur 3" &&
    gameOver &&
    minotaur_3.health > golem_3.health
  ) {
    golem_3.image = golem_3.sprites.death.image;
  }
}
animate();
