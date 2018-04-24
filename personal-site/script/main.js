
$(document).ready(function(){

var picone = "https://codepen.io/DPreys/pen/ybmYVV";
var pictwo = "https://codepen.io/DPreys/pen/oeQdoE";
var picthree = "https://codepen.io/DPreys/pen/wrBqMY";
var picfour = "https://codepen.io/DPreys/pen/qoPRaE";
var picfive = "http://www.frshnup.com/";
var picsix = "http://easyfoodprep.com/"; 
var instagram = "https://www.instagram.com/preys_dan/";
var linkedin = "https://www.linkedin.com/in/danielpreys/";
var github = "https://github.com/danielpreys";
var codepen = "https://codepen.io/DPreys/";


function openWork (){

$(".robin").on("click", function(){
	window.open(picone);
});

$(".weather").on ("click", function(){
	window.open(pictwo);
});

$(".wiki").on ("click", function(){
	window.open(picthree);
});

$(".calc").on ("click", function(){
	window.open(picfour);
});

$(".beauty").on ("click", function(){
	window.open(picfive);
});
$(".cook").on ("click", function(){
	window.open(picsix);
});

$(".github-thmb").on ("click", function(){
	window.open(github);
});

$(".codepen-thmb").on ("click", function(){
	window.open(codepen);
});

$(".linked-thmb").on ("click", function(){
	window.open(linkedin);
});

$(".insta-thmb").on ("click", function(){
	window.open(instagram);
});

}
openWork();

//highlight portfolio images
function hover (){
 $(".portfolio").hover(function(){
	$(this).css("color", "blue");
},	
	function (){
	$(this).css("color", "");
});
 

//social media section
	$(".social-img").hover(function(){
	$(this).css("color", "blue");
},	
	function (){
		$(this).css("color", "");
});   
openWork(); 

	
};

hover();

});