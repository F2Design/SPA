//genero la constante con el nombre del archivo y el arrow function, recibe route
const resolveRoutes = (route) => {
  //va a necesitar pasar un valor particular que es la ruta obtenida por la función anterior, aquí compruebo si route es igual a slash y si no es
  //a un id y en caso contrario es una sección por la cuál el usuario esta navegando así es la lógica
  //hago un if y aquí analizando el proyecto en este caso la api en particular tiene n cantidad de personajes, esa es la cantidad de elementos que podemos
  //obtener ciertos ids como no son mas de 1000 los carácteres por los cuáles va a obtener el id al momento de hacer el gt hash solo son 3 niveles
  //por ende genero una validación que me diga si en dado caso obtuvo un id este no puede ser mayor a 3 carácteres y si no obtuvo ningún id
  //solo regresa 1 valor que es el slash entonces si garantizo que es menor que 3 elementos entonces está entrando en el flujo de la aplicación
  //para eso pregunto a route.length para saber si cuantos elementos tiene de longitud y decirle si es menor o = a 3 si se cumple una condición que necesito saber si es
  //parte del home o algún id que este accediendo
  if (route.length <= 3) {
    //Para esto creo una variable que le asigno valid route para saber si esta es = al slash que en este caso no hay ninguna ruta dentro de un hash y poder retornar esta ruta
    //o si no retornar el valor de id
    //pogo === que garantiza que si sea en valor y tipo, es si el valor que sea route en este caso sea string sea igual en string, en este caso es el tipo y el valor / entonces si
    //es verdad ? retornare a route y luego un if ternario : que en dado caso que no sea = a route entonces esto es un id de esta forma retorno /:id de esta forma garantiza que no tengo
    //un valor aleatorio aquí, sino que estoy cumpliendo con la sección de rutas que acabamos de establecer en nuestro archivo de rutas
    let validRoute = route === "/" ? route : "/:id";
    //Retorno de validRoute
    return validRoute;
  }
  //Pero si nosotros no cumplimos con está validación, imaginemos que hemos entrado a la sección de about, about es mayor a 3 y no es parte de la lógica papal que en este caso es el home
  //o un id dentro de la ruta entonces debemos retornar este elemento según la sección para despues compararlo con la sección de rutas
  //entonces hacemos un retorno, ya no necesitamos else, si entra esta confuguración y retorna hasta aquí termina nuestro programa pero en dado caso que no entrara al if
  //va a continuar nuestro programa y aquí es dónde podemos retornar un elemento, usamos template literals `` y allí mandamos en dado caso la ruta que recibimos. Esto
  //nos retornara / about y de esta forma lo podemos comparar con nuestra sección de rutas
  return `/${route}`;
};
//Hasta aquí tenemos la lógica que se encargara de resolver las rutas, tenemos que exportar
export default resolveRoutes;
//Ahora vamos a la sección de rutas routes, allí hacemos import de estos elementos que creamos
