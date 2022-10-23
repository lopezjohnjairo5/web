<section class="container" id="galery">
	<div class="title_section">
		<h2>Galeria</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">
		<form method="POST"id="galery_content_sections" class="general_content_sections">
			<div id="galery_img" class="file_section_form">
				<label>Imagen</label>
				<canvas id="canvas_galery_img"></canvas>
				<input type="file" name="galery_img_input" id="galery_img_input" required>
			</div>
			<div id="galery_inputs" class="file_section_form">
				<label>Titulo: <input type="text" name="galery_title" id="galery_title" placeholder="Bienvenidos" class="style_text_inputs" required value=""></label>
				<textarea cols="10" rows="10" name="galery_message" id="galery_message" placeholder="Mensaje..." class="style_text_inputs" required></textarea>
				<br>
				<input type="submit" name="send_galery_info" id="send_galery_info" class="send_general_btn" value="Guardar">
			</div>
		</form>
	</div>
</section>