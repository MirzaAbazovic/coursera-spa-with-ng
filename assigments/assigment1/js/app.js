/*immediately-invoked function expression (or IIFE, pronounced "iffy") (function(){ })() */
(function(){
    'use strict';
    angular.module("solution1",[]).controller("lunchController",["$scope",function($scope){
        $scope.message ="Test message";
        $scope.check = function(){
            $scope.message = $scope.dishes;
        };
    }]);
    /*
    .controller("lunchController",lunchController);
    lunchController.$inject = ["$scope"];
    function lunchController($scope){
        $scope.message ="Test message";
        $scope.check = function(){
            $scope.message = $scope.dishes;
        };
    };
    */
})();