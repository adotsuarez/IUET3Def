/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_categoria + "'","'" + decodeURIComponent(fila.nombre_categoria) + "'", "'" + decodeURIComponent(fila.descripcion_categoria) + "'"];

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleCategoria(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarCategoria(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarCategoria(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    var filaTabla =
                '<tr>' +
                '<td>' + decodeURIComponent(fila.nombre_categoria) + 
                '</td> <td class="max-w-[600px] whitespace-normal">' + decodeURIComponent(fila.descripcion_categoria) + 
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getListCategorias() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarcategorias", "");

        addActionControler(document.formulariolistarcategorias, 'search', 'categoria');
        insertacampo(document.formulariolistarcategorias,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: decodeURIComponent($("#formulariolistarcategorias").serialize()),
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosCategorias").html("<thead> <tr> <th class=\"NOMBRE_CATEGORIA\"></th> <th class=\"DESCRIPCION_CATEGORIA\"></th> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");
                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosCategorias").append(tr);
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

function getListCategoriasBuscar() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    addActionControler(document.getElementById('formBuscar'), 'search', 'categoria');
    insertacampo(document.getElementById('formBuscar'),'ID_SESSION', idSession);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: decodeURIComponent($("#formBuscar").serialize()),
    }).done(function( response ) {       
        if (response.ok == true) {
            $("#datosCategorias").html("<thead> <tr> <th class=\"NOMBRE_CATEGORIA\"></th> <th class=\"DESCRIPCION_CATEGORIA\"></th> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosCategorias").append(tr);
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