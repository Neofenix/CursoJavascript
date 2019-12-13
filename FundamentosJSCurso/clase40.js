//!6 = 6*5*4*3*2*1 = 720 factorial
//!12 = 12*11*10*9*8*7*9*5*4*3*2*1 Si calculamos el factorial de 12 tambien estamos canculando el factorial de 6


function factorial(n){
    if(!this.cache){
        this.cache = {}
    }
    
    debugger
    if(this.cache[n]){
        return this.cache[n]
    }

    if (n===1){
        return 1
    }
    this.cache[n] = n * factorial(n-1) //Ej: 6 * factorial(5) // 6* 5 * factorial(4)
    debugger
    return this.cache[n]
}