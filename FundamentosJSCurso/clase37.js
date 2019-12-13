//““var”” es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, 
//ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, 
//e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

//Con ““let”” por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. 
//Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

//““const”” al igual que ““let”” se define en el contexto o alcance de un bloque, 
//a diferencia de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

//La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.

var sacha = {
    nombre: "Sacha",
    apellido: "Perez",
    edad: 28
}

function esMayorDeEdad(persona){
    let mensaje;
    const MAYORIA_DE_EDAD = 18 //No se puede reasignar la variable. Si es un array podemos modificarlo con push pero no reasignarlo
    if(persona.edad > MAYORIA_DE_EDAD){
        mensaje = "Es mayor de edad" //Si utlizamos let, su alcance se va a reducir al bloque donde esta en este caso el if. Si el console lo quiere utilizar, lo tiene que declarar antes
    }else{
        mensaje = "Es menor de edad"
    }
    console.log(mensaje)
}

esMayorDeEdad(sacha)

for(let i=0; i< 10; i++){  //Si la defino con let el console.log va a sacar error (i is not defined)
    console.log(i)
}

console.log(`Termino el for, el valor de i es ${i}`)