const control = document.querySelectorAll("[data-operation]")
control.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipulateValue(event.target.parentNode, event.target.dataset.operation)
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