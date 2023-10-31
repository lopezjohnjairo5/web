const loadMusic = (source, loopSound = false) => {
    /* 
    funcion encargada de crear y cargar un audio 
    */
    const sound = document.createElement('audio');
    sound.src = source;
    sound.setAttribute("controls","none");
    if (loopSound) {
        sound.setAttribute("loop",true);
    }
    sound.style.display = "none";
    document.body.appendChild(sound);
    
    return sound;
}

const playSound = (obj) => {
    obj.play();
}

const pauseSound = (obj) => {
    obj.pause();
}

const reloadSound = (obj) => {
    /* 
    funcion encargada de restablecer
    el audio pasado por parametro.
    Es decir pone su puntero de reproduccion
    al inicio
    */
    obj.currentTime = 0;
}

const replaySound = (obj) => {
    reloadSound(obj);
    playSound(obj)
}

const volumeSounds = (obj,vol = 1) => {
    obj.volume = vol;
}