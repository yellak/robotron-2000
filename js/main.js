const down = document.querySelector('#down')
const up = document.querySelector('#up')
const arms = document.querySelector('#arms')

up.addEventListener('click', (event) => {
    arms.value = parseInt(arms.value) + 1
})

down.addEventListener('click', (event) => {
    arms.value = parseInt(arms.value) - 1
})