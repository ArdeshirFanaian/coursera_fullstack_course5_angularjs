(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var showToBuyList = this;

  showToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var itemAdder = this;

  // itemAdder.itemName = "";
  // itemAdder.itemQuantity = "";
  //
  // itemAdder.addItem = function () {
  //   ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  //
  // }
}
function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var buyItems = [
    { name: "bananas", quantity: 5 },
    { name: "cookies", quantity: 10 },
    { name: "yogurt", quantity: 3 },
    { name: "soy sauce", quantity: 1 },
    { name: "spaghetty", quantity: 2 }
  ];

  // List of bought items
  var boughtItems = []

  service.getToBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };


}

})();
