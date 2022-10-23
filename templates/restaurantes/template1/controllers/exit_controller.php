<?php
	include "../config/generals.php";

	session_start();
	session_destroy();
	header("location: ".SITE."panel.php");
?>