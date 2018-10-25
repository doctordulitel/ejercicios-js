function colorear() {
    document.bgColor = '#339999';
}
//colorear();

//parametros
function colorearColor(color) {
    document.bgColor = color;
}

colorearColor('yellow');

//valores de retorno
function pideNumero() {
    var numero;
    do {
        numero = prompt('Dame un número', '');
        numero = Number(numero);
        if (numero > 1000) {
            return 'kk';
        }
    } while (isNaN(numero));
    return numero;
}
// var minumero = pideNumero();
// console.log(minumero);

//ambito de las variables
var local = 44;

function ambito() {
    var local = 33;
}
// ambito();
// console.log(local);