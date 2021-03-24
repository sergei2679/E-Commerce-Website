
//===== show more and show less
var listShowMore = document.querySelectorAll(".content input");
//console.log(listShowMore);

listShowMore.forEach(function(show){
	show.addEventListener("click", function(e){
		//console.log(show.value);
		var showMoreGrand = e.target.parentElement.parentElement;
		//console.log(showMoreGrand);
		if(showMoreGrand.style.height == "auto"){
			showMoreGrand.style.height = "400px";
			show.value = "Show More";
		} else{
			showMoreGrand.style.height = "auto";
			show.value = "Show Less";
		}		
	})
})

//===== search function

var search = document.querySelector("#search input");
//console.log(search);

search.addEventListener("keyup", function(e){
	var temp = e.target.value.toLowerCase();
	var items = document.querySelectorAll(".shop figcaption");
	//console.log(items);
	
	Array.from(items).forEach((item)=> {
		var iName = item.textContent;
		//console.log(iName);
		
		if(iName.toLowerCase().indexOf(temp) != -1){
			item.parentElement.style.display = "block";
		} else{
			item.parentElement.style.display = "none";
		}
	});
})

//===== add to cart function
var adds = document.querySelectorAll(".add");
//console.log(adds);

adds.forEach(function(add){
	add.addEventListener("click", function(e){
		//console.log(e.target.parentElement.children);
		//console.log(e.target.parentElement.childNodes[3].textContent);
		//console.log(e.target.parentElement.children[2].children[0].textContent);
		var aName = e.target.parentElement.childNodes[3].textContent;
		var aPrice = e.target.parentElement.children[2].children[0].textContent;
		var table = document.querySelector("#cart table");
		var tableLen = (table.rows.length) - 1;
		var row = table.insertRow(tableLen).outerHTML = "<tr id='row"+tableLen+"'><td id='name"+tableLen+"'>"+aName+"</td><td id='price"+tableLen+"' class='price'>"+aPrice+"</td><td><input type='button' value='Remove' class='delete' onclick='del("+tableLen+")'></td></tr>";
		
		//===== calculate total price
		var result = 0.0;
		var prices = document.querySelectorAll(".price");
		//console.log(prices);
		for(var i = 0; i < prices.length; i++){
			result = result + parseFloat(prices[i].textContent);	
		}
		//console.log(result);
		var total = document.getElementById("total");
		total.value = result;
		//console.log(total.value);
		var totalPurchase = document.getElementById("totalPurchase");
		totalPurchase.value = result;
	})
})


//===== remove item from cart
function del(num)
{
	document.getElementById("row"+num+"").outerHTML = "";
	//===== calculate total price
	var result = 0.0;
	var prices = document.querySelectorAll(".price");
	//console.log(prices);
	for(var i = 0; i < prices.length; i++){
		result = result + parseFloat(prices[i].textContent);	
	}
	var total = document.getElementById("total");
	total.value = result;
	var totalPurchase = document.getElementById("totalPurchase");
	totalPurchase.value = result;
}

//===== show card information
var pur = document.getElementById("pur");
//console.log(pur);
var pur1 = document.querySelectorAll(".pur1");
//console.log(pur1);

pur1.forEach(function(item){
	item.style.display = "none";
})

pur.addEventListener("click", function(){
	for(var i = 0; i < pur1.length - 2; i++){
		if(pur1[i].style.display != "block"){
			pur1[i].style.display = "block";
		} else{
			pur1[i].style.display = "none";
		}
	}
	for(var i = pur1.length -2; i < pur1.length; i++){
		if(pur1[i].style.display != "inline"){
			pur1[i].style.display = "inline";
		} else{
			pur1[i].style.display = "none";
		}
	}
})

//===== validate credit card info
var inputs = document.querySelectorAll("#card-info input");
//console.log(inputs);

var pattern = {
	cardNum: /^\d{15,16}$/,
	nameHolder: /^[a-zA-Z\ ]+$/,
	expiration: /^\d{2}-\d{2}$/,
	cvc: /^\d{3,4}$/
}

function validate(field, regex){
	//console.log(field.value);
	//console.log(regex.test(field.value));
	if(regex.test(field.value)){
		field.className = "pur1 valid";
	} else{
		field.className = "pur1 invalid";
	}
}

inputs.forEach(function(input){
	input.addEventListener("keyup", function(e){
		validate(e.target, pattern[e.target.attributes.name.value])
	})
})

//===== clear button
var clear = document.getElementById("reset");
//console.log(clear);

clear.addEventListener("click", function(){
	inputs.forEach(function(input){
		input.value = "";
		input.className = "pur1"
	})
})

//===== pay button
var pay = document.getElementById("pay");
//console.log(pay);

pay.addEventListener("click", function(){
	for(var i = 0; i < inputs.length; i++){
		var check = false;
		if(inputs[i].className == "pur1 valid"){
			check = true;
		}
	}
	//console.log(check);
	if(!check){
		alert("Please check your card information...");
	} else{
		alert("Your transaction has been successfully paid...");
		window.location = "./2welcome.html";
	}
})























