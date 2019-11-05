const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/"

const luckURL = `${API_URL}${PEOPLE_URL.replace(":id",1)}`
const options = {crossDomain:true}


const onPeopleResponse = function (luck) {
    console.log(`Hola, yo soy ${luck.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL}${id}`
    $.get(url,options,onPeopleResponse)
}


//No sabemos en que orden nos van a llegar las respuestas (Asincronismo).Depende del servidor y cuanto van a tardar los request
for(var i=1;i<10;i++){
obtenerPersonaje(i)
}
