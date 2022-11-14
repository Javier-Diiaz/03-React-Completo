//! React Intro

//? programacion declaratica vs imperativa
// la impertiva le decimos exactamente como queremos que haga las cosas
// en la declarativa ejemplo un ciclo for sabemos lo que hace pero no sabemos como lo hace esto quiere decir que la pc se encarga de hacer algo por nosotros

//? Dom virtual
// React crea una copia del Dom original y en el cual nosotros vamos a trabajar, esto quiere decir que el Dom real solo se cambia cuando nosotros tengamos todo listo y funcional en el Dom virtual, esto para que tengamos mejor eficiencia, consume menos recursos, etc

//TODO: Al usar React tendremos tener siempre en cuanta  que se usan componentes
// quiere decir que que una pagina esta dividida en varias partes o componentes

//? Principio de Responsabilidad unica
// a la hora de programar con React es muy importate hacer que cada componente haga una sola cosa.

//? Componente
// Los componentes pueden ser reutilizables, ademas se pueden modificar pasandole algunas datos especificos
//TODO: todos los componentes tiene por dentro un estado el cual veremos su utilidad en futuras clases


//? JSX
// forma de evitar utilizar la funciones React.createElement()

//FORMA ANTIGUA
var element = /*#__PURE__*/React.createElement("h1", null, "Hello, world!");

//FORMA NUEVA Y MAS ENTENDIBLE
const element = <h1>Hello, world!</h1>;

// esta transformacion despues de que el codigo ya esta editado y listo para enviarse el el proceso se usa BABEL para transormar la forma nueva en la antigua y asi que todo siga funcionando correctamente.

//? Componentes funcionales y componentes de clase 

//!Funcionales
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}





//! Componente de Clase
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}




//TODO: PROPS en componentes de clase 
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;//con el this se llama a las propiedades de este forma antigua
    }
}

//prueba