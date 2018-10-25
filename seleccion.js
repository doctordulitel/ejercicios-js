document.addEventListener('DOMContentLoaded', inicializacion);

function inicializacion() {
    var cambiaClaseButton = document.getElementById('cambiaClase');
    cambiaClaseButton.addEventListener('click', cambiaEstilosClase);

    var cambiarLiButton = document.getElementById('cambiarLi');
    cambiarLiButton.addEventListener('click', cambiaEstilosLi);
}

function cambiaEstilosClase() {
    var elementos = document.getElementsByClassName('item');
    for (var i = 0; i < elementos.length; i++) {
        elementos.item(i).style.color = 'red';
    }

    //console.log(items)
}

function cambiaEstilosLi() {
    var liElementos = document.getElementsByTagName('li');
    for (var i = 0; i < liElementos.length; i++) {
        liElementos.item(i).classList.add('itemgrande');
    }

    //console.log(items)
}