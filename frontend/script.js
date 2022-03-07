const selectMarcas = document.querySelector("#selectMarcas");
const btnEnviar = document.querySelector("#btnEnviar");

// Variable para guardar datos de la carga inicial (Acceso global)
let datosConsulta;

// Datos carga inicial
const fetchData = async () => {
	const res = await fetch("https://api.garantto.com/api/v1/marca-cbx/");

	if (!res.ok) {
		throw new Error("Ha ocurrido un error con la consulta en script.js");
	}

	const data = await res.json();
	addOptions(data);
	datosConsulta = data;
};

const addOptions = (data) => {
	data.map((item) => {
		selectMarcas.options[selectMarcas.options.length] = new Option(
			item.Marca,
			item.Id
		);
	});
};

try {
	fetchData();
} catch (e) {
	console.error(e);
}

// Evento boton formulario
btnEnviar.onclick = (e) => {
	e.preventDefault();

	const marca = datosConsulta.find(
		(item) => item.Id === parseInt(selectMarcas.value)
	);

	alert(
		`La cantidad de ciudades asociadas con la marca ${marca.Marca} es de ${marca.IdCiudades.length}`
	);
};
