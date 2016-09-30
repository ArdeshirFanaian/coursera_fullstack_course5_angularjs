(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective)

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'list.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true,
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm ='';
  ctrl.found = '';

  ctrl.getItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function (response) {
      ctrl.found = response;
      console.log(ctrl.found);
      console.log(ctrl.found);
    })
    .catch(function (error){
      console.log('something went wrong.' + error);
    })
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath)

    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = []
        foundItems = result.data.menu_items;

        // return processed items
        return foundItems;
    });

  };
}

})();
