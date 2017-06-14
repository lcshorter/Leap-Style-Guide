WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:helptip-resources', location = 'com/atlassian/confluence/extra/calendar3/components/helptip/helpTip-component.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=Confluence.TeamCalendars.getRestBaseUrl()+"/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=Confluence.TeamCalendars.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=(o)?new i(this,o):new m(this);this.view.$el.addClass("tc-aui-help-tip")};Confluence.TeamCalendars.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;Confluence.TeamCalendars.HelpTip.Manager.show(function(){if(!n.isDismissed()){n.view.show();j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){Confluence.TeamCalendars.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return Confluence.TeamCalendars.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(t,s){var p=this;var r=9;var o=AJS.$("#rte").height()-s.offset().top;var n=200;var q=o<n;var u=f(AJS.Rte.getEditor().getDoc()).scrollTop();this.model=t;this.beforeHide=b;this.closeButton=f(Confluence.TeamCalendars.Templates.tipClose());this.closeButton.click(function(v){t.dismiss("close-button");v.preventDefault()});this.popup=AJS.InlineDialog(s,t.cid,function(x,w,v){x.html(Confluence.TeamCalendars.Templates.tipContent(t.attributes));x.append(p.closeButton);x.unbind("mouseover mouseout");x.find(".tc-helptip-link").click(function(){j("learn-more.clicked",t)});v()},{container:"#content",noBind:true,onTop:q,preHideCallback:function(){return p.beforeHide()},calculatePositions:function(v,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(v,y,z,x);if(q){w.popupCss.top=f("#rte").offset().top+s.offset().top-v.height()-r}else{w.popupCss.top=f("#rte").offset().top+(s.offset().top-u)+s.height()+r}w.popupCss.left=s.offset().left;w.displayAbove=q;return w}});this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(x,w,v){if(w==="inlineDialog"&&v.id===t.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+t.cid+".inline-dialog-check");v._validateClickToClose=b;v.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show();AJS.$("#full-height-container").click(o);AJS.Rte.getEditor().onClick.add(o)},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div></div>")},show:function(){},dismiss:function(){}});a.fetch()})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:helptip-resources', location = 'com/atlassian/confluence/extra/calendar3/components/helptip/helpTip-component.soy' */
// This file was automatically generated from helpTip-component.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.tipContent = function(opt_data, opt_ignored) {
  return ((opt_data.title) ? '<h4 class="tc-helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '') + '<div class="tc-helptip-body">' + soy.$$filterNoAutoescape(opt_data.bodyHtml) + '</div>' + ((opt_data.url) ? '<a class="tc-helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml('Learn More') + '</a>' : '');
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.tipContent.soyTemplateName = 'Confluence.TeamCalendars.Templates.tipContent';
}


Confluence.TeamCalendars.Templates.tipClose = function(opt_data, opt_ignored) {
  return '<button class="tc-helptip-close aui-button aui-style"><span>' + soy.$$escapeHtml('Got it, thanks!') + '</span></button>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.tipClose.soyTemplateName = 'Confluence.TeamCalendars.Templates.tipClose';
}

}catch(e){WRMCB(e)};