<?php 
function moveImgTo($type_img,$imgData,$imgPath){
	/*
	funcion encargada de mover la imagen pasada por parametro a la ruta
	especificada funciona capturando la imagen del canvas de preview
	parameters -- TIENE PERDIDA DE CALIDAD EN LA IMAGEN, sirve para logos pequeños
	    - $type_img : tipo de imagen a mover (string: logo,icono,img galeria,etc...) 
	    - $imgData : imagen a mover
	    - $imgPath : ruta + nombre + extension de la imagen a mover
	*/
	if (isset($imgData)) {
	  $data = base64_decode(preg_replace('/^[^,]*,/', '', $imgData));
	  //file_put_contents($path_firms."firm_".$client_info[0].".png" , $data);
	  file_put_contents($imgPath , $data);
	  print_r("\n".$type_img." almacenado correctamente.");
	}else{
	  print_r("\nproblema al guardar la imagen.\nVerifique e intente nuevamente.");
	}

}

function moveImgTo2($type_img,$imgData,$imgPath){
	/*
	funcion encargada de mover la imagen pasada por parametro a la ruta
	especificada, funciona con envio de FILES por ajax
	parameters -- NO TIENE PERDIDA DE CALIDAD EN LA IMAGEN sirve para imagenes grandes de alta resolucion
	    - $type_img : tipo de imagen a mover (string: logo,icono,img galeria,etc...) 
	    - $imgData : imagen a mover
	    - $imgPath : ruta + nombre + extension de la imagen a mover
	*/
	
	if(move_uploaded_file($imgData,$imgPath)){
    	echo "\nimagen ".$type_img." cargada";
	}else{
	    echo "\nno se pudo cargar la imagen.";
	}
}


function moveImgTo3($imgData,$imgPath){
	/*
	IGUAL QUE moveImgTo2, pero, no muestra mensaje de confirmacion.
	funcion encargada de mover la imagen pasada por parametro a la ruta
	especificada, funciona con envio de FILES por ajax
	parameters -- NO TIENE PERDIDA DE CALIDAD EN LA IMAGEN sirve para imagenes grandes de alta resolucion
	   - $imgData : imagen a mover
	    - $imgPath : ruta + nombre + extension de la imagen a mover
	*/
	
	move_uploaded_file($imgData,$imgPath);
	
}

?>