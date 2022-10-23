<?php
	include '../core/conection.php';

	function update_contact_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel contact

		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_contact SET `phone`= :phone,`whatsapp`= :whatsapp,`email`= :email,`map`= :map WHERE `idRestaurantContact` = :idRestaurantContact;";

		$sql = $conn->prepare($query);

		$sql->bindParam(':phone',$array_info[0],PDO::PARAM_STR);
		$sql->bindParam(':whatsapp',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':email',$array_info[2],PDO::PARAM_STR);
		$sql->bindParam(':map',$array_info[3],PDO::PARAM_STR);
		$sql->bindParam(':idRestaurantContact',$array_info[4],PDO::PARAM_INT);
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