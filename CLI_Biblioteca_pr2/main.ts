import { crearLibro } from "./biblioteca.ts";
import { borrarLibro } from "./biblioteca.ts";
import { filtrarLibroGenero } from "./biblioteca.ts";

function menu() {
  console.log("******* BIENVENIDO A LA BIBLIOTECA *******");
  console.log("1-Crear Libro");
  console.log("2-Filtrar libro por genero");
  console.log("3-Borrar Libro");
  console.log("4-Salir");
  console.log("*****************************************");
}

async function main() {
  let opcion: number;
  do {
    menu();
    opcion = parseInt(prompt("Elige una opcion : "));

    switch (opcion) {
      case 1:
        crearLibro();
        break;
      case 2:
        filtrarLibroGenero();
        break;
      case 3:
        borrarLibro();
        break;
      case 4:
        console.log("Saliendo del programa...\n");
        break;
      default:
        console.log("Introduce una opcion valida del 1 al 4");
        break;
    }
  } while (opcion != 4);
}

main();
