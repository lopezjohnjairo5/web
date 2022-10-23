function set_color_element(color,element){
	el = document.getElementById(element);
	el.value = color;
}

restart_principal_color = document.getElementById("restart_principal_color");
restart_secondary_color = document.getElementById("restart_secondary_color");

restart_principal_color.addEventListener("click",function(e){
	e.preventDefault();
	set_color_element("#339384","theme_principal_color");
});
restart_secondary_color.addEventListener("click",function(e){
	e.preventDefault();
	//5abfb0 --- 44a495
	set_color_element("#5abfb0","theme_secondary_color");	
});