//!                         lectura de React estados y ciclos de vida de un componentes

//! estados
// instancia de react component class, es un objeto que tiene la data y controla como se comporta el componente

//! Hooks  state
// variables de estado que contiene la informacion

//!setState
// para cambiar el estado state por algo nuevo filtarado o evaluado como sea el caso

//! Ciclos de vida de un componentes
//              montaje                  / actualizacion                               / desmontaje
//        componentDidMount             componenDidUpdate                            componenWillUnmount
// Se crea la funcion constuctor      //sea agrega infomacion propiedades           //de desmonta todo

//! hooks
// son funciones especiales que nos permiten acceder a las funcionalidades de React.

//! El hook React.useState
// este se desestructura en un array. La primera variable nos permite acceder al valor de ese estado. La segunda variable es un método para actualizar ese estado,    Puedo usar en el componente los React.useState que desees.

//! Variables de estado
// estas no tienen que inicializarse siempre en un objeto, puede ser en un array, string, número, boolean, etc.

//!Los padres pasan propiedads a sus hijos y los hijos pasan eventos a sus padres
// pasan enventos por ejemplo para filtrar la infomacion y dependiendo del evento sacar solo los iguales o de misma clase



//!componenetes presentacionales
// no tienen estado.solo aceptan props.no contienen logica

//!componentes contenedores
//contienen estados para ellos o sus compenentes hijos,si tiene logica.

//! El hook useEffect
// este recibe dos parámetros: la función que React ejecutará en alguna etapa del ciclo de vida del componente (monta, actualiza, desmonta), y un array de dependencias como opcional.  Puedes utilizar más de un useEffect en el mismo componente.