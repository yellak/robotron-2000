const button_calcular = document.querySelector('#calcular');
const resultado = document.querySelector(".resultado");

button_calcular.addEventListener('click', onCalcularClick);

function onCalcularClick(event) {
    resultado.innerHTML = 'Fui Clicado'
    console.log('clicked')
};