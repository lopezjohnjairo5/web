<section id="login">
	<h1>¡Bienvenido!</h1>
	<br>
	<br>
	<form id="login_form" method="POST" action="<?php echo CONT;?>login_controller.php">
		<input type="email" name="email_admin" id="email_admin" placeholder="micorreo@proveedor.com" required>
		<input type="password" name="pass_admin" id="pass_admin" placeholder="cOn1rA$enn_a" required>
		<input type="submit" name="confirm_user" id="confirm_user" value="Ingresar">
	</form>
</section>