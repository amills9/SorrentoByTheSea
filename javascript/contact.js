"use strict";

document.querySelector("form").addEventListener("submit", validate);



// Setup elements
const fullName = document.getElementById("fullName");
const error1 = document.getElementById("error1")
const enteredEmailAddress = document.getElementById("email");
const error2 = document.getElementById("error2");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const homePhone= document.getElementById("homePhone");
const mobilePhone = document.getElementById("mobilePhone");
const phoneNumberFormat = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
const error3 = document.getElementById("error3")
const checkedBox = document.getElementById("chkbox");
const error4 = document.getElementById("error4");
const questionBox = document.getElementById("question");
const error5 = document.getElementById("error5");


function validate(){

	//Validate Name field

	if (fullName.value.length < 2) {
	updateError(error1, "Please enter a name");
	changeBorderColor(fullName, "red");
}else{
	changeBorderColor(fullName, "green");} 

// Validate email address

if (enteredEmailAddress.value.match(emailFormat)) {
		changeBorderColor(enteredEmailAddress, "green");
    }else{
	updateError(error2, "Please enter a valid email address");
	changeBorderColor(enteredEmailAddress, "red");;
	}

// Validate phone number(s)

if (homePhone.value.length > 0){
	homePhoneNumber();
} else {
	mobilePhoneNumber();
}

if (homePhone.value.length == 0 || mobilePhone.value.length == 0){
	updateError(error3, "Please enter a phone number")
}

// Validate T&Cs checkbox

/*
if (checkedBox.checked != true){
	changeBorderColor(checkedBox, "red")
	updateError(error4, "Please accept our T&Cs")
} else {
	changeBorderColor(checkedBox, "green")
}
*/

// Validate questionbox

if (questionBox.value.length >= 10){
	changeBorderColor(questionBox, "green");
} else {
	changeBorderColor(questionBox, "red");
	updateError(error5, "Please enter your question")
}

}; // end of function validate()


function homePhoneNumber(){
	if (homePhone.value.match(phoneNumberFormat)) {
		changeBorderColor(homePhone, "green");
	} else {
		changeBorderColor(homePhone, "red");;
		updateError(error3, "Please enter a valid phone number");
	}
}; //end of homePhoneNumber()

function mobilePhoneNumber(){

	if (mobilePhone.value.match(phoneNumberFormat)) {
		changeBorderColor(mobilePhone, "green");
	} else {
		changeBorderColor(mobilePhone, "red");
		updateError(error3, "Please enter a valid mobile number");
	}
}; // end of mobileNumber()


function changeBorderColor(element, color){
	element.style.borderColor = color;
}; // end of changeBorderColor()

function updateError(element, text){
	element.innerHTML = text;
} // end of updateError()