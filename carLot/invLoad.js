CarLot = (function (carLot) {

  carLot.populateCarLot = function(inventory) {

    carHolder = document.getElementById("carHolder")

  	carsArray = inventory[0].cars;

    for(var i = 0; i < carsArray.length; i++){
      carHolder.innerHTML += `
        <div class="car" style="border-color : ${carsArray[i].Color}">
          Make : ${carsArray[i].Make} <br>
          Model : ${carsArray[i].Model} <br>
          Year : ${carsArray[i].Year} <br>
          Price : ${carsArray[i].Price} <br>
          Color : ${carsArray[i].Color} <br>
          Purchased : ${carsArray[i].Purchased} <br>
          <div class="description">
          Description : ${carsArray[i].Description}
          </div> <br>
        </div>
      `
    }
  CarLot.activateEvents()
}
return carLot
})(CarLot || {})
