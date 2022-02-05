const divCanvas = document.querySelector(".canvas")
const btnJuego = document.getElementById("btnJuego");

btnJuego.addEventListener("click", function (){
    let canvas = document.getElementById("canvas");
    let palabra = obtenerPalabra(palabras);
    let intentos =1;
    let aciertos = palabraDeComparacion(palabra);
    repetirLineas(palabra);
    canvas.classList.toggle("ocultar");
    window.addEventListener("keydown", function(e){
        let letra = e.key
        console.log(letra);
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
            if(aciertos.join("") == palabra){
                ganastes();  
            }
        } 
           
    })
    
    if(btnJuego.textContent==="Comenzar Juego"){
    btnJuego.textContent ="terminar Juego";
    
    } else{
        location.reload();
        
    }    
})


    
    


