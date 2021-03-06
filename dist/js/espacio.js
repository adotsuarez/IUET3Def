// RESETEAR
function resetearFormularioEspacio () {
	let idElementoList = ['txtIdEspacio',
							'txtNombreEspacio',
							'txtDescripcionEspacio'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
	});

	idErrorList = ['errorFormatoNombreEspacio',
					'errorFormatoDescripcionEspacio'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	document.getElementById('txtNombreEspacio').classList.remove('hidden');
	document.getElementById('txtDescripcionEspacio').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevoEspacio() {

	resetearFormularioEspacio();

	document.getElementById('formGenericoTitle').classList.add('ADDSPACE');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoEspacio();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','espacio', getListEspacios);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoEspacio() {
	if(    comprobarNombreEspacio()
		&& comprobarDescripcionEspacio()) {
		document.getElementById('txtIdEspacio').value = createId('espacio');
		return true;
	} else {
		return false;
	}
}


// DETALLE
function showDetalleEspacio(id_espacio, nombre_espacio, descripcion_espacio) {

	resetearFormularioEspacio();

	document.getElementById('formGenericoTitle').classList.add('DETAILSPACE');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtDescripcionEspacio').setAttribute("readonly", true);
	document.getElementById('txtNombreEspacio').setAttribute("readonly", true);

	document.getElementById('txtDescripcionEspacio').value = descripcion_espacio;
	document.getElementById('txtNombreEspacio').value = nombre_espacio;
	document.getElementById('txtIdEspacio').value = id_espacio;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarEspacio(id_espacio, nombre_espacio, descripcion_espacio) {

	resetearFormularioEspacio();

	document.getElementById('formGenericoTitle').classList.add('EDITSPACE');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('txtDescripcionEspacio').value = descripcion_espacio;
	document.getElementById('txtNombreEspacio').value = nombre_espacio;
	document.getElementById('txtIdEspacio').value = id_espacio;


	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarEspacio();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('edit','espacio', getListEspacios);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarEspacio() {
	if(    comprobarNombreEspacio()
	&& comprobarDescripcionEspacio()) {
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarEspacio(id_espacio, nombre_espacio, descripcion_espacio) {
	resetearFormularioEspacio();

	document.getElementById('formGenericoTitle').classList.add('DELETESPACE');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('txtDescripcionEspacio').setAttribute("readonly", true);
	document.getElementById('txtNombreEspacio').setAttribute("readonly", true);

	document.getElementById('txtDescripcionEspacio').value = descripcion_espacio;
	document.getElementById('txtNombreEspacio').value = nombre_espacio;
	document.getElementById('txtIdEspacio').value = id_espacio;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','espacio', getListEspacios);");

	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// BUSCAR
function comprobarBuscar() {
	if (	buscarId()
		&& buscarNombreEspacio()
		&& buscarDescripcionEspacio()) {
			return true;
		} else {
			return false;
		}
}

function buscar() {
	document.getElementById('formBuscarDiv').classList.remove('modal-open');
	getListEspaciosBuscar();
}