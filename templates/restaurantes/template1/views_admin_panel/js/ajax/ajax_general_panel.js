function ajax_send_general_info(event){
	event.preventDefault();
	let controller = "./controllers/general_panel_controller.php";
	
	name = $("#site_name").val();
	facebook = $("#link_facebook").val();
	twitter  = $("#link_twitter").val();
	youtube  = $("#link_youtube").val();
	
	let frmDataGP = new FormData;
    frmDataGP.append("name",name);
    frmDataGP.append("facebook",facebook);
    frmDataGP.append("twitter",twitter);
    frmDataGP.append("youtube",youtube);
    frmDataGP.append("logo",$("#logo_img_path")[0].files[0]);
    frmDataGP.append("icon",$("#icon_img_path")[0].files[0]);

	resp = name != "" && facebook != "" && twitter != "" && youtube != ""; 
	
	if (resp) {
	

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmDataGP,
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


let send_general_info = document.getElementById("send_general_info");
send_general_info.addEventListener("click",function(event){
	ajax_send_general_info(event);
});
