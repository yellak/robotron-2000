const control = document.querySelectorAll("[data-operation]")
const stats = document.querySelectorAll("[data-stats]")


control.forEach((element) => {
    element.addEventListener("click", (event) => {
        target = event.target
        manipulateValue(target.parentNode, target.dataset.operation)
        updateStats(target.dataset.piece)
    })
});

function manipulateValue(parent, action) {
    piece = parent.querySelector("[data-counter]")
    if (action === "+") {
        piece.value = parseInt(piece.value) + 1
        return
    }
    if (action === "-") {
        piece.value = parseInt(piece.value) - 1
        return
    }
}

function updateStats(piece) {
    stats.forEach((stat) => {
        stat.textContent = parseInt(stat.textContent) + pecas[piece][stat.dataset.stats]
    })
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}