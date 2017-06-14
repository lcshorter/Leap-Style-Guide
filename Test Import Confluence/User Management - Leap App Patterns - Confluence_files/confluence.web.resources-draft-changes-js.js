WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = 'includes/soy/draft-changes-dialog.soy' */
// This file was automatically generated from draft-changes-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DraftChanges.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DraftChanges == 'undefined') { Confluence.Templates.DraftChanges = {}; }


Confluence.Templates.DraftChanges.dialogContent = function(opt_data, opt_ignored) {
  return '<div id="draft-changes-dialog" class="hidden"><div id="diff-view" class="wiki-content"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.dialogContent.soyTemplateName = 'Confluence.Templates.DraftChanges.dialogContent';
}


Confluence.Templates.DraftChanges.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Drafts#viewchange"});
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.helpLink.soyTemplateName = 'Confluence.Templates.DraftChanges.helpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = 'includes/js/draft-changes.js' */
define("confluence/draft-changes","jquery ajs window confluence/templates confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(d,a,n,k,i,c){return{init:function(){var b,m=function(b){var c="Are you sure you want to discard these unpublished changes?",f=d("#draft-"+b);if(confirm(c)){var g;if(f.find(".discard-draft-link").data("discard-method")==="rest"){g=a.contextPath()+"/rest/api/content/"+b+"?status=draft";c="DELETE"}else{g=a.contextPath()+"/json/deletedraft.action";
c="GET"}a.safe.ajax({url:g,type:c,data:{draftId:b},contentType:"application/json",dataType:"json",success:function(b){if(b&&b.actionErrors){for(var d=["<ul>"],b=b.actionErrors,c=0;c<b.length;c++){a.log("error: "+b[c]);d.push("<li>"+b[c]+"</li>")}d.push("</ul>");a.messages.error("#errors",{title:"Error",body:"There were errors discarding your draft."+" "+d.join("\n")})}else{d=f.closest("table");b=d.closest(".drafts-container");f.remove();d.find("tbody tr").length===
0&&b.append('<span id="no-drafts-message">'+"No drafts found."+"</span>")}},error:function(b){a.messages.error({title:"There were errors discarding your draft.",body:b.errors||"An unknown error has occurred. Please check your logs."})}});return true}return false};d("body").on("click",".view-diff-link",function(o){var l=this.id,f=d(this);if(!b){var g=l==="view-diff-link-notification";b=new a.Dialog(860,530,"view-diff-draft-dialog");var e="Unpublished Changes for \'{0}\'";b.addHeader(e.replace(/\{0\}/,
""));e=d(k.DraftChanges.dialogContent());b.addPanel("Diff",e);if(g){b.addButton("Edit",function(){b.hide();c&&c.Drafts?c.Drafts.useDraft():n.location=d(this).attr("data-href")},"resume-diff-link");b.addButton("Discard",function(){if(a.DarkFeatures.isEnabled("editor.ajax.save")&&!a.DarkFeatures.isEnabled("editor.ajax.save.disable")&&a.Meta.get("remote-user")!==""){c.SafeSave.Draft.discardDraft(a.params.pageId,a.Meta.get("existing-draft-id")).done(c.SafeSave.Draft.onSuccessDiscardDraft).fail(c.SafeSave.Draft.onErrorDiscardDraft);
b.hide()}else if(c&&c.Drafts){b.hide();c.Drafts.discardDraft(a.Meta.get("existing-draft-id"));i.publish("rte.notification.draft.discard")}else{var p=d(this).data("draftid");m(p)&&b.hide()}},"discard-diff-link")}b.addCancel("Close",function(){b.hide();return false});e.removeClass("hidden")}b.addHeader("Loading");d("#diff-view").html("<tr><td id='draft-changes-waiting-icon'>Loading...</td></tr>");var j,e=f.attr("class"),h=/draftPageId:([^ ]*)/.exec(e),f=h?h[1]:
a.Meta.get("page-id"),g=(h=/username:([^ ]*)/.exec(e))?h[1]:a.Meta.get("remote-user");j=(h=/draftId:([^ ]*)/.exec(e))?h[1]:null;d.ajax({url:a.contextPath()+"/draftchanges/viewdraftchanges.action",type:"GET",dataType:"json",data:{pageId:f,username:g},success:function(c){if(c.actionErrors){for(var e="",c=c.actionErrors,f=0;f<c.length;f++){a.log("error: "+c[f]);e=e+"<div>"+c[f]+"</div>"}d("#diff-view").html(e)}else{d("#diff-view").html(c.htmlDiff);e=a.format("Unpublished Changes for \'\'{0}\'\'",a.escapeHtml(c.title));
b.addHeader(e);b.popup.element.find(".dialog-title").prepend(k.DraftChanges.helpLink());e=a.contextPath();d(".resume-diff-link").attr("data-href",e+"/pages/resumedraft.action?draftId="+j);d(".discard-diff-link").data("draftid",j);a.setVisible("#merge-warning",c.isMergeRequired)}},error:function(a){a=a.errors||"An unknown error has occurred. Please check your logs";d("#diff-view").html(a)}});b.show();a.trigger("analytics",{name:"confluence.editor.view-diff-dialog.open",data:{elementTriggerId:l}});
return a.stopEvent(o)});d(".drafts-by-space").on("click",".discard-draft-link",function(a){a.preventDefault();i.publish("confluence.draft-list.discard");a=d(this).data("draftid");m(a)}).on("click",".resume-draft-link",function(){i.publish("confluence.draft-list.resume")})}}});require("confluence/module-exporter").safeRequire("confluence/draft-changes",function(d){require("ajs").toInit(d.init)});
}catch(e){WRMCB(e)};