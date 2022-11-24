//!                                                       Routing  (LIBRERIA DE REACT)

// Es una libreria que nos permite enrutar nuestro codigo con el objetivo de no recargar la pagina completa cada ves que miremos algo diferente en ella

//! Temas a ver en la clase
// 1)SPAN    =>      single Page Application   =>  (Solicitud de una sola página)// quiere decir que no se acualiza toda la pagina si no solo la plantilla a pedir
// y en si es una libreria que
// 2)Routing
// 3)Configuracion
// 4)Navegacion
// 5)Hooks: A)useLocation   -B)useNavigate    -C)useParams

//! instalacion y uso 
// Instalar React-Router-DOM
//? npm i react - router - dom
// Utilización
import { HashRouter, Route } from 'react-router-dom';
ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('app'))

//! Configuracion
// definir los nombres de las rutas y determinar que componentes se mostratan en cada una
// para establecer la configuracion de las rutass, es necesario importar y utilizar tres componentes principales:

// < BrowserRouter /> => este envueve toda la aplicacion y entabla la comunicacion con el servidor
// < Routes />        => este agrupa todas las rutas y, ante un evento determina cual corresponde a seguir
// < Route />         => representa una ruta y el componenete que en ella se renderiza mediante los atributos path y element.

//? ejemplo en codigo de como aplicar el enrutado
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = React.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
);

// Ruta dinamica si no hay nada en la direccion se puede color : para que no se corte la pagina pero si me haga algo que sea relevante
//? ejemplo en codigo de como hacer dinamica la ruta 
{/* <BrowserRouter>
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="invoices/:invoiceId" element={<Invoice />} />
    </Routes>
</BrowserRouter> */}

// Ruta anidada
// sucede cuando un Route se convierte en el padre de otro Route: ejemplo en codigo 
{/* <BrowserRouter>
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sales" element={<Sales />}>
            <Route path="invoices" element={<Invoices />}> // el route padre
                <Route path=":invoiceId" element={<Invoice />} />//aca esta el dentro del nido
            </Route>
            <Route path="deposits" element={<Deposits />} />
        </Route>
    </Routes>
</BrowserRouter> */}

// Cuando tenemos Route anidados el que esta por dentro no se le coloca la / solo al de por fuera


//! Navegacion
// una vez configuradas las rutas agregamos a nuestros componentes elementos que permitan navegar de una ruta a otra

//< Link /> equivale a un elemento <a> de HTML.
// tiene dos propiedades 1) to='ruta'
// 2) element={'componente a renderizar'}


//< NavLink /> es similar al anterior, con la diferencia de
//que permite modificar los estilos de los componentes tiene las misma propiedaders que Link pero tiene 1 mas
// 1) classname

//! Hooks   useNavigate
// devuelve una función que permite la navegación programática en la aplicación.

//! Hooks useParams
// devuelve un objeto con las propiedades y el valor de los segmentos dinámicos de la URL.
