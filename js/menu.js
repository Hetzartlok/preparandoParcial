let contador = 0;

document.getElementById("incrementar").addEventListener('click', () => {
  contador++;
  document.getElementById("contador").textContent = contador;
});

document.getElementById('disminuir').addEventListener('click', () => {
  contador--;
  document.getElementById('contador').textContent = contador;
});

function redirigir() {
    var combo = document.getElementById("comboBox-Destinos");
    var seleccion = combo.options[combo.selectedIndex].value;

    if (seleccion == "opcion-barcelona"){
        window.location.href = "https://www.google.com/?hl=es";
    }else if (seleccion == "opcion-paris"){
        window.location.href = "https://www.google.com/?hl=es";
    }else if (seleccion == "opcion-roma"){
        window.location.href = "https://www.google.com/?hl=es";
    }else if (seleccion == "opcion-tokyo"){
        window.location.href = "https://www.google.com/?hl=es";
    }
}