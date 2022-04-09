//const  precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio final con descuento a pagar son: $" + precioConDescuento;

}









/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioconDescuento,
    precioConDescuento
});*/
