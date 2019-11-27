$('#ch4form').submit(function(){
    var validInput = true;
    var name = $('#fullname').val();
    var address = $('#streetaddr').val();
    console.log("Here");
    console.log(name);
    console.log(address);
    if (name.length == 0){
        $("#nameerrormsg").show(); 
        validInput = false;
    }
    else {
        $("#nameerrormsg").hide();
    }

    if (address.length == 0){
        $("#addrerrormsg").show(); 
        validInput = false;
    }
    else {
        $("#addrerrormsg").hide(); 
    }

    return validInput;
}
)

