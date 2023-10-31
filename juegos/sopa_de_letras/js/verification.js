const verifyPositionClicked = (lastE, newE) => {
    /*
    funcion encargada de verificar si el elemento que se ha clicado esta 
    a la derecha, izquierda, arriba o abajo del elemento anteriormente clicado
    */
    //console.log(`lastE: ${lastE} newE: ${newE}`);
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
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; palabra: ${matrizGame[posR]}; lenWord.length: ${lenWord}`);
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
            console.log(`sizeArrayW.length: ${sizeArrayW.length} ; palabra: ${matrizGame[posC]} ; lenWord.length: ${lenWord}`);
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