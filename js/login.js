$(document).ready(function(){


$("#login_name").val("");
	
$("#login_email").val("");
	
$("#login_password").val("");
	
$("#login_formsubmit").on("click", function() {

	event.preventDefault();

	var login_name = $("#login_name").val();

	var login_email = $("#login_email").val();

	var login_password = $("#login_password").val();

	//alert(login_name + ", " + login_email + ", " + login_password)

	var storagename = localStorage.getItem("registration_name");

	var storageemail = localStorage.getItem("registration_email");

	var storagepassword = localStorage.getItem("registration_password");

	if (login_name === storagename & login_email === storageemail & login_password === storagepassword) {

	alert("Registered name matches Login name")

	} else {

		alert("Something went wrong, Try Again.")



$("#login_name").val("");
	
$("#login_email").val("");
	
$("#login_password").val("");

});












});