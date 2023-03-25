let counter = 20;
let coincidences = [];

function turnCard(card){
	let sizeX = card.clientWidth;
	let original = 150;
	let margin = 0;
	let orientation = "desc";

	changeSize = setInterval(()=>{
		if (orientation == "desc") {		
			card.style.width = sizeX + 'px';
			card.style.marginLeft = margin + 'px';
			sizeX -= counter;
			margin += counter/2;
			if (sizeX <= 0) {
				orientation = "asc";
			}
		} else {
			card.style.width = sizeX + 'px';
			card.style.marginLeft = margin + 'px';
			sizeX += counter;
			margin -= counter/2;
			if (sizeX > original) {
				console.log("limpiando el intervalo...");
				clearInterval(changeSize);
			}
		}
	},10);
}

let content = document.getElementById('content');
content.addEventListener('click',function(e){
	e.preventDefault();
	let element = e.target;
	if (element.tagName == 'IMG') {
		let button = element.parentNode;
		//coincidences.push(button.getAttribute("data-value")); //almacenamis el valor que tenga para comprobar si se selecciono la pareja
		coincidences.push(button.id); //almacenamis el valor que tenga para comprobar si se selecciono la pareja

		button.disabled = true;
		turnCard(button);
		button.disabled = false;
		button.firstElementChild.classList.toggle('hidden');
		
		//validamos si se encontró la pareja
		if (coincidences.length > 0 && coincidences.length < 3) {
			console.log("coincidences: "+coincidences);
			card1 = document.getElementById(coincidences[0]); 
			card2 = document.getElementById(coincidences[1]); 
			val1 = card1.getAttribute("data-value");
			val2 = card2.getAttribute("data-value");
			
			//si los 2 valores del array son iguales, quiere decir que son pareja,
			//en este caso las escondemos y vaciamos el array 
			if (val1 == val2) {
				console.log("pareja encontrada.");
				card1.style.display = "none";
				card2.style.display = "none";
				coincidences = [];
			} else {
				coincidences = [];
				card1.firstElementChild.classList.toggle('hidden');
				card2.firstElementChild.classList.toggle('hidden');
			}
		} else {
			coincidences = [];			
		}
	}
});
