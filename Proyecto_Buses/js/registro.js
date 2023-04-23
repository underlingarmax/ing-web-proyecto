document.getElementById("validar").addEventListener("submit",function(revisar){


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    //let correo = document.getElementById("correo").value;
    let rut = document.getElementById("rut").value;
    let pass = document.getElementById("pass").value;
    let pass_confirm = document.getElementById("pass_confirm").value;
    const listado = document.getElementById("validar").getElementsByTagName("li");

    var check = true;

    //Validar nombre
    if(validarCadena(nombre)){check = false;}
    
    //Validar apellido
    if(validarCadena(apellido)){check = false;}

    //Validar rut
    if(validarRut(rut)){check = false;}

    //Validar contrasena
    if(validarPassword(pass)){check = false;}

    //Compara ambas contrasenas
    if(pass != pass_confirm){check = false;}

    if(check){listado[12].querySelector("span").innerHTML=("Formulario valida exitosamente...");}
    else{listado[13].querySelector("span").innerHTML=("Algo salio mal...");}

    revisar.preventDefault()
})
