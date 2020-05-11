
$(document).ready(function(){

//emptying the form inputs of any residual values
$("#name").val("");
	
$("#email").val("");
	
$("#password").val("");
	
$("#repeat_password").val("");
	
	
	
	
	
	
	
$("#formsubmit").on("click", function() {
	
	//alert("The form has successfully been submitted.")
	
	
	//prevents default button submit button action
	
	event.preventDefault;
	
	//setting name variable from name form input
	
	var name = $("#name").val();
	
	//setting name variable from email form input
	
	var email = $("#email").val();
	
	//setting name variable from password form input
	
	var password = $("#password").val();
	
	//setting name variable from repeat_password form input
	
	var repeat_password = $("#repeat_password").val();
	
	//alert(name + ", " + email + ", " + password + ", " + repeat_password);
	
	localStorage.setItem("registration_name", registration_name);

	localStorage.setItem("registration_email", registration_email);

	localStorage.setItem("registration_password", registration_password);

	var storagename = localStorage.getItem("registration_name");

	var storageemail = localStorage.getItem("registration_email");

	var storagepassword = localStorage.getItem("registration_password");


	alert("Values from Local Storage " storagename + ", " + storageemail + ", " + storagepassword);

});
	
	
	
	
	
	
	
	
	
	
//code retrieved from: http://jsfiddle.net/aelor/F6sEv/325/
//single quotes changed to double quotes
//element id's changed as appropriate
	
	$("#password, #repeat_password").on("keyup", function () {
	
    if ($("#password").val() === $("#repeat_password").val()) {
		
        $("#message").html("Password is matching").css("color", "green");
		
    } else 
		
        $("#message").html("Password is not matching").css("color", "red");
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});




