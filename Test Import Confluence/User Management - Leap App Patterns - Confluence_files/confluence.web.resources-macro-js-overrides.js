WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:macro-js-overrides', location = 'includes/js/macro-js-overrides.js' */
define("confluence/macro-js-overrides",["confluence/api/dictionary","underscore"],function(f,e){var a=new f;return e.extend(a,{getFunction:function(b,c){var d=a.get(b);if(d&&"function"===typeof d[c])return d[c]},assignFunction:function(b,c){a.put(b,e.extend({},a.get(b),c))}})});
}catch(e){WRMCB(e)};