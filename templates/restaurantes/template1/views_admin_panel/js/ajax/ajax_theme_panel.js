function ajax_send_theme_info(event){
	event.preventDefault();
	let controller = "./controllers/theme_panel_controller.php";
	
	principalColor = $("#theme_principal_color").val();
	secondaryColor = $("#theme_secondary_color").val();
	
	let frmDataThP = new FormData;
    frmDataThP.append("principalColor",principalColor);
    frmDataThP.append("secondaryColor",secondaryColor);

	resp = principalColor != "" && secondaryColor != ""; 
	
	if (resp) {
	

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmDataThP,
			processData: false,
            contentType: false,
            cache: false,
			success: function(data){
		  		
		  		alert(data);
		  		console.log(data);
			},
			error: function(xhr, status){
				alert("Error al enviar el formulario. \n Verifique e intente nuevamente");
			}
		});
	}else{
		alert("Todos los campos son obligatorios.\nVerifique e intente nuevamente.");
	}

}


let send_theme_info = document.getElementById("send_theme_info");
send_theme_info.addEventListener("click",function(event){
	//alert("aquii");
	ajax_send_theme_info(event);
});
