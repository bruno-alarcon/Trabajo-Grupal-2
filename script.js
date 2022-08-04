"use strict";

let btnDatos = document.getElementById("btnDatos");
btnDatos.addEventListener("click", mostrar);


function mostrar(){
    let nombre = "datoNombre";   
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;

    let apellido = "datoApellido";
    let inputApellido = document.getElementById("inputApellido");
    apellido = inputApellido.value;

    let edad = "datoEdad";
    let inputEdad = document.getElementById("inputEdad");
    edad = inputEdad.value;

    
    alert("Bienvenido" + " " + nombre + " " + apellido + " " + edad);
}