import { getPokeApi } from "./getPokeApi.ts";

//me funciona poniendo en terminal : deno run main.ts

async function main() {
  const pokemon = prompt("Escribe el nombre del pokemon que deseas buscar : ");
  try {
    const pokemonData = await getPokeApi(pokemon);
    console.log("Nombre : ", pokemonData.nombrePoke);
    console.log("tipo : ", pokemonData.tipoPoke);
    console.log("id Pokemon : ", pokemonData.idPoke);
  } catch (error) {
    console.error(error);
  }
}

main();
