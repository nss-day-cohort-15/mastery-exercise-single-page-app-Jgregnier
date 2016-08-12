var CarLot = (function (thing) {

//IIFE #1 invLOAD Loading from the JSON file to the DOM
  thing.didLoadData = function() {
  $.getJSON("inventory.json", function(data) {
//Send data to first iife to get loaded onto screen
    CarLot.populateCarLot(data);
//Send data to second iife to add event listeners
    CarLot.activateEvents(data);
  })};
  // var inventory = document.querySelector('#inventory');


  // var xhr = new XMLHttpRequest()
  // xhr.open('GET', 'inventory.json')
  // xhr.addEventListener('load', function(){
  //   var message = JSON.parse(xhr.responseText)
  //   CarLot.populateCarLot(message);
  // })
  // xhr.send();
  // }

// IIFE #2 invEVENTS adding events to cars after they've been created by IIFE #1

  // thing.addEvents = function() {
  //   CarLot.activateEvents()
  // }


//IIFE #3 reset cars styles

  // thing.resetingEvents = function() {
  //   CarLot.resetEvents()
  // }

return CarLot

})(CarLot)
CarLot.didLoadData()
