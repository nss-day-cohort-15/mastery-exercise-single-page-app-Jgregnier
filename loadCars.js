CarLot = (function (inventoryHandler) {

  inventoryHandler.populateCarLot = function(message) {

    var inventory = document.querySelector("#inventory");
    var car0 = document.querySelector("#car0");
    var car1 = document.querySelector("#car1");
    var car2 = document.querySelector("#car2");
    var car3 = document.querySelector("#car3");
    var car4 = document.querySelector("#car4");
    var car5 = document.querySelector("#car5");
    var carsArray = [ car0, car1, car2, car3, car4, car5];

    for (var i = 0; i < message[0].cars.length; i++){
      var output = message[0].cars[i];
      for (var prop in output) {
        carsArray[i].innerHTML += (`${prop} = ${output[prop]} <br>`)
      }
    }
  }
return inventoryHandler


})({ })
