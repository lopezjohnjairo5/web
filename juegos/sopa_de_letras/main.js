let countCellPainted = 0,
    lastClickedElement = 0,
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
    //directionW = ["v","h","dd"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    directionW = ["v","h"], // direcciones posibles para poner las palabras, v=vertical, h=horizontal, dd= diagonal derecha, di=diagonal izquierda
    cellsGroup = document.getElementsByClassName('cells'),
    listWordsSpace = document.getElementById("list-words"),
    clickActive = false; // variable trigger / gatillo, indica cuando se crea o elimina un listener

const fillMatrizZeros = () => {
    /*
    fucion encargada de llenar la matriz de ceros para posteriormente llenarla 
    con la info correspondiente.
    */
   passArray = [];
   matrizGame = [];

    for (let i = 0; i < countRows; i++) {
        for (let j = 0; j < countColumns; j++) {
            passArray.push(0);
        }
        matrizGame.push(passArray);
        passArray = [];
    }

    console.log(matrizGame);
};

const selectNewColor = () => {
    /*
    funcion encargada de generar un color rgb aleatorio (entre 50 y 200 como 
        maximo para evitar que salga el negro y el balnco como fondo)
    que servirá de fondo de cada una de las celdas o casillas
    */
    red = Math.floor((Math.random() * (max - min) + min)).toString();
    green = Math.floor((Math.random() * (max - min) + min)).toString();
    blue = Math.floor((Math.random() * (max - min) + min)).toString();
    //console.log(`${red} - ${green} - ${blue}`);
    return `rgb(${red},${green},${blue})`;

};

const cleanBoardGame = () => {
    /*
    funcion encargada de limpiar el tablero de juego,
    si se requiere limpiar por completo el tablero,
    PRIMERO PONER TODOS LOS DATA-FIXED DE LAS CELDAS A CERO.
    */

    // recorremos todas las celdas y las limpiamos una por una
    for (const it of cellsGroup) {
        console.log(`it.dataset.fixed: ${it.dataset.fixed}`);
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
}; 

const verifyPositionClicked = (lastE, newE) => {
    /*
    funcion encargada de verificar si el elemento que se ha clicado esta 
    a la derecha, izquierda, arriba o abajo del elemento anteriormente clicado
    */
    console.log(`lastE: ${lastE} newE: ${newE}`);
    partsLast = lastE.split("-");
    partsNew = newE.split("-");
    // convertimos los valores a enteros para poder trabajar bien
    partsLast = [parseInt(partsLast[0]),parseInt(partsLast[1])];
    partsNew = [parseInt(partsNew[0]),parseInt(partsNew[1])];

    // verificamos si esta una fila atras, adelante y en la misma columna o si esta una columna atras, adelante y en la misma fila
    if((partsLast[0] == partsNew[0]-1) && (partsLast[1] == partsNew[1]) && (direction == "v" || direction == "")){
        //console.log(`true 1 : ${partsLast[0]} ; ${partsNew[0]-1}`);
        direction = "v";
        return true;
    } else if((partsLast[0] == partsNew[0]+1) && (partsLast[1] == partsNew[1]) && (direction == "v" || direction == "")){
        //console.log(`true 2 : ${partsLast[0]} ; ${partsNew[0]+1}`);
        direction = "v";
        return true;
    } else if((partsLast[1] == partsNew[1]-1) && (partsLast[0] == partsNew[0]) && (direction == "h" || direction == "")){
        //console.log(`true 3 : ${partsLast[1]} ; ${partsNew[1]-1}`);
        direction = "h";
        return true;
    } else if((partsLast[1] == partsNew[1]+1) && (partsLast[0] == partsNew[0]) && (direction == "h" || direction == "")){
        //console.log(`true 4 : ${partsLast[1]} ; ${partsNew[1]+1}`);
        direction = "h";
        return true;
    }
    //console.log("false");
    cleanBoardGame();
    return false;
}

const verifySpaceWord = (posR, posC, word, direction) => {
    /*
    funcion encargada de verificar si la palabra se puede o no poner en la matriz
    */
    lenWord = word.length; // longitud de la palabra
    arrayW = [...word]; // aray con las letras de la palabra
    sizeArrayW = [];
    index = 0;
    resultReturn = false;

    switch (direction) {
        case "h":
            for (let c = posC; c < matrizGame[posR].length; c++) {
                if ((arrayW[index] == matrizGame[posR][c] || matrizGame[posR][c] == 0 || matrizGame[posR][c] == "0") && index < lenWord) {
                    sizeArrayW.push(1);
                    console.log(`arrayW[index] : ${arrayW[index]}`);
                }
                index++;
            }
    
            // si la longitud del array de palabras es igual a la longitud de la palabra quiere decir que si estan libres todos los campos
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; lenWord.length: ${lenWord}`);
            resultReturn = sizeArrayW.length == lenWord ? true : false;
            break;

        case "v":
            for (let r = posR; r < matrizGame[posC].length; r++) {
                if ((arrayW[index] == matrizGame[r][posC] || matrizGame[r][posC] == 0 || matrizGame[r][posC] == "0") && index < lenWord) {
                    sizeArrayW.push(1);
                    console.log(`arrayW[index] : ${arrayW[index]}`);
                }
                index++;
            }
    
            // si la longitud del array de palabras es igual a la longitud de la palabra quiere decir que si estan libres todos los campos
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; lenWord.length: ${lenWord}`);
            resultReturn = sizeArrayW.length == lenWord ? true : false;
            break;    
        
        case "dd":
            // diagonal izq - derecha = \
            for (let rc = posC; rc < matrizGame.length; rc++) {
                if ((arrayW[index] == matrizGame[rc][rc] || matrizGame[rc][rc] == 0 || matrizGame[rc][rc] == "0") && index < lenWord) {
                    sizeArrayW.push(1);
                    console.log(`arrayW : ${arrayW[index]} ;  matrizGame : ${matrizGame[rc][rc]}  ; arrayW[index] : ${arrayW[index]} ; [posC] : ${rc} ; [posR] : ${posR}`);
                }
                index++;
            }
            resultReturn = sizeArrayW.length == lenWord ? true : false;
            break;
   
        default:
            break;
    }

    return resultReturn;

};

const putWordMatriz = (posR, posC, word, direction) => {
    /*
    poner una palabra en la matriz de ceros segun la direccion pasada por parametro
    */
    lenWord = word.length; // longitud de la palabra
    arrayW = [...word]; // aray con las letras de la palabra
    index = 0;
    resultReturn = false;

    // recorremos la matriz y vamos poniendo las letras de la palabra
    switch (direction) {
        case "h":
            for (let c = posC; c < matrizGame[posR].length; c++) {
                if ((arrayW[index] == matrizGame[posR][c] || matrizGame[posR][c] == 0 || matrizGame[posR][c] == "0") && index < lenWord) {
                    matrizGame[posR][c] = arrayW[index];
                }
                index++;
            }
    
            // si la longitud del array de palabras es igual a la longitud de la palabra quiere decir que si estan libres todos los campos
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; lenWord.length: ${lenWord}`);
            break;

        case "v":
            for (let r = posR; r < matrizGame[posC].length; r++) {
                if ((arrayW[index] == matrizGame[r][posC] || matrizGame[r][posC] == 0 || matrizGame[r][posC] == "0") && index < lenWord) {
                    matrizGame[r][posC] = arrayW[index];
                }
                index++;
            }
    
            // si la longitud del array de palabras es igual a la longitud de la palabra quiere decir que si estan libres todos los campos
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; lenWord.length: ${lenWord}`);
            break;   
            
        case "dd":
            // diagonal izq - derecha = \
            for (let rc = posC; rc < matrizGame.length; rc++) {
                if ((arrayW[index] == matrizGame[rc][rc] || matrizGame[rc][rc] == 0 || matrizGame[rc][rc] == "0") && index < lenWord) {
                    matrizGame[rc][rc] = arrayW[index];
                }
                index++;
            }
            console.log(`arrayW[index] : ${arrayW[index]}`);
            break;
   
        default:
            break;
    }
};

const putAleatoryLetters = () => {
    /*
    funcion encargada de poner letras aleatorias para rellenar los demás campos de la sopa de letras
    */
    arrayLetters = [];
    // llenamos el array de caracteres de la A-Z 
    for (let i = 97; i < 123; i++) {
        arrayLetters.push(String.fromCharCode(i));
    }

    // iteramos la matriz y ponemos valores aleatorios del array recien llenado
    for (let i = 0; i < matrizGame.length; i++) {
        for (let j = 0; j < matrizGame[i].length; j++) {
            if (matrizGame[i][j] == 0 || matrizGame[i][j] == "0") {
                indexAL = Math.floor(Math.random() * (arrayLetters.length - 0) - 0);
                matrizGame[i][j] = arrayLetters[indexAL].toUpperCase();
            }
        }
        
    }
};

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
        listElement.innerHTML = `${item + 1} - ${matrizGameWords[item]}`;
        listWordsSpace.appendChild(listElement);
    }
};

const investword = (word) => {
    /*
    funcion encargada de invertir una palabra pasada por parametro
    */
    newW = word.split("").reverse().join(""); //convierte en array el texto, lo invierte, lo vuelve a unir como string
    console.log(`word: ${word} ; newW: ${newW}`);

    return newW
};

const fillMatrizWords = () => {
    /*
    metodo encargado de rellenar la matriz de ceros con palabras
    */
   // si el listado de palabras es menor al numero indicado entonces seguimos agregando
    while (matrizGameWords.length < numberElements){

        index = Math.floor(Math.random() * (listWords.length - 0) + 0);
        indexD = Math.floor(Math.random() * (directionW.length - 0) + 0);
        orderWord = Math.floor(Math.random() * (3 - 0) + 0); // valor aleatorio utilizado para determinar si la palabra se pondrá invertida o normal en el tablero
        newWord = listWords[index].toUpperCase(); // seleccionamos una palabra aleatoriamente de la lista

        dw = directionW[indexD]; // seleccionamos una direccion aleatoria para la palabra, vertical, horizontal, diagonal
        //dw ="di";
        console.log(`index: ${index} ; newWord: ${newWord} ; direction : ${dw}`);
        
        // seleccionamos una posicion en el tablero aleatoria para poner la palabram teniendo presente que segun la direccion quepa la palabra
        if (dw == "h") {
            posR = Math.floor(Math.random() * (countRows - 0) + 0);
            posC = Math.floor(Math.random() * ((countColumns - newWord.length) - 0) + 0);
        } else if(dw == "v") {
            posR = Math.floor(Math.random() * ((countRows - newWord.length) - 0) + 0);
            posC = Math.floor(Math.random() * (countColumns - 0) + 0);
        } else if (dw == "dd") {
            // no comprobado
            posR = Math.floor(Math.random() * (( countRows - newWord.length) - 0) + 0);
            posC = Math.floor(Math.random() * (( countColumns - newWord.length) - 0) + 0);
        }

        // si la nueva palabra a agregar NO esta en el array de palabras, entonces la incluimos e incluimos la palabra
        if (!matrizGameWords.includes(newWord)) {
            // verificamos que la posicion en la que se pondrá la palabra sea correcta, tenga ceros en la matriz o la misma letra
            resultV = verifySpaceWord(posR, posC, newWord, dw);
            console.log(`resultV: ${resultV}`);

            // si el resultado es true, entonces ponemos la palabra en la posicion indicada y la añadimos al listado
            if (resultV) {
                listWords.splice(index, 1); // eliminamos la palabra del array original, para que no se repita al buscarla
                matrizGameWords.push(newWord); // añadimos la palabra al listado
                if (orderWord == 2) {
                    newWord = investword(newWord); //invirtiendo palabra
                }
                putWordMatriz(posR, posC, newWord, dw); // ponemos la palabra en la matriz
                console.log(matrizGame);
            }
        }
    }
    
};

const putDataValueToCells = (dataValue = 1) => {
    /*
    funcion encargada de escanear el tablero de juego
    celda a celda, buscando las que tengan color de fondo
    diferente a blanco, para ponerles un dataFixed = 1 que 
    será el que evitará que se limpien las celdas correctas
    */

    for (const it of cellsGroup) {
        styleE = getComputedStyle(it).background; // obtenemos el color de fondo de cada celda, si es distinto a blanco, entonces...
        if (styleE != "white" && styleE != "rgb(255, 255, 255)") {
            it.dataset.fixed = dataValue;
        }
    }

};

const searchedWordInList = (word) => {
    /*
    funcion encargada de buscar y eliminar en el 
    listado de palabras la palabra que el usuario
    esta formando.
    */
    resultSW = matrizGameWords.indexOf(word);
    if (resultSW != -1) {
        matrizGameWords.splice(resultSW,1);
        putDataValueToCells(); // poniendo valor al data fixed para evitar que se limpien las palabras correctas
    }
    putListwordsInBoard(); // refrescando el listado de palabras 
};

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

};

const activeChangeColor = (e) => {
    /*
    funcion encargada de de pintar las celdas del tablero
    al ser llamada mediante los Listeners
    */
    classElementClick = e.target.classList; // clase del elemento al cual se le dio clic

    // pintando celdas del tablero
    // si se dio clic sobre una celda del tablero, entonces...
    if (classElementClick == "cells") {
        elementClicket = document.getElementById(e.target.id); // indica el ID del elemento al cual se le dió click
        if (countCellPainted == 0 || verifyPositionClicked(lastClickedElement,e.target.id)) {

            elementClicket.style.background = backgroundColor;            
            elementClicket.style.color = "white";
            countCellPainted++; //incrementamos la cantidad de celdas pintadas
            lastClickedElement = e.target.id;
            
            searchedWord += e.target.innerHTML; //formando la palabra que el usuario esta seleccionando letra a letra
            searchedWordInList(searchedWord); //buscamos la palabra que forma el usuario, si esta en el listado, eliminamos la palabra de la lista
            console.log(`searchedWord = ${searchedWord}`);
        }
    };

};


// escuchando los clicks del mouse sobre las casillas del tablero
document.addEventListener("pointerdown", (e) => {
    /*
    Funcion listener principal, encargada de detectar el click del mouse
    y de el movimiento del puntero, asi como de la creacion y eliminacion
    de nuevos listeners
    */
    
    clickActive = !clickActive;
    if (clickActive) {
        activeChangeColor(e);
        document.addEventListener("pointerover", activeChangeColor);
    } else {
        activeChangeColor(e);
        document.addEventListener("pointerover", activeChangeColor);
        document.removeEventListener("pointerover", activeChangeColor);
    }
});

// ejecutando funcion principal del juego
main();

/*
Falta:
- validar que la palabra encontrada este en la lista y añadir las celdas que ya estan listas a un array que
    deberá ser verificado antes de limpiar el tablero, de esta manera siempre se mantendrán pintadas las palabras previamente encontradas - LISTO
- Agregar la posibilidad de seleccionar palabras en diagonal
- Corregir: cuando se cambia de direccion de seleccion de celda, se requiere un doble clic para pintar la nueva celda, cambiar esto. -- listo
- poner cuadro de puntaje, btns de restablecer y nuevo juego, musica de fondo y al encontrar palabra
- poner pops de ganar(al quedarse sin palabras) y perder (al acabarse el tiempo)
- poner en mayusculas las palabras, antes de agregarlas tanto a la matriz como al listado de palabras. -- listo
- poner las celdas rectangulares ya que al ser circulares hay problemas al pintarlas moviendo el mouse.
- OPCIONAL: 
    - poner colores de fondo rgba para las celdas a fin de mezclar el color de fondo o validar su ya tiene color de fondo, en ese caso tomar 
    el color de fondo y poner un degrade del nuevo y viejo color
    - se desactivaron las diagonales, mientras se crea la validacion de estas.
    - poner animacion al encontrar palabra algo asi como girar las letras y su contenido o algo por el estilo
- Nota:
    - se puede calcular el puntaje, dependiendo de la longitud de las palabras, es decir dar un puntaje por letra
    acertada y sumarlo con el tiempo restante, de esta manera cada sopa de letras dará como resultado un puntaje maximo diferente
*/