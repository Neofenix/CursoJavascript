var Juancito = {
    nombre: 'Juancito',
    apellido: 'Pedriño',
    edad: 16,
    peso: 70
}

console.log(`Al inicio del año ${Juancito.nombre} pesa ${Juancito.peso}`)

const COEFICIENTE_PESO = 0.2
const DIAS_DEL_AÑO = 365

function aumentarDePeso( persona){
    return{
        ...persona,
        peso : persona.peso += COEFICIENTE_PESO
    }
}

//const adelgazar = ({peso}) => peso -= COEFICIENTE_PESO;
const adelgazar = persona => persona.peso -= COEFICIENTE_PESO;

for(var i = 1;i <=DIAS_DEL_AÑO; i++){
    var random = Math.random()

    if(random < 0.25){
        aumentarDePeso(Juancito)
    }else if (random < 0.5){
        adelgazar(Juancito)
    }

}

console.log(`Al Final del año ${Juancito.nombre} pesa ${Juancito.peso.toFixed(2)}`)
