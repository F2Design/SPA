//Creamos una constante llamada header con estructura arrow function
const Header = () => {
  //Creamos una función que permite retornar una vista que es la del header usando template literals y generamos html dentro de este bloque
  //creamos un div con ciertas reglas y clases con el header name que es la estructura principal, ahora dentro dónde está el
  //logo y la navegación, y dentro el anchor <a></a> nos llevara a la raíz del proyecto con el href que es la referencia a dónde se va a mover
  //en este caso a la raíz /
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            100tifi.co
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};
//Exportarlo, lo queremos usar en diferentes lugares de la aplicación
export default Header;
