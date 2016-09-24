(function(){
    'use strict'
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyShoppingController',ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(shoppingListCheckOffService){
        var ctrl = this;
        ctrl.itemsToBuy = shoppingListCheckOffService.itemsToBuy;
        ctrl.buyItem = shoppingListCheckOffService.buyItem;
    };

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(shoppingListCheckOffService){
        var ctrl = this;
        ctrl.boughtItems = shoppingListCheckOffService.boughtItems;
    };

    function ShoppingListCheckOffService(){
        var service = this;
        service.itemsToBuy = [{ name: "cookies", quantity: 10 },{ name: "milk", quantity: 1 },{ name: "eggs", quantity: 12 },{ name: "yougurts", quantity: 2 }];
        service.boughtItems = [];
        service.buyItem = function(itemIndex){
            service.boughtItems.push(service.itemsToBuy.splice(itemIndex,1)[0]);
        };
    };
})()