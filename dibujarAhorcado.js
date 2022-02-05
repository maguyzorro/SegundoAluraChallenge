var color = "#8B9068";
var color2 ="#2962FF"
function parte1(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle = color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(10,590);
    pincel.lineTo(140,590);
    pincel.stroke();
}

function parte2 (color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(78,585);
    pincel.lineTo(78,100);
    pincel.stroke();
}

function parte3(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(73,100);
    pincel.lineTo(250,100);
    pincel.stroke();
}

function parte4(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =10;
    pincel.beginPath();
    pincel.moveTo(245,100);
    pincel.lineTo(245,160);
    pincel.stroke();
}

function parte5(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.arc(244,190,30,0,7);
    pincel.stroke();
}

function parte6(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,220);
    pincel.lineTo(244,400);
    pincel.stroke();
    ;
}

function parte7(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,395);
    pincel.lineTo(300,460);
    pincel.stroke();
}

function parte8(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,395);
    pincel.lineTo(188,460);
    pincel.stroke();
}

function parte9(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,260);
    pincel.lineTo(320,310);
    pincel.stroke();
}

function parte10(color){
    let canvas = document.getElementById("canvas");
    let pincel = canvas.getContext("2d");
    pincel.strokeStyle= color;
    pincel.lineWidth =5;
    pincel.beginPath();
    pincel.moveTo(244,260);
    pincel.lineTo(168,310);
    pincel.stroke();
}
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