/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila, actividadNameArray, usuarioNameArray, personaNameArray) {

    let atributosFunciones = ["'" + fila.id_inscripcion + "'","'" + fila.fecha_solicitud_inscripcion + "'", "'" + fila.documento_pago + "'","'" + fila.fecha_pago_inscripcion + "'", "'" + fila.fecha_aceptacion_inscripcion + "'", "'" + fila.id_actividad + "'", "'" + fila.id_usuario + "'"];

    let tempNameActividad;
    let tempColorActividad;
    let tempDniUsuario;
    let tempNameUsuario;
    let tempApellidosUsuario;
    let tempFotoUsuario;

    let noPagado = '';
    if (fila.documento_pago == "") {
        noPagado = 'hidden';
    }

    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleInscripcion(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarInscripcion(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarInscripcion(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> <a class="ml-2 btn btn-ghost btn-sm px-0 tooltip ' + noPagado + '" href="' + urlDocumentos + '/' + fila.documento_pago + '" data-tip="' + fila.documento_pago + '"> <img class="w-8" src="img/icons/clearskies/price.svg"> </a> </div>'
    
    actividadNameArray.forEach(current => {
        if (fila.id_actividad == current.id_actividad) {
            tempNameActividad = current.nombre_actividad;
            tempColorActividad = current.color_actividad;
        }
    });
    
    usuarioNameArray.forEach(current => fila.id_usuario == current.id ? tempDniUsuario = current.dni_usuario : null);

    personaNameArray.forEach(current => {
        if (tempDniUsuario == current.dni_persona) {
            tempNameUsuario = current.nombre_persona;
            tempApellidosUsuario = current.apellidos_persona;
            tempFotoUsuario = current.foto_persona;
        }
    });

    var filaTabla =
                '<tr>' +
                '<td><div class="flex flex-row items-center">' + decodeURIComponent(tempNameActividad) + '<div class="ml-2 w-[10px] h-[10px] rounded-full" style="background-color:' + tempColorActividad + ' !important;"></div></div>' +
                '</td> <td>' + '<div class="flex items-center space-x-3"> <div class="avatar"> <div class="w-12 h-12 mask mask-squircle"> <a href="' + urlImagenes + '/' + tempFotoUsuario + '"><img src="' + urlImagenes + '/' + tempFotoUsuario + '"> </a> </div> </div> <div> <span class="font-bold">' + decodeURIComponent(tempNameUsuario) + '</span> ' + decodeURIComponent(tempApellidosUsuario) + '<br> <span data-tip="DNI" class="badge badge-outline badge-sm tooltip">' + tempDniUsuario + '</span> </div> </div>' +
                '</td> <td>' + decodeDate(fila.fecha_solicitud_inscripcion) +
                '</td> <td>' + decodeDate(fila.fecha_pago_inscripcion) +
                '</td> <td>' + decodeDate(fila.fecha_aceptacion_inscripcion) +
                '</td> <td>' + celdaAcciones +
                '</td> </tr>';

    return filaTabla;
}

function getListRegistration() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarinscripciones", "");

        addActionControler(document.formulariolistarinscripciones, 'search', 'inscripcion');
        insertacampo(document.formulariolistarinscripciones,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistarinscripciones").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosInscripciones").html("<thead> <tr> <th class=\"ACTIVIDAD\"></th> <th class=\"PERSONA\"></th> <th class=\"FECHA_SOLICITUD_INSCRIPCION\"></th> <th class=\"FECHA_PAGO_INSCRIPCION\"></th> <th class=\"FECHA_ACEPTACION_INSCRIPCION\"></th> <th class=\"ACCIONES min-w-[190px] \"> </th> </tr> </thead> <tbody></tbody>");

                let actividadNameArray = getNames("actividad").responseJSON.resource;
                let usuarioNameArray = getNames("usuario").responseJSON.resource;
                let personaNameArray = getNames("persona").responseJSON.resource;

                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i], actividadNameArray, usuarioNameArray, personaNameArray);
                    $("#datosInscripciones").append(tr);
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

function getListRegistrationBuscar() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');


        addActionControler(document.getElementById('formBuscar'), 'search', 'inscripcion');
        insertacampo(document.getElementById('formBuscar'),'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formBuscar").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosInscripciones").html("<thead> <tr> <th class=\"ACTIVIDAD\"></th> <th class=\"PERSONA\"></th> <th class=\"FECHA_SOLICITUD_INSCRIPCION\"></th> <th class=\"FECHA_PAGO_INSCRIPCION\"></th> <th class=\"FECHA_ACEPTACION_INSCRIPCION\"></th> <th class=\"ACCIONES min-w-[190px] \"> </th> </tr> </thead> <tbody></tbody>");

                let actividadNameArray = getNames("actividad").responseJSON.resource;
                let usuarioNameArray = getNames("usuario").responseJSON.resource;
                let personaNameArray = getNames("persona").responseJSON.resource;

                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i], actividadNameArray, usuarioNameArray, personaNameArray);
                    $("#datosInscripciones").append(tr);
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