<?php
	include '../core/conection.php';


	function delete_element_menu_panel_with_id($id){
		/*
    	funcion encargada de eliminar un elemento en el menu
		*/

		$conn = Conect_bd();

		try{
			$query = "DELETE FROM restaurant_menu WHERE `idMenu` = :idMenu;";
			$sql = $conn->prepare($query);
			$sql->bindParam(':idMenu',$id,PDO::PARAM_INT);

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