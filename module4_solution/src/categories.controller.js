(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  console.log(items);
  var mainList = this;
  mainList.items = items;
}

})();
