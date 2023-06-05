document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm(){
    let nombre = document.querySelector('input[name="nombre"]').value;
    let apellido = document.querySelector('input[name="apellido"]').value;
    let email = document.querySelector('input[name="email"]').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
      alert('No puedes dejar campos vacíos');
    } else {
        alert('Te has suscrito correctamente');
        document.querySelector('form').reset();
    }
  }
  
  