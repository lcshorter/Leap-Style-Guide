angular
  .module('leap')
  .directive({
    leapLink:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          replace:true,
          transclude:true,
          controller:'LeapLinkCtrl',
          scope:{
            disabled:'@?',
            enter:'=?',
            leave:'=?',
            click:'=?'
          },
          template:'<a class="leap-link" ng-mouseenter="onenter($event);" ng-mouseleave="onleave($event);" ng-click="onclick($event);" ng-transclude></a>',
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
    LeapLinkCtrl:[
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
            $scope.$broadcast('link:enter', e);
            $scope.$emit('link:enter', e);

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
            $scope.$broadcast('link:leave', e);
            $scope.$emit('link:leave', e);

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
            $scope.$broadcast('link:click', e);
            $scope.$emit('link:click', e);

            if ($scope.$onclick){
              $scope.$onclick.call($scope, e);
            }
          }
        };
      }
    ]
  });