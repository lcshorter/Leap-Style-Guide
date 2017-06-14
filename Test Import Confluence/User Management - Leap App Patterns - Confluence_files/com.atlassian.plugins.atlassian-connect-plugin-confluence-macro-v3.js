WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v3', location = 'js/confluence/macro/editor.js' */
(function(a,b){b("ac/confluence/macro/editor",["connect-host","ac/dialog","ac/confluence/macro","ajs"],function(h,f,d,c){var g;
var e={close:function(){f.close()
},getMacroData:function(i){return i(d.getCurrentMacroParameters())
},getMacroBody:function(i){return i(g)
},openCustomEditor:function(i,k){c.Rte.getEditor().focus();
var l=c.Rte.getEditor().selection;
var j=l.getNode();
d.setLastSelectedConnectMacroNode(j);
d.setUnsavedMacroData(i.name,(i.body?i.body:""),i.params,l.getBookmark());
g=i.body;
function n(o){var p={width:"100%",height:"100%","ui-params":h.uiParams.encode({dlg:1})};
a.extend(p,i.params);
return a.ajax(o,{data:p})
}var m={header:i.params?k.editTitle:k.insertTitle,submitText:i.params?"Save":"Insert",chrome:true,key:k.addonKey,moduleKey:i.name,ns:k.addonKey+"__"+i.name,width:k.width||null,height:k.height||null};
f.create(m,false);
n(k.url).done(function(r){var p=a(r);
var o=p.find(".ap-content");
o.addClass("ap-dialog-container");
var q=a(document.getElementById(p.attr("id")));
if(q.length!=="0"){q.empty();
q.append(o);
q.append(p[1])
}else{console.error("AC macro: cannot locate existing container"+p.attr("id"))
}})
}};
return e
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v3', location = 'js/confluence/macro/property-panel-iframe.js' */
(function(a,b){b("ac/confluence/macro/property-panel-iframe",["connect-host","ac/confluence/macro","ajs"],function(e,c,d){return function(f){return{propertyPanelIFrameInjector:function(g){var h={"ui-params":e.uiParams.encode({dlg:1}),classifier:"property-panel"};
var i=d.Rte.getEditor().selection;
c.setLastSelectedConnectMacroNode(i.getNode());
a.ajax(f,{data:h}).done(function(k){var j=a(k);
j.css("display","none");
g.panel.append(j)
})
}}
}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v3', location = 'js/confluence/macro/property-panel-controls.js' */
(function(a,b){b("ac/confluence/macro/property-panel-controls",["underscore"],function(d){var c;
return function(f){function e(h){try{return d.first(d.filter(d.pluck(h,f),d.isObject))
}catch(g){return null
}}return{getControls:function(g){c=c||WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-macro.property-panel-controls");
g(e(c))
}}
}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v3', location = 'js/confluence/macro/property-panel-event.js' */
(function(a,b){b("ac/confluence/macro/property-panel-event",["connect-host"],function(i){var g;
var e=[];
var c=".property-panel";
var d=function(j,k){return"click."+j+"."+k+".macro"+c
};
var f=function(k,j){if(e.length<10){e.push({eventKey:k,doneCallback:j})
}};
var h=function(k,j){i._addons.emitToAll(k);
j()
};
return{waitForPropertyPanelEventBindings:function(){g=false;
e=[]
},propertyPanelEventsBound:function(){g=true;
while(e.length>0){var j=e.shift();
h(j.eventKey,j.doneCallback)
}},handlePropertyPanelEvent:function(l,m,n){var j=a.Deferred();
if(l==="click"){var k=d(m,n);
if(g){h(k,j.resolve)
}else{f(k,j.resolve)
}}return j
},_getQueueLength:function(){return e.length
}}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v3', location = 'js/confluence/macro/rpc.js' */
(function(b,a){a(["ac/confluence/macro/editor","ac/confluence/macro","ac/confluence/macro/property-panel-event","connect-host"],function(d,e,c,f){f.extend(function(){return{internals:{onMacroPropertyPanelEvent:c.propertyPanelEventsBound,saveMacro:e.saveCurrentMacro,closeMacroPropertyPanel:e.closeCurrentMacroPropertyPanel,closeMacroEditor:d.close,getMacroData:d.getMacroData,getMacroBody:d.getMacroBody}}
})
})
}(AJS.$,require));
}catch(e){WRMCB(e)};