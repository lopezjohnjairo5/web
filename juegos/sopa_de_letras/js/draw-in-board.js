const putInBoard = () => {
    /*
    funcion encargada de volcar el contenido de la matriz en
    el tablero de juego
    */
    for (let fila = 0; fila < matrizGame.length; fila++) {
        for (let columna = 0; columna < matrizGame[fila].length; columna++) {
            element = document.getElementById(`${fila}-${columna}`);
            element.innerHTML = matrizGame[fila][columna];
        }   
    }
};

const putListwordsInBoard = () => {
    /*
    funcion encargada de volcar el contenido de la matriz en
    el tablero de juego
    */
    listWordsSpace.innerHTML = ""; 
    for (let item = 0; item < matrizGameWords.length; item++) {
        listElement = document.createElement("li");
        listElement.setAttribute("data-pos",item + 1);
        listElement.innerHTML = `${item + 1} - ${matrizGameWords[item]}`;
        listWordsSpace.appendChild(listElement);
    }
};

const cleanBoardGame = () => {
    /*
    funcion encargada de limpiar el tablero de juego,
    si se requiere limpiar por completo el tablero,
    PRIMERO PONER TODOS LOS DATA-FIXED DE LAS CELDAS A CERO.
    */

    // recorremos todas las celdas y las limpiamos una por una
    for (const it of cellsGroup) {
        //console.log(`it.dataset.fixed: ${it.dataset.fixed}`);
        // si la celda tiene data-fixed = 1 no la tocamos.
        if (it.dataset.fixed != 1) {
            it.style.background = "white";
            it.style.color = "black";
        }
    }
    // reiniciando variables de juego
    countCellPainted = 0;
    lastClickedElement = 0;
    direction = "";
    searchedWord = "";
    backgroundColor = selectNewColor();
    
    // desactiva el pointermove
    clickActive = false;
    gameBoard.removeEventListener("pointerover", activeChangeColor);
}; 

const putDataValueToCells = (dataValue = 1) => {
    /*
    funcion encargada de escanear el tablero de juego
    celda a celda, buscando las que tengan color de fondo
    diferente a blanco, para ponerles un dataFixed = 1 que 
    será el que evitará que se limpien las celdas correctas
    */

    for (const it of cellsGroup) {
        styleE = getComputedStyle(it).backgroundColor; // obtenemos el color de fondo de cada celda, si es distinto a blanco, entonces...
        if (styleE != "white" && styleE != "rgb(255, 255, 255)" && styleE != "#ffffff") {
            it.dataset.fixed = dataValue;
        }
    }

};
