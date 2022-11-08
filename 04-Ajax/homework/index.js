let url = 'http://localhost:5000/amigos'

$('#boton').click(() => {
    $('#lista').empty()
    $.get(url, resp => {
        for (const amigo of resp) {
            let lista = `<li>${amigo.name}</li>`
            $('#lista').append(lista)
        }
    })
})


$('#search').click(() => {
    let inp = '/' + $('#input').val()
    $.get(url + inp, resp => {
        $('#amigo').text(resp.name)
    })
})

// Un input que reciba el id de un amigo y un boton "borrar".Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar.Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2

$('#delete').click(() => {
    let inp = '/' + $('#inputDelete').val()
    $.ajax({
        url: url + inp,
        type: 'DELETE',
        success: () => {
            $('#success').text(`El amigo con id ${inp} fue borrado con exito`)
        }
    })
})