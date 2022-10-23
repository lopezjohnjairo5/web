<?php
	include '../models/menu_delete_element_panel_model.php';
	include '../generals/deleteSpaces.php';

	$id_item = $_POST["id_item"];
	

	//eliminando elemento del menu
	$result = delete_element_menu_panel_with_id($id_item);

	if ($result) {
		//retornando menu completo
		$result_all_menu = search_all_menu();
		echo json_encode($result_all_menu);
	}

?>