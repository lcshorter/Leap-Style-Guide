angular
  .module('leap')
  .directive({
     leapMenu:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          scope:{
            align:'@'
          },
          controller:'LeapMenuCtrl',
          template:'<div class="leap-menu" ng-class="{ hide:!opened }" ng-transclude/>',
          link:function($scope,$elm,attr){
            var offset,
            $body   = $(document.body),
            $parent = $elm.parent();

            $scope.top    = 0;
            $scope.bottom = 0;
            $scope.left   = 0;
            $scope.right  = 0;
            
            if (!attr.align){
              $scope.align = 'bottom-left';
            }

            function is($elm,name){
              return $elm.hasClass(name) || $elm.parent().hasClass(name);
            }

            function onbodyclick(e){
              if (!$elm.is(e.target) && !$.contains($elm[0], e.target)){
                $timeout(function(){
                  $scope.close();
                });
              }
            }

            if ($parent.length){
              $parent.addClass('leap-menu-handle');
            }

            $scope.$watch('opened', function(opened){
              if (opened){
                if ($parent.length){
                  $parent.addClass('open');
                }

                $timeout(function(){
                  $body.bind('click', onbodyclick);
                });
              }
              else {
                if ($parent.length){
                  $parent.removeClass('open');
                }

                $body.unbind('click', onbodyclick);
              }
              
              var pos    = $parent.position(),
              width      = $elm.outerWidth(true),
              alignments = $scope.align.split('-');

              $scope.top    = pos.top;
              $scope.bottom = pos.top + $parent.outerHeight(true);
              $scope.left   = pos.left;
              $scope.right  = pos.left + $parent.outerWidth(true);
              
              _.each(alignments, function(align){
                switch(align){
                  case 'top':
                    $elm.css({ top:$scope.top });
                    break;

                  case 'bottom':
                    $elm.css({ top:$scope.bottom-$scope.top });
                    break;

                  case 'right':
                    $elm.css({ right:0 });
                    break;

                  case 'outerright':
                    $elm.css({ left:$scope.right });
                    break;

                  case 'left':
                    $elm.css({ left:$scope.left });
                    break;

                  case 'outerleft':
                    $elm.css({ left:$scope.left - width });
                    break;
                }
              });
            });

            

            $scope.$on('link:click', function(e,$event){
              var $target=$($event.target),
              $delegate=$($event.delegateTarget);

              if (is($target, 'leap-menu-handle')){
                $scope.toggle();
              }
              else {
                $timeout(function(){
                  $scope.close();
                });
              }
            });

            $(window).scroll(function(e){
              if ($scope.opened){
                $timeout(function(){
                  $scope.close();
                });
              }
            });
          }
        };
      }
    ],

    leapMenuItem:[
      function(){
        return {
          restrict:'E',
          transclude:true,
          replace:true,
          scope:true,
          template:'<div class="leap-menu-item" ng-transclude/>'
        };
      }
    ]
  })



  .controller({
    LeapMenuCtrl:[
      '$scope','$timeout',
      function($scope,$timeout){
        $scope.opened = false;
        
        $scope.open = function(){
          $scope.opened = true;
        };

        $scope.close = function(){
          $scope.opened = false;
        };

        $scope.toggle = function(){
          if ($scope.opened){
            $scope.close();
          }
          else {
            $scope.open();
          }
        };
      }
    ]
  });