'use strict';

const REGEX = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
};

function evaluarEdad(fechaString) {
    const fechaNac = new Date(fechaString);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad >= 18;
}

function validarCampoReglas(campo) {
    const valor = campo.value.trim();
    const nombre = campo.name;

    if (campo.hasAttribute('required') && !valor && campo.type !== 'checkbox') {
        return 'Este campo es obligatorio';
    }

    if (campo.type === 'checkbox' && campo.hasAttribute('required') && !campo.checked) {
        return 'Debe aceptar los términos';
    }

    if (!valor) return '';

    switch (nombre) {
        case 'nombre':
            if (valor.length < 3) return 'Mínimo 3 caracteres';
            if (!REGEX.nombre.test(valor)) return 'Solo letras y espacios';
            break;
        case 'email':
            if (!REGEX.email.test(valor)) return 'Email inválido';
            break;
        case 'telefono':
            const soloNumeros = valor.replace(/\D/g, '');
            if (soloNumeros.length !== 10) return 'Debe tener exactamente 10 dígitos';
            break;
        case 'fecha_nacimiento':
            if (!evaluarEdad(valor)) return 'Debe ser mayor de 18 años';
            break;
        case 'password':
            if (!REGEX.password.test(valor)) return 'Mínimo 8 caracteres, una mayúscula, una minúscula y un número';
            break;
        case 'confirmar_password':
            const pass = document.querySelector('#password').value;
            if (valor !== pass) return 'Las contraseñas no coinciden';
            break;
    }
    return '';
}

function evaluarFuerzaPassword(password) {
    let fuerza = 0;
    if (password.length >= 8) fuerza++;
    if (password.length >= 12) fuerza++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) fuerza++;
    if (/\d/.test(password)) fuerza++;
    if (/[^a-zA-Z0-9]/.test(password)) fuerza++;

    const niveles = ['', 'Muy débil', 'Débil', 'Media', 'Fuerte', 'Muy fuerte'];
    const colores = ['', '#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'];

    return { texto: niveles[fuerza] || '', color: colores[fuerza] || '' };
}