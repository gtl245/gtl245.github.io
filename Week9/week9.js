var switchtxt  = 1;
var switchfont = 1;
var pQuery = document.querySelector("p");

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 32 && switchfont === 1) {
  	switchfont = 0;
    pQuery.style.fontFamily = "georgia";
  }
  else if (theEvent.keyCode === 32 && switchfont === 0) {
  	switchfont = 1;
    pQuery.style.fontFamily = "courier";
  }
})


var txtbutton = document.querySelector("#button");
txtbutton.addEventListener("click", changetxt); 

function changetxt(){
	if (switchtxt === 1){
		pQuery.style.color = "#20B2AA";
		switchtxt = 0;
	}
	else if (switchtxt === 0){
		pQuery.style.color = "white" ;
		switchtxt = 1;
	}

}
