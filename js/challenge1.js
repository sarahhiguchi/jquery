$('#subscribe').on('change', function()
{
	// var x = document.querySelector("#emailField");
	if ($("#subscribe").is(':checked')){
	console.log("selected");
	// 	x.style.display = "block";
	$('#emailField').show();
  	 } else {
  	console.log("Not selected");
	// 	x.style.display = "none";
	$('#emailField').hide();
	  }
	}
)

  	// Advanced Option....
//   	x.style.display == "block" ? 
//		x.style.display = "none" : 
// 		x.style.display = "block"; 


