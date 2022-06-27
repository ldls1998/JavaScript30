window.addEventListener('keydown', (e) => {
    // Seleccionar data-key correspondiente a la tecla presionada
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Si no hay tecla en el html return
    if (!audio) return;
    // Sin esto cuando presionamos teclas sucesivamente el audio seguiría hasta terminar
    audio.currentTime = 0;
    // Ejecutamos el audio
    audio.play();
});