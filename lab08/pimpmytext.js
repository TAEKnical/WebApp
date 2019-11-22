window.onload = function(){
	pageload();
	$("bigger").onclick = fonttimer;
	$("blingcheck").onchange = ifchecked;
	$("snoopcheck").onchange = makeupper;
	$("igpay").onclick = piglatin; 
	$("malkovich").onclick = malkobich;
};	
var clickedBigger = 0;

function pageload(){
	var myTextArea = document.getElementById("myTextArea");
	myTextArea.setAttribute('rows',4);
	myTextArea.setAttribute('cols',30);
}

function defaultsize(){
	var fontsize = document.getElementById("myTextArea").style.fontSize;
	if(!fontsize){
		$("myTextArea").style.fontSize = "14pt";		
	}
	else{
		$("myTextArea").style.fontSize = parseInt($("myTextArea").style.fontSize)+2+"pt";
	}
}

function fonttimer(){
	setInterval(function(){
		defaultsize();
	}, 500);
}


function ifchecked(){
	if(blingcheck.checked){
		myTextArea.style.fontWeight = "bold";
		myTextArea.style.color = "green";
		myTextArea.style.textDecoration = "underline";
		document.body.style.backgroundImage = 'url("./hundred.jpg")';
	}
	else{
		myTextArea.style.fontWeight = "normal";
		myTextArea.style.color = "green";
		myTextArea.style.textDecoration = "underline";
				document.body.style.backgroundImage = "none";
	}
}

function makeupper(){
	var myTextArea = document.getElementById("myTextArea");
	myTextArea.value = myTextArea.value.toUpperCase();
	
	var sArray = myTextArea.value.split(".");
	myTextArea.value = sArray.join("-izzle.");
}

function piglatin(){
	var myTextArea = document.getElementById("myTextArea");
	myTextArea.value= myTextArea.value.toLowerCase();
	var vowel = ['a','i','o','u','e'];
	var s = "";
	var i = 0;
	var index = 0;

	if(vowel.includes(myTextArea.value[0])){
		s = myTextArea.value+"way";
	}
	else{
		for(let char of myTextArea.value){
			if(vowel.includes(char)){
				index = myTextArea.value.indexOf(char);
				break;
			}
		}
		s = myTextArea.value.substring(index,myTextArea.value.length) + myTextArea.value.substring(0,index) + "ay";
	}
	myTextArea.value = s;
}

function malkobich(){
	var myTextArea = document.getElementById("myTextArea");
	var sArray = myTextArea.value.split(" ");

	for(let word of sArray){
		if(word.length > 5){
			sArray[sArray.indexOf(word)] = "Malkovich";
		}
	}

	myTextArea.value = sArray.join(" ");
}