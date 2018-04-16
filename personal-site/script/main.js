
$(document).ready(function(){

var picone = "https://codepen.io/DPreys/pen/ybmYVV";
var pictwo = "https://codepen.io/DPreys/pen/oeQdoE";
var picthree = "https://codepen.io/DPreys/pen/wrBqMY";
var picfour = "https://codepen.io/DPreys/pen/qoPRaE";
var picfive = "http://www.frshnup.com/";
var picsix = "http://easyfoodprep.com/"; 


function openWork (){

$("#pic-one").on("click", function(){
	window.open(picone);
});

$("#pic-two").on ("click", function(){
	window.open(pictwo);
});

$("#pic-three").on ("click", function(){
	window.open(picthree);
});

$("#pic-four").on ("click", function(){
	window.open(picfour);
});

$("#pic-five").on ("click", function(){
	window.open(picfive);
});
$("#pic-six").on ("click", function(){
	window.open(picsix);
});

}
openWork();

//highlight portfolio images
function hover (){
 $("#pic-one").hover(function(){
	$(this).css("color", "blue");
},	
	function (){
		$(this).css("color", "");
});
	openWork();
};

hover();

});