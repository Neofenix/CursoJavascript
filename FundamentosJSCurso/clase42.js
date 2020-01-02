//Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional 
//y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, 
//que hayan modificaciones en las variables sin nuestro consentimiento, 
//produciendo comportamientos inesperados en el programa


const juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}

const cumpleanos = persona => persona.edad ++


//Hacemos cumpleaños(juan) en consola y nos modifca la edad en el objeto, a veces no queremos eso.
//Por eso definimos un objeto inmutable para eso

const cumpleanosInmutable = persona => ({   //Recibe una persona y nos devuelve un objeto de javascript
    ...persona,
    edad: persona.edad++
})

//juan
//{nombre: "Juan", apellido: "Perez", edad: 30}
//cumpleanosInmutable(juan)
//{nombre: "Juan", apellido: "Perez", edad: 30}
//juan
//{nombre: "Juan", apellido: "Perez", edad: 31}