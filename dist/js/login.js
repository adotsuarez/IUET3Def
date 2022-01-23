function login() {
	var idSession = getCookie("sessionId");

    insertacampo(document.formularioLogin, "ID_SESSION", idSession);
	addActionControler(document.formularioLogin, "login", "AUTH");

	var idioma = getCookie('lang');

	$.ajax(
		{
			method: "POST",
	  		url: urlPeticionesAjax,
	  		data: decodeURIComponent($("#formularioLogin").serialize()),
		}
	).done(
		function(response) {
			if (response.ok == true) {
				window.location.href = "menu.html";
			} else {
				$("#mensajeError").removeClass();
				$("#mensajeError").addClass(response.code);
				let idElementoList = ["txtUsuario",
									  "txtPassword"];
				resetearFormulario("formularioLogin", idElementoList);
				setLang(idioma);
				document.getElementById("modal").classList.add('modal-open');
			}	
			deleteActionController();
		}
	);
}

function comprobarLogin() {
	if(comprobarUser() && comprobarPass()) {
        encriptar("txtPassword");
        generarSessionId();
        return true;
	} else {
		return false;
	}
}

function recuperarPass() {
	var idSession = getCookie("sessionId");

    insertacampo(document.formularioRecuperarPass, "ID_SESSION", idSession);
	addActionControler(document.formularioRecuperarPass, "recoverpass", "AUTH");

	var idioma = getCookie('lang');

	$.ajax(
		{
			method: "POST",
	  		url: urlPeticionesAjax,
	  		data: decodeURIComponent($("#formularioRecuperarPass").serialize()),
		}
	).done(
		function(response) {
			if (response.ok == true) {
				$("#mensajeError").removeClass();
				document.getElementById("mensajeError").innerHTML = "<span class='" + response.code + "'></span><span class='mt-2 md:mt-0 md:ml-2 kbd cursor-copy text-primary selection:bg-primary selection:text-primary-content '>" + response.resource + "</span>";
				setLang(idioma);
				document.getElementById("modal").classList.add('modal-open');
			} else {
				$("#mensajeError").removeClass();
				$("#mensajeError").addClass(response.code);
				let idElementoList = ["txtRecoverUsuario",
									  "txtEmailPersona"];
				resetearFormulario("formularioRecuperarPass", idElementoList);
				setLang(idioma);
				document.getElementById("modal").classList.add('modal-open');
			}	
			deleteActionController();
		}
	);
}

function comprobarRecoverPass() {
	if(comprobarRecoverUser() && comprobarEmail()) {
		document.getElementById('modalRecoverPass').classList.remove('modal-open');
        return true;
	} else {
		return false;
	}
}