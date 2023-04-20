let golemSkin = "";

// Golem Event Click
golem1.addEventListener("click", () => {
  gameStart = true;
  golemSkin = "golem 1";
});
golem2.addEventListener("click", () => {
  gameStart = true;
  golemSkin = "golem 2";
});
golem3.addEventListener("click", () => {
  gameStart = true;
  golemSkin = "golem 3";
});

// Golem
const golem_1 = new Fighter({
  position: {
    x: 50,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 50,
    y: 0,
  },
  dirX: 1,
  sprites: {
    idle: {
      imageSrc: "./image/Golem/1/Golem_1_normal.png",
    },
    walk: {
      imageSrc: "./image/Golem/1/Golem_1_Walking.png",
    },
    jump: {
      imageSrc: "./image/Golem/1/Golem_1_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/Golem/1/Golem_1_fall.png",
    },
    startAttack: {
      imageSrc: "./image/Golem/1/Golem_1_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/Golem/1/Golem_1_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/Golem/1/Golem_1_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_green.png",
    },
  },
});

const golem_2 = new Fighter({
  position: {
    x: 50,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 50,
    y: 0,
  },
  dirX: 1,
  sprites: {
    idle: {
      imageSrc: "./image/Golem/2/Golem_2_normal.png",
    },
    walk: {
      imageSrc: "./image/Golem/2/Golem_2_Walking.png",
    },
    jump: {
      imageSrc: "./image/Golem/2/Golem_2_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/Golem/2/Golem_2_fall.png",
    },
    startAttack: {
      imageSrc: "./image/Golem/2/Golem_2_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/Golem/2/Golem_2_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/Golem/2/Golem_2_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_green.png",
    },
  },
});

const golem_3 = new Fighter({
  position: {
    x: 50,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 50,
    y: 0,
  },
  dirX: 1,
  sprites: {
    idle: {
      imageSrc: "./image/Golem/3/Golem_3_normal.png",
    },
    walk: {
      imageSrc: "./image/Golem/3/Golem_3_Walking.png",
    },
    jump: {
      imageSrc: "./image/Golem/3/Golem_3_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/Golem/3/Golem_3_fall.png",
    },
    startAttack: {
      imageSrc: "./image/Golem/3/Golem_3_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/Golem/3/Golem_3_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/Golem/3/Golem_3_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_green.png",
    },
  },
});
