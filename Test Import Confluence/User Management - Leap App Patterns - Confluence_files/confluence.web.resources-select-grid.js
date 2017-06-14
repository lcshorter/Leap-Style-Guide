WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:select-grid', location = 'includes/js/select-grid.soy' */
// This file was automatically generated from select-grid.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SelectGrid.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SelectGrid == 'undefined') { Confluence.Templates.SelectGrid = {}; }


Confluence.Templates.SelectGrid.gridOutline = function(opt_data, opt_ignored) {
  return '<table class="select-grid aui"><thead><tr class="data-table-header"></tr></thead><tbody></tbody></table>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.gridOutline.soyTemplateName = 'Confluence.Templates.SelectGrid.gridOutline';
}


Confluence.Templates.SelectGrid.cellWithLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><a class="' + soy.$$escapeHtml(opt_data.innerClass) + '" href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithLink';
}


Confluence.Templates.SelectGrid.cellWithoutLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><span class="' + soy.$$escapeHtml(opt_data.innerClass) + '" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.text) + '</span></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithoutLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithoutLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:select-grid', location = 'includes/js/select-grid.js' */
define("confluence/select-grid",["ajs","jquery","confluence/templates","confluence/group","confluence/control"],function(c,f,k,g,i){var g=g.extend({init:function(a){this.type=this.type||"SelectGrid";this._super();var b=f(k.SelectGrid.gridOutline()),d=b.find("thead tr");f(a.columns).each(function(a,b){var e=c("th").addClass(b.getClassName()).text(b.heading);d.append(e)});this.gridContainer=f(a.gridContainer).append(b);this.getRowId=a.getRowId;this.table=b;this.columns=a.columns;this.selectionCallback=
a.selectionCallback;this.body=b.find("tbody");this.body.delegate("a","click",function(a){a.preventDefault()});this.dontShiftFocus=a.dontShiftFocus||function(){}},keys:{up:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(-1),a.preventDefault())},down:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(1),a.preventDefault())}},_addRow:function(a,b,d,c){f.isFunction(d)&&(c=d,d=!1);d?this.body.prepend(a):this.body.append(a);a=new n({row:a,data:b,
callback:c,getRowId:this.getRowId,selectionCallback:c});this.addItem(a);return a},clear:function(){this.removeAllItems();this.body.children().remove()},_addRows:function(a,b){var d=this,g=[];f(a).each(function(a,e){var i=d.columns,h,j,l,m;h=c("tr");f(i).each(function(a,b){j={outerClass:b.getClassName(e)||"",href:b.getHref&&b.getHref(e)||"",innerClass:b.getInnerClass&&b.getInnerClass(e)||"",title:b.getTitle&&b.getTitle(e)||"",text:b.getText(e)||""};l=j.href?"cellWithLink":"cellWithoutLink";m=k.SelectGrid[l](j);
h.append(m)});h.attr("data-id",d.getRowId(e));g.push(d._addRow(h,e,b,d.selectionCallback))});return g},update:function(a){this.clear();!a||!a.length?c.debug("SelectGrid.update called with no data, returning."):(this._addRows(a),this.prepareForInput())},prependAndSelect:function(a,b){!a||!a.length?c.debug("SelectGrid.prependAndSelect called with no data, returning."):this._addRows(a,!0)[b||0].selectRow()},findItem:function(a){for(var b=0;b<this.items.length;b++)if(this.items[b].getRowId()==a)return this.items[b];
c.debug("SelectGrid.findItem didn't find item, returning null.");return null},select:function(a){(a=this.findItem(a))&&a.selectRow()},selectIndex:function(a){a=a||0;this.items[a]?this.items[a].selectRow():c.debug("SelectGrid.selectIndex couldn't select row with index "+a+", not found")},show:function(){this.gridContainer.removeClass("hidden")},hide:function(){this.gridContainer.addClass("hidden")},isVisible:function(){return!this.gridContainer.hasClass("hidden")}}),n=i.extend({init:function(a){this.type=
"SelectableRow";this.$row=f(a.row);this.$row.data("properties",a.data);this.getRowId=function(){return a.getRowId(a.data)};this.selectionCallback=a.selectionCallback;this._assignEvents("element",this.$row);this._assignEvents("instance",this);c.debug("SelectableRow initialized")},_events:{instance:{focus:function(){var a=this.$row;a.addClass("selected");this.selectionCallback(a,a.data("properties"))},blur:function(){this.$row.removeClass("selected")}},element:{click:function(){this.trigger("focus")}}},
selectRow:function(){this.trigger("focus")}});g.Column=function(a){var b=function(b){return b[a.key]};return{key:a.key,heading:a.heading,getClassName:a.getClassName||function(){return a.className||a.key+"-field"},getHref:a.getHref,getInnerClass:a.getInnerClass,getTitle:a.getTitle,getText:a.getText||b}};return g});require("confluence/module-exporter").exportModuleAsGlobal("confluence/select-grid","AJS.SelectGrid");
}catch(e){WRMCB(e)};