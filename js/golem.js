let golemSkin = "";

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
      imageSrc: "./image/start-effect/blue-effect.png",
    },
  },
  imageURL: "url('./image/team-golem/Golem_01.png')",
  name: "Drodra",
  age: "43",
  skin: "Rust",
  weapon: "Wooden stick",
  titleNbr: "9",
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
      imageSrc: "./image/start-effect/blue-effect.png",
    },
  },
  imageURL: "url('./image/team-golem/Golem_02.png')",
  name: "Ivia",
  age: "23",
  skin: "Olive",
  weapon: "Hatchet",
  titleNbr: "5",
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
      imageSrc: "./image/start-effect/blue-effect.png",
    },
  },
  imageURL: "url('./image/team-golem/Golem_03.png')",
  name: "Gror",
  age: "50",
  skin: "Stone",
  weapon: "Stone sword",
  titleNbr: "1",
});

// Golem Event Click
golem1.addEventListener("click", () => {
  golemSkin = "golem 1";
  golemReady = true;
  golem1.style.backgroundColor = "blue";
  golem2.style.backgroundColor = "black";
  golem3.style.backgroundColor = "black";
  selectedImageGolem.style.backgroundImage = golem_1.imageURL;
});
golem2.addEventListener("click", () => {
  golemSkin = "golem 2";
  golemReady = true;
  golem1.style.backgroundColor = "black";
  golem2.style.backgroundColor = "blue";
  golem3.style.backgroundColor = "black";
  selectedImageGolem.style.backgroundImage = golem_2.imageURL;
});
golem3.addEventListener("click", () => {
  golemSkin = "golem 3";
  golemReady = true;
  golem1.style.backgroundColor = "black";
  golem2.style.backgroundColor = "black";
  golem3.style.backgroundColor = "blue";
  selectedImageGolem.style.backgroundImage = golem_3.imageURL;
});
