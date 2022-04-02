function calcularAlturaIsoceles(lado1, lado2, ladoB){
    if(lado1 == lado2 && lado1 != ladoB){
        console.log("Es isoceles");
        const cateto = (ladoB / 2) ** 2;
        const hipotenusa = lado1 ** 2;
        const altura = Math.sqrt((hipotenusa) - (cateto));
        alert("altura"); 
    }
    else{
        console.log("No es isoceles");
    }
}
calcularAlturaIsoceles(5, 5, 8);

