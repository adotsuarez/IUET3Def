/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_espacio + "'","'" + decodeURIComponent(fila.nombre_espacio) + "'", "'" + decodeURIComponent(fila.descripcion_espacio) + "'"];

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleEspacio(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarEspacio(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarEspacio(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    var filaTabla =
                '<tr>' +
                '<td>' + decodeURIComponent(fila.nombre_espacio) + 
                '</td> <td class="max-w-[600px] whitespace-normal">' + decodeURIComponent(fila.descripcion_espacio) + 
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getListEspacios() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarespacios", "");

        addActionControler(document.formulariolistarespacios, 'search', 'espacio');
        insertacampo(document.formulariolistarespacios,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistarespacios").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosEspacios").html("<thead> <tr> <th class=\"NOMBRE_ESPACIO\"></th> <th class=\"DESCRIPCION_ESPACIO\"></th> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");
                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosEspacios").append(tr);
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

function getListEspaciosBuscar() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    addActionControler(document.getElementById("formBuscar"), 'search', 'espacio');
    insertacampo(document.getElementById("formBuscar"),'ID_SESSION', idSession);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formBuscar").serialize(),  
    }).done(function( response ) {       
        if (response.ok == true) {
            $("#datosEspacios").html("<thead> <tr> <th class=\"NOMBRE_ESPACIO\"></th> <th class=\"DESCRIPCION_ESPACIO\"></th> <th class=\"ACCIONES min-w-[150px]\"> </th> </tr> </thead> <tbody></tbody>");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosEspacios").append(tr);
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