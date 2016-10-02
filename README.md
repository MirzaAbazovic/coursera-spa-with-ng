#Single Page Web Applications with AngularJS
https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome

## [Assignment 1](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment1/Assignment-1.md) =>  [Solution](https://mirzaabazovic.github.io/coursera-spa-with-ng/assignments/assignment1/index.html)
### NOTES
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
  * Using strings in array in front of controller function
  ```javascript
        angular.module("mod1",[]).controller("firstController",["$scope","$filter",function($scope,$filter){/*controller body*/}]);
    ```
  * using [$injector](https://docs.angularjs.org/api/auto/service/$injector) and strings in array
  ```javascript
        angular.module("mod1",[]).controller("firstController",firstController);
        firstController.$inject = ["$scope","$filter"];
        function firstController($scope,$filter){/*controller body*/}
```

## [Assignment 2](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment2/Assignment-2.md) =>  [Solution](https://mirzaabazovic.github.io/coursera-spa-with-ng/assignments/assignment2/index.html)
## [Assignment 3](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md) =>  [Solution](https://mirzaabazovic.github.io/coursera-spa-with-ng/assignments/assignment3/index.html)
