var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.getElementById("Gradient");
color1.addEventListener("input", function() {
	body.style.background = "liner-Gradient(to right," + color1.value + "," + color2.value + ")";
})
color2.addEventListener("input", function() {
	body.style.background = "liner-Gradient," + color.value + "," + color2.value + ")";
})