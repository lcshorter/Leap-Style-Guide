WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:class', location = 'includes/js/class.js' */
define("confluence/class",["jquery"],function(f){var j=function(d){var a=function(){};a.prototype=d;return new a},i=!1,l=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,k=function(){};k.extend=function(){function d(){!i&&this.init&&this.init.apply(this,arguments)}var a,g=this.prototype;if(1<arguments.length){var c=f.makeArray(arguments);a=c.pop();var h;f.each(c,function(b,a){h=h?h.extend(a):a});return h.extend(this.prototype).extend(a)}a=arguments[0];i=!0;c=new this;i=!1;for(var b in a)if(c[b]="function"===
typeof a[b]&&"function"===typeof g[b]&&l.test(a[b]))c[b]=function(a,b){return function(){var c=this._super;this._super=g[a];var d=b.apply(this,arguments);this._super=c;return d}}(b,a[b]);else if("object"===typeof g[b]){var e=j(a[b]);f.each(g[b],function(a,b){if(e[a]){if("object"===typeof e[a]){var c=j(e[a]);f.each(b,function(a,b){c[a]||(c[a]=b)});e[a]=c}}else e[a]=b});c[b]=e}else c[b]=a[b];d.prototype=c;d.constructor=d;d.extend=arguments.callee;return d};return k});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/class","Class");
}catch(e){WRMCB(e)};