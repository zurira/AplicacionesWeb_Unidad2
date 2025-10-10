let btnVerificar = document.getElementById("verificar");
btnVerificar.addEventListener("click", verificarDatos);
function verificarDatos(){
    let correo = document.getElementById("correo").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();
    let mostrarMensaje = document.getElementById("mostrarMensaje");
    if(correo=="" && contrasena==""){
        mostrarMensaje.innerHTML="<p>Ingrese correo y contraseña</p>"
    } else if(correo==""){
        mostrarMensaje.innerHTML="<p>Ingrese correo</p>";
    }else if(contrasena==""){
        mostrarMensaje.innerHTML="<p>Ingrese contraseña</p>";
    }else {
        mostrarMensaje.innerHTML="<p>Login exitoso</p>"
    }
}