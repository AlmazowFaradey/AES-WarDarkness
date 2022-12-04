const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const timeM = document.querySelector('#timeM')
const board = document.querySelector('#board')
const colors = ['white', 'yellow', 'blue', 'purple', 'red', 'black', 'cyan', 'green', 'grey']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {

    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }

})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time

        let i = 0

        if (current > 60) {

            i = Math.round(time/60)

        }

        current = time - (i * 60) 

        if (i < 10) {
            i = `0${i}`
        }

        if (current < 10) {
            current = `0${current}`
        }
        
        setTime(current)
        setTimeM(i)
        //console.log (i = Math.round(time/60))
    }
}

function setTimeM(m) {
    timeM.innerHTML = `${m}`
}

function setTime(s) {
    timeEl.innerHTML = `${s}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()
    

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    board.append(circle)
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}