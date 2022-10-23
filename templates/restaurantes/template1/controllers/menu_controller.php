<?php 
	include "../models/menu_model.php";

	$value = $_POST['data'][0]['value_select'];
	//echo $value;

	$menu_info = search_menu_info($value);
	echo json_encode($menu_info);
	//echo $menu_info;
?>