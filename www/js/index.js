<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageOne",function(){
 
	$("#btn").on("tap",function(){
		var rnd = random();
		
		if(rnd) {
			$("#answ").text("true");
			navigator.notification.beep(1);
		}
		else {
			$("#answ").text("false");
			navigator.vibrate(2000);
		}

	});
	
	
	function random() {
		return !Math.round(Math.random());
	}

});
