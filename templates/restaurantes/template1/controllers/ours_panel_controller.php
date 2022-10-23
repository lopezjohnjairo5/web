<?php
	include '../models/ours_panel_model.php';
	include '../generals/moveImg.php';
	include '../generals/replaceSpecialChars.php';
	
	$ours_title = replaceSpecialChars($_POST["ours_title"]);
	$ours_msn = replaceSpecialChars($_POST["ours_message"]);
	$ours_img = $_FILES['imagen_ours']["tmp_name"];
	$ours_img_people = $_FILES['imagen_ours_people']["tmp_name"];


	if (isset($ours_img) && !empty($ours_img)) {
		//ruta + nombre de la imagen
		$ours_img_ext = explode(".", $_FILES['imagen_ours']["name"]);
		$ours_img_ext = $ours_img_ext[count($ours_img_ext)-1];
		$ours_img_path = "../imgs/img_ours.".$ours_img_ext;
		$ours_img_path_bd = "./imgs/img_ours.".$ours_img_ext;
		
		$result = update_img_ours_panel([1,$ours_img_path_bd]);
		if($result){
			print_r("Imagen de nosotros actualizada correctamente");
		}
		//moviendo imagen a la carpeta destino
		moveImgTo2("nosotros",$ours_img,$ours_img_path);	
	}


	if (isset($ours_img_people) && !empty($ours_img_people)) {
		//ruta + nombre de la imagen
		$ours_img_ext = explode(".", $_FILES['imagen_ours_people']["name"]);
		$ours_img_ext = $ours_img_ext[count($ours_img_ext)-1];
		$ours_img_path = "../imgs/ours_img_people.".$ours_img_ext;
		$ours_img_path_bd = "./imgs/ours_img_people.".$ours_img_ext;
		
		$result = update_principal_img_ours_panel([1,$ours_img_path_bd]);
		if($result){
			print_r("Imagen de nosotros actualizada correctamente");
		}
		//moviendo imagen a la carpeta destino
		moveImgTo2("principal",$ours_img_people,$ours_img_path);	
	}
	
	//actualizando los datos de la bd
	$result = update_info_ours_panel([$ours_title,$ours_msn,1]);
	if($result){
		print_r("Datos de nosotros actualizados correctamente");
	}
	
?>