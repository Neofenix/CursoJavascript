var nombre = 'Sacha', apellido = 'Lifszyc'

//Mayusculas y minusculas
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

//Primera letra y longitud de un string
var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar dos strings por interpolacion de texto 
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`


//Acceder a un string dentro de otro string

var str = nombre.substr(1, 2)

var strtwo =  nombre.charAt(1) + nombre.charAt(2)


var nombreUsuario = "Juan"

var ultimaletra = nombreUsuario.substr(nombreUsuario.length-1)