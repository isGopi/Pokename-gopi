const { getRandomPokemon, getPokemonNameById, getPokemonIdByName } = require("pokename-gopi");
const pokemon = require("pokename-gopi");

console.log(getRandomPokemon("id"));
// or console.log(pokemon.getRandomPokemon("id"));
// it returns with a random pokemon id.

console.log(getRandomPokemon("name"));
// or console.log(pokemon.getRandomPokemon("name"));
// returns with a random pokemon name

console.log(getRandomPokemon())
// or console.log(pokemon.getRandomPokemon());
// throws error as getRandomPokemon should be a name or id.


console.log(getPokemonNameById("151"));
// or console.log(pokemon.getPokemonNameById(151));
// returns with pokemon name.

console.log(getPokemonIdByName("squirtle"));
// or console.log(pokemon.getPokemonIdByName("squirtle"));
// returns with pokemon id.