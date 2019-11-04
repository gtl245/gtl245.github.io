document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 32) {
    alert("hello!");
  }
})

//onMouse event
function mOn(obj){
	obj.innerHTML="HELLOOO"
}
function mOut(obj){
	obj.innerHTML="try hovering!"
}
