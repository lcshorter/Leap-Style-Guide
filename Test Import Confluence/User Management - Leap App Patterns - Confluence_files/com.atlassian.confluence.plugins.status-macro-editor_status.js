WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.status-macro:editor_status', location = 'js/status-editor.js' */
(function(d){var v="macro-placeholder-property-panel-edit-button";var n="status-macro-title first last editable";var r=13;var f=27;var o="status";var q=["Grey","Red","Yellow","Green","Blue"];var k=q[0];var t;var u,m,a;function s(){e();var z=Confluence.MacroParameterSerializer.deserialize(d(u).attr("data-macro-parameters")),A=false,y=false;if(z&&m){A=z.title!==m.title;y=z.colour!==m.colour}return A||y}function e(){if(a){var y=(b(m)==a.val());var z=(a.val()==="");if(y||z){delete m.title}else{m.title=a.val()}}}function p(){if(t&&t.state&&t.state()==="pending"){AJS.log("Macro update already in progress.");return}e();var z={contentId:Confluence.Editor.getContentId(),macro:{name:o,params:m,defaultParameterValue:"",body:""}};t=tinymce.confluence.MacroUtils.insertMacro(z,u);function y(A){AJS.Rte.getEditor().selection.select(A);AJS.Rte.BookmarkManager.storeBookmark();AJS.Rte.getEditor().selection.collapse()}t.done(function(A,B){u=A;y(u)}).fail(function(A){AJS.logError("Failed to load status macro - "+A)})}function b(y){return((y.colour||y.color)||k)}function j(){a=null;return true}function c(y){var z=d("<input/>");z.attr("class",n);z.keyup(function(A){if(A.keyCode===r){AJS.Confluence.PropertyPanel.destroy();return false}return true});z.keydown(function(A){if(A.keyCode===f){return j()}return true});return z}function x(y){a=c(m);a.val(y.find("span.panel-button-text").text());y.replaceWith(a);a.select().focus()}function h(){d.each(q,function(y,A){var z=function(C,B){m.colour=A;AJS.Confluence.PropertyPanel.destroy()};AJS.Confluence.PropertyPanel.Macro.registerButtonHandler(A,z,o)})}function i(y){return y.title||b(y)}function g(y){return{className:n,text:AJS.escapeHtml(y),click:x}}function l(z){for(var y=0;y<z.length;y++){if(z[y].className.indexOf(v)>-1){return z[y]}}return null}function w(y){var z=l(y);var A=function(B){tinymce.confluence.macrobrowser.editMacro(d(B))};z.click=function(){AJS.Confluence.PropertyPanel.destroy();if(!s()){A(u)}else{t.always(A)}}}AJS.Confluence.PropertyPanel.Macro.registerInitHandler(function(A,z,y){u=A;w(z);m=Confluence.MacroParameterSerializer.deserialize(d(u).attr("data-macro-parameters"));a=null;z.splice(1,0,g(i(m)))},"status");h();AJS.bind("destroyed.property-panel",function(y){if(s()){p()}})})(AJS.$);
}catch(e){WRMCB(e)};