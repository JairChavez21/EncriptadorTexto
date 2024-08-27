function encriptar() {
    const texto = document.getElementById('textoOriginal').value;
    
    // Validación: solo letras minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(texto)) {
        mostrarFeedback('Por favor, ingresa solo letras minúsculas y sin acentos.', true);
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('resultado').value = textoEncriptado;
    mostrarFeedback('Texto encriptado con éxito.');
}

function desencriptar() {
    const texto = document.getElementById('textoOriginal').value;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('resultado').value = textoDesencriptado;
    mostrarFeedback('Texto desencriptado con éxito.');
}

function mostrarFeedback(mensaje, esError = false) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = mensaje;
    feedback.className = esError ? 'feedback error' : 'feedback';
    feedback.style.display = 'block';
    setTimeout(() => feedback.style.display = 'none', 3000); // Ocultar después de 3 segundos
}

function copiar() {
    const textoACopiar = document.getElementById('resultado').value;
    navigator.clipboard.writeText(textoACopiar);
    mostrarFeedback('Texto copiado con éxito.');
}


