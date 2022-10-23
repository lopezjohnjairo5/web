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
		//print_r($contact_info);
		
		include VIEWS."base_style.php";
		include VIEWS."nav.php";
		include VIEWS."galery.php";
		include VIEWS."ours.php";
		include VIEWS."menu.php";
		include VIEWS."contact.php";
		include VIEWS."footer.php";
		include VIEWS."home_service.php";
		include VIEWS."scripts.php";
	?>
</body>
</html>