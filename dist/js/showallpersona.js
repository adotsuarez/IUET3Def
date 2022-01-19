/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.dni_persona + "'","'" + decodeURIComponent(fila.nombre_persona) + "'", "'" + decodeURIComponent(fila.apellidos_persona) + "'","'" + fila.fechaNacimiento_persona + "'", "'" + decodeURIComponent(fila.direccion_persona) + "'", "'" + fila.telefono_persona + "'", "'" + decodeURIComponent(fila.email_persona) + "'", "'" + fila.foto_persona + "'", "'" + fila.esCeliaco_persona + "'", "'" + fila.borrado_persona + "'"];
    let celiaco;
    let borrado;


    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetallePersona(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarPersona(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarPersona(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button> </div>'

    if (fila.esCeliaco_persona == 0) {
        celiaco = "NO";
    } else {
        celiaco = "SI";
    }

    if (fila.borrado_usuario == 0) {
        borrado = "SI";
    } else {
        borrado = "NO text-error italic";
    }

    var filaTabla =
                '<tr>' +
                '<td>' + '<div class="flex items-center space-x-3"> <div class="avatar"> <div class="w-12 h-12 mask mask-squircle"> <a href="' + urlImagenes + '/' + fila.foto_persona + '"><img src="' + urlImagenes + '/' + fila.foto_persona + '"> </a> </div> </div> <div> <span class="font-bold">' + decodeURIComponent(fila.nombre_persona) + '</span> ' + decodeURIComponent(fila.apellidos_persona) + '<br> <span data-tip="DNI" class="badge badge-outline badge-sm tooltip">' + fila.dni_persona + '</span> </div> </div>' +
                // '</td> <td>' + decodeURIComponent(fila.nombre_persona) +
                // '</td> <td>' + decodeURIComponent(fila.apellidos_persona) +
                // '</td> <td>' + decodeURIComponent(fila.dni_persona) +
                '</td> <td>' + decodeDate(fila.fechaNacimiento_persona) +
                //'</td> <td>' + decodeURIComponent(fila.direccion_persona) +
                '</td> <td>' + decodeURIComponent(fila.telefono_persona) +
                '</td> <td>' + decodeURIComponent(fila.email_persona) +
                '</td> <td><span class="' + celiaco + '"></span>' +
                '</td> <td><span class="' + borrado + '"></span>' +
                '</td> <td>' + celdaAcciones +
                '</td> </tr>';

    return filaTabla;
}

function getListPersonas() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarpersonas", "");

        addActionControler(document.formulariolistarpersonas, 'search', 'persona');
        insertacampo(document.formulariolistarpersonas,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistarpersonas").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                // $("#datosPersonas").html("<thead> <tr> <th class=\"FOTO\"></th> <th class=\"NOMBRE_PERSONA\"></th> <th class=\"APELLIDOS_PERSONA\"></th> <th class=\"DNI_PERSONA\"></th> <th class=\"FECHANACIMIENTO_PERSONA\"></th> <th class=\"DIRECCION\"></th> <th class=\"TELEFONO\"></th> <th class=\"EMAIL\"></th> <th class=\"ESCELIACO_PERSONA\"></th> <th class=\"BORRADO_PERSONA\"></th> <th class=\"ACCIONES min-w-[150px] \"></th> </tr> </thead> <tbody></tbody>");

                $("#datosPersonas").html("<thead> <tr> <th class=\"PERSONA\"></th> <th class=\"FECHANACIMIENTO_PERSONA\"></th> </th> <th class=\"TELEFONO\"></th> <th class=\"EMAIL\"></th> <th class=\"ESCELIACO_PERSONA\"></th> <th class=\"BORRADO_PERSONA\"></th> <th class=\"ACCIONES min-w-[150px] \"></th> </tr> </thead> <tbody></tbody>");

                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosPersonas").append(tr);
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