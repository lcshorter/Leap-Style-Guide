angular
  .module('leap')
  .directive({
    leapAvatar:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          replace:true,
          scope:{
            default:'@',
            value:'@',
            user:'=',
          },
          template:'<div class="leap-avatar"><p transclude>{{ value }}</p></div>',
          link:function($scope,$elm,attrs){
            var colors=[
              '#26C6DA',
              '#26A69A',
              '#66BB6A',
              '#FFA726',
              '#7E57C2',
              '#FF7043',
              '#5C6BC0',
              '#AB47BC',
              '#9CCC65',
              '#EF5350',
              '#8D6E63',
              '#EC407A',
              '#FFCA28',
              '#78909C'
            ];

            function hash(v){
              var i,
              code=0,
              length=v.length;

              for(i=0; i<length; ++i){
                code += v.charCodeAt(i);
              }
              
              return code;
            }

            function color(text){
              return colors[hash(text) % colors.length];
            }

            if (!$scope.value){
              $scope.value = '';
            }

            $scope.$watch('user.first_name', function(name){
              if (name){
                $scope.value += name[0];
              }
            });

            $scope.$watch('user.last_name', function(name){
              if (name){
                $scope.value += name[0];
              }
            });
            
            if (_.isUndefined(attrs.default)){
              $scope.$watch('value', function(value){
                $scope.value = value.toUpperCase();

                if (value && value.match(/[a-zA-Z]+/)){
                  $elm.css({  background: color($scope.value) });
                }
            });
            }
          }
        };
      }
    ]
  });