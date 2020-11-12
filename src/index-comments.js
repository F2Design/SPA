//console.log("Hello"); ya no necesitamos el console.log
//Hace falta para que funcione, es manipular y actualizar el archivo de entrada que es el index.js principal para eso me muevo a ese archivo
//y allí tengo que importar router y ahí creo un elemento que va a estar escuchando cuando la página este lista entonces empujar la ruta que nosotros
//estamos llamando, vemimos del index.js de routes

//importamos las rutas
import router from "./routes";

//algo que tenemos que garantizar cuándo estemos usando los import es que si hemos exportado lo que estemos haciendo, eso lo compruebo revisando el index.js de routes
//y confirmar que si exportamos

//Ahora uso un valor que estña disponible en el navegador que se llama window, el cuál permite saber si esta en el contexto de la aplicación por eso uso
//widow y uso un manejador de eventos addEventListener que va a estar escuchando si algo sucede en este caso si la carga de la página a sucedido, recordemos que las aplicaciones cargan
//una sola vez todos los archivos, estos archivos cuando esten listos y cargados dentro del navegador vamos a ejecutar el código que hemos recibido y allí le
//paso el valor, lo que va a escuchar que es el evento load y despues le paso algo una función que en este caso es una función anonima
//y establecer código o una función que estoy trayendo desde otra sección que en este caso es router
window.addEventListener("load", router);

//Guardo y reviso el entorno de desarrollo local para ver que tengo render de el header

//Luego de trabajar en los otros archivos tengo que adicionar un nuevo addEventListener que se encargará de escuchar las rutas en este caso el
//hash al cuál me estoy moviendo, luego le paso el valor de lo que va a escuchar que sera hash, que cuando cambie un hashchange va a desencadenar una función que sería
//la lógica que acabamos de agregar y le pasamos también router.
window.addEventListener("hashchange", router);
//de esta forma ya tenemos la lógica para que cuando cargue por 1ra vez la página y para cuando hay 1 cambio dentro deun hash

//vamos a proba en el navegador npm run start y vemos el render del header
/* 100tifi.co
About
name */
//Y Name que es el templete del home ya está haciendo render la aplicación si muevo a Name o pongo el cursor allí veo que como
//habiamos establecido nos muestra el valor de id de 1 y al darle clic a Name nos muestra la lógica de getHash y resolveroute funciona
//significa que está leyendo el hash /1 lo transforma para obtener el valor y si el valor es menor a 3 elementos significa que es un id
//o es el home, hacemos la validación para saber si no hay un / y si existe el / entonces es home y eso es lo que retornamos en dado caso que
//exista mas de 1 elemento dentro de esta ruta significa que estamos accediendo a un id y por ende podemos hacer el llamado a este template
//en dado caso que queramos movernos a about al darle clic nos muestra el error 404 ya que no tenemos un template de about
