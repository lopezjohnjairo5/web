<?php
	include '../core/conection.php';


	function insert_user($array_info){
		/*
		funcion encargada de insertar
		un nuevo usuario
		*/

		$conn = Conect_bd();

		try{
			$conn->beginTransaction();
			$insertSql = "INSERT INTO `restaurant_users` (`name`,`EmailUser`, `PassUser`,`tokenUser` ) VALUES (:name,:email ,:pass, :token)";

			$sql = $conn->prepare($insertSql);

			$sql->bindParam(':name',$array_info[0],PDO::PARAM_STR);
			$sql->bindParam(':email',$array_info[1],PDO::PARAM_STR);
			$sql->bindParam(':pass',$array_info[2],PDO::PARAM_STR);
			$sql->bindParam(':token',$array_info[3],PDO::PARAM_STR);


			$sql->execute();

			$conn->commit();

			Disconect_bd($result,$conn);

			return true;
		}

		catch(Exception $e){
			echo $e->getMessage();
			$conn->rollBack();
			return false;
		}

	}



	function verify_user_by_email($email){
		/*
		funcion encargada de buscar a un usuario
		registrados mediante el email
		*/
		$conn = Conect_bd();
		$exist = "";

		$conn->beginTransaction();
		$insertSql = "SELECT `idRestaurantUser` FROM `restaurant_users` WHERE `EmailUser` = :email ;";

		$sql = $conn->prepare($insertSql);


		$sql->bindParam(':email',$email,PDO::PARAM_STR);

		$sql->execute();

		foreach ($sql as $item) {
			$exist = $item["idRestaurantUser"];
		}

		if(!empty($exist))
		{
			Disconect_bd($result,$conn);
			return true;
		}
		else{
			return false;
		}

	}





	function search_all_users(){
		/*
		funcion encargada de buscar a todos los usuarios
		registrados 
		*/
		$conn = Conect_bd();
		$array_users = array();

		try{
			$conn->beginTransaction();
			$insertSql = "SELECT `tokenUser`,`name`,`EmailUser` FROM `restaurant_users` ORDER BY `idRestaurantUser` ASC ;";

			$sql = $conn->prepare($insertSql);

			$sql->execute();

			foreach ($sql as $item) {
				array_push($array_users,[
					"token" => $item["tokenUser"],
					"name" => $item["name"],
					"email" => $item["EmailUser"]
				]);
			}

			$conn->commit();

			Disconect_bd($result,$conn);

			return $array_users;
		}

		catch(Exception $e){
			echo $e->getMessage();
			$conn->rollBack();
			return false;
		}


	}



?>