angular
  .module('leap')
  .directive({
    leapInput:[
      '$timeout','$compile',
      function($timeout,$compile){
        return {
          restrict:'E',
          replace:true,
          scope:{
            name:'@',
            label:'@',
            type:'@',
            value:'=',
            placeholder:'@',
            model:'=',
            required:'=',
            min:'=',
            max:'=',
            pattern:'='
          },
          templateUrl:'component/input/input.html',
          link:function($scope,$elm,attr){
            var $label = $('label', $elm),
            $text = $('span', $label),
            $input = $('input', $elm);

            attr.type = (attr.type || 'text');

            $scope.errors={
              required:'This field is required',
              min:'The value is too short',
              max:'The value is too long',
              pattern:'The value does not match'
            };

            $scope.$watch('attr.required', function(){
              if (!_.isUndefined(attr.required)){
                $input.prop('required', true);
              }
              else {
                $label
                  .addClass('optional')
                  .append($compile($('<em translate>Optional</em>'))($scope));
              }
            });

            $scope.$watch('attr.value', function(value){ $input.attr('value', value); });
            $scope.$watch('attr.placeholder', function(placeholder){ $input.attr('placeholder', placeholder); });

            $scope.$watch('attr.min', function(min){ $input.attr('min', min); });
            $scope.$watch('attr.max', function(max){ $input.attr('max', max); });
            $scope.$watch('attr.pattern', function(pattern){ $input.attr('pattern', pattern); });

            $input
              .keyup(function(e){
                var err,
                reqd=attr.required,
                min=attr.min,
                max=attr.max,
                pattern=attr.pattern,
                val=$input.val(),
                len=val.length;

                if (!_.isUndefined(reqd) && val){
                  $input.removeClass('leap-error leap-error-required');
                }

                if (!_.isUndefined(max)){
                  err='leap-error leap-error-max';

                  if (len > max){
                    $input.addClass(err);
                  }
                  else {
                    $input.removeClass(err);
                  }
                }
              })
              .blur(function(e){
                var err,
                reqd=attr.required,
                min=attr.min,
                max=attr.max,
                pattern=attr.pattern,
                val=$input.val(),
                len=val.length;

                if (!_.isUndefined(reqd) && !$input.val()){
                  $input.addClass('leap-error leap-error-required');
                  $scope.error=$scope.errors.required;
                }
              });
          }
        };
      }
    ]
  });