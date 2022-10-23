<?php
	include '../models/galery_panel_model.php';
	include '../generals/moveImg.php';
	include '../generals/replaceSpecialChars.php';
	
	$galery_title = replaceSpecialChars($_POST["galery_title"]);
	$galery_msn = replaceSpecialChars($_POST["galery_message"]);
	$galery_img = $_FILES['imagen']["tmp_name"];

	/*print_r($_FILES['imagen']["tmp_name"]);
	print_r($galery_title);
	print_r($galery_msn);
	*/
	if (isset($galery_img) && !empty($galery_img)) {
		$galery_img_ext = explode(".", $_FILES['imagen']["name"]);
		$galery_img_ext = $galery_img_ext[count($galery_img_ext)-1];

		//ruta + nombre de la imagen
		$galery_img_path = "../imgs/galery_img.".$galery_img_ext;
		$galery_img_path_bd = "./imgs/galery_img.".$galery_img_ext;
		$result = update_img_galery_panel([1,$galery_img_path_bd]);
		if($result){
			print_r("Imagen de galeria actualizada correctamente");
		}	
		//moviendo imagen a la carpeta destino
		moveImgTo2("galeria",$galery_img,$galery_img_path);
	}

	//actualizando los datos de la bd
	
	$result = update_info_galery_panel([$galery_title,$galery_msn,1]);
	if($result){
		print_r("Datos de galeria actualizados correctamente");
	}

?>