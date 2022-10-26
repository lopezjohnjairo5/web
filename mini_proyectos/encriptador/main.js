function createAlphabetArray(){
	/*
	function createAlphabetArray
		encargada de crear un array cuyo contenido será
		el alfabeto
	
	return:
		- newArray: (array) array con las letras de la "a" a la "z"
	*/
	let abcArray = [];

	//llenamos el array con el alfabeto
	for (var i = 97; i < 123; i++) {
		abcArray.push(String.fromCharCode(i));
	}

	return abcArray;
}

function caesarEncryption(text,num){
	/*
	function caesarEncryption
		encargada de reemplazar los valores de la cadena
		pasada por parametro, tantas veces como
		lo indique el numero tambien pasado por parametro
	
	params:
		- text: (str) cadena a reemplazar
		- num: (int) numero entero del 0 al 5(ambos incluidos)
	
	return:
		- newText: (str) nueva cadena con el texto equivalente al reemplazo
	*/

	let arrayText = text.split('');
	let abcList = createAlphabetArray();	
	let newText = '';

	//recorremos la cadena que ingresó el usuario
	for (var i = 0; i < arrayText.length; i++) {
		index = abcList.indexOf(arrayText[i]);
		if (index !== -1) {
			newIndex = index+num;
			if (newIndex >= abcList.length) {
				newIndex -=  (abcList.length); 
			}
			newText += abcList[newIndex];			
		} else {
			newText += arrayText[i];
		}
	}
	return newText;
}

let inputTextUser = document.getElementById('input-text-user');
let inputRangeCesar = document.getElementById('input-range-cesar');
let valueRangeLabel = document.getElementById('value_range_label');
let cesarMethodResult = document.getElementById('cesar_method_result');

// listeners

// listener input text
inputTextUser.addEventListener('keyup',function(){
	valueInput = this.value.toLowerCase();
	valueRange = parseInt(inputRangeCesar.value);

	//caesars method
	caesarResult = caesarEncryption(valueInput,valueRange);
	cesarMethodResult.innerHTML = caesarResult; 

	//vigenere method

});

//listener input range
inputRangeCesar.addEventListener('change',function(){
	valueInput = inputTextUser.value.toLowerCase();
	valueRange = parseInt(this.value);
	caesarResult = caesarEncryption(valueInput,valueRange);
	cesarMethodResult.innerHTML = caesarResult;

	//put new value in span element
	valueRangeLabel.innerHTML = "Desplazamiento: " + valueRange;

});