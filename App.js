const navItems = document.querySelectorAll('.nav__item');
const button = document.querySelector('.button');
const screen = document.querySelectorAll('.screen')
const field = document.querySelector('.field')
let gameCardFrontExisting;
let gameCardExisting;
let level;
let front;

for (const navItem of navItems) {
  navItem.addEventListener('click', mark => {
    navItems[0].classList.remove('mark');
    navItems[1].classList.remove('mark');
    navItems[2].classList.remove('mark');
    navItem.classList.add('mark');
  });
}

button.addEventListener('click', discoverLevel)
function discoverLevel() {
  level = document.querySelector('.mark')
  level = parseInt(level.dataset.hard);
  console.log(level)                                                           //УБРАТЬ
  screen[0].classList.add('hidden');
  startGame()
  if (level === 6) {
    field.style.width = '60vw'
  }
}
let e = 0;
//Создаем карты в зависимости от уровня
function startGame() {
  for (let i = 0; i < level; i++) {
    const container = document.createElement('div')
    container.classList.add('container')
    field.append(container)

    const gameCard = document.createElement('div')
    gameCard.classList.add('game-card')
    container.append(gameCard)

    const gameCardFront = document.createElement('div')
    gameCardFront.classList.add('game-card__front')
    gameCard.append(gameCardFront)

    const gameCardBack = document.createElement('div')
    gameCardBack.classList.add('game-card__back')
    gameCard.append(gameCardBack)
  }
  gameCardExisting = document.querySelectorAll('.game-card');
  gameCardFrontExisting = document.querySelectorAll('.game-card__front')

  console.log(Array.from(gameCardFrontExisting)) // УБРАТЬ

  
  gameCardExisting.forEach(function (item) {
    // При нажатии на карту, происходит переворачивание.
    function up() {
      if (e < 2) {
        item.classList.add('active');
        e++
      } if (e === 2) {
        item.classList.remove('active');
        location.reload()
        e++;
      }
    }
    item.addEventListener('click', up);
  })

}
