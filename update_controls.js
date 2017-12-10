// For updating the day, hour, and restaurant density
let day = 0;
let hour = 0;
let restDensity = 0;


let hourSlider = document.getElementById("hourSlider");
let hourHTMLclass = document.getElementsByClassName("hour");
// Update the current slider value (each time you drag the slider handle)
hourSlider.onchange = function() {
  // "this" refers to the hour slider position
  hour = parseInt(this.value);

  for (let i = 0 ; i < hourHTMLclass.length; i++) {
    if (hour < 10) {
      hourHTMLclass[i].innerHTML = "0" + this.value
    } else {
      hourHTMLclass[i].innerHTML = this.value
    }
  }
  updateCircle()
}



let resturantDensitySlider = document.getElementById("resturantDensitySlider");
let restDenHTML = document.getElementById("restDensity");
// Display the default slider value
restDenHTML.innerHTML = resturantDensitySlider.value;

// Update the current slider value (each time you drag the slider handle)
resturantDensitySlider.oninput = function() {
  restDenHTML.innerHTML = this.value;
  restDensity = parseInt(this.value);

  // toggling circle that will be shown.
  circles.forEach((circle, idx) => {
    let chance = restDensity;
    let randNum = Math.random()*100;
    if (randNum <= chance) {
      circle.setMap(map)
    } else {
      circle.setMap(null)
    }
  })
}


// update day on change of radio button
let dayRadio = document.getElementById("day")
dayRadio.onchange = function(event) {
  day = parseInt(event.target.value);
  updateCircle()
}

let dayHTML = document.getElementById("dayofweek")
function handleDay(day) {

  if (!(typeof day === "number")) {
    day = parseInt(day.value);
  }

  let dayname;
  switch (day) {
    case 0:
      dayname = "Monday"
      break
    case 1:
      dayname = "Tuesday"
      break
    case 2:
      dayname = "Wednesday"
      break
    case 3:
      dayname = "Thursday"
      break
    case 4:
      dayname = "Friday"
      break
    case 5:
      dayname = "Saturday"
      break
    case 6:
      dayname = "Sunday"
      break
  }

  // if not user generated click, update radio button
  if (!(event)) {
    document.getElementById(dayname.toLowerCase()).click()
  }

  // update day HTML on map
  dayHTML.innerHTML = dayname;
}

let alreadyPressed = false // so users can't spam play button
function handlePlay() {
  if (!alreadyPressed) {
    alreadyPressed = true;
    setIntervalValid = setInterval(contUpdateCircle, 500);
  }
}

function handlePause() {
  alreadyPressed = false;
  clearInterval(setIntervalValid);
}

function updateCircle() {

  circles.forEach( (circle, idx) => {
    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    // setTimeout(() => circle.setRadius(radius), 1)
    circle.setRadius(radius) // for non growing animation
  });

  hourSlider.value = hour;
}


function contUpdateCircle() {

  if (hour > 23) {
    hour = 0;
    day += 1;
    if (day > 6) {
      day = 0
    }
    handleDay(day)
  }

  circles.forEach((circle, idx) => {

    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    circle.setRadius(radius) // for non growing animation

  })

  hourSlider.value = hour;
  // changing the hourSlider programmatically does not trigger the onchange
  // listener so we manually set the innerHTML for this reason
  for (let i = 0 ; i < hourHTMLclass.length; i++) {
    if (hour < 10) {
      hourHTMLclass[i].innerHTML = "0" + hour
    } else {
      hourHTMLclass[i].innerHTML = hour
    }
  }
  hour += 1;
}


function updateMap() {
  circles.forEach((circle, idx) => {

    if (circle.position.lat > currentBounds.southWest.lat &&
      circle.position.lat < currentBounds.northEast.lat &&
      circle.position.lng > currentBounds.southWest.lng &&
      circle.position.lng < currentBounds.northEast.lng) {
      circle.setMap(map)
    } else {
      circle.setMap(null)
    }
  })
}











//
