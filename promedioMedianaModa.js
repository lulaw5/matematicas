var input = document.getElementById('input');
var resultadoPromedio = document.getElementById('resultadoPromedio');
var resultadoMediana = document.getElementById('resultadoMediana');
var resultadoModa = document.getElementById('resultadoModa');

var calcularPromedio = (iterable) => {
    let array = iterable.split(", ");
    let sumaElementos = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2))
    return promedio = sumaElementos / array.length;
}

function mediaAritmetica() {
    let promedioValue = input.value;
    let resultado = calcularPromedio(promedioValue);
    resultadoPromedio.innerHTML = `El promedio es: ${resultado.toFixed(2)}`;
}

function calcularMediana(iterable) {
    let array = iterable.split(", ");
    let listaOrdenada = array.sort((a, b) => a - b);
    let mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (listaOrdenada.length % 2 == 0) {
        let elemento1 = listaOrdenada[mitadLista];
        let elemento2 = listaOrdenada[mitadLista - 1];
        mediana = (Number(elemento1) + Number(elemento2)) / 2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function mediana() {
    let medianaValue = input.value;
    let resultado = calcularMediana(medianaValue);
    resultadoMediana.innerHTML = `La mediana es: ${resultado}`;
}

var repeticionNumeros = {};
var calcularModa = (iterable) => {
    let array = iterable.split(", ");
    let cantidadElementos = array.map(elemento => {
        if (repeticionNumeros[elemento]) {
            repeticionNumeros[elemento] += 1;
        } else {
            repeticionNumeros[elemento] = 1;
        }
    })
    cantidadElementos = Object.entries(repeticionNumeros);
    let menorMayor = cantidadElementos.sort((a, b) => a[1] - b [1]);
    var modas = [];
    for (let i = 0; i < menorMayor.length; i++) {
        if (menorMayor[i][1] == menorMayor[menorMayor.length - 1][1]) {
            modas.push(menorMayor[i]);
        }
    }
    return modas;
}

function moda() {
    let modaValue = input.value;
    let resultado = calcularModa(modaValue);
    if (resultado.length > 1) {
        for (let i = 0; i < resultado.length; i++) {
            resultadoModa.innerHTML = `La moda es: ${resultado[i][0]} y se repite ${resultado[i][1]} veces`;
        }
    } else {
        resultadoModa.innerHTML = `La moda es: ${resultado[0][0]} y se repite ${resultado[0][1]} veces`;
    }
}