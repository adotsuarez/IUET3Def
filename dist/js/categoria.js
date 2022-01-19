// RESETEAR
function resetearFormularioCategoria () {
	let idElementoList = ['txtIdCategoria',
							'txtNombreCategoria',
							'txtDescripcionCategoria'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
	});

	idErrorList = ['errorFormatoNombreCategoria',
					'errorFormatoDescripcionCategoria'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	document.getElementById('txtNombreCategoria').removeAttribute("disabled");
	document.getElementById('txtDescripcionCategoria').removeAttribute("disabled");

	document.getElementById('txtNombreCategoria').classList.remove('hidden');
	document.getElementById('txtDescripcionCategoria').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevoCategoria() {

	resetearFormularioCategoria();

	document.getElementById('formGenericoTitle').classList.add('ADDTAG');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoCategoria();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','categoria', getListCategorias);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoCategoria() {
	if(    comprobarNombreCategoria()
		&& comprobarDescripcionCategoria()) {
		document.getElementById('txtIdCategoria').value = createId('categoria');
		return true;
	} else {
		return false;
	}
}


// DETALLE
function showDetalleCategoria(id_categoria, nombre_categoria, descripcion_categoria) {

	resetearFormularioCategoria();

	document.getElementById('formGenericoTitle').classList.add('DETAILTAG');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtDescripcionCategoria').setAttribute("disabled", true);
	document.getElementById('txtNombreCategoria').setAttribute("disabled", true);

	document.getElementById('txtDescripcionCategoria').value = descripcion_categoria;
	document.getElementById('txtNombreCategoria').value = nombre_categoria;
	document.getElementById('txtIdCategoria').value = id_categoria;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarCategoria(id_categoria, nombre_categoria, descripcion_categoria) {

	resetearFormularioCategoria();

	document.getElementById('formGenericoTitle').classList.add('EDITTAG');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('txtDescripcionCategoria').value = descripcion_categoria;
	document.getElementById('txtNombreCategoria').value = nombre_categoria;
	document.getElementById('txtIdCategoria').value = id_categoria;


	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarCategoria();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('edit','categoria', getListCategorias);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarCategoria() {
	if(    comprobarNombreCategoria()
	&& comprobarDescripcionCategoria()) {
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarCategoria(id_categoria, nombre_categoria, descripcion_categoria) {
	resetearFormularioCategoria();

	document.getElementById('formGenericoTitle').classList.add('DETAILTAG');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('txtDescripcionCategoria').setAttribute("disabled", true);
	document.getElementById('txtNombreCategoria').setAttribute("disabled", true);

	document.getElementById('txtDescripcionCategoria').value = descripcion_categoria;
	document.getElementById('txtNombreCategoria').value = nombre_categoria;
	document.getElementById('txtIdCategoria').value = id_categoria;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','categoria', getListCategorias);");

	document.getElementById('formGenericoDiv').classList.add('modal-open');
}