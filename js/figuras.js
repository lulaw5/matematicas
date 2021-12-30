
const PI = Math.PI;

function pCuadrado(lado) {
    return lado * 4;
}

function aCuadrado(lado) {
    return lado * lado;
}

function perimetroCuadrado() {
    var input = document.getElementById('inputCuadrado').value;
    var perimetro = pCuadrado(input);
    var pPerimetroCuadrado = document.getElementById('pPerimetroCuadrado');
    pPerimetroCuadrado.innerText = 'El perímetro del cuadrado es: ' + perimetro + 'cm';
}

function areaCuadrado() {
    var input = document.getElementById('inputCuadrado').value;
    var area = aCuadrado(input);
    var pAreaCuadrado = document.getElementById('pAreaCuadrado');
    pAreaCuadrado.innerText = 'El área del cuadrado es: ' + area + 'cm²';
}

function pRectangulo(base, altura) {
    return (base * 2) + (altura * 2);
}

function aRectangulo(base, altura) {
    return base * altura;
}

function perimetroRectangulo() {
    var inputBase = document.getElementById('bRectangulo').value;
    var inputAltura = document.getElementById('aRectangulo').value;
    var perimetro = pRectangulo(inputBase, inputAltura);
    var pPerimetroRectangulo = document.getElementById('pPerimetroRectangulo');
    pPerimetroRectangulo.innerText = 'El perímetro del rectángulo es: ' + perimetro + 'cm';
}

function areaRectangulo() {
    var inputBase = document.getElementById('bRectangulo').value;
    var inputAltura = document.getElementById('aRectangulo').value;
    var area = aRectangulo(inputBase, inputAltura);
    var pAreaRectangulo = document.getElementById('pAreaRectangulo');
    pAreaRectangulo.innerText = 'El área del rectángulo es: ' + area + 'cm²';
}

function perimetroTriangulo() {
    var lado1 = document.getElementById('lado1').value;
    var lado2 = document.getElementById('lado2').value;
    var lado3 = document.getElementById('lado3').value;
    var perimetro = Number(lado1) + Number(lado2) + Number(lado3);
    var pPerimetroTriangulo = document.getElementById('pPerimetroTriangulo');
    pPerimetroTriangulo.innerText = 'El perímetro del triángulo es: ' + perimetro + 'cm';
}

function alturaTriangulo() {
    var ladoA = document.getElementById('ladoA').value;
    var ladoB = document.getElementById('ladoB').value;
    var ladoC = document.getElementById('ladoC').value;

    if (ladoA === ladoB && ladoA === ladoC) {
        var alturaEquilatero = (Math.sqrt(3) * ladoA) / 2;
        var pAlturaEquilatero = document.getElementById('pAlturaEquilatero');
        pAlturaEquilatero.innerText = 'La altura del triángulo equilátero es: ' + alturaEquilatero + 'cm';
    } else if ((ladoA === ladoB) && ladoA != ladoC) {
        var alturaIsosceles = Math.sqrt(Math.pow(ladoA, 2) - (Math.pow(ladoC, 2) / 4));
        var pAlturaIsosceles = document.getElementById('pAlturaIsosceles');
        pAlturaIsosceles.innerText = 'La altura del triángulo isósceles es: ' + alturaIsosceles + 'cm';
    } else if (ladoA != ladoB && ladoA != ladoC) {
        var semiperimetro = (Number(ladoA) + Number(ladoB) + Number(ladoC)) / 2;
        var alturaEscaleno = (2 / ladoA) * (Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC)));
        var pAlturaEscaleno = document.getElementById('pAlturaEscaleno');
        pAlturaEscaleno.innerText = 'La altura del triángulo escaleno es: ' + alturaEscaleno + 'cm';
    }
}

function areaTriangulo() {
    var base = document.getElementById('baseArea').value;
    var altura = document.getElementById('altura').value;
    var area = (base * altura) / 2;
    var pAreaTriangulo = document.getElementById('pAreaTriangulo');
    pAreaTriangulo.innerText = 'El área del triángulo es: ' + area + 'cm²';
}

function dCirculo(radio) {
    return radio * 2;
}

function pCirculo(radio) {
    var diametro = dCirculo(radio);
    return diametro * PI;
}

function aCirculo(radio) {
    return (radio * radio) * PI;
}

function diametroCirculo() {
    var input = document.getElementById('radio').value;
    var diametro = dCirculo(input);
    var pDiametroCirculo = document.getElementById('pDiametroCirculo');
    pDiametroCirculo.innerText = 'El diámetro del círculo es: ' + diametro + 'cm';
}

function perimetroCirculo() {
    var input = document.getElementById('radio').value;
    var perimetro = pCirculo(input);
    var pPerimetroCirculo = document.getElementById('pPerimetroCirculo');
    pPerimetroCirculo.innerText = 'El perímetro del círculo es: ' + perimetro + 'cm'
}

function areaCirculo() {
    var input = document.getElementById('radio').value;
    var area = aCirculo(input);
    var pAreaCirculo= document.getElementById('pAreaCirculo');
    pAreaCirculo.innerText = 'El área del círculo es: ' + area + 'cm²';
}