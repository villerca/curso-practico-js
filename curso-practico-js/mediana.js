function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    800,
    1000,
    700,
    350,
    
    
];


let listaOrdenada = lista1;
listaOrdenada.sort(function(a, b) {
    return a - b;
});
console.log(listaOrdenada);

const mitadListaOrdenada =  parseInt(listaOrdenada.length / 2);


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

let mediana;

if (esPar(listaOrdenada.length)) {
    // necesitamos dos elementos
    const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
    const elemento2 = listaOrdenada[mitadListaOrdenada];
    // --> el promedio

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    // --> mediana
    mediana = promedioElemento1y2;

} else {
    mediana = listaOrdenada[mitadListaOrdenada];
    // posicion mitadLista1 dentro de la lista1
    // --> mediana
};

function buttonMediana() {
    const inputlista = document.getElementById("InputLista");
    const listaValue = inputlista.value;

    
}



