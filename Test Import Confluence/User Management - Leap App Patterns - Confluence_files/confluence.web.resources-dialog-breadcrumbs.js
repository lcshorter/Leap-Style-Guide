WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = 'includes/js/dialog-breadcrumbs.js' */
define("confluence/dialog-breadcrumbs","ajs jquery confluence/meta confluence/templates confluence/breadcrumbs-jquery confluence-rest/confluence-rest".split(" "),function(c,d,l,k,o,n){var g={},m=function(a,i,e){var f=a.userName?a.userName:a.pageId?a.pageId+":"+a.fileName:a.spaceKey+":"+a.title+":"+a.postingDay+":"+a.fileName;f in g?i(g[f],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+"/pages/breadcrumb.action",error:e||function(){},success:function(a,c){if(!a||!a.breadcrumbs)e(a,
c);else{for(var b=d.makeArray(a.breadcrumbs);b[0]&&a.type!=="userinfo"&&/peopledirectory\.action$/.test(b[0].url);)b.shift();a.type==="page"&&(b[1]&&/pages\.action/.test(b[1].url))&&b.splice(1,1);b.type=a.type;g[f]=b;i(b,c)}}})};return{getBreadcrumbsDefault:m,Breadcrumbs:function(a,i){var e=0;return{update:function(f,j){a.html(k.Dialog.breadcrumbLoading());var g=e=e+1,b=function(){if(g!==e){c.debug("Breadcrumb response for ",f," is stale, ignoring.");return true}return false};(i||m)(f,function(e,
g){if(!b())if(g!=="success"||!e)a.html(k.Dialog.breadcrumbError());else{var h=f.spaceKey;a.renderBreadcrumbs(e);if(!(h=h!==l.get("space-key")))a:{for(h=1;h<e.length;h++)if(e[h].title===l.get("page-title")){h=false;break a}h=true}if(h){j.clearErrors();d(j.moveButton).prop("disabled",false)}else{j.error("You cannot move a page to be underneath itself or its children.");d("li:last-child",a).addClass("warning")}}},function(d){if(!b()){a.html(k.Dialog.breadcrumbError());d.status===404&&j.error("The specified page was not found.")}})}}},
getBreadcrumbsLegacy:function(a,i,e){if(!a.id)throw Error("id is a required parameter in 'options'");if(!a.type)throw Error("type is a required parameter in 'options'");var f=a.id+":"+a.type;f in g?i(g[f],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+n.REST.getBaseUrl()+"breadcrumb",error:e||function(){},success:function(a,c){if(!a||!a.breadcrumbs)e(a,c);else{for(var b=d.makeArray(a.breadcrumbs);b[0]&&a.type!=="userinfo"&&/peopledirectory.action$/.test(b[0].url);)b.shift();
b.type=a.type;g[f]=b;i(b,c)}}})}}});
require("confluence/module-exporter").safeRequire("confluence/dialog-breadcrumbs",function(c){var d=require("ajs");d.toInit(function(){d.MoveDialog||(d.MoveDialog={});d.MoveDialog.Breadcrumbs=c.Breadcrumbs;d.MoveDialog.getBreadcrumbs=c.getBreadcrumbsDefault;d.Breadcrumbs={};d.Breadcrumbs.getBreadcrumbs=c.getBreadcrumbsLegacy;Confluence.Dialogs||(Confluence.Dialogs={});Confluence.Dialogs.Breadcrumbs=d.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.getBreadcrumbs=c.getBreadcrumbsLegacy;Confluence.Dialogs.Breadcrumbs.Controller=
c.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.defaultGetBreadcrumbs=c.getBreadcrumbsDefault})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = 'includes/soy/dialog-breadcrumbs.soy' */
// This file was automatically generated from dialog-breadcrumbs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.breadcrumbItem = function(opt_data, opt_ignored) {
  return '<li><a class="' + soy.$$escapeHtml(opt_data.className) + '" title="' + soy.$$escapeHtml(opt_data.title) + '" tabindex="-1"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbItem.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbItem';
}


Confluence.Templates.Dialog.breadcrumbLoading = function(opt_data, opt_ignored) {
  return '<li class="loading"><span>' + soy.$$filterNoAutoescape('Loading breadcrumbs\u2026') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbLoading.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbLoading';
}


Confluence.Templates.Dialog.breadcrumbError = function(opt_data, opt_ignored) {
  return '<li class="warning last"><span>' + soy.$$escapeHtml('Error retrieving breadcrumbs.') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbError.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbError';
}

}catch(e){WRMCB(e)};