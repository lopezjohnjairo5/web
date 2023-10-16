<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--google-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <!--google-->

    <link rel="stylesheet" href="main.css">
    <title>Document</title>
</head>
<body>
    <div id="container-game">
        <div id="menu">
            <div id="info-menu">
                <span id="time">Tiempo:</span>
                <span id="score">Puntaje:</span>
            </div>
            <div id="options">
                <button id="btn-pause" title="Pausa"><span class="material-symbols-outlined">pause_presentation</span></button>
                <button id="btn-new" title="Nuevo juego"><span class="material-symbols-outlined">library_add</span></button>
                <button id="btn-config" title="Configuracion"><span class="material-symbols-outlined">settings_applications</span></button>
            </div>
        </div>
        <div id="game">
            <div id="game-board">
                <?php 
                    $countRows = 16;
                    for ($i=0; $i < $countRows; $i++) { 
                        for ($j=0; $j < $countRows; $j++) { 
                            echo "<div class='cells' id='{$i}-{$j}' data-fixed='0'>0</div>";
                        }
                    }
                ?>
            </div>
            <div id="game-list">
                <h3>Lista de palabras a buscar</h3>
                <ul id="list-words">
                    <?php
                        for ($i=0; $i < 100; $i++) { 
                            echo "<li>{$i}</li>";      
                        }            
                    ?>
                </ul>
            </div>
        </div>
        <section id="pop-new-game" class="pops">
            <a href="" class="close-pop" id="close-pop-new-game">X</a>
            <h2>¿Nuevo juego?</h2>
            <br>
            <button id="btn-pop-new-game" class="btns-pops">Nuevo juego</button>
        </section>
        <section id="pop-pause">
            utilizado para entorpecer la vista del tablero y que el user no haga trampa
        </section>
        <section id="pop-config">
            poner aqui los controles de audio 
        </section>
        <section id="pop-win">
            dar puntaje final y preguntar si quiere un nuevo juego
        </section>
        <section id="pop-lose">
            dar puntaje final y preguntar si quiere un nuevo juego
        </section>
    </div>

    <script src="listWords.js"></script>
    <script src="menu-btns.js"></script>
    <script src="main.js"></script>
</body>
</html>