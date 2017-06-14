angular
  .module('leap')
  .directive({
    leapProgress:[
      function(){
        return {
          restrict:'E',
          replace:true,
          scope:{
            percent:'@',
            display:'='
          },
          template:[
            '<div class="leap-progress" ng-class="{ complete:(percent===100) }">',
              '<div class="leap-progress-bar"></div>',
            '</div>'
          ].join(''),

          link:function($scope,$elm,attr){
            if (_.isUndefined(attr.percent)){
              $elm.addClass('indefinite');
            }

            $scope.$watch('display', function(display){
              if (display){
                $elm.removeClass('hide');
              }
              else {
                $elm.addClass('hide');
              }
            });

            $scope.$watch('percent', function(percent){
              $elm.find('div')
                .css({
                  width:$scope.percent +'%'
                });
            });
          }
        };
      }
    ]
  });