// metodos de animaciones

const addAnimationClass = (word) => {
    /*
    añade una clase de animacion de css
    */
    const newAddPromise = new Promise((resolve, reject) => {
        word.classList.add("found-animation");
    });
    return newAddPromise;
};

const removeAnimationClass = (word) => {
    /*
    remueve una clase de animacion de css
    */
    const newRemovePromise = new Promise((resolve, reject) => {
        word.classList.remove("found-animation");
    });
    
    return newAddPromise;
};

const animateFoundWord = (listCellsId) => {
    /*
    funcion encargada de animar las celdas al encontrar una palabra
    correcta
    */
    for (let id = 0; id < listCellsId.length; id++) {
        let element = document.getElementById(listCellsId[id]);
        addAnimationClass(element).then(() => removeAnimationClass(element));
    }

    //listLettersCellsId = [];
    
};