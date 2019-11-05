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

    //Funcion que se pasa al then cuando la promesa se resuelva
    obtenerUnaPersona(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    }).catch(onError)