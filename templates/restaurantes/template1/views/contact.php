<section id="contact">
	<?php echo $contact_info[0]["map"];?>
	<div id="contact_form">
		<form id="contact_form_content" method="POST">
			<h2>CONTÁCTO</h2>
			<hr>
			<br>
			<br>
			<input type="text" name="client_name" id="client_name" placeholder="*Nombre" required>
			<input type="text" name="client_email" id="client_email" placeholder="*Email" required>
			<input type="text" name="client_phone" id="client_phone" placeholder="*Teléfono" required>
			<select id="subject">
				<option value="0" selected>*Seleccione una opción</option>
				<?php 

					foreach ($subjects as $item){
						echo "<option value=".$item." >".$item."</option>";		
					}

				?>
				
			</select>
			<textarea cols="5" rows="5" id="message" placeholder="*Mensaje..." required></textarea>
			<label><input type="checkbox" name="terms_conditions" id="terms_conditions" required><a href="">*Acepto los terminos y condiciones</a></label>
			<br>
			<br>
			<a class="btn" id="send_contact">Enviar</a>
		</form>
	</div>
</section>
<section id="contact_info">
	<div class="contact_info_content">		
		<b>Email: </b><span><?php echo $contact_info[0]["email"];?></span>
	</div>
	<div class="contact_info_content">
		<b>Phone: </b><span><?php echo $contact_info[0]["phone"];?></span>		
	</div>
	<div class="contact_info_content">
		<b>Whatsapp: </b><span><?php echo $contact_info[0]["whatsapp"];?></span>	
	</div>
</section>