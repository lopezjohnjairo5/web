<?php
	include '../core/conection.php';

	function update_info_galery_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel galery
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_galery SET `title`= :title,`description`= :description WHERE `idRestaurantGalery` = :idRestaurantGalery;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':title',$array_info[0],PDO::PARAM_STR);
		$sql->bindParam(':description',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':idRestaurantGalery',$array_info[2],PDO::PARAM_INT);
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


	function update_img_galery_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel galery
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_galery SET `pathImg`= :pathImg WHERE `idRestaurantGalery` = :idRestaurantGalery;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':idRestaurantGalery',$array_info[0],PDO::PARAM_INT);
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

?>