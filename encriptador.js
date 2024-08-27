const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const txtEncriptar = document.querySelector(".caja-texto");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor-textoyimg");

function mostrarAviso(mensaje) {
    aviso.textContent = mensaje;
    aviso.classList.add("activo");
    setTimeout(() => aviso.classList.remove("activo"), 1500);
}

function procesarTexto(texto, modo) {
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if (!texto) {
        mostrarAviso("El campo de texto no debe estar vacío");
        return null;
    }
    if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
        return null;
    }
    if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return null;
    }

    if (modo === "encriptar") {
        return texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    } else if (modo === "desencriptar") {
        return texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    }
}

function encriptarTexto() {
    let texto = procesarTexto(txtEncriptar.value, "encriptar");
    if (texto) {
        respuesta.value = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
}

function desencriptarTexto() {
    let texto = procesarTexto(txtEncriptar.value, "desencriptar");
    if (texto) {
        respuesta.value = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
}

function copiarTexto() {
    respuesta.select();
    document.execCommand("copy");
}

btnEncriptar.addEventListener("click", encriptarTexto);
btnDesencriptar.addEventListener("click", desencriptarTexto);
btnCopiar.addEventListener("click", copiarTexto);
