WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser', location = 'js/link-browser.js' */
define("confluence-link-browser/link-browser","ajs confluence/templates confluence-editor/atlassian-editor-bookmark-manager confluence-link-browser/link-adapter confluence-link-browser/link-browser-location jquery".split(" "),function(b,s,u,v,w,h){function q(){if(!e.prop("disabled")){e.prop("disabled",true);b.debug("link-browser.js: submit");i.preSubmit&&i.preSubmit();var a=f.getLink();k.hide().remove();n.restoreBookmark();r.setLink(a);b.trigger("closed.link-browser")}}function o(){k.hide().remove();
n.restoreBookmark();b.trigger("closed.link-browser")}function x(a,e,l){var c=e.key,e=e.label,d=c+"-panel",g=s.LinkBrowser[c+"Panel"]({atlToken:b.Meta.get("atl-token")});k.addPanel(e,g,d,d+"-id");var a=k.get("panel:"+a),j=l.tabs[c];j.panelObj=a;j.key=c;j.createPanel({baseElement:h(a[0].body)});a[0].onblur=j.onDeselect;a[0].onselect=function(){var a=!!j.hasBreadcrumbs;b.debug("Link Browser: on tab select, breadcrumbs enabled: "+a);j.onSelect();f.refresh(a);i=j};return j}var k,f,e,i,r,n;return{SEARCH_PANEL:"search",
ATTACHMENTS_PANEL:"attachments",WEBLINK_PANEL:"weblink",ADVANCED_PANEL:"advanced",open:function(a){h(function(){h('.ffi input[type="file"]#file_0').fancyFileInput()});if(h(".aui-dialog:visible").length)return null;a=a||{};r=a.linkAdapter||v;n=a.bookmarkManager||u;n.storeBookmark();a.linkInfo=a.linkInfo||r.getLink();if(a.opener)return a.opener(a.linkInfo.alias,a.linkInfo);var p=a,a={tabs:{},setLink:function(a,b){f.setLink(a,b)},getLink:function(){return f.getLink()},getSelectedDataTableItem:function(){return h(".data-table:visible tr.selected")},
linkValid:function(a){e.prop("disabled",!a)},focusLinkText:function(){if(!f.focusLinkText()){b.debug("LinkBrowser: focusing submit button");e.focus()}},getLinkText:function(){return f.getLinkText()},isLinkTextVisible:function(){return f.isLinkTextVisible()},hasBreadcrumbs:function(a){return f.hasBreadcrumbs(a)},getLocationPresenter:function(){return f},doSearch:function(a){this.tabs.search.doSearch(a)},getSearchTextField:function(){return this.tabs.search.getSearchTextField()},moveLocationPanel:function(a){f.moveLocationPanel(a)},
restoreLocationPanel:function(){f.restoreLocationPanel()},gotoPanel:function(a){this.popup.gotoPanel(a)},getCurrentPanel:function(){return this.popup.getCurrentPanel()},setWebLinkURL:function(a){var c=this.tabs.weblink;i!=c?b.debug("Cannot set URL "+a+" on hidden Web Link panel"):c.setURL(a)},getWebLinkUrl:function(){var a=this.tabs.weblink;if(i!=a){b.debug("Cannot get URL on hidden Web Link panel");return null}return a.getURL()},getTitle:function(){return this.popup.getTitle()},getSubmitButtonText:function(){return e.text()},
isSubmitButtonEnabled:function(){return e.is(":enabled")},isVisible:function(){return this.popup.isVisible()},getAdvancedTextField:function(){var a=this.tabs.advanced;if(i!=a){b.debug("Cannot get link text on hidden advanced panel");return null}return a.getLink()},setAdvancedTextField:function(a){var c=this.tabs.advanced;i!=c?b.debug("Cannot set link text on hidden advanced panel"):c.setLink(a)},submit:q,cancel:o},l=p.linkInfo,c=l.isNewLink(),d,g;d=new b.ConfluenceDialog({width:840,height:590,id:"insert-link-dialog",
onCancel:o,onSubmit:q});g=c?"Insert link":"Edit link";c=c?"Insert":"Save";d.addHeader(g);d.addButton(c,q);d.addCancel("Cancel",o);d.addHelpText("Hint: type \"[\" in the editor to see a list of suggested pages and insert a link.");g=h("#insert-link-dialog .dialog-tip");g.attr("title",g.text());h("#insert-link-dialog .dialog-components .dialog-title").prepend(s.LinkBrowser.helpLink());
e=d.get("button:0")[0].item;e.attr("id","link-browser-insert");e.prop("disabled",true);k=d;a.popup=k;b.trigger("dialog-created.link-browser",[a]);f=w(a);f.setLinkBody(l.body);p=p.panelKey;d=h("#link-browser-tab-items").find("div").map(function(){var a=h(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,b){return a.weight-b.weight});var j=b.Meta.get("content-type")!=="template";d=h.grep(d,function(a){return j||a.key!=="attachments"});var t;g=null;for(var c=
0,y=d.length;c<y;c++){var m=x(c,d[c],a);c===0&&(t=m);if(!l.isNewLink()&&h.isFunction(m.handlesLink)&&m.handlesLink(l)){g=m;m.openedLink=l}else p==m.key&&(g=m)}g?a.popup.overrideLastTab():g=t;i=g;k.popup.element.find(".dialog-page-body:first").append(f.getContainer());i.panelObj.select();i.openedLink=null;k.show();b.trigger("dialog-shown.link-browser",k);return a},cancel:o}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser","Confluence.Editor.LinkBrowser");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser', location = 'templates/link-browser.soy' */
// This file was automatically generated from link-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.helpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Links") + '" target="_blank">' + soy.$$escapeHtml('Help') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.helpLink.soyTemplateName = 'Confluence.Templates.LinkBrowser.helpLink';
}

}catch(e){WRMCB(e)};