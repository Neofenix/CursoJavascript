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

function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}


//Recibimos el objeto
function imprimirNombreEnMayusculasDos(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

//Obtenemos el atributo del objeto que nos llegue 
function imprimirNombreEnMayusculasTres({nombre}){
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(Juanito.nombre)
//Pasamos el objeto
imprimirNombreEnMayusculasDos(Juanito)
imprimirNombreEnMayusculasTres(Juanito)

//Definir un objeto
//imprimirNombreEnMayusculasTres({nombre:'Pepito'})

//Sin parametros -> Error o con parametro incorrector
imprimirNombreEnMayusculasTres()
imprimirNombreEnMayusculasTres({apelido:'Perez'})