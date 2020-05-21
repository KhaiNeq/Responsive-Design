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

	alert("You have successfully Logged in")

	$(#"login_form").toggle();

	$("#mask").toggle();

	$("#loginmessage").("Welcome: " + login_name);

	$("#login").unbind().text("Logout").attr("id", "logout")

	$("#logout").bind("click", function() {

		//alert("Logout button works");

		localStorage.clear();

		$("#loginmessage").text("Not Logged In");

		$("#logout").unbind().text("Login").attr("id", "login")

		$("#login").bind("Click", function() { 

			$("#login_form").toggle();
			
			$("#mask").toggle();

		})
			// body...
		});

	} else {

		alert("Something went wrong, Try Again.")

	}











});