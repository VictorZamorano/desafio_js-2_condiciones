/* Desaf 1 */
const clickImg = document.querySelector("#clickme");

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
/* Desaf 1 fin */
/* Desaf 2 */
const pPoke = document.querySelector("#p-poke");
const btnPoke = document.querySelector("#btn-poke");

btnPoke.addEventListener("click", () => {
	const poke1 = document.querySelector("#pokemon1").value;
	const poke2 = document.querySelector("#pokemon2").value;
	const poke3 = document.querySelector("#pokemon3").value;
	const pokeTotal = parseFloat(poke1) + parseFloat(poke2) + parseFloat(poke3);
	const pokeTotals1 =
		parseFloat(poke1) + parseFloat(poke2) ||
		parseFloat(poke1) + parseFloat(poke3) ||
		parseFloat(poke2) + parseFloat(poke3);
	const pokeLength = poke1.length + poke2.length + poke3.length;

	if (pokeLength === 0) {
		pPoke.textContent = "Debes ingresar una cantidad";
		return;
	}

	if (
		pokeTotal > 10 ||
		poke1 > 10 ||
		poke2 > 10 ||
		poke3 > 10 ||
		pokeTotals1 > 10
	) {
		pPoke.textContent = "Llevas demasiados pokemons, recuerda que son solo 10.";
	} else {
		pPoke.textContent = `¡Partimos en una nueva aventura! Espero que tengas un buen viaje con tus ${pokeTotal} pokemons`;
	}
});
/* Desaf 2 fin*/
/* Desaf 3 */
const btnPass = document.querySelector("#btn-pass");
const pPass = document.querySelector("#pPass");

btnPass.addEventListener("click", () => {
	const firstPass = document.querySelector("#firstSelect").value;
	const secondPass = document.querySelector("#secondSelect").value;
	const thridPass = document.querySelector("#thridSelect").value;

	if (firstPass == 9 && secondPass == 1 && thridPass == 1) {
		pPass.textContent = "Password 1 correcta";
	} else if (firstPass == 7 && secondPass == 1 && thridPass == 4) {
		pPass.textContent = "Password 2 correcta";
	} else {
		pPass.textContent = "Password incorrecta";
	}
});
/* Desaf 3 fin*/
