WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-location', location = 'js/link-browser-location.js' */
define("confluence-link-browser/link-browser-location",["jquery","confluence/templates","ajs","confluence/dialog-breadcrumbs"],function(v,w,i,o){return function(x){function j(){return i.escapeHtml(p())}function p(){return d.val()}function q(a){f.closest(".row").toggleClass("hidden",!a);b.toggleClass("has-breadcrumbs",!!a)}function r(){return d.is(":visible")}var b,f,k,e,d,l,s,t,m,g,n,c,h;b=v(w.LinkBrowser.locationPanel());f=b.find("#breadcrumbs-container");k=o.Breadcrumbs(f,o.getBreadcrumbsLegacy);
s=b.find(".link-image");t=b.find(".link-mixed");g=b.find("#link-image-filename");m=b.find("#link-mixed-content");l=b.find(".link-text");d=l.find("input");d.change(function(a){a.keyCode=a.keyCode||a.which;a.keyCode&&13!==a.keyCode&&d.removeClass("default-alias")});return{setLink:function(a,b){i.debug("Link Browser: setting link : "+a);var c=a.attrs["data-linked-resource-default-alias"]||a.getHtml();if(""===j()||d.hasClass("default-alias"))d.addClass("default-alias"),d.val(c);if(b&&a.getResourceId()&&
a.getResourceType()){var u={clearErrors:function(){},error:function(){},select:function(a){k.update(a,u)}},c={id:a.getResourceId(),type:a.getResourceType()};k.update(c,u)}q(b);e=a;x.linkValid(e&&e.isHrefValid())},getLink:function(){if(!e)return null;var a=n;a||((a=j())||(a=e.getDefaultAlias()||e.getHref()),a={html:a});e.body=a;return e},refresh:function(a){e&&q(a)},setLinkBody:function(a){n||(a.isEditable?d.val(a.text):a.isImage?g.text(a.imgName):m.text(a.text),n=a.isEditable?null:a,l.toggleClass("hidden",
!a.isEditable),s.toggleClass("hidden",!a.isImage),t.toggleClass("hidden",a.isEditable||a.isImage))},getContainer:function(){return b},isLinkTextVisible:r,isLinkImageVisible:function(){return g.is(":visible")},isLinkMixedContentVisible:function(){return m.is(":visible")},focusLinkText:function(){return r()?(i.debug("LinkInfoPresenter.focusLinkText focusing alias"),d.select(),!0):!1},getLinkText:j,getRawLinkText:p,getLinkImageName:function(){return g.text()},moveLocationPanel:function(a){c||(c=b.find(".row:not(.hidden) .field-group"),
h=c.parent());a.append(c);b.hide()},restoreLocationPanel:function(){h&&(h.append(c),b.show(),h=c=null)},hasBreadcrumbs:function(a){if(!f.is(":visible"))return!1;var b=a.length,d=f.find("li");if(d.length!==b)return!1;for(var c=0;c<b;c++)if(d.eq(c).text()!==a[c])return!1;return!0}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-location', location = 'templates/link-browser-location.soy' */
// This file was automatically generated from link-browser-location.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.locationPanel = function(opt_data, opt_ignored) {
  return '<div id="link-browser-location" class="location-info"><form class="aui"><div class="row hidden field-group"><label class="link-location-label" for="breadcrumbs-link">' + soy.$$escapeHtml('Link location') + '</label><div class="breadcrumbs-container" id="breadcrumbs-link"><div class="breadcrumbs-line"><ol id="breadcrumbs-container" class="breadcrumbs"></ol></div></div></div></form><div class="row link-text"><form class="aui" onsubmit="return false;"><div class="field-group"><label for="alias" id="alias-label">' + soy.$$escapeHtml('Link text') + '</label><input type="text" tabindex="0" class="text" name="alias" id="alias"></div></form></div><div class="row link-image hidden"><div class="readonly"><label for="link-image-filename">' + soy.$$escapeHtml('Link image') + '</label><span id="link-image-filename" class="content-type-attachment-image"></span></div></div><div class="row link-mixed hidden"><div class="readonly"><label for="link-mixed-content">' + soy.$$escapeHtml('Link text') + '</label><span id="link-mixed-content"></span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.locationPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.locationPanel';
}

}catch(e){WRMCB(e)};