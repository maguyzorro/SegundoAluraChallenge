var palabras =["perro","gato","vaca","caracol","escalera","alcoba","puerta","vaso","vela"];
var palabraAdivinar = obtenerPalabra(palabras);
function obtenerPalabra(listaPalabras){
    let palabra = listaPalabras[(Math.random()*(listaPalabras.length -1)).toFixed(0)];
    return palabra;
}

//dibujar lineas en el canvas
//xInicial 300
function dibujarLineas(xInicial,xFinal){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle = "black";
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(xInicial,590);
    pincel.lineTo(xFinal,590);
    pincel.stroke();
}

function repetirLineas(tamanhoPalabra){
        let xInicial = 450;
        let xFinal = 480;
    for(let i =1; i <=tamanhoPalabra.length;i++){
            dibujarLineas(xInicial,xFinal);
            xInicial = xInicial+50;
            xFinal = xFinal+50;
    }
}
//primera letra en X 451
function escribirLetraAcertada(x,l){
        let canvas = document.getElementById("canvas");
        let pincel = canvas.getContext("2d");
        pincel.font='bold 39px arial';
        pincel.textAlign='start';
        pincel.fillText(l,x,580); 
}
function obtenerXdeLaLetraAcertada(num){
    let valorAumentado = 50;
    let coordenadaX = 451+(num*valorAumentado);
    return coordenadaX
}

function escribirLetraErrada(x,l){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.font='bold 39px arial';
    pincel.textAlign='start';
    pincel.fillText(l,x,450); 
}
function obtenerXdeLetraErrada(num){
    let valorAumentado = 50;
    let coordenadaX = 500+(num*valorAumentado);
    return coordenadaX
}
function ganastes(){
    let divGanastes = document.getElementById("ganastes").className ="div__finJuego";
    let btnGanastes = document.getElementById("btnGanastes");
    btnGanastes.addEventListener("click", function(){
        location.reload();
    })
}
function terminarJuego(){
    let divFinalizar = document.getElementById("finalizar").className ="div__finJuego";
    let btnPerdiste = document.getElementById("btnPerdistes");
    btnPerdiste.addEventListener("click", function(){
        location.reload();
    })
}
function palabraDeComparacion(palabraAdivinar){
    let palabraMostrar=[];
    for (let i = 1; i <= palabraAdivinar.length; i++) {
      palabraMostrar.push("_"); 
    }
    return palabraMostrar
}





