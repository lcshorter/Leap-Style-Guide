angular
  .module('leap')
  .directive({
    leapList:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-list" ng-transclude/>'
        };
      }
    ],

    
    leapListHeader:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<header class="leap-list-header" ng-transclude/>'
        };
      }
    ],

    leapListFooter:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<footer class="leap-list-footer" ng-transclude/>'
        };
      }
    ],

    
    leapListRow:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-list-row" ng-transclude/>'
        };
      }
    ],

    
    leapListCol:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          template:'<div class="leap-list-col" ng-transclude/>',
          link:function($scope,$elm,attr,ctrl,transclude){
            transclude($scope.$parent, function(clone){
              $elm.empty().append(clone);
            });
          }
        };
      }
    ]
  });