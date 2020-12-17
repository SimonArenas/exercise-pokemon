const APIUrl = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemons = (name) => {
  return fetch(`${APIUrl}${name}`).then((response) => response.json());
};
