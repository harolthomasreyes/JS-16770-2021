//Version anterior del if
var cond;

if (1 === "1") cond = true;
else cond = false;

// If ternario
//Si se cumple la cond entonces retornamos un true si no un false
//Siempre manejamos el mismo tipo de dato al retornar
//var cond = ( 1 === '1') ? true : 1 => esto no es factible
var cond = 1 === "1" ? true : false;
