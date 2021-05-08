var colectivos = []
CargarColectivos(colectivos)
RevisarColectivos(colectivos)

function CargarColectivos(colectivos) {
    //Cargamos la cantidad de colectivos a revisar
    do{
        var cantidad = parseFloat(prompt('Ingrese la cantidad a revisar: '))

        if(cantidad > 0) {
            for(var i=0; i<cantidad; i++){
                colectivos.push(i+1)
            }
            console.log('al cargar colectivos nos quedaron:',colectivos)
            break;
        }
    } while(true)
}

function RevisarColectivos(colectivos){
    //Eliminamos de la lista los colectivos ya revisados
    var limite =colectivos.length
    while(limite > 0){
        var respuesta = prompt('Revisaste el colectivo numero:' + limite)

        if(respuesta === 'si'){
            colectivos.pop()
            limite--;
        }

        console.log('Al revisar colectivos nos quedaron:',colectivos)
    }
}
