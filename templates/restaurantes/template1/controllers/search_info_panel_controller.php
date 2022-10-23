<?php 
	include '../models/search_info_panel_model.php';
	//include MODELS.'search_info_panel_model.php';
	
	$arrayGen = get_info_general();
	$arrayGal = get_info_galery();
	$arrayOurs = get_info_ours();
	$arrayMen = get_info_menu();
	$arrayCont = get_info_contact();
	$arrayConf = get_info_config();
	
	$array_full = array();
	array_push($array_full,[
		"array_general"=> $arrayGen,
		"array_galeria"=> $arrayGal,
		"array_nosotros"=> $arrayOurs,
		"array_menu"=> $arrayMen,
		"array_contacto"=> $arrayCont,
		"array_configuracion"=> $arrayConf]
	); 
	//echo "en el controlador";
	echo json_encode($array_full);
?>