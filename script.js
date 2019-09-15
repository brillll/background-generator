var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBgBtn = document.querySelector(".randomGrad");

color1.value = "#ff0000";
color2.value = "#ffff00";

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = "background: " + body.style.background + ";";
}

function setRandomGradient(){
    var randColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var randColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ randColor1
	+ ", " 
	+ randColor2 
	+ ")";
}

randomBgBtn.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);