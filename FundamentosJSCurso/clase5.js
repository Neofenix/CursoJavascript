//Variable de alcance global - En el navegador se accede a la variable con window.nombre
var nombre = 'Juan'

//Tiene un alcance local -> El valor de nombre se copia a n (Paso por valor)
//nombre existe en alcance local con otro valor, sin importar el alcance global
function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)