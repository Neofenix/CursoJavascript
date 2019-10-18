var signo = prompt('¿Cual es tu signo?')


//Poner break para que no siga preguntando por los demas casos
switch(signo){
    case 'acuario':
        console.log('Usted es acuario')
        break
    case 'piscis':
        console.log('Usted es piscis')
        break
    case 'virgo':
        console.log('Usted es virgo')
        break
    case 'geminis':
    case 'géminis':
        console.log('Usted es geminis')
        break
    default:
        console.log('No un simbolo zodiacal valido')
        break
}



if(signo === 'acuario'){
    console.log('Usted es acuario')
}