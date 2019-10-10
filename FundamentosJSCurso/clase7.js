//Objeto

var Juanito = {
    nombre: 'Juanito',
    apellido: 'Perez',
    edad: 20
}

var Dario = {
    nombre: 'Pepito',
    apellido: 'Perez',
    edad: 25
}

function imprimirNombreEnMayusculas(persona){
// var {nombre} es igual a declarar persona. nombre -> Vamos a declearar la variable nombre que va a salir de persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    var {nombre ,edad}  = persona
    console. log('Hola me llamo', nombre, 'y tengo', edad, 'años')
}

//Sin parametros -> Error o con parametro incorrector
imprimirNombreEnMayusculas(Juanito)
imprimirNombreEnMayusculas(Dario)
imprimirNombreYEdad(Juanito)