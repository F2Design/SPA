//creo una función que retorna la vista que necesito, gerero una constante que le dará parte a la función que se llamará Home
//Home y establezco la estructura que necesito en este caso las arrow function
const Home = () => {
  //Creo una nueva constante que la llamo view y ese sera un template literal `` y usaremos mucho  por que permite trabajar multilinea
  //y generar el template que necesito
  /* aquí hago html y genero un div el cuál tendra una clase que son los personajes o parte principal y dentro vivirá toda la estructura de lo que
  queremos hacer en este caso los personajes que vamos a presentar, para esto la etiqueta article donde establece cada personaje, con su clase, luego generamos una
  etiqueta anchor <a></a> que permite generar un enlace hacia laguna sección que es hacia el detalle de este personaje y ira al id 1, luego una imagen y al final una
  etiqueta h2 para el nombre del pesonaje, este es el template base y solo necesitamos estas referencias para cuando hagamos render del llamado a la api
  sepamos dónde poner cada elemento*/
  const view = `
    <div class="Characters">
      <article class="Character-item">
        <a href="#/1/">
          <img src="image" alt="name">
          <h2>Name</h2>
        </a>
      </article>
    </div>
  `;
  //ahora lo retornamos en view
  return view;
};

//al final exportar el elemento, se exporta por que permite identificar si el archivo puede ser usado dentro de otros archivos de JS
export default Home;
