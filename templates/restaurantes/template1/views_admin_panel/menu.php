<section class="container" id="menu">
	<div class="title_section">
		<h2>Menu</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">
		<form method="POST" id="menu_content_sections" class="general_content_sections">
			<input type="text" class="hidde" name="menu_id_element" id="menu_id_element">
			<div id="menu_prev_img" class="file_section_form">
				<label>Imagen fondo</label>
				<canvas id="canvas_menu_img"></canvas>
				<input type="file" name="menu_img_input" id="menu_img_input">
			</div>
			<div id="menu_inputs" class="file_section_form">
				<label>Platillo <input type="text" name="menu_title" id="menu_title" placeholder="bandeja paisa" class="style_text_inputs"required></label>
				<select id="type_menu" class="style_text_inputs"required>
					<option value="">seleccione un elemento.</option>
					<option value="1">desayunos</option>
					<option value="2">almuerzos</option>
					<option value="3">especiales</option>
					<option value="4">menu infantil</option>
					<option value="5">postres</option>
					<option value="6">bebidas</option>
					<option value="7">aperitivos</option>
				</select>
				<input type="text" name="menu_price" id="menu_price" placeholder="precio ej: 12500" class="style_text_inputs" required>
				<textarea cols="10" rows="10" name="menu_description" id="menu_description" class="style_text_inputs"placeholder="Descripción platillo..." required></textarea>
				<input type="submit" name="send_menu_info" id="send_menu_info" class="send_general_btn" value="Añadir">
			</div>
		</form>
		<div class="table_scroll_x">
			<table class="table">
				<thead class="table_head">
					<tr>
						<th>Platillo</th>
						<th>Descripción</th>
						<th>Imagen</th>
						<th>Tipo</th>
						<th>Precio</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody class="table_body" id="table_menu_content">
					

				</tbody>
			</table>			
		</div>

	</div>
</section>