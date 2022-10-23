function ajax_send_ours_info(event){
	event.preventDefault();
	let controller = "./controllers/ours_panel_controller.php";
	
	let ours_title = $("#ours_title").val();
	let ours_message = $("#ours_message").val();

    var frmDataOurs = new FormData;
    frmDataOurs.append("ours_title",ours_title);
    frmDataOurs.append("ours_message",ours_message);
    frmDataOurs.append("imagen_ours",$("#ours_img_input")[0].files[0]);
    frmDataOurs.append("imagen_ours_people",$("#ours_img_people_input")[0].files[0]);

	resp = ours_title != "" && ours_message != ""; 

	if (resp) {

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmDataOurs,
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


let send_ours_info = document.getElementById("send_ours_info");
send_ours_info.addEventListener("click",function(event){
	ajax_send_ours_info(event);
});
