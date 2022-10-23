function ajax_send_menu_info(event){
	event.preventDefault();
	let controller = "./controllers/menu_panel_controller.php";
	
	let menu_id_element = $("#menu_id_element").val();
	let menu_title = $("#menu_title").val();
	let menu_price = $("#menu_price").val();
	let type_menu = $("#type_menu").val();
	let menu_description = $("#menu_description").val();
	let imagen_menu = $("#menu_img_input")[0].files[0];

    var frmDataMenu = new FormData;
    frmDataMenu.append("menu_id_element",menu_id_element);
    frmDataMenu.append("menu_title",menu_title);
    frmDataMenu.append("menu_price",menu_price);
    frmDataMenu.append("type_menu",type_menu);
    frmDataMenu.append("menu_description",menu_description);
    frmDataMenu.append("imagen_menu",imagen_menu);

	resp = menu_title != "" && type_menu != "" && menu_description != "" && imagen_menu != ""; 

	if (resp) {

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmDataMenu,
			processData: false,
            contentType: false,
            cache: false,
			success: function(data){
				let table_panel_menu = document.getElementById("table_menu_content");
				table_panel_menu.innerHTML = "";
				let content = "";

				new_data = JSON.parse(data);
	  			for (var i = 0; i < new_data.length; i++) {
	  				//actualizando tabla
	  				//console.log(new_data[i]);
	  				content += `<tr>`;
					content += `<td>${new_data[i]["name"]}</td>`;
					content += `<td>${new_data[i]["description"]}</td>`;
					content += `<td><a href="#"><img src="${new_data[i]["pathImg"]}" class="preview_table_menu_img"></a></td>`;
					content += `<td>${new_data[i]["idType"]} - ${new_data[i]["type"]}</td>`;
					content += `<td>${new_data[i]["price"]}</td>`;
					content += `<td>`;
					content += `<a href="#table_menu_content" id="idDelete-${new_data[i]["idMenu"]}" class="delete_menu_item">Eliminar</a>`;
					content += `</td>`;
					content += `</tr>`;
	  			}

	  			table_panel_menu.innerHTML += content;
	  			alert("Nuevo elemento agregado.");

			},
			error: function(xhr, status){
				alert("Error al enviar el formulario. \n Verifique e intente nuevamente");
			}
		});
	}else{
		alert("Todos los campos son obligatorios.\nVerifique e intente nuevamente.");
	}

}


let send_menu_info = document.getElementById("send_menu_info");
send_menu_info.addEventListener("click",function(event){
	ajax_send_menu_info(event);
});
