CarLot = (function (eventAdder) {

  eventAdder.activateEvents = function() {

    var car0 = document.querySelector("#car0");
    var car1 = document.querySelector("#car1");
    var car2 = document.querySelector("#car2");
    var car3 = document.querySelector("#car3");
    var car4 = document.querySelector("#car4");
    var car5 = document.querySelector("#car5");

    var carsArray = [car0, car1, car2, car3, car4, car5];

    var searchBar = document.getElementById("search");

    for (var i = 0; i < carsArray.length; i++) {
      carsArray[i].addEventListener('click', function (evt) {

      var self = evt.target;

      $(self).toggleClass('clickEvent');
      // self.attributes[2].value = "car col-md-3 clickEvent" ;
      searchBar.focus();
      })
    }
  }
return eventAdder


})(CarLot || { })
