const lista = [
    1,
    2,
    1,
    3,
    4,
    2,
    2,
    5,
    2,
    1,
];


function calcularModa(lista) {
    const lista1 = document.getElementById("Lista");
    const lista1Value = lista1Value;

    lista.map(
        function (elemento){
            if(lista1[elemento]){
                lista1[elemento] += 1;
            } else {
                lista1[elemento] = 1;
    
            }
        }
    );
    const listaArray = Object.entries(lista1).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda

};
console.log(calcularModa(lista));


    
    


