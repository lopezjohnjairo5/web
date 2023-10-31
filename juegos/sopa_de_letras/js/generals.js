
let popsElements = document.getElementsByClassName('pops'),
    btnsMenu = document.getElementsByClassName('btns-menu'),
    btnsNewGame = document.getElementsByClassName('btns-pops'),
    btnClosePops = document.getElementsByClassName('close-pop'),
    closePopNew = document.getElementById('close-pop-new-game'),
    time = document.getElementById('time'),
    score = document.getElementById('score'),
    chronometerTime = 1000,
    countCellPainted = 0,
    lastClickedElement = 0,
    scoreCalc = 10, // valor por el cual se multiplica la longitud de la palabra
    newScore = 0, // variable que almacenará el nuevo puntaje
    minutes = 5, 
    seconds = 0,
    chrono,
    listLettersCellsId = [], // array utilizado para llevar un conteo de los ids de las celdas seleccionadas por el usuario, este será usado para saber cuales animar al encontrar una palabra
    direction = "",
    max = 200,
    min = 50,
    backgroundColor = "rgb(245,200,145)",
    matrizGame = [],
    matrizGameWords = [],
    countRows = 16,
    countColumns = 16,
    numberElements = 25, // indica la cantidad de palabras que estaran disponibles para buscar
    searchedWord = "", // palabra que esta seleccionando el usuario en el tablero
    resultSWL = false, // trigger para determinar si se debe o no animar la palabra encontrada por el usuario
    //directionW = ["v","h","dd"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    directionW = ["v","h"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    cellsGroup = document.getElementsByClassName('cells'),
    listWordsSpace = document.getElementById("list-words"),
    gameBoard = document.getElementById("game-board"),
    clickActive = false, // variable trigger / gatillo, indica cuando se crea o elimina un listener
    // cargando sonidos
    backGSound = loadMusic("./sounds/background.mp3",true),
    correctSound = loadMusic("./sounds/correct.mp3",false),
    errorSound = loadMusic("./sounds/error.mp3",false),
    winSound = loadMusic("./sounds/win.mp3",false),
    loseSound = loadMusic("./sounds/lose.mp3",false),
    clickBtnSound = loadMusic("./sounds/click.mp3",false),
    clockSound = loadMusic("./sounds/clock.mp3",true);

const restartGameVars = () => {
    /*
    funcion encargada de restablecer las variables 
    del juego a su estado original
    */
    chronometerTime = 1000,
    countCellPainted = 0,
    lastClickedElement = 0,
    scoreCalc = 10, // valor por el cual se multiplica la longitud de la palabra
    newScore = 0, // variable que almacenará el nuevo puntaje
    minutes = 5,
    seconds = 0,
    chrono,
    listLettersCellsId = [], // array utilizado para llevar un conteo de los ids de las celdas seleccionadas por el usuario, este será usado para saber cuales animar al encontrar una palabra
    direction = "",
    max = 200,
    min = 50,
    backgroundColor = "rgb(245,200,145)",
    matrizGame = [],
    matrizGameWords = [],
    countRows = 16,
    countColumns = 16,
    numberElements = 25, // indica la cantidad de palabras que estaran disponibles para buscar
    searchedWord = "", // palabra que esta seleccionando el usuario en el tablero
    resultSWL = false, // trigger para determinar si se debe o no animar la palabra encontrada por el usuario
    //directionW = ["v","h","dd"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    directionW = ["v","h"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    clickActive = false; // variable trigger / gatillo, indica cuando se crea o elimina un listener

};

const restartBoardGame = () => {
    /*
    funcion encargada de limpiar el tablero de juego,
    si se requiere limpiar por completo el tablero,
    PRIMERO PONER TODOS LOS DATA-FIXED DE LAS CELDAS A CERO.
    */

    // recorremos todas las celdas y las limpiamos una por una
    for (const it of cellsGroup) {
        console.log(`it.dataset.fixed: ${it.dataset.fixed}`);
        // si la celda tiene data-fixed = 1 no la tocamos.
        it.dataset.fixed = 0
        it.style.background = "white";
        it.style.color = "black";
    }
    
    restartGameVars();

    //gameBoard.removeEventListener("pointerover", activeChangeColor);
}