function manipulateValue(parent, action) {
    piece = parent.querySelector(".controle-contador")
    if (action === "+") {
        piece.value = parseInt(piece.value) + 1
        return
    }
    if (action === "-") {
        piece.value = parseInt(piece.value) - 1
        return
    }
}

const control = document.querySelectorAll(".controle-ajuste")
control.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipulateValue(event.target.parentNode, event.target.textContent)
    })
});