document.addEventListener("DOMContentLoaded", function () {
  // Formulario de recuperar contraseña
  const recuperarForm = document.querySelector("#recuperarForm");
  const correoInput = document.querySelector("#correo");
  const errorCorreo = document.querySelector("#errorCorreo");

  // Expresión regular para validar correo
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (recuperarForm) {
    recuperarForm.addEventListener("submit", function (e) {
      let esValido = true;
      // Limpiar mensaje anterior
      errorCorreo.textContent = "";
      // Obtener correo
      const valorCorreo = correoInput.value.trim();
      // Validar correo vacío
      if (valorCorreo === "") {
        errorCorreo.textContent = "El campo correo no puede estar vacío.";
        esValido = false;
      }
      // Validar formato del correo
      else if (!regexEmail.test(valorCorreo)) {
        errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        esValido = false;
      }
      // Si hay errores
      if (!esValido) {
        e.preventDefault();
      } else {
        // Prevención de envio de formulario
        e.preventDefault();
        alert(
          "¡Solicitud recibida! Te enviaremos instrucciones para recuperar tu contraseña.",
        );
        // retorno a index
        window.location.href = "ingresar.html";
      }
    });
  }
});
