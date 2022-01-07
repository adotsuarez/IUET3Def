function comprobarRegistro() {
	if(    comprobarDni()
        && comprobarNombre()
        && comprobarApellidos()
        && comprobarFechaNacimiento()
        && comprobarDireccion()
        && comprobarEmail()
        && comprobarTelefono()
        && comprobarFoto()
        && comprobarUser()
        && comprobarPass()) {
        encriptar("txtPassword");
        return true;
	} else {
		return false;
	}

}

function registrar() {
	addActionControler(document.formularioRegistro, "registrar", "AUTH");

	var idioma = getCookie('lang');

    var datos = new FormData();

    var formdata = $("#formularioRegistro").serialize();
    var file = $("#fotoPersona")[0].files[0];
    
    datos.append("upload", file);
    datos.append("formulario", formdata);

	$.ajax(
        {
            method: "POST",
            url: urlPeticionesAjax,
            data: datos,
            contentType: false,
            processData: false,
	    }
    ).done(
        function(response) {
            if (response.ok == true) {
                window.location.href = "login.html";
            } else {
                $("#mensajeError").removeClass();
                $("#mensajeError").addClass(response.code);
                let idElementoList = ["txtDniPersona",
                                      "txtNombrePersona",
                                      "txtApellidosPersona",
                                      "txtFechaNacimientoPersona",
                                      "txtDireccionPersona",
                                      "txtEmailPersona",
                                      "txtTelefonoPersona",
                                      "txtUsuario",
                                      "txtPassword"];
                resetearFormulario("formularioRegistro", idElementoList);
                setLang(idioma);
                document.getElementById("modal").classList.add('modal-open');
		    }	
		deleteActionController();
	    }
    );
}