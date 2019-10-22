//Cuando hablamos de objetos en javascript nos referimos a prototipos y no tanto de clases
//Cuando hay un error en javascript no se sigue ejecutando el codigo


function Persona(nombre, apellido,altura) {
    //this.nombre atributo del objeto que se esta creando
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20
    this.altura = altura
}


//Decirle al propotipo de persona que exista la funcion saludar
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`)
}


//Arrow funcion aqui asigna esta funcion pero cambien el this dentro de la funcion, apunta al this que apunta afuera (al espacio global a windows)
// dentro de la arrow function, this está haciendo referencia al espacio global, a windows
// Persona.prototype.soyAlto =  ()  => {
//     return this.altura > 1.8 
//  }


 Persona.prototype.soyAlto  = function() {
     return this.altura > 1.8 
 }

var pepito= new Persona('Pepito','Perez',1.50)
var erika= new Persona('Erika','Perez',1.90)
var alberto= new Persona('Alberto','Perez',1.80)
