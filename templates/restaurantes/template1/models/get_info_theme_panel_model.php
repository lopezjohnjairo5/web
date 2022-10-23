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
?>