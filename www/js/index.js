<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageOne",function(){
 
	$("#btn").on("tap",function(){
		var rnd = random();
		if (rnd == 0){
		$("#answ").text("true");
			navigator.notification.beep(1)
		}
		if (rnd == 1){
		$("#answ").text("false");
			navigator.notification.beep(2)
		}
	})
function random() {
	return !Math.round(Math.random());
}

});
