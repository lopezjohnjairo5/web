<?php 
include "../models/contact_model.php";
include '../generals/replaceSpecialChars.php';


$name = replaceSpecialChars($_POST['data'][0]["name"]);
$email = replaceSpecialChars($_POST['data'][0]["email"]);
$phone = replaceSpecialChars($_POST['data'][0]["phone"]);
$subject = replaceSpecialChars($_POST['data'][0]["subject"]);
$message = replaceSpecialChars($_POST['data'][0]["message"]);

$msn = "";

$response = sendMail($name,$email,$phone,$subject,$message);

if($response){
	$msn = "Mensaje enviado con éxito";
}else{
	$msn = "Error al enviar el Mensaje.\nPor favor verifique que todos los campos marcados con asterisco(*) se encuentran debidamente diligenciados.";
}

print_r($msn);

?>