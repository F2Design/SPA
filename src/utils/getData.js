//Creo una constante para asignar el valor de una API como el proyecto no va a tener de valor dinámico este elemento sino que si debemos garantizar que trabaja
//sobre está API por que está es la estructura de la aplicación vamos a generar esa API llamandola con la url, con esto tenemos el acceso a los personajes
const API = "https://rickandmortyapi.com/api/character/";

//Ahora genero esa función getData que dará el llamado de está función en este caso la API y traer los datos para hacer render dentro de la aplicación
//también uso async/await por que voy a esperar que esto suceda este recibe un id que puede ser el id del personaje que este usando o necesite para hacer render
const getData = async (id) => {
  //con la estructura necesaria para generar la lógica que será que si la función no recibe un id entonces va a traer el llamado por defecto que es API, pero si mando un id
  //como parámetro a esta función entonces genero una nueva url a la cuál va a llamar al personaje que deseo
  //creo la constante y hago el if ternario que hemos venido haciendo = si if existe ? se retornara con los templates literals una estructura nueva que va a permitir decir que traiga
  //API es decir la estructura superior que tenemos y concatena el id que esta recibiendo, le paso ese valor alli{id} si id no existe : que retorne solamente a API y traerá todos los personajes
  //para hacer render del home, de esta forma identifico hacia donde se mueve el usuario. Ya con la lógica establecida ahora...
  const apiUrl = id ? `${API}${id}` : API;
  //hago el llamado al fetch de estos elementos para eso trabajo con el standar que es encapsular estos llamados en un try cath
  try {
    //Hago la lógica para la estructura de la función que usa async, generando una constante llamada response que hara el llamado a fetch entonces uso await
    //para que espere que esto suceda uso fetch que hará el llamado a apiUrl
    const response = await fetch(apiUrl);
    //Ya con está estructura tengo que convertir el elemento que es la respuesta que nos da el servidor a un objeto JSON que pueda ser iterable
    //para eso uso una constante que llamare data y será = a await, voy a esperar nuevamente que esto suceda con un response.json y ya lo estoy convirtiendo
    const data = await response.json();
    //si es correcto hago un return de data
    return data;
    //ahora genero el catch pos si tengo algún error, capturo el error de lo que sucede
  } catch (error) {
    //un console que me muetre el error que está sucediendo
    console.log("Fetch Error", error);
  }
};

//Ahora tengo que exportar
export default getData;

//Ahora voy a la seccion Page dónde hago el 1er llamado de está función, allí usare Home y allí lo importo
