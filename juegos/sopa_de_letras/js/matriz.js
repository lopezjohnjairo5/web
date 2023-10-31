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

    //console.log(matrizGame);
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
        originalWord = newWord; // almacenamos la palabra original antes de invertirla

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
            if (orderWord == 2) {
                newWord = investword(newWord); //invirtiendo palabra
            }
            resultV = verifySpaceWord(posR, posC, newWord, dw);
            console.log(`resultV: ${resultV}`);

            // si el resultado es true, entonces ponemos la palabra en la posicion indicada y la añadimos al listado
            if (resultV) {
                listWords.splice(index, 1); // eliminamos la palabra del array original, para que no se repita al buscarla
                matrizGameWords.push(originalWord); // añadimos la palabra al listado
                
                putWordMatriz(posR, posC, newWord, dw); // ponemos la palabra en la matriz
                console.log(matrizGame);
            }
        }
    }
    
};

const searchedWordInList = (word) => {
    /*
    funcion encargada de buscar y eliminar en el 
    listado de palabras la palabra que el usuario
    esta formando.
    */
    resultSearch = false;
    
    resultSW = matrizGameWords.indexOf(word); // palabra en orden
    resultInv = matrizGameWords.indexOf(investword(word)); // palabra invertida
    if (resultSW != -1) {
        matrizGameWords.splice(resultSW,1);// ejecutando animacion de eliminacion de la palabra
        putDataValueToCells(); // poniendo valor al data fixed para evitar que se limpien las palabras correctas
        resultSearch = true;
    } else if (resultInv != -1){
        matrizGameWords.splice(resultInv,1);
        putDataValueToCells(); // poniendo valor al data fixed para evitar que se limpien las palabras correctas
        resultSearch = true;
    }
    putListwordsInBoard(); // refrescando el listado de palabras 

    return resultSearch;
};