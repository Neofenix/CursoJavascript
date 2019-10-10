var x = 4, y = '4'


//Para poder compararlos debemos agregar dos signos de igual (==). Los convierte al mismo tipo de valor y permite que se puedan comparar.

//x == y => true

//Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Hace una comparacion del tipo de dato y su valor ( no los convierte al mismo tipo de dato)

//x === y => false



//Comparacion de objetos => Preguntar por la referencia a la variable que estamos utilizando 
//Juancito == otraPersona y Juancito === otraPersona da false
var Juancito = {
    nombre: 'Juancito'
}

var otraPersona = {
    nombre: 'Juancito'
}


//Para que de true, otraPersona apunta a la misma referencia de Juancito, al mismo espacio de memoria
//Si modifico el nombre de otraPersona (otraPersona.nombre= 'Pepe') se modifica el de Juancito
var otraPersona = Juancito

//Estoy creando un nuevo objeto, por lo consiguiento otra referencia y la comparacion da false
// var otraPersona = {
//     ...Juancito
// }

