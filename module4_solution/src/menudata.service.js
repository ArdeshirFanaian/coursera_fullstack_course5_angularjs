(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$http', ]
function MenuDataService($http) {
  var service = this;

  // List of items
  var items = [];

  // List of categories
  var categories = [];

  service.getAllCategories = function (){
    return $http({
      method: "GET",
      url: (ApiBasePath + 'categories.json')
    })
  }

}

})();
