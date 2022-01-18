//inspiration for game from https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/

const square = document.querySelectorAll('.square')
const turkey = document.querySelectorAll('.turkey')
const timeLeft = document.getElementById('time-left')
let score = document.getElementById('score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('turkey')
  })
  let randomPosition = square[Math.floor(Math.random()*9)]
  randomPosition.classList.add('turkey')

  //assign the id of randomPosition to hitPosition for us to use later

  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result +1
      //visually display result in browser
      score.textContent = result
    }
  })
})
//need a function that will move turkey randomly to a new location

function moveTurkey (){
  let timerId = null
  //using the setInterval function to set time interval for when turkey moves to a new location 
  timerId = setInterval(randomSquare, 300)
}

moveTurkey()
//adding countdown timer that will start at 60 and end at 0
function countDown(){
  currentTime--
  timeLeft.textContent = currentTime;
  if(currentTime === 0) {
    clearInterval(timerId)
    alert ('Game Over! Your final score is' + result)
  }
}
let timerId = setInterval(countDown, 1000)