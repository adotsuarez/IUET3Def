function comprobarLogin() {

	if(comprobarUser() && comprobarPass()) {
        encriptar("txtPassword");
        generarSessionId();
        return true;
	} else {
		return false;
	}

}

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