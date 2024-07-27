min = Math.ceil(1);
  max = Math.floor(2);
   

  let VidaInicial = Math.random() * (40 - 1) + 1
let magia = Math.random() * (20 - 0) + 0
let VidaFinal = VidaInicial + curar
let distancia = Math.floor(Math.random() * (max - min + 1) + min);


function curar (VidaInicial, VidaFinal, distancia, magia) {
    if (magia == 0) {
     prompt('Su sanador no tiene magia ')
    } 
    
    
}