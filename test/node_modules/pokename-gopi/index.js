'use-strict';
const POKEDEX_TABLE = require("./data/pokedex.json");

module.exports.getPokemonNameById = (Id) => {
    if (isNaN(Id)) throw new TypeError("Provided value in  getPokemonNameById() isn't a number.");
    else return POKEDEX_TABLE[Id]
}
module.exports.getPokemonIdByName = (string) => {
    if (typeof string !== "string") throw new TypeError("Provided value in getPokemonIdByName() isn't a string.")
    const findPokemon = Object.keys(POKEDEX_TABLE)
        .find(key => POKEDEX_TABLE[key].toLowerCase() == string.toLowerCase());
    if (!findPokemon) return null && new TypeError("No pokemon found with that name.");
    else return findPokemon;
}
module.exports.getRandomPokemon = (returnType = '') => {
    const pokemon = Object.entries(POKEDEX_TABLE);
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    if (returnType === '' || returnType === undefined) {
      throw new TypeError('Please provide a valid return type ("name" or "id").');
    } else if (returnType === 'id') {
      return pokemon[randomIndex][0];
    } else if (returnType === 'name') {
      return pokemon[randomIndex][1];
    }
  };
  
