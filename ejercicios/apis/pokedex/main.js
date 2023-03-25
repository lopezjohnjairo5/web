const pokemon_api = (num) => {
    url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    fetch(url)
    .then( e => e.json())
    .then(resp => {
        let pokemonPrev = document.getElementById("pokemon-prev"),
            description = document.getElementById("description"),
            imgPath = resp.sprites.other.dream_world.front_default,
            name = resp.name,
            height = resp.height,
            moves = [],
            moves_t = "-";
            resp.moves.forEach( el => {
                moves.push(el.move.name); 
            });
            moves_t += moves.join("\n-");

        // console.log(resp);
        // console.log(name);
        // console.log(height);
        // console.log(moves);
        description.value = `Nombre: ${name}\n\nAltura: ${height}\n\nMovimientos:\n${moves_t}`;
        pokemonPrev.src = imgPath;
    });
}

let num = 1;
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", () => {
    if (num >= 2) {
        num--;
    }
    pokemon_api(num);
});
rightArrow.addEventListener("click", () => {
    num++;
    pokemon_api(num);
});
 