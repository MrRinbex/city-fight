let minotaurSkin = "";

//Minotaur
const minotaur_1 = new Fighter({
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
      imageSrc: "./image/start-effect/red-effect.png",
    },
  },
  imageURL: "url('./image/team-minotaur/Minotaur_01.png')",
});

const minotaur_2 = new Fighter({
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
      imageSrc: "./image/minotaur/2/minotaur_2_normal.png",
    },
    walk: {
      imageSrc: "./image/minotaur/2/minotaur_2_Walking.png",
    },
    jump: {
      imageSrc: "./image/minotaur/2/minotaur_2_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/minotaur/2/minotaur_2_fall.png",
    },
    startAttack: {
      imageSrc: "./image/minotaur/2/minotaur_2_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/minotaur/2/minotaur_2_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/minotaur/2/minotaur_2_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/red-effect.png",
    },
  },
  imageURL: "url('./image/team-minotaur/Minotaur_02.png')",
});

const minotaur_3 = new Fighter({
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
      imageSrc: "./image/minotaur/3/minotaur_3_normal.png",
    },
    walk: {
      imageSrc: "./image/minotaur/3/minotaur_3_Walking.png",
    },
    jump: {
      imageSrc: "./image/minotaur/3/minotaur_3_Jump_Loop.png",
    },
    fall: {
      imageSrc: "./image/minotaur/3/minotaur_3_fall.png",
    },
    startAttack: {
      imageSrc: "./image/minotaur/3/minotaur_3_start_Attacking.png",
    },
    endAttack: {
      imageSrc: "./image/minotaur/3/minotaur_3_end_Attacking.png",
    },
    death: {
      imageSrc: "./image/minotaur/3/minotaur_3_FullDying.png",
    },
    startEffect: {
      imageSrc: "./image/start-effect/red-effect.png",
    },
  },
  imageURL: "url('./image/team-minotaur/Minotaur_03.png')",
});

// Minotaur Event Click
minotaur1.addEventListener("click", () => {
  minotaurReady = true;
  minotaurSkin = "minotaur 1";
  minotaur1.style.backgroundColor = "red";
  minotaur2.style.backgroundColor = "black";
  minotaur3.style.backgroundColor = "black";
  selectedImageMinotaur.style.backgroundImage = minotaur_1.imageURL;
});
minotaur2.addEventListener("click", () => {
  minotaurReady = true;
  minotaurSkin = "minotaur 2";
  minotaur1.style.backgroundColor = "black";
  minotaur2.style.backgroundColor = "red";
  minotaur3.style.backgroundColor = "black";
  selectedImageMinotaur.style.backgroundImage = minotaur_2.imageURL;
});
minotaur3.addEventListener("click", () => {
  minotaurReady = true;
  minotaurSkin = "minotaur 3";
  minotaur1.style.backgroundColor = "black";
  minotaur2.style.backgroundColor = "black";
  minotaur3.style.backgroundColor = "red";
  selectedImageMinotaur.style.backgroundImage = minotaur_3.imageURL;
});
