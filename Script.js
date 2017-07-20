$(document).ready
(
function()
{  
$("#submit").click
(
function()
{
	
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();
var msg = $("#msg").val();

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1='+ name + '&email1='+ email + '&phone1='+ phone + '&msg1='+ msg;

if(name==''||email==''||phone==''||msg=='')
{
	//alert("Please Fill All The Fields");
	
	$("#Show1").show();
	$("#Show").hide();
}
else
{
	//AJAX code to submit form.
	$.ajax
(
{
			type: "POST",
			url: "Index1.php",
			data: dataString,
			cache: false,
			success: function(result){
								
			// alert(result);	

			$("#Show").show();
			$("#Show1").hide();
          
									}
}
);
}
	
	
	
	
	
	
	

return false;
}
);
}
);