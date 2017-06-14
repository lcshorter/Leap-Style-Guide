WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-history-resources', location = 'js/link-browser-tab-history.js' */
define("confluence-link-browser/link-browser-tab-history",["ajs","confluence-rest/confluence-rest","confluence-link-browser/link-object"],function(b,h,i){return{dialogCreatedLinkBrowserHistory:function(j,d){var e=h.REST.makeUrl("session/history.json?max-results=20"),f,g;d.tabs.recentlyviewed={createPanel:function(c){var e=[b.SelectGrid.Column({key:"title",heading:"Title",getHref:function(a){return h.REST.findLink(a.link)},getInnerClass:function(a){return a.iconClass||
"content-type-"+a.type}}),b.SelectGrid.Column({key:"space",heading:"Space",getText:function(a){return a.space&&a.space.title||""}}),b.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(a){return a.lastModifiedDate&&a.lastModifiedDate.friendly||""},getTitle:function(a){return a.lastModifiedDate&&a.lastModifiedDate.date||""}})];g=b.MessageHandler({baseElement:c.baseElement.find(".message-panel")});
f=new b.ResultGrid({baseElement:c.baseElement,columns:e,getRowId:function(a){return a.attachmentId},selectionCallback:function(a,b){var c=i.fromREST(b);d.setLink(c);d.focusLinkText()},messageHandler:g,noResultMessage:"You have no recently viewed content."})},onSelect:function(){f.loading();b.getJSONWrap({url:e,messageHandler:g,successCallback:function(c){f.update(c.content);b.trigger("updated.link-browser-recently-viewed")}})}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-history",function(b){require("ajs").bind("dialog-created.link-browser",b.dialogCreatedLinkBrowserHistory)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-history-resources', location = 'templates/link-browser-tab-history.soy' */
// This file was automatically generated from link-browser-tab-history.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.recentlyviewedPanel = function(opt_data, opt_ignored) {
  return '<div class="recently-viewed-panel"><div class="message-panel hidden"></div><div class="data-table"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.recentlyviewedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.recentlyviewedPanel';
}

}catch(e){WRMCB(e)};