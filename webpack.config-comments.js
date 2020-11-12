//creamos una constante con el elemento path el cuál vamos a requerir require que nos permite traer ("path") que es de node y nos permite acceder hacia dónde
//estamos dentro de las carpetas o dónde nos movemos en el proyecto, si esta en desarrollo local o si va a vivir en la nube
const path = require("path");
//Añadimos el archivo necesario para trabajar con html y lo vamos a requerir del paquete que instalamos html-webpack-plugin
const HtmlWebPackPlugin = require("html-webpack-plugin");

//Ahora creamos un modulo que vamos a exportar dónde viene cada configuración que va a suceder.
//Generamos el modulo lo exportamos y este modulo es un objeto dónde vive esa configuración
module.exports = {
  //El 1er elemento es tener el punto de entrada, index.js ahí vivira el código inicial
  entry: "./src/index.js",
  //ahora tenemos que tener un Output, dónde vamos a poner esté proyecto ya estructurado y compilado listo para enviarse a producción
  output: {
    //Aquñi tenemos que tener un objeto que permite decirle el path, hacia dónde lo voy a poner y el path que importe le digo que use resolve que es para saver dónde se encuentra y __dirname que se encargara de decir ok
    //dónde se encuentre la carpeta, ahí es dónde vas a poner una carpeta en esté caso creo la carpera dist de distribution
    path: path.resolve(__dirname, "dist"),
    //Ahora le digo como se va a llamar el archivo que voy a generar que es filename y le digo que se va a llamar main.js, de está forma el compilado que voy a crear de todo lo que tiene el proyecto en JS se llamará main.js cuándo esté listo para producción
    filename: "main.js",
  },
  //Ahora trabajo sobre las extensiones que usara el proyecto, para eso usamos resolve y generamos otro objeto
  resolve: {
    //Usamos las extensiones y le paso un arreglo [] de las extensiones que usare, en este caso será extensión .js por eso paso solo un elemento
    extensions: [".js"],
  },
  //Creo un modulo con las reglas necesarias que empezaré para trabajar, que será la de babel para que sea compatible con todos los navegadores
  //creo el modulo y dentro de el...
  module: {
    //...tenemos reglas, aquí las reglas creamos una de estas mismas y son pasadas por medio de un arreglo [] y allí dentro genero los elementos que necesitamos, 1ro la estructura de babel, para eso tenemos que crear un test de como vamos a identificar estos archivos
    //según los que se encuentran dentro de nuestro entorno
    rules: [
      {
        //Este test va a tener un regex que es una forma de establecer valores que queremos filtrar ya sea de una ruta, de unos elementos o los archivos que vamos a estar usando
        //estos regexp se generan con \ alt+tecla al lado del 1 establecemos que ese es el punto de entrada luego que son extensiones .js y le paso este regexp que permitira establecer cuales son estos elementos
        test: /\.js?$/,
        //Ahora tengo que excluir la carpeta de node modules, no quiero incorporar todo lo que se encuentra allí a lo que sería mi proyecto, así excluimos de alli todo lo que encuentre allí de archivos .js
        exclude: /node_modules/,
        //despues le decimos que va a usar un loader o una configuración establecida para trabajar todo el código
        use: {
          //el que instalamos
          loader: "babel-loader",
        },
      },
    ],
  },
  //Ahora establezco los plugins que voy a usar, en este caso el HtmlWebpackPlugin de que nos permite trabajar los archivos html, le paso un arreglo []
  plugins: [
    //creo c/u de ellos con new HtmlWebpackPlugin que instanciamos en la parte superior de este documento y allí establezco lo que necesito un objeto que llenare con la configuración()
    new HtmlWebPackPlugin([
      //el 1er elemento será el inject que en este caso es como voy a un archivo html a inyectar un valor y ese valor en true
      {
        inject: true,
        //Ahora que tengo esta estructura necito decir un template, dónde se encuentra el template ppal que se encuentra en la carpeta public allí esta el template base de html
        template: "./public/index.html",
        //Y hacia dónde lo tenemos que mandar o dónde lo vamos a guardar que es en la carpeta dist y le establezco un nombre
        filename: "./index.html",
      },
    ]),
  ],
};
