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
                <div id="time-content" class="content-info-menu">
                    <span class="material-symbols-outlined">timer</span>    
                    <span id="time">Tiempo:</span>
                </div>
                <div id="score-content" class="content-info-menu">
                    <span class="material-symbols-outlined">sports_score</span>
                    <span id="score">0</span>
                </div>
            </div>
            <div id="options">
                <button class="btns-menu" id="btn-pause" title="Pausa"><span class="material-symbols-outlined">pause_presentation</span></button>
                <button class="btns-menu" id="btn-new-game" title="Nuevo juego"><span class="material-symbols-outlined">library_add</span></button>
                <button class="btns-menu" id="btn-config" title="Configuracion"><span class="material-symbols-outlined">settings_applications</span></button>
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
        <section id="pop-pause" class="pops">
            <a href="" class="close-pop" id="close-pop-pause">X</a>
            <h2>En pausa.</h2>
            <br>
        </section>
        <section id="pop-config" class="pops">
            <a href="" class="close-pop" id="close-pop-config">X</a>
            <h2>Configuracion</h2>
            <br> 
            <label for="background-sound">
                <span>Sonidos</span>
                <input type="range" min="0" max="100" step="10" name="background-sound" id="background-sound">
            </label>
            <label for="background-music">
                <span>Música</span>
                <input type="range" min="0" max="100" step="10" name="background-music" id="background-music">
            </label>
        </section>
        <section id="pop-win" class="pops">
            <!--<a href="" class="close-pop" id="close-pop-win">X</a>-->
            <h2>¡Ganaste!</h2>
            <br> 
            <span>puntaje:</span>
            <button class="btns-pops">Nuevo juego</button>
        </section>
        <section id="pop-lose" class="pops">
            <!--<a href="" class="close-pop" id="close-pop-lose">X</a>-->
            <h2>¡Perdiste!</h2>
            <br>
            <button class="btns-pops">Nuevo juego</button>
        </section>
    </div>
    <script src="generals.js"></script>
    <script src="listWords.js"></script>
    <script src="menu-btns.js"></script>
    <script src="score.js"></script>
    <script src="timer.js"></script>
    <script src="animations.js"></script>
    <script src="main.js"></script>
</body>
</html>