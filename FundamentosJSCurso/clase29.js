const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

const luckURL = `${API_URL}${PEOPLE_URL.replace(":id",1)}`
const options = {crossDomain:true}


const onPeopleResponse = function (luck) {
    console.log(`Hola yo soy ${luck.name}`)
}
// $.get(luckURL,options,function (luck) {
//     console.log(`Hola yo soy ${luck.name}`)
// })

//get con callback => funcion que se va a ejecutar en el futuro cuando termine el request

$.get(luckURL,options,onPeopleResponse)