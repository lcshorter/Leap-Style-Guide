angular
  .module('leap')
  .directive({
    leapForm:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<form class="leap-form" ng-transclude></form>'
        };
      }
    ]
  });