<section class="container" id="contact">
	<div class="title_section">
		<h2>Contácto</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">	
		<form method="POST" id="contact_content_sections" class="general_content_sections">
			<div class="file_section_form">
				<label>Teléfono: <input type="number" name="contact_phone" id="contact_phone" class="style_text_inputs" placeholder="3001234567" required value=""></label>
				<br><label>Whatsapp: </label>
				<div class="contact_select_info_whatsapp">
					<select name="contact_indicators" id="contact_indicators" required>
						<option value="0">seleccione una opción</option>
						<option value="+57">(+57) Colombia</option>
					</select>
					<input type="number" name="contact_whatsapp" id="contact_whatsapp" min="3000000000" max="9999999999" placeholder="3001234567" required>
				</div>
				<br><label>Correo: <input type="email" name="contact_email" id="contact_email" class="style_text_inputs" placeholder="micorreo@gmail.com" required value=""></label>
				<label>Mapa:</label>
				<textarea cols="10" rows="7" placeholder="iframe..." class="style_text_inputs" name="contact_iframe" id="contact_iframe" required></textarea>
				<input type="submit" name="send_contact_info" id="send_contact_info" class="send_general_btn" value="Guardar">
			</div>
			<div id="card_contact" class="file_section_form">
				<h3>Acerca del Iframe</h3>
				<br>
				<p>
					La seccion marcada como "Mapa" o "Iframe", hace referencia a la etiqueta proporcionada por google maps en su campo compartir. Como referencia se adjunta una imagen de ejemplo.
					<br>
					<br>
					<img src="<?php echo IMGS;?>ejemplo_iframe.png">
					<br>
					<br>
					<b>NOTA:</b> para una mejor visualización, click derecho sobre la imagen y seleccionar la opción <b>"Abrir imagen en una pestaña nueva"</b>.
				</p>
			</div>
		</form>

	</div>
</section>