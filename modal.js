// Get the modal
var modal = document.getElementById('infoModal');

// Get the button that opens the modal
var btn = document.getElementById("infoModalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    modal.style.animation = "fadein 0.2s linear";
    alreadyPressed = false;
    clearInterval(setIntervalValid)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.animation = "fadeout 0.2s linear";
    setTimeout( () => {modal.style.display = "none";}, 190)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.animation = "fadeout 0.2s linear";
    setTimeout( () => {modal.style.display = "none";}, 190)
  }
}
