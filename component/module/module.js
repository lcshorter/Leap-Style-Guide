angular
  .module('leap')
  .directive({
    leapModule:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-module" ng-transclude/>'
        };
      }
    ],
    
    leapModuleHeader:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<header class="leap-module-header header" ng-transclude/>'
        };
      }
    ],

    leapModuleFooter:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<footer class="leap-module-footer footer" ng-transclude/>'
        };
      }
    ],
    
    leapModuleContent:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-module-content content" ng-transclude/>',
          link:function($scope,$elm,attr,ctrl,transclude){
            transclude($scope.$parent, function(clone){
              $elm.empty().append(clone);
            });
          }
        };
      }
    ]
  });