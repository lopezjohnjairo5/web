<?php 

	function replaceSpecialChars($txt){
		/*
		funcion encargada de eliminar los caracteres especiales no validos
		*/


		$regex = '/[\\\;\<\>\°\%\#\(\)\=\"\']+/';
		$n_txt = preg_replace($regex, "", $txt);
		return $n_txt;
	}
?>