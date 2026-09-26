document.addEventListener('DOMContentLoaded', function () {
    
    // Ver y ocultar contraseña
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            this.classList.toggle('bi-eye');
            this.classList.toggle('bi-eye-slash');
        });
    }

    //Validación del Formulario
    const loginForm = document.querySelector('#loginForm');
    const correoInput = document.querySelector('#correo');
    const errorCorreo = document.querySelector('#errorCorreo');
    const errorPassword = document.querySelector('#errorPassword');

    // Expresión regular para validar formato de correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            let esValido = true;

            // Limpiar mensajes de error previos
            errorCorreo.textContent = '';
            errorPassword.textContent = '';

            // Validar Campo Correo
            const valorCorreo = correoInput.value.trim();
            if (valorCorreo === '') {
                errorCorreo.textContent = 'El campo correo no puede estar vacío.';
                esValido = false;
            } else if (!regexEmail.test(valorCorreo)) {
                errorCorreo.textContent = 'Ingresa un correo electrónico válido.';
                esValido = false;
            }

            // Validar Campo Contraseña
            const valorPassword = passwordInput.value.trim();
            if (valorPassword === '') {
                errorPassword.textContent = 'El campo contraseña no puede estar vacío.';
                esValido = false;
            }

            // Prevenir envio de formulario
            if (!esValido) {
                e.preventDefault();
            }
            else { // Si todo está correcto 
            e.preventDefault(); 
            alert('¡Pronto!');  
            window.location.href = 'error-inicio.html'; // redirección a la página de inicio
            }

        });
    }
});