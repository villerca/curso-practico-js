// Funciones Helpers

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;

    }
}


// Mediana General
const salariosCub = cuba.map(
    function(personita) {
        return personita.salary;

    }
);

const salariosCubSorted = salariosCub.sort(
    function (salaryA, salaryB) {
return salaryA - salaryB;
    }
);


const medianaGeneralCub = medianaSalarios(salariosCubSorted);


// Mediana del top 10%

const spliceStart = (salariosCubSorted.length  * 90) / 100;
const spliceCount = salariosCubSorted.length - spliceStart;


const salarioCubTop10 = salariosCubSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Cub = medianaSalarios(salarioCubTop10);

console.log({
    medianaGeneralCub,
    medianaTop10Cub,
});

// capacidad de Endeudamiento
// Es (Ingresos - gastos) * 0.40





function capacidadDeuda(Ingresos, Gastos) {
    const ahorros  = Ingresos - Gastos;
    const cuartPorCiento = (ahorros * 40) / 100;
    return cuartPorCiento;
    
};


function capacidadEndeudamiento() {
    const inputIngresos = document.getElementById("Ingresos");
    const ingresosValue = inputIngresos.value;
    
    const inputGastos = document.getElementById("Gastos");
    const gastosValue = inputGastos.value;
    
    const nombre = document.getElementById("Nombre");
    const valuenombre = nombre.value;
    const calcular  = (ingresosValue - gastosValue) * 0.40 ; 
    
    const resultCapacDeuda = document.getElementById("resultCapacDeuda");
    
   
    resultCapacDeuda.innerText = valuenombre + " " + "la capacidad de endeudamiento de usted es de: $" + calcular  ;
    
}
   
    

    
    
    
    





    


    
    

    
