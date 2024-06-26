let contador = 0;
let pasajerosActual = document.getElementById("contador-pasajeros")

document.getElementById("incrementar").addEventListener('click', () => {
    contador++;
    document.getElementById("contador-pasajeros").textContent = contador;
});

document.getElementById('disminuir').addEventListener('click', () => {
    if (contador>0) {
        contador--;
    }
        document.getElementById('contador-pasajeros').textContent = contador;
});

function redirigir() {
    var combo = document.getElementById("comboBox-Destinos");
    var seleccion = combo.options[combo.selectedIndex].value;

    if (seleccion == "opcion-barcelona"){
        window.location.href = "barcelona.html";
    }else if (seleccion == "opcion-paris"){
        window.location.href = "paris.html";
    }else if (seleccion == "opcion-roma"){
        window.location.href = "roma.html";
    }else if (seleccion == "opcion-tokyo"){
        window.location.href = "tokio.html";
    }
}

function mostrarRespuesta(elemento) {
    var respuesta = elemento.nextElementSibling;
    while (respuesta && respuesta.tagName.toLowerCase()!= "div") {
      respuesta = respuesta.nextElementSibling;
    }
    if (respuesta.style.display == "block") {
      respuesta.style.display = "none";
    } else {
      respuesta.style.display = "block";
    }
  }