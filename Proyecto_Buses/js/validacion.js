//Validar el nombre y apellido
function validarCadena(cadena){
    const pattern = new RegExp("^[a-zA-Z ]+$");

    if(!pattern.test(cadena)){return 1;}
    if(cadena.length > 30){return 2;}
        
    return 0;
}

//Validar el rut
function validarRut(rut){
    const pattern_formato = new RegExp("^[0-9]+-{1}[0-9kK]{1}$");
    if(!pattern_formato.test(rut)){return 1;}

    if(rut.length < 9 || rut.length > 10){return 2;}
  
    var arr_Rut = rut.split("-");
    var verificador = arr_Rut[1];
    if(verificador == 'K'){verificador == 'k';}     

    return 0;
}

//Validar la contrasena
function validarPassword(pass){
    if(pass.length < 8){return 1;}

    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    if(!pattern.test(pass)){return 2;}

    if(pass.search(" ") > 0){return 2;}

    return 0;
}