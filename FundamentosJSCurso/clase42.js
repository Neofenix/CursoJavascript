//Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, 
//y conserva este estado a través de reiteradas ejecuciones. 
//Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.


function crearSaludo(finalDeFrase){   //Primera funcion es creador o generadora de otras funciones
    return function(nombre){          //Funcion anonima
        console.log(`Hola ${nombre} ${finalDeFrase}`) //Esta funcion recuerda la variable finalDeFrase
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('amigo');

saludoArgentino('Pepito') //hOLA Pepito che
saludoMexicano('Olga'); //Hola olga wey
saludoColombiano('Juan');  //Hola Juan amigo


//const saludar = finalDeFrase => nombre => console.log(`Hola ${nombre} de ${pais}`);
//const saludarMexicanos = saludar("México"); // nombre => console.log(...)
//saludarMexicanos("Luis");  // Hola Luis de México


//saludar("Argentina")("Sacha");  // Hola Sacha de Argentina
//saludar("México")("Ángel");