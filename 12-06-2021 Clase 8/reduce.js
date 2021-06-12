var gastosUsuarios = [{
    usuario:1,
    vuelo : 200,
    administracion: 20,
    primeraClase: 0,
    asientoVentana: 15
},{
    usuario:2,
    vuelo : 200,
    administracion: 20,
    primeraClase: 0,
    asientoVentana: 15
}] 


var total = gastosUsuarios.reduce((usuario, usuarioSiguiente) => usuario.vuelo + usuarioSiguiente.vuelo)
/******************************************************************************************************************/
var acumulador = 0
for(let =0;i< gastosUsuarios.length; i++){
    acumulador += gastosUsuarios[i].vuelo
}
console.log(acumulador)
/******************************************************************************************************************/
var acumulador = 0
gastosUsuarios.forEach(usuario => acumulador += usuario.vuelo)
console.log('acumulador:',acumulador)