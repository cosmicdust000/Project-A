'use strict';

document.forms.formForValues.onsubmit = function() { //При нажатии кнопки в форме, я вызываю функцию, которая берёт данные с полей
	let eventName = this.eventname.value;
	let adress = this.adress.value;
	let date = this.date.value;

	document.querySelector(".eventname").innerHTML = `${eventName}`;
	document.querySelector(".location").innerHTML = `${adress}`;
	document.querySelector(".date").innerHTML = `${date}`;
	return false;
};