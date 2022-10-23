<?php 
	include "../core/conection.php";

	function update_theme_panel_info($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel general
		*/

		$conn = Conect_bd();

		//actualizar todo
		$query = "UPDATE restaurant_theme SET `principalColor`= :principalColor,`secondaryColor`= :secondaryColor WHERE `idRestaurantTheme` = :idRestaurantTheme;";
		
		$sql = $conn->prepare($query);

		$sql->bindParam(':idRestaurantTheme',$array_info[0],PDO::PARAM_INT);
		$sql->bindParam(':principalColor',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':secondaryColor',$array_info[2],PDO::PARAM_STR);

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