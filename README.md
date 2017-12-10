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

The populartimes is built first by creating a Google Map object.

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

Before we can populate the Map object with the data we need to fetch the establishment data from the Google Places API. The response from the API call will provide us with the type of establishment we call for (i.e. restaurant, bar, night club), the location of the establishment (latitude/longitude coordinates), the name of the establishment, and the populartimes object which stores all of the customer traffic data at the different times of day and day of the week.

```python
populartimes.get( "apikey", ["restaurant"], (40.749816, -73.987743), (40.753442, -73.980948))
# Returns 111 location between the listed coordinates.
# Example response #=> [{'id': 'ChIJqVQEsABZwokRe05WcVpIuFc', 'name': 'Evergreen Shanghai', 'address': '10 E 38th St, New York, NY 10016, USA', 'searchterm': 'Evergreen Shanghai 10 E 38th St, New York, NY 10016, USA', 'types': ['restaurant', 'food', 'point_of_interest', 'establishment'], 'coordinates': {'lat': 40.750444, 'lng': -73.98198}, 'rating': 3.8, 'rating_n': 74, 'international_phone_number': '+1 212-448-1199', 'populartimes': [{'name': 'Monday', 'data': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 49, 50, 35, 15, 9, 25, 52, 58, 37, 13, 0, 0]}],
```

Once the data has been fetched, we store all the data in a separate file so that we do not have to fetch for the establishment information again. With all the stored information, we now populate the map. We iterate through our data, and for each establishment, we create a Marker object, append the place's coordinates, apply a color based on the establishment type, and a radius size (default to 1 which appears as a dot).

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

To dynamically update the map, we call an update marker method. We iterate through the collection of markers, and change the radius size of each marker depending on the populartimes data at the corresponding time of day and day of the week.

```JavaScript
function updateCircleSize() {
  circles.forEach( (circle, idx) => {
    let radius = circle.populartimes[day].data[hour];
    radius = radius * 0.65;
    circle.setRadius(radius) // for non growing animation
  });
}
```


## Todos/Future Implementation
1. Cross reference populartimes data with New York City building capacity data to render dot sizes that correspond to the amount of people in an area as opposed to relative business.

2. Add additional establishment types (cafes, gym, etc..) for more trends.

3. Seek if there is optimization that can be done (difficult if running visual at 100% establishment density)

4. Implement heatmap visual

















<!--  -->
