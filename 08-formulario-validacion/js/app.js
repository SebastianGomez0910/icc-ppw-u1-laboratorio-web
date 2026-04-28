'use strict';

const form = document.querySelector('#form-registro');

function mostrarError(campo, mensaje) {
    campo.classList.add('campo--error');
    campo.classList.remove('campo--valido');
    const spanError = campo.parentElement.querySelector('.error-mensaje');
    if (spanError) spanError.textContent = mensaje;
}

function limpiarError(campo) {
    campo.classList.remove('campo--error');
    campo.classList.add('campo--valido');
    const spanError = campo.parentElement.querySelector('.error-mensaje');
    if (spanError) spanError.textContent = '';
}

function validarYMostrar(campo) {
    const errorMsg = validarCampoReglas(campo);
    if (errorMsg) {
        mostrarError(campo, errorMsg);
        return false;
    } else {
        limpiarError(campo);
        return true;
    }
}

form.addEventListener('focusout', (e) => {
    if (e.target.matches('input, select')) {
        validarYMostrar(e.target);
    }
});

form.addEventListener('input', (e) => {
    if (e.target.matches('input, select')) {
        e.target.classList.remove('campo--error');
        const spanError = e.target.parentElement.querySelector('.error-mensaje');
        if (spanError) spanError.textContent = '';
    }

    if (e.target.name === 'telefono') {
        let valor = e.target.value.replace(/\D/g, ''); 
        if (valor.length > 10) valor = valor.slice(0, 10);
        
        if (valor.length > 6) {
            valor = `(${valor.slice(0, 3)}) ${valor.slice(3, 6)}-${valor.slice(6)}`;
        } else if (valor.length > 3) {
            valor = `(${valor.slice(0, 3)}) ${valor.slice(3)}`;
        } else if (valor.length > 0) {
            valor = `(${valor}`;
        }
        e.target.value = valor;
    }

    if (e.target.name === 'password') {
        const estado = evaluarFuerzaPassword(e.target.value);
        const indicador = document.querySelector('#password-strength');
        indicador.textContent = estado.texto;
        indicador.style.color = estado.color;
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formularioValido = true;
    const campos = form.querySelectorAll('input, select');
    
    campos.forEach(campo => {
        if (!validarYMostrar(campo)) {
            formularioValido = false;
        }
    });

    if (formularioValido) {
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData);
        
        datos.terminos = form.querySelector('#terminos').checked;
        delete datos.confirmar_password; 

        console.log('Datos enviados correctamente:', datos);
        
        const msjExito = document.createElement('div');
        msjExito.className = 'mensaje-exito';
        msjExito.textContent = '¡Registro completado con éxito!';
        form.insertAdjacentElement('beforebegin', msjExito);
        
        form.reset();
        campos.forEach(c => c.classList.remove('campo--valido'));
        document.querySelector('#password-strength').textContent = '';
        
        setTimeout(() => msjExito.remove(), 4000);
    }
});