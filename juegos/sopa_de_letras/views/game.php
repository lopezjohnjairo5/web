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