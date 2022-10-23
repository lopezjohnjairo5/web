<?php
	include '../models/contact_panel_model.php';
	include '../generals/replaceSpecialChars.php';

	$contact_phone = replaceSpecialChars($_POST["contact_phone"]);
	$contact_whatsapp = replaceSpecialChars($_POST["contact_indicators"])." ".replaceSpecialChars($_POST["contact_whatsapp"]);
	$contact_email = replaceSpecialChars($_POST["contact_email"]);
	$contact_iframe = $_POST["contact_iframe"];

	//actualizando los datos de la bd
	
	$result = update_contact_panel([$contact_phone,$contact_whatsapp,$contact_email,$contact_iframe,1]);
	if($result){
		print_r("Datos de contácto actualizados correctamente");
	}else{
		print_r("Error al actualizar datos de contácto, es posible que no se detectaran cambios en la información.\nVerifique e intente nuevamente");
	}

?>