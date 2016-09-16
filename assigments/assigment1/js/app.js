(function(){
    'use strict';
    angular.module("solution1",[])
    .controller("lunchController",lunchController);
    lunchController.$inject = ["$scope"];
    function lunchController($scope){
        $scope.check = function(){
            //predefine that input is empty what is Error
            //and change it only when input is correct
            $scope.dishCount = 0;
            $scope.result = "error";
            $scope.message = "Please enter data first";
            if($scope.dishes){//if there is input
                var dishesArray = $scope.dishes.split(",");//split by commas in array
                //function for filtering. Determine is item empty or has one space only
                function isNotEmpty(value) {
                    return value.length > 0 &&  value!=" ";
                }
                var filteredDishes = dishesArray.filter(isNotEmpty);//filter out empty dishes 
                if(filteredDishes.length > 3){//if more then 3 set success with message Too much!
                    $scope.message = "Too much!";
                    $scope.result = "success";
                    $scope.dishCount = filteredDishes.length;
                }
                else if(filteredDishes.length > 0){//if less then 3 and more then 0 set success with message Enjoy!
                    $scope.message = "Enjoy!";
                    $scope.result = "success";
                    $scope.dishCount = filteredDishes.length;
                }
            }
        };
    };
})();