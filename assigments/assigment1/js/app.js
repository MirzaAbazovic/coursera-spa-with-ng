(function(){
    'use strict';
    angular.module("solution1",[])
    .controller("lunchController",lunchController);
    lunchController.$inject = ["$scope"];
    function lunchController($scope){
        $scope.check = function(){
            if(!$scope.dishes){
                $scope.message = "Please enter data first";
                $scope.result = "error";
            }
            else{
                var dishesArray = $scope.dishes.split(",");
                if(dishesArray.length>3){
                    $scope.message = "Too much!";
                    $scope.result = "success";
                }
                else{
                    $scope.message = "Enjoy!";
                    $scope.result = "success";
                }
            }
        };
    };
})();