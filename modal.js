// Get the modal
var modal = document.getElementById('infoModal');

// Get the button that opens the modal
var btn = document.getElementById("infoModalButton");

// Get the <div> element that closes the modal
var divClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    modal.style.animation = "fadein 0.2s linear";
    handlePause()
}

// When the user clicks on <span> (x), close the modal
divClose.onclick = function() {
    modal.style.animation = "fadeout 0.2s linear";
    setTimeout( () => {modal.style.display = "none";}, 175)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.animation = "fadeout 0.2s linear";
    setTimeout( () => {modal.style.display = "none";}, 175)
  }
}
