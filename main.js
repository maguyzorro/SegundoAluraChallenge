//Variables===========================================================
const divCanvas = document.querySelector(".canvas")
const btnJuego = document.getElementById("btnJuego");
const canvas = document.getElementById("canvas");
const pincel = canvas.getContext("2d");
const palabraAgregar = document.getElementById("agregarPalabra");
const btnAgregarPalabra = document.getElementById("btnAgregarPalabra");
const btnGanastes = document.getElementById("btnGanastes");
const divGanastes = document.getElementById("ganastes");
const divFinalizar = document.getElementById("finalizar");
const btnPerdiste = document.getElementById("btnPerdistes");
var palabras =["perro","gato","vaca","caracol","escalera","alcoba","puerta","vaso","vela"];
var intentos =1;
var letra="";
//var palabraAdivinar = obtenerPalabra(palabras);
var color = "#8B9068";
var color2 ="#2962FF";
//=====================================================================>

//Estructura Principal=================================================
btnJuego.addEventListener("click", function (){
    let palabra = obtenerPalabra(palabras);
    let aciertos = palabraDeComparacion(palabra);
    repetirLineas(palabra);
    canvas.classList.toggle("ocultar");
    window.addEventListener("keydown", function(e){
        letra = e.key
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
//Agregar palabra nueva al arreglo=====================================
btnAgregarPalabra.addEventListener("click",()=>{
    anhadirPalabra(palabraAgregar.value);
    palabraAgregar.value="";
//====================================================================>
});
//=============================================================================> 

//Funciones====================================================================
//Dubujar ahorcado=============================================================
function parte1(color){
    pincel.strokeStyle = color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(10,590);
    pincel.lineTo(140,590);
    pincel.stroke();
}
function parte2 (color){
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(78,585);
    pincel.lineTo(78,100);
    pincel.stroke();
}
function parte3(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(73,100);
    pincel.lineTo(250,100);
    pincel.stroke();
}
function parte4(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(245,100);
    pincel.lineTo(245,160);
    pincel.stroke();
}
function parte5(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.arc(244,190,30,0,7);
    pincel.stroke();
}
function parte6(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,220);
    pincel.lineTo(244,400);
    pincel.stroke();
}
function parte7(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,395);
    pincel.lineTo(300,460);
    pincel.stroke();
}
function parte8(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,395);
    pincel.lineTo(188,460);
    pincel.stroke();
}
function parte9(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,260);
    pincel.lineTo(320,310);
    pincel.stroke();
}
function parte10(color){
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,260);
    pincel.lineTo(168,310);
    pincel.stroke();
}
//===============================================================>
//Llamar a las partes del ahorcado===============================
function llamarParte (x){
    switch(x){
       case 1: parte1(color);
               break;
       case 2: parte2(color);
               break;   
       case 3: parte3(color);
               break;
       case 4: parte4(color);
               break;
       case 5: parte5(color);
               break;
       case 6: parte6(color);
               break;
       case 7: parte7(color);
               break;
       case 8: parte8(color);
               break;
       case 9: parte9(color);
               break;
       case 10: parte10(color);
                terminarJuego();
                break;
    }
} 
//===================================================================>
//Generar palabra aleatoria==========================================    
function obtenerPalabra(listaPalabras){
    let palabra = listaPalabras[(Math.random()*(listaPalabras.length -1)).toFixed(0)];
    return palabra;
}    
//====================================================================>
//Dibujar la linea que va a representar cada letra=====================
function dibujarLineas(xInicial,xFinal){
    pincel.strokeStyle = "black";
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(xInicial,590);
    pincel.lineTo(xFinal,590);
    pincel.stroke();
}
//====================================================================>
//Repetir las lineas la cantidad de veces que se necesite==============
function repetirLineas(tamanhoPalabra){
    let xInicial = 450;
    let xFinal = 480;
    for(let i =1; i <=tamanhoPalabra.length;i++){
        dibujarLineas(xInicial,xFinal);
        xInicial = xInicial+50;
        xFinal = xFinal+50;
    }
}
//====================================================================>
//Funcion para pintar la letra acertada en el canvas===================
function escribirLetraAcertada(x,l){
    pincel.font='bold 39px arial';
    pincel.textAlign='start';
    pincel.fillText(l,x,580); 
}
//====================================================================>
//Funcion para obtener la posicion en la que se debe pinar la letra 
//acertada============================================================
function obtenerXdeLaLetraAcertada(num){
    let valorAumentado = 50;
    let coordenadaX = 451+(num*valorAumentado);
    return coordenadaX
}
//====================================================================>
//Funcion para pintar la letra errada en el canvas=====================
function escribirLetraErrada(x,l){
    pincel.font='bold 39px arial';
    pincel.textAlign='start';
    pincel.fillText(l,x,450); 
}
//====================================================================>
//Funcion para obtener la posicion en la que se debe pintar la letra 
//errada===============================================================
function obtenerXdeLetraErrada(num){
    let valorAumentado = 50;
    let coordenadaX = 500+(num*valorAumentado);
    return coordenadaX
}
//====================================================================>
//Funcion ganaste el juego=============================================
function ganastes(){
    divGanastes.className ="div__finJuego";
    btnGanastes.addEventListener("click", function(){
    location.reload();
    })
}
//====================================================================>
//Funcion perdiste el juego============================================
function terminarJuego(){
    divFinalizar.className ="div__finJuego";
    btnPerdiste.addEventListener("click", function(){
        location.reload();
    })
}
//====================================================================>
//Funcion auxiliar para detectar cuando se a complitado la plabra======
function palabraDeComparacion(palabraAdivinar){
    let palabraMostrar=[];
    for (let i = 1; i <= palabraAdivinar.length; i++) {
        palabraMostrar.push("_"); 
    }
    return palabraMostrar
}
//Fincion para agregar nuevas palabras al arreglo======================
function anhadirPalabra (palabra){
    palabras.push(palabra);
}
//Fin=================================================================>