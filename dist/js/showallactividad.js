/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila, espacioNameArray, categoriaNameArray) {

    let atributosFunciones = ["'" + fila.id_actividad + "'","'" + decodeURIComponent(fila.nombre_actividad) + "'", "'" + decodeURIComponent(fila.descripcion_actividad) + "'","'" + fila.precio_actividad + "'", "'" + fila.numPlazas_actividad + "'", "'" + decodeURIComponent(fila.color_actividad) + "'", "'" + decodeURIComponent(fila.color_nombre_actividad) + "'", "'" + fila.id_espacio + "'", "'" + fila.id_categoria + "'"];

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleActividad(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarActividad(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarActividad(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    espacioNameArray.forEach(current => fila.id_espacio == current.id_espacio ? tempNameEspacio = current.nombre_espacio : null);
    categoriaNameArray.forEach(current => fila.id_categoria == current.id_categoria ? tempNameCategoria = current.nombre_categoria : null);

    var filaTabla =
                '<tr>' +
                '<td>' + '<div> <span class="font-bold">' + decodeURIComponent(fila.nombre_actividad) + '</span> <br> <span style=" border-color: ' + fila.color_actividad + ' !important; color: ' + fila.color_actividad + ' !important;" class="badge badge-outline badge-sm">' + fila.color_actividad + '</span> <span style=" border-color: ' + fila.color_nombre_actividad + ' !important; color: ' + fila.color_nombre_actividad + ' !important;" class="badge badge-outline badge-sm">' + fila.color_nombre_actividad + '</span> </div>' +
                '</td> <td class="max-w-[600px] whitespace-normal">' + decodeURIComponent(fila.descripcion_actividad) +
                '</td> <td>' + fila.precio_actividad +
                '</td> <td>' + fila.numPlazas_actividad +
                '</td> <td>' + decodeURIComponent(tempNameEspacio) +
                '</td> <td>' + decodeURIComponent(tempNameCategoria) +
                '</td> <td>' + celdaAcciones +
                '</td> </tr>';

    return filaTabla;
}

function getListActivities() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistaractivades", "");

        addActionControler(document.formulariolistaractivades, 'search', 'actividad');
        insertacampo(document.formulariolistaractivades,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistaractivades").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosActividades").html("<thead> <tr> <th class=\"NOMBRE_ACTIVIDAD\"></th> <th class=\"DESCRIPCION_ACTIVIDAD\"></th> <th class=\"PRECIO_ACTIVIDAD\"></th> <th class=\"NUMPLAZAS_ACTIVIDAD\"></th> <th class=\"ESPACIO\"></th> <th class=\"CATEGORIA\"> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");

                let espacioNameArray = getNames("espacio").responseJSON.resource;
                let categoriaNameArray = getNames("categoria").responseJSON.resource;

                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i], espacioNameArray, categoriaNameArray);
                    $("#datosActividades").append(tr);
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

function getListActivitiesBuscar() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    addActionControler(document.getElementById('formBuscar'), 'search', 'actividad');
    insertacampo(document.getElementById('formBuscar'),'ID_SESSION', idSession);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formBuscar").serialize(),  
    }).done(function( response ) {       
        if (response.ok == true) {
            $("#datosActividades").html("<thead> <tr> <th class=\"NOMBRE_ACTIVIDAD\"></th> <th class=\"DESCRIPCION_ACTIVIDAD\"></th> <th class=\"PRECIO_ACTIVIDAD\"></th> <th class=\"NUMPLAZAS_ACTIVIDAD\"></th> <th class=\"ESPACIO\"></th> <th class=\"CATEGORIA\"> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");

            let espacioNameArray = getNames("espacio").responseJSON.resource;
            let categoriaNameArray = getNames("categoria").responseJSON.resource;

            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i], espacioNameArray, categoriaNameArray);
                $("#datosActividades").append(tr);
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