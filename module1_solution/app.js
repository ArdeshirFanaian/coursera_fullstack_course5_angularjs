(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope, $filter) {
  $scope.arrayFood = "";
  $scope.message="";
  $scope.sayMessage = function () {
    var arrayOfStrings = $scope.arrayFood.split(',');
    var arrayLength = arrayOfStrings.length;
    if (arrayLength < 4 && arrayLength != 1){
      $scope.message = "Enjoy!";
    } else if (arrayLength == 1) {
      if($scope.arrayFood.trim() == ""){
        $scope.message = "Please enter data first" ;
      }else {
        $scope.message = "Enjoy!" ;
      }
    } else {
      $scope.message = "Too Much!";
    }
  };
}

})();
