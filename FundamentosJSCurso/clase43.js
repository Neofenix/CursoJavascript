//El contexto (o alcance) de una función es por lo general, window. 
//Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, 
//es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

//Existen al menos tres maneras de cambiar el contexto de una función.

// Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
// Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
// Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores


const vanessa = {
    nombre: 'vanessa',
    apellido: 'Perez'
}

const camila = {
    nombre: 'Camila',
    apellido: 'Perez'
}

function saludar(saludo= 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludar = () => console.log(`Hola, mi nombre es ${this.nombrecillo}`) // el arrow function el this siempre hace referencia al ambtio donde fue definida la funcion


//.bind

const saludarAJuan = saludar.bind(vanessa)  //Devuelve una nueva funcion atando el parametro al this de la funcion 
const saludarAPedro = saludar.bind(camila) 

//setTimeout(saludar.bind(vanessa, 'Hola che'), 1000)


//.call

saludar.call(vanessa, 'Hola cucho') //La ejecuta en el momento

//.apply

saludar.apply(vanessa, ['Hola parce']) //El segundo argumento se envia como array