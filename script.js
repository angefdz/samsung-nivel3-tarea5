function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  
  if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "") {
    alert("No se pueden dejar campos vacíos.");
    return false;
  }
  
  if (/^([0-9])*$/.test(nombre) || /^([0-9])*$/.test(apellido)) {
    alert("No se permiten caracteres numéricos en el nombre o el apellido");
    return false;
  }
  
  var valido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!valido.test(email)) {
    alert("El correo electrónico introducido no es válido");
    return false;
  }
  
  return true;
}
