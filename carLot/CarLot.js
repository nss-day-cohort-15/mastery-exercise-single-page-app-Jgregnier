var CarLot = (function () {

    var inventory = [];

    return {
     getInventory: function () {
      return inventory
    },


  loadInventory: function(cb) {
  	var xhr = new XMLHttpRequest()
    xhr.open('GET', 'inventory.json')
    xhr.addEventListener('load', function() {
    inventory = JSON.parse(xhr.responseText)
    cb(inventory)
    })
    xhr.send();
    }
  };

})(CarLot || {})
