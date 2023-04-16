const { getRandomPokemon, getPokemonNameById, getPokemonIdByName } = require("pokename-gopi");
const pokename = require("pokename-gopi");

console.log(getRandomPokemon("id"));
// or console.log(pokename.getRandomPokemon("id"));
// it returns with a random pokemon id.

console.log(getRandomPokemon("name"));
// or console.log(pokename.getRandomPokemon("name"));
// returns with a random pokemon name

console.log(getRandomPokemon())
// or console.log(pokename.getRandomPokemon());
// throws error as getRandomPokemon should be a name or id.


console.log(getPokemonNameById("151"));
// or console.log(pokename.getPokemonNameById(151));
// returns with pokemon name.

console.log(getPokemonIdByName("squirtle"));
// or console.log(pokename.getPokemonIdByName("squirtle"));
// returns with pokemon id.