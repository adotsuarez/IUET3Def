changedFile = false;

// RESETEAR
function resetearFormularioResponsable () {
	let idElementoList = ['txtDni',
							'txtNumCuentaResponsable',
							'curriculumResponsable',
							'chkBorradoResponsable'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
	});

	idErrorList = ['errorFormatoDni',
					'errorFormatoNumCuenta',
					'errorFormatoCurriculum'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

    document.getElementById('hiddenBorradoResponsable').value = 1;

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	document.getElementById('abrirArchivo').classList.remove('hidden');
	document.getElementById('botonArchivo').classList.remove('hidden');

	document.getElementById('modalActionsArea').classList.remove('hidden');
	document.getElementById('oldFile').setAttribute("disabled",true);
}

// NUEVO
function showNuevoResponsable() {
	resetearFormularioResponsable();

	document.getElementById('formGenericoTitle').classList.add('ADDMANAGER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoResponsable();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntityWithFiles('add','responsable', getListResponsables, 'curriculumResponsable');");

	document.getElementById('abrirArchivo').classList.add('hidden');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoResponsable() {
	if(		comprobarDni()
		&& comprobarNumCuenta()
		&& comprobarCurriculum()
		) {
        if (document.getElementById('chkBorradoResponsable').checked == true) {
            document.getElementById('hiddenBorradoResponsable').value = 0;
        }
		return true;
	} else {
		return false;
	}
}

// DETALLE
function showDetalleResponsable(dni_responsable, curriculum_responsable, numCuenta_responsable, borrado_responsable) {
	resetearFormularioResponsable();

	document.getElementById('formGenericoTitle').classList.add('DETAILMANAGER');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('curriculumResponsable').setAttribute("disabled", true);
	document.getElementById('botonArchivo').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtNumCuentaResponsable').setAttribute("readonly", true);
	document.getElementById('curriculumResponsable').setAttribute("readonly", true);
	document.getElementById('chkBorradoResponsable').setAttribute("disabled", true);
	
    document.getElementById('txtDni').value = dni_responsable;
    document.getElementById('txtNumCuentaResponsable').value = numCuenta_responsable;
	document.getElementById('abrirArchivo').href = urlCurriculums + '/' + curriculum_responsable;

	if (borrado_responsable == 0) {
		document.getElementById('chkBorradoResponsable').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarResponsable(dni_responsable, curriculum_responsable, numCuenta_responsable, borrado_responsable) {
	resetearFormularioResponsable();

	document.getElementById('formGenericoTitle').classList.add('EDITMANAGER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarResponsable();');
	document.getElementById('formGenerico').setAttribute('action', 'javascript:send("'+ curriculum_responsable + '");');


	document.getElementById('txtDni').setAttribute("readonly", true);
	
    document.getElementById('txtDni').value = dni_responsable;
    document.getElementById('txtNumCuentaResponsable').value = numCuenta_responsable;
	document.getElementById('abrirArchivo').href = urlCurriculums + '/' + curriculum_responsable;
	document.getElementById('oldFile').value = curriculum_responsable;

	if (borrado_responsable == 0) {
		document.getElementById('chkBorradoResponsable').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarResponsable() {
	if(		comprobarDni()
		&& comprobarNumCuenta()
		&& comprobarCurriculum()) {
        if (document.getElementById('chkBorradoResponsable').checked == true) {
			document.getElementById('hiddenBorradoResponsable').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

function send() {
	if (changedFile == true) {
		sendEntityWithFiles('edit','responsable', getListResponsables,'curriculumResponsable');
	} else {
		document.getElementById('oldFile').removeAttribute("disabled");
		sendEntity('edit','responsable', getListResponsables);
	}
}

// ELIMINAR
function showEliminarResponsable(dni_responsable, curriculum_responsable, numCuenta_responsable, borrado_responsable) {
	resetearFormularioResponsable();

	document.getElementById('formGenericoTitle').classList.add('DELETEMANAGER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','responsable', getListResponsables);");

	document.getElementById('curriculumResponsable').setAttribute("disabled", true);
	document.getElementById('botonArchivo').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtNumCuentaResponsable').setAttribute("readonly", true);
	document.getElementById('curriculumResponsable').setAttribute("readonly", true);
	document.getElementById('chkBorradoResponsable').setAttribute("disabled", true);
	
    document.getElementById('txtDni').value = dni_responsable;
    document.getElementById('txtNumCuentaResponsable').value = numCuenta_responsable;
	document.getElementById('abrirArchivo').href = urlCurriculums + '/' + curriculum_responsable;

	if (borrado_responsable == 0) {
		document.getElementById('chkBorradoResponsable').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// BUSCAR
function comprobarBuscar() {
	if (	buscarDni()
		&& buscarNumCuenta()
		&& buscarCurriculum()) {
			return true;
		} else {
			return false;
		}
}

function buscar() {
	document.getElementById('formBuscarDiv').classList.remove('modal-open');
	getListResponsablesBuscar();
}