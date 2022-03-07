import fetch from "node-fetch";

const buscarRegistro = async (items) => {
	const registro = items.find((item) => item.IdT === "CO");

	if (!registro) {
		throw new Error("No se ha encontrado registro con el IdT ingresado.");
	}

	const res = await fetch(
		`https://api.garantto.com/api/v1/categoria?idPais=${registro.Id}`
	);

	if (!res.ok) {
		throw new Error(
			"Ha ocurrido un error con la consulta en buscarRegistro.js"
		);
	}

	const data = await res.json();

	data.map((item) => {
		item.Hijos.map((hijo) => {
			if (hijo.IdT === "Carro") {
				console.log(item.Descripcion);
			}
			if (hijo.IdT === "Televisor") {
				console.log(item.Descripcion);
			}
		});
	});
};

export default buscarRegistro;
