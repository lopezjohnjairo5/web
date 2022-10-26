// functions
function getDataValue (el) {
	if (el.tagName === 'BUTTON') {
		let dataValue = el.getAttribute('data-value');
		inputOp.value += dataValue;
	} else {
		console.log('no se presiono un btn');
	}
}

//objs
let putValueIn = document.getElementsByClassName('put-value-in');
let inputOp = document.getElementById('input-op');
let spErase = document.getElementById('sp-erase');
let spRaise = document.getElementById('sp-raise');
let btnEqual = document.getElementById('btn-equal');

// listeners
for (var i = 0; i < putValueIn.length; i++) {
	putValueIn[i].addEventListener('click',function (){
		getDataValue(this);
	});
}

spErase.addEventListener('click', () => {
	inputOp.value = '';
});

spRaise.addEventListener('click', () => {
	inputOp.value += '**';
});

btnEqual.addEventListener('click', () => {
	/*
	NOTA: el uso de eval() representa un riesgo de seguridad 
	debido a que evalua un string, es por esto que no debe ser
	utilizado en aplicaciones finales.

	En este caso se utiliza solo para fines del ejercicio.	
	
	*/
	try{
		if (inputOp.value !== '') {
			result = eval(inputOp.value); 
			if (result != "Infinity" && result != "undefined" && result != "null" && result != "NaN") {
				inputOp.value = result;
			}
		}
	} catch (error) {
		inputOp.value = '';	
	}
});

/*
addition
rest
multiplication
division
raising
nine
eight
seven
six
five
four
three
two
one
zero
erase
opening parentheses
closing parenthesis
*/