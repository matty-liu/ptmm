function createContentString(place) {
  const contentString =
    `<div class="infowindow">`+
    `<div>Name: ${place.name}<div>`+
    `<div>Address: ${place.address}<div>`+
    `<div>Phone Number: ${place.international_phone_number}<div>`+
    `<div>Rating: ${place.rating}<div>`+
    `<div>Number of Ratings: ${place.rating_n}<div>`+
    `</div>`;
  return contentString
}

function createCircle(place, color, type) {
  const circle = new google.maps.Circle({
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
    map: map,
    center: place.coordinates,
    radius: 1,
    populartimes: place.populartimes,
    position: place.coordinates,
    id: place.id,
    type: type,
    types: place.types,
  })
  return circle
}


let map;
let circles = [];
let uniqueCircles = [];

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
    // by default, creating a circle places a dot on the map immediately
    // repeatedd entries exist in API call, filtering them out
    // still allowing duplicates if establishment has multiple types (i.e. restauanrt and bar)
    if (!restIds.has(place.id)) {

      const circle = createCircle(place, '#FF0000', 'restaurant')
      restIds.add(circle.id)
      uniqueCircles.push(circle)

      const contentString = createContentString(place)
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      circle.addListener('click', () => {
        infowindow.open(map,circle);
      })

    }

  })

  googleBars.forEach((place) => {

    if (!barIds.has(place.id)) {

      const circle = createCircle(place, '#00FF00', 'bar')
      barIds.add(circle.id)
      uniqueCircles.push(circle)

      const contentString = createContentString(place)
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      circle.addListener('click', () => {
        infowindow.open(map,circle);
      })

    }

  })

  googleNightclubs.forEach((place) => {

    if (!clubIds.has(place.id)) {

      const circle = createCircle(place, '#0000FF', 'night_club')
      clubIds.add(circle.id)
      uniqueCircles.push(circle)

      const contentString = createContentString(place)
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      circle.addListener('click', () => {
        infowindow.open(map,circle);
      })

    }

  })

  googleCafes.forEach((place) => {

    if (!cafeIds.has(place.id)) {

      const circle = createCircle(place, '#FFA500', 'cafe')
      cafeIds.add(circle.id)
      uniqueCircles.push(circle)

      const contentString = createContentString(place)
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      circle.addListener('click', () => {
        infowindow.open(map,circle);
      })

    }

  })

  googleGyms.forEach((place) => {

    if (!gymIds.has(place.id)) {

      const circle = createCircle(place, '#4B0082', 'gym')
      gymIds.add(circle.id)
      uniqueCircles.push(circle)

      const contentString = createContentString(place)
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      circle.addListener('click', () => {
        infowindow.open(map,circle);
      })

    }

  })

  var legend = document.getElementById('legend');
  var clock = document.getElementById('clock')
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(clock);
  setTimeout( () => {legend.style.display = 'flex'}, 1000 )
  setTimeout( () => {clock.style.display = 'flex'}, 1000 )

  circles = uniqueCircles
  toggelCircle()

}
