document.getElementById("form").addEventListener("submit",function(revisar){


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let rut = document.getElementById("rut").value;
    let pass = document.getElementById("pass").value;
    let pass_confirm = document.getElementById("pass_confirm").value;
    const listado = document.getElementById("form").getElementsByTagName("li");

    var opcion = 0;
    var check = true;

    //Limpiar los spans
    for(var i = 2; i <= 17; i += 3)
    {
        listado[i].querySelector("span").innerHTML=("");
    }

    //Validar nombre
    opcion = validarCadena(nombre);
    if(opcion != 0)
    {   
        check = false;
        switch(opcion){
            case 1: listado[2].querySelector("span").innerHTML=("El nombre " + nombre + "solo debe contener letras c/s espacios"); break;
            case 2: listado[2].querySelector("span").innerHTML=("El nombre no admite mas de 30 letras, incluye espacios"); break;
        }
    }

    //Validar apellido
    opcion = validarCadena(apellido);
    if(opcion != 0)
    {
        check = false;
        switch(opcion){
            case 1: listado[5].querySelector("span").innerHTML=("El apellido " + apellido + "solo debe contener letras c/s espacios"); break;
            case 2: listado[5].querySelector("span").innerHTML=("El apellido no admite mas de 30 letras, incluye espacios"); break;
        }
    }

    //Validar rut
    opcion = validarRut(rut);
    if(opcion != 0)
    {
        check = false;
        switch(opcion){
            case 1: listado[11].querySelector("span").innerHTML=("El formato del rut es invalido"); break;
            case 2: listado[11].querySelector("span").innerHTML=("El tamano del rut debe ser entre 9 y 10 caracteres con guion"); break;
        }
    }

    //Validar contrasena
    opcion = validarPassword(pass);
    if(opcion != 0)
    {
        check = false;
        switch(opcion){
            case 1: listado[14].querySelector("span").innerHTML=("La contrasena debe tener minimo 8 caracteres"); break;
            case 2: listado[14].querySelector("span").innerHTML=("La contrasena solo debe contener numeros, letras mayusculas y minusculas"); break;
        }
    }

    if(pass != pass_confirm)
    {
        check = false;
        listado[17].querySelector("span").innerHTML=("Ambas contrasenas no coinciden...");
    }

    if(check){listado[18].querySelector("span").innerHTML=("Formulario valida exitosamente...");}

    revisar.preventDefault();
})