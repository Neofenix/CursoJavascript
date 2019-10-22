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

Persona.prototype.soyAlto = function () {
    this.altura > 1.8 ? console.log(`${this.nombre} es alto`): console.log(`${this.nombre} es bajo`)
 }
 

var pepito= new Persona('Pepito','Perez',1.50)
var erika= new Persona('Erika','Perez',1.90)
var alberto= new Persona('Alberto','Perez',1.80)

pepito.soyAlto()
erika.soyAlto()
alberto.soyAlto()