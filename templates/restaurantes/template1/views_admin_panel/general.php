<section class="container" id="general">
	<div class="title_section">
		<h2>General</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">

		<form method="POST" enctype="multipart/form-data" id="general_form">
			<label>Nombre del sitio: <input type="text" name="site_name" id="site_name" placeholder="mi restaurante" value="" required></label>
			<br>
			<div id="file_section">
				
				<div id="icon_img" class="file_section_form">
					<label>Icono 64x64: </label>
					<canvas id="canvas_icon_img"></canvas>
					<input type="file" name="icon_img_path" id="icon_img_path">
				</div>
				<div id="brand_img" class="file_section_form">
					<label>Logo empresa: </label>
					<canvas id="canvas_logo_img"></canvas>
					<input type="file" name="logo_img_path" id="logo_img_path">
				</div>
			</div>
			<br><label>Facebook link: <input type="text" name="link_facebook" id="link_facebook" placeholder="https://www.facebook.com/" value=""></label>
			<br><label>Twitter link: <input type="text" name="link_twitter" id="link_twitter" placeholder="https://www.twitter.com/" value=""></label>
			<br><label>Youtube link: <input type="text" name="link_youtube" id="link_youtube" placeholder="https://www.youtube.com/" value=""></label>

			<br><input type="submit" name="send_general_info" id="send_general_info" class="send_general_btn" value="Guardar">
			
		</form>
	</div>
</section>