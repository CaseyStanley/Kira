<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageOne",function(){
 
	$("#btn").on("tap",function(){
		var rnd = random();
		if (rnd == 0){
		$("#answ").text("true");
		}
		if (rnd == 1){
		$("#answ").text("false");
		}
function random() {
	return !Math.round(Math.random());
}

});
