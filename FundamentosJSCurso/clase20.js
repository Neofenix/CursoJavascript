var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.50,
    cantidadDeLibros: 50
}

var juan = {
    nombre: 'Juan',
    apellido: 'Sin miedo',
    altura: 1.52,
    cantidadDeLibros: 15
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Infante',
    altura: 1.54,
    cantidadDeLibros: 20
}

var pepito = {
    nombre: 'Pepito',
    apellido: 'Perez',
    altura: 1.8,
    cantidadDeLibros: 5
}

var personas = [vicky,juan,pedro,pepito]

//Reducir un array a un valor unico

//Con un for (Tradicional)
var acum =0

for(var i=0; i < personas.length; i++){
    acum = acum  + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`)

//Con el reduce
const reducer = (acum,{ cantidadDeLibros }) => acum + cantidadDeLibros

//Parametros reducer => funcion y 0 => acumulador
var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)