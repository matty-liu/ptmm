// For updating the day, hour, and restaurant density

let day = 0;
let hour = 0;
let restDensity = 0;


let hourSlider = document.getElementById("hourSlider");
let hourHTML = document.getElementById("hour");
hourHTML.innerHTML = hourSlider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)

hourSlider.oninput = function() {
  // this refers to the hour sider in here
  hourHTML.innerHTML = this.value;
  hour = parseInt(this.value);
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

let dayRadio = document.getElementById("day")
dayRadio.onchange = function(event) {
  day = parseInt(event.target.value);
}

function handleDay(day) {
  day = parseInt(day.value);
  updateCircle(day);
}


function handlePlay() {
  setIntervalValid = setInterval(contUpdateCircle, 500);
}

function handlePause() {
  clearInterval(setIntervalValid);
}


function updateCircle() {
  console.log("updating")

  circles.forEach((circle, idx) => {
    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    circle.setRadius(radius)
  })

  hourSlider.value = hour;
  hourHTML.innerHTML = hour;
}

function contUpdateCircle() {
  console.log("continuous updating")
  if (hour === 23) {
    hour = 0;
  }

  circles.forEach((circle, idx) => {
    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    circle.setRadius(radius)
  })

  hourSlider.value = hour;
  hourHTML.innerHTML = hour;
  hour += 1;
}

// function updateMap() {
//   circles.forEach((circle, idx) => {
//
//     if (circle.position.lat > currentBounds.southWest.lat &&
//       circle.position.lat < currentBounds.northEast.lat &&
//       circle.position.lng > currentBounds.southWest.lng &&
//       circle.position.lng < currentBounds.northEast.lng) {
//       circle.setMap(map)
//     } else {
//       circle.setMap(null)
//     }
//   })
// }
