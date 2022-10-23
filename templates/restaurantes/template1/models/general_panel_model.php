<?php
	include '../core/conection.php';

	function update_general_panel_info($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel general
		*/

		$conn = Conect_bd();

		//actualizar todo
		$query = "UPDATE restaurant_general_info SET `name`= :name,`facebookLink`= :facebookLink,`twitterLink`= :twitterLink,`youtubeLink`= :youtubeLink WHERE `idRestaurantGeneralInfo` = :idRestaurantGeneralInfo;";
		
		$sql = $conn->prepare($query);

		$sql->bindParam(':idRestaurantGeneralInfo',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':name',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':facebookLink',$array_info[2],PDO::PARAM_STR);
		$sql->bindParam(':twitterLink',$array_info[3],PDO::PARAM_STR);
		$sql->bindParam(':youtubeLink',$array_info[4],PDO::PARAM_STR);

		$sql->execute();

		if($sql->rowCount() > 0)
		{
			Disconect_bd($result,$conn);
			return true;
		}
		else{
			return false;
		}

	}


	function update_general_panel_ico($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel general
		*/

		$conn = Conect_bd();

		//actualizar todo
		$query = "UPDATE restaurant_general_info SET `pathIco`= :pathIco WHERE `idRestaurantGeneralInfo` = :idRestaurantGeneralInfo;";
		
		$sql = $conn->prepare($query);

		$sql->bindParam(':idRestaurantGeneralInfo',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':pathIco',$array_info[1],PDO::PARAM_STR);

		$sql->execute();

		if($sql->rowCount() > 0)
		{
			Disconect_bd($result,$conn);
			return true;
		}
		else{
			return false;
		}

	}


	function update_general_panel_logo($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel general
		*/

		$conn = Conect_bd();

		//actualizar todo
		$query = "UPDATE restaurant_general_info SET `pathLogo`= :pathLogo WHERE `idRestaurantGeneralInfo` = :idRestaurantGeneralInfo;";
		
		$sql = $conn->prepare($query);

		$sql->bindParam(':idRestaurantGeneralInfo',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':pathLogo',$array_info[1],PDO::PARAM_STR);

		$sql->execute();

		if($sql->rowCount() > 0)
		{
			Disconect_bd($result,$conn);
			return true;
		}
		else{
			return false;
		}

	}

?>