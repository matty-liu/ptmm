let map;
let circles = [];

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    disableDefaultUI: true,
    center: {lat: 40.73318067925024, lng: -73.99484466674808},
    zoom: 13,
    styles: nightStyles,
    zoomControl: true,
  });

  googleRestaurants.forEach((place) => {
    const circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: place.coordinates,
      radius: 1,
      radiusPrev: 1,
      populartimes: place.populartimes,
      position: place.coordinates,
      type: 'restaurant',
    })

    let chance = 20;
    let randNum = Math.random()*100;
    if (randNum <= chance) {
    } else {
      circle.setMap(null)
    }

    const contentString =
    `<div class="infowindow">`+
      `<div>Name: ${place.name}<div>`+
      `<div>Address: ${place.address}<div>`+
      `<div>Phone Number: ${place.international_phone_number}<div>`+
      `<div>Rating: ${place.rating}<div>`+
      `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    circle.addListener('click', () => {
      infowindow.open(map,circle);
    })

    circles.push(circle)

  })

  googleBars.forEach((place) => {

    const circle = new google.maps.Circle({
      strokeColor: '#00FF00',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#00FF00',
      fillOpacity: 0.35,
      map: map,
      center: place.coordinates,
      radius: 1,
      populartimes: place.populartimes,
      position: place.coordinates,
      type: 'bar',
    })

    let chance = 20;
    let randNum = Math.random()*100;

    if (randNum <= chance) {
    } else {
      circle.setMap(null)
    }

    const contentString =
    `<div class="infowindow">`+
      `<div>Name: ${place.name}<div>`+
      `<div>Address: ${place.address}<div>`+
      `<div>Phone Number: ${place.international_phone_number}<div>`+
      `<div>Rating: ${place.rating}<div>`+
      `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    circle.addListener('click', () => {
      infowindow.open(map,circle);
    })

    circles.push(circle)

  })

  googleNightclubs.forEach((place) => {

    const circle = new google.maps.Circle({
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map: map,
      center: place.coordinates,
      radius: 1,
      populartimes: place.populartimes,
      position: place.coordinates,
      type: 'night_club'
    })

    let chance = 20;
    let randNum = Math.random()*100;

    if (randNum >= chance) {
      circle.setMap(null)
    }

    const contentString =
    `<div class="infowindow">`+
      `<div>Name: ${place.name}<div>`+
      `<div>Address: ${place.address}<div>`+
      `<div>Phone Number: ${place.international_phone_number}<div>`+
      `<div>Rating: ${place.rating}<div>`+
      `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    circle.addListener('click', () => {
      infowindow.open(map,circle);
    })

    circles.push(circle)

  })

  googleCafes.forEach((place) => {

    const circle = new google.maps.Circle({
      strokeColor: '#FFA500',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FFA500',
      fillOpacity: 0.35,
      map: map,
      center: place.coordinates,
      radius: 1,
      populartimes: place.populartimes,
      position: place.coordinates,
      type: 'cafe',
    })

    let chance = 20;
    let randNum = Math.random()*100;

    if (randNum >= chance) {
      circle.setMap(null)
    }

    const contentString =
    `<div class="infowindow">`+
      `<div>Name: ${place.name}<div>`+
      `<div>Address: ${place.address}<div>`+
      `<div>Phone Number: ${place.international_phone_number}<div>`+
      `<div>Rating: ${place.rating}<div>`+
      `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    circle.addListener('click', () => {
      infowindow.open(map,circle);
    })

    circles.push(circle)

  })

  googleGyms.forEach((place) => {

    const circle = new google.maps.Circle({
      strokeColor: '#4B0082',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#4B0082',
      fillOpacity: 0.35,
      map: map,
      center: place.coordinates,
      radius: 1,
      populartimes: place.populartimes,
      position: place.coordinates,
      type: 'gym',
    })

    let chance = 20;
    let randNum = Math.random()*100;

    if (randNum >= chance) {
      circle.setMap(null)
    }

    const contentString =
    `<div class="infowindow">`+
      `<div>Name: ${place.name}<div>`+
      `<div>Address: ${place.address}<div>`+
      `<div>Phone Number: ${place.international_phone_number}<div>`+
      `<div>Rating: ${place.rating}<div>`+
      `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    circle.addListener('click', () => {
      infowindow.open(map,circle);
    })

    circles.push(circle)

  })

  var legend = document.getElementById('legend');
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
  setTimeout( () => {legend.style.display = 'flex'}, 500)
}
