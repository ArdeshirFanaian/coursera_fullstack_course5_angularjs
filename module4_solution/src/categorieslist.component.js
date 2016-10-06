(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
