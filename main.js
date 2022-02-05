const divCanvas = document.querySelector(".canvas")
const btnJuego = document.getElementById("btnJuego");
btnJuego.addEventListener("click", function (){
    let canvas = document.getElementById("canvas");
    let palabra = obtenerPalabra(palabras);
    let intentos =1;
    let aciertos = palabraDeComparacion(palabra);
    let letrasAcertadas=[];
    repetirLineas(palabra);
    canvas.classList.toggle("ocultar");
    console.log(palabra);
    window.addEventListener("keydown", function(e){
        let letra = e.key
        console.log(letra);
        if(aciertos.join("") == palabra){
            ganastes();  
        }else{
            if(!palabra.includes(letra)){
                escribirLetraErrada(obtenerXdeLetraErrada(intentos),letra);
                llamarParte(intentos);
                intentos++; 
            }
            else{
                for(let i =0; i<palabra.length;i++){
                    if(letra ==palabra[i]){
                        escribirLetraAcertada(obtenerXdeLaLetraAcertada(i),letra);
                        aciertos.splice(i,1,letra);
                    }
                    
                }
            } 
        }    
    })
    
    if(btnJuego.textContent==="Comenzar Juego"){
    btnJuego.textContent ="terminar Juego";
    
    } else{
        location.reload();
        
    }    
})


    
    


