function validateMail(element){
	/*
	function validateMail
	decription:
		funcion encargada de validar un correo electronico
		de un elemento pasado por parametro
	params:
		- element(obj) : referencia al elemento que contiene el correo a validar 
	*/
	regex = /[A-Za-z0-9_-]+@[A-Za-z]+.[A-Za-z]{2,}.*[A-Za-z]*/g;
	result = regex.test(element.value);
	
	//element.style.color = "white";
	if (result) {
		element.style.backgroundColor = "rgb(100,200,100)";
	} else {
		element.style.backgroundColor = "rgb(200,100,100)";
	}
}

let emailInput = document.getElementById('email');
emailInput.addEventListener('keyup',function(){
	if (this.value !== '') {
		validateMail(this);
	} else {
		this.style.backgroundColor = "white";
		//this.style.color = "black";
	}
});
