function ajax_delete_user_info(tk){
	let controller = "./controllers/delete_user_panel_controller.php";
	let token = tk.split("-")[1];
	//alert(token);
    var frmDataUser = new FormData;
    frmDataUser.append("token",token);

	$.ajax({
		type: "POST",
		url: controller,
		//data: json_obj,
		data: frmDataUser,
		processData: false,
		contentType: false,
		cache: false,
		success: function(data){
			let table_panel_user = document.getElementById("table_configuration_content");
			table_panel_user.innerHTML = "";
			let content = "";
			new_data = JSON.parse(data);
  			
  			for (var i = 0; i < new_data.length; i++) {
				content += `<tr>`;
				content += `<td>${new_data[i]["name"]}</td>`;
				content += `<td>${new_data[i]["email"]}</td>`;
				content += `<td><a href="#" id="user-${new_data[i]["token"]}" class="delete_user_item">Eliminar</a></td>`;
				content += `</tr>`;
  			}

	  		table_panel_user.innerHTML += content;
	  		alert("Elemento eliminado");
			
		},
		error: function(xhr, status){
			alert("Error al eliminar el elemento.");
		}
	});

}


let delete_user_info = document.getElementById("table_configuration_content");
delete_user_info.addEventListener("click",function(e){
	if (e.target && e.target.tagName === 'A') {

		if (e.target.getAttribute("class") == "delete_user_item") {
			//alert("click en eliminar elemento");
			ajax_delete_user_info(e.target.getAttribute("id"));
		}

	}
});
