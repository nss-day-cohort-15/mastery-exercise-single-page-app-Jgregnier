var CarLot = (function (carLot) {

//IIFE #1 invLOAD Loading from the JSON file to the DOM

  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'inventory.json')
  xhr.addEventListener('load', function() {
    var inventory = JSON.parse(xhr.responseText)
    CarLot.populateCarLot(inventory);
  })
  xhr.send();

// IIFE #2 invEVENTS adding events to cars after they've been created by IIFE #1

//IIFE #3 reset cars styles, add

return carLot

})(CarLot || {})
