// Elementos del formulario
const formulario = document.getElementById("registroForm");

// Mostrar / ocultar contraseña
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";

    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

// Mostrar / ocultar confirmar contraseña
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {
    confirmPasswordInput.type =
        confirmPasswordInput.type === "password" ? "text" : "password";

    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

// Validación del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar valores
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Limpiar mensajes
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorCedula").textContent = "";
    document.getElementById("errorFechaNacimiento").textContent = "";
    document.getElementById("errorPassword").textContent = "";

    let valido = true;

    // Validaciones
    if (nombre === "") {
        document.getElementById("errorNombre").textContent =
            "Ingresa tu nombre completo.";
        valido = false;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo)) {
        document.getElementById("errorCorreo").textContent =
            "Ingresa un correo válido.";
        valido = false;
    }

    if (telefono === "") {
        document.getElementById("errorTelefono").textContent =
            "Ingresa tu teléfono.";
        valido = false;
    }

    if (cedula === "") {
        document.getElementById("errorCedula").textContent =
            "Ingresa tu cédula.";
        valido = false;
    }

    if (fechaNacimiento === "") {
        document.getElementById("errorFechaNacimiento").textContent =
            "Selecciona tu fecha de nacimiento.";
        valido = false;
    }

    if (password.length < 8) {
        document.getElementById("errorPassword").textContent =
            "La contraseña debe tener al menos 8 caracteres.";
        valido = false;
    } else if (password !== confirmPassword) {
        document.getElementById("errorPassword").textContent =
            "Las contraseñas no coinciden.";
        valido = false;
    }

    // Si todo es correcto
    if (valido) {
        alert("¡Cuenta creada con éxito!");
        window.location.href = "ingresar.html";
    }
});