//El punto y coma es opcional en JavaScript, excepto en algunos casos:

//1. Cuando usamos varias instrucciones en una mísma línea
//2. Al comenzar la próxima línea con un array
//3. Al comenzar la próxima línea con un template string



//Obligatorio
console.log("Puntos y comas");
[1, 2, 3].forEach(n => console.log(n*2))

const nombre ='Sacha'
console.log('Prueba consola');
`${nombre} es un desarrollador`

function  calcularDoble(numero){
    return {                          //Comenzar en la misma linea el { y el return }
        original: numero, doble: numero*2
    }
}
