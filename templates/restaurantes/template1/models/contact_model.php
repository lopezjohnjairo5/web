<?php
	include "../core/conection.php";

	function searchMail(){

		$conn = Conect_bd();
		$mail= array();
		
		try{

			$query = "SELECT `email` FROM restaurant_contact;";

			$result = $conn->query($query);

			foreach ($result as $item) {
				$mail = $item["email"];	
			}
			//cerrando conexion
			Disconect_bd($result,$conn);

			return $mail;

		}catch (Exception $e){
			//retornamos false, en caso de no encontrar al user en la bd
			return false;
		}

	}

	function sendMail($nameC,$emailC,$phoneC,$subjectC,$messageC){

		$to = searchMail();
		//print_r($to);
		$subject = $subjectC;
		$message = " <h2> ".$subjectC." </h2> ";
		$message .= " <h4> ".$nameC." </h4> ";
		$message .= " <p> ".$emailC." | ";
		$message .= $phoneC." </p><br>";
		$message .= "<p>".$messageC." </p>";
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		
		try{
		
			mail($to, $subject, $message, $headers);
		
		}catch (Exception $e) {
			return false;	
		}

		return true;	

	}
?>	