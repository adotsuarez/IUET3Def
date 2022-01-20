//RESETEAR
function resetearFormularioInscripcion () {
    let idElementoList = ['txtIdInscripcion',
                            'selectIdActividad',
                            'selectIdUsuario',
                            'dateFechaSolicitudInscripcion',
                            'fileDocumentoPago',
                            'dateFechaPagoInscripcion',
                            'dateFechaAceptacionInscripcion'];
    resetearFormulario('formGenerico', idElementoList);

    idElementoList.forEach(function (idElemento) {
        document.getElementById(idElemento).classList.remove('input-errror');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
    });

    idErrorList = ['errorFormatoFechaSolicitudInscripcion',
                'errorFormatoDocumentoPago',
                'errorFormatoFechaPagoInscripcion',
                'errorFormatoFechaAceptacionInscripcion'];

    idErrorList.forEach(function (idElemento) {
    document.getElementById(idElemento).removeAttribute("class");
    document.getElementById(idElemento).innerHTML = "";
    document.getElementById(idElemento).classList.add('hidden');
    });

    document.getElementById('formGenericoTitle').removeAttribute("class");
    document.getElementById('formGenericoTitleSubmit').removeAttribute("class");
    

    $("#selectIdActividad").html("<option disabled=\"\" selected=\"\" class=\"ACTIVIDAD\"> </option>");

    $("#selectIdUsuario").html("<option disabled=\"\" selected=\"\" class=\"USUARIO\"> </option>");

    document.getElementById('dateFechaSolicitudInscripcion').classList.remove('hidden');
	document.getElementById('fileDocumentoPago').classList.remove('hidden');
	document.getElementById('dateFechaPagoInscripcion').classList.remove('hidden');
	document.getElementById('dateFechaAceptacionInscripcion').classList.remove('hidden');
	document.getElementById('selectIdActividad').classList.remove('hidden');
	document.getElementById('selectIdUsuario').classList.remove('hidden');
	document.getElementById('abrirArchivo').classList.remove('hidden');
	document.getElementById('botonArchivo').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevaInscripcion() {

	resetearFormularioInscripcion();

	document.getElementById('formGenericoTitle').classList.add('ADDREGISTRATION');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevaInscripcion();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntityWithFiles('add','inscripcion',getListRegistration,'fileDocumentoPago');");

	document.getElementById('abrirArchivo').classList.add('hidden');

	selectid_actividad('','selectIdActividad');
	selectid_usuario('','selectIdUsuario');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevaInscripcion() {
	if (comprobarFechaSolicitudInscripcion()
		&& comprobarDocumentoPago()
		&& comprobarFechaPagoInscripcion()
		&& comprobarFechaAceptacionInscripcion()) {
		document.getElementById('txtIdInscripcion').value = createId('inscripcion');
		return true;
	} else {
		return false;
	}
}

// DETALLE
function showDetalleInscripcion(id_inscripcion, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion, id_actividad, id_usuario) {

	resetearFormularioInscripcion();

	document.getElementById('formGenericoTitle').classList.add('DETAILREGISTRATION');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('fileDocumentoPago').setAttribute("disabled", true);
	document.getElementById('botonArchivo').classList.add('hidden');

	document.getElementById('dateFechaSolicitudInscripcion').setAttribute("readonly", true);
	document.getElementById('dateFechaPagoInscripcion').setAttribute("readonly", true);
	document.getElementById('dateFechaAceptacionInscripcion').setAttribute("readonly", true);
	document.getElementById('selectIdActividad').setAttribute("disabled", true);
	document.getElementById('selectIdUsuario').setAttribute("disabled", true);

    document.getElementById('txtIdInscripcion').value = id_inscripcion;
	document.getElementById('dateFechaSolicitudInscripcion').value = fecha_solicitud_inscripcion;
	document.getElementById('abrirArchivo').href = urlDocumentos + '/' + documento_pago;
	document.getElementById('dateFechaPagoInscripcion').value = fecha_pago_inscripcion;
	document.getElementById('dateFechaAceptacionInscripcion').value = fecha_aceptacion_inscripcion;

	selectid_actividad(id_actividad,'selectIdActividad');
	selectid_usuario(id_usuario,'selectIdUsuario');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarInscripcion(id_inscripcion, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion, id_actividad, id_usuario) {

	resetearFormularioInscripcion();

	document.getElementById('formGenericoTitle').classList.add('EDITREGISTRATION');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarInscripcion();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntityWithFiles('edit','inscripcion', getListRegistration,'fileDocumentoPago');");

	document.getElementById('dateFechaSolicitudInscripcion').setAttribute("readonly", true);
	document.getElementById('dateFechaPagoInscripcion').setAttribute("readonly", true);
	document.getElementById('dateFechaAceptacionInscripcion').setAttribute("readonly", true);
	document.getElementById('selectIdActividad').setAttribute("disabled", true);
	document.getElementById('selectIdUsuario').setAttribute("disabled", true);

    document.getElementById('txtIdInscripcion').value = id_inscripcion;
	document.getElementById('dateFechaSolicitudInscripcion').value = fecha_solicitud_inscripcion;
	document.getElementById('abrirArchivo').href = urlDocumentos + '/' + documento_pago;
	document.getElementById('dateFechaPagoInscripcion').value = fecha_pago_inscripcion;
	document.getElementById('dateFechaAceptacionInscripcion').value = fecha_aceptacion_inscripcion;

	selectid_actividad(id_actividad,'selectIdActividad');
	selectid_usuario(id_usuario,'selectIdUsuario');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarInscripcion() {
	if	   (comprobarFechaSolicitudInscripcion()
		&& comprobarDocumentoPago()
		&& comprobarFechaPagoInscripcion()
		&& comprobarFechaAceptacionInscripcion()) {
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarInscripcion(id_inscripcion, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion, id_actividad, id_usuario) {

	resetearFormularioInscripcion();

	document.getElementById('formGenericoTitle').classList.add('DETAILREGISTRATION');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','inscripcion', getListRegistration);");

	document.getElementById('dateFechaSolicitudInscripcion').setAttribute("readonly", true);
	document.getElementById('fileDocumentoPago').setAttribute("disabled", true);
	document.getElementById('dateFechaPagoInscripcion').setAttribute("readonly", true);
	document.getElementById('dateFechaAceptacionInscripcion').setAttribute("readonly", true);
	document.getElementById('selectIdActividad').setAttribute("disabled", true);
	document.getElementById('selectIdUsuario').setAttribute("disabled", true);

	document.getElementById('botonArchivo').classList.add('hidden');

    document.getElementById('txtIdInscripcion').value = id_inscripcion;
	document.getElementById('dateFechaSolicitudInscripcion').value = fecha_solicitud_inscripcion;
	document.getElementById('abrirArchivo').href = urlDocumentos + '/' + documento_pago;
	document.getElementById('dateFechaPagoInscripcion').value = fecha_pago_inscripcion;
	document.getElementById('dateFechaAceptacionInscripcion').value = fecha_aceptacion_inscripcion;

	selectid_actividad(id_actividad,'selectIdActividad');
	selectid_usuario(id_usuario,'selectIdUsuario');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}