let form = document.getElementById("FEP")
 
let cantidad = 0;
const valorUnidad = 820000;
let valorCompra = 0;
let porcentajeDescuento = 0;
let valorDescuento = 0;
let precioFinal = 0

form.addEventListener("submit", function (e) {
    e.preventDefault();
})

function inyectar() {
    cantidad = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad < 1) {
        window.alert("Cantidad invalida.");
    } else {
        calcular();
    }
}

function calcular() {
    valorCompra = cantidad * valorUnidad;

    if (valorCompra >= 1640000 && valorCompra <= 3280000) {
        porcentajeDescuento = 15;
    }else if (valorCompra > 3280000 && valorCompra <= 6560000) {
        porcentajeDescuento = 25;
    } else if (valorCompra > 6560000 && valorCompra <= 9840000) {
        porcentajeDescuento = 35;
    } else if (valorCompra > 9840000) {
        porcentajeDescuento = 0;
    }

    valorDescuento = (valorCompra * (porcentajeDescuento / 100));
    precioFinal = valorCompra - valorDescuento;

    document.getElementById("valorCompra").value = valorCompra;
    document.getElementById("valorDescuento").value = valorDescuento;
    document.getElementById("total").value = precioFinal;

    var descuento = "Su descuento fue de " + porcentajeDescuento + "%"
    document.getElementById("descuento").innerHTML = descuento;

    mostrar();
}

function mostrar() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("cuenta").style.display = "block";
}

