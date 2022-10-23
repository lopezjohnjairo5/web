<?php
	include '../models/delete_user_panel_model.php';
	include '../generals/deleteSpaces.php';

	$token = $_POST["token"];
	

	//eliminando elemento del menu
	$result = delete_user_panel_with_token($token);

	if ($result) {
		//retornando menu completo
		$result_all_users = search_all_users();
		echo json_encode($result_all_users);
	}

?>