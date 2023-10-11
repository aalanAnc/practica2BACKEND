type Pokemon = {
  nombrePoke: string;
  tipoPoke: string;
  idPoke: number;
};

/**
 * Me base en la clase del viernes con Alberto Valero
 * que hicimos conexion de apis.
 */

export const getPokeApi = async (nombrePoke: string): Promise<Pokemon> => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const url = `${BASE_URL}${nombrePoke}`;
  const data = await fetch(url); //aqui es donde esta la informacion de todos los pokemons

  if (data.status === 200) {
    const json = await data.json(); //el pokemon especifico

    //devuelve la informacion del pokemon a buscar
    return {
      nombrePoke: json.name,
      tipoPoke: json.type,
      idPoke: json.id,
    };
  } else {
    throw Error("No se encontro el Pokemon");
  }
};
