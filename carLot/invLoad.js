CarLot = (function (carLot) {

  carLot.populateCarLot = function(inventory) {

    carHolder = document.getElementById("carHolder")

  	carsArray = inventory[0].cars;

    var output = "";

    for(var i = 0; i < carsArray.length; i++){
      if (i%3 === 0) {
        output += `
        <div class="row">
          <div class="car col-md-3" style="border-color : ${carsArray[i].Color}">
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
      } else if (i === 2) {
      output += `
        <div class="car col-md-3" style="border-color : ${carsArray[i].Color}">
          Make : ${carsArray[i].Make} <br>
          Model : ${carsArray[i].Model} <br>
          Year : ${carsArray[i].Year} <br>
          Price : ${carsArray[i].Price} <br>
          Color : ${carsArray[i].Color} <br>
          Purchased : ${carsArray[i].Purchased} <br>
          <div class="description">
          Description : ${carsArray[i].Description}
          </div>
        </div>
        </div>
      `
      } else {
      output += `
        <div class="car col-md-3" style="border-color : ${carsArray[i].Color}">
          Make : ${carsArray[i].Make} <br>
          Model : ${carsArray[i].Model} <br>
          Year : ${carsArray[i].Year} <br>
          Price : ${carsArray[i].Price} <br>
          Color : ${carsArray[i].Color} <br>
          Purchased : ${carsArray[i].Purchased} <br>
          <div class="description">
          Description : ${carsArray[i].Description}
          </div>
        </div>
      `
      carHolder.innerHTML = output
      }
    }
  CarLot.activateEvents()
}

CarLot.loadInventory(CarLot.populateCarLot)

return carLot
})(CarLot || {})
