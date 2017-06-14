WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-cloudapp', location = 'js/autoconvert/transformers/cloudapppaste.js' */
define("confluence-paste/autoconvert/transformers/cloudapppaste",["ajs","jquery","confluence/api/constants"],function(b,c,e){return function(g,f,d){"cl.ly"==g.host?c.get(e.CONTEXT_PATH+"/rest/autoconvert/1.0/cloudappembed?resource="+g.path.substr(1),function(a){if(a)switch(a.item_type){case "image":a=b.escapeHtml(a.content_url);d(c('<img class="confluence-embedded-image confluence-external-resource" src="'+a+'" data-image-src="'+a+'"/>')[0]);break;case "bookmark":f.text(a.name),f.attr("href",b.escapeHtml(a.redirect_url)),
d(f)}else d()}):d()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-paste/autoconvert/transformers/cloudapppaste","AJS.Editor.CloudAppPaste",function(b){var c=require("ajs"),e=require("tinymce");c.bind("init.rte",function(){e.plugins.Autoconvert.autoConvert.addHandler(b)})});
}catch(e){WRMCB(e)};