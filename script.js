document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;
  
    // Función para mostrar el elemento actual
    const showItem = (index) => {
      items.forEach((item, i) => {
        item.style.display = i === index ? "block" : "none";
      });
    };
  
    // Mostrar el primer elemento al cargar la página
    showItem(currentIndex);
  
    // Función para avanzar al siguiente elemento
    const nextItem = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };
  
    // Función para retroceder al elemento anterior
    const prevItem = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };
  
    // Avanzar automáticamente cada 5 segundos
    setInterval(nextItem, 5000);
  
    // Opcional: Si deseas agregar botones de control manual
    const controls = document.createElement("div");
    controls.innerHTML = `
      <button id="prev">Anterior</button>
      <button id="next">Siguiente</button>
    `;
    controls.style.textAlign = "center";
    carousel.parentElement.appendChild(controls);
  
    document.getElementById("prev").addEventListener("click", prevItem);
    document.getElementById("next").addEventListener("click", nextItem);
  });
  
  document.querySelector(".btn").addEventListener("click", () => {
    alert("Serás redirigido a nuestra página de Facebook. ¡Gracias por visitar!");
  });
  

  document.getElementById('play-audio').addEventListener('click', function () {
    const audio = document.getElementById('audio-file');
    if (audio.paused) {
      audio.play();
      this.textContent = 'Pausar audio';
    } else {
      audio.pause();
      this.textContent = 'Reproducir audio';
    }
  });
  