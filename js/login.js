$(document).ready(function(){


$("#loginname").val("");
	
$("#loginemail").val("");
	
$("#loginpassword").val("");
	
$("#loginrepeat_password").val("");


$("#login_formsubmit").on("click", function() {

	var login_name = $("#loginname").val();

	var login_email = $("#loginemail").val();

	var login_password = $("#loginpassword").val();

	//alert(login_name + ", " + login_email + ", " + login_password)

$("#loginname").val("");
	
$("#loginemail").val("");
	
$("#loginpassword").val("");
	
$("#loginrepeat_password").val("");

});












});