(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/templates/main-categories-list.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.console.log('ola');
        var promise = MenuDataService.getAllCategories();
        console.log(promise);
        return MenuDataService.getAllCategories();
      }]
    }
  });

  }

})();
