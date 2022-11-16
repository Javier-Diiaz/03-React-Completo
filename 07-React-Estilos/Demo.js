//! Estilos en React

//! React css
// Al web pack de react hay que agregarle una nueva configuracion para que lea css

//! cssStylesheet (legacy)
//  se pisan los estilos porque es en cascada el modo que siempre e conocido, ademas hay que configurar web pack para que coja todo lo terminado en .css y lo lea como estilos

//! inlineStyling
// no se necesita configurar web pack, se usan objetos de js para dar estilos a las etiquetas, pero para hacer hover(pasar el mouse encima de algo y que cambie de color) no me va a funcionar porque se "finge" css pero no es css, es enrealidad obj de js

//! cssModules ====> Recomendado
// solo cambia el modo de importar la hoja de estilos de resto es como legacy(todo lo bueno en uno)
// y para tener estilos globales me toca configurar el web pack como esta en los ejemplos

//! styledComponent
// nueva forma creada por react que combina todo lo anterior
// la ida es juntar  todo pero mediante componentes
// para poder que funcione toca instarlo mediante el comando npm i styled-components








