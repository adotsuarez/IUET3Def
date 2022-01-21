// RESETEAR
function resetearFormularioActividad () {
	let idElementoList = ['txtIdActividad',
							'txtNombreActividad',
							'txtDescripcionActividad',
							'numPrecioActividad',
							'numPlazasActividad',
							'txtColorActividad',
							'txtColorNombreActividad',
							'selectIdEspacio',
							'selectIdCategoria'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach(function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
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
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");


	$("#selectIdEspacio").html("<option disabled=\"\" selected=\"\" class=\"ESPACIO\"> </option>");
	$("#selectIdCategoria").html("<option disabled=\"\" selected=\"\" class=\"CATEGORIA\"> </option>");

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevaActividad() {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('ADDACTIVITY');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevaActividad();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','actividad', getListActivities);");

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

// DETALLE
function showDetalleActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('DETAILACTIVITY');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtIdActividad').setAttribute("readonly", true);
	document.getElementById('txtNombreActividad').setAttribute("readonly", true);
	document.getElementById('txtDescripcionActividad').setAttribute("readonly", true);
	document.getElementById('numPrecioActividad').setAttribute("readonly", true);
	document.getElementById('numPlazasActividad').setAttribute("readonly", true);
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
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('edit','actividad', getListActivities);");

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
	if (	comprobarNombreActividad()
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

// ELIMINAR
function showEliminarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	resetearFormularioActividad();

	document.getElementById('formGenericoTitle').classList.add('DETAILACTIVITY');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','actividad', getListActivities);");

	document.getElementById('txtNombreActividad').setAttribute("readonly", true);
	document.getElementById('txtDescripcionActividad').setAttribute("readonly", true);
	document.getElementById('numPrecioActividad').setAttribute("readonly", true);
	document.getElementById('numPlazasActividad').setAttribute("readonly", true);
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

// BUSCAR
function comprobarBuscar() {
	if (	buscarId()
		&& buscarId()
		&& buscarNombreActividad()
		&& buscarDescripcionActividad()
		&& buscarColorActividad()
		&& buscarColorNombreActividad()
		&& buscarPrecioActividad()
		&& buscarPlazasActividad()
		&& buscarIdEspacio()
		&& buscarIdCategoria()) {
			return true;
		} else {
			return false;
		}
}

function buscar() {
	document.getElementById('formBuscarDiv').classList.remove('modal-open');
	getListActivitiesBuscar();
}