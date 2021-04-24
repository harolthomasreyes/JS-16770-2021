var IsAlive = true
var acumulador = 0
​
while(IsAlive){
    var numero = prompt('Ingresa tu numero:')
​
    if(numero === 'ESC') IsAlive = false
​
    //acumulador = acumulador + parseFloat(numero)
    acumulador += parseFloat(numero)
​
    console.log(acumulador)
​
}
