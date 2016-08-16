CarLot = (function (carLot) {

  carLot.activateEvents = function() {

    var searchBar = document.getElementById('search');
    var car = document.getElementsByClassName('car');

    for(i = 0; i < car.length; i++){

      car[i].addEventListener("click", function() {

        CarLot.reset(car);

        var color = "lightGrey"
        var thisCar = this

        CarLot.addColor(thisCar, color);

        searchBar.focus();
        searchBar.value = "";
      })
    }

    searchBar.addEventListener("keyup", function () {
    	var selectedCar = document.querySelector('.selected .description')
      selectedCar.innerHTML = searchBar.value
    })

    searchBar.addEventListener("keydown", function () {
    	var selectedCar = document.querySelector('.selected .description')
      selectedCar.innerHTML = searchBar.value
    })
  };

return carLot

})(CarLot || { })
