let contador = 0;

document.getElementById('incrementar').addEventListener('click', () => {
  contador++;
  document.getElementById('contador').textContent = contador;
});

document.getElementById('disminuir').addEventListener('click', () => {
  contador--;
  document.getElementById('contador').textContent = contador;
});