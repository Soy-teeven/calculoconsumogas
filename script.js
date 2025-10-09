// ------------------- Calculadora principal -------------------
document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const km = parseFloat(document.getElementById('km').value);
    const rend = parseFloat(document.getElementById('rend').value);
    const precio = parseFloat(document.getElementById('precio').value);

    // Validaciones
    if (isNaN(km) || km <= 0) {
        alert("⚠️ Ingresa un valor válido y positivo de kilómetros.");
        return;
    }

    if (isNaN(rend) || rend <= 0) {
        alert("⚠️ Ingresa un valor válido y positivo de rendimiento (km/L).");
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert("⚠️ Ingresa un valor válido y positivo de precio de gasolina.");
        return;
    }

    const gasto = (km / rend) * precio;
    document.getElementById('resultadoGasto').textContent = `💰 Gasto estimado: $${gasto.toFixed(2)}`;
});

// ------------------- Calculadora de rendimiento -------------------
const rendimientos = [];

document.getElementById("calcRendForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const km = parseFloat(document.getElementById('kmRec').value);
    let combustible = parseFloat(document.getElementById('combustible').value);
    const unidad = document.getElementById('unidad').value;

    // Validaciones estrictas
    if (isNaN(km) || km <= 0) {
        document.getElementById('resultadoRend').textContent = "⚠️ Ingresa un valor de kilómetros válido y positivo (>0).";
        return;
    }

    if (isNaN(combustible) || combustible <= 0) {
        document.getElementById('resultadoRend').textContent = "⚠️ Ingresa un valor de combustible válido y positivo (>0).";
        return;
    }

    // Convertir galones a litros si es necesario
    if (unidad === "galones") {
        combustible = combustible * 3.785;
    }

    const rendimiento = km / combustible;
    rendimientos.push(rendimiento);

    const promedio = rendimientos.reduce((a,b) => a+b,0) / rendimientos.length;

    document.getElementById('resultadoRend').innerHTML = 
        `✅ Rendimiento de este viaje: ${rendimiento.toFixed(2)} km/L<br>` +
        `📊 Promedio acumulado: ${promedio.toFixed(2)} km/L`;
});

// Función para limpiar resultados
function limpiarResultados() {
    document.getElementById('resultadoGasto').textContent = '';
    document.getElementById('resultadoRend').textContent = '';
}

// Limpiar resultados al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    limpiarResultados();
});