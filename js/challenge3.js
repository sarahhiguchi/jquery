$("#ch3form").submit(function(){  
        
    if ($("input[name='fruit']:checked").val() && ($("input[name='standing']:checked").val())){
        console.log($("input[name='fruit']").attr('value'));
        return true;
    }
    else{
        alert("Please fill out both!");
        return false;
    }
})

    

//if(document.querySelector('input[name='fruit']:checked'))
    //return true;

//alert('you must pick a fruit')
//return false;