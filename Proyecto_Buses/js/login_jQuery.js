$(document).ready(function(){
    $("#login_validar").validate({
        rules:{
            rut:{
                required: true,
                rutFormato: true,
                maxlength: 10,
                minlength: 9
            },
            contrasena:{
                required: true,
                passFormato: true
            }
        },
        messages:{
            rut:{
                required: "Favor de ingresar su rut",
                rutFormato: "Este formato no es valido",
                maxlength: "El tamano maximo del rut son 10 caracteres (guion incluido)",
                minlength: "El tamano minimo del rut son 9 caracteres (guion incluido)"
            },
            contrasena:{
                required: "Favor de ingresar su contrasena",
                passFormato: "Esta contrasena no cumple con los requisitos\n(Caracteres obligatorios [A-Z], [a-z] y [0-9], y minimo 8 caracteres)"
            }
        }
    });
    $.validator.addMethod("rutFormato", function(value, element){
        return /^[0-9]+-{1}[0-9kK]{1}$/.test(value);
    });
    $.validator.addMethod("passFormato", function(value, element){
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)){return false;}
        if(value.search(" ") > 0){return false;}
        return true;
    });
});