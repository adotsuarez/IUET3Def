// RESETEAR
function resetearFormularioGrupo () {
	let idElementoList = ['txtIdGrupo',
							'txtNombreGrupo',
							'txtDescripcionGrupo'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
	});

	idErrorList = ['errorFormatoNombreGrupo',
					'errorFormatoDescripcionGrupo'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	document.getElementById('txtNombreGrupo').removeAttribute("disabled");
	document.getElementById('txtDescripcionGrupo').removeAttribute("disabled");

	document.getElementById('txtNombreGrupo').classList.remove('hidden');
	document.getElementById('txtDescripcionGrupo').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevoGrupo() {

	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('ADDGROUP');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoGrupo();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','grupo', getListGroups);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoGrupo() {
	if(    comprobarNombreGrupo()
		&& comprobarDescripcionGrupo()) {
		document.getElementById('txtIdGrupo').value = createId('grupo');
		return true;
	} else {
		return false;
	}
}


// DETALLE
function showDetalleGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('DETAILGROUP');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtDescripcionGrupo').setAttribute("disabled", true);
	document.getElementById('txtNombreGrupo').setAttribute("disabled", true);

	document.getElementById('txtDescripcionGrupo').value = descripcion_grupo;
	document.getElementById('txtNombreGrupo').value = nombre_grupo;
	document.getElementById('txtIdGrupo').value = id_grupo;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('EDITGROUP');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('txtDescripcionGrupo').value = descripcion_grupo;
	document.getElementById('txtNombreGrupo').value = nombre_grupo;
	document.getElementById('txtIdGrupo').value = id_grupo;


	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarGrupo();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('edit','grupo', getListGroups);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarGrupo() {
	if(    comprobarNombreGrupo()
	&& comprobarDescripcionGrupo()) {
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarGrupo(id_grupo, nombre_grupo, descripcion_grupo) {
	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('DETAILGROUP');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('txtDescripcionGrupo').setAttribute("disabled", true);
	document.getElementById('txtNombreGrupo').setAttribute("disabled", true);

	document.getElementById('txtDescripcionGrupo').value = descripcion_grupo;
	document.getElementById('txtNombreGrupo').value = nombre_grupo;
	document.getElementById('txtIdGrupo').value = id_grupo;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','grupo', getListGroups);");

	document.getElementById('formGenericoDiv').classList.add('modal-open');
}