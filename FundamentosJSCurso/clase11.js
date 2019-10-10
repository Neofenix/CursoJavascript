var Juancito = {
    nombre: 'Juancito',
    apellido: 'Pedriño',
    edad: 19,
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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} 'es mayor de edad`)
    }else{
        console.log(`${persona.nombre} 'no es mayor de edad`)
    }
}

imprimirProfesiones(Juancito)
imprimirSiEsMayorDeEdad(Juancito)