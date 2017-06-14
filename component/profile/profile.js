angular
  .module('leap')
  .directive({
    leapProfile:[
      'is',
      function(is){
        return {
          restrict:'E',
          replace:true,
          scope:{
            user:'='
          },
          templateUrl:'/emc/dev-center/component/profile/profile.html',
          link:function(scope,$elm){
            scope.$watch('user.first_name', function(name){
              if (name){
                if (name.length > 10){
                  scope.first_name=name[0] +'.';
                }
                else {
                  scope.first_name=name;
                }
              }
            });

            scope.$watch('user.last_name', function(name){
              scope.last_name=name;
            });

            scope.$watch('user.email', function(email){
              scope.email=email;
            });
          }
        };
      }
    ]
  });