# Populartimes

Welcome to the populartimes! The [populartimes](http://mattyliu.com/popularTimesMapManhattan/) looks into how busy establishments are (i.e. restaurants, bars, nightclubs) throughout the day and week.

[Live Link](http://mattyliu.com/popularTimesMapManhattan/)

## About

The populartimes is built using JavaScript, Google Maps API, and Google Places API.

Each circle/dot on the map represents an establishment in the Manhattan area. The size of each circle will dynamically change in response to how busy the restaurant is relatively speaking at a corresponding time of day, and day of the week. Bigger circles mean the establishment is busy and smaller circle mean the establishment is less busy.

The different colored dots correspond to different establishment types.
Restaurants (red), Bars (green), Night Clubs (blue).

![2017-11-21 17_30_20](https://user-images.githubusercontent.com/24593321/33100526-b4bddb3a-cee2-11e7-907d-6562105752d9.gif)



## Implementation

The populartimes is built first by creating a Google Map object. The Google Maps API allows us to append marker objects with latitude and longitude coordinates on the Map object we created. The markers(circles) can then be appended at specific locations where the restaurant is located on within the map object.

```JavaScript
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    disableDefaultUI: true,
    center: {lat: 40.73318067925024, lng: -73.99484466674808},
    zoom: 13,
    styles: nightStyles,
    zoomControl: true,
  });
}
```

The coordinates of each establishment is grabbed from Google's Places API. In the Google Place's API call, we fetch all of the establishment data in Google Places and filter out the specific businesses we want (i.e. restaurants, bars, night clubs). In the API response, we receive the establishment data and inside that response is a populartimes object which stores all of the customer traffic data at the different times of day and day of the week.

The populartimes data is an object which contains a key of day (as an integer i.e. 0 is Monday, 1 is Tuesday, etc.) and it points to an array of value ranging from 0 to 100, with 0 being closed and 100 being full capacity and the indexes of the array corresponding to the hour (i.e. 0 is 12:00AM, 11 is 12:00PM, etc.)

Once the data has been fetched, we store all the data in a seperate file so that we do not have to fetch for the establishment information again. With all the information we have now, we finally can populate the map. We iterate through our data, and for each establishment, we create a Marker object, append the place's coordinates, apply a color based the establishment type (i.e. restaurant, bar, night club), and a radius size (default to 1 which appears as a dot).

```JavaScript
let circles = [];
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
  });
})

  circles.push(circle)
```

To dynamically update the map, all we do is call and update method whenever a user action is dected. We reiterate through the circles, and change the radius size of the point depending on the time of day and day of the week and as a result the circle object is changed on the map as well.

```JavaScript
function updateCircle() {
  console.log("updating")

  circles.forEach( (circle, idx) => {
    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    circle.setRadius(radius) // for non growing animation
  });

  hourSlider.value = hour;
}
```


## Todos/Future Implementation
1. Cross reference populartimes data with New York City building capacity data to render dot sizes that correspond to the amount of people in an area.

2. Add additional establishment types (cafes, gym, etc..) for more trends.

3. Implement heatmap














<!--  -->
