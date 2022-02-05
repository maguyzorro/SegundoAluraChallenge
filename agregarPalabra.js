let palabraAgregar = document.getElementById("agregarPalabra");
let btnAgregarPalabra = document.getElementById("btnAgregarPalabra");

btnAgregarPalabra.addEventListener("click",()=>{
    anhadirPalabra(palabraAgregar.value);
});


function anhadirPalabra (palabra){
    palabras.push(palabra);
}