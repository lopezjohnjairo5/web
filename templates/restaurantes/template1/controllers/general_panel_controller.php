<?php
	include '../models/general_panel_model.php';
	include '../generals/moveImg.php';
	include '../generals/replaceSpecialChars.php';

	$site_name = replaceSpecialChars($_POST["name"]);
	$link_facebook = replaceSpecialChars($_POST["facebook"]);
	$link_twitter = replaceSpecialChars($_POST["twitter"]);
	$link_youtube = replaceSpecialChars($_POST["youtube"]);

	$img_logo = $_FILES['logo']["tmp_name"];
	$img_icon = $_FILES['icon']["tmp_name"];
	$logo_path = "";
	$logo_path_bd = "";
	$icon_path = "";
	$icon_path_bd = "";


	if (isset($img_logo) && !empty($img_logo)) {
		// code...
		$logo_ext = explode(".", $_FILES['logo']["name"]);
		$logo_ext = $logo_ext[count($logo_ext)-1];
		$logo_path = "../imgs/logo.".$logo_ext;
		$logo_path_bd = "./imgs/logo.".$logo_ext;
		$result = update_general_panel_logo([1,$logo_path_bd]);
		if ($result) {		
			print_r("\nLogo actualizado correctamente.");
		}
		//moviendo imagen a la carpeta destino
		moveImgTo2("Logo",$img_logo,$logo_path);
	}

	if (isset($img_icon) && !empty($img_icon)) {
		$icon_ext = explode(".", $_FILES['icon']["name"]);
		$icon_ext = $icon_ext[count($icon_ext)-1];
		$icon_path = "../imgs/icon.".$icon_ext;
		$icon_path_bd = "./imgs/icon.".$icon_ext;
		//actualizando el icono
		$result = update_general_panel_ico([1,$icon_path_bd]);
		if ($result) {		
			print_r("\nIcono actualizado correctamente.");
		}
		//moviendo imagen a la carpeta destino
		moveImgTo2("Icono",$img_icon,$icon_path);
	}

	//actualizando datos de la BD
	$result = update_general_panel_info([1,$site_name,$link_facebook,$link_twitter,$link_youtube]);
	if($result){
		print_r("\nActualización de datos correcta.");
	}


?>