//V12 voy a actualizar para hacer fetch al personaje que necesite, importando 2 elementos el 1ro getHash para saber sobre cuál hash se está moviendo, obviamente el id
//2do getData para hacer fetch al llamado a nuestra API...
import getHash from "../utils/getHash";
import getData from "../utils/getData";

//Igual que el otro generando una constante Character con arrow function
const Character = async () => {
  //...Ahora genero una constante llamada id la cuál va ser llamada  a getHash y con esto obtengo el hash sobre el cuál está moviendose
  const id = getHash();
  //Ahora voy a actualizar la función completa por que usaré async y lo pondré en la líne 7 y ahora uso await dentro, generando una constante llamada
  //character que es = a await que espere sobre la petición de getData y a este le paso un id
  const character = await getData(id);
  //Y de esta forma ahora actualizo el template html que permitira hacer render de los elementos que estoy trayendo del personaje
  //para eso no voy a iterar por que cuando ya obtenemos un personaje este nos regresa un objeto entonces voy a iterar sobre este elemento
  //voy a identificar dónde tengo que hacer iteraciones que será en src="image" y name, voy a traer el valor que estoy obteniendo en memoria
  //y uso la estructura para hacer llamados dentro de template literals a variables.

  //ahora actualizo los elementos de personajes card y para eso abro un span y dentro hago el llamado a el elemento que quiero mostrar que es el episodio en el 1ro y por
  //último quiero saber cuantos episodios el personaje ha mostrado o salido en la serie, con lenght para saber cuantos elementos tiene
  //y puedo revisar en el navegador

  //vemos que tenemos un manejo de rutas, hasta aquí aprendí a trabajar datos desde una API, conectarlos con los templates y poder tener una
  //aplicación casi lista

  //Nuevamente nuestra vista como antes con los templates literal y aquñi establecemos como va a vivir el personaje, tenemos la vista de
  //todos los personajes al darle clic tenemos la descripción de c/u, dentro tendra dos articulos uno para la img y el name y luego otro
  //template que va a describir c/u de los elementos que tiene esta api.
  //El otro articulo es para establecer los detalles del personaje
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: ${character.status}</h3>
        <h3>Species: ${character.species}</h3>
        <h3>Gender: ${character.gender}</h3>
        <h3>Origin: ${character.origin.name}</h3>
        <h3>Last Location: ${character.location.name}</h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
