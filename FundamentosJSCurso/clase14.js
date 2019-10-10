var Juancito = {
    nombre: 'Juancito',
    apellido: 'Pedriño',
    edad: 16,
    peso: 70
}

const COEFICIENTE_PESO = 0.2
const DIAS_DEL_AÑO = 365

console.log(`Al inicio del año ${Juancito.nombre} pesa ${Juancito.peso}`)

function aumentarDePeso( persona){
    return{
        ...persona,
        peso : persona.peso += COEFICIENTE_PESO
    }
}
//const adelgazar = ({peso}) => peso -= COEFICIENTE_PESO;
const adelgazar = persona => persona.peso -= COEFICIENTE_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = Juancito.peso -3
var dias = 0

while(Juancito.peso > META){
    if(comeMucho()){
        aumentarDePeso(Juancito)
    }
    if (realizaDeporte()) {
        adelgazar(Juancito)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${Juancito.nombre} adelgazo 3kg`)
