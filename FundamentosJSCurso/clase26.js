//Cuando hablamos de objetos en javascript nos referimos a prototipos y no tanto de clases
//Cuando hay un error en javascript no se sigue ejecutando el codigo

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }

    saludar(fn){
        var {nombre, apellido} = this

        //Equivalente
        // var nombre = this.nombre
        // var apellido = this.apellido

        console.log(`Hola me llamo ${nombre} ${apellido}`)
        //undefined en un if es falso
        if(fn){
            fn(this.nombre,this.apellido)

        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
       }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre,this.apellido,true)

        }
    }
}

//Funciones como parametro
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras desarrollador`)

    }
}

var juan = new Persona('Juan','Z',1.72)
var pedro = new Persona('Pedro','P',1.74)
var pepe = new Desarrollador('Pepe','P',1.75)

juan.saludar()
pedro.saludar(responderSaludo)
pepe.saludar(responderSaludo)