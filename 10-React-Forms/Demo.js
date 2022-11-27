//!           React Forms
// ultima clase de ract puro en si con sus librerias
//
//todo: objetivo
// aprender a crear formularios  intuitivos  y ver las caracteristicas que hace el formulario
//

// TODO:  A ver
// formulario
// no controlados
// controlados
// importancia de keys en formularios

//? formularios
// permite al usuario agregar datos a la app
// y nos permite usarla cuando la necesitemos
// tener en cuenta la experiencia de usuario y la validacion del usuario muy importante esta ultima

//? no controlados
// poco predecible
// no estamos usando como tal estados o props para representar en el dom
// y se sacan los valores de Dom

//? controlados
// cada input esta enlazado con el estado de react que yo cree esto quiere decir que esta como blindado
// es la forma recomendada por React
// es mas predecible porque en el input le damos las condiciones que se necesitan para que pasa de hay
// ejempli si un input tiene mayusculas le retorna que no se puede asi  que corrija


//! Conceptos Basicos E importantes
// prop de un input placeholder= 'lo que aparece en el input del usuario,en ese campo ese rectangulo que tiene el input'
// prop del input name que es en si el nombre del input
// prop del input keys es muy importante porque con esta React sabe el orden y valor unico de cada componente
// nuevo etiqueta o componentes llamado <form>       </from>
// con la propiedad onClose de in input capturo su value

//! para buscar un validador
// hay que googlearlo y colocarle el .test(valueaevaluar)


//todo: 1 Demo  ==> Ejemplo.jsx    Es solo para observar que react mira las key de los input no importa que se rendericen en diferente orden
//todo  2       ==> ejemplo Uncontrolled.jsx  es solo para mirar como son los formularios viejos y que llamar directamente al dom para tener la info que necesitan

//!RECORDAR
// con el metodo onChage se pude controlar la entrada de una info a un estado creando la funcion que me modifique el estado
//ejemplo

function app() {
    const manejarlaentrada = (evento) => { }
    return <input name="alumno" type='text' onChange={manejarlaentrada}></input>
}
