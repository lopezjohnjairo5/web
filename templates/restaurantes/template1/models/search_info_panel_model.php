<?php
	include '../core/conection.php';


	function get_info_general(){

		$conn = Conect_bd();
		$arrayG = array();

		try{
			$query = "SELECT `name`,`pathIco`,`pathLogo`,`facebookLink`,`twitterLink`,`youtubeLink` FROM restaurant_general_info ORDER BY `idRestaurantGeneralInfo` ASC";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayG,[
					"name" => $item['name'],
					"pathIco" => $item['pathIco'],
					"pathLogo" => $item['pathLogo'],
					"facebookLink" => $item['facebookLink'],
					"twitterLink" => $item['twitterLink'],
					"youtubeLink" => $item['youtubeLink']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayG;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

	function get_info_galery(){

		$conn = Conect_bd();
		$arrayGal = array();

		try{
			$query = "SELECT `pathImg`,`title`,`description` FROM restaurant_galery ORDER BY `idRestaurantGalery` ASC";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayGal,[
					"pathImg" => $item['pathImg'],
					"title" => $item['title'],
					"description" => $item['description']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayGal;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

	function get_info_ours(){

		$conn = Conect_bd();
		$arrayO = array();

		try{
			$query = "SELECT `title`,`description`,`pathImg`,`pathImgPeople` FROM restaurant_ours ORDER BY `idOurs` ASC";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayO,[
					"title" => $item['title'],
					"description" => $item['description'],
					"pathImg" => $item['pathImg'],
					"pathImgPeople" => $item['pathImgPeople']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayO;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

	function get_info_menu(){

		$conn = Conect_bd();
		$arrayM = array();

		try{
			$query = "SELECT rm.`idMenu`,rm.`name`,rm.`description`,rm.`pathImg`,rm.`price`,rm.`idType`,t.`type` FROM restaurant_menu rm, type t WHERE rm.`idType` = t.`idType` ORDER BY rm.`idType` ASC, t.`idType` ASC;";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayM,[
					'idMenu' => $item['idMenu'],
					'name' => $item['name'],
					'description' => $item['description'],
					'pathImg' => $item['pathImg'],
					'price' => $item['price'],
					'idType' => $item['idType'],
					'type' => $item['type']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayM;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

	function get_info_contact(){

		$conn = Conect_bd();
		$arrayC = array();

		try{
			$query = "SELECT `phone`,`whatsapp`,`email`,`map` FROM restaurant_contact ORDER BY `idRestaurantContact` ASC";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayC,[
					"phone" => $item['phone'],
					"whatsapp" => $item['whatsapp'],
					"email" => $item['email'],
					"map" => $item['map']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayC;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

	function get_info_config(){

		$conn = Conect_bd();
		$arrayU = array();

		try{
			$query = "SELECT `name`,`EmailUser`,`tokenUser` FROM restaurant_users ORDER BY `idRestaurantUser` ASC";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				array_push($arrayU,[
					"name" => $item['name'],
					"email" => $item['EmailUser'],
					"tokenUser" => $item['tokenUser']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $arrayU;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}
?>