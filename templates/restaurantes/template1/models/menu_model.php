<?php 
	include "../core/conection.php";
	
	function search_menu_info($idType){

		$conn = Conect_bd();
		$general_info_array= array();
		
		try{

			$query = "SELECT `name`,`description`,`pathImg`,`price`,`idType` FROM restaurant_menu WHERE `idType`=$idType;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				array_push($general_info_array, [
					"name" => $item["name"],
					"description" => $item["description"],
					"pathImg" => $item["pathImg"],
					"price" => $item["price"],
					"idType" => $item["idType"]
				]);
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $general_info_array;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}

?>