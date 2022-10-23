<!DOCTYPE html>
<html>
<?php 
	include "./config/generals.php";
	include "./config/path.php";
	include CONT."index_controller.php";
	include VIEWS."head.php";
?>
<body>
	<?php 
		include VIEWSAP."base_style.php";
	?>
	<section id="denied">
		<div id="denied_content">
			<h5>ERROR</h5>
			<h3>403</h3>
			<h5>ACCESO DENEGADO</h5>
		</div>

	</section>
</body>
</html>