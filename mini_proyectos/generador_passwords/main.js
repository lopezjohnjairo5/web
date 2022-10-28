let finalPass = document.getElementById('final-pass'),
sizePass = document.getElementById('size-pass'),
indicatorLen = document.getElementById('indicator-len'),
upperLowerPass = document.getElementById('upper-lower-pass'),
specialKeysPass = document.getElementById('special-keys-pass'),
numsPass = document.getElementById('nums-pass'),
btnGenerar = document.getElementById('btn-generar');

function createAlphabet(){
	let abcList = [];
	for (var i = 97; i < 123; i++) {
		abcList.push(String.fromCharCode(i));
	}
	return abcList;
}

function createFirstPass(len){
	let alphabetList = createAlphabet();
	let text = '';
	for (var i = 0; i < len; i++) {
		text += alphabetList[Math.floor(Math.random() * alphabetList.length)];
	}
	return text;
}

function setMayusMinusElements(txt){
	let new_num = 0;
	let new_txt = '';
	let size = txt.length;

	for (var i = 0; i < size; i++) {
		new_num = Math.floor(Math.random() * 2);
		if (new_num == 1) {
			new_txt += txt.charAt(i).toUpperCase();
		} else {
			new_txt += txt.charAt(i).toLowerCase();
		}
	}

	return new_txt;
}

function setSpecialValues(txt){
	let new_txt = '';
	let size = txt.length;
	let arraySpecials = ["_","#","$","&"];

	for (var i = 0; i < size; i++) {
		new_num = Math.floor(Math.random() * 3);
		if (new_num == 1 && i !== 0) {
			new_txt += arraySpecials[Math.floor(Math.random() * arraySpecials.length)];
		} else {
			new_txt += txt.charAt(i);
		}
	}
	return new_txt;
}

function setNumsValues(txt){
	let new_txt = '';
	let size = txt.length;

	for (var i = 0; i < size; i++) {
		new_num = Math.floor(Math.random() * 2);
		if (new_num == 1 && i !== 0) {
			new_txt += Math.floor(Math.random() * 10);
		} else {
			new_txt += txt.charAt(i);
		}
	}
	return new_txt;
}

function main(sizeValue){
	let upperLowerValue = upperLowerPass.checked,
	specialKeysValue = specialKeysPass.checked,
	numsValue = numsPass.checked;

	result = createFirstPass(sizeValue);
	
	if (upperLowerValue) {
		result = setMayusMinusElements(result);		
	}
	if (specialKeysValue) {
		result = setSpecialValues(result);
	}
	if (numsValue) {
		result = setNumsValues(result);
	}

	finalPass.innerHTML = result;
}

btnGenerar.addEventListener('click', function(){
	let sizeValue = sizePass.value;
	main(sizeValue);
});

sizePass.addEventListener('change', function(){
	let sizeValue = sizePass.value;
	indicatorLen.innerHTML = sizeValue;	
	main(sizeValue);
});