let map;
let circles = [];
let uniqueCircles = [];
// let uniqueRestaurant = [];
// let uniqueBars = [];
// let uniqueNightclubs = [];
// let uniqueCafes = [];
// let uniqueGyms = [];

function initMap() {

  let restIds = new Set()
  let barIds = new Set()
  let clubIds = new Set()
  let cafeIds = new Set()
  let gymIds = new Set()

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
      populartimes: place.populartimes,
      position: place.coordinates,
      id: place.id,
      type: 'restaurant',
      types: place.types,
    })

    // duplicate entries exist in API call, filtering them out
    // still allowing duplicates if establishment has multiple types (i.e. restauanrt and bar)
    if (!restIds.has(circle.id)) {
      restIds.add(circle.id)
      uniqueCircles.push(circle)
      let chance = restDensity;
      let randNum = Math.random()*100;
      if (randNum <= chance) {
        circle.setMap(map)
      } else {
        circle.setMap(null)
      }
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

    // circles.push(circle)

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
      id: place.id,
      type: 'bar',
      types: place.types,
    })

    let chance = restDensity;
    let randNum = Math.random()*100;

    if (randNum <= chance) {
      circle.setMap(map)
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

    if (!barIds.has(circle.id)) {
      barIds.add(circle.id)
      uniqueCircles.push(circle)
    }
    // circles.push(circle)

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
      id: place.id,
      type: 'night_club',
      types: place.types,
    })

    let chance = restDensity;
    let randNum = Math.random()*100;

    if (randNum <= chance) {
      circle.setMap(map)
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

    if (!clubIds.has(circle.id)) {
      clubIds.add(circle.id)
      uniqueCircles.push(circle)
    }
    // circles.push(circle)

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
      id: place.id,
      type: 'cafe',
      types: place.types,
    })

    let chance = restDensity;
    let randNum = Math.random()*100;

    if (randNum <= chance) {
      circle.setMap(map)
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

    if (!cafeIds.has(circle.id)) {
      cafeIds.add(circle.id)
      uniqueCircles.push(circle)
    }
    // circles.push(circle)

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
      id: place.id,
      type: 'gym',
      types: place.types,
    })

    let chance = restDensity;
    let randNum = Math.random()*100;

    if (randNum <= chance) {
      circle.setMap(map)
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

    if (!gymIds.has(circle.id)) {
      gymIds.add(circle.id)
      uniqueCircles.push(circle)
    }
    // circles.push(circle)

  })

  var legend = document.getElementById('legend');
  var clock = document.getElementById('clock')
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(clock);
  setTimeout( () => {legend.style.display = 'flex'}, 1000 )
  setTimeout( () => {clock.style.display = 'flex'}, 1000 )

  circles = uniqueCircles

  // filter through establishments to pull unique establishments by Id
  // let numEstab = circles.length
  // let estabId = new Set()
  // let uniqueCircles = []
  // for (let i=0; i < numEstab; i++) {
  //   if (!estabId.has(circles[i].id)) {
  //     estabId.add(circles[i].id)
  //     uniqueCircles.push(circles[i])
  //   }
  // }


  // their are quite a few overlapping data points. many establishment are
  // both restaurants and bar about 1000 from my data set.
  // both bar and night_club about 200
  // restaurant, bar and night_club about 100
  // circles = uniqueCircles
  // numEstab = circles.length
  // let counter = 0
  // for (let i=0; i < numEstab; i++) {
  //   if (
  //       circles[i].types.includes('bar') &&
  //       circles[i].types.includes('night_club')) {
  //     counter++
  //   }
  // }
  // console.log(counter)
}
