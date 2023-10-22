const chronometer = () => {
    /*
    funcion encargada de crear el contador en reversa
    del juego
    */
    //minutes = 5;
    //seconds = 0;
    
    chrono = setInterval(()=>{
        //mostrando por pantalla
        console.log(`${minutes}:${seconds}`);
        time.innerHTML = `${minutes < 10 ? '0'+ minutes.toString() : minutes.toString() } : ${seconds < 10 ? '0' + seconds.toString() : seconds.toString()}`;
        if (seconds == 0) {
            if (minutes == 0 && seconds == 0) {
                clearInterval(chrono);
                // llamar aqui al pop de perder
                openPops("pop-lose");
            }
            seconds = 60;
            minutes--;
        }
        seconds--;
    },chronometerTime);
};

chronometer();