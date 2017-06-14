WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-widget-connector', location = 'js/autoconvert/transformers/widgetpaste.js' */
define("confluence-paste/autoconvert/transformers/widgetpaste",["tinymce"],function(a){return function(){var e=[/youtube.com\/watch\?/,/vimeo.com\/[0-9]+/,/maps.google(.[a-z]+)+\/maps/,/[^\.]\.wufoo\.com\/(?:forms|reports)/];a.plugins.Autoconvert.autoConvert.addHandler(function(b,c,d){b=decodeURI(b.source);for(c=0;c<e.length;c++)if(b.match(e[c])){a.plugins.Autoconvert.convertMacroToDom({name:"widget",params:{url:b}},d,d);return}d()})}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/widgetpaste",function(a){require("ajs").bind("init.rte",a)});
}catch(e){WRMCB(e)};