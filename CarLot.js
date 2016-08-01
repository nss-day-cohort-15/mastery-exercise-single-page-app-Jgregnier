var CarLot = (function (thing) {

//IIFE #1 invLOAD Loading from the JSON file to the DOM
  thing.didLoadData = function() {

  var inventory = document.querySelector('#inventory');


  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'inventory.json')
  xhr.addEventListener('load', function(){
    var message = JSON.parse(xhr.responseText)
	  CarLot.populateCarLot(message);
  })
  xhr.send();
  }

// IIFE #2 invEVENTS adding events to cars after they've been created by IIFE #1

  thing.addEvents = function() {
    CarLot.activateEvents()
  }


//IIFE #3

  // thing.resetingEvents = function() {
  //   CarLot.resetEvents()
  // }



return CarLot

})(CarLot)
CarLot.didLoadData()
CarLot.addEvents()
// CarLot.resetingEvents()
