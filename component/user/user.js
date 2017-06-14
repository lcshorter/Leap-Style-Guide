angular
  .module('leap')
  .directive({
    leapUser:[
      '$timeout',
      function($timeout){
        return {
          restrict:'E',
          replace:true,
          scope:{
            user:'=',
          },
          templateUrl:'component/user/user.html'
        };
      }
    ]
  });