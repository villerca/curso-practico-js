// Código del Cuadrado
//console.group("Cuadrados");

//const ladoCuad = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuad + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuad + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 

    
//console.log("El área  del cuadrado es: " + areaCuad + "cm^2");
//console.groupEnd();

// Código del Triangulo
//console.group("Triangulo");

//const ladoT1 = 9;
//const ladoT2 = 9;
//const baseT = 6;
//console.log("Los lados del Tríangulo miden: " + ladoT1 + "cm, " + ladoT2 + "cm, "  +  baseT + "cm");

//const alturaT = 7.5;
//console.log("La altura del tríangulo es: " + alturaT + "cm");


function perimetroTriangulo(lado1, lado2,base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del tríangulo es: " + areaTriangulo + "cm^2");

//console.groupEnd();

// Código del Circulo
//console.group("Circulo");

//const radioCirc = 4;
//console.log("El radio del circulo es : " + radioCirc + "cm");


// Diametro
//const diametroCirc = radioCirc * 2;
//console.log("El diametro del circulo es : " + diametroCirc + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI );



function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//    console.log("El perímetro del circulo es : " + perimetroCirc + "cm");


//const areaCirc = (radioCirc * radioCirc) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}



//console.log("El área del circulo es : " + areaCirc + "cm^2");


//console.groupEnd();

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + "cm");


}

function calcuarAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm^2");
}


// Triangulo

function calcularPerimetrotriangulo() {
    const inputL1 = document.getElementById("Inputlado1");
    const l1 = parseInt(inputL1.value);
    const inputL2 = document.getElementById("Inputlado2");
    const l2 = parseInt(inputL2.value);
    const inputLB = document.getElementById("Inputbase");
    const b = parseInt(inputLB.value);
    const inputAL = document.getElementById("Inputaltura");
    const al = parseInt(inputAL.value);
    

    const perimetro = perimetroTriangulo(l1, l2, b);
    alert("El perímetro del tríangulo es: " + perimetro + "cm");
    const area = areaTriangulo(b, al);
    alert("El area es " + area + "cm^2");

}



// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del circulo es: " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El perímetro del circulo es: " + area + "cm^2");
}

// Calculo de la altura 




/*function evaluar(lado1, lado2, ladoB){
    //var tipoDeTriangulo;
    
    if (lado1 === lado2 && lado1 != ladoB){
        //tipoDeTriangulo = "Isoceles";
       //return tipoDeTriangulo
       const altura = Math.sqrt(lado1**2 - (ladoB**2 /4));
        console.log("la altura es : " + altura + "cm");
       
    }else {
        alert("El tríangulo no es isoceles");
    }

    evaluar();*/
    
    


/*function calcularAlturaIsoceles() {
    const lado1 = document.getElementById("Inputlado1");
    const ilado1 = parseFloat(lado1.value);

    const lado2 = document.getElementById("Inputlado2");
    const ilado2 = parseFloat(lado2.value);

    const ladoB = document.getElementById("InputladoB");
    const iladoB = parseFloat(ladoB.value);

    if(ilado1 != ilado2){
        alert("El triangulo no es Isoceles");
    }
    else{
        const chicolado2 = iladoB / 2;
        const chicoBase = ilado1;

        const chicolado2Cuadrado = chicolado2 * chicolado2;
        const chicobaseCuadrado = chicoBase * chicoBase;

        const chicolado1 = Math.sqrt(chicobaseCuadrado - chicolado2Cuadrado);

        const grandeAltura = chicolado1;
        alert(`La altura es: ${grandeAltura}cm`);
    }
    
}*/


function calcularAlturaIsoceles(lado1, lado2, ladoB){
    if(lado1 == lado2 && lado1 != ladoB){
        console.log("Es isoceles");
        const cateto = (ladoB / 2) ** 2;
        const hipotenusa = lado1 ** 2;
        const altura = Math.sqrt((hipotenusa) - (cateto));
        console.log("altura"); 
    }
    else{
        console.log("No es isoceles");
    }
}
calcularAlturaIsoceles(5, 5, 8);





    



    




