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
    altura: 1.56
}


var personas = [vicky,juan,pedro,pepito]


//personas[0].altura o personas[0]['altura'] para acceder a la altura


for(var i=0; i<personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}