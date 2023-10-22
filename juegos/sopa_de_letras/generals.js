let popsElements = document.getElementsByClassName('pops'),
    btnsMenu = document.getElementsByClassName('btns-menu'),
    btnClosePops = document.getElementsByClassName('close-pop'),
    closePopNew = document.getElementById('close-pop-new-game'),
    time = document.getElementById('time'),
    chronometerTime = 1000,
    countCellPainted = 0,
    lastClickedElement = 0,
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
    clickActive = false; // variable trigger / gatillo, indica cuando se crea o elimina un listener

const restartGame = () => {
    /*
    funcion encargada de restablecer las variables 
    del juego a su estado original
    */
    chronometerTime = 1000,
    countCellPainted = 0,
    lastClickedElement = 0,
    minutes = 5,
    seconds = 0,
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
    //directionW = ["v","h"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    clickActive = false; // variable trigger / gatillo, indica cuando se crea o elimina un listener
};