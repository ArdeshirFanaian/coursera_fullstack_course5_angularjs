(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json");

MenuDataService.$inject = ['$http','ApiBasePath' ]
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function (){
    console.log('service');
    var response =  $http({
      method: "GET",
      url: (ApiBasePath)
    })
    return response;
  }

}

})();
