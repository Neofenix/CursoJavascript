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



///Sea solo para una promesa o para un array de promesas, el async-await se utiliza, si entendí bien, así:
//await para la variable en donde queremos que la data (en el caso de que la promesa sea fullfilled) se guarde, en nuestro caso es los objetos personaje 
//que queremos obtener de manera asíncrona, 
//y la palabra async se utiliza el la nomenclatura de la función 
//que va a ejecutar la tarea asíncrona, en este caso obtenerPersonajes.

async function obtenerPersonajes(){   //Para utilziar away debemos marcar la funcion async
    var ids= [1, 2, 3, 4, 5, 6, 7]
    var  promesas = ids.map(id=>obtenerUnaPersona(id))
    try{
        var personajes = await Promise.all(promesas)   //await -> detener la ejecucion de nuestro codigo hasta que todas las promesas sean resultas y despues si se va a almancenar en la variable 
        console.log(personajes)
    }catch(id){
        onError(id)

    }
} 


obtenerPersonajes()
