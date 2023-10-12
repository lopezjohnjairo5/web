<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
</head>
<body>
    <div id="game">
        <div id="game-board">
            <?php 
                $countRows = 13;
                for ($i=0; $i < $countRows; $i++) { 
                    for ($j=0; $j < $countRows; $j++) { 
                        echo "<div class='cells' id='{$i}-{$j}'>0</div>";
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
    <script src="listWords.js"></script>
    <script src="main.js"></script>
</body>
</html>