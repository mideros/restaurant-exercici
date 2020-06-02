/*Un cop hem acabat de demanar el menjar, haurem de comparar la llista amb l’array que hem fet al principi. En el cas que la informació 
que hem introduït a la List coincideixi amb la del array, haurem de sumar el preu del producte demanat; en el cas contrari haurem de 
mostrar un missatge que digui que el producte que hem demanat no existeix.*/
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
	}
}

function pagar() {

	document.getElementById("procesar").className = "row d-none";
	document.getElementById("resultado").className = "row mt-5";

	var contador = 0;
	var totalMenu = 0;
	var p, totalMensaje = "";
	var mensaje = "";

	for (var k = 0; k < seleccionados.length; k++) {
		contador = 0;
		for (var l = 0; l < platos.length; l++) {
			if (seleccionados[k] === platos[l]) {
				totalMenu += precios[l];
			} else {
				contador = contador + 1;
				p = seleccionados[k];
			}
		}
		if (contador == 5) {
			mensaje = mensaje + "<p>" + "El plato " + p + "  no existe en el menu " + "</p>";
			document.getElementById("noPlato").innerHTML = mensaje;
		}
	}
	totalMensaje = "<p>" + "El total a pagar séran:  " + totalMenu + "  euros" + "</p>";
	document.getElementById("cobrar").innerHTML = totalMensaje;

	calcularBilletes(totalMenu);
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

function calcularBilletes(totalMenu) {
	var b5, b10, b20, b50, b100, b200, b500, m2, m1;
	var mensajeBilletes = "";


	b500 = parseInt(totalMenu / 500);
	totalMenu = totalMenu - (b500 * 500);

	b200 = parseInt(totalMenu / 200);
	totalMenu = totalMenu - (b200 * 200);

	b100 = parseInt(totalMenu / 100);
	totalMenu = totalMenu - (b100 * 100);

	b50 = parseInt(totalMenu / 50);
	totalMenu = totalMenu - (b50 * 50);

	b20 = parseInt(totalMenu / 20);
	totalMenu = totalMenu - (b20 * 20);

	b10 = parseInt(totalMenu / 10);
	totalMenu = totalMenu - (b10 * 10);

	b5 = parseInt(totalMenu / 5);
	totalMenu = totalMenu - (b5 * 5);

	m2 = parseInt(totalMenu / 2);
	totalMenu = totalMenu - (m2 * 2);

	m1 = parseInt(totalMenu / 1);
	totalMenu = totalMenu - (m1 * 1);

	if (b500 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b500 + "billetes de 500  euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (b200 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b200 + " billetes de 200 euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (b100 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b100 + " billetes de 100 euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (b50 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b50 + " billetes de 50 euros" + "</p>"
		document.getElementById("billetes").innerHTMLL = mensajeBilletes;
	}
	if (b20 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b20 + " billetes de 20  euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (b10 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b10 + " billetes de 10 euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (b5 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + b5 + " billetes de 5 euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (m2 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + m2 + " monedas de 2 euros" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
	if (m1 > 0) {
		mensajeBilletes = mensajeBilletes + "<p>" + "Se sugiere pagar con: " + m1 + " monedas de 1 euro" + "</p>";
		document.getElementById("billetes").innerHTML = mensajeBilletes;
	}
}