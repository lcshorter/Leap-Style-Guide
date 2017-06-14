angular
  .module('leap')
  .directive({
    leapFab:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          controller:'LeapFabCtrl',
          template:[
            '<div class="leap-fab leap-fab-primary">',
              '<leap-button ng-click="toggle($event);" class="leap-fab-button leap-fab-primary">',
                '<div class="leap-fab-inner" ng-transclude/>',
              '</leap-button>',
            '</div>'
          ].join('')
        };
      }
    ],


    leapFabOption:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          controller:'LeapFabOptionCtrl',
          scope:{
            label:'@?',
            tooltip:'@?',
            tooltipdir:'@?'
          },
          template:[
            '<div class="leap-fab">',
              '<div class="leap-fab-label" ng-if="label" ng-class="{ expanded:expanded }">',
               '<p translate>{{ label }}</p>',
              '</div>',
              '<leap-button class="leap-fab-button leap-fab-option" ng-mouseenter="onenter($event);" ng-mouseleave="onleave($event);" ng-click="onclick($event);">',
                '<div class="leap-fab-inner" ng-transclude/>',
                '<leap-tooltip position="left" ng-if="tooltip">{{ tooltip }}</leap-tooltip>',
              '</leap-button>',
            '</div>'
          ].join('')
        };
      }
    ],


    leapFabGroup:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          controller:'LeapFabGroupCtrl',
          scope:true,
          template:'<div id="leap-fab-group" class="leap-fab-group" ng-class="{ initial:initial, opened:opened, closing:closing }" ng-transclude/>',
          link:function($scope,$elm,$attr){
            var timeout=null;

            $elm.mouseenter(function(e){
              if (timeout){
                $timeout.cancel(timeout);
              }
            });

            $elm.mouseleave(function(e){
              if ($scope.opened){
                if (timeout){
                  $timeout.cancel(timeout);
                }

                timeout=$timeout(function(){
                  $scope.close();
                  timeout=null;
                },350);
              }
            });

            $(window).scroll(function(e){
              if ($scope.opened){
                $scope.close();
              }
            });
          }
        };
      }
    ]
  })


  .controller({
    LeapFabGroupCtrl:[
      '$scope','$timeout',
      function($scope,$timeout){
        /**
         * Opens the floating action button
         * @scope
         * @return {Void}
         */
        $scope.open=function(){
          $scope.initial = true;

          $scope.$broadcast('fab:open');
          $scope.$emit('fab:open');
          
          $timeout(function(){
            $scope.initial = false;
            $scope.opened = true;
          },100);
        };

        /**
         * Closes the floating action button
         * @scope
         * @return {Void}
         */
        $scope.close=function(){
          $scope.$broadcast('fab:close');
          $scope.$emit('fab:close');

          $timeout(function(){
            $scope.closing = true;

            $timeout(function(){
              $scope.opened = false;
              $scope.closing = false;
            },500);
          });
          
        };

        /**
         * Toggles the state of the floating action button
         * @scope
         * @return {Void}
         */
        $scope.toggle=function(){
          if ($scope.opened){
            $scope.close();
          }
          else {
            $scope.open();
          }
        };
      }
    ],


    LeapFabCtrl:[
      '$scope',
      function($scope){
        var $group;

        if ($scope.$parent){
          $group = $scope.$parent;
          
          if ($group && $group.toggle){
            $scope.toggle=function(e){
              $group.toggle(e);  
            };
          }
        }
      }
    ],



    LeapFabOptionCtrl:[
      '$scope',
      function($scope){
        $scope.expanded=false;

        /**
         * Handles the mouseenter event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onenter=function(e){
          $scope.expanded=true;

          $scope.$broadcast('fab:enter',e);
          $scope.$emit('fab:enter',e);
        };

        /**
         * Handles the mouseleave event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onleave=function(e){
          $scope.expanded=false;

          $scope.$broadcast('fab:leave',e);
          $scope.$emit('fab:leave',e);
        };

        /**
         * Handles the click event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onclick=function(e){
          $scope.$broadcast('fab:click',e);
          $scope.$emit('fab:click',e);

          if ($scope.$parent && $scope.$parent.close){
            $scope.$parent.$parent.close();
          }
        };
      }
    ]
  });