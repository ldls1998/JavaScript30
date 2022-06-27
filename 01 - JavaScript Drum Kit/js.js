function playSound(e) {
    // Seleccionar data-key correspondiente a la tecla presionada
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // Si no hay tecla en el html return
    if (!audio) return;
    // Sin esto cuando presionamos teclas sucesivamente el audio seguiría hasta terminar
    audio.currentTime = 0;
    // Ejecutamos el audio
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {

    if (e.propertyName !== "transform") return; // Si la propiedad transform no se está ejecutando
    this.classList.remove("playing");
    console.log(e);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);