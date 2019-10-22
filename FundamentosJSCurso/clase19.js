var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.50
}

var juan = {
    nombre: 'Juan',
    apellido: 'Sin miedo',
    altura: 1.52
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Infante',
    altura: 1.54
}

var pepito = {
    nombre: 'Pepito',
    apellido: 'Perez',
    altura: 1.81
}

// const esAlta = (persona) =>{
//     return persona.altura > 1.8
// }

//Similar

// const esAlta = persona => persona.altura > 1.8

const esAlta = ({altura}) => altura > 1.8

const esBaja = ({altura}) => altura <= 1.8

var personas = [vicky,juan,pedro,pepito]

//filter()=> condicion adentro que debe ser una funcion. Nos va a devolver un nuevo array con la condicion
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

//Similar

// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.8
// }) 

// console.log(personasAltas)


//console.log(personasAltas)
//console.log(personasBajas)

const pasarAlturaACms = persona => ({
   //Nuevo objeto del array original
        ...persona,
        altura:   persona.altura * 100

})

//Devolvernos un nuevo array modificando cada uno de los elementos de este
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)


