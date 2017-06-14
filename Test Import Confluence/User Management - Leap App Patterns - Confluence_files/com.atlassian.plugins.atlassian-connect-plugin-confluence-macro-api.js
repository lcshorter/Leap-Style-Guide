WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-api', location = 'js/confluence/macro/macro.js' */
define("ac/confluence/macro",["confluence/root","confluence-macro-browser/macro-browser","ajs"],function(e,d,a){var b=undefined;
var c={};
return{closeCurrentMacroPropertyPanel:function(){a.Confluence.PropertyPanel.destroy()
},setLastSelectedConnectMacroNode:function(f){c.locationToInsert=undefined;
c.params=undefined;
c.body=undefined;
c.name=undefined;
var g=d.getMacroName(f);
if(g!==undefined){b=f
}else{b=undefined
}},setUnsavedMacroData:function(i,g,f,h){c.body=g;
c.params=f;
c.locationToInsert=h;
c.name=i
},getCurrentMacroParameters:function(){if(b===undefined){return c.params
}return d.getMacroParams(b)
},saveMacro:function(){return tinymce.confluence.MacroUtils.updateMacro.apply(this,arguments)
},saveCurrentMacro:function(i,f){if(b===undefined){c.params=i;
c.body=f;
var h={contentId:e.getContentId(),macro:{name:c.name,params:c.params,body:c.body===null?"":c.body}};
a.Rte.getEditor().selection.moveToBookmark(c.locationToInsert);
return tinymce.confluence.MacroUtils.insertMacro(h)
}var g=d.getMacroName(b);
if(g===undefined){return undefined
}return tinymce.confluence.MacroUtils.updateMacro(i,f,g,b)
}}
});
}catch(e){WRMCB(e)};