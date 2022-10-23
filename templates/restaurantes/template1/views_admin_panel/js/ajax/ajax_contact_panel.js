function ajax_send_contact_info(event){
	event.preventDefault();
	let controller = "./controllers/contact_panel_controller.php";
	
	let contact_phone = $("#contact_phone").val();
	let contact_indicators = $("#contact_indicators").val();
	let contact_whatsapp = $("#contact_whatsapp").val();
	let contact_email = $("#contact_email").val();
	let contact_iframe = $("#contact_iframe").val();
	
    var frmDataContact = new FormData;
    frmDataContact.append("contact_phone",contact_phone);
    frmDataContact.append("contact_indicators",contact_indicators);
    frmDataContact.append("contact_whatsapp",contact_whatsapp);
    frmDataContact.append("contact_email",contact_email);
    frmDataContact.append("contact_iframe",contact_iframe);
    

	resp = contact_phone != "" && contact_indicators != "" && contact_whatsapp != "" && contact_email != "" && 	contact_iframe != "";

	if (resp) {

		$.ajax({
			type: "POST",
			url: controller,
			//data: json_obj,
			data: frmDataContact,
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


let send_contact_info = document.getElementById("send_contact_info");
send_contact_info.addEventListener("click",function(event){
	ajax_send_contact_info(event);
});
