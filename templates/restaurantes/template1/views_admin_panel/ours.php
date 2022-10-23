<section class="container" id="ours">
	<div class="title_section">
		<h2>Nosotros</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">	
		<form method="POST" id="imgs_ours">
			<div class="imgs_ours_sections">
				<div id="ours_img" class="file_section_form">
					<label>Imagen fondo</label>
					<canvas id="canvas_ours_img"></canvas>
					<input type="file" name="ours_img_input" id="ours_img_input"  required>
				</div>
				<div id="ours_img_people" class="file_section_form">
					<label>Imagen principal</label>
					<canvas id="canvas_ours_img_people"></canvas>
					<input type="file" name="ours_img_people_input" id="ours_img_people_input"  required>
				</div>				
			</div>
			<br>
			<br>
			<div id="ours_inputs" class="file_section_form">
				<label>Titulo: <input type="text" name="ours_title" id="ours_title" placeholder="Sobre Nosotros" class="style_text_inputs" required value=""></label>
				<textarea cols="10" rows="10" name="ours_message" id="ours_message" class="style_text_inputs"placeholder="Mensaje..." required></textarea>
				<br>
				<input type="submit" name="send_ours_info" id="send_ours_info" class="send_general_btn" value="Guardar">
			</div>
		</form>
	</div>
</section>