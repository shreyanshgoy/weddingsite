console.log("connected");
var div1=document.querySelectorAll(".imagesSections");
var namess1=document.getElementById("name1");
var btnText=document.querySelectorAll(".btnText")[0];
var decBtn=document.getElementById("decBtn");
var btns=document.querySelectorAll(".btn")[0];
var text;
var text1;



div1[0].addEventListener("mouseover",function () {
	// body...
	namess1.style.visibility="visible";
	this.style.opacity=0.7;
	namess1.style.background="rgba(250,14,125,0.7)";
	 text=btnText.textContent;
	 text1 = "Check for "+ btnText.textContent;
	btnText.textContent=text1;
	decBtn.style.background="#FA0E7D";



});
div1[0].addEventListener("mouseout",function () {
	// body...
	namess1.style.visibility="hidden";
	this.style.opacity=1;
	btnText.textContent=text;
	console.log(text);
	decBtn.style.background="#5bc0de";


});




//same style for buttons
btns.addEventListener("mouseover",function () {
	// body...
	namess1.style.visibility="visible";
	// this.style.opacity=0.7;
	namess1.style.background="rgba(250,14,125,0.7)";
	var text=btnText.textContent;
	var text1 = "Check for "+ btnText.textContent;
	btnText.textContent=text1;

	decBtn.style.background="#FA0E7D";




});
btns.addEventListener("mouseout",function () {
	// body...
	namess1.style.visibility="hidden";
	this.style.opacity=1;
	btnText.textContent=text;
	decBtn.style.background="#5bc0de";


});


var imageSectionsjs=[];
imageSectionsjs= document.querySelectorAll(".imageSections");

for (var i = 0; i < imageSectionsjs.length; i++) {
	imageSectionsjs[i].addEventListener("mouseover",function(){
		this.style.opactity=0.7;
	})
}