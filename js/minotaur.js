// minotaur
const minotaur = new Fighter({
  position: {
    x: (canvas.width * 60) / 100,
    y: 150,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "red",
  offset: {
    x: 50,
    y: 0,
  },
  dirX: -1,
  sprites: {
    idle: {
      imageSrc: "./image/minotaur/1/minotaur_1_normal.png",
    },
    walk: {
      imageSrc: "./image/minotaur/1/minotaur_1_Walking.png",
    },
    jump: {
      imageSrc: "./image/minotaur/1/minotaur_1_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/minotaur/1/minotaur_1_fall.png",
    },
    startAttack: {
      imageSrc: "./image/minotaur/1/minotaur_1_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/minotaur/1/minotaur_1_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/minotaur/1/minotaur_1_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/Explosion_white.png",
    },
  },
});
