function ajax_send_contact(){
	let controller = "./controllers/contact_controller.php";

	json_obj = {};
	json_data = [];

	cn = $("#client_name").val();
	ce = $("#client_email").val();
	cp = $("#client_phone").val();
	sub = $("#subject").val();
	mss  = $("#message").val();
	tc  = $("#terms_conditions:checked").val();
	//alert(tc);
	resp = cn != "" && ce != ""  && cp != "" && sub != "0" && mss != "" && tc != undefined; 

	if (resp) {
		json_data.push({
	    "name":cn,
	    "email":ce,
	    "phone":cp,
	    "subject":sub,
	    "message":mss});

		json_obj.data = json_data;

		$.ajax({
			type: "POST",
			url: controller,
			data: json_obj,
			success: function(data){
		  		//alert("Gracias por contactarnos, \nen cuanto sea posible te responderemos.");
		  		alert(data);
			},
			error: function(xhr, status){
				alert("Error al enviar el formulario. \n Verifique e intente nuevamente");
			}
		});
	}else{
		alert("Todos los campos son obligatorios.\nVerifique e intente nuevamente.");
	}

}


let send_contact = document.getElementById("send_contact");
send_contact.addEventListener("click",ajax_send_contact);