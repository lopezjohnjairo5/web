<section id="menu">
	<h2>MENÚ</h2>
	<hr>
	<br>
	<br>
	<select id="menu_dishes">
		<?php 
			//print_r($types_info );
			for ($i=0; $i <count($types_info) ; $i++) { 
				echo "<option value=".$types_info[$i][0].">".$types_info[$i][1]."</option>";		
			}

		?>
	</select>
	<br>
	<br>
	<div id="content_menu">
		

	</div>

</section>