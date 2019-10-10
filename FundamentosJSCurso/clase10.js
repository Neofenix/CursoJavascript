var Juancito = {
    nombre: 'Juancito',
    apellido: 'Pedriño',
    edad: 15,
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

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad > 18){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}

imprimirProfesiones(Juancito)
imprimirSiEsMayorDeEdad(Juancito)