console.log("here")
var imgs = $("img").attr('src');
var msg = "Hover over an image below.";

$("img").mouseover(function(){
	console.log('mouseover is working')
	$("#image").css("backgroundImage", "url("+this.src+")");
	$("#image").html(this.alt);
})

$("img").focus(function(){
	console.log('focus is working')
	$("#image").css("backgroundImage", "url("+this.src+")");
	$("#image").html(this.alt);	
})

$("img").mouseleave(function(){
	console.log('mouse is leaving')
	$("#image").css("backgroundImage", "url('')");
	$("#image").html(msg);	
})

$("img").blur(function(){
	console.log('blurring is working')
	$("#image").css("backgroundImage", "url('')");
	$("#image").html(msg);	
})

