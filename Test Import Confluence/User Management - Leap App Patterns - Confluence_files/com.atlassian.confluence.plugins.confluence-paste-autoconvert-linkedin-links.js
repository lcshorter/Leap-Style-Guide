WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-linkedin-links', location = 'js/autoconvert/transformers/linkedin.js' */
define("confluence-paste/autoconvert/transformers/linkedin",["jquery","ajs"],function(c,a){return function(d,e,f){-1===d.host.search(".linkedin.")?f():c.ajax("https://card-meta.atlassian.io/meta?url="+d.source,{timeout:5E3,success:function(b){if(-1===b.title.search("Sign In")){var a=b.title.indexOf("|"),b=-1===a?b.title:b.title.substring(0,a);e.text(b);e.attr("href",d.source)}},error:function(b,c){a.log("Link conversion failed, Error: "+c)},complete:function(){f()}})}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/linkedin",function(c){var a=require("ajs");a.DarkFeatures.isEnabled("autoconvert-link-to-page-title")&&a.bind("init.rte",function(){require("tinymce").plugins.Autoconvert.autoConvert.addHandler(c)})});
}catch(e){WRMCB(e)};