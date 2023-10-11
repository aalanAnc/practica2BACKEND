type Libro = {
  id: number;
  title: string;
  author: string;
  pages: number;
  genre: string;
};

let libros: Libro[] = [];

export async function crearLibro(): Promise<void> {
  let myId: number;
  let idCreada;

  /** bucle donde mientras el id introducido coincida con un id ya existente que busca con find
   * se necesitara que introduzca otro id
   */
  do {
    myId = parseInt(prompt("Introduce id del libro: "));
    idCreada = libros.find((l) => l.id === myId);

    if (idCreada) {
      console.log("ID ya creado... A continuacion itroduce otro.");
    }
  } while (idCreada);

  const myTitle = prompt("Introduce el titulo del libro: ");
  const myAuthor = prompt("Introduce el nombre del autor: ");
  const myPages = parseInt(
    prompt("Introduce el numero de paginas que tiene el libro : "),
  );
  const myGenre = prompt("Introduce el genero de tu libro: ");

  const _Libro: Libro = {
    id: myId,
    title: myTitle,
    author: myAuthor,
    pages: myPages,
    genre: myGenre,
  };
  libros.push(_Libro);
}

export async function borrarLibro(): Promise<void> {
  const buscarLibro = parseInt(
    prompt("Introduce el id del libro que quieres borrar : "),
  );
  libros = libros.filter((l) => l.id !== buscarLibro);
  console.log("Libro eliminado exitosamente");

  /** he buscado informacion y me base de este sitio:
   * https://alextomas.com/blog/cinco-formas-eliminar-elementos-array-javascript
   */
}

export async function filtrarLibroGenero(): Promise<void> {
  const buscarGenero = prompt("Introduce el genero que quieres buscar : ");
  //esta funcion solo muestra los titulos de los libros con el mismo genero
  console.log("Los libros que tienen ese genero son : ");
  libros.filter((l) => l.genre === buscarGenero).forEach((nombres) =>
    console.log(nombres)
  );
}
