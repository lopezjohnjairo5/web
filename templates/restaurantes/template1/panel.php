<!DOCTYPE html>
<html>
<?php 
	include "./config/generals.php";
	include "./config/path.php";
	include "./controllers/get_info_theme_panel_controller.php";
	include VIEWSAP."head.php";
?>
<body>
	<?php
		//session_destroy();
		session_start();
		include VIEWSAP."base_style.php";

		if (isset($_SESSION['access'])) {

			include VIEWSAP."lateral_nav.php";
			include VIEWSAP."general.php";
			include VIEWSAP."galery.php";
			include VIEWSAP."ours.php";
			include VIEWSAP."menu.php";
			include VIEWSAP."contact.php";
			include VIEWSAP."exit.php";
			include VIEWSAP."configuration.php";
			include VIEWSAP."theme.php";
			include VIEWSAP."scripts.php";
		}else if (isset($_GET['error']) && $_GET['error'] == "user_not_found")  {
			include VIEWSAP."alert.php";
			include VIEWSAP."login.php";
		}else{
			include VIEWSAP."login.php";
		}
	?>
</body>
</html>