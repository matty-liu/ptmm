
let restaurant = document.getElementById("restaurant");

restaurant.onchange = function() {
  circles.forEach( (circle) => {
    if (circle.type === "restaurant") {
      if (event.target.checked === true) {
        let chance = restDensity;
        let randNum = Math.random()*100;
        if (randNum <= chance) {
          circle.setMap(map)
        } else {
          circle.setMap(null)
        }
      } else {
        circle.setMap(null)
      }
    }
  })
}
