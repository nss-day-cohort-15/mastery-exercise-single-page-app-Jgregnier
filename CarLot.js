var CarLot = (function (thing) {

//IIFE #1 Loading from the JSON file to the DOM
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
return CarLot




})(CarLot)
CarLot.didLoadData()
