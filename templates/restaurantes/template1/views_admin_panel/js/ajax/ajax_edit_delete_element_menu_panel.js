function ajax_delete_menu_info(id_element){
	let controller = "./controllers/menu_delete_element_panel_controller.php";
	let id_item = id_element.split("-")[1];

    var frmDataMenu = new FormData;
    frmDataMenu.append("id_item",id_item);

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
	  		alert("Elemento eliminado");
			
		},
		error: function(xhr, status){
			alert("Error al eliminar el elemento.");
		}
	});

}


let delete_menu_info = document.getElementById("table_menu_content");
delete_menu_info.addEventListener("click",function(e){
	if (e.target && e.target.tagName === 'A') {
		//alert("CLICK");
		//alert(e.target.getAttribute("id"));
		//alert(e.target.getAttribute("class"));
		if (e.target.getAttribute("class") == "delete_menu_item") {
			//alert("click en eliminar elemento");
			ajax_delete_menu_info(e.target.getAttribute("id"));
		}

	}
});
