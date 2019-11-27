// useBilling.onchange = function() {
	$('#useBilling').on('change', function()
	{
// 	let home = document.querySelector("#home");
// 	if (this.checked){
	if ($('#useBilling').is(':checked')){
		$('#home').val($('#billing').val());
// 		home.value = document.querySelector("#billing").value;
		$('#home').prop('disabled', true);
	}
// 		home.disabled = true;}
 	else {
// 		home.value = "";
		$('#home').val() = "";
// 		home.disabled = false;}
		$('#home').prop('disabled', false);
 	}
	}
	)
