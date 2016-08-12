CarLot = (function (inventoryHandler) {

  inventoryHandler.populateCarLot = function(data) {

    var cars = data[0].cars
    for(var i = 0; i < cars.length; i++){
      var output = `<div style="border-color: ${cars[i].Color}" id="car${i}" class="car col-md-3">`;
      for(var prop in cars[i]) {
        output += (`${prop} = ${cars[i][prop]} <br>`)
      };
      output += `</div>`;
      $("#carHolder").append(output);
    };





    // $("#carHolder").append


  //     var car0 = document.querySelector("#car0");
  //     var car1 = document.querySelector("#car1");
  //     var car2 = document.querySelector("#car2");
  //     var car3 = document.querySelector("#car3");
  //     var car4 = document.querySelector("#car4");
  //     var car5 = document.querySelector("#car5");

  //   var inventory = document.querySelector("#inventory");

  //   var carsArray = [car0, car1, car2, car3, car4, car5];

  //   for (var i = 0; i < carsArray.length; i++) {
  //     carsArray[i].attributes[0].value = `border-color: ${message[0].cars[i].Color}`;
  //   }

  //   for (var i = 0; i < message[0].cars.length; i++){
  //     var output = message[0].cars[i];
  //     for (var prop in output) {
  //       carsArray[i].innerHTML += (`${prop} = ${output[prop]} <br>`)
  //     }
  //   }
  // }

  // inventoryHandler.getInventory = function(messsage) {

  //   var carsArray = [car0, car1, car2, car3, car4, car5];
  //   for (var i = 0; i < carsArray.length; i++)
  //     console.log(carsArray[i].innerHTML)
  // }
}
return inventoryHandler
})({ })
