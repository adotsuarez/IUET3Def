/**Función para incluir el menú de idioma*/
function includeUserDesconectar() {

	$("#UserDesconectar").html("");

	var UserDesconectar = '<div class="UserDesconectar">'+
							'<a onclick="desconectar();">Desconectar</a>'+
                			'<label id="usuario"></label>'+
                			'</div>';

	$("#UserDesconectar").append(UserDesconectar);
}

/**Función que valida el usuario*/
function comprobarUser() {
		
	if (   validaNoVacio("txtUsuario", "errorFormatoUser", "usuario")
		&& comprobarLetrasNumeros("txtUsuario", 45, 3, "errorFormatoUser", "usuario")) {
		validacionOK("txtUsuario", "errorFormatoUser");
		return true;
	} else {
		validacionKO("txtUsuario", "errorFormatoUser");		
		return false;
	}

}

/**Función que valida la contraseña*/
function comprobarPass() {
	
	if (   validaNoVacio("txtPassword", "errorFormatoPass", "pass")
		&& comprobarLetrasNumeros("txtPassword", 45, 3, "errorFormatoPass", "pass")) {
		validacionOK("txtPassword", "errorFormatoPass");
		return true;
	} else {
		validacionKO("txtPassword", "errorFormatoPass");		
		return false;
	}

}

/**Función que válida dirección*/
function comprobarDireccion() {
	if(	   validaNoVacio("txtDireccionPersona", "errorFormatoDireccion", "direccion")
		&& comprobarLetrasNumeros("txtDireccionPersona", 200, 3, "errorFormatoDireccion", "direccion")) {
			validacionOK("txtDireccionPersona", "errorFormatoDireccion");
			return true;
		} else {
			validacionKO("txtDireccionPersona", "errorFormatoDireccion");
		}
}

/**Función que válida 	la foto*/
function comprobarFoto() {
		
	if (   validaNoVacio("fotoPersona", "errorFormatoFoto", "foto")
		&& comprobarLetrasNumeros("fotoPersona", 100, 5, "errorFormatoFoto", "foto")
		&& comprobarExtFoto("fotoPersona", "errorFormatoFoto")) {
		validacionOK("fotoPersona", "errorFormatoFoto");
		return true;
	} else {
		validacionKO("fotoPersona", "errorFormatoFoto");	
		return false;
	}
		
}

/**Función que valida el DNI*/
function comprobarDni() {
		
	if (   validaNoVacio("txtDni", "errorFormatoDni", "dni")
		&& comprobarLetrasNumeros("txtDni", 9, 9, "errorFormatoDni", "dni")
		&& comprobarLetraDni("txtDni", "errorFormatoDni")
		)
	{
		validacionOK("txtDni", "errorFormatoDni");
		return true;
	} else {
		validacionKO("txtDni", "errorFormatoDni");		
		return false;
	}

}

/** Función que valida el nombre */
function comprobarNombre(){
	if (   validaNoVacio("txtNombrePersona", "errorFormatoNombre", "nombre")
		&& comprobarLetrasNumeros("txtNombrePersona", 45, 3, "errorFormatoNombre", "nombre")) {
		validacionOK("txtNombrePersona", "errorFormatoNombre");
		return true;
	} else {
		validacionKO("txtNombrePersona", "errorFormatoNombre");		
		return false;
	}
}

/** Función que valida los apellidos */
function comprobarApellidos(){
	if (   validaNoVacio("txtApellidosPersona", "errorFormatoApellidos", "apellidos")
		&& comprobarLetrasNumeros("txtApellidosPersona", 45, 3, "errorFormatoApellidos", "nombre")) {
		validacionOK("txtApellidosPersona", "errorFormatoApellidos");
		return true;
	} else {
		validacionKO("txtApellidosPersona", "errorFormatoApellidos");		
		return false;
	}
}

/** Función que valida la fecha de nacimiento*/
function comprobarFechaNacimiento(){
	if (   validaNoVacio("txtFechaNacimientoPersona", "errorFormatoFechaNacimiento", "fechaNacimiento")
		&& comprobarFechas("txtFechaNacimientoPersona","errorFormatoFechaNacimiento", "fechaNacimiento")) {
		validacionOK("txtFechaNacimientoPersona", "errorFormatoFechaNacimiento");
		return true;
	} else {
		validacionKO("txtFechaNacimientoPersona", "errorFormatoFechaNacimiento");
		return false;
	}


}

/**Función que valida el número de teléfono */
function comprobarTelefono(){
	if (   validaNoVacio("txtTelefonoPersona", "errorFormatoTelefono", "telefono")
		&& comprobarLetrasNumeros("txtTelefonoPersona", 9, 9, "errorFormatoTelefono", "telefono")) {
		validacionOK("txtTelefonoPersona", "errorFormatoTelefono");
		return true;
	} else {
		validacionKO("txtTelefonoPersona", "errorFormatoTelefono");
		return false;
	}
}


function comprobarEmail(){
	if (   validaNoVacio("txtEmailPersona", "errorFormatoEmail", "correo")
		&& comprobarLetrasNumeros("txtEmailPersona", 45, 11, "errorFormatoEmail", "correo")) {
		validacionOK("txtEmailPersona", "errorFormatoEmail");
		return true;
	} else {
		validacionKO("txtEmailPersona", "errorFormatoEmail");		
		return false;
	}
}

/** Función que valida el nombre de un grupo*/
function comprobarNombreGrupo(){
	if (   validaNoVacio("txtNombreGrupo", "errorFormatoNombreGrupo", "nombregrupo")
		&& comprobarLetrasNumeros("txtNombreGrupo", 45, 3, "errorFormatoNombreGrupo", "nombregrupo")) {
		validacionOK("txtNombreGrupo", "errorFormatoNombreGrupo");
		return true;
	} else {
		validacionKO("txtNombreGrupo", "errorFormatoNombreGrupo");		
		return false;
	}
}
 
 
/** Función que valida la descripción de un grupo */
function comprobarDescripcionGrupo(){
	if (   validaNoVacio("txtDescripcionGrupo", "errorFormatoDescripcionGrupo", "descripcion")
		&& comprobarLetrasNumeros("txtDescripcionGrupo", 200, 20, "errorFormatoDescripcionGrupo", "descripcion")) {
		validacionOK("txtDescripcionGrupo", "errorFormatoDescripcionGrupo");
		return true;
	} else {
		validacionKO("txtDescripcionGrupo", "errorFormatoDescripcionGrupo");		
		return false;
	}
}

/**Función que valida si un campo está vacío*/
function validaNoVacio(idElemento, idElementoError, campo) {
	var codigo = "GENERICO";

  	var valor = document.getElementById(idElemento).value.replace("C: \\fakepath\\", "");
  	// var nombre = document.getElementById(idElemento).name;
  	var longitud = document.getElementById(idElemento).value.replace("C: \\fakepath\\", "").length;

  	if ((valor == null) || (longitud == 0)) { 		
  		switch(campo) {
	    	case 'usuario' : 
		  		codigo = "02140";
			break;
			case 'pass' :
				codigo = "02141"
			break;
			case 'nombre' :
				codigo = "02131"
			break;
			case 'email' :
				codigo = "02119"
			break;
			case 'apellidos' :
				codigo = "02128"
			break;
			case 'fechaNacimiento' :
				codigo = "02129"
			break;
			case 'foto' :
				codigo = "02133"
			break;
			case 'dni' :
				codigo = "02134"
			break;
			case "correo":
				codigo = "02143";
				break;
			case "direccion":
				codigo = "02144";
				break;
			case "telefono":
				codigo = "02148";
				break;
			case "nombregrupo":
				codigo = "99999";
				break;
			case "descripcion":
				codigo = "99999";
				break;
		}
		addCodeError(idElementoError, codigo);
	    return false;
	} else {
	    return true;
	 }

}

/**Función que comprueba la letra del DNI introducido sea la correcta*/
function comprobarLetraDni(idElemento, idElementoError){
	
	var codigo = "GENERICO"; //codigo vacio para ser sobreescrito por el codigo encontrado o no

	let dniChars = "TRWAGMYFPDXBNJZSQVHLCKE"; //cadena de caracteres del DNI

	var dni = document.getElementById(idElemento).value; //obtiene el valor del campo, en este caso el DNI

	let numDni = dni.slice(0,8); //obtiene el número del DNi que se encuentra desde la posición 0 hasta la 7
	let letDni = dni.substring(8); //obtiene la letra del DNI que ocupa la posición 8 en el array

	Number(numDni); //convierte el string a número

	let valNumDni = numDni % 23; //obtiene el resto de la división del número del DNI entre 23

	//si la letra del string dado el resto no es igual a la letra dada entonceS
	if(dniChars.substring(valNumDni,valNumDni+1) != letDni) {
		codigo = "02127"; //código de error de que la letra no corresponde al número introducido
		addCodeError(idElementoError, codigo); //añade el código para mostrarse por consola???
		return false; //devuelve un false en el comprobarDni
	} else {
		return true; //al ser iguales, la letra es la misma que introdujo el usuario, devuelve un true
	}	
}


function comprobarExtFoto(idElemento, idElementoError){
	
	var codigo = "GENERICO"; //se define la variable codigo en la que se guardara el codigo del error

	let extJpg = ".jpg"; //variable de text con el string de la extensión .jpg
	let extPng = ".png"; //variable de text con el string de la extensión .png

	var nombreArchivo = document.getElementById(idElemento).value.replace("C: \\fakepath\\", ""); //obtiene el nombre del archivo
	
	tamNombreArchivo = nombreArchivo.length; //guarda en una variable el tamaño del spring del archivo 

	let extArchivo = nombreArchivo.slice(tamNombreArchivo-4, tamNombreArchivo); //almacena en una variable de la extensión del archivo

	if(extArchivo != extPng && extArchivo != extJpg) {
		codigo = "02132"; //código de error de que el archivo no corresponde a ninguno de los dos permitidos
		addCodeError(idElementoError, codigo); //añade el código para mostrarse por consola???
		return false; //devuelve un false en el comprobarFoto	
	} else {
		return true;
	}

}

function comprobarLetrasNumeros(idElemento, sizeMax, sizeMin, idElementoError, campo) {

	var codigo = "GENERICO";

	var valor = document.getElementById(idElemento).value.replace("C:\\fakepath\\", "");
  	var longitud = document.getElementById(idElemento).value.replace("C:\\fakepath\\", "").length;
 
	if (longitud > sizeMax) {    	
  		switch(campo) {
	    	case 'usuario' : 
		  		codigo = "02111";
				break;
			case 'pass' :
				codigo = "02114";
				break;
			case 'foto' : 
		  		codigo = "02137";
				break;
			case 'dni' :
				codigo = "02135";
				break;
			case 'nombre' :
				codigo = "02117";
				break;
			case 'apellidos' :
				codigo = "02117";
				break;
			case "correo":
				codigo = "02120";
				break;
			case "direccion":
				codigo = "02146";
				break;
			case "telefono":
				codigo = "02149";
				break;
			case "nombregrupo":
				codigo = "99999";
				break;
			case "descripcion":
				codigo = "99999";
				break;
		}
		addCodeError(idElementoError, codigo);
    	return false;

	} else if (longitud < sizeMin) {
		switch(campo) {
	    	case 'usuario' : 
		  		codigo = "02110";
				break;
			case 'pass' :
				codigo = "02113";
				break;
			case 'foto' : 
		  		codigo = "02136";
				break;
			case 'dni' :
				codigo = "02135";
				break;
			case 'nombre' :
				codigo = "02116";
				break;
			case 'apellidos' :
				codigo = "02116";
				break;
			case "correo" :
				codigo = "02119";
				break;
			case "direccion" :
				codigo = "02145";
				break;
			case "telefono":
				codigo = "02149";
				break;
			case "nombregrupo":
				codigo = "99999";
				break;
			case "descripcion":
				codigo = "99999";
				break;
		}
		addCodeError(idElementoError, codigo);
    	return false;
	}
	
	if (campo == 'usuario' ||
		campo == 'pass' ||
		campo == 'dni') {
		var patron = /^[a-zA-Z0-9]*$/;
			
		if (!patron.test(valor)) { 
			switch(campo) {
				case 'usuario' : 
					codigo = "02112";
					break;
				case 'pass' :
					codigo = "02115"
					break;
				case 'dni' :
					codigo = "02138"
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'nombre' ||
		campo == 'apellidos' ||
		campo == 'nombregrupo' ||
		campo == 'descripcion') {
		var patron = /^[a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇüñÜÑ ]*$/;
			
		if (!patron.test(valor)) {
			switch(campo) {
				case 'nombre' : 
					codigo = "02118";
					break;
				case 'apellidos' :
					codigo = "02118"
					break;
				case "nombregrupo":
					codigo = "99999";
					break;
				case "descripcion":
					codigo = "99999";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'foto') {
		var patron = /^[a-zA-Z0-9\u00f1\u00d1.]*$/;
			
		if (!patron.test(valor)) { 
			switch(campo) {
				case 'foto' : 
					codigo = "02139";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if(campo == "correo") {
		var patron =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!patron.test(valor)) {
			switch(campo) {
				case "correo" :
					codigo = "02121";
				break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'direccion') {
		var patron = /^[0-9a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇüñÜÑ ]*$/;
			
		if (!patron.test(valor)) {
			switch(campo) {
				case "direccion" :
					codigo = "02147";
				break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
		
	}

	if(campo == 'telefono') {
		var patron = /^[9,8][1-8][0-9]*|[6-7][0-9]*$/;

		if(!patron.test(valor)) {
			switch(campo) {
				case 'telefono' :
					codigo = "02149";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	return true;
}

/** Función para comprobar que la fecha es correcta */
function comprobarFechas(idElemento, idElementoError, campo) {
	
	var codigo = "GENERICO";
	var patronFecha = /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|2[0-9]{3})$/;

	if (
		(decodeDate(document.getElementById(idElemento).value).match(patronFecha))
		) {
		return true; 
	} else {
		switch(campo) {
	    	case 'fechaNacimiento' : 
		  		codigo = "02130";
			break;
		}
		addCodeError(idElementoError, codigo);
    	return false;
	}
}

function decodeDate(original) {
	date = new Date(original);

	var dia = date.getDate().toString().padStart(2,"0");
	var mes = (date.getMonth() + 1).toString().padStart(2,"0");
	var ano = date.getFullYear();
	return dia + "/" + mes + "/" + ano;
}

function encodeDate(original) {

}

/**Función para encriptar la pass en md5*/
function encriptar(idElemento){

	document.getElementById(idElemento).value = hex_md5(document.getElementById(idElemento).value);
  	return true;

}

function adaptarFecha(idElemento){

	var original = new Date(document.getElementById(idElemento).value);

	var dia = original.getDate().toString().padStart(2,"0");
	var mes = (original.getMonth() + 1).toString().padStart(2,"0");
	var ano = original.getFullYear();
	var valor = dia + "/" + mes + "/" + ano;

	document.getElementById(idElemento).value = valor;
	return true;

}

function validacionOK(idElemento, idElementoError) {
	document.getElementById(idElementoError).classList.add("hidden");
	document.getElementById(idElemento).classList.remove("input-error");
	document.getElementById(idElemento).classList.add("input-success");
}

function validacionKO(idElemento, idElementoError) { 
	document.getElementById(idElementoError).classList.remove("hidden");
	document.getElementById(idElemento).classList.remove("input-success");
	document.getElementById(idElemento).classList.add("input-error");
}

/**Función crea el formulario con los campos de action y controlador*/
function validaAutenticado() {
    crearformoculto('formularioAutenticacion', 'javascript:estaAutenticado()');
    addActionControler(document.formularioAutenticacion, "auth", "AUTH");
    return document.formularioAutenticacion.submit();
}

/**Función para realizar la petición de validar si el usuario está autenticado*/
function estaAutenticado() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    if (idSession == null){
    	errorAutenticado("02109", idioma);
    } else {

	    insertacampo(document.formularioAutenticacion,'ID_SESSION', idSession);

	    $.ajax({
	        method: "POST",
	        url: urlPeticionesAjax,
	        data: $("#formularioAutenticacion").serialize(),  
	    }).done(function( response ) {       
	        if (response.ok == true) {
	            document.getElementById("usuario").innerHTML = response.resource[0].LOGIN_USUARIO;
	        } else { 
	        	errorAutenticado(response.code, idioma);
	        }

	        deleteActionController();        
	    });
	}
}

/*Función que muestra el error de acceso por no estar autenticado**/
function errorAutenticado(codigoResponse, idioma){
	$("#mensajeError").removeClass();
    $("#mensajeError").addClass(codigoResponse);   
    setLang(idioma);
    document.getElementById("modal").classList.add('modal-open');
	document.getElementById("modalOkay").onclick = function() { window.location.href = 'login.html'; };
}

/**Función crea el formulario con los campos de action y controlador*/

function desconectar() {

    crearformoculto('formularioDesconectar', 'javascript:desconecta()');

    addActionControler(document.formularioDesconectar, "disconect", "AUTH");
    
    document.formularioDesconectar.submit();

}

/**Función para realizar la petición para desconectar al usuario*/
function desconecta() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');

    if (idSession == null){
    	errorAutenticado("02109", idioma);
    } else {
    
	    insertacampo(document.formularioDesconectar,'ID_SESSION', idSession);

	    $.ajax({
	        method: "POST",
	        url: urlPeticionesAjax,
	        data: $("#formularioDesconectar").serialize(),  
	    }).done(function( response ) {       
	        if (response.ok == true) {
	            window.location.href = 'login.html';
	       }             
	    });
	}
    
}

/**Función para añadir los mensajes de error*/
function addCodeError(idElementoError, codigo) {

	var idioma = getCookie('lang');

	$("#" + idElementoError).removeClass();
	$("#" + idElementoError).addClass(codigo);
	
	setLang(idioma);

}

/**Función que cierra elementos (NO USAR PARA MODAL – Solo forms…)*/
function cerrar(idElemento, accion, operacion) {

	var metodoEjecutar = operacion;

	document.getElementById(idElemento).style.display = "none";

	if (accion != '' && accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
		window.location.href = accion;
	}

	if (operacion != '') {
		metodoEjecutar();
	}

	eliminarAtributos();

	if (accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
    	eliminarContenidoSelect();
	} else {
		let campos = ["txtNombre", "txtEmail", "txtUsuario", "txtPassword", "admin", "activo"];
		habilitaCampos(campos);
		resetearFormulario("formularioGenerico", campos);
	}

}

function generarSessionId() {

	var ahora = new Date();
	var sessionId = ahora.getTime();

	setCookie('sessionId', sessionId, 1);

	insertacampo(document.formularioLogin,'ID_SESSION', sessionId);
}

function selectid_grupo(id_grupo, idElemento) {
    var idSession = getCookie("sessionId");

    crearformoculto("formularioobtenergrupo", "");

    insertacampo(document.formularioobtenergrupo, "ID_SESSION", idSession);
    insertacampo(document.formularioobtenergrupo, "controlador", "grupo");
    insertacampo(document.formularioobtenergrupo, "action", "buscar");

    var idioma = getCookie("lang");

 	$.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobtenergrupo").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
			addOptions(idElemento, response.resource, 'grupo');
			if (id_grupo != '') {
				$("#" + idElemento + " option[label='Grupo']").attr("selected", false);
				$("#" + idElemento + " option[value='" + id_grupo + "']").attr("selected", true);
			}
		} else {
			$('#mensajeError').removeClass();
			$('#mensajeError').addClass(response.code);
			setLang(idioma);
			document.getElementById('modal').classList.add('modal-open');
		}

        deleteActionController();
    });
}

function selectid_espacio(id_espacio, idElemento) {
    var idSession = getCookie("sessionId");

    crearformoculto("formularioobtenerespacio", "");

    insertacampo(document.formularioobtenerespacio, "ID_SESSION", idSession);
    insertacampo(document.formularioobtenerespacio, "controlador", "espacio");
    insertacampo(document.formularioobtenerespacio, "action", "buscar");

    var idioma = getCookie("lang");

 	$.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobtenerespacio").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
			addOptions(idElemento, response.resource, 'espacio');
			if (id_espacio != '') {
				$("#" + idElemento + " option[label='Espacio']").attr("selected", false);
				$("#" + idElemento + " option[value='" + id_espacio + "']").attr("selected", true);
			}
		} else {
			$('#mensajeError').removeClass();
			$('#mensajeError').addClass(response.code);
			setLang(idioma);
			document.getElementById('modal').classList.add('modal-open');
		}

        deleteActionController();
    });
}

function selectid_categoria(id_categoria, idElemento) {
    var idSession = getCookie("sessionId");

    crearformoculto("formularioobtenercategoria", "");

    insertacampo(document.formularioobtenercategoria, "ID_SESSION", idSession);
    insertacampo(document.formularioobtenercategoria, "controlador", "categoria");
    insertacampo(document.formularioobtenercategoria, "action", "buscar");

    var idioma = getCookie("lang");

 	$.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobtenercategoria").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
			addOptions(idElemento, response.resource, 'categoria');
			if (id_categoria != '') {
				$("#" + idElemento + " option[label='Categoria']").attr("selected", false);
				$("#" + idElemento + " option[value='" + id_categoria + "']").attr("selected", true);
			}
		} else {
			$('#mensajeError').removeClass();
			$('#mensajeError').addClass(response.code);
			setLang(idioma);
			document.getElementById('modal').classList.add('modal-open');
		}

        deleteActionController();
    });
}


function getNames(entity) {
    var idSession = getCookie("sessionId");

    crearformoculto("formGetNames", "");

    insertacampo(document.formGetNames, "ID_SESSION", idSession);
    insertacampo(document.formGetNames, "controlador", entity);
    insertacampo(document.formGetNames, "action", "buscar");

    var idioma = getCookie("lang");

 	var toret = $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formGetNames").serialize(),
		async: false
    }).done(function (response) {
        if (response.ok == true) {
			// 200 OK
		} else {
			$('#mensajeError').removeClass();
			$('#mensajeError').addClass(response.code);
			setLang(idioma);
			document.getElementById('modal').classList.add('modal-open');
		}

        deleteActionController();
    });

	return toret;
}