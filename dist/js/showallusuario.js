/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id + "'","'" + fila.dni_usuario + "'", "'" + fila.usuario + "'", "'" + fila.id_grupo + "'", "'" + fila.borrado_usuario + "'"];
    let borrado;
    let own = "";

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleUsuario(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarUsuario(' + atributosFunciones + '"> <img class="w-8 iconEditar" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarUsuario(' + atributosFunciones + '"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    if (fila.borrado_usuario == 0) {
        borrado = "SI";
    } else {
        borrado = "NO text-error italic";
    }

    if (fila.usuario == document.getElementById("usuario").innerHTML) {
        own = "active";
    }

    var filaTabla =
                '<tr class="'+ own + '">' +
                '<td>' + fila.usuario + 
                '</td> <td>' + fila.dni_usuario + 
                '</td> <td>' + 'Meow' + 
                '</td> <td><span class="' + borrado + '")></span>' +
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

/*
    while (id_grupo != response.resource[i]['id_grupo']) {
        response.resource[i++];
    }
    tempNameGrupo = response.resource[i]['nombre_grupo'];
*/

function getLisUsers() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarusuarios", "");

        addActionControler(document.formulariolistarusuarios, 'search', 'usuario');
        insertacampo(document.formulariolistarusuarios,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistarusuarios").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosUsuarios").html("<thead> <tr> <th class=\"USUARIO\"></th> <th class=\"DNI_USUARIO\"></th> <th class=\"GRUPO\"></th> <th class=\"BORRADO_USUARIO\"></th> <th class=\"ACCIONES\"> </th> </tr> </thead> <tbody></tbody>");
                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosUsuarios").append(tr);
                }
                
                setLang(idioma);
            } else { 
                $("#mensajeError").removeClass();
                $("#mensajeError").addClass(response.code);
                setLang(idioma);
                document.getElementById("modal").classList.add('modal-open');
            }              
            
            deleteActionController();
        });
}