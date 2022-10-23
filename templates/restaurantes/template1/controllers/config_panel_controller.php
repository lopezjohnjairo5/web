<?php
	include '../models/config_panel_model.php';
	include '../generals/replaceSpecialChars.php';

	$configuration_user = replaceSpecialChars($_POST["configuration_user"]);
	$configuration_mail = replaceSpecialChars($_POST["configuration_mail"]);
	$configuration_pass = replaceSpecialChars($_POST["configuration_pass"]);
	$configuration_pass_conf = replaceSpecialChars($_POST["configuration_pass_conf"]);

	$user_exist = verify_user_by_email($configuration_mail);
	
	if (!$user_exist) {
		//si el email del usuario no esta registrado, significa que el usuario a agregar no existe, entonces lo agregamos
		if ($configuration_pass == $configuration_pass_conf) {
			$new_pass = password_hash($configuration_pass , PASSWORD_DEFAULT);
			$token = password_hash($configuration_user.$configuration_mail , PASSWORD_DEFAULT);
			insert_user([$configuration_user,$configuration_mail,$new_pass,$token]);
			
			//buscar usuarios aqui y retornarlos para llenar la tabla
			$result = search_all_users();
			echo json_encode($result);
		}else{
			echo "El password y su confirmación sin distintos.\nVerifique e intente nuevamente.";

		}
	}else{
		echo "El usuario ya se encuentra registrado.";
	}

?>