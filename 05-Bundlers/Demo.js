//! MODULOS
// Es un pedaso de codigo que cumple una tarea especifica y que indica sobre que piezas de codigo depende, ejemplpo: tenemos varios archivos con logica js, estos se jusntas al final en un archivo index.js (madre) y este index dependera de todos los js con logica, para esto se usa la palabra import y export

//! modularizacion
// separa la aplicacion y fracmenta el codigo en funciones independientes  de modo que podamos cargar cualquier informacion que precisemos de forma rapida
//? VENTAJAS
// facil manejamiento
// se pueden encapsular las cosas
// y facil mantenimiento de la app
//? CARACTERISTICAS
// modulos pequeños y especializados
// reemplazables por otros
// dependencia entre ellos
// encapzular mucha logica
// resguardar la informacion

// ? SIRVEN PARA QUE ENTONCES
// Cuando la aplicacion crece demaciado en mas facil de manejar y administrar

//! DEPENDENCIAS
// Relacion que existe entre un modulo y el otro (un modulo depende de otros o otro)

//! CommonJS
// Recordar que este formato es mas utilizado en node js ya que es preciso para la programacion de servidores, en fronten casi no
// con las palabra clave  EXPORTS ejemplo
// TODO: nombre de archivo .js ==> prueba.js
//? exports.nombre = (numero)=>{return '1,2,3,4'}
//TODO: nombre del archivo que solicita prueba  es  index.js
// var  obj = requiere('./prueba.js')
// console.log(nombre);

//! FORMATO CommonJS se divide en 3 partes
// 1 el modulo completo (archivo js) dependencia
// 2 la palabra requiere(...) en el index para saber que voy a solicitar ese js completo
// 3 y la palabra exports para saber que voy a exportar de ese modulo exactamente (esta va en el modulo)
// recordar que esta operacion de exportacion es una operacion sincronica(queda guardada en la memoria cache)
// al ser exportado la funcion o lo que necesitemos en si va a ser un objeto

//! module.exports vs exports
// ambos toman la referencia del mismo objeto ejemplo
// pero en si lo que sucede realmente esque export apunta a module.export y module.export apunta a el objeto que vamos a exportar 
module.exports.nombre = 'Javi'
exports.apellido = 'Arcila'
exports
//  ===> me exportatia un objeto con dos propiedades asi  => { nombre: 'Javi', apellido: 'Arcila' } abrir quokka para ver mejor

//? que es module.exports entonces
// es un objeto de js que tiene una propiedad exports y esta define la propiedad de los modulos que vamos a exportar 














