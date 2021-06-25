const navItems = document.querySelectorAll(".nav__item");
const button = document.querySelector(".button");
const screen = document.querySelectorAll(".screen");
const field = document.querySelector(".field");
let level;

for (const navItem of navItems) {
  navItem.addEventListener("click", (mark) => {
    navItems[0].classList.remove("mark");
    navItems[1].classList.remove("mark");
    navItems[2].classList.remove("mark");
    navItem.classList.add("mark");
  });
}

let countClick = 0;

function buildCards() {
  const randonNum = Math.floor(Math.random() * level);
  for (let i = 0; i < level; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    field.append(container);

    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    container.append(gameCard);

    const gameCardFront = document.createElement("div");
    gameCardFront.classList.add("game-card__front");
    gameCard.append(gameCardFront);

    const gameCardBack = document.createElement("div");
    gameCardBack.classList.add("game-card__back");
    gameCard.append(gameCardBack);

    if(randonNum === i) {
      gameCardFront.classList.add("game-card__bug");
    }
  }
}

//Создаем карты в зависимости от уровня
function startGame() {
  buildCards();
  let gameCardExisting = document.querySelectorAll(".game-card");

  gameCardExisting.forEach(function (item) {
    // При нажатии на карту, происходит переворачивание.
    function up() {
      if (countClick < 2) {
        item.classList.add("active");
        countClick++;
      } if (countClick === 2) {
        item.classList.remove("active");
        screen[0].classList.remove("hidden");
        screen[1].classList.add("hidden");
        field.innerHTML = "";
        field.style.width = "";
        countClick = 0;
      }
    }
    item.addEventListener("click", up);
  });
}

function discoverLevel() {
  level = document.querySelector(".mark");
  level = parseInt(level.dataset.hard);
  screen[0].classList.add("hidden");
  screen[1].classList.remove("hidden");
  startGame();
  if (level === 6) {
    field.style.width = "55vw";
  }
}

button.addEventListener("click", discoverLevel);