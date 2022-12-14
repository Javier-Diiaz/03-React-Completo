// !AJAX 

// Conciencia de como se realiza la comunicacion entre el frontend y el backend 
// ajax hace peticiones del cliente(frontend) al servidor(backend) 
// El motor V8 transforma el lenguaje de js a lenguaje de maquina

//!SPA
// simgle pash aplication --> de envia la pagina html al servidor y este devuelve un archivo json 

//!Ajax
// conjunto de tecnicas de desarrollo web, permiten que las aplicaiones web funciones de forma asincrona
// En pocas palabras es como una especie de mensajero entre el cliente y el backend  que conecta y permite 
//cargar  o traer parte de la informacion de la pagina y no la pagina completa 

//!JSON 
//notacion de objetos de js(intercambia datos y su formato es ligero/facil de leer )--> formato de texto 

//! HTTP --> protocolo de trasferencia de informacion 
// nos permite comunicarnos entre fronted y backend en el envio y recivido de informacion  
//TODO: HTTP Methods
//conjunto de metodos de peticion que indican una accion que se decide realizar para un recurso especificado
//? metodo GET ---> SOLICITA INFORMACION de un recurso especifico 
//* metodo PUT ---> edita la informacion y la envia a una ruta especifica(actualiza la informacion)
//? metodo DELETE --->  elimina un dato un registro etc
//* metodo POST ---> envia / agrega datos a una ruta especifica/ recordar que no se pueden agregar datos a la ruta de otor metodo como por ejemplo el delete 

//!Eventos
// los eventos estan directamente relacionados con el frontend y el backend ya que mediante ellos logramas mandar y recibir la informacion a los servidores y a mi propio pc 


//** INVESTIGAR SOBRE LOS METODOS DE LA LIBRERIA DE JQUERI Y SOBRE ELLA EN SI MISMA  */

//TODO: Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la ruta http://localhost:5000/amigos

$('#boton').click(function () {
    $('#lista').empty() //empty limpio la lista para que no se cargue cada ves que presione el boton ver amig.
    $.get('http://localhost:5000/amigos', respuesta => {
        respuesta.forEach(element => {
            let name = element.name
            let li = document.createElement('li')
            li.innerText = name
            $('#lista').append(li)
        });
    })
})

//TODO: Un campo de busqueda(input) que reciba el id de un amigo y un boton "buscar".Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM.Para conseguir los datos de un amigo en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar, Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1

$('#search').click(() => {
    let id = $('#input').val();
    $.get('http://localhost:5000/amigos/' + id, (resp) => {
        $('#amigo').text(resp.name)
    })
})


//TODO: Un input que reciba el id de un amigo y un boton "borrar".Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar.Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2

$('#delete').click(() => {
    let id = $('#inputDelete').val();
    $.ajax({
        url: 'http://localhost:5000/amigos/' + id,
        type: 'DELETE',
        success: () => {
            $('#success').text(`El amigo con id : ${id} fue borrado`)
        }
    })
})