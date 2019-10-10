var nombre = 'Sacha', edad = 28

function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`)
}


//Debilmente tipado
imprimirEdad(nombre, edad)

imprimirEdad('Vicky', 28)
imprimirEdad('Erik', 27)
imprimirEdad(28, 'Alberto')
imprimirEdad('Juan')