const openPops = (id) => {
    /*
    funcion encargada de mostrar el pop indicado
    */
    document.getElementById(id).style.display = "flex"; // abrimos el pop correspondiente
    if (id == "pop-new-game") {
        document.getElementById('close-pop-new-game').style.display = 'flex';
    }
    /*
    PONER AQUI LAS FUNCIONES NECESARIAS PARA PAUSAR LA EJECUCION DEL JUEGO YA QUE CON EL POP ENCIMA
    SE DEBE DESHABILITAR EL TIEMPO Y DEMAS.
    */
    clearInterval(chrono);
    pauseSound(clockSound); //pausamos el sonido del reloj
    
    //chronometerM.stop();

};

const closePops = (pop) => {
    /*
    funcion encargada de ocultar el pop indicado
    */
    document.getElementById(pop).style.display = "none";

    /*
    PONER AQUI LAS FUNCIONES NECESARIAS PARA REANUDAR LA EJECUCION DEL JUEGO YA QUE AL QUITAR EL POP DE ENCIMA
    SE DEBE CONTINUAR EL JUEGO.
    */
    
    chronometer();
    //chronometerM.start();
    //chronometerM.reset();
};

// ABRIR POPS
for (const it of btnsMenu) {
    it.addEventListener('click',(e) =>{
        e.preventDefault();
        idElement = e.target.closest(".btns-menu").id; // ubicamos el ID del btn, buscando el elemento mas cercano con la clase btns-menu
        id = idElement.replace("btn","pop"); // reemplazamos btn por pop en el id pasado por parametro
        openPops(id); // pasamos el id del elemento clicado
        replaySound(clickBtnSound); // sonido de click en btn
    });
}

// CERRAR POPS
for (const it of btnClosePops) {
    it.addEventListener('click',(e) =>{
        e.preventDefault();
        idElement = e.target.id.replace("close-",""); // quitamos la palabra close del id obtenido para poder cerrar el pop padre de la X
        console.log(`Clic en: ${e.target}`);
        closePops(idElement);
        replaySound(clickBtnSound); // sonido de click en btn
    });
}
