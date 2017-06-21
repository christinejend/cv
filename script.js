var textPlus = document.getElementById("jaime"),
	valuePlus = textPlus.innerText,
	numPlus = parseFloat(valuePlus),

	textMoins = document.getElementById("jaimepas"),
	valueMoins = textMoins.innerText,
	numMoins = parseFloat(valueMoins);


/* COMPTEUR */
textPlus.onclick = function() {
	numPlus++;
	textPlus.innerHTML =  numPlus;

	}

textMoins.onclick = function() {
	numMoins--;
	textMoins.innerHTML =  numMoins;
	}

