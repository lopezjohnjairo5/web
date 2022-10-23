<nav>
	<a id="hamburguer"><img src="<?php echo IMGS;?>hamburguer.png"></a>
	<ul id="links_navbar" class="">
		<li id="logo"><img src="<?php echo $general_info[0]['pathLogo'];?>" alt="logo restaurante"></li>
		<li><a href="#">Inicio<div class="bottom_line"></div></a></li>
		<li><a href="#ours">Nosotros<div class="bottom_line"></div></a></li>
		<li><a href="#menu">Menú<div class="bottom_line"></div></a></li>
		<li><a href="#contact">Contácto<div class="bottom_line"></div></a></li>
		<li class="socials">
			<a href="<?php echo $general_info[0]["facebookLink"];?>" target="_blank">
				<img src="<?php echo IMGS;?>facebook.png" alt="facebook">
			</a>
			<a href="<?php echo $general_info[0]["twitterLink"];?>" target="_blank">
				<img src="<?php echo IMGS;?>twitter.png" alt="twitter">
			</a>
			<a href="<?php echo $general_info[0]["youtubeLink"];?>" target="_blank">
				<img src="<?php echo IMGS;?>youtube.png" alt="youtube">
			</a>
		</li>
	</ul>	
</nav>	
