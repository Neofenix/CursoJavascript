var contador = 0


// A diferencia de la instrucción while, 
//un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

const llueve = () => Math.random() < 0.25


//Las instrucciones se ejecuta al menos una vez antes de que se evalúe la expresión condicional.
// Lo que lo diferencia con el while es que en la estructura 
//do-while la condición se evalúa al finalizar el ciclo, esto hace que las instrucciones se ejecuten cuando menos una vez.

do{ 
    contador ++
console.log(contador)
}while(!llueve())

//operador ternario ?
console.log(`Fuí a ver si llovía ${contador}${(contador > 1) ? ' Veces' : ' Vez' }`);