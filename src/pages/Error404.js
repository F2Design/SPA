//Generamos la constante Error404 debe ser el mismo nombre con que cree el archivo y la misma estructura con arrow function que nos permite convertir
//en una función esta constante
const Error404 = () => {
  //trabajamos con una vista
  const view = `
    <div class="Error404">
      <h2>Error 404</h2>
    </div>
  `;
  return view;
};

export default Error404;
