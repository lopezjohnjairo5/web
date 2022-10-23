<?php 
	include "../models/theme_panel_model.php";

	$principal = $_POST["principalColor"];
	$secondary = $_POST["secondaryColor"];

	//print_r($principal);
	//print_r($secondary);
	$result = update_theme_panel_info([1,$principal,$secondary]);
	if ($result) {
		print_r("\nActualización exitosa.");
	}

?>