<?php
	include '../core/conection.php';


	function search_menu_panel($array_info){
		/*
    	funcion encargada de buscar un elemento en el menu

		params:
		- $serial_electric_product: valor del id de la tabla cellar_electric_products,
					utilizado para localizar los valores de la tabla amount_reference_electric_products
		*/
		$conn = Conect_bd();
		$id_element_menu = "";

		try{
			$query = "SELECT `idMenu` FROM restaurant_menu WHERE `name` = :name AND `idType` = :idType;";

			$sql = $conn->prepare($query);

			$sql->bindParam(':name',$array_info[0],PDO::PARAM_STR);
			$sql->bindParam(':idType',$array_info[1],PDO::PARAM_INT);

			
			//$result = $conn->query($query);
			$sql->execute();
			
			foreach ($sql as $item) {
				$id_element_menu = $item['idMenu'];
			}
			

			//cerrando conexion
			Disconect_bd($result,$conn);
			return $id_element_menu;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}
	}


	function insert_menu_panel($array_info){
		/*
		funcion encargada de insertar
		en la tabla -- restaurant_menu
		*/

		$conn = Conect_bd();

		try{
			$conn->beginTransaction();
			$insertSql = "INSERT INTO `restaurant_menu` (`name`, `description`, `pathImg`, `price`, `idType`) VALUES (:name ,:description , :pathImg , :price , :idType)";

			$sql = $conn->prepare($insertSql);

			$sql->bindParam(':name',$array_info[0],PDO::PARAM_STR);
			$sql->bindParam(':description',$array_info[1],PDO::PARAM_STR);
			$sql->bindParam(':pathImg',$array_info[2],PDO::PARAM_STR);
			$sql->bindParam(':price',$array_info[3],PDO::PARAM_STR);
			$sql->bindParam(':idType',$array_info[4],PDO::PARAM_INT);


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



	function update_menu_panel($array_info){
		/*
		funcion encargada de actualizar 
		la información del panel menu
		*/

		$conn = Conect_bd();

		$query = "UPDATE restaurant_menu SET `name`= :name,`description`= :description,`pathImg`= :pathImg,`price`= :price,`idType`= :idType WHERE `idMenu` = :idMenu;";
		$sql = $conn->prepare($query);

		$sql->bindParam(':name',$array_info[0],PDO::PARAM_STR);
		$sql->bindParam(':description',$array_info[1],PDO::PARAM_STR);
		$sql->bindParam(':pathImg',$array_info[2],PDO::PARAM_STR);
		$sql->bindParam(':price',$array_info[3],PDO::PARAM_STR);
		$sql->bindParam(':idType',$array_info[4],PDO::PARAM_STR);
		$sql->bindParam(':idMenu',$array_info[5],PDO::PARAM_INT);
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

	
	function search_all_menu(){
		
    	//funcion encargada de retornar todo el menu

		
		$conn = Conect_bd();
		$all_menu = array();

		try{
			$query = "SELECT rm.`idMenu`,rm.`name`,rm.`description`,rm.`pathImg`,rm.`price`,rm.`idType`,t.`type` FROM restaurant_menu rm, type t WHERE rm.`idType` = t.`idType` ORDER BY rm.`idType` ASC, t.`idType` ASC;";

			$sql = $conn->prepare($query);

			
			//$result = $conn->query($query);
			$sql->execute();
			$count = 0;
			foreach ($sql as $item) {
				array_push($all_menu,[
					'idMenu' => $item['idMenu'],
					'name' => $item['name'],
					'description' => $item['description'],
					'pathImg' => $item['pathImg'],
					'price' => $item['price'],
					'idType' => $item['idType'],
					'type' => $item['type']
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