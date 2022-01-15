/**Función para crear un formulario oculto*/
function crearformoculto(name, action){

	if ( $("#" + name).length == 0) {

		var formu = document.createElement('form');
		document.body.appendChild(formu);
	    formu.name = name;
	    formu.action = action; 
	    formu.id = name;  
	    formu.style.display = "none";

	}
	
}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(form, name, value){
	
	formulario = form;
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

/**Función para eliminar campos del formulario*/
function eliminarcampo(name) {

	$("." + name).remove();	

}

/**Función que resetear los valores del formulario*/
function resetearFormulario(idFormulario, idElementoList) {

	document.getElementById(idFormulario).reset();

	idElementoList.forEach( function (idElemento) {
        document.getElementById(idElemento).classList.remove("input-success");
	});	

}

function passShow(idElementoList, action) {

    if (action == "show") {
	    document.getElementById(idElementoList).type = "text";
    } else {
        document.getElementById(idElementoList).type = "password";
    }

}

/**Función añade al formulario genérico con los campos de action y controlador*/
function addActionControler(form, action, controller) {

    var accion = "";

    switch(action) {
        case 'add' :
            accion = 'insertar';
        break; 
        case 'delete' :
            accion = 'borrar';
        break; 
        case 'edit' :
            accion = 'editar';
        break; 
        case 'search' :
            accion = 'buscar';
        break;
        case 'disconect' :
        	accion = 'desconectar';
        break;
        case 'auth' :
        	accion = 'estaAutenticado';
        break;
        case 'login' :
        	accion = 'login';
        break;
        case 'registrar' :
        	accion = 'registrar';
        break;
        case 'test' :
        	accion = 'test';
        break;
    }

    insertacampo(form,'action', accion); 
    insertacampo(form,'controlador', controller);

}

/**Función que elimina del formulario accion y controlado*/
function deleteActionController() {

    eliminarcampo('action');
    eliminarcampo('controlador');

}

/**Función que aplica los cambios necesarios cuando la respuesta de las petición Ajax ha sido OK*/
function respuestaOKAjax() {

    $("#mensajeError").attr('style', 'color: #005200;');

}

/**
// Función que aplica los cambios necesarios cuando la respuesta de las petición Ajax ha sido KO
function respuestaKOAjax() {
    $("#mensajeError").attr('style', 'color: #ff0000;');
}

// Función que actualiza el mensaje con el código que nos llega de la petición Ajax y aplica estilos
function actualizaMensajesRespuestAjax(codigo) {

    $("#mensajeError").removeClass();
    $("#mensajeError").addClass(codigo); 

}
*/

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementById(domElement);
    //Recorremos el array.
    longitud = array.length;

    for (var i=0; i < longitud; i++) {
        var opcion = document.createElement("option");
        opcion.value = array[i]['id_grupo'];
        opcion.text = array[i]['nombre_grupo'];
        selector.add(opcion);
    }
}

//Función para eliminar todas las opciones a un <select>.
function deleteoptionsSelect(domElement){

    var selector = document.getElementById(domElement);

    longitud = selector.length;

    for (var i=longitud; i >= 0; i--) {
        selector.remove(i);
    }

}

/**Función que deshabilita los campos de un formulario*/
function deshabilitaCampos(idElementoList) {

    idElementoList.forEach( function (idElemento) {
        $("#"+ idElemento).attr("disabled", true); 
    }); 

}

/**Función que habilita los campos de un formulario*/
function habilitaCampos(idElementoList) {

    idElementoList.forEach( function (idElemento) {
        $("#"+ idElemento).attr("disabled", false); 
    }); 

}

/**Función para cambiar valores del formulario*/
function cambiarFormulario(tituloForm, action, onsubmit) {

    $('#formularioAcciones').attr('style', 'display: block');
    $("#cerrarForm").attr('onclick', "cerrar('formularioAcciones', '', '')");
    $("#tituloForms").addClass(tituloForm);

    if (action != '') {
        $("#formularioGenerico").attr('action', action);
    }

    if (onsubmit != '') {
        $("#formularioGenerico").attr('onsubmit', onsubmit);
    }
    
}