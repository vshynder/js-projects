const hero = document.getElementById("hero");
const container = document.getElementById("container");

document.addEventListener("keydown", onKeyPress);
document.addEventListener("keyup", onKeyUp);

const FPS = 40;
const FRAMES_NUM = 4;
const HERO_WIDTH = 59;
const HERO_HEIGHT = 88;

let step = 0;
let modeY = 0;

let mode = "stand";

hero.style.background = 'url("../assets/tiles.jpg")';

setInterval(enterFrame, FPS);

function onKeyUp(e) {
  mode = "stand";
}

function onKeyPress(e) {
  switch (e.code) {
    case "ArrowDown":
      mode = "down";
      break;
    case "ArrowUp":
      mode = "up";
      break;
    case "ArrowRight":
      mode = "right";
      break;
    case "ArrowLeft":
      mode = "left";
      break;
    case "Space":
      mode = "plant";
      break;
  }
}

function enterFrame() {
  switch (mode) {
    case "stand":
      step = 0;
      modeY = 0;
      break;
    case "down":
      modeY = 0;
      hero.style.top = parseInt(hero.style.top) + HERO_HEIGHT * 0.1 + "px";
      movement();
      break;
    case "up":
      modeY = 1;
      hero.style.top = parseInt(hero.style.top) - HERO_HEIGHT * 0.1 + "px";
      movement();
      break;
    case "right":
      modeY = 3;
      hero.style.left = parseInt(hero.style.left) + HERO_WIDTH * 0.25 + "px";
      movement();
      break;
    case "left":
      modeY = 2;
      hero.style.left = parseInt(hero.style.left) - HERO_WIDTH * 0.25 + "px";
      movement();
      break;

    case "plant":
      step = 0;
      medeY = 0;
      plantBomb();
  }
  hero.style.backgroundPositionX = -HERO_WIDTH * step + "px";
  hero.style.backgroundPositionY = -HERO_HEIGHT * modeY + "px";
}

function movement() {
  step++;
  if (step > FRAMES_NUM - 1) {
    step = 0;
  }
}

function plantBomb() {
  const bomb = document.createElement('div');
  bomb.style.position = "absolute";
  bomb.style.border = "1px solid black";
  bomb.style.borderRadius = "50%";
  bomb.style.width = 20 + 'px';
  bomb.style.height = 20 + 'px';
  bomb.style.left = parseInt(hero.style.left) + HERO_WIDTH/3 + "px";
  bomb.style.top = parseInt(hero.style.top) + HERO_HEIGHT + "px";
  container.appendChild(bomb);
}