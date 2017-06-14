angular
  .module('leap')
  .directive({
    leapTooltip:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          controller:'LeapToolTipCtrl',
          scope:{
            position:'@'
          },
          template:'<div class="leap-tooltip" ng-class="{ hide:!show }" ng-transclude></div>',
          link:function($scope,$elm){
            if ($scope.position){
              $elm.addClass($scope.position);
            }
            
            $scope.$watch('half', function(half){
              if ($scope.position==='left'){
                $elm.css({
                  top:Math.round(half - ($elm.outerHeight()/2)),
                  left:(0 - Math.round($elm.outerWidth()+10))
                });
              }
              else if ($scope.position==='right'){
                $elm.css({
                  top:Math.round(half - ($elm.outerHeight()/2)),
                  right:(0 - ($elm.outerWidth()+10))
                });
              }
              else {
                $elm.css({ left:Math.round((0-($elm.outerWidth()/2) + half)) });
              }
            });
          }
        };
      }
    ]
  })


  .controller({
    LeapToolTipCtrl:[
      '$scope',
      function($scope){
        $scope.show=false;

        function onenter($event,e){
          var $target=$(e.delegateTarget);

          if ($scope.position==='left' || $scope.position==='right'){
            $scope.half = Math.round($target.outerHeight()/2);
          }
          else {
            $scope.half = Math.round($target.outerWidth()/2);
          }
          
          $scope.show = true;
        }

        function onleave($event,e){
          $scope.show = false;
        }

        $scope.$on('link:enter', onenter);
        $scope.$on('link:leave', onleave);
        $scope.$on('button:enter', onenter);
        $scope.$on('button:leave', onleave);
      }
    ]
  });