<?php 
	include "./core/conection.php";

	function search_theme_info(){

		$conn = Conect_bd();
		$general_info_array= array();
		
		try{

			$query = "SELECT `principalColor`,`secondaryColor` FROM restaurant_theme WHERE `idRestaurantTheme` = 1;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($general_info_array, [
					"principalColor" => $item["principalColor"],
					"secondaryColor" => $item["secondaryColor"]]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $general_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}


	
	function search_contact_subjects(){

		$conn = Conect_bd();
		$subjects_info_array= array();
		
		try{

			$query = "SELECT `subject` FROM subjects;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($subjects_info_array,$item["subject"]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $subjects_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}


	function search_general_info(){

		$conn = Conect_bd();
		$general_info_array= array();
		
		try{

			$query = "SELECT `name`,`pathIco`,`pathLogo`,`facebookLink`,`twitterLink`,`youtubeLink` FROM restaurant_general_info WHERE `idRestaurantGeneralInfo` = 1;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($general_info_array, [
					"name" => $item["name"],
					"pathIco" => $item["pathIco"],
					"pathLogo" => $item["pathLogo"],
					"facebookLink" => $item["facebookLink"],
					"twitterLink" => $item["twitterLink"],
					"youtubeLink" => $item["youtubeLink"]]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $general_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}


	function search_galery_info(){

		$conn = Conect_bd();
		$galery_info_array= array();
		
		try{

			$query = "SELECT `pathImg`,`title`,`description` FROM restaurant_galery;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($galery_info_array, [
					"pathImg" => $item["pathImg"],
					"title" => $item["title"],
					"description" => $item["description"]
				]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $galery_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}

	function search_ours_info(){

		$conn = Conect_bd();
		$ours_info_array= array();
		
		try{

			$query = "SELECT `pathImgPeople`,`pathImg`,`title`,`description` FROM restaurant_ours;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($ours_info_array, [
					"pathImgPeople" => $item["pathImgPeople"],
					"pathImg" => $item["pathImg"],
					"title" => $item["title"],
					"description" => $item["description"]
				]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $ours_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}

	function search_types_info(){

		$conn = Conect_bd();
		$types_info_array= array();
		
		try{
			//seleccionamos solo los tipos que tienen un elemento del menu asociado y con DISTINCROW evitamos que se repitan tipos dentro del desplegable
			$query = "SELECT DISTINCTROW t.`type`,t.`idType` FROM type t, restaurant_menu rm WHERE rm.`idType` = t.`idType`;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($types_info_array, [
					$item["idType"],
					$item["type"]
				]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $types_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}



	function search_contact_info(){

		$conn = Conect_bd();
		$contact_info_array= array();
		
		try{

			$query = "SELECT `phone`,`whatsapp`,`email`,`map` FROM restaurant_contact WHERE `idRestaurantContact` = 1;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($contact_info_array, [
					"phone" => $item["phone"],
					"whatsapp" => $item["whatsapp"],
					"email" => $item["email"],
					"map" => $item["map"],
				]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $contact_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}

?>