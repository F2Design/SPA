import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
//importo el elemento que acabo de crear getHash y resolveRoutes
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  //despues de importar getHash y resolveRoutes que acabamos de crear voy a generar la lógica que necesitamos, para esto hago unas variables
  //con let y hago el llamado a getHash, obtengo el hash en el que se encuentra o la seccion a la que se está moviendo
  let hash = getHash();
  //luego manejo a ruta y await, tengo que esperar por que results se puede tardar en obtener primero el hash, pasarlo a esta función hacer las validaciones
  //necesarias y retornar el valor en el caso que sea necesario, luego resolveRoutes que es la función y le paso el hash que acabo de obtener
  let route = await resolveRoutes(hash);
  //De está forma ya tengo route listo para trabajar. Ahora hago una nueva variable llamada render la cual va a contener el valor de las rutas que acabo de establecer que son las líneas 9 a la 13
  //comparada sobre la que estamos obteniendo de la navegación del usuario, genero let y lo llamare render y le paso una validación un if ternario, primero uso a
  //routes que son las rutas establecidas y uso bracket notacion [] para pasarle el string que quiero encontrar, es como si quisiera acceder a routes."/" y esto me retornaria el home
  //estoy pasando de forma dinámica ese valor y uso el bracket notation [] y le mando route que es el valor que acabo de crear antes
  //routes es la estructura y route es la que obtengo de la estructura que traigo del hash y luego del result, como uso un if
  //ternario hago ? si esto routes[route] me retorna un elemento lo muestro en este bloque por eso mando nuevamente ese valor, pero si no puedo
  //acceder a ese elemento significa que la ruta no existe tengo que mostrar el error 404 por eso muestro luego ese error 404 dentro del render
  let render = routes[route] ? routes[route] : Error404;
  //Ahora a content que es la sección dónde va a vivir la aplicación según se mueva el usuario tengo que hacer un innerHTML de render
  //1ro content que establecimos en la línea 17 luego le pasamos await por lo que tenga que esperar para ejecutarse y luego llamo render, que hará render de la aplicación
  content.innerHTML = await render();
};

export default router;

//Ahora solo nos falta lo último por hacer en el index.js raíz
