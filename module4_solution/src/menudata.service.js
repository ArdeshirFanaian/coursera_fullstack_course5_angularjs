(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json");

MenuDataService.$inject = ['$http','ApiBasePath' ]
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function (){
    console.console.log('service');
    return $http({
      method: "GET",
      url: (ApiBasePath )
    })
  }

}

})();
