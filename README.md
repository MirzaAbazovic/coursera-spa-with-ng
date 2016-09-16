#Single Page Web Applications with AngularJS
https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome

1. [Assignment 1](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment1/Assignment-1.md) =>  [Solution](https://mirzaabazovic.github.io/coursera-spa-with-ng/assigments/assigment1/index.html)
###NOTES
* browser-sync
Start server listening for changes in all folder and files --files "**/*" and list direcorty --direcotry 
```
browser-sync start --server --directory --files "**/*"
```
* IIFY immediately-invoked function expression is (function(){ })()
```javascript
(function(){}
/* immediately-invoked function expression (or IIFE, pronounced "iffy") */
)();
```
* Protecting DI from minification
  * Using string in array
  ```javascript
        angular.module("mod1",[]).controller("firstController"["$scope",function($scope){}]);
    ```
  * using $injector
  ```javascript
        angular.module("mod1",[]).controller("firstController",firstController);
        firstController.$inject = ["$scope"];
        function firstController($scope){}
```
