var numeros = [3, 5, 2, '0', 10];

numeros.push(1000);

function sumatorio(vector) {
    var sum = 0;
    // for (var i = 0; i < vector.length; i++) {
    //     sum += vector[i];
    // }
    // return sum;
    for (i in vector) {

        var valor = vector[i];
        if (typeof valor == 'number') {
            sum += vector[i];
        } else {
            return 'Upppsssss hay una cadena en tu array!!';
        }


    }
    return sum;
}
console.log(sumatorio(numeros));