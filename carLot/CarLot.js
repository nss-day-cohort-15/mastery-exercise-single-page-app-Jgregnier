var CarLot = (function (carLot) {

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

return carLot

})(CarLot || {})
