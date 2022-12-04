const board = document.querySelector('#board')
const squr_number = 999
const colors = ['white', 'yellow', 'blue', 'purple', 'red', 'black', 'cyan', 'green', 'grey']

for (let i = 0; i < squr_number; i++) {
    const squr = document.createElement('div')
    squr.classList.add('squr')

    squr.addEventListener('mouseover', () => {
        setColor(squr)
    })

    squr.addEventListener('mouseleave', () => {
        removeColor(squr)
    })

    board.append(squr)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}