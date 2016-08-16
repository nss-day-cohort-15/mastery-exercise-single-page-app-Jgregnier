CarLot = (function (carLot) {

  carLot.reset = function(car) {
    for(var i = 0; i < car.length; i++) {
      car[i].style.cssText += "border-width : 4px"
      car[i].style.cssText += "background-color : white"
      car[i].classList.remove('selected')
    }
  }

  carLot.addColor = function(thisCar, color) {

    thisCar.style.cssText += "border-width : 10px";
    thisCar.style.backgroundColor = color;
    thisCar.classList.add('selected')

  };

return carLot

})(CarLot || {})
