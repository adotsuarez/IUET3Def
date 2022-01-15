// RESETEAR
function resetearFormularioUsuario () {
	let idElementoList = ['txtIdUsuario',
							'txtUsuario',
							'txtPassword',
							'txtDni',
							'selectIdGrupo',
							'chkBorradoUsuario'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
	});

	idErrorList = ['errorFormatoUser',
					'errorFormatoPass',
					'errorFormatoDni'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");

	document.getElementById('txtDni').removeAttribute("disabled");
	document.getElementById('txtUsuario').removeAttribute("disabled");
	document.getElementById('chkBorradoUsuario').removeAttribute("disabled");
	document.getElementById('selectIdGrupo').removeAttribute("disabled");

	$("#selectIdGrupo").html("<option disabled=\"\" selected=\"\" class=\"GRUPO\"> </option>");

	document.getElementById('txtUsuario').classList.remove('hidden');
	document.getElementById('txtPassword').classList.remove('hidden');
	document.getElementById('txtDni').classList.remove('hidden');
	document.getElementById('chkBorradoUsuario').classList.remove('hidden');
	document.getElementById('selectIdGrupo').classList.remove('hidden');

	document.getElementById('chkBorradoUsuario').checked = false;

	document.getElementById('hiddenBorradoUsuario').value = 1;

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevoUsuario() {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('ADDUSER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoUsuario();');
	document.getElementById('formGenerico').setAttribute('action', 'javascript:nuevoUsuario();');

	selectid_grupo('','selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoUsuario() {
	if(    comprobarUser()
		&& comprobarPass()
		&& comprobarDni()) {
		encriptar('txtPassword');
		// generarId('dni');
		return true;
	} else {
		return false;
	}
}

function nuevoUsuario() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'add', 'usuario');
	
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
					getLisUsers();
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
function showDetalleUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('DETAILUSER');
	document.getElementById('modalActionsArea').classList.add('hidden');

	// document.getElementById('txtPassword').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("disabled", true);
	document.getElementById('txtUsuario').setAttribute("disabled", true);
	document.getElementById('txtPassword').setAttribute("disabled", true);
	document.getElementById('chkBorradoUsuario').setAttribute("disabled", true);
	document.getElementById('selectIdGrupo').setAttribute("disabled", true);

	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;
	document.getElementById('txtPassword').value = contrasena;

	if (borrado_usuario == 0) {
		document.getElementById('chkBorradoUsuario').checked = true;
	}

	selectid_grupo(id_grupo,'selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR
function showEditarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	var initPass = contrasena;

	document.getElementById('formGenericoTitle').classList.add('EDITUSER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	// document.getElementById('txtPassword').classList.add('hidden');

	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;
	document.getElementById('txtPassword').value = contrasena;

	if (borrado_usuario == 0) {
		document.getElementById('chkBorradoUsuario').checked = true;
	}

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarUsuario();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:editarUsuario('initPass');");

	selectid_grupo(id_grupo,'selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarUsuario(initPass) {
	if(    comprobarUser()
		&& comprobarPass()
		&& comprobarDni()) {
		if(document.getElementById('txtPassword').value != initPass) {
			encriptar('txtPassword');
		}
		if (document.getElementById('chkBorradoUsuario').checked == true) {
			document.getElementById('hiddenBorradoUsuario').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

function editarUsuario() {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, 'edit', 'usuario');
	
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
					getLisUsers();
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