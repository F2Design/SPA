//1ro el import de los elementos en este caso Header, Home, personajes y error404 como buena
//práctica no ponemos la extension ej Header.js por que obviamos que esto sucede, se ve mas amigable JS lo identifica por medio de babel y es
//compilado con webpack
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

//Despues de importar importamos un elemento importante que son las rutas a manejar, para eso genero un
//objeto que dentro establezco cuales son las rutas y que va a hacer render en c/u de ellas para esto genero una
//constante que le pongo routes y va a ser un objeto y establezco las rutas que tendrá la aplicación
const routes = {
  //Será el home o path inicial y esté hace render del home que acabamos de importar, la siguiente ruta es el id
  //y se establece de esa forma por que id será un valor dinámico, significa que el id que regrese la lista de los personajes
  //es a la sección que lo voy a enviar, no se cuá será el valor si puede ir entre 1 y 600 o los personajes que tenemos por eso se
  //crea esa estructura :id para identificar que este es el valor que puede ser dinámico y de esta forma empujo hacia el template
  //que hará render que en este caso son los personajes.
  //Y al final una sección contact y hago render a algún elemento en este caso un Contact
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

//Ya con las rutas y estructura principal vamos a crear el manejador, en este caso el router el que se encargara de
//mostrar los elementos según la lógica que vamos a establecer, aquí también se trabaja con obtener valores del navegador y como vamos a
//estructurarlos para saber cuál es la ruta en la cuál nuestro usuario de la aplicación a querido moverse

//Para esto creamos una constante la cuál le pondremos router y algo importante, le vamos a establecer async, vamos a trabajar con
//async y await dentro de la función por que queremos esperar hasta que algo este sucediendo para poder continuar con el bloque de la aplicación
//asyn y arrow function
const router = async () => {
  //creada la estructura ahora establecemos los template que tenemos hacia un elemento del DOM, significa que en el index.html de public
  //generamos 2 elementos Header con su id header y section con un id content, vamos a estructurar esos elementos dentro de el router y allí hacemos el
  //llamado hacia dónde vamos a empujar ciertos elementos, significa que vamos a hacer render de los templates hacia estas secciones ya identificadas los id header y content
  //vamos a hacer unas constates para saber dónde vamos a hacer render, 1ro const header le pasamos null en dado caso que no la encuentre y hacemos el or doble pipe ||
  //y le decimos document.getElementById que va a buscar ese id que revisamos, ahora vamos a repetir lo mismo para content
  //de esta forma tengo 2 ducumentos hacia dónde puedo hacer render
  const header = null || document.getElementById("header");
  const header = null || document.getElementById("content");

  //Ahora para ver que está funcionando header.innerHTML que permite mandar el template de header hacia la vista ya dentro del html y de esta forma
  //ver lo que creamos en este template para eso le digo await para que lo que llegue a tardarse el render suceda y le ponemos
  //la función de Header y de está forma estoy generando el router que tendrá la 1er lógica que en este caso es empujar el Header a mi aplicación
  header.innerHTML = await Header();
};

//exportamos
export default router;

//Hace falta para que funcione, es manipular y actualizar el archivo de entrada que es el index.js principal para eso me muevo a ese archivo
//y allí tengo que importar router y ahí creo un elemento que va a estar escuchando cuando la página este lista entonces empujar la ruta que nosotros
//estamos llamando
