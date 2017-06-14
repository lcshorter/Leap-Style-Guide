angular
  .module('leap')
  .directive({
    leapUsers:[
      function(){
        return {
          restrict:'E',
          replace:true,
          controller:'LeapUsersCtrl',
          scope:{
            users:'=',
            readonly:'@'
          },
          templateUrl:'component/users/users.html',
          link:function($scope,$elm,$attr){
            $attr.$observe('readonly', function(v){
              $scope.readonly = true;
            });
          }
        };
      }
    ]
  })

  .controller({
    LeapUsersCtrl:[
      '$scope',
      function($scope){
        $scope.adduser = function(){
          
        };
      }
    ]
  });