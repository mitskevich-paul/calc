document.getElementById('lastResult').value = 'last result: '
let a;
let b;
let c;

let buttonOne = document.getElementById('buttonOne');
buttonOne.onclick = () => {
	document.getElementById('screen').value += 1;
  document.getElementById('screenShow').value += 1;
}
let buttonTwo = document.getElementById('buttonTwo');
buttonTwo.onclick = () => {
    document.getElementById('screen').value += 2;
  	document.getElementById('screenShow').value += 2;
}
let buttonThree = document.getElementById('buttonThree');
buttonThree.onclick = () => {
    document.getElementById('screen').value += 3;
  	document.getElementById('screenShow').value += 3;
}
let buttonfour = document.getElementById('buttonFour');
buttonFour.addEventListener('click', event => {
    document.getElementById('screen').value += 4;
  	document.getElementById('screenShow').value += 4;
});
let buttonFive = document.getElementById('buttonFive');
buttonFive.onclick = () => {
    document.getElementById('screen').value += 5;
  	document.getElementById('screenShow').value += 5;
}
let buttonSix = document.getElementById('buttonSix');
buttonSix.onclick = () => {
    document.getElementById('screen').value += 6;
  	document.getElementById('screenShow').value += 6;
}
let buttonSeven = document.getElementById('buttonSeven');
buttonSeven.onclick = () => {
    document.getElementById('screen').value += 7;
  	document.getElementById('screenShow').value += 7;
}
let buttonEight = document.getElementById('buttonEight');
buttonEight.onclick = () => {
    document.getElementById('screen').value += 8;
  	document.getElementById('screenShow').value += 8;
}
let buttonNine = document.getElementById('buttonNine');
buttonNine.onclick = () => {
    document.getElementById('screen').value += 9;
  	document.getElementById('screenShow').value += 9;
}
let buttonZero = document.getElementById('buttonZero');
buttonZero.onclick = () => {
    document.getElementById('screen').value += 0;
  	document.getElementById('screenShow').value += 0;
}
let buttonDot = document.getElementById('buttonDot');
buttonDot.onclick = () => {
    document.getElementById('screen').value += '.';
  	document.getElementById('screenShow').value += '.';
    document.getElementById('buttonDot').disabled = true;
    
}
let buttonPlus = document.getElementById('buttonPlus');
buttonPlus.onclick = (a, b) => { 
  document.getElementById('screenShow').value += '+';
	document.getElementById('screen1').value = '';
	a = document.getElementById('screen').value;
  document.getElementById('screen1').value = a;
	document.getElementById('screen').value = '';
  let g = 0;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonMinus = document.getElementById('buttonMinus');
buttonMinus.onclick = (a, b) => { 
	a = document.getElementById('screen').value;
  	document.getElementById('screenShow').value += '-';
  document.getElementById('screen1').value = a;
	document.getElementById('screen').value = '';
  let g = 1;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonMultiply = document.getElementById('buttonMultiply');
buttonMultiply.onclick = (a, b) => { 
	a = document.getElementById('screen').value;
  	document.getElementById('screenShow').value += '*';
  document.getElementById('screen1').value = a;
	document.getElementById('screen').value = '';
  let g = 2;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonDivision = document.getElementById('buttonDivision');
buttonDivision.onclick = (a, b) => { 
	a = document.getElementById('screen').value;
  	document.getElementById('screenShow').value += '/';
  document.getElementById('screen1').value = a;
	document.getElementById('screen').value = '';
  let g = 3;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonsqrt = document.getElementById('buttonsqrt');
buttonsqrt.onclick = (a) => { 
	a = document.getElementById('screen').value;
  	document.getElementById('screenShow').value += '(√)';
  document.getElementById('screen1').value = a;
  let c = Math.sqrt(a);
  document.getElementById('screen').value = c;
  document.getElementById('lastResult').value = 'last result √: ' + c;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbt').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttoncbrt = document.getElementById('buttoncbrt');
buttoncbrt.onclick = (a) => { 
	a = document.getElementById('screen').value;
  	document.getElementById('screenShow').value += '(3√)';
  document.getElementById('screen1').value = a;
  let c = Math.cbrt(a);
  document.getElementById('screen').value = c;
  document.getElementById('lastResult').value = 'last result 3√: ' + c;
}
let buttonPow = document.getElementById('buttonPow');
buttonPow.onclick = (a, b) => { 
	a = document.getElementById('screen').value;
  document.getElementById('screen1').value = a;
  document.getElementById('screen').value = '';
  document.getElementById('screenShow').value = a + '^';
  b = document.getElementById('screen').value;
  let g = 4;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonPro = document.getElementById('buttonPro');
buttonPro.onclick = (a, b) => { 
	a = document.getElementById('screen').value;
  document.getElementById('screen1').value = a;
  document.getElementById('screen').value = '';
  document.getElementById('screenShow').value = a + '% from ';
  b = document.getElementById('screen').value;
  let g = 5;
  document.getElementById('screen2').value = g;
  document.getElementById('buttonPlus').disabled = true;
  document.getElementById('buttonMinus').disabled = true;
  document.getElementById('buttonMultiply').disabled = true;
  document.getElementById('buttonDivision').disabled = true;
  document.getElementById('buttonsqrt').disabled = true;
  document.getElementById('buttoncbrt').disabled = true;
  document.getElementById('buttonPow').disabled = true;
  document.getElementById('buttonPro').disabled = true;
  document.getElementById('buttonDot').disabled = false;
}
let buttonClear = document.getElementById('buttonClear');
buttonClear.onclick = (c) => {
document.getElementById('screen').value = '';
document.getElementById('screen1').value = '';
document.getElementById('screen2').value = '';
document.getElementById('screenShow').value = '';
document.getElementById('buttonDot').disabled = false;
document.getElementById('buttonPlus').disabled = false;
document.getElementById('buttonMinus').disabled = false;
document.getElementById('buttonMultiply').disabled = false;
document.getElementById('buttonDivision').disabled = false;
document.getElementById('buttonsqrt').disabled = false;
document.getElementById('buttoncbrt').disabled = false;
document.getElementById('buttonPow').disabled = false;
document.getElementById('buttonPro').disabled = false;
}
let buttonRav = document.getElementById('buttonRav');
buttonRav.onclick = (c) => { 
	let a = document.getElementById('screen').value;
  let b = document.getElementById('screen1').value;
  if (document.getElementById('screen2').value == 0) {
  c = ((+a) + (+b));
  } else if ((document.getElementById('screen2').value == 1)) {
  c = ((+a) - (+b));
  } else if ((document.getElementById('screen2').value == 2)) {
  c = ((+a) * (+b));
  } else if ((document.getElementById('screen2').value == 3)) {
  c = ((+a) / (+b));
  } else if ((document.getElementById('screen2').value == 4)) {
  c = (Math.pow((+b), (+a)));
  } else if ((document.getElementById('screen2').value == 5)) {
  c = (((+a) * (+b)) / 100);
  }
  document.getElementById('lastResult').value = 'last result: ' + c;
	document.getElementById('screen').value = '';
	document.getElementById('screen1').value = '';
	document.getElementById('screenShow').value = '';
	document.getElementById('buttonDot').disabled = false;
  document.getElementById('buttonPlus').disabled = false;
  document.getElementById('buttonMinus').disabled = false;
  document.getElementById('buttonMultiply').disabled = false;
  document.getElementById('buttonDivision').disabled = false;
  document.getElementById('buttonsqrt').disabled = false;
  document.getElementById('buttoncbrt').disabled = false;
  document.getElementById('buttonPow').disabled = false;
  document.getElementById('buttonPro').disabled = false;
}

