//Validar el nombre y apellido
function validarCadena(cadena){
    const pattern = new RegExp("^[a-zA-Z ]+$");

    if(!pattern.test(cadena)){return true;}
    if(cadena.length > 30){return true;}
        
    return false;
}

//Validar el rut
function validarRut(rut){
    const pattern_formato = new RegExp("^[0-9]+-{1}[0-9kK]{1}$");
    if(!pattern_formato.test(rut)){return true;}

    if(rut.length < 9 || rut.length > 10){return true;}
  
    var arr_Rut = rut.split("-");
    var verificador = arr_Rut[1];
    if(verificador == 'K'){verificador == 'k';}     

    return false;
}

//Validar la contrasena
function validarPassword(pass){
    if(pass.length < 8){return true;}

    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    if(!pattern.test(pass)){return true;}

    if(pass.search(" ") > 0){return true;}

    return false;
}