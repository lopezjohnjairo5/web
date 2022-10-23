let lateral_nav = document.querySelector("#lateral_nav");
lateral_nav.addEventListener("click",function(e){
	if (e.target && e.target.tagName === 'A') {
		let sections = document.getElementsByClassName('container');
		for (var i = 0; i < sections.length; i++) {
			sections[i].style.display = "none";
		}
		let element = e.target.getAttribute("href").split("#")[1];
		document.getElementById(element).style.display = "block"; 
		
		//segun tamaño de la pantalla, escondemos o mostramos la navegacion
		var screenWidth = screen.width;

		// Get the browser window size
		var windowWidth = window.innerWidth;

		if (screenWidth <= 920 || windowWidth <= 920) {
			show_hide_aside_nav();
		}
	}
});