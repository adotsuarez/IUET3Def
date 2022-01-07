// AÑADIR
function showAnadirUsuario() {

	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se rellena el action y el onsubmit
	$("#formgenericousuario").attr('action' , 'javascript:addusuario();');
	$("#formgenericousuario").attr('onsubmit' , 'comprobaraddsubmit();');

	// rellenamos los onblur de los input que se validad
	$("#txtdnisuario").attr('onblur', 'comprobarDNI();');
	$("#txtUsuario").attr('onblur', 'comprobarUser();');

	// se rellena los select
	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

    // se muestra el div con el formulario
    $("#divformgenericousuario").attr('style', 'display: block');

}

function comprobaraddsubmit(){

	if (comprobarUser() && comprobarPass() && comprobarDireccion() && comprobarFoto() && comprobarDni() && comprobarNombre()
	&& comprobarApellidos() && comprobarFechaNacimiento() && comprobarEmail() && comprobarExtFoto()) {
		return true;
	}
	else {
		return false;
	}
	
}

function addusuario() {
    var idSession = getCookie("sessionId");

    insertacampo(document.formgenericousuario, "ID_SESSION", idSession);
    addActionControler(document.formgenericousuario, "add", "usuario");

    var idioma = getCookie("lang");

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericousuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax("add");
        }

        actualizaMensajesRespuestAjax(response.code);
        setLang(idioma);
        deleteActionController();
    });
}

// EDITAR ✅
function showEditarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se rellena el action y el onsubmit
	$("#formgenericousuario").attr('action' , 'javascript:editusuario();');
	$("#formgenericousuario").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
    $("#txtidUsuario").val(id);
    $("#txtdniusuario").val(dni_usuario);
	$("#txtUsuario").val(usuario);

	// rellenamos los onblur de los input que se validad
	$("#txtdnisuario").attr('onblur', 'comprobarDNI();');
	$("#txtUsuario").attr('onblur', 'comprobarUser();');

	// la contraseña no se muestra ni se envia
	$("#txtPassword").attr('type', 'hidden');	
	$("#txtPassword").attr('disabled', true);
	// label de contraseña ocultado
	$("#labelcontrasena").attr('style', 'display:none');	

	// se rellena los select
	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

    // se muestra el div con el formulario
    $("#divformgenericousuario").attr('style', 'display: block');

}

function comprobareditsubmit(){

	if (comprobarUser() && comprobarPass() && comprobarDireccion() && comprobarFoto() && comprobarDni() && comprobarNombre()
	&& comprobarApellidos() && comprobarFechaNacimiento() && comprobarEmail() && comprobarExtFoto()) {
		return true;
	}
	else {
		return false;
	}

}

function editusuario() {
    var idSession = getCookie("sessionId");

    insertacampo(document.formgenericousuario, "ID_SESSION", idSession);
    addActionControler(document.formgenericousuario, "edit", "usuario");

    $("#txtidUsuario").attr("disabled", false);

    var idioma = getCookie("lang");

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericousuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax("edit");
        }

        actualizaMensajesRespuestAjax(response.code);
        setLang(idioma);
        deleteActionController();
    });
}

// ELIMINAR ✅
function showEliminarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario){

	$("#divformgenericousuario").attr('style', 'display: block');
	$("#formgenericousuario").attr('action' , 'javascript:deleteusuario();');
	$("#formgenericousuario").attr('onsubmit' , '');

	$("#txtidUsuario").val(id);
	$("#txtdniusuario").val(dni_usuario);
	$("#txtUsuario").val(usuario);

	// la contraseña no se muestra ni se envia
	$("#txtPassword").attr('type', 'hidden');	
	$("#txtPassword").attr('disabled', true);

	// label de contraseña ocultado
	$("#labelcontrasena").attr('style', 'display:none');	

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#txtidUsuario").attr('disabled', true);
	$("#txtdniusuario").attr('disabled', true);
	$("#txtPassword").attr('disabled', true);
	$("#txtUsuario").attr('disabled', true);
	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);
}

function deleteusuario() {
    var idSession = getCookie("sessionId");

    insertacampo(document.formgenericousuario, "ID_SESSION", idSession);
    addActionControler(document.formgenericousuario, "delete", "usuario");

    $("#txtdniusuario").attr("disabled", false);

    var idioma = getCookie("lang");

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericousuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax("borrar");
        }

        actualizaMensajesRespuestAjax(response.code);
        setLang(idioma);
        deleteActionController();
    });
}

// VER
// ⚠️ Pendiente de adaptar a formulario genérico
function showDetalleUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario){

	//divdetalleusuario = document.createElement('div');
	//divdetalleusuario.id = 'divdetalleusuario';
	//document.body.appendChild(divdetalleusuario);

	$("#formdetalleusuario").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleusuario','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleusuario').append(label);
	$('#divdetalleusuario').attr('style', 'display: block');
	$('#divdetalleusuario').attr('style', 'border: 1px solid black');

	crearformoculto('formdetalleusuario','none');
    $('#formdetalleusuario').attr('style', 'display: block');

    form = document.getElementById('formdetalleusuario');

	label = "<label class='id_usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='dni_usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form,'txtdniusuario',dni_usuario);
	$("#txtdniusuario").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form,'txtusuario',dni_usuario);
	$("#txtusuario").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='id_grupo'></label>"+
			"<select name='id_grupo' id='id_grupo' ></select><br>"+
            "<label class='borrado_usuario'></label>"+
            "<select name='borrado_usuario' id='borrado_usuario' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";
    $("#formdetalleusuario").append(label);

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);

	$("#divdetalleusuario").append(formdetalleusuario);

	setLang('');
	
}

// BUSCAR ❌
function buscarUsuario(){
}

// OTRAS FUNCIONES AUXILIARES
// Reset
function resetearformulariousuario(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidUsuario").attr('disabled', false);
	$("#txtdniusuario").attr('disabled', false);
	$("#txtPassword").attr('disabled', false);
	$("#txtUsuario").attr('disabled', false);
	$("#id_grupo").attr('disabled', false);
	$("#borrado_usuario").attr('disabled', false);

	$("#txtidUsuario").val('');
	$("#txtdniusuario").val('');
	$("#txtPassword").val('');
	$("#txtUsuario").val('');
	$("#id_grupo").val('');

	$("#txtPassword").attr('type', 'password');
	$("#labelcontrasena").attr('style', 'display:block');

	$("#txtidUsuario").attr('onblur', '');
	$("#txtdniusuario").attr('onblur', '');
	$("#txtPassword").attr('onblur', '');
	$("#txtUsuario").attr('onblur', '');
		
	$("divformgenericousuario").attr('style', 'display: none');

}