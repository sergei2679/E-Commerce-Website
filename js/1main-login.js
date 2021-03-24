
var log = document.querySelector("#log");
var log1 = document.getElementsByClassName("log1");

log1[0].style.display = "none";
log1[1].style.display = "none";
log1[2].style.display = "none";
log1[3].style.display = "none";
log1[4].style.display = "none";

log.addEventListener("click", function(e){
	if(log1[0].style.display == "none"){
		log1[0].style.display = "inline";
	} else{
		log1[0].style.display = "none";
	}
	if(log1[1].style.display == "none"){
		log1[1].style.display = "inline";
	} else{
		log1[1].style.display = "none";
	}
	if(log1[2].style.display == "none"){
		log1[2].style.display = "inline";
	} else{
		log1[2].style.display = "none";
	}
	if(log1[3].style.display == "none"){
		log1[3].style.display = "inline";
	} else{
		log1[3].style.display = "none";
	}
	if(log1[4].style.display == "none"){
		log1[4].style.display = "inline";
	} else{
		log1[4].style.display = "none";
	}
})

var btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function(e){
	var name1 = document.querySelector("#name1").value;
	console.log(name1);
	var pass1 = document.querySelector("#pass1").value;
	console.log(pass1);
	
	if(name1 !== "admin" && pass1 !== 12345){
		alert("Incorrect username or password...");
		document.querySelector("#name1").value = "";
		document.querySelector("#pass1").value = "";
	} else{
		location.assign("./2welcome.html");
	}
})