document.getElementById("form").addEventListener("submit",function(revisar){


    //let nombre = document.getElementById("nombre").value;
    //let correo = document.getElementById("correo").value;
    let rut = document.getElementById("rut").value;
    let pass = document.getElementById("pass").value;
    //let pass_confirm = document.getElementById("pass_confirm").value;
    const listado = document.getElementById("form").getElementsByTagName("li");

    if(largo_rut(rut))
        listado[8].querySelector("span").innerHTML="El tamano de rut debe ser entre 9 y 10 caracteres"
    else
        listado[8].querySelector("span").innerHTML=""

    if(largo_pass(pass))
        listado[11].querySelector("span").innerHTML="La contrasena debe tener minimo 8 caracteres"
    else
        listado[11].querySelector("span").innerHTML=""

    revisar.preventDefault();
})

function largo_rut(rut){
    if(rut.length < 9 || rut.length > 10)
        return true;

    return false;
}

function largo_pass(pass){
    if(pass.length < 8)
        return true;

    return false
}