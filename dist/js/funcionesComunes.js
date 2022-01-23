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

function buscarUser() {
		
	if (   comprobarLetrasNumeros("txtUsuarioBuscar", 45, 0, "errorFormatoUserBuscar", "usuario")) {
		validacionOK("txtUsuarioBuscar", "errorFormatoUserBuscar");
		return true;
	} else {
		validacionKO("txtUsuarioBuscar", "errorFormatoUserBuscar");		
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

function buscarPass() {
	
	if (   comprobarLetrasNumeros("txtPasswordBuscar", 45, 0, "errorFormatoPassBuscar", "pass")) {
		validacionOK("txtPasswordBuscar", "errorFormatoPassBuscar");
		return true;
	} else {
		validacionKO("txtPasswordBuscar", "errorFormatoPassBuscar");		
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

function buscarDireccion() {
	if(	   comprobarLetrasNumeros("txtDireccionPersonaBuscar", 200, 0, "errorFormatoDireccionBuscar", "direccion")) {
			validacionOK("txtDireccionPersonaBuscar", "errorFormatoDireccionBuscar");
			return true;
		} else {
			validacionKO("txtDireccionPersonaBuscar", "errorFormatoDireccionBuscar");
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

function buscarFoto() {
		
	if (   comprobarLetrasNumeros("fotoPersonaBuscar", 100, 0, "errorFormatoFotoBuscar", "foto")) {
		validacionOK("fotoPersonaBuscar", "errorFormatoFotoBuscar");
		return true;
	} else {
		validacionKO("fotoPersonaBuscar", "errorFormatoFotoBuscar");	
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

function buscarDni() {
		
	if (   comprobarLetrasNumeros("txtDniBuscar", 9, 0, "errorFormatoDniBuscar", "dni"))
	{
		validacionOK("txtDniBuscar", "errorFormatoDniBuscar");
		return true;
	} else {
		validacionKO("txtDniBuscar", "errorFormatoDniBuscar");		
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

function buscarNombre(){
	if (   comprobarLetrasNumeros("txtNombrePersonaBuscar", 45, 0, "errorFormatoNombreBuscar", "nombre")) {
		validacionOK("txtNombrePersonaBuscar", "errorFormatoNombreBuscar");
		return true;
	} else {
		validacionKO("txtNombrePersonaBuscar", "errorFormatoNombreBuscar");		
		return false;
	}
}

/** Función que valida los apellidos */
function comprobarApellidos(){
	if (   validaNoVacio("txtApellidosPersona", "errorFormatoApellidos", "apellidos")
		&& comprobarLetrasNumeros("txtApellidosPersona", 45, 3, "errorFormatoApellidos", "apellidos")) {
		validacionOK("txtApellidosPersona", "errorFormatoApellidos");
		return true;
	} else {
		validacionKO("txtApellidosPersona", "errorFormatoApellidos");		
		return false;
	}
}

function buscarApellidos(){
	if (   comprobarLetrasNumeros("txtApellidosPersonaBuscar", 45, 0, "errorFormatoApellidosBuscar", "apellidos")) {
		validacionOK("txtApellidosPersonaBuscar", "errorFormatoApellidosBuscar");
		return true;
	} else {
		validacionKO("txtApellidosPersonaBuscar", "errorFormatoApellidosBuscar");		
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

function buscarFechaNacimiento(){
	if (   comprobarLetrasNumeros("txtFechaNacimientoPersonaBuscar", 10, 0, "errorFormatoFechaNacimientoBuscar", "fechaNacimiento")) {
		validacionOK("txtFechaNacimientoPersonaBuscar", "errorFormatoFechaNacimientoBuscar");
		return true;
	} else {
		validacionKO("txtFechaNacimientoPersonaBuscar", "errorFormatoFechaNacimientoBuscar");
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

function buscarTelefono(){
	if (   comprobarLetrasNumeros("txtTelefonoPersonaBuscar", 9, 0, "errorFormatoTelefonoBuscar", "telefonoBuscar")) {
		validacionOK("txtTelefonoPersonaBuscar", "errorFormatoTelefono");
		return true;
	} else {
		validacionKO("txtTelefonoPersonaBuscar", "errorFormatoTelefonoBuscar");
		return false;
	}
}

/** Función que comprueba el formato del email */
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

function buscarEmail(){
	if (   comprobarLetrasNumeros("txtEmailPersonaBuscar", 45, 0, "errorFormatoEmailBuscar", "correoBuscar")) {
		validacionOK("txtEmailPersonaBuscar", "errorFormatoEmailBuscar");
		return true;
	} else {
		validacionKO("txtEmailPersonaBuscar", "errorFormatoEmailBuscar");		
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

function buscarNombreGrupo(){
	if (   comprobarLetrasNumeros("txtNombreGrupoBuscar", 45, 0, "errorFormatoNombreGrupoBuscar", "nombregrupo")) {
		validacionOK("txtNombreGrupoBuscar", "errorFormatoNombreGrupoBuscar");
		return true;
	} else {
		validacionKO("txtNombreGrupoBuscar", "errorFormatoNombreGrupoBuscar");		
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

function buscarDescripcionGrupo(){
	if (   comprobarLetrasNumeros("txtDescripcionGrupoBuscar", 200, 0, "errorFormatoDescripcionGrupoBuscar", "descripcion")) {
		validacionOK("txtDescripcionGrupoBuscar", "errorFormatoDescripcionGrupoBuscar");
		return true;
	} else {
		validacionKO("txtDescripcionGrupoBuscar", "errorFormatoDescripcionGrupoBuscar");		
		return false;
	}
}

/** Función que valida el nombre de un espacio*/
function comprobarNombreEspacio(){
	if (   validaNoVacio("txtNombreEspacio", "errorFormatoNombreEspacio", "nombreespacio")
		&& comprobarLetrasNumeros("txtNombreEspacio", 45, 3, "errorFormatoNombreEspacio", "nombreespacio")) {
		validacionOK("txtNombreEspacio", "errorFormatoNombreEspacio");
		return true;
	} else {
		validacionKO("txtNombreEspacio", "errorFormatoNombreEspacio");		
		return false;
	}
}

function buscarNombreEspacio(){
	if (   comprobarLetrasNumeros("txtNombreEspacioBuscar", 45, 0, "errorFormatoNombreEspacioBuscar", "nombreespacio")) {
		validacionOK("txtNombreEspacioBuscar", "errorFormatoNombreEspacioBuscar");
		return true;
	} else {
		validacionKO("txtNombreEspacioBuscar", "errorFormatoNombreEspacioBuscar");		
		return false;
	}
}
 
/** Función que valida la descripción de un espacio */
function comprobarDescripcionEspacio(){
	if (   validaNoVacio("txtDescripcionEspacio", "errorFormatoDescripcionEspacio", "descripcionespacio")
		&& comprobarLetrasNumeros("txtDescripcionEspacio", 200, 20, "errorFormatoDescripcionEspacio", "descripcionespacio")) {
		validacionOK("txtDescripcionEspacio", "errorFormatoDescripcionEspacio");
		return true;
	} else {
		validacionKO("txtDescripcionEspacio", "errorFormatoDescripcionEspacio");		
		return false;
	}
}

function buscarDescripcionEspacio(){
	if (   comprobarLetrasNumeros("txtDescripcionEspacioBuscar", 200, 0, "errorFormatoDescripcionEspacioBuscar", "descripcionespacio")) {
		validacionOK("txtDescripcionEspacioBuscar", "errorFormatoDescripcionEspacioBuscar");
		return true;
	} else {
		validacionKO("txtDescripcionEspacioBuscar", "errorFormatoDescripcionEspacioBuscar");		
		return false;
	}
}

/** Función que valida el nombre de una categoria*/
function comprobarNombreCategoria(){
	if (   validaNoVacio("txtNombreCategoria", "errorFormatoNombreCategoria", "nombrecategoria")
		&& comprobarLetrasNumeros("txtNombreCategoria", 45, 3, "errorFormatoNombreCategoria", "nombrecategoria")) {
		validacionOK("txtNombreCategoria", "errorFormatoNombreCategoria");
		return true;
	} else {
		validacionKO("txtNombreCategoria", "errorFormatoNombreCategoria");		
		return false;
	}
}

function buscarNombreCategoria(){
	if (   comprobarLetrasNumeros("txtNombreCategoriaBuscar", 45, 0, "errorFormatoNombreCategoriaBuscar", "nombrecategoria")) {
		validacionOK("txtNombreCategoriaBuscar", "errorFormatoNombreCategoriaBuscar");
		return true;
	} else {
		validacionKO("txtNombreCategoriaBuscar", "errorFormatoNombreCategoriaBuscar");		
		return false;
	}
}
 
/** Función que valida la descripción de una categoria */
function comprobarDescripcionCategoria(){
	if (   validaNoVacio("txtDescripcionCategoria", "errorFormatoDescripcionCategoria", "descripcioncategoria")
		&& comprobarLetrasNumeros("txtDescripcionCategoria", 200, 20, "errorFormatoDescripcionCategoria", "descripcioncategoria")) {
		validacionOK("txtDescripcionCategoria", "errorFormatoDescripcionCategoria");
		return true;
	} else {
		validacionKO("txtDescripcionCategoria", "errorFormatoDescripcionCategoria");		
		return false;
	}
}

function buscarDescripcionCategoria(){
	if (   comprobarLetrasNumeros("txtDescripcionCategoriaBuscar", 200, 0, "errorFormatoDescripcionCategoriaBuscar", "descripcioncategoria")) {
		validacionOK("txtDescripcionCategoriaBuscar", "errorFormatoDescripcionCategoriaBuscar");
		return true;
	} else {
		validacionKO("txtDescripcionCategoriaBuscar", "errorFormatoDescripcionCategoriaBuscar");		
		return false;
	}
}

/** Función que valida el nombre de una actividad*/
function comprobarNombreActividad(){
	if (   validaNoVacio("txtNombreActividad", "errorFormatoNombreActividad", "nombreactividad")
		&& comprobarLetrasNumeros("txtNombreActividad", 45, 3, "errorFormatoNombreActividad", "nombreactividad")) {
		validacionOK("txtNombreActividad", "errorFormatoNombreActividad");
		return true;
	} else {
		validacionKO("txtNombreActividad", "errorFormatoNombreActividad");		
		return false;
	}
}

function buscarNombreActividad(){
	if (   comprobarLetrasNumeros("txtNombreActividadBuscar", 45, 0, "errorFormatoNombreActividadBuscar", "nombreactividad")) {
		validacionOK("txtNombreActividadBuscar", "errorFormatoNombreActividadBuscar");
		return true;
	} else {
		validacionKO("txtNombreActividadBuscar", "errorFormatoNombreActividadBuscar");		
		return false;
	}
}
 
/** Función que valida la descripción de una actividad */
function comprobarDescripcionActividad(){
	if (   validaNoVacio("txtDescripcionActividad", "errorFormatoDescripcionActividad", "descripcionactividad")
		&& comprobarLetrasNumeros("txtDescripcionActividad", 200, 20, "errorFormatoDescripcionActividad", "descripcionactividad")) {
		validacionOK("txtDescripcionActividad", "errorFormatoDescripcionActividad");
		return true;
	} else {
		validacionKO("txtDescripcionActividad", "errorFormatoDescripcionActividad");		
		return false;
	}
}

function buscarDescripcionActividad(){
	if (   comprobarLetrasNumeros("txtDescripcionActividadBuscar", 200, 0, "errorFormatoDescripcionActividadBuscar", "descripcionactividad")) {
		validacionOK("txtDescripcionActividadBuscar", "errorFormatoDescripcionActividadBuscar");
		return true;
	} else {
		validacionKO("txtDescripcionActividadBuscar", "errorFormatoDescripcionActividadBuscar");		
		return false;
	}
}

/** Función que valida el precio de una actividad */
function comprobarPrecioActividad(){
    	if (   validaNoVacio("numPrecioActividad", "errorFormatoPrecioActividad", "precioactividad")
		&& comprobarLetrasNumeros ("numPrecioActividad", 6, 1, "errorFormatoPrecioActividad", "precioactividad")) {
			validacionOK("numPrecioActividad", "errorFormatoPrecioActividad");
        	return true;
    	} else {
			validacionKO("numPrecioActividad", "errorFormatoPrecioActividad");
        	return false;
    	}
}

function buscarPrecioActividad(){
	if ( comprobarLetrasNumeros ("numPrecioActividadBuscar", 6, 0, "errorFormatoPrecioActividadBuscar", "precioactividadBuscar")) {
		validacionOK("numPrecioActividadBuscar", "errorFormatoPrecioActividadBuscar");
		return true;
	} else {
		validacionKO("numPrecioActividadBuscar", "errorFormatoPrecioActividadBuscar");
		return false;
	}
}

/** Función que valida las plazas de una actividad */
function comprobarPlazasActividad(){
	if (   validaNoVacio("numPlazasActividad", "errorFormatoPlazasActividad", "plazasactividad")
		&& comprobarLetrasNumeros("numPlazasActividad", 40, 1, "errorFormatoPlazasActividad", "plazasactividad")) {
		validacionOK("numPlazasActividad", "errorFormatoPlazasActividad");
		return true;
	} else {
		validacionKO("numPlazasActividad", "errorFormatoPlazasActividad");
		return false;
	}
}

function buscarPlazasActividad(){
	if (   comprobarLetrasNumeros("numPlazasActividadBuscar", 40, 0, "errorFormatoPlazasActividadBuscar", "plazasactividad")) {
		validacionOK("numPlazasActividadBuscar", "errorFormatoPlazasActividadBuscar");
		return true;
	} else {
		validacionKO("numPlazasActividadBuscar", "errorFormatoPlazasActividadBuscar");
		return false;
	}
}

/** Función que valida el color de una actividad */
function comprobarColorActividad(){
	if (   validaNoVacio("txtColorActividad", "errorFormatoColorActividad", "coloractividad")
		&& comprobarLetrasNumeros("txtColorActividad", 7, 7, "errorFormatoColorActividad", "coloractividad")) {
		validacionOK("txtColorActividad", "errorFormatoColorActividad");
		return true;
	} else {
		validacionKO("txtColorActividad", "errorFormatoColorActividad");
		return false;
	}
}

function buscarColorActividad(){
	if (   comprobarLetrasNumeros("txtColorActividadBuscar", 7, 0, "errorFormatoColorActividadBuscar", "coloractividadBuscar")) {
		validacionOK("txtColorActividadBuscar", "errorFormatoColorActividadBuscar");
		return true;
	} else {
		validacionKO("txtColorActividadBuscar", "errorFormatoColorActividadBuscar");
		return false;
	}
}

/** Función que valida el color del nombre de una actividad */
function comprobarNombreColorActividad(){
	if (   validaNoVacio("txtColorNombreActividad", "errorFormatoNombreColorActividad", "colornombreactividad")
		&& comprobarLetrasNumeros("txtColorNombreActividad", 7, 7, "errorFormatoNombreColorActividad", "colornombreactividad")) {
		validacionOK("txtColorNombreActividad", "errorFormatoNombreColorActividad");
		return true;
	} else {
		validacionKO("txtColorNombreActividad", "errorFormatoNombreColorActividad");
		return false;
	}
}

function buscarNombreColorActividad(){
	if (   comprobarLetrasNumeros("txtColorNombreActividadBuscar", 7, 0, "errorFormatoNombreColorActividadBuscar", "colornombreactividadBuscar")) {
		validacionOK("txtColorNombreActividadBuscar", "errorFormatoNombreColorActividadBuscar");
		return true;
	} else {
		validacionKO("txtColorNombreActividadBuscar", "errorFormatoNombreColorActividadBuscar");
		return false;
	}
}

/** Función que valida el nombre y tipo de archivo del documento de pago */
function comprobarDocumentoPago(){
	if (   validaNoVacio("fileDocumentoPago", "errorFormatoDocumentoPago", "documento_pago")
		&& comprobarLetrasNumeros("fileDocumentoPago", 100, 5, "errorFormatoDocumentoPago", "documento_pago"
		&& comprobarExtDocumentoPago("fileDocumentoPago","errorFormatoDocumentoPago"))) {
		validacionOK("fileDocumentoPago", "errorFormatoDocumentoPago");
		return true;
	} else {
		validacionKO("fileDocumentoPago", "errorFormatoDocumentoPago");
		return false;
	}
}

function buscarDocumentoPago(){
	if (   comprobarLetrasNumeros("fileDocumentoPagBuscar", 100, 0, "errorFormatoDocumentoPagoBuscar", "documento_pago")) {
		validacionOK("fileDocumentoPagoBuscar", "errorFormatoDocumentoPagoBuscar");
		return true;
	} else {
		validacionKO("fileDocumentoPagoBuscar", "errorFormatoDocumentoPago");
		return false;
	}
}

/** Función que valida el número cuenta del responsable con formato IBAN */
function comprobarNumCuenta() {
	if (   validaNoVacio("txtNumCuentaResponsable", "errorFormatoNumCuenta", "numCuenta_responsable")
		&& comprobarLetrasNumeros("txtNumCuentaResponsable", 24, 24, "errorFormatoNumCuenta", "numCuenta_responsable")) {
		validacionOK("txtNumCuentaResponsable", "errorFormatoNumCuenta");
		return true;
	} else {
		validacionKO("txtNumCuentaResponsable", "errorFormatoNumCuenta");
		return false;
	}
}

function buscarNumCuenta() {
	if (   comprobarLetrasNumeros("txtNumCuentaResponsableBuscar", 24, 0, "errorFormatoNumCuentaBuscar", "numCuenta_responsable")) {
		validacionOK("txtNumCuentaResponsableBuscar", "errorFormatoNumCuentaBuscar");
		return true;
	} else {
		validacionKO("txtNumCuentaResponsableBuscar", "errorFormatoNumCuentaBuscar");
		return false;
	}
}

/** Función que valida el curriculum del responsable de centro */
function comprobarCurriculum(){
	if (   validaNoVacio("fileCurriculumResponsable", "errorFormatoCurriculum", "curriculum_responsable")
		&& comprobarLetrasNumeros("fileCurriculumResponsable", 100, 5, "errorFormatoCurriculum", "curriculum_responsable"
		&& comprobarExtCurriculum("fileCurriculumResponsable","errorFormatoCurriculum"))) {
		validacionOK("fileCurriculumResponsable", "errorFormatoCurriculum");
		return true;
	} else {
		validacionKO("fileCurriculumResponsable", "errorFormatoCurriculum");
		return false;
	}
}

function buscarCurriculum(){
	if (   comprobarLetrasNumeros("fileCurriculumResponsableBuscar", 100, 0, "errorFormatoCurriculumBuscar", "curriculum_responsable")) {
		validacionOK("fileCurriculumResponsableBuscar", "errorFormatoCurriculumBuscar");
		return true;
	} else {
		validacionKO("fileCurriculumResponsableBuscar", "errorFormatoCurriculumBuscar");
		return false;
	}
}

function buscarId(){
	if(   comprobarLetrasNumeros("txtIdBuscar", 11, 0, "errorFormatoIdBuscar", "idBuscar")) {
		validacionOK("txtIdBuscar", "errorFormatoIdBuscar");
		return true;
	} else {
		validacionKO("txtIdBuscar", "errorFormatoIdBuscar");
		return false;
	}
}

function buscarIdActividad(){
	if(   comprobarLetrasNumeros("selectIdActividadBuscar", 11, 0, "errorFormatoIdActividadBuscar", "idBuscar")) {
		validacionOK("selectIdActividadBuscar", "errorFormatoIdActividadBuscar");
		return true;
	} else {
		validacionKO("selectIdActividadBuscar", "errorFormatoIdActividadBuscar");
		return false;
	}
}

function buscarIdUsuario(){
	if(   comprobarLetrasNumeros("selectIdUsuarioBuscar", 11, 0, "errorFormatoIdUsuarioBuscar", "idBuscar")) {
		validacionOK("selectIdUsuarioBuscar", "errorFormatoIdUsuarioBuscar");
		return true;
	} else {
		validacionKO("selectIdUsuarioBuscar", "errorFormatoIdUsuarioBuscar");
		return false;
	}
}

function buscarIdGrupo(){
	if(   comprobarLetrasNumeros("selectIdGrupoBuscar", 11, 0, "errorFormatoIdGrupoBuscar", "idBuscar")) {
		validacionOK("selectIdGrupoBuscar", "errorFormatoIdGrupoBuscar");
		return true;
	} else {
		validacionKO("selectIdGrupoBuscar", "errorFormatoIdGrupoBuscar");
		return false;
	}
}

function buscarIdEspacio(){
	if(   comprobarLetrasNumeros("selectIdEspacioBuscar", 11, 0, "errorFormatoIdEspacioBuscar", "idBuscar")) {
		validacionOK("selectIdEspacioBuscar", "errorFormatoIdEspacioBuscar");
		return true;
	} else {
		validacionKO("selectIdEspacioBuscar", "errorFormatoIdEspacioBuscar");
		return false;
	}
}

function buscarIdCategoria(){
	if(   comprobarLetrasNumeros("selectIdCategoriaBuscar", 11, 0, "errorFormatoIdCategoriaBuscar", "idBuscar")) {
		validacionOK("selectIdCategoriaBuscar", "errorFormatoIdCategoriaBuscar");
		return true;
	} else {
		validacionKO("selectIdCategoriaBuscar", "errorFormatoIdCategoriaBuscar");
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
				codigo = "02150";
				break;
			case "descripcion":
				codigo = "02154";
				break;
			case "nombreespacio":
				codigo = "02174";
				break;
			case "descripcionespacio":
				codigo = "02177";
				break;
			case "nombrecategoria":
				codigo = "02182";
				break;
			case "descripcioncategoria":
				codigo = "02185";
				break;
			case "plazasactividad":
				codigo = "02173";
				break;
			case "precioactividad":
				codigo = "02169";
				break;
			case "coloractividad":
				codigo = "02190";
				break;
			case "colornombreactividad":
				codigo = "02191";
				break;
			case "documento_pago":
				codigo = "02202"
				break;
			case "numCuenta_resposable":
				codigo = "02204";
				break;
			case "fileCurriculumResponsable":
				codigo = "02203";
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

/** Función que valida la extensión del documento .pdf subido */
function comprobarExtDocumentoPago(idElemento, idElementoError){
	
	var codigo = "GENERICO"; //se define la variable codigo en la que se guardara el codigo del error

	let extPdf = ".pdf"; //variable de text con el string de la extensión .pdf

	var nombreArchivo = document.getElementById(idElemento).value.replace("C: \\fakepath\\", ""); //obtiene el nombre del archivo
	
	tamNombreArchivo = nombreArchivo.length; //guarda en una variable el tamaño del spring del archivo 

	let extArchivo = nombreArchivo.slice(tamNombreArchivo-4, tamNombreArchivo); //almacena en una variable de la extensión del archivo

	if(extArchivo != extPdf) {
		codigo = "02192"; //código de error de que el archivo no corresponde al tipo de archivo permitido
		addCodeError(idElementoError, codigo); //añade el código para mostrarse por consola???
		return false; //devuelve un false en el comprobarDocumentoPago	
	} else {
		return true;
	}

}

/** Función que valida la extensión del documento .pdf subido */
function comprobarExtCurriculum(idElemento, idElementoError){
	
	var codigo = "GENERICO"; //se define la variable codigo en la que se guardara el codigo del error

	let extPdf = ".pdf"; //variable de text con el string de la extensión .pdf

	var nombreArchivo = document.getElementById(idElemento).value.replace("C: \\fakepath\\", ""); //obtiene el nombre del archivo
	
	tamNombreArchivo = nombreArchivo.length; //guarda en una variable el tamaño del spring del archivo 

	let extArchivo = nombreArchivo.slice(tamNombreArchivo-4, tamNombreArchivo); //almacena en una variable de la extensión del archivo

	if(extArchivo != extPdf) {
		codigo = "02192"; //código de error de que el archivo no corresponde al tipo de archivo permitido
		addCodeError(idElementoError, codigo); //añade el código para mostrarse por consola???
		return false; //devuelve un false en el comprobarCurriculum	
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
				codigo = "02151";
				break;
			case "descripcion":
				codigo = "02155";
				break;
			case "nombreespacio":
				codigo = "02176";
				break;
			case "descripcionespacio":
				codigo = "02179";
				break;
			case "nombrecategoria":
				codigo = "02184";
				break;
			case "descripcioncategoria":
				codigo = "02187";
				break;
			case "plazasactividad":
				codigo = "02171";
				break;
			case "precioactividad":
				codigo = "02167";
				break;
			case "coloractividad":
				codigo = "02193";
				break;
			case "colornombreactividad":
				codigo = "02194";
				break;
			case "documento_pago":
				codigo = "02195"
				break;
			case "numCuenta_resposable":
				codigo = "02206";
				break;
			case "fileCurriculumResponsable":
				codigo = "02205";
				break;
			case "correoBuscar":
				codigo = "02120";
				break;
			case "telefonoBuscar":
				codigo = "02149";
				break;
			case "precioactividadBuscar":
				codigo = "02167";
				break;
			case "coloractividadBuscar":
				codigo = "02193";
				break;
			case "colornombreactividadBuscar":
				codigo = "02194";
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
				codigo = "02152";
				break;
			case "descripcion":
				codigo = "02156";
				break;
			case "nombreespacio":
				codigo = "02175";
				break;
			case "descripcionespacio":
				codigo = "02178";
				break;
			case "nombrecategoria":
				codigo = "02183";
				break;
			case "descripcioncategoria":
				codigo = "02186";
				break;
			case "plazasactividad":
				codigo = "02172";
				break;
			case "precioactividad":
				codigo = "02168";
				break;
			case "coloractividad":
				codigo = "02196";
				break;
			case "colornombreactividad":
				codigo = "02197";
				break;
			case "documento_pago":
				codigo = "02198"
				break;
			case "numCuenta_resposable":
				codigo = "02208";
				break;
			case "fileCurriculumResponsable":
				codigo = "02207";
				break;
		}
		addCodeError(idElementoError, codigo);
    	return false;
	}
	
	if (campo == 'usuario' ||
		campo == 'pass' ||
		campo == 'dni' ) {
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

	if (campo == 'numCuenta_responsable') {
		var patron = /[a-zA-Z]{2}[0-9]{20}$/;
			
		if (!patron.test(valor)) { 
			switch(campo) {
				case 'numCuenta_responsable' : 
					codigo = "02209";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'numCuenta_responsableBuscar') {
		var patron = /[a-zA-Z][0-9]$/;
			
		if (!patron.test(valor)) { 
			switch(campo) {
				case 'numCuenta_responsablebuscar' : 
					codigo = "99999";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'nombre' ||
		campo == 'apellidos' ||
		campo == 'nombregrupo' ||
		campo == 'descripcion' ||
		campo == 'nombreespacio' ||
		campo == 'descripcionespacio' ||
		campo == 'nombrecategoria' ||
		campo == 'descripcioncategoria') {
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
					codigo = "02153";
					break;
				case "descripcion":
					codigo = "02157";
					break;
				case "nombreespacio":
					codigo = "02180";
					break;
				case "descripcionespacio":
					codigo = "02181";
					break;
				case "nombrecategoria":
					codigo = "02188";
					break;
				case "descripcioncategoria":
					codigo = "02189";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'foto' ||
		campo == 'documento_pago' ||
		campo == 'fileCurriculumResponsable') {
		var patron = /^[a-zA-Z0-9\.]*$/;
			
		if (!patron.test(valor)) { 
			switch(campo) {
				case 'foto' : 
					codigo = "02139";
					break;
				case 'documento_pago' :
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


	if(campo == "correoBuscar") {
		var patron =  /^[a-zA-Z0-9\.\-\+@]*$/;

		if (!patron.test(valor)) {
			switch(campo) {
				case "correoBuscar" :
					codigo = "02121";
				break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if (campo == 'direccion') {
		var patron = /^[0-9a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇüñÜÑ]*$/;
			
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

	if(campo == 'telefonoBuscar') {
		var patron = /^[0-9]*$/;

		if(!patron.test(valor)) {
			switch(campo) {
				case 'telefonoBuscar' :
					codigo = "99999";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if(campo == 'precioactividad') {
		var decimal = /^\d{1,4}\.\d{0,2}$/;

    	if (!decimal.test(valor02199)) {
			switch(campo) {
				case 'precioactividad' :
					codigo = "02199";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if(campo == 'precioactividadBuscar') {
		var decimal = /^[\d\.]*$/;

    	if (!decimal.test(valor)) {
			switch(campo) {
				case 'precioactividad' :
					codigo = "99999";
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if(campo == 'coloractividad' ||
		campo == 'colornombreactividad') {
		var colour = /^#[0-9a-fA-F]{6}$/;

    	if (!colour.test(valor)) {
			switch(campo) {
				case 'coloractividad' :
					codigo = "02200";
					break;
				case 'colornombreactividad' :
					codigo = '02201';
					break;
			}
			addCodeError(idElementoError, codigo);
			return false;
		}
	}

	if(campo == 'coloractividadBuscar' ||
		campo == 'colornombreactividadBuscar') {
		var colour = /^[#0-9a-fA-F]*$/;

    	if (!colour.test(valor)) {
			switch(campo) {
				case 'coloractividadBuscar' :
					codigo = "02200";
					break;
				case 'colornombreactividadBuscar' :
					codigo = '02201';
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

function selectid_actividad(id_activdad, idElemento) {
    var idSession = getCookie("sessionId");

    crearformoculto("formularioobteneractividad", "");

    insertacampo(document.formularioobteneractividad, "ID_SESSION", idSession);
    insertacampo(document.formularioobteneractividad, "controlador", "actividad");
    insertacampo(document.formularioobteneractividad, "action", "buscar");

    var idioma = getCookie("lang");

 	$.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobteneractividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
			addOptions(idElemento, response.resource, 'actividad');
			if (id_activdad != '') {
				$("#" + idElemento + " option[label='Actividad']").attr("selected", false);
				$("#" + idElemento + " option[value='" + id_activdad + "']").attr("selected", true);
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

function selectid_usuario(id_usuario, idElemento) {
    var idSession = getCookie("sessionId");

    crearformoculto("formularioobtenerusuario", "");

    insertacampo(document.formularioobtenerusuario, "ID_SESSION", idSession);
    insertacampo(document.formularioobtenerusuario, "controlador", "usuario");
    insertacampo(document.formularioobtenerusuario, "action", "buscar");

    var idioma = getCookie("lang");

 	$.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobtenerusuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
			addOptions(idElemento, response.resource, 'usuario');
			if (id_usuario != '') {
				$("#" + idElemento + " option[label='Actividad']").attr("selected", false);
				$("#" + idElemento + " option[value='" + id_usuario + "']").attr("selected", true);
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

function createId(entity) {
	var idSession = getCookie("sessionId");

    crearformoculto("formGetNames", "");

    insertacampo(document.formGetNames, "ID_SESSION", idSession);
    insertacampo(document.formGetNames, "controlador", entity);
    insertacampo(document.formGetNames, "action", "buscar");

    var idioma = getCookie("lang");

 	var id = 0;
	
	 $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formGetNames").serialize(),
		async: false
    }).done(function (response) {
        if (response.ok == true) {
			id = response.resource.length + 1;
		} else {
			$('#mensajeError').removeClass();
			$('#mensajeError').addClass(response.code);
			setLang(idioma);
			document.getElementById('modal').classList.add('modal-open');
		}
        deleteActionController();
    });

	return id;
}

function sendEntity(action, entity, okFunction) {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, action, entity);

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
					okFunction();
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

function sendEntityWithFiles(action, entity, okFunction, formFile) {
	var idSession = getCookie('sessionId');

	insertacampo(document.formGenerico,'ID_SESSION', idSession);
   	addActionControler(document.formGenerico, action, entity);

	document.getElementById('formGenericoDiv').classList.remove('modal-open');

	var idioma = getCookie('lang');

	var datos = new FormData();

    var formdata = $('#formGenerico').serialize();
    var file = document.getElementById(formFile).files[0];
    
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
			function( response ) {
				if (response.ok == true) {
					document.getElementById('modal').classList.remove('modal-open');
					okFunction();
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