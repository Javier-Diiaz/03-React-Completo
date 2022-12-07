// ! react redux


// la funcion applyMiddleware en conjunto con thunkMiddleware  nos permite que con el redux la app trabaje de forma asincrona

// esta linea de codigo nos permite que a los navegadores con el pluginn react-tools (EXTENCION), como tal funcione.  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// axios  ==> es como el feach para recibir cosas desde la la red

//! Recordar que el reducer siempre recibe las actions y el estado previo

// provider ==> es un componente que  envuelve toda la app y mediante este  se acceden a las funciones de react redux, en otras palabras conecta react con redux, y se le pasa por propiedad la store

// connect  es una funcion que nos permite conectar un componente con la store y puede recibir varios argunmentos esta a su vez nos devuelve otra funcion otro clousure

// bindActionCreators es una funcion que lo que hace es que me retorna otra funcion y esta a su vez me retorna un obj en la que sus props son los nombres de las actions creator y el valor de esa propiedad es el dispach que envuelve la ejecucion de mi action creator

// mapStateToProps proporciona los datos que tenemos en nuestro componente global (captura el obj store)==> se esta suscribiendo al store, es como el suscribe

//mapDispatchToProps ==> (manda las acciones al store) (mapea las acciones creartor y se las pasa como props a el componente counter)