WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources', location = 'js/confluence/macro/metadata-cache.js' */
define("ac/confluence/macro/metadata-cache",[],function(){var a={};
return{getMetaData:function(b){if(a.hasOwnProperty(b)){return a[b]
}var c=WRM.data.claim(b);
a[b]=c;
return c
}}
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources', location = 'js/confluence/macro/editor-override-no-transformer.js' */
require(["ac/confluence/macro/editor","confluence/macro-js-overrides","ac/confluence/macro/metadata-cache"],function(c,b,a){AJS.bind("init.rte",function(){var e=a.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources.editorData");
for(var f in e){if(e.hasOwnProperty(f)){var d=e[f];
var g={width:d.WIDTH,height:d.HEIGHT,addonKey:d.ADDON_KEY,editTitle:d.EDIT_TITLE,insertTitle:d.INSERT_TITLE,url:AJS.params.contextPath+d.URL};
(function(h,i){b.assignFunction(h,{opener:function(j){j=$.extend({name:h},j);
c.openCustomEditor(j,i)
}})
})(f,g)
}}})
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources', location = 'js/confluence/macro/property-panel-override-no-transformer.js' */
require(["ac/confluence/macro/property-panel-controls","ac/confluence/macro/property-panel-iframe","ac/confluence/macro/property-panel-event","confluence/macro-js-overrides","ac/confluence/macro/metadata-cache"],function(d,e,b,c,a){AJS.bind("init.rte",function(){var g=a.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources.propertyPanelData");
for(var h in g){if(g.hasOwnProperty(h)){var f=AJS.params.contextPath+g[h].URL;
(function(j,i){c.assignFunction(j,e(i));
c.assignFunction(j,d(j));
c.assignFunction(j,b)
})(h,f)
}}})
});
}catch(e){WRMCB(e)};