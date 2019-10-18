//Variable de alcance global - En el navegador se accede a la variable con window.nombre
var nombre = 'Juan'

//Tiene un alcance local -> El valor de la variable nombre se copia a la variable nombre (Paso por valor)
//la variable nombre existe en alcance local con otro valor, sin importar el alcance global de la misma
function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
console.log(nombre);