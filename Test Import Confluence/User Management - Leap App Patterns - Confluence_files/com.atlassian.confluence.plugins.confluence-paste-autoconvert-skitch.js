WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-skitch', location = 'js/autoconvert/transformers/skitchpaste.js' */
define("confluence-paste/autoconvert/transformers/skitchpaste",["ajs","jquery","confluence/api/constants"],function(a,b,c){return{pasteHandler:function(a,e,d){"www.skitch.com"===a.host||"skitch.com"===a.host?b.get(c.CONTEXT_PATH+"/rest/autoconvert/1.0/skitchembed?url="+a.source,function(a){a&&a.url?d(b('<img class="confluence-embedded-image confluence-external-resource" src="'+a.url+'" data-image-src="'+a.url+'"/>')[0]):d()}):d()}}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/skitchpaste",function(a){var b=require("ajs"),c=require("tinymce");b.bind("init.rte",function(){b.Editor.SkitchPaste=a;c.plugins.Autoconvert.autoConvert.addHandler(a.pasteHandler)})});
}catch(e){WRMCB(e)};