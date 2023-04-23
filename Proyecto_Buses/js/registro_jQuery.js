$(document).ready(function(){
    $("#registro_validar").validate({
        rules: {
            nombre:{
                required: true,
                strCheck: true,
                maxlength: 30
            },
            apellido:{
                required: true,
                strCheck: true,
                maxlength: 30
            },
            correo:{
                required: true,
                email: true
            },
            rut:{
                required: true,
                rutFormato: true,
                maxlength: 10,
                minlength: 9
            },
            pass:{
                required: true,
                minlength: 8,
                passFormato: true
            },
            pass_confirm:{
                required: true
            },
        },
        messages: {
            nombre:{
                required: "El nombre es necesario para identificarlo",
                strCheck: "Los caracteres admitidos son  [A-Z] y [a-z] c/s espacios",
                maxlength: "El nombre debe tener 30 caracteres como maximo"
            },
            apellido:{
                required: "El apellido es necesario para identificarlo",
                strCheck: "Los caracteres admitidos  [A-Z] y [a-z] c/s espacios",
                maxlength: "El apellido debe tener 30 caracteres como maximo"
            },
            correo:{
                required: "El correo es obligatorio para enviar informaciones",
                email: "El formato de este correo no es valido"
            },
            rut:{
                required: "El rut es necesario para validar que es usted",
                rutFormato: "El formato de este rut no es valido",
                minlength: "El tamano minimo del rut son 9 caracteres (guion incluido)",
                maxlength: "El tamano maximo del rut son 10 caracteres (guion incluido)"
            },
            pass:{
                required: "Requiere contrasena para proteger su sesion",
                minlength: "La contrasena debe tener minimo 8 caracteres",
                passFormato: "El formato de la contrasena no es correcto"
            },
            pass_confirm:{
                required: "Favor de volver a ingresar la contrasena"
            }
        }
    });
    $.validator.addMethod("strCheck",function(value, element){
        return /^[a-zA-Z ]+$/.test(value);
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