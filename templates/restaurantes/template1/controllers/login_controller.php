<?php
	include "../models/login_model.php";
	include "../config/generals.php";

	$mail = delete_special_chars($_POST['email_admin']);
	$pass = delete_special_chars($_POST['pass_admin']);

	//verificamos que no esten vacios ni sean NULL los campos del login
	$access = isset($mail) && isset($pass) && !empty($mail) && !empty($pass);

	if($access){
		$array_specials = ['&lt;b&gt;', '&lt;/b&gt;', '&lt;h2&gt;', '&lt;/h2&gt;'];
		$email_user = str_ireplace($array_specials, '',htmlspecialchars($mail));
		$pass_user = $pass;
		
		$result = search_user_login($email_user);
		
		$access = password_verify($pass_user, $result[0]["pass"]);
		//print_r($result[0]);
		if ($access) {
			//echo SITE;
			//iniciamos sesion
			session_destroy();
			session_start();
			echo "iniciamos session";
			$_SESSION['access'] = $result[0]["email"];
			header("location: ".SITE."panel.php"); //refrescamos la pagina
			die();
		}else{
			session_start();
			session_destroy();
			//echo "Usuario no encontrado";
			header("location: ".SITE."panel.php?error=user_not_found");
			die();
		}
	}


function delete_special_chars($text){
	//str_replace ( $valor_a_buscar , $valor_de_reemplazo , $string , [$contador ] )
	$array_specials_el = ["!","#","%","&","/","(",")","="," ","<",",",">",";",":","\"","\'"];
	$new_text = $text;

	for ($i=0; $i < count($array_specials_el) ; $i++) { 
		$new_text = str_replace ( $array_specials_el[$i] , "" , $new_text);
	}
	return $new_text;
}

?>