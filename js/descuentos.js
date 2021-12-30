const cupones = [
    {
        nombre: 'descuento15',
        descuento: 15
    },
    {
        nombre: 'descuento25',
        descuento: 25
    },
    {
        nombre: 'descuento30',
        descuento: 30
    }
]

function calcularPrecioConDescuento(precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function priceDescount() {
    var inputPrice = document.getElementById('inputPrice');
    var priceValue = inputPrice.value;
    var inputDiscount = document.getElementById('inputDiscount');
    var discountValue = inputDiscount.value;
    var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    var resultPrice = document.getElementById('resultPrice');
    resultPrice.innerText = 'El precio con descuento es de $' + precioConDescuento;

    var validarCupon = function (cupon) {
        var inputCupon = document.getElementById('inputCupon');
        var cuponValue = inputCupon.value;

        return cupon.nombre === cuponValue;
    }

    var usarCupon = cupones.find(validarCupon);
    if (!usarCupon) {
        alert('El cupón ' + cuponValue + ' no es válido');
    } else {
        var descuento = usarCupon.descuento;
        var precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        var resultCupon = document.getElementById('resultCupon');
        resultCupon.innerText = 'El precio con descuento de cupón es de $' + precioConDescuento;
    }
}