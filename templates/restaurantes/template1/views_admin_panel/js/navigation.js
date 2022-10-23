function show_hide_aside_nav(){
	let lateral_nav = document.querySelector("aside");
	lateral_nav.classList.toggle("hidde");
}

let ham = document.getElementById("hamburguer_aside");
ham.addEventListener("click",show_hide_aside_nav);
