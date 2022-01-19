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
							'chkEsCeliacoPersona'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
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
}

// NUEVO
function showNuevoPersona() {
	resetearFormularioPersona();

	document.getElementById('formGenericoTitle').classList.add('ADDPERSON');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoPersona();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','persona', getListPersonas);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoPersona() {
	if(		comprobarNombre()
		&& comprobarApellidos
		&& comprobarDni
		&& comprobarFechaNacimiento
		&& comprobarDireccion
		&& comprobarTelefono
		&& comprobarEmail) {
		return true;
	} else {
		return false;
	}
}

// DETALLE
function showDetallePersona() {
}

// EDITAR
function showEditarPersona() {
}

function comprobarEditarPersona() {
}

function editarPersona() {
}

// ELIMINAR
function showEliminarPersona() {
}

function eliminarPersona() {
}