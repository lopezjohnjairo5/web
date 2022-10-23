<?php
	include '../core/conection.php';


	function delete_user_panel_with_token($token){
		/*
    	funcion encargada de eliminar un usuario
		*/

		$conn = Conect_bd();

		try{
			$query = "DELETE FROM restaurant_users WHERE `tokenUser` = :token;";
			$sql = $conn->prepare($query);
			$sql->bindParam(':token',$token,PDO::PARAM_STR);

			//$result = $conn->query($query);
			$sql->execute();
			
			//cerrando conexion
			Disconect_bd($result,$conn);
			return true;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}


	function search_all_users(){
		
    	//funcion encargada de retornar todo el menu

		
		$conn = Conect_bd();
		$all_menu = array();

		try{
			$query = "SELECT `name`,`EmailUser`,`tokenUser` FROM restaurant_users ORDER BY `idRestaurantUser` ASC;";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			$count = 0;
			foreach ($sql as $item) {
				array_push($all_menu,[
					'name' => $item['name'],
					'email' => $item['EmailUser'],
					'token' => $item['tokenUser']
				]);
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $all_menu;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}

?>