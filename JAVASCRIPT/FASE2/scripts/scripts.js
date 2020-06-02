/*FASE 2 (3 punts) Amb un bucle for haurem d’omplir els dos arrays anteriorment creats. Afegirem el nom del plat i després el preu. (1 punt)
Un cop plens els dos arrays haurem de mostrar-los i preguntar que es vol per menjar, guardarem la informació en una List fent servir un bucle while. (1 punt)
Haurem de preguntar si es vol seguir demanant menjar. Podeu fer servir el sistema (1:Si / 0:No), per tant haureu de crear un altre variable int per guardar la informació. (1 punt)*/

var platos = Array();
var precios = Array();
var seleccionados = Array();

function inicializarMenu() {

	var objForm2 = document.getElementById("form2");
	var objVisualizar = document.getElementById("visualizar");
	var objListaSeleccionados = document.getElementById("listaPlatos");
	objListaSeleccionados.style.display = "none";
	objForm2.style.display = "none";
	objVisualizar.style.display = "none";
}


function validarForm1() {

	var plato = document.getElementById("platoInput").value;
	var precio = document.getElementById("precioInput").value;
	
	if (platos.length <= 3) {
		llenarArrays(plato, precio);
		mostrarMenu(platos, precios);

	} else if (platos.length == 4) {

		llenarArrays(plato, precio);
		mostrarMenu(platos, precios);

		document.getElementById("form1").style.display = "none";


		document.getElementById("form2").style.display = "block";

		document.getElementById("visualizar").style.display = "block";


		document.getElementById("platoSeleccionado").focus();

		alert("Este es el ultimo plato que puedes registrar");
	}
}

function seguir(id) {

	var platoSel = document.getElementById("platoSeleccionado").value;

	if (id == "btnSeleccionado") {
		llenarSeleccionados(platoSel);
		mostrarSeleccionados(seleccionados);
		$('#exampleModalCenter').modal('show');
	} else if (id == "btnModal") {
		llenarSeleccionados(platoSel);
		mostrarSeleccionados(seleccionados);
	}else if(id=="btnNo"){
		alert("Ha finalizado la ejecución la fase 2");

		document.getElementById("form2").style.display ="none";
		document.getElementById("visualizar").style.display ="none";
		document.getElementById("listaPlatos").innerHTML= "<p>"+"FASE FINALIZADA"+"</p>";		
	}
}


function llenarSeleccionados(platoSel) {
	var platoX;
	if (comprobarTexto(platoSel) == true) {
		platoX = platoSel.toLowerCase();
		seleccionados.push(platoX);
		document.getElementById("platoSeleccionado").value = "";
	}
}

function llenarArrays(plato, precio) {

	var platoV = "";
	var precioV = 0;
	if ((comprobarTexto(plato) == true) && (comprobarPrecio(precio) == true)) {
		platoV = plato.toLowerCase();
		precioV = parseInt(precio);
		platos.push(platoV);
		precios.push(precioV);
		document.getElementById("platoInput").value = "";
		document.getElementById("precioInput").value = "";
	}
}

function validarPlato() {
	var plato = document.getElementById("platoInput").value;
	if (comprobarTexto(plato) == true) {
		document.getElementById("spnPlato").innerHTML = "";
	}
	else {
		document.getElementById("spnPlato").innerHTML = "El nombre del plato no tiene un formato válido.";
	}
}

function validarPrecio() {
	var precio = document.getElementById("precioInput").value;
	if (comprobarPrecio(precio) == true) {
		document.getElementById("spnPrecio").innerHTML = "";
	}
	else {
		document.getElementById("spnPrecio").innerHTML = "El precio no tiene un formato válido.";
	}
}

function validarPlatoSeleccionado() {
	var platoS = document.getElementById("platoSeleccionado").value;
	if (comprobarTexto(platoS) == true) {
		document.getElementById("spnPlatoSel").innerHTML = "";
	}
	else {
		document.getElementById("spnPlatoSel").innerHTML = "El nombre del plato no tiene un formato válido.";
	}
}

function comprobarTexto(plato) {
	var regex1 = /[A-Za-z ñÑ]+$/;
	var vTexto;
	if (plato.length <= 3 || plato.length == 0 || !regex1.test(plato)) {
		vTexto = false;
	}
	else {
		vTexto = true;
	}
	return vTexto;
}

function comprobarPrecio(precio) {
	var regex2 = /^\d+$/;
	var vPrecio;
	if ((!regex2.test(precio))) {
		vPrecio = false;
	} else if ((precio < 5) || (precio > 500)) {
		vPrecio = false;
	} else {
		vPrecio = true;
	}
	return vPrecio;
}

function mostrarSeleccionados(seleccionados) {
	var listaSelec = "";
	document.getElementById("listaPlatos").style.display = "block";
	for (var i = 0; i < seleccionados.length; i++) {
		listaSelec = listaSelec + "  " + seleccionados[i] + "  |  ";
		document.getElementById("listaPlatos").innerHTML = listaSelec;
	}
}

function mostrarMenu(platos, precios) {
	var menu = "";
	document.getElementById("visualizar").style.display = "block";
	for (var x = 0; x < platos.length; x++) {
		menu = menu + "<p>" + (x + 1) + ".  " + platos[x] + "..........Precio:  " + precios[x] + " Euros." + "</p>";
		document.getElementById("lista").innerHTML = menu;
	}
}