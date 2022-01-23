// RESETEAR
function resetearFormularioUsuario () {
	let idElementoList = ['txtIdUsuario',
							'txtUsuario',
							'txtPassword',
							'txtNewPassword',
							'txtDni',
							'selectIdGrupo',
							'chkBorradoUsuario',
							'borradoArea'];
	resetearFormulario('formGenerico', idElementoList);

	idElementoList.forEach( function (idElemento) {
		document.getElementById(idElemento).classList.remove('input-error');
		document.getElementById(idElemento).removeAttribute("disabled");
		document.getElementById(idElemento).removeAttribute("readonly");
	});

	idErrorList = ['errorFormatoUser',
					'errorFormatoPass',
					'errorFormatoNewPass',
					'errorFormatoDni'];

	idErrorList.forEach( function (idElemento) {
		document.getElementById(idElemento).removeAttribute("class");
		document.getElementById(idElemento).innerHTML = "";
		document.getElementById(idElemento).classList.add('hidden');
	});

	document.getElementById('formGenericoTitle').removeAttribute("class");
	document.getElementById('formGenericoTitleSubmit').removeAttribute("class");

	$("#selectIdGrupo").html("<option disabled=\"\" selected=\"\" class=\"GRUPO\"> </option>");

	document.getElementById('txtUsuario').classList.remove('hidden');
	document.getElementById('txtPassword').classList.remove('hidden');
	document.getElementById('txtDni').classList.remove('hidden');
	document.getElementById('chkBorradoUsuario').classList.remove('hidden');
	document.getElementById('selectIdGrupo').classList.remove('hidden');

	document.getElementById('chkBorradoUsuario').checked = false;

	document.getElementById('hiddenBorradoUsuario').value = 1;

	document.getElementById('txtNewPassword').setAttribute("disabled", true);
	document.getElementById('txtNewPassword').classList.add("hidden");

	document.getElementById('modalActionsArea').classList.remove('hidden');
}

// NUEVO
function showNuevoUsuario() {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('ADDUSER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONADD');

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarNuevoUsuario();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('add','usuario', getListUsers);");

	selectid_grupo('','selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarNuevoUsuario() {
	if(    comprobarUser()
		&& comprobarPass()
		&& comprobarDni()) {
		encriptar('txtPassword');
		document.getElementById('txtIdUsuario').value = createId('usuario');
		if (document.getElementById('chkBorradoUsuario').checked == true) {
			document.getElementById('hiddenBorradoUsuario').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

// DETALLE
function showDetalleUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('DETAILUSER');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtPassword').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	document.getElementById('txtUsuario').setAttribute("readonly", true);
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

	document.getElementById('formGenericoTitle').classList.add('EDITUSER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('txtPassword').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);


	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;
	document.getElementById('txtPassword').value = contrasena;

	if (borrado_usuario == 0) {
		document.getElementById('chkBorradoUsuario').checked = true;
	}

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarUsuario();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('edit','usuario', getListUsers);");

	selectid_grupo(id_grupo,'selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarUsuario() {
	if(    comprobarUser()
		&& comprobarPass()) {
		if (document.getElementById('chkBorradoUsuario').checked == true) {
			document.getElementById('hiddenBorradoUsuario').value = 0;
		}
		return true;
	} else {
		return false;
	}
}

// ELIMINAR
function showEliminarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('DELETEUSER');
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONELIMINAR');

	document.getElementById('txtPassword').classList.add('hidden');
	document.getElementById('selectIdGrupo').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("readonly", true);
	
	document.getElementById('txtUsuario').setAttribute("readonly", true);
	document.getElementById('chkBorradoUsuario').setAttribute("disabled", true);
	document.getElementById('selectIdGrupo').setAttribute("disabled", true);

	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;

	if (borrado_usuario == 0) {
		document.getElementById('chkBorradoUsuario').checked = true;
	}

	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('delete','usuario', getListUsers);");

	selectid_grupo(id_grupo,'selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// BUSCAR
function comprobarBuscar() {
	if (	buscarId()
		&& buscarUser()
		&& buscarPass()
		&& buscarDni()
		&& buscarIdGrupo()) {
			return true;
		} else {
			return false;
		}
}

function buscar() {
	document.getElementById('formBuscarDiv').classList.remove('modal-open');
	getListUsersBuscar();
}

// CAMBIAR PASS
function showEditarPass(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').innerHTML = "<span class='CAMBIANDOPASS'></span>&nbsp<span class='font-light'>" + usuario + "</span>";
	document.getElementById('formGenericoTitleSubmit').classList.add('ICONEDITAR');

	document.getElementById('txtDni').classList.add('hidden');
	document.getElementById('txtUsuario').classList.add('hidden');
	document.getElementById('borradoArea').classList.add('hidden');
	document.getElementById('selectIdGrupo').classList.add('hidden');

	document.getElementById('txtUsuario').setAttribute("readonly", true);

	document.getElementById('chkBorradoUsuario').setAttribute("disabled", true);
	document.getElementById('selectIdGrupo').setAttribute("disabled", true);

	document.getElementById('txtNewPassword').removeAttribute("disabled");
	document.getElementById('txtNewPassword').classList.remove("hidden");

	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;

	document.getElementById('formGenerico').setAttribute('onSubmit', 'return comprobarEditarPass();');
	document.getElementById('formGenerico').setAttribute('action', "javascript:sendEntity('changepass','usuario', getListUsers);");

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

function comprobarEditarPass() {
	if(    comprobarPass()
		&& comprobarNewPass()) {
		return true;
	} else {
		return false;
	}
}