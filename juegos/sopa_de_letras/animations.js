const playAnimation = (element) => {

    return playAn = new Promise(function(resolve, reject){
        /*
        FUNCIONA, PERO.....
        NO SE PUEDE AGREGAR DEBIDO A QUE SE REQUIERE QUE SEA ASINCRONA, debido a lo anterior se ejecutará
        mas lento que el resto del codigo e interferira con otras caracteristicas del juego como los pops por ejemplo
        funcion encargada de poner una animacion a la palabra encontrada en el listado 

        IDEA::

        intentar creando un pop sobre el tablero que se ejecute con la palabra encontrada y luego desaparezca, de 
        esta forma no se interfiere con el listado y puede que si funcione, sin embargo requerirá que se
        de mas tiempo para las palabras ya que esta muyy justo
        */
        resolve(setTimeout(()=>{
        
            console.log( `PLAY ANIMATION - element = ${element}`);
            childrenList = listWordsSpace.children;
            deleteElement = false;

            for (const it of childrenList) {
                
                if(it.dataset.pos == element){
                    it.classList.add("found-animation", "found-word-style");
                    deleteElement = true;
                }
            }
            return deleteElement;            
        },500));
    });
};
