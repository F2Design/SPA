//vengo de crear el archivo getData y voy a importar la fucnión que acabo de crear los elementos, con eso puedo usar la función dentro
//de este template...
import getData from "../utils/getData";

const Home = async () => {
  //...voy a hacer el llamado de la API tengo que convertir la función en async y await, para eso tengo que en la líne 5 adicionar ese llamado async
  //y aqui luego el await creando una constante y a esta le digo que será await que espere hasta que getData nos retorne algo y hacemos el llamado a la función
  //como esta sección es el Home no pasaré un id por ende hara el llamado a la API estandar que nos trae todos los personajes que tiene la API
  //ya con este valor vamos ahora voy a convertir el template para poder hacer iteración por c/u de los personajes que recibimos, separo el elemento en la línea 13 por que allí
  //voy a generar la lógica y ahorita usare ese template, voy a traer un valor nuevo que será la asigancion en memoria de characters y le digo como yo se que el resultado
  //que nos manda o todos los personajes que estándentro de results y esto como es un elemento que puedo iterar uso el método map que me permite retornar un nuevo arreglo
  //con la estructura que estoy pasando que será el template que tengo establecido en las líneas siguientes pero con los valores que voya a iterar
  //como tengo map retorno los personajes que recibo y por c/u genero un template para cada uno de este character solo uno y genero un arrow functions con template
  //literals por que allí establecere esta lógica copio y pego el html que estaba fuera y ahora dentro de este tempate voy a poder acceder a las variables de
  //cada personaje, nombre imagen etc, usando el valor character voy a cambiar los elementos como el id que tenia  <a href="#/1/"> lo hare de forma dínamica  <a href="#/${character.id}/">
  //de esta forma genero dinámicamente los elementos y haciendo render del llamado a la API igual el source src le doy la estructira pero con la imagen
  //alt igual le digo que es el personaje que estoy iterando y el nombre y en el  <h2>Name</h2> igual ya tengo la estructura pero antes tengo que generar un bloque

  //esto nos genera un arreglo pero debo unirlo nuevamente y para eso uso join y le digo que no use ninguna forma de separarlo por que los arreglos los va a separar por
  //comillas y se veria en la estructura del html, lo que quiero es retornar un bloque de HTML que se muestre en la aplicación, listo ahora miro en el navegador

  //Clic en el home clic en 100tifi.co y me trae los personajes de la API

  const characters = await getData();

  const view = `
    <div class="Characters">
    ${characters.results
      .map(
        (character) => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
    `
      )
      .join("")}
    </div>
  `;
  return view;
};

export default Home;
