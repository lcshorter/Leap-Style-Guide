WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-attachment-resources', location = 'js/link-browser-tab-attachment.js' */
define("confluence-link-browser/link-browser-tab-attachment",["jquery","ajs","confluence-link-browser/link-object","confluence/attachment-uploader","confluence-rest/confluence-rest"],function(h,a,m,n,f){return{dialogCreatedLinkBrowserAttachment:function(o,i){var g=f.REST.makeUrl("content/"+a.Meta.get("attachment-source-content-id")+"/attachments.json"),j,k,l,d;i.tabs.attachments={hasBreadcrumbs:!1,createPanel:function(b,c){var e=b.baseElement.find(".attach-file-form");j=h.extend({getUploaderController:function(){return n({baseElement:e},
function(){return{onUploadSuccess:function(a){for(var b=0,c=a.length;b<c;b++)a[b].type="attachment";d.prependAndSelect(a)}}})}},c&&c(b));k=j.getUploaderController(b);l=k.getMessageHandler();var g=[a.SelectGrid.Column({key:"title",heading:"Name",getHref:function(a){return a.link?f.REST.findLink(a.link):a.url},getInnerClass:function(a){return a.iconClass}}),a.SelectGrid.Column({key:"size",heading:"Size",getText:function(a){return a.niceFileSize}}),
a.SelectGrid.Column({key:"comment",heading:"Comment"})];d=new a.ResultGrid({baseElement:b.baseElement,columns:g,selectionCallback:function(b,c){var d=m.fromREST(c);d.attrs["data-linked-resource-container-id"]=a.Meta.get("content-id");if(h.isArray(c.link))for(var e=0,g=c.link.length;e<g;e++){var f=c.link[e];"download"===f.rel&&(d.attrs.href=f.href)}i.setLink(d);i.focusLinkText()},noResultMessage:"There are no files on this page."})},onSelect:function(){var b=
this.openedLink,c=i.getLink();d.loading();a.getJSONWrap({url:g,messageHandler:l,successCallback:function(e){d.update(e.attachment);c?"attachment"==c.getResourceType()&&d.select(c.getResourceId()):b?d.select(b.getResourceId()):e.attachment.length&&d.select(e.attachment[0].id);a.debug("Loaded attachments")}})},handlesLink:function(b){return b.isToAttachmentOnSamePage(a.Meta.get("content-id"))}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-attachment",function(h){var a=require("ajs");"template"!==a.Meta.get("content-type")&&a.bind("dialog-created.link-browser",h.dialogCreatedLinkBrowserAttachment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-attachment-resources', location = 'templates/link-browser-tab-attachment.soy' */
// This file was automatically generated from link-browser-tab-attachment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.attachmentsPanel = function(opt_data, opt_ignored) {
  return '<div class="attach-file-form"><form method="post" enctype="multipart/form-data" id="attachments-attachfile-form" action="' + soy.$$escapeHtml("/wiki") + '/pages/attachfile.action" class="aui"><p>' + soy.$$escapeHtml('Link to a file that is attached to this page or attach a new one.') + '</p><div class="upload-field field-group"><label for="file_0">' + soy.$$escapeHtml('Upload file') + '</label><label id="fancy-file-upload" class="ffi" data-ffi-button-text="Browse"><input type="file" name="file_0" id="file_0"></label><input type="hidden" name="minorEdit_0" value="true"></div><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.atlToken) + '" /></form><div class="upload-in-progress upload-field hidden">' + soy.$$escapeHtml('Upload in progress\u2026') + '</div><div class="warning"><ul class="hidden message-panel"></ul></div></div><div class="message-panel hidden"></div><div id="attachments-table" class="attachment-list data-table"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.attachmentsPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.attachmentsPanel';
}

}catch(e){WRMCB(e)};