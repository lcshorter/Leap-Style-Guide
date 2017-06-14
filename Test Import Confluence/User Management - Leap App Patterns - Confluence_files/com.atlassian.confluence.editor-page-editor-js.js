WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-message.js' */
define("confluence-editor/editor/page-editor-message",["jquery","ajs","aui/flag","document","underscore"],function(f,i,g,h,d){var b=Object.create(null),e=Object.create(null);h.addEventListener("aui-flag-close",function(a){a&&a.target&&(b=d.filter(Object.keys(b),function(c){return!f(a.target).find("span").hasClass(c)}))});return{handleMessage:function(a,c,d){b[a]||(e[a]?delete e[a]:c&&(b[a]=g({title:c.title?c.title:"",type:c.type,close:c.close?c.close:"manual",persistent:!1,body:"<span class='"+a+
"'>"+c.message+"</span>"}),d&&d()))},closeMessages:function(a){d.each(a,function(a){b[a]&&(b[a].close(),delete b[a])})},isDisplayed:function(a){return a in b},displayedErrors:function(){return Object.keys(b)},suppressMessage:function(a){e[a]={}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-quit-dialog.js' */
define("confluence-editor/editor/page-editor-quit-dialog","jquery confluence/templates ajs confluence/meta window document confluence-editor/editor/page-editor-message confluence/api/constants underscore confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(e,l,c,g,v,G,m,w,x,d){function y(b){b.stopPropagation();b.preventDefault();c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.show-diff-clicked"});a.showDiffButton.hide();a.hideDiffButton.show();r()}function z(b){b.stopPropagation();
b.preventDefault();c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.hide-diff-clicked"});a.hideDiffButton.hide();a.showDiffButton.show();a.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium");j(n)}function A(b){c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard"});b.stopPropagation();b.preventDefault();d.UI.setButtonsState(false,a.buttonsAll);var h=g.get("content-id"),b=c.contextPath(),b=f?b+"/rest/synchrony/1.0/content/"+
h+"/changes/unpublished":b+"/rest/api/content/"+h+"?status=draft";f&&m.suppressMessage("editor.synchrony.revert-page");e.ajax({url:b,type:"DELETE",data:{draftId:h},contentType:"application/json",dataType:"json"}).done(function(){f&&m.handleMessage("collaborative-editor-discard-error",{type:"success",close:"auto",message:"Successfully reverted to the last published version"});c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-success",data:{contentId:h}});s()}).fail(function(b){m.handleMessage("collaborative-editor-discard-error",
{type:"error",title:f?"Can\'t revert to last published version":"There were errors discarding your draft.",message:f?"We can\'t get the last published version of the page at the moment. Give it a few moments then try discarding the draft again.":b.errors||"An unknown error has occurred. Please check your logs."});c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-error",data:{contentId:h}});d.UI.setButtonsState(true,a.buttonsAll)})}function s(){a.editorForm.append(l.Editor.Page.hiddenInputCancel()).submit()}function t(a){if(a){a.stopPropagation();
a.preventDefault()}s()}function B(b){d.UI.setButtonsState(false,a.buttonsAll);o.save(b)}function C(b){b.stopPropagation();b.preventDefault();c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.draft-status-indicator.click"});p(function(){a.closeButton.show();r()})}function D(b){b.stopPropagation();b.preventDefault();a.dialog.hide()}function r(){a.dialogEl.removeClass("aui-dialog2-medium").addClass("aui-dialog2-xlarge");j(i.SHOW_DIFF);e.ajax({url:w.CONTEXT_PATH+"/rest/tinymce/1/content/"+
g.get("page-id")+"/draft/diff",type:"GET"}).success(function(b){a.dialogContent.find(".wiki-content").html(b).children().first().hasClass("diff-context-placeholder")&&a.dialogContent.find("hr").hide()})}function j(b){a.dialogHeader.html(l.Editor.Page.quitDialogHeader({dialogType:b}));a.dialogContent.html(l.Editor.Page.quitDialogContent({dialogType:b,contributors:k}));a.dialogFooter.find("."+b).show();a.dialog.show()}function E(){c.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.dialog-closed"});
a.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium");d.UI.toggleSavebarBusy(false);a.dialogFooter.find(".aui-button").hide();a.dialogContent.empty()}function F(a,c){c&&c.contributors&&(k=x.reject(c.contributors,function(a){return a.name===g.get("remote-user")}))}function p(a){d.Drafts.save({forceSave:f,skipErrorHandler:true,onSuccessHandler:a||e.noop})}var a={},f,u,i={EXIT:"exit",PUBLISH:"publish",SHOW_DIFF:"diff"},k=[],q=false,o={},n;return{init:function(b){if(u=g.getBoolean("shared-drafts")&&
(g.get("content-type")==="page"||g.get("content-type")==="blogpost"))if(q){o.save=b.saveHandler;a.publishButton.click(B)}else{f=!g.get("new-page");a.discardButton=e("#qed-discard-button").tooltip({gravity:"s",className:"quit-editor-dialog"});if(d.isLimitedModeEnabled()&&f){d.UI.setButtonState(false,a.discardButton);a.discardButton.removeAttr("disabled")}else a.discardButton.click(A);a.saveExitButton=e("#qed-save-exit-button").click(t);a.showDiffButton=e("#qed-show-diff-button").click(y);a.hideDiffButton=
e("#qed-hide-diff-button").click(z);a.publishButton=e("#qed-publish-button");a.closeButton=e("#qed-close-button").click(D);a.buttonsAll=[a.discardButton,a.saveExitButton,a.showDiffButton,a.hideDiffButton,a.publishButton];a.dialog=c.dialog2("#quit-editor-dialog");a.dialogEl=a.dialog.$el;a.dialogHeader=a.dialogEl.find(".aui-dialog2-header");a.dialogContent=a.dialogEl.find(".aui-dialog2-content");a.dialogFooter=a.dialogEl.find(".aui-dialog2-footer");a.editorForm=e("#wysiwyg").closest("form");e("#pluggable-status").on("click",
"a",C);a.dialog.on("hide",E);c.bind("editor-heartbeat",F);q=true}},process:function(b){if(u){b.stopPropagation();b.preventDefault();e(v).one("editor-heartbeat",function(){switch(b.target.id){case d.UI.saveButton.attr("id"):case d.UI.versionCommentInput.attr("id"):d.UI.toggleSavebarBusy(true);if(k.length===0)o.save();else{p();f&&a.showDiffButton.show();j(i.PUBLISH);n=i.PUBLISH}break;case d.UI.cancelButton.attr("id"):if(d.Drafts.isDraftDirty()){p();f&&a.showDiffButton.show();d.UI.toggleSavebarBusy(true);
k.length===0?a.discardButton.html("Discard \u003cstrong\u003eall\u003c/strong\u003e changes"):a.discardButton.html("Discard \u003cstrong\u003eeveryone\'s\u003c/strong\u003e changes");j(i.EXIT);n=i.EXIT}else t()}});d.heartbeat()}},_destroy:function(){q=false}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.js' */
define("confluence-editor/editor/page-editor","ajs jquery document window confluence/meta confluence/api/constants confluence-editor/editor/page-editor-message confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/get-content-id confluence/page-location confluence/breadcrumbs confluence/api/event".split(" "),function(d,b,m,u,f,n,i,Q,c,v,R,S,j){function C(){var a=f.getBoolean("shared-drafts"),b=f.get("content-type")==="page"||f.get("content-type")==="blogpost",e=
d.params.pageId!=="0";return b&&(e||a)}function D(a,b){i.closeMessages(["page-moved-heartbeat"]);i.handleMessage("page-moved-heartbeat",{type:"info",title:d.format("{0} moved this page",a),message:d.format("It\'\'s ok, though - you can still publish your changes when you\'\'re ready. \u003cbr /\u003e\u003cbr /\u003e New Location: {0}",b)})}function E(a){b("#editpageform").find("input[name='atl_token']").val(a);f.set("atl-token",a);f.set("atlassian-token",a);b("#atlassian-token").attr("content",a)}var w=d.DarkFeatures.isEnabled("editor.ajax.save")&&!d.DarkFeatures.isEnabled("editor.ajax.save.disable")&&
f.get("remote-user")!=="",o=[],q=[],r=[],F=false,k=1,s,G=function(a){c.UI.setButtonState(a,c.UI.saveButton);c.UI.setButtonState(a,c.UI.previewButton);c.UI.setButtonState(a,c.UI.cancelButton)},t=function(a){var a=a||{},b=a.messageKey||"editor-error-message",e=a.message||"Something went wrong with the editor. Copy your unsaved changes and refresh the page to keep editing.";i.handleMessage(b,{title:a.title,type:"error",message:e},function(){a.disablePublish&&G(false)})},H=function(){return f.get("edit-mode")==="limited"},U=function(a){var b=true;i.closeMessages(["offline-before-save-error"]);
for(var e=0;e<q.length;e++){q[e](a)===false&&(b=false);if(a.isImmediatePropagationStopped())break}if(!b||a.isDefaultPrevented()||a.isPropagationStopped())return false;a.preventDefault();I(a).done(x).fail(T)},T=function(a){var b=a||{};t({messageKey:b.messageKey||"offline-before-save-error",message:b.disablePublish?"Something went wrong with the editor. Copy your unsaved changes and refresh the page to keep editing.":"Unable to communicate with server. Saving is not possible at the moment.",disablePublish:b.disablePublish});a&&j.trigger("analytics",{name:"editor.save.error."+a.origin+
"."+a.cause});c.UI.toggleSavebarBusy(false);c.Drafts.bindUnloadMessage()},I=function(a){var d=b.Deferred();d.resolve(a);return d.promise()},J=function(){b(c.getCurrentForm()).submit();j.trigger("analytics",{name:"confluence.editor.close",data:{source:"publishButton"}})},x=J;j.bind("rte-ready",function(){d.Meta.getBoolean("collaborative-content")||b('meta[name="ajs-collaborative-editor-status"]').attr("content","off");c.UI.saveButton.bind("click",U)});j.bind("editor.error.message",function(a,b){t(b)});
j.bind("dismiss.editor.error.message",function(a,b){i.closeMessages([b.messageKey]);b.enablePublish&&G(true)});var V=function(){var a;for(a=0;a<o.length;a++)c.UI.cancelButton.click(o[a]);var d=b(c.getCurrentForm());for(a=0;a<r.length;a++)d.submit(r[a]);b.unbind("init.rte",this)},K=function(a,c,e,W){W.push(e);if(d.Rte&&d.Rte.BootstrapManager&&d.Rte.BootstrapManager.isInitComplete())a.bind(c,e);else if(!F){F=true;b.bind("init.rte",V)}},y=function(a,b,e){var c=null;d.Rte&&(d.Rte.BootstrapManager&&d.Rte.BootstrapManager.isInitComplete())&&
(c=function(a,b,e){a.unbind(b,e)});for(var f=e.pop();f;){c&&c(a,b,f);f=e.pop()}};j.bind("page-location-event",function(a,b){var e=b.movedBy||"Another user",c=b.spaceName;b.parentPageTitle&&(c=c+("/"+b.parentPageTitle));S.updateWithPageId(v());var l=f.get("space-key");if(f.get("content-type")==="page"){var i=f.get("parent-page-id")||null;(l!==b.spaceKey||i!==b.parentPageId)&&D(e,c)}else f.get("content-type")==="blogpost"&&l!==b.spaceKey&&D(e,c);R.set(b)});
var L=function(a){if(h!==a){h&&h.clear();a.start(c.heartbeat);h=a}},h,M=d.Meta.getNumber("heartbeat-interval")||3E4,z,N;z={start:function(a){d.debug("Changing heartbeat to the normal scheduler");N=setInterval(a,M)},clear:function(){clearInterval(N)}};var O,P=Math.max(M/5,5E3),A,B;O={start:function(a){d.debug("Changing heartbeat to the recovery scheduler");B=0;var b=function(){a();var e=P*Math.pow(2,B);A=setTimeout(b,Math.min(e,3E5));B++};A=setTimeout(b,P)},clear:function(){clearTimeout(A)}};return{bookmark:"",
MODE_RICHTEXT:"richtext",MODE_SOURCE:"source",MODE_PREVIEW:"preview",PREVIEW_OUTPUT_TYPE:"PREVIEW",currentEditMode:null,contentHasChangedSinceLastSave:false,sourceInitialValue:false,isSubmitting:false,isCancelling:false,isLimitedModeEnabled:H,overrideBeforeSave:function(a){I=a},overrideSave:function(a){x=a},restoreDefaultSave:function(){x=J},getNumConcurrentEditors:function(){return k},addCancelHandler:function(a){K(c.UI.cancelButton,"click",a,o)},addSaveHandler:function(a){q.push(a)},addSubmitHandler:function(a){K(b(c.getCurrentForm()),
"submit",a,r)},removeAllCancelHandlers:function(){y(c.UI.cancelButton,"click",o)},removeAllSaveHandlers:function(){y(c.UI.saveButton,"click",q)},removeAllSubmitHandlers:function(){y(b(c.getCurrentForm()),"submit",r)},hasContentChanged:function(){return!this.inRichTextMode()&&!this.contentHasChangedSinceLastSave?false:this.editorHasContentChanged()},editorHasContentChanged:function(){if(d.Rte.getEditor()==null){d.debug("Editor: editorHasContentChanged - No active editor present. Returning false.");
return false}return d.Rte.Content.editorHasContentChanged()},isEmpty:function(){var a=b(d.Rte.getEditor().getContent()).text();return!b.trim(a)},getResumeDraftUrl:function(){var a=[];a.push(n.CONTEXT_PATH);a.push("/pages/"+(d.params.newPage?"create":"edit")+d.params.draftType+".action");a.push("?useDraft=true");a.push("&pageId="+d.params.pageId);a.push("&contentChanged="+this.hasContentChanged());this.getCurrentForm().spaceKey&&a.push("&spaceKey="+f.get("space-key"));return a.join("")},getCurrentTitle:function(){return b("#content-title")&&
b("#content-title").val()},contentFormSubmit:function(){(H()||!c.Drafts.isSharedDraftsEnabled())&&c.Drafts.unBindUnloadMessage();b(".editable-title #content-title").prop("disabled",true);return true},metadataSyncRequired:C,heartbeat:function(a){var a=a||{},g={dataType:"json",contentId:f.get("content-id"),draftType:f.get("content-type"),spaceKey:d.params.spaceKey,contributorsHash:f.get("contributors-hash")};s=d.safe.ajax({url:n.CONTEXT_PATH+"/json/startheartbeatactivity.action",type:"POST",data:g,
dataType:"json",async:a.synchronousHeartbeat!==true}).done(function(e){if(!C()&&e){E(e.atlToken);d.Meta.set("shared-drafts",e.editMode!=="legacy");j.trigger("rte.heartbeat",e)}else if(!e||!e.atlToken||!(e.activityResponses instanceof Array)){if(e.status==="unauthorised")if(a.movedBy){i.closeMessages(["heartbeat-error"]);i.handleMessage("heartbeat-error",{type:"warning",title:"Page permissions have changed",message:"You can\'t publish due to a page move or change in restrictions. We recommend you copy anything you need and close the editor."})}else{i.closeMessages(["heartbeat-error"]);
i.handleMessage("heartbeat-error",{type:"warning",title:"No access to this page",message:"The content has been moved, restricted, or deleted. We recommend you copy anything you need and close the editor."})}j.trigger("rte.heartbeat-error","Invalid server response");d.logError("Unexpected server response for heartbeat:");d.log(e)}else{var g=e.pageLocation;if(a.movedBy)g.movedBy=a.movedBy;j.trigger("page-location-event",g);f.set("contributors-hash",e.contributorsHash);d.Meta.set("shared-drafts",e.editMode!==
"legacy");g=e.activityResponses;E(e.atlToken);c.heartbeatType.normal();j.trigger("rte.heartbeat",g);k=(g.length||0)+1;if(k>1){var l=!w?b("#other-users-span"):b("#reliable-other-users-span").length===0?b("<span id='reliable-other-users-span'></span>"):b("#reliable-other-users-span");l.empty();for(var h=0;h<k-1;++h){h>0&&l.append(", ");var p=g[h];l.append(d("a").attr("href",n.CONTEXT_PATH+"/display/~"+encodeURIComponent(p.userName)).text(p.fullName));p.lastEditMessage!=null&&l.append(" ").append(d("span").addClass("smalltext").text(p.lastEditMessage))}w&&
!i.isDisplayed(["heartBeat"])&&l.html().trim()!==""&&i.handleMessage("heartBeat",{type:"info",message:d.format("This page is also being edited by {0}. Your changes will be merged with theirs when you save.","<span id='reliable-other-users-span'>"+l.html()+"</span>")});d.isVisible("#heartbeat-div")||Q.publish("rte.notification.concurrent-editing",{numEditors:k,pageId:d.params.pageId,draftType:d.params.draftType})}w&&k<=1&&i.closeMessages(["heartBeat"]);d.setVisible("#heartbeat-div",k>1);b(m).trigger("resize.resizeplugin");j.trigger("editor-heartbeat",e);e=e.editMode;
if(e!==f.get("edit-mode")&&!(e==="collaborative"&&f.get("edit-mode")!=="limited")){f.set("edit-mode",e);e=e==="collaborative"?"Collaborative editing was switched off, but it\'s back in business. Copy your changes and refresh the page to keep editing.":"Collaborative editing is offline right now. Copy your work, then refresh the page to continue editing.";t({messageKey:"edit-mode-transition",message:e,disablePublish:true})}}}).fail(function(a,b,g){(a.status>=500||a.status===0)&&c.heartbeatType.recovery();if(a.status===403||a.status===401)d.logError("Heartbeat error: Unauthorized");else{d.logError("Server error on heartbeat request:");
d.log(g)}j.trigger("rte.heartbeat-error",a)})},heartbeatType:{normal:function(){L(z)},recovery:function(){L(O)},reset:function(){h&&h.clear();h=z;h.start(c.heartbeat)},cleanup:function(){if(h){h.clear();h=null}s&&s.abort&&s.abort()}},disableFrame:function(a){b("form",a).each(function(){b(this).unbind();this.onsubmit=function(){return false}});b("a",a).each(function(){b(this).attr("target","_top").unbind()});b("input, img",a).each(function(){b(this).unbind()})},previewFrameOnload:function(a,g){var e=
require("tinymce");c.setMode(c.MODE_PREVIEW);e.activeEditor.setProgressState(false);c.disableFrame(a);var i=b("#main",a)[0];if(f.get("content-type")!=="comment"&&b(i).find("#main-header").length===0){var h=b("#title-heading"),j=h.attr("class");b(i).prepend('<div id="preview-header"><div id="title-heading" class="'+j+'">'+h.html()+"</div></div>")}if(b(d.Rte.getEditor().getBody()).hasClass("resizable")){var p=b(g||"#previewArea iframe"),k=0,n=0,o,q=p.height();i&&function X(){var a=b(i).outerHeight(true);
if(k!==a){a!==p.height()&&p.height(0).height(Math.max(a,q));k=a;n=0}else n++;n<500&&(o=setTimeout(X,500))}();b(m).one("mode-changed.resize-editor",function(a,b){b!==c.MODE_PREVIEW&&o&&clearTimeout(o)})}else if(e.isIE||e.isOpera){e=b(u).height();h=b("#header-precursor").height()+b("#header").height()+b("#editor-precursor").height();j=b("#savebar-container").height();b("#preview iframe").height(e-h-j-4);b("#content.edit").height("auto")}},showRichText:function(a){var g=require("tinymce");d.setVisible("#wysiwyg",
a);b(".toolbar-group-preview").toggleClass("assistive",!a);b(".toolbar-group-edit").toggleClass("assistive",a);b("#main").toggleClass("active-richtext",a);g.isGecko&&a&&d.Rte.fixEditorFocus(c.bookmark)},showPreview:function(a){if(f.get("content-type")!=="comment"){var c=b("#content-title");if(c.hasClass("placeholded")){b("#preview-title-text").text("");b("#title-text").text("")}else{b("#preview-title-text").text(c.val());b("#title-text").text(c.val())}}d.setVisible("#preview",a);b(".toolbar-group-preview").toggleClass("assistive",
a);b(".toolbar-group-edit").toggleClass("assistive",!a);b("#main").toggleClass("active-preview",a);b("#full-height-container").length&&b("#full-height-container").toggleClass("active-preview",a)},showSource:function(a){a?this.showSourceArea():this.hideSourceArea();b("#main")[a?"addClass":"removeClass"]("active-source")},setMode:function(a){d.debug("Set mode: "+a);if(a===c.MODE_RICHTEXT){this.showRichText(true);this.showPreview(false);this.showSource(false)}else if(a===c.MODE_SOURCE){this.showSource(true);
this.showRichText(false);this.showPreview(false)}else if(a===c.MODE_PREVIEW){this.showPreview(true);this.showRichText(false);this.showSource(false);c.UI.spinner.removeClass("aui-icon-wait")}setTimeout(function(){var a=b(".toolbar-group-preview");a.height(0);a.height();a.height("auto")},1);this.currentEditMode=a;b(m).trigger("mode-changed",[a])},getContentId:function(){return v()},addErrorMessage:function(a,c,e){var f=b("#"+a),e=e?"#all-messages":"#editor-messages";f.length?f.empty():f=b("<div></div>").attr("id",
a).appendTo(e);d.messages.error(f,{closeable:true,body:c})},changeMode:function(a,g){var e=require("tinymce");d.debug("Change mode: "+a);g=g||{};if(this.inRichTextMode()&&!d.Rte.BootstrapManager.isInitComplete()||this.currentEditMode===a)return false;var h=this.currentEditMode;j.trigger("rte-changeMode",a);if(a===c.MODE_PREVIEW){var l=d.Rte.getEditor();h===c.MODE_SOURCE&&c.transferSourceToEditor();if(e.isGecko&&h===c.MODE_RICHTEXT&&!c.bookmark)c.bookmark=e.activeEditor.selection.getBookmark();this.currentEditMode=
a;e=function(a){if(typeof a!=="object"||!c.Drafts.isSharedDraftsEnabled())a={draftId:v()};a={contentId:a.draftId,contentType:f.get("content-type"),spaceKey:f.get("space-key"),xHtml:l.getContent(),outputType:c.PREVIEW_OUTPUT_TYPE};d.safe.ajax({type:"POST",url:n.CONTEXT_PATH+"/pages/rendercontent.action",data:a,success:c.replysetPreviewArea,timeout:2E4,error:function(){j.trigger("rte.preview.error",{status:0});i.closeMessages(["server-offline"]);t({messageKey:"server-offline",message:"Can\'t reach the server. Check you\'re connected to the internet and Confluence is up and running.",
disablePublish:false});c.currentEditMode=h;g.errorCallback&&g.errorCallback()}})};f.get("content-type")==="comment"?e():c.Drafts.save({forceSave:true,onSuccessHandler:e,onErrorHandler:e})}else this.setMode(a);a===c.MODE_RICHTEXT&&b(m).trigger("resize.resizeplugin");if(h===c.MODE_PREVIEW)if(e=m.getElementById("editor-preview-iframe")){var k=e.contentDocument||e.contentWindow.document;k.removeChild(k.documentElement);b(e).remove()}return false},replysetPreviewArea:function(a){var g=require("tinymce");
b("#preview-error").remove();g.activeEditor.setProgressState(true);var g=b("#previewArea"),e=b('<iframe id="editor-preview-iframe" src="about:blank" scrolling="yes" frameborder="0"></iframe>');g.html(e);g=e[0].contentDocument||e[0].contentWindow.document;g.open();g.write(a);g.close();!c.Drafts.isSharedDraftsEnabled()&&(f.get("content-type")!=="comment"&&f.get("draft-id")>0&&f.get("page-id")==="0")&&i.handleMessage("sharedDraftDisabledWarning",{type:"info",close:"auto",message:"Preview of dynamic macro on draft is only fully supported when shared drafts enabled."})},
inRichTextMode:function(){return this.currentEditMode===c.MODE_RICHTEXT},isNewPage:function(){return b("#createpageform, #createpagetemplate").length>0},onInit:function(){var a=require("tinymce");c.setMode(c.MODE_RICHTEXT);a.activeEditor.onClick.add(function(){var a=c.UI.postingDatePicker;a&&a.hide()})},contentChangeHandler:function(){this.contentHasChangedSinceLastSave=true},getCurrentForm:function(){return require("tinymce").activeEditor.formElement},transferSourceToEditor:function(){if(c.sourceInitialValue){var a=
c.getSourceAreaVal();if(a!==c.sourceInitialValue){var b=require("tinymce").activeEditor;b.setContent(a);b.setDirty(a)}}c.sourceInitialValue=false},hideSourceArea:function(){b("#editor-html-source-container").addClass("hidden");this.setToolBarInactive(false);this.transferSourceToEditor();b("#rte-button-source-mode").removeClass("active");b("#rte-button-publish").unbind("click.source-save")},showSourceArea:function(){var a=require("tinymce");b("#editor-html-source-container").removeClass("hidden");
this.setSourceAreaHeight();this.setToolBarInactive(true);this.sourceInitialValue=a.activeEditor.getContent();this.setSourceAreaVal(this.sourceInitialValue);b("#rte-button-source-mode").addClass("active");b("#rte-button-publish").bind("click.source-save",c.transferSourceToEditor)},getSourceAreaVal:function(){return b("#editor-html-source").val()},setSourceAreaVal:function(a){b("#editor-html-source").val(a)},setSourceAreaHeight:function(){var a=d.Rte.getTinyMceEditorMinHeight();d.debug("HTML source height= "+
a);var c=b("#editor-html-source")[0].scrollHeight;if(c>a){a=c;d.debug("ACTUAL HEIGHT "+c)}b("#editor-html-source-container").height(a+"px")},setToolBarInactive:function(a){b("#rte-toolbar").toggleClass("disabled",a)},isVisible:function(){return b("#wysiwyg:visible").length>0||b("#editor-html-source-container:visible").length>0||b("#preview:visible").length>0}}});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor",function(d){var b=require("jquery"),m=require("ajs"),u=require("confluence/api/event");Confluence.Editor=b.extend(Confluence.Editor||{},d);m.toInit(function(){u.bind("init.rte",Confluence.Editor.onInit)});m.Editor=Confluence.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-ui.js' */
define("confluence-editor/editor/page-editor-ui","jquery confluence/templates ajs confluence/meta window moment document confluence/api/constants confluence-editor/editor/page-editor-message confluence-editor/editor/page-editor-quit-dialog confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/editor-notifications".split(" "),function(b,f,e,d,k,r,g,u,v,l,m,c,s){return function(){var a={},i=function(c,b){for(var b=b||a.buttons,n=0;n<b.length;n++)o(c,b[n])},o=function(a,
b){if(b)if(a){b.removeAttr("aria-disabled");b.removeAttr("disabled");b.removeClass("disabled")}else{b.attr("aria-disabled","true");b.attr("disabled","disabled");b.addClass("disabled")}},p=function(a){return a.length&&a.attr("aria-disabled")!=="true"},h=function(){return d.get("new-page")},q=function(){var a="";h()||(a="Edit"+" - ");return a};a.spinner=b("#rte-spinner");var j;j=f.Editor.Page.saveButton({contentType:d.get("content-type"),sharedDraftsEnabled:d.getBoolean("shared-drafts"),
isNewPage:h()});b("#rte-button-publish").replaceWith(j);j=b("#rte-button-publish");a.saveButton=j;a.overwriteButton=b("#rte-button-overwrite");a.editButton=b("#rte-button-edit");a.previewButton=b("#rte-button-preview");a.cancelButton=b("#rte-button-cancel");a.versionCommentInput=b("#versionComment");a.watchPageCheckbox=b("#watchPage");a.watchPageToolbarGroup=b(".toolbar-group-watch-page");a.buttons=[a.saveButton,a.overwriteButton,a.editButton,a.previewButton,a.cancelButton];e.bind("editor-shared-drafts-published",
function(){var b=/\(.+\)/g.exec(a.saveButton.data("tooltip"))[0];a.saveButton.text(f.Editor.Page.saveButtonText({contentType:d.get("content-type"),sharedDraftsEnabled:d.getBoolean("shared-drafts"),isNewPage:h()})).attr("title",f.Editor.Page.saveButtonTitle({contentType:d.get("content-type"),sharedDraftsEnabled:d.getBoolean("shared-drafts"),isNewPage:h()})+b).tooltip({gravity:"s"})});a.setButtonsState=i;a.setButtonState=o;a.isButtonEnabled=p;a.registerFormButton=function(b,c){a[b]=c;a.buttons.push(c)};
a.postingDatePicker=null;a.isFormEnabled=function(){for(var b=0;b<a.buttons.length;b++)if(p(a.buttons[b]))return true;return false};a.toggleSavebarBusy=function(b){if(b){if(!a.isFormEnabled())return false;a.spinner.addClass("aui-icon-wait");i(false)}else{a.spinner.removeClass("aui-icon-wait");i(true)}return true};a.init=function(){l.init();c.addSaveHandler(function(b){if(a.isButtonEnabled(a.saveButton)){a.toggleSavebarBusy(true);e.trigger("confluence.editor.on.save")}else{b.stopImmediatePropagation();
b.preventDefault()}});e.trigger("rte.init.ui");c.isNewPage()&&b("#content-title").focus().select();c.addCancelHandler(function(a){c.getNumConcurrentEditors()>1&&m.publish("rte.notification.concurrent-editing.cancel",{numEditors:c.getNumConcurrentEditors(),pageId:e.params.pageId,draftType:e.params.draftType});b("#rte-button-overwrite").length&&m.publish("confluence.editor.legacy.draft.conflict",{action:"clickClose"});l.process(a)});d.get("content-type")==="comment"&&c.addSaveHandler(function(){if(e.Rte.Content.isEmpty()){s.notify("warning",
"Comment text is empty. Cannot create empty comments.");a.toggleSavebarBusy(false);return false}});(d.get("content-type")==="comment"||d.get("content-type")==="template")&&c.addCancelHandler(function(b){if(a.isFormEnabled()&&c.hasContentChanged()&&!c.isEmpty()){var t=d.get("content-type")==="comment"?"Your comment will be lost.":"Your unsaved template changes will be lost.";if(!k.confirm(t)){b.stopImmediatePropagation();return false}}});a.versionCommentInput.on("keypress",function(a){a.keyCode===13&&l.process(a)});
c.addSaveHandler(function(){c.getNumConcurrentEditors()>1&&m.publish("rte.notification.concurrent-editing.save",{numEditors:c.getNumConcurrentEditors(),pageId:e.params.pageId,draftType:e.params.draftType})});c.addSubmitHandler(function(a){return c.contentFormSubmit(a)});this.currentEditMode=this.MODE_RICHTEXT;a.editButton.click(function(b){var d=require("tinymce");if(a.isFormEnabled()){c.changeMode(c.MODE_RICHTEXT);setTimeout(function(){e.Rte.getEditor().focus();d.isGecko&&c.bookmark&&e.Rte.getEditor().selection.moveToBookmark(c.bookmark)},
0);a.cancelButton.enable()}b.preventDefault()});a.previewButton.click(function(b){var d=require("tinymce");if(a.isFormEnabled()&&c.currentEditMode!==c.MODE_PREVIEW){i(false);a.spinner.addClass("aui-icon-wait");if(d.isGecko&&!c.bookmark)c.bookmark=d.activeEditor.selection.getBookmark();c.changeMode(c.MODE_PREVIEW,{errorCallback:function(){i(true);a.spinner.removeClass("aui-icon-wait")}});a.cancelButton.disable()}b.preventDefault()});b("#editor-html-source").change(c.setSourceAreaHeight).keyup(c.setSourceAreaHeight);
b("#rte-button-labels").bind("updateLabel",function(){var a=+d.get("num-labels")||0,c="Labels";a===1?c=e.format("{0} Label",a):a>1&&(c=e.format("{0} Labels",a));b("#rte-button-labels").attr("data-tooltip",c)});var f=b("#PostingDate");if(f.length){f.attr("max",r().format("YYYY-MM-DD"));a.postingDatePicker=f.datePicker({overrideBrowserDefault:true});a.postingDatePicker.hide()}b("#wysiwygTextarea_parent .mceProgress, #wysiwygTextarea_parent .mceBlocker").on("click",
function(){e.Rte.getEditor().focus()});b(k).bind("render-content-loaded",function(d,e){var f=b("#previewArea iframe");if(f.contents().find("body")[0]==e){c.previewFrameOnload(e,f);[a.saveButton,a.overwriteButton,a.editButton,a.previewButton].forEach(function(a){o(true,a)});f.focus();k.focus();b(g).trigger("iframeAppended",f)}});if(d.get("heartbeat")){c.heartbeat();c.heartbeatType.normal();e.bind("rte-destroyed",c.heartbeatType.cleanup)}e.bind("watchpage.pageoperation",function(){a.toggleWatchPage(false)});
e.bind("unwatchpage.pageoperation",function(){a.toggleWatchPage(true)});if(d.get("new-page")&&d.get("form-name")==="inlinecommentform")g.title="Edit"+g.title;var h=g.title;if(d.get("new-page")&&b.trim(b("input#content-title").val()))g.title=q()+b("input#content-title").val()+" - "+d.get("space-name")+" - "+d.get("site-title");b("input#content-title").on("change input",function(){if(d.get("content-type")!=="template"){var a=q();g.title=b.trim(this.value)?a+this.value+" - "+d.get("space-name")+
" - "+d.get("site-title"):h}});e.trigger("init.rte-control")};a.toggleWatchPage=function(b){if(b&&d.get("content-type")==="comment"){a.watchPageToolbarGroup.show();if(a.watchPageCheckbox.length)a.watchPageCheckbox[0].checked=false}else a.watchPageToolbarGroup.hide()};return a}});require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-ui",function(b){require("ajs").bind("init.rte",function(){var f=b();Confluence.Editor.UI=f;f.init()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'tinymce3/plugins/insertwiki/insert-wiki-markup.soy' */
// This file was automatically generated from insert-wiki-markup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.InsertWiki.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.InsertWiki == 'undefined') { Confluence.Templates.InsertWiki = {}; }


Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><textarea class=\'monospaceInput textarea originalDefault\' id=\'insert-wiki-textarea\' name=\'wikitext\'/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog';
}


Confluence.Templates.InsertWiki.previewWikiIframeContent = function(opt_data, opt_ignored) {
  return '<!DOCTYPE html><html class="insert-wiki-markup-dialog"><head></head><body class="wiki-content previewWiki"></body></html>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.previewWikiIframeContent.soyTemplateName = 'Confluence.Templates.InsertWiki.previewWikiIframeContent';
}


Confluence.Templates.InsertWiki.wikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<p id="insert-wiki-info-title">' + soy.$$escapeHtml('Enter wiki markup or markdown below. Confluence will convert your content to editor format and insert it into your page.') + '</p><form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><h3 class="wiki-title"><span id="insert-wiki-insert-title">' + soy.$$escapeHtml('Insert') + '</span><span id="insert-wiki-preview-title">' + soy.$$escapeHtml('Preview') + '</span></h3><textarea class=\'monospaceInput textarea\' id=\'insert-wiki-textarea\' name=\'wikitext\'/><!-- --><div class=\'example-container\' id=\'insert-wiki-textarea-preview\'></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiMarkupDialog';
}


Confluence.Templates.InsertWiki.wikiErrorSubDialog = function(opt_data, opt_ignored) {
  return '<p class=\'warning\'>' + soy.$$escapeHtml(opt_data.warningMessage) + '</p><p class=\'exception-report\'><span class=\'exceptionMessage\'>' + soy.$$escapeHtml(opt_data.exceptionMessage) + '</span></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiErrorSubDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiErrorSubDialog';
}


Confluence.Templates.InsertWiki.wikiParserSelector = function(opt_data, opt_ignored) {
  var output = '<span class="wiki-parser-selector"><form action="#" method="post" id="d" class="aui"><select class="select medium-field" id="wiki-parser-selection-tool" name="wiki-parser-selection-tool" title="wiki parser selector"><option value="' + soy.$$escapeHtml(opt_data.DEFAULT.val) + '">' + soy.$$escapeHtml(opt_data.DEFAULT.label) + '</option>';
  var wikiLangList26 = soy.$$getMapKeys(opt_data.WIKI);
  var wikiLangListLen26 = wikiLangList26.length;
  for (var wikiLangIndex26 = 0; wikiLangIndex26 < wikiLangListLen26; wikiLangIndex26++) {
    var wikiLangData26 = wikiLangList26[wikiLangIndex26];
    output += (opt_data.WIKI[wikiLangData26].val != opt_data.DEFAULT.val) ? '<option value="' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].val) + '">' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].label) + '</option>' : '';
  }
  output += '</select></form></span>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiParserSelector.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiParserSelector';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.soy' */
// This file was automatically generated from page-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Page.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Page == 'undefined') { Confluence.Templates.Editor.Page = {}; }


Confluence.Templates.Editor.Page.saveButton = function(opt_data, opt_ignored) {
  return '<button id="rte-button-publish" class="aui-button aui-button-primary default-submit" type="submit" name="confirm" value="Save" title="' + Confluence.Templates.Editor.Page.saveButtonTitle(opt_data) + '" tabindex="101">' + Confluence.Templates.Editor.Page.saveButtonText(opt_data) + '</button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButton.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButton';
}


Confluence.Templates.Editor.Page.saveButtonTitle = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish your blog post') : (opt_data.contentType == 'page') ? (opt_data.sharedDraftsEnabled) ? (opt_data.isNewPage) ? soy.$$escapeHtml('Publish changes') : soy.$$escapeHtml('Update published page') : soy.$$escapeHtml('Save your page') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonTitle.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonTitle';
}


Confluence.Templates.Editor.Page.saveButtonText = function(opt_data, opt_ignored) {
  return '' + ((opt_data.sharedDraftsEnabled && (opt_data.contentType == 'blogpost' || opt_data.contentType == 'page')) ? (opt_data.isNewPage) ? soy.$$escapeHtml('Publish') : soy.$$escapeHtml('Update') : (opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonText.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonText';
}


Confluence.Templates.Editor.Page.cancelButton = function(opt_data, opt_ignored) {
  return '' + ((opt_data.sharedDraftsEnabled && (opt_data.contentType == 'page' || opt_data.contentType == 'blogpost')) ? '<ul class="aui-buttons rte-toolbar-group-done close"><button class="aui-button shared-drafts" type="submit" id="rte-button-cancel" name="cancel" value="cancel"><span class="icon aui-icon aui-icon-small aui-iconfont-close-dialog"></span></button></ul>' : '<button class="toolbar-item-link aui-button aui-button-link" type="submit" id="rte-button-cancel" name="cancel" value="cancel"><span class="trigger-text">' + ((opt_data.contentType == 'page' || opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Close') : soy.$$escapeHtml('Cancel')) + '</span></button>');
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.cancelButton.soyTemplateName = 'Confluence.Templates.Editor.Page.cancelButton';
}


Confluence.Templates.Editor.Page.quitDialogHeader = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'exit':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Close the editor') + '</h2>';
      break;
    case 'publish':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Publish all changes?') + '</h2>';
      break;
    case 'diff':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Unpublished changes') + '</h2>';
      break;
  }
  output += '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogHeader.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogHeader';
}


Confluence.Templates.Editor.Page.quitDialogContent = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'exit':
      output += (opt_data.contributors.length == 0) ? soy.$$filterNoAutoescape('\x3cp\x3eYou\x27ve made changes that haven\x27t been published yet.\x3c/p\x3e\x3cp\x3eIf you discard changes, your unpublished changes will be deleted. You can\x27t undo this action.\x3c/p\x3e') : soy.$$filterNoAutoescape('\x3cp\x3eThere are changes made by you and other people that haven\x27t been published yet.\x3c/p\x3e\x3cp\x3eIf you discard changes, you\x27ll delete changes made by the following people, and revert to the last published version of this page. They won\x27t be able to recover their work if you do this.\x3c/p\x3e \x3cp\x3eThese people have made changes:\x3c/p\x3e') + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'publish':
      output += soy.$$filterNoAutoescape('\x3cp\x3eThere are changes made by you and other people that haven\x27t been published yet.\x3c/p\x3e\x3cp\x3eThese people have made changes:\x3c/p\x3e') + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'diff':
      output += '<div><div class="legend"><span class="legend-title">' + soy.$$escapeHtml('Key') + ': </span><span class="diff-html-added">' + soy.$$escapeHtml('This line was added.') + '</span><span class="diff-html-removed">' + soy.$$escapeHtml('This line was removed.') + '</span><span class="diff-html-changed">' + soy.$$escapeHtml('Formatting was changed.') + '</span></div><hr/><div class="wiki-content"></div></div>';
      break;
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogContent.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogContent';
}


Confluence.Templates.Editor.Page.hiddenInputCancel = function(opt_data, opt_ignored) {
  return '<input type="hidden" name="cancel" value="cancel">';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.hiddenInputCancel.soyTemplateName = 'Confluence.Templates.Editor.Page.hiddenInputCancel';
}


Confluence.Templates.Editor.Page.contributorList = function(opt_data, opt_ignored) {
  var output = '<ul class="contributor-list">';
  var contributorList102 = opt_data.contributors;
  var contributorListLen102 = contributorList102.length;
  for (var contributorIndex102 = 0; contributorIndex102 < contributorListLen102; contributorIndex102++) {
    var contributorData102 = contributorList102[contributorIndex102];
    output += '<li><div class="contributor-avatar"><img src="' + soy.$$escapeHtml(contributorData102.avatarURL) + '"></div><div class="contributor-name"><span>' + soy.$$escapeHtml(contributorData102.fullname) + '</span></div></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.contributorList.soyTemplateName = 'Confluence.Templates.Editor.Page.contributorList';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'insert-image-dialog/insert-image-dialog.js' */
define("confluence-editor/insert-image-dialog/insert-image-dialog","jquery ajs underscore confluence-link-browser/link-object confluence-link-browser/link-adapter confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(c,f,i,j,k,g){var e={beforeShowListeners:[],panelComponent:[],sizeToFit:function(){this.each(function(){var a=this,b=c(this).parent(),d=b.height();b.children().each(function(){this!==a&&c(this).is(":visible")&&(d=d-c(this).outerHeight())});b=c(this).outerHeight()-c(this).height();
c(this).css("height",Math.max(0,d-b)+"px")});return this},defaultInsertImageDialog:function(){f.Rte.BookmarkManager.storeBookmark();e.insertImageDialog(function(a){var b=require("tinymce");f.Rte.BookmarkManager.restoreBookmark();var d={};if(a.url){d={url:a.url,filename:a.url,contentId:a.contentId};b.confluence.ImageUtils.insertFromProperties(d)}else{var h=true,g=a.selectItems.length>1;i.each(a.selectItems,function(a){if(a.isImage()){d={filename:a.getFileName(),contentId:a.get("ownerId")};b.confluence.ImageUtils.insertFromProperties(d,
g)}else{h=false;f.MacroBrowser.getMacroMetadata("view-file")?e._insertFilePlaceholderToEditor(a):e._insertLinkToEditor(a)}});require(["conf/confluence-drag-and-drop/analytics/files-upload-analytics"],function(b){b.triggerEvent("confluence.insert-files-dialog.insert",a.selectItems,h)})}c("#comments-section").length&&f.Rte.fixEditorFocus()},function(){f.Rte.BookmarkManager.restoreBookmark()})},findPanelComponentById:function(a){for(var b=g.ImageDialog.panelComponent,d=0,c=b.length;d<c;d++)if(b[d].id==
a)return b[d]},insertImageDialog:function(a,b){var d=new g.FileDialog.FileDialogView({submitCallback:a,cancelCallback:b,beforeShowListeners:e.beforeShowListeners,panelComponents:e.panelComponent});d.render();return d},_insertLinkToEditor:function(a){var b=j.fromREST(a.attributes);b.attrs["data-linked-resource-container-id"]=a.get("ownerId");b.attrs.href=a.get("downloadUrl");k.setLink(b)},_insertFilePlaceholderToEditor:function(a){var b={name:a.get("fileName"),page:a.get("parentTitle"),space:a.get("space")?
a.get("space").key:"",date:a.get("datePath"),ownerId:a.get("ownerId")};require(["confluence-editor/utils/attachments-insert-utils"],function(a){a.insertFilePlaceholder(b)})}};return e});
require("confluence/module-exporter").safeRequire("confluence-editor/insert-image-dialog/insert-image-dialog",function(c){require("jquery").fn.sizeToFit=c.sizeToFit;Confluence.Editor.ImageDialog=c;Confluence.Editor.defaultInsertImageDialog=c.defaultInsertImageDialog;Confluence.Editor.ImageDialog.findPanelComponentById=c.findPanelComponentById;Confluence.Editor.insertImageDialog=c.insertImageDialog;Confluence.Editor.ImageDialog._insertLinkToEditor=c._insertLinkToEditor;Confluence.Editor.ImageDialog._insertFilePlaceholderToEditor=
c._insertFilePlaceholderToEditor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'panel-components/panel-components-init.js' */
define("confluence-editor/panel-components/panel-components-init",["confluence/legacy-editor-global-AVOID-IF-POSSIBLE","ajs"],function(a,d){return function(){if(a&&a.ImageDialog&&a.ImageDialog.panelComponent){var b=a.FileDialog.eventListener,e=a.FileDialog.ExternalPanelView,f=a.FileDialog.SearchPanelView,g=a.FileDialog.AttachmentsPanelView,c=a.ImageDialog.panelComponent;"template"!==d.Meta.get("content-type")&&(b=new g({eventListener:b}),c.push(b));c.push(new e);c.push(new f)}}});
require("confluence/module-exporter").safeRequire("confluence-editor/panel-components/panel-components-init",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'drafts/page-editor-drafts.js' */
define("confluence-editor/page-editor-drafts","jquery ajs confluence/meta confluence/api/constants confluence-editor/editor/page-editor-message confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/api/event confluence/dark-features confluence/api/ajax".split(" "),function(f,d,e,o,u,r,b,l,s,v){function t(){var a=p();if(i!==a){i=a;return true}return false}function p(){var a=f("#content-title");return a.hasClass("placeholded")?"":a.val()}var q=false,n=false,h=false,
i="",w=e.get("remote-user")!=="",x=s.isEnabled("editor.ajax.save")&&!s.isEnabled("editor.ajax.save.disable"),k=function(a,c,b){f("<input>").attr({type:"hidden",name:a,value:c}).appendTo(b)},m=function(){return e.getBoolean("shared-drafts")};l.bind("editor-shared-drafts-published editor-shared-drafts-discarded",function(){n=q=false});l.bind("rte-ready",function(){i=p()});return{isDraftSaved:function(){return q},isDraftManuallySaved:function(){return n},isDraftBlank:function(){return d.Rte.Content.isEmpty()&&
!f.trim(b.getCurrentTitle())},isNewContent:function(){return d.Rte.getEditor()&&e.getBoolean("new-page")===true},isDraftDirty:function(){return b.hasContentChanged()||b.Drafts.isDraftSaved()&&!b.Drafts.isDraftManuallySaved()},unloadMessage:function(a){if(a&&(a.srcElement&&a.srcElement.activeElement instanceof HTMLIFrameElement)&&(e.get("content-type")==="page"||e.get("content-type")==="blogpost")){f("#rte-button-overwrite").length&&r.publish("confluence.editor.legacy.draft.conflict",{action:"closeWindow"});
r.publish("confluence.editor.close",{source:"closeWindow"})}a=function(a,d){b.Drafts.isDraftBlank()&&!m()?b.Drafts.discardDraft(e.get("draft-id")):b.Drafts.save({skipErrorHandler:true,forceSave:a,manualSave:d,async:false})};if(typeof seleniumAlert!=="undefined")a();else if(b.isLimitedModeEnabled()||!m()){if(b.Drafts.isDraftDirty()){a(true,false);return "A draft will be saved. You can resume editing this draft the next time you open the editor or view all your drafts in your profile."}t()&&a(true,true)}else{a(t());if(h)return "We haven\'t finished saving your changes. If you leave before seeing the \'Draft saved\' message, you might lose your changes."}},hasPendingChanges:function(){return h},
isSharedDraftsEnabled:m,bindUnloadMessage:function(){if(!b.isLimitedModeEnabled()&&m()){l.bind("synchrony.entity.ack",function(a,b){b.pendingChanges||(h=false)});l.bind("editor.local.change",function(){h=true})}f(window).bind("beforeunload",b.Drafts.unloadMessage)},unBindUnloadMessage:function(){f(window).unbind("beforeunload")},useDraft:function(){var a=e.get("existing-draft-id");b.Drafts.unBindUnloadMessage();var c=b.getCurrentForm();k("useDraft","true",c);k("contentChanged",""+b.hasContentChanged(),
c);k("pageId",d.params.pageId,c);f("#draftId",b.getCurrentForm()).val(a);c.spaceKey||k("spaceKey",e.get("space-key"),c);c.action=o.CONTEXT_PATH+"/pages/"+(d.params.newPage?"create":"edit")+d.params.draftType+".action";c.submit()},discardDraft:function(a){return v.ajax({url:o.CONTEXT_PATH+"/json/deletedraft.action",type:"GET",dataType:"json",data:{draftId:a},success:function(a){if(a.actionErrors){for(var b=["<ul>"],a=a.actionErrors,e=0;e<a.length;e++){d.log("error: "+a[e]);b.push("<li>"+a[e]+"</li>")}b.push("</ul>");
d.messages.error("#editor-messages",{title:"Error",body:"There were errors discarding your draft: "+b.join("\n")})}else{f("#draft-messages").remove();d.messages.success("#editor-messages",{body:"Your draft has been discarded."})}},error:function(a){d.messages.error({title:"Error",body:a.errors||"An unknown error has occurred. Please check your logs."})}})},save:function(a){a=a||{};if(b.isSubmitting||!b.hasContentChanged()&&!a.forceSave)d.debug("skipping draft save");else{d.debug("preparing to save editor draft");
var c=f("#newSpaceKey"),h=f("#originalVersion"),k=b.inRichTextMode(),i=a.async===void 0?true:a.async,c={draftId:e.get("draft-id"),pageId:e.get("page-id"),type:d.params.draftType,syncRev:f("#syncRev").val(),title:p(),spaceKey:c.length?c.val():encodeURIComponent(e.get("space-key")),content:d.Rte.getEditor().getContent()};if(h.length)c.pageVersion=parseInt(h.val(),10);f.ajax({type:"POST",url:o.CONTEXT_PATH+"/rest/tinymce/1/drafts",data:f.toJSON(c),contentType:"application/json",dataType:"text json",
success:function(c){if(c!=null&&(!(w&&c.draftId===0)||!x)){b.contentHasChangedSinceLastSave=false;k&&d.Rte.Content.editorResetContentChanged();q=true;n=!!a.manualSave;e.set("draft-id",c.draftId+"");f("#draftId",b.getCurrentForm()).val(c.draftId);f("#draft-error").remove();if(!e.get("collaborative-content")){var h=f("#draft-status"),g;if(!(g=c.time)){var j=new Date;g=j.getHours();var j=j.getMinutes(),i=g>11?"PM":"AM";g=g%12;g=(g==0?"12":g)+":"+(j<10?"0":"")+j+" "+i}j=n?d.format("Draft saved at {0}",
g):d.format("Draft autosaved at {0}",g);i=d.params.newPage?j:"<a id='view-diff-link-heartbeat' class='view-diff-link' href='#'>"+j+"</a>";h.attr("data-tooltip",j);h.html(i)}if(f.isFunction(a.onSuccessHandler))a.onSuccessHandler(c);b.Drafts.lastSaveTime=g;l.trigger("rte-draft-saved",{draftId:c.draftId})}},error:function(c,e){if(!a.skipErrorHandler)if(m()){if(typeof a!=="undefined"&&typeof a.onErrorHandler==="function")a.onErrorHandler(e)}else{var g=function(){b.addErrorMessage("draft-error",
b.Drafts.lastSaveTime?d.format("Error saving draft. Last draft saved at {0}",b.Drafts.lastSaveTime):"Error saving draft. No draft has been saved.",true)};c.status===400?c.responseText.indexOf("Legacy drafts deprecated")>=0?u.handleMessage("legacy-draft-deprecated",{type:"error",message:"Collaborative editing is here! That means we need a little help from you to restart your editing session. All you need to do is copy the content, edit this page again, then paste it in and save."}):g():g();if(f.isFunction(a.onErrorHandler))a.onErrorHandler(e)}},timeout:3E4,async:i})}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/page-editor-drafts","Confluence.Editor.Drafts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-permissions.js' */
define("confluence-editor/editor/page-editor-permissions",["ajs","jquery"],function(b,d){var c={updateEditPageRestrictions:function(c,a,e,g){var f=d("#rte-button-restrictions"),i=f.find(".icon"),h="";c||a?(i.removeClass("aui-iconfont-locked aui-iconfont-unlocked icon-red").addClass(c?"aui-iconfont-locked icon-red":"aui-iconfont-unlocked icon-red"),h="Restrictions apply"):(i.removeClass("aui-iconfont-locked aui-iconfont-unlocked icon-red").addClass("aui-iconfont-unlocked"),h=e?
"Restrictions apply":"Unrestricted");f.attr("data-tooltip",h);f.data("explicit-restrictions",c);f.data("inherited-restrictions",a);f.data("restrictionsHash",g)},handleHeartbeat:function(j,a){if("undefined"!==typeof a.restrictionsHash){var e=d("#rte-button-restrictions");if(e.data("restrictionsHash")!==a.restrictionsHash)if(d("#update-page-restrictions-dialog").is(":visible")&&b.PagePermissions.updateRestrictionsDialog)b.PagePermissions.updateRestrictionsDialog(),
e.data("restrictionsHash",a.restrictionsHash);else{var g=""!==a.restrictionsHash,f=a.hasViewRestrictions,e=!!e.data("inherited-restrictions");c.updateEditPageRestrictions(f,e,g,a.restrictionsHash)}}},init:function(){b.bind("editor-heartbeat",c.handleHeartbeat);b.bind("edit-page-restrictions-updated",function(b,a){c.updateEditPageRestrictions(a.hasExplicitRestrictions,a.hasInheritedRestrictions,a.hasAnyExplicitRestrictions,a.restrictionsHash)})}};return c});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-permissions",function(b){var d=require("ajs"),c=require("jquery");d.PagePermissions=d.PagePermissions||{};c.extend(d.PagePermissions,{updateEditPageRestrictions:b.updateEditPageRestrictions});d.toInit(b.init)});
}catch(e){WRMCB(e)};