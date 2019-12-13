const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opst = {crossDomain: true}

//Promesas: Valores que no conocemos. Estados: 
//Pending: Cuando creamos una promesa. 
//Fulfilled: Se resuelve exitosamente => Para obtener el valor se pasa el 
//.then(funcion como parametro donde el primer parametro es el valor que esperabamos). 
//Rejected: Si sucede algun error => .catch(funcion como parametro donde obtenemos el error)
//Despues de llegar al estado de Fullfied podemos retornar otra promesa dentro del .then e ir encadenadolas en sucesivas acciones ASINCRONAS
//y cada una de ellas puede ser resuelta o rechazada 

function obtenerUnaPersona (id){
    return new  Promise(((resolve,  reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        //La funcion resolve no se va a llamar hasta que el get sea exitoso
        $
        .get(url, opst, function(data){
            resolve(data)
        }).fail(()=>reject(id))
        }))
    }

    function  onError(id){
        console.log(`Sucedio un error al obtener el personaje ${id}`)
    }

    //Funcion que se pasa y se ejecuta en el then cuando la promesa se resuelva
    //coloco return en el primer then y despues encadeno con otro then para ejecutar la funcion cuando se resulva la promesa
    // y asi sucesivamente
    obtenerUnaPersona(1)
    .then(personaje1=>{
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obtenerUnaPersona(2)
    })
    .then(personaje2  =>{
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerUnaPersona(3)
    })
    .then(personaje3  =>{
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerUnaPersona(4)
    })
    .then(personaje4  =>{
        console.log(`El personaje 4 es ${personaje4.name}`)
    })
    .catch(onError)