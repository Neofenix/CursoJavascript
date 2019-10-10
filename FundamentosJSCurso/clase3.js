var edad = 31;

// edad = edad +1
edad+= 1

var peso = 75;

//peso = peso - 2
peso-=2


var sandwich = 1

//peso = peso +sandwich
peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

//Destina cierta cantidad de bits y no es tan preciso
var total = precioDeVino * 3

var total = Math.round(precioDeVino * 100 * 3) / 100

//Cuantos decimales queremos despues de la coma
var totalString  = total.toFixed(2)
var totalParse = parseFloat(totalString)

var pizza = 8
var personas = 2

var cantidadDePorcionasPorPersona = pizza/personas