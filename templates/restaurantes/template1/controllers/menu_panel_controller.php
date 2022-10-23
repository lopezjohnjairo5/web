<?php
	include '../models/menu_panel_model.php';
	include '../generals/moveImg.php';
	include '../generals/deleteSpaces.php';
	include '../generals/replaceSpecialChars.php';
	
	$menu_id_element = replaceSpecialChars($_POST["menu_id_element"]);
	$menu_title = replaceSpecialChars($_POST["menu_title"]);
	$menu_price = replaceSpecialChars($_POST["menu_price"]);
	$type_menu = replaceSpecialChars($_POST["type_menu"]);
	$menu_description = replaceSpecialChars($_POST["menu_description"]);
	$imagen_menu = $_FILES['imagen_menu']["tmp_name"];

	$today = date('Hms'); 
	//print_r($menu_id_element);
	$new_title = delete_spaces($menu_title);
	$pathImg = "./imgs/".$new_title.$type_menu.$today."_".$_FILES['imagen_menu']['name'];
	

	// preguntamos si el $menu_id_element esta vacio, en caso de estarlo, 
	// significa que se trata de un elemento nuevo a agregar en caso contrario 
	// seria la actualizacion de un elemento
	if(isset($menu_id_element) && !empty($menu_id_element)){
		//actualizamos
		$result_update = update_menu_panel([$menu_title,$menu_description,$pathImg,$menu_price,$type_menu,$menu_id_element]);
		/*if ($result_update) {
			print_r("\nActualización correcta");
		}else{
			print_r("\nError al actualizar la información");
		}*/
	}else{
		$result_insert = insert_menu_panel([$menu_title,$menu_description,$pathImg,$menu_price,$type_menu]);
		/*if($result_insert){
			print_r("\nNuevo elemento insertado.");
		}
		else{
			print_r("\nProblemas al insertar. \nVerifique e intente nuevamente.");
		}*/
	}

	//moviendo imagenes a la carpeta destino
	moveImgTo3($imagen_menu,".".$pathImg);

	//retornando menu completo
	$result_all_menu = search_all_menu();
	echo json_encode($result_all_menu);

?>