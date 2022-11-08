/* Desaf 1 const*/
const clickImg = document.querySelector("#clickme");

/* Desaf 2 const */
const pPoke = document.querySelector("#p-poke");
const btnPoke = document.querySelector("#btn-poke");

/* Desaf 3 const */
const btnPass = document.querySelector("#btn-pass");
const pPass = document.querySelector("#pPass");

/* Desaf 1 -------------------------------------------------------------------------------*/

clickImg.addEventListener("click", () => {
	if (
		clickImg.style.border == null ||
		clickImg.style.border != "thick solid rgb(58, 136, 145)"
	) {
		let clickBorder = (clickImg.style.border = "thick solid #3a8891");
	} else {
		let clickBorder = (clickImg.style.border = "none");
	}
});

/* Desaf 1 fin -------------------------------------------------------------------------------*/

/* Desaf 2 -------------------------------------------------------------------------------*/

btnPoke.addEventListener("click", () => {
	let poke1 = document.querySelector("#pokemon1").value;
	let poke2 = document.querySelector("#pokemon2").value;
	let poke3 = document.querySelector("#pokemon3").value;
	let pokeTotal = parseInt(poke1) + parseInt(poke2) + parseInt(poke3);

	if (pokeTotal === 0) {
		pPoke.textContent = "Debes ingresar una cantidad";
		return;
	}

	if (pokeTotal > 10) {
		pPoke.textContent = "Llevas demasiados pokemons, recuerda que son solo 10.";
	} else {
		pPoke.textContent = `¡Partimos en una nueva aventura! Espero que tengas un buen viaje con tus ${pokeTotal} pokemons`;
	}
});

/* Desaf 2 fin -------------------------------------------------------------------------------*/

/* Desaf 3 -------------------------------------------------------------------------------*/

btnPass.addEventListener("click", () => {
	let firstPass = document.querySelector("#firstSelect").value;
	let secondPass = document.querySelector("#secondSelect").value;
	let thridPass = document.querySelector("#thridSelect").value;

	if (firstPass == 9 && secondPass == 1 && thridPass == 1) {
		pPass.textContent = "Password 1 correcta";
	} else if (firstPass == 7 && secondPass == 1 && thridPass == 4) {
		pPass.textContent = "Password 2 correcta";
	} else {
		pPass.textContent = "Password incorrecta";
	}
});

/* Desaf 3 fin -------------------------------------------------------------------------------*/
