var Juancito = {
    nombre: 'Juancito',
    apellido: 'Pedriño',
    edad: 16,
    ingeniero: false,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:true
}


function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }

    if(persona.dj){
        console.log('Dj')
    }

    if(persona.cantante){
        console.log('Cantante')
    }

    if(persona.guitarrista){
        console.log('Guitarrista')
    }
}

//numero fijo
const MAYORIA_DE_EDAD = 18

// //Asignar una funcion anomina a una variable 

// const esMayorDeEdad = function(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }


//Arrow function, cuando tenemos un solo parametro podemos obivar los 
//parentesis (persona) => persona
//Podemos borrar el return y las llaves si una funcion solo hace retornar algo

// const esMayorEdadArrow = persona => persona.edad >= MAYORIA_DE_EDAD


//Le vamos a pasar un objeto que tiene una edad
const esMayorEdadArrow = ({edad}) => edad >= MAYORIA_DE_EDAD

const esMenorEdadArrow = ({edad}) => !esMayorEdadArrow({edad})


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorEdadArrow(persona)){
        console.log(`${persona.nombre} 'es mayor de edad`)
    }else{
        console.log(`${persona.nombre} 'no es mayor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorEdadArrow(persona)){
        console.log('ACCESO DENEGADO')
    }
}

imprimirProfesiones(Juancito)
imprimirSiEsMayorDeEdad(Juancito)
permitirAcceso(Juancito)