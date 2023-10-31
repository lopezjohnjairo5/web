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
        listLettersCellsId.push(e.target.id); // array con los ids de las celdas selecionadas usado para animar la palabra encontrada
        
        console.log("-------------------------------------------");
        console.log(`countCellPainted: ${countCellPainted == 0} ; `);
        console.log("-------------------------------------------");

        if (countCellPainted == 0 || verifyPositionClicked(lastClickedElement,e.target.id)) {

            elementClicket.style.background = backgroundColor;            
            elementClicket.style.color = "white";
            countCellPainted++; //incrementamos la cantidad de celdas pintadas
            lastClickedElement = e.target.id;
            
            searchedWord += e.target.innerHTML; //formando la palabra que el usuario esta seleccionando letra a letra
            resultSWL = searchedWordInList(searchedWord); //buscamos la palabra que forma el usuario, si esta en el listado, eliminamos la palabra de la lista
            
            console.log(`resultSWL ${resultSWL}`);

            //calculando el score o puntaje segun la longitud de la palabra
            if (resultSWL) {
                replaySound(correctSound); // reproducimos el sonido de correcto
                calculateScore(searchedWord.length);

                //verificamos si aun existen palabras en el listado, en caso contrario mostramos el pop win
                if (matrizGameWords.length < 1) {
                    //console.log(`matrizGameWords : ${matrizGameWords}`);
                    // llamar aqui al pop de ganar
                    openPops("pop-win");
                    replaySound(winSound); // reproducimos el sonido de ganar
                    pauseSound(backGSound); // detenemos la musica de fondo
                }
            }
            
            //console.log(`searchedWord = ${searchedWord}`);
        } else {
            listLettersCellsId = []; // array con los ids de las celdas selecionadas usado para animar la palabra encontrada
        }
    };

};