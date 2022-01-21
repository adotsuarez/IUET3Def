// RESETEAR
function resetearFormularioPersona () {
	let idElementoList = ['txtNombrePersona',
							'txtApellidosPersona',
							'txtDni',
							'txtFechaNacimientoPersona',
							'txtDireccionPersona',
							'txtTelefonoPersona',
							'txtEmailPersona',
							'fotoPersona',
							'chkEsCeliacoPersona',
							'chkBorradoPersona'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
	});

	idErrorList = ['errorFormatoNombre',
					'errorFormatoApellidos',
					'errorFormatoDni',
					'errorFormatoFechaNacimiento',
					'errorFormatoDireccion',
					'errorFormatoTelefono',
					'errorFormatoEmail',
					'errorFormatoFoto'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('hiddenEsCeliaco').value = 0;
	document.getElementById('hiddenBorradoPersona').value = 1;

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	document.getElementById('abrirArchivo').classList.remove('hidden');
	document.getElementById('botonArchivo').classList.remove('hidden');
}

// NUEVO
function showNuevoPersona() {
	resetearFormularioPersona();

	document.getElementById('formGenericoTitle').classList.add('ADDPERSON');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoPersona();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntityWithFiles('add','persona', getListPersonas, 'fotoPersona');");

	document.getElementById('abrirArchivo').classList.add('hidden');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoPersona() {
	if(		comprobarNombre()
		&& comprobarApellidos()
		&& comprobarDni()
		&& comprobarFechaNacimiento()
		&& comprobarDireccion()
		&& comprobarTelefono()
		&& comprobarEmail()) {
		if (document.getElementById('chkEsCeliacoPersona').checked == true) {
			document.getElementById('hiddenEsCeliaco').value = 1;
		}
		if (document.getElementById('chkBorradoPersona').checked == true) {
			document.getElementById('hiddenBorradoPersona').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

// DETALLE
function showDetallePersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {
	resetearFormularioPersona();

	document.getElementById('formGenericoTitle').classList.add('DETAILPERSON');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('fotoPersona').setAttribute("disabled", true);
	document.getElementById('botonArchivo').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtNombrePersona').setAttribute("readonly", true);
	document.getElementById('txtApellidosPersona').setAttribute("readonly", true);
	document.getElementById('txtFechaNacimientoPersona').setAttribute("readonly", true);
	document.getElementById('txtDireccionPersona').setAttribute("readonly", true);
	document.getElementById('txtTelefonoPersona').setAttribute("readonly", true);
	document.getElementById('txtEmailPersona').setAttribute("readonly", true);
	document.getElementById('chkEsCeliacoPersona').setAttribute("disabled", true);
	document.getElementById('chkBorradoPersona').setAttribute("disabled", true);
	
    document.getElementById('txtDni').value = dni_persona;
    document.getElementById('txtNombrePersona').value = nombre_persona;
    document.getElementById('txtApellidosPersona').value = apellidos_persona;
    document.getElementById('txtFechaNacimientoPersona').value = fechaNacimiento_persona;
    document.getElementById('txtDireccionPersona').value = direccion_persona;
    document.getElementById('txtTelefonoPersona').value = telefono_persona;
    document.getElementById('txtEmailPersona').value = email_persona;
	document.getElementById('abrirArchivo').href = urlImagenes + '/' + foto_persona;

	if (esCeliaco_persona == 1) {
		document.getElementById('chkEsCeliacoPersona').checked = true;
	}

	if (borrado_persona == 0) {
		document.getElementById('chkBorradoPersona').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {
	resetearFormularioPersona();

	document.getElementById('formGenericoTitle').classList.add('EDITPERSON');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarPersona();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntityWithFiles('edit','persona', getListPersonas,'fotoPersona');");

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtNombrePersona').setAttribute("readonly", true);
	document.getElementById('txtApellidosPersona').setAttribute("readonly", true);
	document.getElementById('txtFechaNacimientoPersona').setAttribute("readonly", true);
	document.getElementById('txtDireccionPersona').setAttribute("readonly", true);
	document.getElementById('txtTelefonoPersona').setAttribute("readonly", true);
	document.getElementById('txtEmailPersona').setAttribute("readonly", true);
	
    document.getElementById('txtDni').value = dni_persona;
    document.getElementById('txtNombrePersona').value = nombre_persona;
    document.getElementById('txtApellidosPersona').value = apellidos_persona;
    document.getElementById('txtFechaNacimientoPersona').value = fechaNacimiento_persona;
    document.getElementById('txtDireccionPersona').value = direccion_persona;
    document.getElementById('txtTelefonoPersona').value = telefono_persona;
    document.getElementById('txtEmailPersona').value = email_persona;
	document.getElementById('abrirArchivo').href = urlImagenes + '/' + foto_persona;

	if (esCeliaco_persona == 1) {
		document.getElementById('chkEsCeliacoPersona').checked = true;
	}
	
	if (borrado_persona == 0) {
		document.getElementById('chkBorradoPersona').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarPersona() {
	if (	comprobarNombre()
		&& comprobarApellidos()
		&& comprobarDni()
		&& comprobarDireccion()
		&& comprobarTelefono()
		&& comprobarEmail()
		&& comprobarFechaNacimiento()) {
		if (document.getElementById('chkEsCeliacoPersona').checked == true) {
			document.getElementById('hiddenEsCeliaco').value = 1;
		}
		if (document.getElementById('chkBorradoPersona').checked == true) {
			document.getElementById('hiddenBorradoPersona').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {
	resetearFormularioPersona();

	document.getElementById('formGenericoTitle').classList.add('DELETEPERSON');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','persona', getListPersonas);");

	document.getElementById('fotoPersona').setAttribute("disabled", true);
	document.getElementById('botonArchivo').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtNombrePersona').setAttribute("readonly", true);
	document.getElementById('txtApellidosPersona').setAttribute("readonly", true);
	document.getElementById('txtFechaNacimientoPersona').setAttribute("readonly", true);
	document.getElementById('txtDireccionPersona').setAttribute("readonly", true);
	document.getElementById('txtTelefonoPersona').setAttribute("readonly", true);
	document.getElementById('txtEmailPersona').setAttribute("readonly", true);
	document.getElementById('chkEsCeliacoPersona').setAttribute("disabled", true);
	document.getElementById('chkBorradoPersona').setAttribute("disabled", true);
	
    document.getElementById('txtDni').value = dni_persona;
    document.getElementById('txtNombrePersona').value = nombre_persona;
    document.getElementById('txtApellidosPersona').value = apellidos_persona;
    document.getElementById('txtFechaNacimientoPersona').value = fechaNacimiento_persona;
    document.getElementById('txtDireccionPersona').value = direccion_persona;
    document.getElementById('txtTelefonoPersona').value = telefono_persona;
    document.getElementById('txtEmailPersona').value = email_persona;
	document.getElementById('abrirArchivo').href = urlImagenes + '/' + foto_persona;

	if (esCeliaco_persona == 1) {
		document.getElementById('chkEsCeliacoPersona').checked = true;
	}

	if (borrado_persona == 0) {
		document.getElementById('chkBorradoPersona').checked = true;
	}

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}