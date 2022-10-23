<?php
	include "../core/conection.php";

	function search_user_login($mail){
		$conn = Conect_bd();
		$user= array();
		
		try{

			$query = "SELECT `EmailUser`,`PassUser` FROM `restaurant_users` WHERE `EmailUser` = '".$mail."';";

			$result = $conn->query($query);
			//echo $result;
			foreach ($result as $item) {
				array_push($user,[
					"email" => $item["EmailUser"],
					"pass" => $item["PassUser"]
				]);
				
			}

			//cerrando conexion
			Disconect_bd($result,$conn);

			return $user;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

?>