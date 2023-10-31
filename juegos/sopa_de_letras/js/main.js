const main = () => {
    
    // creando matriz de ceros
    fillMatrizZeros();
    
    // llenando matriz con palabras
    fillMatrizWords();

    // llenando los campos restantes con letras al azar
    putAleatoryLetters();

    // llenando el tablero DOM
    putInBoard(); 

    // llenando el listado de palabras a buscar
    putListwordsInBoard();
    
    // volumen inicial de los sonidos
    configVolumeSounds();

    //ejecutando audio de fondo
    replaySound(backGSound); //restablece el sonido al inicio y lo reproduce  

};

// escuchando los clicks del mouse sobre las casillas del tablero
gameBoard.addEventListener("pointerdown", (e) => {
    /*
    Funcion listener principal, encargada de detectar el click del mouse
    y de el movimiento del puntero, asi como de la creacion y eliminacion
    de nuevos listeners
    */
    
    clickActive = !clickActive;
    activeChangeColor(e);
    gameBoard.addEventListener("pointerover", activeChangeColor);

    if (!clickActive) {
        gameBoard.removeEventListener("pointerover", activeChangeColor);
        //console.log("aqui");
    }
});

// ejecutando funcion principal del juego al presionar uno de los btns de nuevo juego
for (const btnNewGame of btnsNewGame) {
    btnNewGame.addEventListener('click', (e) => {
        e.preventDefault();
        restartBoardGame(); // restablecemos las variables del juego antes de comenzar
        idPopParent = e.target.closest('.pops').id;
        clearInterval(chrono);
        closePops(idPopParent); // cerramos el pop padre del btn para poder empezar el juego
        score.innerHTML = newScore; // restablecemos el puntaje principal 
        replaySound(clickBtnSound); // sonido click
        main(); //llamamos a la funcion principal de juego
    });
}
