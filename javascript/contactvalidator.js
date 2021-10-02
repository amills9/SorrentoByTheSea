"use strict";

//get form
const form = document.querySelector("form");

const email = document.getElementById("email");
const homePhone = document.getElementById("homePhone");
const mobile = document.getElementById("mobile");
const checkbx = document.getElementById("chkbox");
	
function validate(event){

//	var error;

    if(document.getElementById("fullName").value.length < 2){
		document.getElementById("fullName").style.borderColor = "red";
        document.getElementById("error1").innerHTML = "Please enter a name";
        event.preventDefault();
		
		document.getElementById("fullName").select();

    }	
	else
	{
		document.getElementById("fullName").style.borderColor = "green";
	}
	
	// Test EMAIL
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern.test(email.value) === false){
		email.style.borderColor = "red";
        error = email.parentNode.querySelector(".error");
        error.innerHTML = "Please enter a valid email";
        event.preventDefault();
	}
	else
	{
		email.style.borderColor = "green";
	}
	
    // Test PHONE NUMBERS
	if(homePhone.value.length === 0 && mobile.value.length === 0){
        error = mobile.parentNode.querySelector(".error");
        error.innerHTML = "Please supply a contact number";
        //alert("Please supply a contact number");
        event.preventDefault();
    }
	
  	if(checkbx.checked == false)
	{
		
		var new_node = document.createElement("span");
		new_node.className = "error";
		new_node.innerText = "Please accept our Terms and Conditions";
		document.getElementById("p_checkbox").appendChild(new_node);
		
        event.preventDefault();
	}

}

function email_validation(val) {
	
	let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
    if(pattern.test(val) === false)
	{
		email.style.borderColor = "red";
        error = email.parentNode.querySelector(".error");
        error.innerHTML = "Please enter a valid email";
        event.preventDefault();
	}
	else
	{
		email.style.borderColor = "green";
		let error = email.parentNode.querySelector(".error");
        error.innerHTML = "";
	}
}
