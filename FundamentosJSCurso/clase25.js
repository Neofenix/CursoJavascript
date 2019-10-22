//Cuando hablamos de objetos en javascript nos referimos a prototipos y no tanto de clases
//Cuando hay un error en javascript no se sigue ejecutando el codigo


//Decir al prototipoHijo quien va a ser el prototipoPadre
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido,altura) {
    //this.nombre atributo del objeto que se esta creando
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

 //Los objetos en JavaScript son “contenedores” dinámicos de propiedades. 
 //Estos objetos poseen un enlace a un objeto prototipo. 
 //Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

 function Desarrollador(nombre, apellido){
     this.nombre = nombre
     this.apellido = apellido
 }

 heredaDe(Desarrollador, Persona)

 Desarrollador.prototype.saludar = function (){
     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
 }


//Si ejecutamos arturo.soyAlto() que es desarrollador entonces si no lo tiene el prototype se va a ir a buscar a los prototipos padres


// var pepito= new Persona('Pepito','Perez',1.50)
// var erika= new Persona('Erika','Perez',1.90)
// var alberto= new Persona('Alberto','Perez',1.80)
