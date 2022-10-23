function ajax_send_configuration_info(event){
	event.preventDefault();
	let controller = "./controllers/config_panel_controller.php";
	
	let configuration_user = $("#configuration_user").val();
	let configuration_mail = $("#configuration_mail").val();
	let configuration_pass = $("#configuration_pass").val();
	let configuration_pass_conf = $("#configuration_pass_conf").val();

    var frmDataConfig = new FormData;
    frmDataConfig.append("configuration_user",configuration_user);
    frmDataConfig.append("configuration_mail",configuration_mail);
    frmDataConfig.append("configuration_pass",configuration_pass);
    frmDataConfig.append("configuration_pass_conf",configuration_pass_conf);

	resp = configuration_user != "" && configuration_mail != "" && configuration_pass != "" && configuration_pass_conf != ""; 

	if (resp) {

		$.ajax({
			type: "POST",
			url: controller,
			data: frmDataConfig,
			processData: false,
            contentType: false,
            cache: false,
			success: function(data){
				
				try{
					new_data = JSON.parse(data);

					let table_configuration_content = document.getElementById("table_configuration_content");
					table_configuration_content.innerHTML = "";
					let content = "";
					
					
					for (var i = 0; i < new_data.length; i++) {
						
						content += `<tr>`;
						content += `<td>${new_data[i]["name"]}</td>`;
						content += `<td>${new_data[i]["email"]}</td>`;
						content += `<td><a href="#" id="user-${new_data[i]["token"]}" class="delete_user_item">Eliminar</a></td>`;
						content += `</tr>`;
					}

					table_configuration_content.innerHTML += content;
					alert("Nuevo usuario agregado.");

				} catch (e) {
					//console.log("error");
					alert(data);
				}

			},
			error: function(xhr, status){
				alert("Error al enviar el formulario.\nVerifique e intente nuevamente");
			}
		});
	}else{
		alert("Todos los campos son obligatorios.\nVerifique e intente nuevamente.");
	}

}


let send_configuration_info = document.getElementById("send_configuration_info");
send_configuration_info.addEventListener("click",function(event){
	ajax_send_configuration_info(event);
});
