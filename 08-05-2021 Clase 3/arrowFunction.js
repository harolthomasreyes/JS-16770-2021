var futbolista = {
    equipo: 'real madri',
    altura: 3.6,
    peso: 89,
    velocidad: 36,
    decirAlgo: function(){console.log('hola soy un futbolista')},
    decirTuEquipo: function(){console.log('hola soy del: '+ this.equipo)},
    calcularVelocidad: function(disctancia) { return disctancia* this.velocidad },

    hacerAlgoMaravilloso: function() { 
                                    console.log('scope 1')
                                    console.log('equipo:', this.equipo)
                                    //return function(){
                                    return () => {
                                        console.log('scope 2')
                                        console.log('equipo:', this.equipo)
                                        
                                    }
                                }
}
 
futbolista.hacerAlgoMaravilloso()()
 