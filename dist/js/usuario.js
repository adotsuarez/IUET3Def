// RESETEAR
function resetearFormularioUsuario () {
	let idElementoList = ['txtIdUsuario',
							'txtUsuario',
							'txtPassword',
							'txtDni',
							'selectIdGrupo',
							'chkBorradoUsuario'];
	resetearFormulario('formGenerico', idElementoList);

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
function showDetalleUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	resetearFormularioUsuario();

	document.getElementById('formGenericoTitle').classList.add('DETAILUSER');
	document.getElementById('modalActionsArea').classList.add('hidden');

	document.getElementById('txtPassword').classList.add('hidden');

	document.getElementById('txtDni').setAttribute("disabled", true);
	document.getElementById('txtUsuario').setAttribute("disabled", true);
	document.getElementById('chkBorradoUsuario').setAttribute("disabled", true);
	document.getElementById('selectIdGrupo').setAttribute("disabled", true);

	document.getElementById('txtIdUsuario').value = id;
	document.getElementById('txtDni').value = dni_usuario;
	document.getElementById('txtUsuario').value = usuario;

	if (borrado_usuario == 0) {
		document.getElementById('chkBorradoUsuario').checked = true;
	}

	selectid_grupo(id_grupo,'selectIdGrupo');

	setLang(getCookie('lang'));
	
	document.getElementById('formGenericoDiv').classList.add('modal-open');
}

// EDITAR

// ELIMINAR