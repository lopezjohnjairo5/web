<?php
//echo "<br>en conection";
	function Conect_bd(){
		$db = 'mysql:dbname=restaurant_pl2;host=127.0.0.1';
		//$user = 'root';
		//$passw = '';
		$user = 'jjle';
		$passw = '5vMDsRlfi3TivT';

		try{
			$conn = new PDO($db,$user,$passw);
			//echo "Coneccion exitosa";
			return $conn;
		}catch(PDOException $e){
			echo "coneccion fallida: ".$e->getMessage();

		}
	}

	function Disconect_bd($queryR,$Con){
		$queryR = null;
		$Con = null;
	}

?>
