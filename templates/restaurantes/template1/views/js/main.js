/*menu navbar*/

let ham_btn = document.getElementById('hamburguer');
let navbar = document.getElementById('links_navbar');

ham_btn.addEventListener("click",function(){
	navbar.classList.toggle("hidden"); 
});

navbar.addEventListener("click",function(e){
	//console.log(e.target);
	if (e.target && e.target.tagName === 'A') {
		//segun tamaño de la pantalla, escondemos o mostramos la navegacion
		var screenWidth = screen.width;

		// Get the browser window size
		var windowWidth = window.innerWidth;

		if (screenWidth <= 920 || windowWidth <= 920) {
			navbar.classList.toggle("hidden"); 
		}
	}
});


/*recargando al redimensionar */
window.addEventListener("resize",function(){
	location.reload();	
});
