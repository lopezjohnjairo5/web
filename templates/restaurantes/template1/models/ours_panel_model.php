<?php
	include '../core/conection.php';

	function update_info_ours_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel ours
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_ours SET `title`= :title,`description`= :description WHERE `idOurs` = :idOurs;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':title',$array_info[0],PDO::PARAM_STR);
		$sql->bindParam(':description',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':idOurs',$array_info[2],PDO::PARAM_INT);
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


	function update_img_ours_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel ours
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_ours SET `pathImg`= :pathImg WHERE `idOurs` = :idOurs;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':idOurs',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':pathImg',$array_info[1],PDO::PARAM_STR);
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


	function update_principal_img_ours_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel ours
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_ours SET `pathImgPeople`= :pathImgPeople WHERE `idOurs` = :idOurs;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':idOurs',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':pathImgPeople',$array_info[1],PDO::PARAM_STR);
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