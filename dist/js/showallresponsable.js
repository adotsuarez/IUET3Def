/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila, personaNameArray) {

    let atributosFunciones = ["'" + fila.dni_responsable + "'","'" + fila.curriculum_responsable + "'", "'" + fila.numCuenta_responsable + "'", "'" + fila.borrado_responsable + "'"];
    let borrado;
    let tempNameUsuario;
    let tempApellidosUsuario;
    let tempFotoUsuario;


    celdaAcciones = '<div class="flex flex-row"><button class="btn btn-ghost btn-sm px-0" onclick="showDetalleResponsable(' + atributosFunciones + ')"> <img class="w-8 ICONDETALLE" src="img/icons/clearskies/view.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEditarResponsable(' + atributosFunciones + ')"> <img class="w-8 ICONEDITAR" src="img/icons/clearskies/pencil.svg"> </button> <button class="ml-2 btn btn-ghost btn-sm px-0" onclick="showEliminarResponsable(' + atributosFunciones + ')"> <img class="w-8 ICONELIMINAR" src="img/icons/clearskies/bin.svg"> </button>  <a class="ml-2 btn btn-ghost btn-sm px-0 tooltip" href="' + urlCurriculums + '/' + fila.curriculum_responsable + '" data-tip="' + fila.curriculum_responsable + '"> <img class="w-8" src="img/icons/clearskies/registrationnext.svg"> </a> </div>'

    if (fila.borrado_responsable == 0) {
        borrado = "SI";
    } else {
        borrado = "NO text-error italic";
    }

    personaNameArray.forEach(current => {
        if (fila.dni_responsable == current.dni_persona) {
            tempNameUsuario = current.nombre_persona;
            tempApellidosUsuario = current.apellidos_persona;
            tempFotoUsuario = current.foto_persona;
        }
    });

    var filaTabla =
                '<tr>' +
                '<td>' + '<div class="flex items-center space-x-3"> <div class="avatar"> <div class="w-12 h-12 mask mask-squircle"> <a href="' + urlImagenes + '/' + tempFotoUsuario + '"><img src="' + urlImagenes + '/' + tempFotoUsuario + '"> </a> </div> </div> <div> <span class="font-bold">' + decodeURIComponent(tempNameUsuario) + '</span> ' + decodeURIComponent(tempApellidosUsuario) + '<br> <span data-tip="DNI" class="badge badge-outline badge-sm tooltip">' + fila.dni_responsable + '</span> </div> </div>' +
                //'</td> <td>' + fila.numCuenta_responsable +
                '</td> <td><span class="' + borrado + '"></span>' +
                '</td> <td>' + celdaAcciones +
                '</td> </tr>';

    return filaTabla;
}

function getListResponsables() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarresponsables", "");

        addActionControler(document.formulariolistarresponsables, 'search', 'responsable');
        insertacampo(document.formulariolistarresponsables,'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: urlPeticionesAjax,
            data: $("#formulariolistarresponsables").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {

                $("#datosResponsables").html("<thead> <tr> <th class=\"PERSONA\"></th> <th class=\"BORRADO_USUARIO\"></th> <th class=\"ACCIONES min-w-[190px] \"></th> </tr> </thead> <tbody></tbody>");

                let personaNameArray = getNames("persona").responseJSON.resource;

                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i], personaNameArray);
                    $("#datosResponsables").append(tr);
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

function getListResponsablesBuscar() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');


    addActionControler(document.getElementById('formBuscar'), 'search', 'responsable');
    insertacampo(document.getElementById('formBuscar'),'ID_SESSION', idSession);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formBuscar").serialize(),  
    }).done(function( response ) {       
        if (response.ok == true) {

            $("#datosResponsables").html("<thead> <tr> <th class=\"PERSONA\"></th> <th class=\"BORRADO_USUARIO\"></th> <th class=\"ACCIONES min-w-[190px] \"></th> </tr> </thead> <tbody></tbody>");

            let personaNameArray = getNames("persona").responseJSON.resource;

            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i], personaNameArray);
                $("#datosResponsables").append(tr);
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