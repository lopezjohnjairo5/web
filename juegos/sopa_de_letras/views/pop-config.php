<section id="pop-config" class="pops">
    <a href="" class="close-pop" id="close-pop-config">X</a>
    <h2>Configuracion</h2>
    <br> 
    <label for="error-sound">
        <span>Error</span><!--sonidos como click del btn, sonido reloj, ganar, perder.-->
        <input type="range" min="0" max="1" step="0.1" name="error-sound" id="error-sound" value="0.5">
    </label>
    <label for="correct-sound">
        <span>Correcto</span><!--sonidos como click del btn, sonido reloj, ganar, perder.-->
        <input type="range" min="0" max="1" step="0.1" name="correct-sound" id="correct-sound" value="0.5">
    </label>
    <label for="win-sound">
        <span>Ganar</span><!--sonidos como click del btn, sonido reloj, ganar, perder.-->
        <input type="range" min="0" max="1" step="0.1" name="win-sound" id="win-sound" value="0.7">
    </label>
    
    <label for="lose-sound">
        <span>Perder</span><!--sonidos como click del btn, sonido reloj, ganar, perder.-->
        <input type="range" min="0" max="1" step="0.1" name="lose-sound" id="lose-sound" value="0.5">
    </label>
    <label for="clock-sound">
        <span>Reloj</span><!--sonidos como click del btn, sonido reloj, ganar, perder.-->
        <input type="range" min="0" max="1" step="0.1" name="clock-sound" id="clock-sound" value="0.5">
    </label>
    <label for="background-music">
        <span>Música</span>
        <input type="range" min="0" max="1" step="0.1" name="background-music" id="background-music" value="0.2">
    </label>
    <button id="save-audio-config" class="save-btn-pop">Guardar</button>
</section>
