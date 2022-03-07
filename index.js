import registros from "./local_modules/registros.js";
import buscarRegistro from "./local_modules/buscarRegistro.js";

const main = async () => {
	try {
		const items = await registros();
		buscarRegistro(items);
	} catch (e) {
		console.error(e);
	}
};

main();
