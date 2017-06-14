WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-search-resources', location = 'js/link-browser-tab-search.js' */
define("confluence-link-browser/link-browser-tab-search","jquery ajs document confluence/page-location confluence-rest/confluence-rest confluence-link-browser/link-object confluence/autocomplete-content".split(" "),function(d,b,o,p,l,m,q){return{dialogCreatedLinkBrowserSearch:function(o,i){var c,e,f,n,r=l.REST.getBaseUrl()+"search.json",j=function(a,b){m.isLink(a)||(a=m.fromREST(a));b&&c.val(a.attrs["data-linked-resource-default-alias"]);i.setLink(a,true);i.focusLinkText()},k=function(a){b.debug("link-browser-tab-search.js: doing search");
c.trigger("hide.autocomplete");var g=d.trim(c.val());if(g){f.loading();b.getJSONWrap({url:r,data:{search:"site",query:g,spaceKey:e.val()},successCallback:function(b){if(d.isFunction(a)){f.update(b.result);a()}else f.updateAndSelect(b.result);c.trigger("hide.autocomplete")},messageHandler:n})}else d.isFunction(a)&&a()};i.tabs.search={hasBreadcrumbs:true,createPanel:function(a){var g=a.baseElement;c=g.find("#link-search-text");e=g.find("#search-panel-space");var h=p.get();e.find("option:eq(1)").text(h.spaceName).val(h.spaceKey);
e.change(function(){c.attr("data-spacekey",e.val());c.trigger("clearCache.autocomplete")});q.autocompleteSearch(c.parent());c.bind("selected.autocomplete-content",function(a,b){if(b.searchFor)k();else{f.clear();j(b.content,false)}});h=[b.SelectGrid.Column({key:"title",heading:"Title",getHref:function(a){return l.REST.findLink(a.link)},getInnerClass:function(a){return a.iconClass||"content-type-"+a.type}}),b.SelectGrid.Column({key:"space",heading:"Space",
getText:function(a){return a.space&&a.space.title||""}}),b.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(a){return a.lastModifiedDate&&a.lastModifiedDate.friendly||""},getTitle:function(a){return a.lastModifiedDate&&a.lastModifiedDate.date||""}})];n=b.MessageHandler({baseElement:a.baseElement.find(".message-panel")});f=new b.ResultGrid({baseElement:a.baseElement,columns:h,selectionCallback:function(a,b){j(b)},noResultMessage:"No search results found.",
dontShiftFocus:function(){return d(c).add(e).is(":focus")}});g.find(".search-form").submit(function(){k();return false}).keydown(function(a){if(a.keyCode===13&&!d(".aui-dropdown:visible .active",this).length){d("#search-panel-button").focus();a.stopPropagation()}})},onSelect:function(){b.debug("Link Browser Search panel selected");var a=this.openedLink;if(a){b.debug("Link Browser Search panel setting link info");j(a,true)}else c.focus()},handlesLink:function(a){return a.isCustomAtlassianContentLink()&&
!a.hasAnchor()&&!a.isShortcutLink()&&!a.isToAttachmentOnSamePage(b.Meta.get("content-id"))},doSearch:function(a,b){c.val(a);k(b)},isResultGridVisible:function(){return f.isVisible()},getSearchTextField:function(){return c}}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-search",function(d){require("ajs").bind("dialog-created.link-browser",d.dialogCreatedLinkBrowserSearch)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-search-resources', location = 'templates/link-browser-tab-search.soy' */
// This file was automatically generated from link-browser-tab-search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.searchPanel = function(opt_data, opt_ignored) {
  return '<form class="aui search-form" onsubmit="return false;"><fieldset class="inline"><div class="search-input"><label for="link-search-text" id="linkSearch-label" class="assistive">' + soy.$$escapeHtml('Search') + '</label><input id="link-search-text" type="text" tabindex="0" class="text autocomplete-search" name="linkSearch" autocomplete="off" data-search-link-message="' + soy.$$escapeHtml('Search for \x26lsquo;{0}\x26rsquo;') + '"></div><select tabindex="0" class="search-space select" id="search-panel-space"><option value="">' + soy.$$escapeHtml('All content') + '</option><option value=""> </option></select><button type="submit" tabindex="0" class="aui-button" id="search-panel-button">' + soy.$$escapeHtml('Search') + '</button></fieldset></form><div class="message-panel hidden"></div><div id="search-results-table" class="data-table hidden"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.searchPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.searchPanel';
}

}catch(e){WRMCB(e)};