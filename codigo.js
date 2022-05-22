
// const peticion = await fetch("maquinas.txt");
// const resultado = fetch("maquinas.txt").json();
// console.log(resultado);


const infoMaquina = async (maquina)=>{
	let peticion = await fetch("maquinas.txt");
	let arr = await peticion.json();
	let maquinaBuscada = arr.filter(mac=>mac["NUMERO INTERNO"]==maquina)[0]
	return maquinaBuscada;
}

const mapa = document.querySelector('.container');
const infoContainer = document.querySelector('.info-container');


mapa.addEventListener('click',(e)=>{
	console.dir(e.target)
	let numeroMaquina=parseInt(e.target.innerHTML);
	if (e.target.classList.contains('motor')){
		if (infoContainer.children[1]) infoContainer.removeChild(infoContainer.children[1]);
		infoContainer.classList.replace('hidden', 'aparecer')
		infoMaquina(numeroMaquina).then(res=>{
			let infoMaquina = document.createElement('DIV');
			infoMaquina.innerHTML = `
				<p>Número Interno: <b>${res["NUMERO INTERNO"]}</b></p>
				<p>Número de Máquina: <b>${res["NUMERO DE MAQUINA"]}</b></p>
				<p>Marca: <b>${res["MARCA"]}</b></p>
				<p>Modelo: <b>${res["MODELO"]}</b></p>
				<p>Tipo: <b>${res["TIPO"]}</b></p>
				<p>Diámetro: <b>${res["DIÁMETRO"]}</b></p>
				<p>Cantidad de Agujas: <b>${res["CANTIDAD AGUJAS"]}</b></p>
				<p>Alimentadores: <b>${res["ALIMENTADORES"]}</b></p>
				<p>Galga: <b>${res["GALGA"]}</b></p>
				<p>Año: <b>${res["AÑO"]}</b></p>
				<p>Funciona: <b>${res["FUNCIONA"]}</b></p>
			`
			infoContainer.appendChild(infoMaquina);
		})
	}
})


//infoMaquina(5).then(res=>console.log(res))



// const alimentadores = maquina["ALIMENTADORES"];
// const anio = maquina["AÑO"];
// const cantidadAgujas = maquina["CANTIDAD AGUJAS"];
// const diametro = maquina["DIÁMETRO"];
// const funciona = maquina["FUNCIONA"];
// const galga = maquina["GALGA"];
// const marca = maquina["MARCA"];
// const modelo = maquina["MODELO"];
// const numeroMaquina = maquina["NUMERO DE MAQUINA"];
// const numeroInterno = maquina["NUMERO INTERNO"];
// const tipo = maquina["TIPO"];

// console.log(maquina)