function ajax_send_galery_info(event){
	event.preventDefault();
	let controller = "./controllers/galery_panel_controller.php";
	
	let galery_title = $("#galery_title").val();
	let galery_message = $("#galery_message").val();

    var frmData = new FormData;
    frmData.append("galery_title",galery_title);
    frmData.append("galery_message",galery_message);
    frmData.append("imagen",$("#galery_img_input")[0].files[0]);


	resp = galery_title != "" && galery_message != ""; 

	if (resp) {

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmData,
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


let send_galery_info = document.getElementById("send_galery_info");
send_galery_info.addEventListener("click",function(event){
	ajax_send_galery_info(event);
});
