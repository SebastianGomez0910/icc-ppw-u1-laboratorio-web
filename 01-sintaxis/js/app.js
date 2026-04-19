'use strict' 

const nombre="sebastian";
const apellido="gomez";
let ciclo=5;
const activo=true;

const direccion={
    cuidad:'Cuenca',
    provincia:'Azuay'
}

console.table({nombre, apellido, ciclo, activo, direccion})

const calcularPromedio = (notas) =>
  notas.reduce((suma, nota) => suma + nota, 0) / notas.length;

console.log(calcularPromedio([8, 9, 10]));
 


const esMayorEdad = (edad) => edad <= 18;

const getSaludo = (nombre, hora) => {
    if(hora<12)
        return `Buenos Dias, $(nombre)`;
    if(hora<18)
        return `Buenos Dias, $(nombre)`;   
    return `Buenos noches, $(nombre)`;
    
}

const getSalu2 = (nombre, hora) => hora <= 12 ? `Buenos Dias, ${nombre}`:
    hora < 18 ? `Buenas Tardes , ${nombre}` : `Buenas Noches, ${nombre}`

//Mostrar en HTML

document.getElementById('nombre').textContent = `${nombre}`;
document.getElementById('apellido').textContent = `${apellido}`;
document.getElementById('ciclo').textContent = `${ciclo}`;