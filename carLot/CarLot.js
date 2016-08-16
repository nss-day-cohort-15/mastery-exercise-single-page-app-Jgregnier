var CarLot = (function (carLot) {

//IIFE #1 invLOAD Loading from the JSON file to the DOM

  carLot.loadInventory = function (inventory) {

  	var xhr = new XMLHttpRequest()
    xhr.open('GET', 'inventory.json')
    xhr.addEventListener('load', function() {
    var inventory = JSON.parse(xhr.responseText)
    getInventory(inventory);
    CarLot.populateCarLot(inventory)
    })
    xhr.send();

    function getInventory (inventory) {
    inventoryArray = inventory[0].cars
  	for (var i = 0; i < inventoryArray.length; i++){
  	console.log(inventoryArray[i])
    }
   };

  };

  carLot.loadInventory()

// IIFE #2 invEVENTS adding events to cars after they've been created by IIFE #1

//IIFE #3 reset cars styles, add

return carLot

})(CarLot || {})
