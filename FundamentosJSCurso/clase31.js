const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/"

const luckURL = `${API_URL}${PEOPLE_URL.replace(":id",1)}`
const options = {crossDomain:true}


const onPeopleResponse = function (luck) {
    console.log(`Hola, yo soy ${luck.name}`)
    if(callback){
        callback()
    }
}

//
function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL}${id}`
    $.get(url,options,function (luck) {
        console.log(`Hola, yo soy ${luck.name}`)
        if(callback){
            callback()
        }
    })
}


//Personajes en orden (CallbackHell)
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
      obtenerPersonaje(3, function () {
        obtenerPersonaje(4, function () {
          obtenerPersonaje(5, function () {
            obtenerPersonaje(6, function () {
              obtenerPersonaje(7)
            })
          })
        })
      })
    })
  })
