<section class="container" id="theme">
	<div class="title_section">
		<h2>Configuración tema</h2>
		<hr>
	</div>
	<br>
	<div class="content_sections">	
		<form method="POST" id="theme_content_sections" class="general_content_sections">
			<div id="" class="file_section_form">
				<table id="table_theme_colors">
					<tbody>
						<tr>
							<td><label for="theme_principal_color">Color principal</label> </td>
							<td><input type="color" name="theme_principal_color" id="theme_principal_color" value="<?php echo $theme_info[0]["principalColor"]?>" required></td>
							<td><button id="restart_principal_color"><img src="<?php echo IMGS;?>restablecer.jpg"></button> </label></td>
						</tr>
						<tr>
							<td><label for="theme_secondary_color">Color Secundario</label></td>
							<td><input type="color" name="theme_secondary_color" id="theme_secondary_color" value="<?php echo $theme_info[0]["secondaryColor"]?>" required></td>
							<td><button id="restart_secondary_color"><img src="<?php echo IMGS;?>restablecer.jpg"></button></td>
						</tr>
					</tbody>
				</table>


				<input type="submit" name="send_theme_info" id="send_theme_info" class="send_general_btn" value="Guardar">
			</div>
		</form>

	</div>
</section>	