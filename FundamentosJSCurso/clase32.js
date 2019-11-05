const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opst = {crossDomain: true}


function obtenerUnaPersona (id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //fail se ejecuta si ocurre algun error en get
    $
    .get(url, opst, callback)
    .fail(
        ()=>{
        console.log(`sucedio un error. no se pudo obtener el personaje ${id}`)
    } )
}

obtenerUnaPersona(1, (person)=>{
    console.log(`Hola, soy ${person.name}`)

    obtenerUnaPersona(2, function (person){
    console.log(`Hola, soy ${person.name}`)

        obtenerUnaPersona(3, function(person){
        console.log(`Hola, soy ${person.name}`)

            obtenerUnaPersona(4, function(person){
             console.log(`Hola, soy ${person.name}`)

                obtenerUnaPersona(5, function(person){
                console.log(`Hola, soy ${person.name}`)

                    obtenerUnaPersona(6, function(person){
                    console.log(`Hola, soy ${person.name}`)

                        obtenerUnaPersona(7, function(person){
                        console.log(`Hola, soy ${person.name}`)

                        })
                    })
                })
            })
        })

    })
})
