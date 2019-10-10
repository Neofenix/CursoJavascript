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

//Los objetos que pasamos por parametro, se pasan por referencia por lo que se modifica el original
function cumpleaños(persona){

    //modifica el original  
    //persona.edad + 1
    
    //Copiar el objeto y retornar  uno nuevo con la modificacion
    return{
        ...persona,
        edad : persona.edad + 1
    }
}


