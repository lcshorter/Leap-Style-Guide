angular
  .module('styleguide',['leap'])
  .controller({
    StyleGuideCtrl:[
      '$scope','$compile','$timeout',
      function($scope,$compile,$timeout){
        $scope.modules=[
          // { key:'overview',
          //   name:'Overview'
          // },

          // { key:'grid',
          //   name:'Grid'
          // },

          { key:'typography',
            name:'Typography',
            families:[
              { name:'Open Sans',
                font:"'Open Sans', sans-serif" }
            ]
          },

          { key:'palettes',
            name:'Palettes',
            groups:[
              { name:'Grays',
                colors:[
                  'black',
                  'charcoal',
                  'slate',
                  'stone',
                  'smoke',
                  'fog',
                  'white'
                ]
              },

              { name:'Primary',
                colors:[
                  'primary-dark',
                  'primary',
                  'primary-light',
                  'primary-faded'
                ]
              },

              { name:'Secondary',
                colors:[
                  'error'
                ]
              }
            ]
          },

          { key:'button',
            name:'Buttons'
          },

          // { key:'fab',
          //   name:'Floating Actions'
          // },

          { key:'avatar',
            name:'Avatars',
            users:{
              one:{ first_name:'Manfried', last_name:'Milfried', email:'manfried@milfried.com' },
              two:{ first_name:'Luis', last_name:'Pfisher', email:'luis@pfisher.com' },
              three:{ first_name:'Gertrude', last_name:'Balmer', email:'gertrude@balmer.com' },
            }
          },

          { key:'list',
            name:'Lists',
            users:[
              { first_name:'Manfried', last_name:'Milfried', email:'manfried@milfried.com' },
              { first_name:'Luis', last_name:'Pfisher', email:'luis@pfisher.com' },
              { first_name:'Gertrude', last_name:'Balmer', email:'gertrude@balmer.com' }
            ]
          }
        ];


        /**
         * Returns the CSS values passed for the element provided
         * @public
         * @param {Mixed} elm Element or string #id of element
         * @param {Array} styles Array of styles to return
         * @return {String}
         */
        $scope.css=function(elm, styles, hide){
          var values=[],
          css=$(elm).css(styles);
          
          if (css){
            $.each(css, function(key,value){
              if (hide){
                values.push(value);
              }
              else {
                values.push(key+':'+value);
              }
            });
          }

          return values.join('; ') + (hide ? '':';');
        };

        /**
         * Dynamically loads a modules into the DOM
         * @public
         * @param {String} index Module name
         * @return {Void}
         */
        $scope.load=function(index){
          if (_.isUndefined(index)){
            index = 0;
          }

          var m = $scope.module = $scope.modules[index];

          var html = '<div ng-include="\'stage/'+ m.key +'/'+ m.key +'.html\'"></div>';
          angular.element(document.getElementById('module')).empty().append($compile(html)($scope));
        };

        $scope.load();
      }
    ]
  });