angular
  .module('stage')
  .service({
    stage:[
      '$location','user',
      function($location,user){
        /**
         * Returns the 
         * from the group that needs to be verified.
         * @public
         * @return {Void}
         */
        this.route=function(){
          return $app.cfg.routes[$location.path()] || { verify:true };
        };
      }
    ]
  })


  .directive({
    a:[function(){
      return {
        restrict: 'E',
        link: function(scope, $elm, attrs) {
          if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
            $elm.on('click', function(e){
              e.preventDefault();
            });
          }
        }
      };
    }]
  })
  

  .controller({
    StageCtrl:[
      '$scope','$location','$route','stage',
      function($scope,$location,$route,stage){
        
      }
    ]
  });