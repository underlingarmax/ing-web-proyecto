document.getElementById("login_validar").addEventListener("submit",function(revisar){

    let rut = document.getElementById("rut").value;
    let contrasena = document.getElementById("contrasena").value;
    const listado = document.getElementById("login_validar").getElementsByTagName("li");

    var check = true;

    //Validar rut
    if(validarRut(rut)){check = false;}

    //Validar contrasena
    if(validarPassword(contrasena)){check = false;}

    if(check){listado[4].querySelector("span").innerHTML=("Formulario valida exitosamente...");}
    revisar.preventDefault()
})