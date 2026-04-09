document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // Validación básica del formulario
        if (!email.value || !password.value) {
            alert('Por favor, ingrese su correo y contraseña.');
        } else {
            alert('¡Inicio de sesión exitoso!');
            email.value = '';
            password.value = '';
        }
    });
});