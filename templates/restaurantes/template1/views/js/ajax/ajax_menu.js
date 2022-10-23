function ajax_search_items_menu(){
	json_obj = {};
	json_data = [];

	let controller = "./controllers/menu_controller.php";
	let value_select = document.getElementById("menu_dishes").value;


	json_data.push({"value_select":value_select});

	json_obj.data = json_data;

	$.ajax({
		type: "POST",
		url: controller,
		data: json_obj,
		success: function(data){
			let content_menu = document.getElementById("content_menu");
			let content = "";

	  		//alert("Gracias por contactarnos, \nen cuanto sea posible te responderemos.");
	  		new_data = JSON.parse(data);
	  		
	  		for (var i = 0; i < new_data.length; i++) {
		  		//alert(new_data[i]["name"]);
	  			content += `<div class="card_menu">`;
				content += `<img class="card_menu_img" src="${new_data[i]["pathImg"]}" alt="platillo restaurante">`;
				content += `<div class="card_menu_content">`;
				content += `<h3 class="card_menu_title">${new_data[i]["name"]}</h3>`;
				content += `<br>`;
				content += `<hr>`;
				content += `<br>`;
				content += `<p class="card_menu_description">${new_data[i]["description"]}</p>`;
				content += `</div>`;
				content += `</div>`;

	  		}
	  		content_menu.innerHTML = content;
		},
		error: function(xhr, status){
			alert("Error al enviar el formulario. \n Verifique e intente nuevamente");
		}
	});
}


let search_items = document.getElementById("menu_dishes");
search_items.addEventListener("change",ajax_search_items_menu);

//cargando los platillos del item seleccionado al momento de cargar la pagina
window.onload = ajax_search_items_menu;