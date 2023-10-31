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

    <link rel="stylesheet" href="./css/main.css">
    <title>Document</title>
</head>
<body>
    <div id="container-game">
        <div id="menu">
        
            <?php 
                include "./views/menu.php";
                include "./views/options.php";
            ?>
        </div>
        <div id="game">
            <?php
                include "./views/game.php";
                include "./views/game-list.php";
            ?>            
        </div>
        <?php
            include "./views/pop-new.php";
            include "./views/pop-pause.php";
            include "./views/pop-config.php";
            include "./views/pop-win.php";
            include "./views/pop-lose.php";
        ?>
    </div>
    <?php 
        include "./views/scripts.php";
    ?>
</body>
</html>