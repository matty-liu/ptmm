
let placeTypes = document.getElementsByClassName("place-types");

for (let i = 0; i < placeTypes.length; i++) {
  let placeType = placeTypes[i]
  placeType.onchange = function() {
    circles.forEach( (circle) => {
      if (circle.type === event.target.value) {
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
}
