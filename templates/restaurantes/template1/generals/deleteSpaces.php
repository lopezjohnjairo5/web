<?php

	function delete_spaces($txt){
		/*
		funcion encargada de eliminar los espacios en un texto
		*/
		
		$res = preg_replace('/[\@\.\;\" "]+/', '', $txt);
    	return $res;
		
	}

?>