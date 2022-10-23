function put_img_element(canv,element){
	/*
	funcion encargada de poner una imagen en un canvas
	pasado por parametro
	args
	- canv = canvas sobre el cual irá la imagen
	- element = ruta + nombre + extension de la imagen que se pondrá en el canvas
	*/
	new_element = "" 
	if(element[0] == element[1]){
		//alert("doble punto");
		for (var i = 1; i < element.length; i++) {
			new_element += element[i];
		}
	}else{
		new_element += element;
	}

	//alert(new_element);
	const imgPrev = document.querySelector(canv);
	var ctxIP = imgPrev.getContext("2d");
	var imgQR = new Image();

	if (!new_element || !new_element.length) {
		imgPrev.src = "";
		return;
	}

	
	imgQR.src = new_element;
	
	imgQR.onload = function(){
		ctxIP.drawImage(imgQR,0,0,imgPrev.width,imgPrev.height);
	}
}



function ajax_put_info_panel(){

	let controller = "./controllers/search_info_panel_controller.php";
	//alert("info");
	
	let info = "info";
		
    var frmDataContact = new FormData;
    frmDataContact.append("info",info);
	
	$.ajax({
		type: "POST",
		url: controller,
		//data: json_obj,
		data: frmDataContact,
		processData: false,
        contentType: false,
        cache: false,
		success: function(data){
			let table_panel_menu = document.getElementById("table_menu_content");
			let table_configuration_content = document.getElementById("table_configuration_content");
			table_configuration_content.innerHTML = "";
			table_panel_menu.innerHTML = "";
			let content_menu_panel = "";
			let content_configuration_panel = "";

		  	new_data = JSON.parse(data);
	  		for (var i = 0; i < new_data.length; i++) {
	  			//agregando informacion

	  			//lateral nav
				document.getElementById("shortcut_icon").href = new_data[i]["array_general"][0]["pathIco"];
				document.getElementById("logo_bussines_img").src = new_data[i]["array_general"][0]["pathLogo"];

	  			//panel - general
				document.getElementById("site_name").value = new_data[i]["array_general"][0]["name"];
				document.getElementById("link_facebook").value = new_data[i]["array_general"][0]["facebookLink"];
				document.getElementById("link_twitter").value = new_data[i]["array_general"][0]["twitterLink"];
				document.getElementById("link_youtube").value = new_data[i]["array_general"][0]["youtubeLink"];

				//panel - galeria
				document.getElementById("galery_title").value = new_data[i]["array_galeria"][0]["title"];
				document.getElementById("galery_message").value = new_data[i]["array_galeria"][0]["description"];
				

				//panel - nosotros
				document.getElementById("ours_title").value = new_data[i]["array_nosotros"][0]["title"];
				document.getElementById("ours_message").value = new_data[i]["array_nosotros"][0]["description"];


				//panel - menu
				for (var j = 0; j < new_data[i]["array_menu"].length; j++) {
					//alert(new_data[i]["array_menu"][j]["name"]);
					content_menu_panel += `<tr>`;
					content_menu_panel += `<td>${new_data[i]["array_menu"][j]["name"]}</td>`;
					content_menu_panel += `<td>${new_data[i]["array_menu"][j]["description"]}</td>`;
					content_menu_panel += `<td><a href="#"><img src="${new_data[i]["array_menu"][j]["pathImg"]}" class="preview_table_menu_img"></a></td>`;
					content_menu_panel += `<td>${new_data[i]["array_menu"][j]["idType"]} - ${new_data[i]["array_menu"][j]["type"]}</td>`;
					content_menu_panel += `<td>${new_data[i]["array_menu"][j]["price"]}</td>`;
					content_menu_panel += `<td>`;
					content_menu_panel += `<a href="#table_menu_content" id="idDelete-${new_data[i]["array_menu"][j]["idMenu"]}" class="delete_menu_item">Eliminar</a>`;
					content_menu_panel += `</td>`;
					content_menu_panel += `</tr>`;
				}
	  		

				//panel - contacto
				let wapp = new_data[i]["array_contacto"][0]["whatsapp"].split(" ");
				document.getElementById("contact_phone").value = new_data[i]["array_contacto"][0]["phone"];
				document.getElementById("contact_indicators").value = wapp[0];
				document.getElementById("contact_whatsapp").value = wapp[1];
				document.getElementById("contact_email").value = new_data[i]["array_contacto"][0]["email"];
				document.getElementById("contact_iframe").value = new_data[i]["array_contacto"][0]["map"];

				//panel - configuracion
				for (var j = 0; j < new_data[i]["array_configuracion"].length; j++) {
					content_configuration_panel += `<tr>`;
					content_configuration_panel += `<td>${new_data[i]["array_configuracion"][j]["name"]}</td>`;
					content_configuration_panel += `<td>${new_data[i]["array_configuracion"][j]["email"]}</td>`;
					content_configuration_panel += `<td><a href="#" id="user-${new_data[i]["array_configuracion"][j]["tokenUser"]}" class="delete_user_item">Eliminar</a></td>`;
					content_configuration_panel += `</tr>`;
				}

				//agregando imagenes 
				//icono y logo
				put_img_element("#canvas_icon_img",new_data[i]["array_general"][0]["pathIco"]);
				put_img_element("#canvas_logo_img",new_data[i]["array_general"][0]["pathLogo"]);
				//galeria
				put_img_element("#canvas_galery_img",new_data[i]["array_galeria"][0]["pathImg"]);
				//nosotros
				put_img_element("#canvas_ours_img",new_data[i]["array_nosotros"][0]["pathImg"]);
				put_img_element("#canvas_ours_img_people",new_data[i]["array_nosotros"][0]["pathImgPeople"]);
				//alert(new_data[i]["array_nosotros"][0]["pathImg"]);
	  		}

  			table_panel_menu.innerHTML += content_menu_panel;
  			table_configuration_content.innerHTML += content_configuration_panel;

		},
		error: function(xhr, status){
			alert("Error al enviar el formulario. \n Verifique e intente nuevamente");
		}
	});

}

window.addEventListener("load", function() {
	//alert("en ajax");
	ajax_put_info_panel();
});
