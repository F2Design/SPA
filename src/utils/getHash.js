//generamos constante hacemos el arrow funtion, cuando solo vamos a retornar un elemento que estamos accediendo dentro de la lógica de está función
//no es necesario usar brackets {} aquí puedo usar lógica necesaria, quiero acceder a un elemento del navegador llamado location
//y obtengo el hash con ese valor, de esta forma me permite obtener el hash en el que se encuentre pero a ese hash le quiero pasar valores
//si lo llamo solo de esta forma tendria el valor así #/1/ así no sirve la estructura tengo que parsear lo elementos que va a necesitar
//para obtener el valor del id en este caso el valor 1, para eso añado mas elementos primero un slice el cuál permite eliminar el 1er elemento en este caso
//el hash y el slice y le paso que solo quiero eliminar un elemento del inicio en este caso el simbolo de gato o hash una vez esto quiero garantizar que el
//usuario por lo que sea cambio a mayusculas el contenido siempre me lo regresa en minusculas para eso uso el método toLocaleLowerCase, esto es una función no
//se pasa ningún parámetro. Otra buena práctica si ya esta exediendo el código se le puede dar enter
//luego hago un split y se hace con el de esa cadena de texto de ese string que tenemos hacemos es convertirlo a algún arreglo
//para eso le paso la regla que elimine los slash por que la aplicación tiene los slash incorporados, al pasarle este valor los retira y solo va a dejar
//el elemento que necesito. Para acceder al elemento que necesito uso la posicion en la que se encuentra que es la número [1]
//el ej de como trabaja ["", "1", ""] partiendo que la 1ra es la 0 no hay nada hay un slash la 2da es el id o el nombre del valor del hash y 3ra el elemento slash
//de esta forma solo traigo el elemento que necesito que es el id, esta es la lógica del getHash
//en dado caso que no encuentre ninguna ruta la cual esta accediendo usamos el operador or || para decir que mande solo el slash, esto nos va a mostrar
//que está accediendo a la raíz del proyecto y no está logrando navegar sobre alguna sección
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

//Ahora exporto la función
export default getHash;

//Parsear: Proceso de analizar una secuencia de símbolos a fin de determinar su estructura gramatical definida.
//También llamado análisis de sintaxis. Un parseador (parser) es un programa de computación que lleva a cabo esta tarea.
