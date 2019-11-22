window.onload = pageload;
var clickedBigger = 0;

function pageload(){
	var myTextArea = document.getElementById("myTextArea");
	myTextArea.setAttribute('rows',4);
	myTextArea.setAttribute('cols',30);
}

function fonttimer(){
	//$("myTextArea").style.fontSize = "24pt";
	var bigger = document.getElementById("bigger");
	if(clickedBigger == 0){
		bigger.addEventListener('click', function(event){
			alert(1);
			//var myTextArea = document.getElementById("myTextArea");
			//myTextArea.style.fontSize="12pt";
		});
	}
	else{
		bigger.addEventListener('click', function(event){
			alert(2);
			//var myTextArea = document.getElementById("myTextArea");
			//myTextArea.style.fontSize="14pt";
		});
	}
	clickedBigger++;
}

function ifchecked(){
	var blingcheck = document.getElementById("blingcheck");
	if(blingcheck.checked){
		myTextArea.style.fontWeight = "bold";
		myTextArea.style.color = "green";
		myTextArea.style.textDecoration = "underline";
	}
	else{
		myTextArea.style.fontWeight = "normal";
		myTextArea.style.color = "green";
		myTextArea.style.textDecoration = "underline";
	}
}

function makeupper(){
	var myTextArea = document.getElementById("myTextArea")
	myTextArea.value = myTextArea.value.toUpperCase();
	
	var sArray = myTextArea.value.split(".");
	myTextArea.value = sArray.join("-izzle.");
}