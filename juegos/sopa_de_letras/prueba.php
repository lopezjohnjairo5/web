<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        display: grid;
        grid-template-columns: repeat(4,40px);
    }

    .celda{
        width: 40px;
        height: 40px;
        border: 1px solid black;        
    }

    .win-animation{
        animation-duration: 2s;
        animation-name: win;
    }

    @keyframes win {
        0% {
            font-size: 1em;
        }
        50% {
            font-size: 1.5em;
        }
        100% {
            font-size: 1em;
        }
    }

</style>
<body id=tablero"">
    <?php 
        for ($i=0; $i < 12; $i++) { 
            echo '<div id='.$i.' class="celda">'.$i.'</div>';
        }
    ?>
</body>
<script>
    
    const changeColor = (e) => {
        /*
        funcion encargada de cambiar el color de fondo de las celdas
        sobre las cuales esta el puntero (e.target)
        */
        elemento = e.target;
        elemento.style.background = "green"; // cambio de color de fondo
        elemento.classList.toggle("win-animation"); // agregando y ejecutando animacion 
        console.log(elemento);
    };
    
    // variable trigger / gatillo, indica cuando se crea o elimina un listener
    clickActive = false;

    /* 
    listener encargado de poner color de fondo a las celdas 
    al darle clic y mover el mouse, con un segundo clic se
    deja de pintar
    pointerdown equivale a mousedown, pointerover equivale a mouseover
    la diferencia radica en que pointer ademas de servir con el mouse, sirve con el tactil
    del dispositivo 
    */
    
    document.addEventListener("pointerdown", (e) => {
        clickActive = !clickActive;
        if (clickActive) {
            changeColor(e);
            document.addEventListener("pointerover", changeColor);
        } else {
            document.removeEventListener("pointerover", changeColor);
        }
    });
    
</script>
</html>