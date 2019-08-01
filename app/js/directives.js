'use strict';

/* Directives */
//http://docs.angularjs.org/guide/module

var myDirectivesModule = angular.module('myApp.directives', []);

myDirectivesModule.
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  
myDirectivesModule.
  directive('helloWorld', function() {
    return {
      restrict:'E',
      template:'<span>Hello World</span>'
    };
  });
  
    
//angular.module('components', []).
//  directive('helloWorld', function(){
//    return{
//        restrict:'E',
//        template:'<span>Hello World</span>'
//    };
//});
//angular.module('myApp',['components']);
