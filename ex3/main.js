const paints = document.querySelectorAll(".item")

function mostraTintas(element) {
    paints.forEach((paint) => {
        paint.removeAttribute("hidden")
    })
}

function escondeTintas(element) {
    paints.forEach((paint) => {
        paint.setAttribute("hidden", undefined)
    })
}