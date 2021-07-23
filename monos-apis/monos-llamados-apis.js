function buscarGarfield){

    nombre_garfield = $("#txt-busqueda").val()


    fetch("http://www.mezzacotta.net/garfield/?comic=XXXX" + nombre_garfield)

    .then(respuesta => respuesta.json())

    .then(datos => {

        nueva_etiqueta = `

            <img src="${datos.sprites.front_default}">

        `
        $("#btn-buscar").after(nueva_etiqueta)

        //document.getElementById("btn-buscar").innerHTML += nueva_etiqueta

    })

    .catch(error => console.log(error))

}
