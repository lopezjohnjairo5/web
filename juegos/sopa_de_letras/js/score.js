const calculateScore = (wordLenght) => {
    /*
    funcion encargada de calcular el puntaje del usuario segun la lontigud de la 
    palabra (valor pasado por parametro)
    */
    
    newScore += (wordLenght * scoreCalc);
    score.innerHTML = newScore; 
    //replaySound(correctSound); // reproducimos el sonido de correcto
};
