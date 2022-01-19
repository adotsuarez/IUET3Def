/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_grupo + "'","'" + decodeURIComponent(fila.nombre_grupo) + "'", "'" + decodeURIComponent(fila.descripcion_grupo) + "'"];

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleGrupo(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarGrupo(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarGrupo(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    var filaTabla =
                '<tr>' +
                '<td>' + decodeURIComponent(fila.nombre_grupo) + 
                '</td> <td class="max-w-[600px] whitespace-normal">' + decodeURIComponent(fila.descripcion_grupo) + 
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getListGroups() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistargrupos", "");

        addActionControler(document.formulariolistargrupos, 'search', 'grupo');
        insertacampo(document.formulariolistargrupos,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistargrupos").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosGrupos").html("<thead> <tr> <th class=\"NOMBRE_GRUPO\"></th> <th class=\"DESCRIPCION_GRUPO\"></th> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");
                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosGrupos").append(tr);
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