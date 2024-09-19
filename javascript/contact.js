

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const mail = document.getElementById("mail");
const mensaje = document.getElementById("mensaje");
const boton = document.querySelector(".form__button")
const mensajeDevuelto = document.querySelector(".lugarError")
const crearTexto = document.createElement("P")



boton.addEventListener("click" , (e)=>{
e.preventDefault()
let error = validarCampos();

datosError(error)

});

const datosError = (error)=>{
    if(error[0]){
        mensajeDevuelto.appendChild(crearTexto)
        crearTexto.innerHTML = error[1]
        crearTexto.classList.add("error")
        crearTexto.classList.remove("valido")
    } else {
        mensajeDevuelto.appendChild(crearTexto)
        crearTexto.innerHTML = `¡Los datos se han enviado correctamente!`
        crearTexto.classList.add("valido")
        crearTexto.classList.remove("error")
    }
}



const validarCampos = ()=>{
    let error = [];

    if ((nombre.value.length < 3) || (nombre.value.length > 25)){
        error[0] = true;
        error[1] = `El nombre no es valido. Debe contener entre 3 y 25 caracteres. `;
        return error;
    } else if (isNaN(telefono.value) || telefono.value.length < 8){
        error[0] = true;
        error[1] = `El numero no es valido. Debe contener mas de 8 numeros.`;
        return error;
    } else if (mail.value.indexOf("@") === -1 || mail.value.indexOf(".") === -1) {
        error[0] = true;
        error[1] = `El correo electrónico no es válido.`;
        return error;    
    } else if (mensaje.value.length < 15){
        error[0] = true;
        error[1] = `El mensaje no es valido. Debe contener minimo 15 caracteres`;
        return error;
    }

    error[0] = false
    return error
};

