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
	document.getElementById('formGenerico').setAttribute('action', 'javascript:nuevoGrupo();');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoGrupo() {
	if(    comprobarNombreGrupo()
		&& comprobarDescripcionGrupo()) {
		document.getElementById('txtIdGrupo').value = "320";
		return true;
	} else {
		return false;
	}
}

function nuevoGrupo() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'add', 'grupo');
	
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
					getListGroups();
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
function showDetalleGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('DETAILGROUP');
	document.getElementById('modalActionsArea').classList.add('hidden');

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
	document.getElementById('formGenerico').setAttribute('action', "javascript:editarGrupo();");

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

function editarGrupo() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'edit', 'grupo');
	
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
					getListGroups();
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
function showEliminarGrupo(id_grupo, nombre_grupo, descripcion_grupo) {
	resetearFormularioGrupo();

	document.getElementById('formGenericoTitle').classList.add('DETAILGROUP');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('txtDescripcionGrupo').value = descripcion_grupo;
	document.getElementById('txtNombreGrupo').value = nombre_grupo;
	document.getElementById('txtIdGrupo').value = id_grupo;

	setLang(getCookie('lang'));
	
	document.getElementById('formGenerico').setAttribute('action', "javascript:eliminarGrupo();");

	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function eliminarGrupo() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'delete', 'grupo');
	
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
					getListGroups();
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