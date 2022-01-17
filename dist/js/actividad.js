// RESETEAR
function resetearFormularioActividad () {
	let idElementoList = ['txtIdActividad',
							'txtNombreActividad',
							'txtDescripcionActividad',
							'numPrecioActividad',
							'numPlazasActividad',
							'selectIdEspacio'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach(function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
	});

	idErrorList = ['errorFormatoNombreActividad',
					'errorFormatoDescripcionActividad',
					'errorFormatoPrecioActividad',
					'errorFormatoPlazasActividad',
					'errorFormatoColorActividad',
					'errorFormatoNombreColorActividad'];

	idErrorList.forEach(function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");

	document.getElementById('txtIdActividad').removeAttribute("disabled");
	document.getElementById('txtNombreActividad').removeAttribute("disabled");
	document.getElementById('txtDescripcionActividad').removeAttribute("disabled");
	document.getElementById('numPrecioActividad').removeAttribute("disabled");
	document.getElementById('numPlazasActividad').removeAttribute("disabled");
	document.getElementById('selectIdEspacio').removeAttribute("disabled");
	document.getElementById('selectIdCategoria').removeAttribute("disabled");


	$("#selectIdEspacio").html("<option disabled=\"\" selected=\"\" class=\"ESPACIO\"> </option>");

	$("#selectIdCategoria").html("<option disabled=\"\" selected=\"\" class=\"CATEGORIA\"> </option>");

	document.getElementById('txtNombreActividad').classList.remove('hidden');
	document.getElementById('txtDescripcionActividad').classList.remove('hidden');
	document.getElementById('numPrecioActividad').classList.remove('hidden');
	document.getElementById('numPlazasActividad').classList.remove('hidden');
	document.getElementById('selectIdEspacio').classList.remove('hidden');
	document.getElementById('selectIdCategoria').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevaActividad() {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('ADDACTIVITY');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevaActividad();');
	document.getElementById('formGenerico').setAttribute('action', 'javascript:nuevaActividad();');

	selectid_espacio('','selectIdEspacio');
	selectid_categoria('','selectIdCategoria');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevaActividad() {
	if	   (comprobarNombreActividad()
		&& comprobarDescripcionActividad()
		&& comprobarPrecioActividad()
		&& comprobarPlazasActividad()
		&& comprobarColorActividad()
		&& comprobarNombreColorActividad()) {
		document.getElementById('txtIdActividad').value = createId('actividad');
		return true;
	} else {
		return false;
	}
}

function nuevaActividad() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'add', 'actividad');
	
	document.getElementById('formGenericoDiv').classList.remove('modal-open');

	var idioma = getCookie('lang');

	$.ajax({
			method: 'POST',
			url: urlPeticionesAjax,
			data: $('#formGenerico').serialize(),  
		}).done(
			function( response ) {
				if (response.ok == true) {
					document.getElementById('modal').classList.remove('modal-open');
					getListActividades();
				} else {
					$('#mensajeError').removeClass();
					$('#mensajeError').addClass(response.code);
					setLang(idioma);
					document.getElementById('modal').classList.add('modal-open');
				}
				deleteActionController();				
			}
		);
}

// DETALLE
function showDetalleActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('DETAILACTIVITY');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtIdActividad').setAttribute("disabled", true);
	document.getElementById('txtNombreActividad').setAttribute("disabled", true);
	document.getElementById('txtDescripcionActividad').setAttribute("disabled", true);
	document.getElementById('numPrecioActividad').setAttribute("disabled", true);
	document.getElementById('numPlazasActividad').setAttribute("disabled", true);
	document.getElementById('txtColorActividad').setAttribute("disabled", true);
	document.getElementById('txtColorNombreActividad').setAttribute("disabled", true);
	document.getElementById('selectIdEspacio').setAttribute("disabled", true);
	document.getElementById('selectIdCategoria').setAttribute("disabled", true);
	

	document.getElementById('txtIdActividad').value = id_actividad;
	document.getElementById('txtNombreActividad').value = nombre_actividad;
	document.getElementById('txtDescripcionActividad').value = descripcion_actividad;
	document.getElementById('numPrecioActividad').value = precio_actividad;
	document.getElementById('numPlazasActividad').value = numPlazas_actividad;
	document.getElementById('txtColorActividad').value = color_actividad;
	document.getElementById('txtColorNombreActividad').value = color_nombre_actividad;

	selectid_espacio(id_espacio,'selectIdEspacio');
	selectid_categoria(id_categoria,'selectIdCategoria');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('EDITACTIVITY');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarActividad();');
	document.getElementById('formGenerico').setAttribute('action', 'javascript:eliminarActividad();');

	document.getElementById('txtIdActividad').value = id_actividad;
	document.getElementById('txtNombreActividad').value = nombre_actividad;
	document.getElementById('txtDescripcionActividad').value = descripcion_actividad;
	document.getElementById('numPrecioActividad').value = precio_actividad;
	document.getElementById('numPlazasActividad').value = numPlazas_actividad;
	document.getElementById('txtColorActividad').value = color_actividad;
	document.getElementById('txtColorNombreActividad').value = color_nombre_actividad;

	selectid_espacio(id_espacio,'selectIdEspacio');
	selectid_categoria(id_categoria,'selectIdCategoria');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarActividad() {
	if	   (comprobarNombreActividad()
		&& comprobarDescripcionActividad()
		&& comprobarPrecioActividad()
		&& comprobarPlazasActividad()
		&& comprobarColorActividad()
		&& comprobarNombreColorActividad()) {
		return true;
	} else {
		return false;
	}
}

function editarActividad() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'edit', 'actividad');
	
	document.getElementById('formGenericoDiv').classList.remove('modal-open');

	var idioma = getCookie('lang');

	$.ajax({
			method: 'POST',
			url: urlPeticionesAjax,
			data: $('#formGenerico').serialize(),  
		}).done(
			function( response ) {
				if (response.ok == true) {
					document.getElementById('modal').classList.remove('modal-open');
					getListActividades();
				} else {
					$('#mensajeError').removeClass();
					$('#mensajeError').addClass(response.code);
					setLang(idioma);
					document.getElementById('modal').classList.add('modal-open');
				}
				deleteActionController();				
			}
		);
}

// ELIMINAR
function showEliminarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('DETAILACTIVITY');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('formGenerico').setAttribute('action', 'javascript:eliminarActividad();');

	document.getElementById('txtNombreActividad').setAttribute("disabled", true);
	document.getElementById('txtDescripcionActividad').setAttribute("disabled", true);
	document.getElementById('numPrecioActividad').setAttribute("disabled", true);
	document.getElementById('numPlazasActividad').setAttribute("disabled", true);
	document.getElementById('txtColorActividad').setAttribute("disabled", true);
	document.getElementById('txtColorNombreActividad').setAttribute("disabled", true);
	document.getElementById('selectIdEspacio').setAttribute("disabled", true);
	document.getElementById('selectIdCategoria').setAttribute("disabled", true);
	

	document.getElementById('txtIdActividad').value = id_actividad;
	document.getElementById('txtNombreActividad').value = nombre_actividad;
	document.getElementById('txtDescripcionActividad').value = descripcion_actividad;
	document.getElementById('numPrecioActividad').value = precio_actividad;
	document.getElementById('numPlazasActividad').value = numPlazas_actividad;
	document.getElementById('txtColorActividad').value = color_actividad;
	document.getElementById('txtColorNombreActividad').value = color_nombre_actividad;

	selectid_espacio(id_espacio,'selectIdEspacio');
	selectid_categoria(id_categoria,'selectIdCategoria');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function eliminarActividad() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'delete', 'actividad');
	
	document.getElementById('formGenericoDiv').classList.remove('modal-open');

	var idioma = getCookie('lang');

	$.ajax({
			method: 'POST',
			url: urlPeticionesAjax,
			data: $('#formGenerico').serialize(),  
		}).done(
			function( response ) {
				if (response.ok == true) {
					document.getElementById('modal').classList.remove('modal-open');
					getListActividades();
				} else {
					$('#mensajeError').removeClass();
					$('#mensajeError').addClass(response.code);
					setLang(idioma);
					document.getElementById('modal').classList.add('modal-open');
				}
				deleteActionController();				
			}
		);
}