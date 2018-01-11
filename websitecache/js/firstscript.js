window.onload = function(){
	init(document.body.clientWidth, document.body.clientHeight);
	myMap();
	
};
function init(width, height) {
	console.log("init fired");
	console.log("The screen width is " + width);
	console.log("The screen height is " + height);
}




function myMap(){
	
	
	function myMap() {
var mapProp= {
    center:new google.maps.LatLng(53.2295681,-0.540207),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
}
	
$(function(){	
$('.slider').bxSlider({
	mode: 'fade',
	
	slideWidth: 600
});
Console.log("bxslider has been fired");
});

$(function(){
	$('.toggle-nav').click(function(e){
		$(this).toggleClass('active');
		$('.topnav ul').toggleClass('active');
		e.preventDefault();
	});
});

	

