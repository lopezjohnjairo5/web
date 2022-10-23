<section class="container" id="configuration">
	<div class="title_section">
		<h2>Configuración</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">	
		<form method="POST" id="configuration_content_sections" class="general_content_sections">
			<div id="" class="file_section_form">
				<label for="configuration_mail">Usuario<input type="text" name="configuration_user" id="configuration_user" class="style_text_inputs" placeholder="Usuario" required></label>
				<label for="configuration_mail">Email<input type="email" name="configuration_mail" id="configuration_mail" class="style_text_inputs" placeholder="micorreo@gmail.com" required></label>
				<label for="configuration_pass">Password<input type="password" name="configuration_pass" id="configuration_pass" class="style_text_inputs" placeholder="************" required></label>
				<label for="configuration_pass_conf">Confirmar Password<input type="password" name="configuration_pass_conf" id="configuration_pass_conf" class="style_text_inputs" placeholder="************" required></label>
				<input type="submit" name="send_configuration_info" id="send_configuration_info" class="send_general_btn" value="Añadir">
			</div>
			<div id="card_configuration" class="file_section_form">
				<h3>Sobre contraseñas</h3>
				<br>
				<p>
					Se recomienda que la contraseña escogida cumpla con las siguientes condiciones:
					<br>
					<br>- Longitud minima de 8 caracteres (recomendado 12)
					<br>- letras Mayúsculas 
					<br>- letras Minúsculas
					<br>- Números (0-9)
					<br>- Caracteres especiales (#,_,$,&). 
					<br>
					<br>
					<b>Ejemplo:</b> m1C0nT_Ra$3na
				</p>
			</div>
		</form>
		<br>
		<div class="table_scroll_x">
			<table class="table">
				<thead class="table_head">
					<tr>
						<th>Usuario</th>
						<th>Email</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody class="table_body" id="table_configuration_content">
					
				</tbody>
			</table>		
		</div>
	</div>
</section>	