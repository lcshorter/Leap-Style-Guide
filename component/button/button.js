angular
  .module('leap')
  .directive({
    leapButton:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          replace:true,
          transclude:true,
          controller:'LeapButtonCtrl',
          scope:{
            disabled:'@?',
            enter:'=?',
            leave:'=?',
            click:'=?'
          },
          template:'<button class="leap-button" ng-mouseenter="onenter($event);" ng-mouseleave="onleave($event);" ng-click="onclick($event);" translate><span ng-transclude></span></button>',
          link:function($scope,$elm,$attrs){
            $elm.click(function(e){
              if ($scope.disabled){
                e.preventDefault();
              }
            });

            $attrs.$observe('enter', function(fn){
              if (!_.isUndefined($scope.$parent[fn])){
                $scope.$onenter=$scope.$parent[fn];
              }
            });

            $attrs.$observe('leave', function(fn){
              if (!_.isUndefined($scope.$parent[fn])){
                $scope.$onleave=$scope.$parent[fn];
              }
            });

            $attrs.$observe('click', function(fn){
              if (!_.isUndefined($scope.$parent[fn])){
                $scope.$onclick=$scope.$parent[fn];
              }
            });

            $attrs.$observe('disabled', function(disabled){
              switch(disabled){
                case '':
                case 'true':
                case 'disabled':
                  disabled=true;
                  break;

                case 'false':
                  disabled=false;
                  break;  
              }

              if (disabled){
                $elm.addClass('disabled');
              }
              else {
                $elm.removeClass('disabled');
              }

              $timeout(function(){
                $scope.disabled = disabled;
              });
            });
          }
        };
      }
    ]
  })


  .controller({
    LeapButtonCtrl:[
      '$scope',
      function($scope){
        $scope.disabled=false;

        /**
         * Handles the mouseenter event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onenter=function(e){
          if (!$scope.disabled){
            $scope.$broadcast('button:enter', e);
            $scope.$emit('button:enter', e);

            if ($scope.$onenter){
              $scope.$onenter.call($scope, e);
            }
          }
        };

        /**
         * Handles the mouseleave event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onleave=function(e){
          if (!$scope.disabled){
            $scope.$broadcast('button:leave', e);
            $scope.$emit('button:leave', e);

            if ($scope.$onleave){
              $scope.$onleave.call($scope, e);
            }
          }
        };

        /**
         * Handles the click event for a button
         * @scope
         * @param {Object} e Event details
         * @return {Void}
         */
        $scope.onclick=function(e){
          if (!$scope.disabled){
            $scope.$broadcast('button:click', e);
            $scope.$emit('button:click', e);
            
            if ($scope.$onclick){
              $scope.$onclick.call($scope, e);
            }
          }
        };
      }
    ]
  });