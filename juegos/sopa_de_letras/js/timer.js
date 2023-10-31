const contentInterval = () => {
    //mostrando por pantalla
        //console.log(`${minutes}:${seconds}`);
        time.innerHTML = `${minutes < 10 ? '0'+ minutes.toString() : minutes.toString() } : ${seconds < 10 ? '0' + seconds.toString() : seconds.toString()}`;
        if (seconds == 0) {
            if (minutes == 0 && seconds == 0) {
                clearInterval(chrono);
                
                openPops("pop-lose"); // llamar aqui al pop de perder
                replaySound(loseSound); // reproducimos el sonido de perder
                pauseSound(backGSound); // detenemos la musica de fondo
            }
            seconds = 60;
            minutes--;
        }
        seconds--;
};

const chronometer = () => {
    /*
    funcion encargada de crear el contador en reversa
    del juego
    */
    //minutes = 5;
    //seconds = 0;
    replaySound(clockSound); // sonido reloj
    chrono = setInterval(contentInterval,chronometerTime);

    // funciones internas para pausar, resetear y detener el timer
    this.stop = () => {
        if (chrono) {
            clearInterval(chrono);
            chrono = null;
        }
        return this;
    };
    this.start = () => {
        if (!chrono) {
            this.stop();
            chrono = setInterval(contentInterval,chronometerTime);
        }
        return this;
    };
    this.reset = () => {
        return this.stop().start();
    };
};
