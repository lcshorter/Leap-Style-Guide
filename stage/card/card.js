angular
  .module('leap')
  .directive({
    leapCard:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-card" ng-transclude></card>'
        };
      }
    ]
  });