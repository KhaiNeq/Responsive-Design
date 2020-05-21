$(document).ready(function(){

//emptying the form inputs of any residual values
$("#name").val("");
	
$("#email").val("");
	
$("#password").val("");
	
$("#repeat_password").val("");
	


$("#formsubmit").on("click", function() {
	
	//alert("The form has successfully been submitted.")
	
	
	//prevents default button submit button action
	
	event.preventDefault();
	
	//setting name variable from name form input
	
	var registration_name = $("#name").val();
	
	//setting name variable from email form input
	
	var registration_email = $("#email").val();
	
	//setting name variable from password form input
	
	var registration_password = $("#password").val();
	
	//setting name variable from repeat_password form input
	
	var registration_repeat_password = $("#repeat_password").val();
	
	//alert(registration_name + ", " + registration_email + ", " + registration_password + ", " + registration_repeat_password);
	
	localStorage.setItem("registration_name", registration_name);

	localStorage.setItem("registration_email", registration_email);

	localStorage.setItem("registration_password", registration_password);

	var storagename = localStorage.getItem("registration_name");

	var storageemail = localStorage.getItem("registration_email");

	var storagepassword = localStorage.getItem("registration_password");

	//alert("Values from Local Storage " storagename + ", " + storageemail + ", " + storagepassword);

	alert("You have successfully Registered");

	$("#registration_form").toggle();

	$("#login_form").toggle();

});
	
//code retrieved from: http://jsfiddle.net/aelor/F6sEv/325/
//single quotes changed to double quotes
//element id's changed as appropriate
	
$("#password, #repeat_password").on("keyup",function() {

	if ($("#password").val() === 

		$("#repeat_password").val()) {

		$("#message").html("Matching").css("color", "green");

	} else

		$("#message").html("Not Matching").css("color", "red");

});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});




