import fetch from "node-fetch";

const registros = async () => {
	const res = await fetch("https://api.garantto.com/api/v1/pais");

	if (!res.ok) {
		throw new Error("Ha ocurrido un error con la consulta en registros.js");
	}

	// Numero de registros en la consulta
	const data = await res.json();
	console.log(`El número de registros existentes es ${data.length}`);
	return data;
};

export default registros;
