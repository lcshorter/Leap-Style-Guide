WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.widgetconnector:twitter-autoconvert-webresources', location = 'com/atlassian/confluence/extra/widgetconnector/js/autoconvert-twitter.js' */
(function(){AJS.bind("init.rte",function(){var a=/^\/(.*?)\/status\/([^/]+\/?$)/,c=/^\/(.*?)\/statuses\/([^/]+\/?$)/,b=function(h,g,d){var e,i,f;if(h.host.match(/^twitter.com/)){if(e=decodeURI(h.path).match(a)){i=h.protocol+"://twitter.com/"+e[1]+"/status/"+e[2]}else{if(e=decodeURI(h.path).match(c)){i=h.protocol+"://twitter.com/"+e[1]+"/statuses/"+e[2]}}if(i){f={name:"widget",params:{url:i}};tinymce.plugins.Autoconvert.convertMacroToDom(f,d,d)}else{d()}}else{d()}};tinymce.plugins.Autoconvert.autoConvert.addHandler(b)})})();
}catch(e){WRMCB(e)};