let btnPause = document.getElementById("btn-pause"),
    btnNew = document.getElementById("btn-new"),
    btnConfig = document.getElementById("btn-config"),
    popNewGame = document.getElementById('pop-new-game'),// pops
    popPause = document.getElementById('pop-pause'),
    popConfig = document.getElementById('pop-config'),
    closePopNew = document.getElementById('close-pop-new-game');

// ABRIR POPS

btnPause.addEventListener('click', () => {
    /*funcion encargada de abrir el pop de pausa*/
});

btnNew.addEventListener('click', () => {
    /*funcion encargada de abrir el pop de nuevo juego*/
    popNewGame.style.display = "flex";
});

btnConfig.addEventListener('click', () => {
    /*funcion encargada de abrir el pop de configuracion para audio*/
});

// CERRAR POPS

closePopNew.addEventListener('click', (e) => {
    e.preventDefault();
    popNewGame.style.display = "none";
});