WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml('Loading...') + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(m){this.$=m;var h=this.$;var B=999;var C=true;var k=false;var w={};var d={};var n=function(K,J,F,I,E){if(J==undefined||J==null){J=!b(K)}if(F==undefined||F==null){F=0}if(!l(K,J)){var H=h("#children"+K);if(z(H)){var G=h("#plusminus"+K);if(J==C){G.removeClass("icon-section-closed").addClass("icon-section-opened")}else{G.removeClass("icon-section-opened").addClass("icon-section-closed")}if(J==C){if(E==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(E==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(I){r(K)}}else{j(K,new Array(),F,"",I,E)}}if(I){r(K)}};var z=function(E){return E.children("ul[id]").length>0};var b=function(F){var E=h("#plusminus"+F);return(E.length>0)?(E.hasClass("icon-minus")||E.hasClass("icon-section-opened")):k};var l=function(F,E){return b(F)==E};var i=function(G,F,E){A(G,C,F,E)};var x=function(G,F,E){A(G,k,F,E)};var A=function(J,H,G,F){g(J);var I=h("#"+J);var E=I.find("div.plugin_pagetree_children_container");E.each(function(K){var L=v(this.id);n(L,H,B,K==E.length-1,F)});G.preventDefault();G.stopPropagation()};var v=function(E){if(!E||E==undefined){return null}if(E.indexOf("plusminus")!=-1){return E.substring("plusminus".length)}if(E.indexOf("children")!=-1){return E.substring("children".length)}return null};var c=function(E){if(!E||E==undefined){return null}return s(E)[1]};var s=function(E){if(!E||E==undefined){return null}return E.split("-")};var g=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").removeClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var r=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").addClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var f=function(L,F,I,H,K,E,G){var J=w[L];if(F=="Orphan"){J+="&hasRoot=false&spaceKey="+K}else{J+="&hasRoot=true&pageId="+F}J+="&treeId="+L+"&startDepth="+H+"&mobile="+G;h.each(I,function(){J+="&ancestors="+this});J+="&treePageId="+E;if(G==false){J=(AJS.params.serverUrl||"")+J}return J};var q=function(G){var F=G;var E=null;h("div.plugin_pagetree").each(function(H){if(H==F){E=h(this)}});return E};var p=function(E){var F=E.children("fieldset");var G=new Object();if(F.length>0){F.children("input").each(function(){G[this.name]=this.value})}return G};var o=function(E){var G=E.children("fieldset");var H=new Array();if(G.length>0){var F=G.children("fieldset");if(F.length>0){F.children("input").each(function(){H.push(this.value)})}}return H};var e=function(G,F){var E=h("a.plugin_pagetree_childtoggle",G);E.each(function(){var H=h(this);H.attr("href","#").bind("click",function(K){var I=H.parent().parent().children("div.plugin_pagetree_children_container");var J=I.attr("id");var L=J.substring(8);n(L,null,null,null,F);K.preventDefault();K.stopPropagation()})})};var u=function(E){var F=h(document.createElement("div"));F.html(E);return F.find("ul[id^='child_ul']").length};var j=function(N,G,S,Q,J,F,H){var R=N;var K=J;var E=s(N);var I=E[0];var M=E[1];var L=h("#children"+N);var P=p(q(M));var T=false;function O(){L.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small")}L.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());if(H){setTimeout(function(){if(!T){O()}},250)}else{O()}h.ajax({type:"GET",url:f(M,I,G,S,Q,P.treePageId,F),dataType:"text",success:function(U){if(u(U)){L.html(U);T=true;if(L.children().length&&L.hasClass("hidden")){L.removeClass("hidden")}e(L,F);h("#plusminus"+R).addClass("icon-section-opened").removeClass("icon-section-closed");h("#childrenspan"+d[parseInt(M)]+"-"+M).addClass("plugin_pagetree_current");if(K){r(R)}t(L);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(U){if(U.status=="403"){L.text(P["i18n-pagetree.error.permission"])}else{L.text(P["i18n-pagetree.error.general"])}}})};var t=function(E){h("div.plugin_pagetree_children_container:empty",E).addClass("hidden")};var y=function(E,J){var H=p(E);var K=H.noRoot=="true";var G=K?"Orphan-"+J:H.rootPageId+"-"+J;var F=H.mobile=="true";w[J]=H.treeRequestId;if(F==false){d[J]=AJS.params.pageId}else{d[J]=h("div.content-container").parent().attr("data-content-id")}E.children("fieldset").each(function(){var L=h(this);L.children("input[treeId]").attr("value",J);L.children("input[rootPage]").attr("value",G)});if(K){E.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+J);E.find("a.plugin_pagetree_expandall").click(function(L){i("childrenOrphan-"+J,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("childrenOrphan-"+J,L,F);return false})}else{E.find("div.plugin_pagetree_children").attr("id","children"+G);E.find("a.plugin_pagetree_expandall").click(function(L){i("children"+G,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("children"+G,L,F);return false})}var I=o(E);j(G,I,H.startDepth,H.spaceKey,"",F,true)};this.initPageTrees=function(){h("div.plugin_pagetree").each(function(E){y(h(this),E)});D()};var D=function(){var E=self.placeFocus;if(E){self.placeFocus=function(){var F=h("form[name='pagetreesearchform']");F.attr("name","inlinecommentform");E();F.attr("name","pagetreesearchform")}}};h(".open-flyout-to-search").bind("click",function(E){if(h(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}E.stopPropagation();E.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees()}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE', location = 'includes/js/amd/shim/confluence-editor-amd.js' */
define("confluence/legacy-editor-global-AVOID-IF-POSSIBLE",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Editor&&(Confluence.Editor={});return Confluence.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.shortcuts.atlassian-shortcuts-plugin:shortcuts', location = '/js/keycommands.js' */
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'templates/confluence-keyboard-shortcuts.soy' */
// This file was automatically generated from confluence-keyboard-shortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialog.
 */

if (typeof __KeyboardShortcutsDialog == 'undefined') { var __KeyboardShortcutsDialog = {}; }


__KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_ignored) {
  return '<div class="module"><div class="mod-header"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutModule.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutModule';
}


__KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.customHelpLink({href: '' + soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts"), text: '' + soy.$$escapeHtml('View All Shortcuts')});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutHelpLink.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutHelpLink';
}


__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_ignored) {
  return '<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">' + soy.$$escapeHtml('Enable General Shortcuts') + '</label></form>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox';
}


__KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_ignored) {
  return '<div id=' + soy.$$escapeHtml(opt_data.panelId) + '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutPanel.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'js/confluence-keyboard-shortcuts-soy.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy",function(){return __KeyboardShortcutsDialog});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialogAutoformat.
 */

if (typeof __KeyboardShortcutsDialogAutoformat == 'undefined') { var __KeyboardShortcutsDialogAutoformat = {}; }


__KeyboardShortcutsDialogAutoformat.configureAutocomplete = function(opt_data, opt_ignored) {
  return '<div id="keyboard-shortcut-autocomplete-message">' + soy.$$escapeHtml('To configure Autocomplete,') + ' <a target="_blank" href=' + soy.$$escapeHtml(opt_data.href) + '>' + soy.$$escapeHtml('go to your editor settings') + '</a></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.configureAutocomplete.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.configureAutocomplete';
}


__KeyboardShortcutsDialogAutoformat.helpItem = function(opt_data, opt_ignored) {
  return '<li class="item-details"><span class="item-description wiki-content">' + opt_data.output + '</span><span class="' + opt_data.actionClass + ' item-action">' + opt_data.type + '</span></li>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.helpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.helpItem';
}


__KeyboardShortcutsDialogAutoformat.simpleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.simpleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.simpleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.tableHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableHelpItem';
}


__KeyboardShortcutsDialogAutoformat.styleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.styleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.styleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: '' + soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.keyboardShortcutItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem';
}


__KeyboardShortcutsDialogAutoformat.emoticonHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.emoticonHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.emoticonHelpItem';
}


__KeyboardShortcutsDialogAutoformat.boldDescription = function(opt_data, opt_ignored) {
  return '<b>' + soy.$$escapeHtml('Bold') + '</b> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.boldDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.boldDescription';
}


__KeyboardShortcutsDialogAutoformat.underlineDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: underline;">' + soy.$$escapeHtml('Underline') + '</span> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.underlineDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.underlineDescription';
}


__KeyboardShortcutsDialogAutoformat.italicDescription = function(opt_data, opt_ignored) {
  return '<em>' + soy.$$escapeHtml('Italic') + '</em> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.italicDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.italicDescription';
}


__KeyboardShortcutsDialogAutoformat.monospaceDescription = function(opt_data, opt_ignored) {
  return '<code>' + soy.$$escapeHtml('Monospace') + '</code> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.monospaceDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.monospaceDescription';
}


__KeyboardShortcutsDialogAutoformat.tableDescription = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><td class="confluenceTd">' + soy.$$escapeHtml('first cell') + '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableDescription';
}


__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions';
}


__KeyboardShortcutsDialogAutoformat.h1Description = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('Heading') + '</h1>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h1Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h1Description';
}


__KeyboardShortcutsDialogAutoformat.h3Description = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml('Heading') + '</h3>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h3Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h3Description';
}


__KeyboardShortcutsDialogAutoformat.bqDescription = function(opt_data, opt_ignored) {
  return '<blockquote>' + soy.$$escapeHtml('Quote') + '</blockquote>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bqDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bqDescription';
}


__KeyboardShortcutsDialogAutoformat.numberedListDescription = function(opt_data, opt_ignored) {
  return '<ol><li>' + soy.$$escapeHtml('list') + '</li></ol>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.numberedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.numberedListDescription';
}


__KeyboardShortcutsDialogAutoformat.bulletedListDescription = function(opt_data, opt_ignored) {
  return '<ul><li>' + soy.$$escapeHtml('bullets') + '</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bulletedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bulletedListDescription';
}


__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription = function(opt_data, opt_ignored) {
  return '<ul class="inline-task-list"><li>task</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.inlineTaskListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'js/shortcut-dialog-tab-autoformat-soy.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy",function(){return __KeyboardShortcutsDialogAutoformat});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab', location = 'js/shortcut-dialog-tab-autoformat.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat",["ajs","confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy","confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy","jquery"],function(a,i,b,f){var j=[{context:"autoformat.font_formatting",description:b.boldDescription(),action:"*Bold*"},{context:"autoformat.font_formatting",description:b.underlineDescription(),action:"+Underline+"},
{context:"autoformat.font_formatting",description:b.italicDescription(),action:"_Italic_"},{context:"autoformat.font_formatting",description:b.monospaceDescription(),action:"{{Monospace}}"},{context:"autoformat.tables",description:b.tableDescription(),action:"||||| + enter"},{context:"autoformat.tables",description:b.tableWithHeadingsDiscriptions(),action:"||heading||heading||"},
{context:"autoformat.styles",description:b.h1Description(),action:"h1. Heading"},{context:"autoformat.styles",description:b.h3Description(),action:"h3. Heading"},{context:"autoformat.styles",description:b.bqDescription(),action:"bq. Quote"},{context:"autoformat.emoticons",img:"check.png",action:"(/)"},
{context:"autoformat.emoticons",img:"smile.png",action:":)"},{context:"autoformat.lists",description:b.numberedListDescription(),action:"# list"},{context:"autoformat.lists",description:b.bulletedListDescription(),action:"* bullets"},{context:"autoformat.lists",description:b.inlineTaskListDescription(),
action:"[] task"},{context:"autoformat.autocomplete",description:"Image/Media",action:"!"},{context:"autoformat.autocomplete",description:"Link",action:"["},{context:"autoformat.autocomplete",description:"Macro",
action:"{"}],e=function(a,b,c){var a=f(i.keyboardShortcutModule({title:a})),k=a.find("ul"),g;g=f.grep(j,function(a){return a.context===b});for(var h=0,e=g.length;h<e;h++)k.append(c(g[h]));return a},c=function(a,b,c){return e(a,b,function(a){return c({output:a.description,type:a.action})})},l=function(c,d){var f=a.params.staticResourceUrlPrefix+"/images/icons/emoticons/";return e(c,d,function(a){return b.emoticonHelpItem({src:f+a.img,
type:a.action})})};return function(){var e=f(i.keyboardShortcutPanel({panelId:"autoformat-shortcuts-panel"})),d=e.children(".shortcutsmenu");d.append(c("Font Formatting","autoformat.font_formatting",b.simpleHelpItem));d.append(c("Autocomplete","autoformat.autocomplete",b.keyboardShortcutItem));d.append(c("Tables","autoformat.tables",b.tableHelpItem));
d.append(c("Styles","autoformat.styles",b.styleHelpItem).addClass("styles-module"));d.append(l("Emoticons","autoformat.emoticons"));d.append(c("Lists","autoformat.lists",b.simpleHelpItem));a.Meta.get("remote-user")&&e.find(".keyboard-shortcut-dialog-panel-header").append(b.configureAutocomplete({href:a.contextPath()+"/users/viewmyeditorsettings.action"}));
return e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/confluence-keyboard-shortcuts.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts","ajs jquery confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy confluence/legacy-editor-global-AVOID-IF-POSSIBLE window confluence/dialog confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat".split(" "),function(a,e,j,l,n,s,t){var b,g={Autoformat:[],Editor:[],enabled:false,ready:false,dialog:null,closeDialog:function(){p().then(function(a){a.hide()});return false},openDialog:function(){e(this).removeClass("interactive");
p().then(function(a){a.show()});return false}},p=function(){function q(){if(l&&l.isVisible&&l.isVisible()){b.overrideLastTab();b.gotoPanel(1)}else b.gotoPanel(0)}var i=e.Deferred();if(b){q();return i.resolve(b)}var f=g.shortcuts,u=n.navigator.platform.indexOf("Mac")!==-1,w=function(d){for(var c=a("span").addClass("item-action"),d=d.keys[0],e=0;e<d.length;e++){e>0&&c.append(o("then"));for(var b=c,r=d[e].split("+"),h=0;h<r.length;h++){h>0&&b.append(o("+"));for(var f=
b,m=r[h].split(".."),g=0;g<m.length;g++){g>0&&f.append(o("to"));f.append(v(m[g]))}}}return c},v=function(d){var c=a("kbd");switch(d){case "Shift":case "Sh":c.text("Shift");c.addClass("modifier-key");break;case "Ctrl":d=u?"⌘":"Ctrl";c.text(d);c.addClass("modifier-key");break;case "Tab":c.text("Tab");c.addClass("modifier-key");break;case "Alt":c.text("Alt");
c.addClass("modifier-key");break;default:c.text(d);c.addClass("regular-key")}return c},o=function(d){var c=a("span");c.text(d);c.addClass("key-separator");return c},h=function(d,c,b){for(var d=e(j.keyboardShortcutModule({title:d})),h=d.find("ul"),g=0;g<b.length;g++){var f=b[g];if(!f.hidden&&e.inArray(f.context,c)!==-1){var i=a("li").addClass("item-details"),m=f.description,m=a("strong").addClass("item-description").append(m);i.append(m);i.append(w(f));h.append(i)}}return d};b=s.component({width:950,
height:660,id:"keyboard-shortcuts-dialog"});b.addHeader("Keyboard Shortcuts");b.addPanel("General",function(){var d=e(j.keyboardShortcutPanel({panelId:"general-shortcuts-panel"})),c=e(d).children(".shortcutsmenu");a.Meta.get("remote-user")&&d.find(".keyboard-shortcut-dialog-panel-header").append(j.keyboardShortcutEnabledCheckbox());c.append(h("Global Shortcuts",["global"],f));c.append(h("Page / Blog Post Actions",
["viewcontent","viewinfo"],f));return d}());b.addPanel("Editor",function(){var d=e(j.keyboardShortcutPanel({panelId:"editor-shortcuts-panel"})),c=e(d).children(".shortcutsmenu");c.append(h("Block Formatting",["tinymce.block"],f));c.append(h("Rich Formatting",["tinymce.rich"],f));c.append(h("Editing Actions",["tinymce.actions"],
f));return d}());b.addPanel("Editor Autoformatting",t());b.addCancel("Close",function(){a.debug("Hiding Shortcuts help");b.hide();return false});b.popup.element.find(".dialog-title").prepend(j.keyboardShortcutHelpLink());a.trigger("keyboard-shortcut-dialog-ready",b);q();i.resolve(b);e("#keyboard-shortcut-enabled-checkbox").prop("checked",k.keyboardShortcuts.enabled).click(function(){var d=e(this).prop("checked");e.ajax({type:"POST",url:a.contextPath()+
"/rest/confluenceshortcuts/latest/enabled",data:e.toJSON({enabled:d}),dataType:"json",contentType:"application/json"}).done(function(){k.keyboardShortcuts.enabled=d;k.keyboardShortcuts.ready=false;d?a.trigger("add-bindings.keyboardshortcuts"):a.trigger("remove-bindings.keyboardshortcuts")})});return i},k={init:function(){a.debug("confluence-keyboard-shortcuts initialising");if(a.PageGadget||n.parent.AJS&&n.parent.AJS.PageGadget)a.debug("Inside the Page Gadget. Skipping keyboard shortcuts");else{g.enabled=
a.Meta.getBoolean("use-keyboard-shortcuts");a.bind("shortcuts-loaded.keyboardshortcuts",function(a,b){g.shortcuts=b.shortcuts;e("#keyboard-shortcuts-link").click(g.openDialog)});a.bind("register-contexts.keyboardshortcuts",function(b,i){if(g.enabled){var f=i.shortcutRegistry;f.enableContext("global");var j=l&&l.isVisible&&l.isVisible();e("#action-menu-link").length&&!j&&f.enableContext("viewcontent");e("#viewPageLink").length&&f.enableContext("viewinfo");if(j){f.enableContext("editor");var k=require("tinymce").activeEditor,
n=e("#rte").closest("form");e.each(g.shortcuts,function(b,f){if(f.context.indexOf("tinymce")===0){var d=f.op,c=f.param;e.each(f.keys,function(){var b=this,g;d=="click"?g=function(){e(c).click()}:d=="execute"&&(g=c);if(g){e.isArray(b)&&(b=b.join(","));a.debug("Adding shortcut for "+b);k.addShortcut(b.toLowerCase(),"",g);if(f.context=="tinymce.actions"&&b.indexOf("+")!==-1){a.debug("Binding shortcut on inputs too for "+b);n.delegate(":input","keydown",function(a){var d=a.keyCode?a.keyCode:a.which,c=
b.split("+"),c=e.map(c,function(b){return b=="Ctrl"&&a.metaKey||b=="Shift"&&a.shiftKey||d==b.charCodeAt(0)?null:b});if(!c.length){g();a.preventDefault()}})}}else a.logError("ERROR: unkown editor shortcut key operation "+d+" for shortcut "+b)})}})}g.ready=true}});typeof a.contextPath()!=="undefined"&&(e("#rte").length?a.bind("init.rte",function(){a.trigger("initialize.keyboardshortcuts")}):a.trigger("initialize.keyboardshortcuts"))}}};k.keyboardShortcuts=g;return k});
require("confluence/module-exporter").safeRequire("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts",function(a){var e=require("ajs");Confluence.KeyboardShortcuts=a.keyboardShortcuts;e.toInit(a.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["exports","jquery","ajs"],function(a,c,b){b.toInit(function(){var e="confluence.footer.item.click";var d=b.Meta.get("page-id");var f=(0,c)("body").hasClass("dashboard");(0,c)("#footer").on("click","a",function(){b.trigger("analytics",{name:e,data:{pageId:d,isDashboard:f}})})})});require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:event', location = 'includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-spin-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/spin/spin.js' */
("undefined"===typeof window?global:window).__5948fbc87d30aef48e0301714319f1fd=function(){var m={exports:{}},r=m.exports,x={module:m,exports:r},s;s=function(p,e,h){var j=("undefined"===typeof window?global:window).define,f,k,h=[h,e,p].filter(function(e){return"function"===typeof e})[0],e=[e,p,[]].filter(Array.isArray)[0];f=h.apply(null,e.map(function(e){return x[e]}));k=typeof f;"function"===typeof j&&j("string"===typeof p?p:"__5948fbc87d30aef48e0301714319f1fd",e,h);"string"===k?f=String(f):"number"===
k?f=Number(f):"boolean"===k&&(f=Boolean(f));void 0!==f&&(r=m.exports=f)};s.amd=!0;var w=function(){function p(b,a){var c=document.createElement(b||"div"),d;for(d in a)c[d]=a[d];return c}function e(b){for(var a=1,c=arguments.length;a<c;a++)b.appendChild(arguments[a]);return b}function h(b,a){var c=b.style,d,e,a=a.charAt(0).toUpperCase()+a.slice(1);for(e=0;e<m.length;e++)if(d=m[e]+a,void 0!==c[d])return d;if(void 0!==c[a])return a}function j(b,a){for(var c in a)b.style[h(b,c)||c]=a[c];return b}function f(b){for(var a=
1;a<arguments.length;a++){var c=arguments[a],d;for(d in c)void 0===b[d]&&(b[d]=c[d])}return b}function k(b){for(var a={x:b.offsetLeft,y:b.offsetTop};b=b.offsetParent;)a.x+=b.offsetLeft+b.clientLeft,a.y+=b.offsetTop+b.clientTop;return a}function l(b){if("undefined"==typeof this)return new l(b);this.opts=f(b||{},l.defaults,r)}var m=["webkit","Moz","ms","O"],s={},t,u,n=p("style",{type:"text/css"});e(document.getElementsByTagName("head")[0],n);u=n.sheet||n.styleSheet;var r={lines:12,length:7,width:5,
radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:0.25,fps:20,zIndex:2E9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={};f(l.prototype,{spin:function(b){this.stop();var a=this,c=a.opts,d=a.el=j(p(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),e=c.radius+c.length+c.width,i,g;b&&(b.insertBefore(d,b.firstChild||null),g=k(b),i=k(d),j(d,{left:("auto"==c.left?g.x-i.x+(b.offsetWidth>>1):parseInt(c.left,10)+e)+"px",top:("auto"==
c.top?g.y-i.y+(b.offsetHeight>>1):parseInt(c.top,10)+e)+"px"}));d.setAttribute("role","progressbar");a.lines(d,a.opts);if(!t){var f=0,m=(c.lines-1)*(1-c.direction)/2,o,h=c.fps,q=h/c.speed,s=(1-c.opacity)/(q*c.trail/100),l=q/c.lines;(function y(){f++;for(var b=0;b<c.lines;b++){o=Math.max(1-(f+(c.lines-b)*l)%q*s,c.opacity);a.opacity(d,b*c.direction+m,o,c)}a.timeout=a.el&&setTimeout(y,~~(1E3/h))})()}return a},stop:function(){var b=this.el;b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),
this.el=void 0);return this},lines:function(b,a){function c(b,c){return j(p(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var d=0,f=(a.lines-1)*(1-a.direction)/2,i;d<a.lines;d++){i=p();var g=1+~(a.width/2)+"px",h=a.hwaccel?"translate3d(0,0,0)":"",m=a.opacity,o;if(o=t){o=a.opacity;var l=a.trail,q=f+
d*a.direction,k=a.lines,n=["opacity",l,~~(100*o),q,k].join("-"),q=0.01+100*(q/k),k=Math.max(1-(1-o)/l*(100-q),o),r=t.substring(0,t.indexOf("Animation")).toLowerCase(),r=r&&"-"+r+"-"||"";s[n]||(u.insertRule("@"+r+"keyframes "+n+"{0%{opacity:"+k+"}"+q+"%{opacity:"+o+"}"+(q+0.01)+"%{opacity:1}"+(q+l)%100+"%{opacity:"+o+"}100%{opacity:"+k+"}}",u.cssRules.length),s[n]=1);o=n+" "+1/a.speed+"s linear infinite"}i=j(i,{position:"absolute",top:g,transform:h,opacity:m,animation:o});a.shadow&&e(i,j(c("#000",
"0 0 4px #000"),{top:"2px"}));e(b,e(i,c("string"==typeof a.color?a.color:a.color[d%a.color.length],"0 0 1px rgba(0,0,0,.1)")))}return b},opacity:function(b,a,c){a<b.childNodes.length&&(b.childNodes[a].style.opacity=c)}});n=j(p("group"),{behavior:"url(#default#VML)"});if(!h(n,"transform")&&n.adj){var v=function(b,a){return p("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',a)};u.addRule(".spin-vml","behavior:url(#default#VML)");l.prototype.lines=function(b,a){function c(){return j(v("group",
{coordsize:i+" "+i,coordorigin:-f+" "+-f}),{width:i,height:i})}function d(b,d,g){e(h,e(j(c(),{rotation:360/a.lines*b+"deg",left:~~d}),e(j(v("roundrect",{arcsize:a.corners}),{width:f,height:a.width,left:a.radius,top:-a.width>>1,filter:g}),v("fill",{color:"string"==typeof a.color?a.color:a.color[b%a.color.length],opacity:a.opacity}),v("stroke",{opacity:0}))))}var f=a.length+a.width,i=2*f,g=2*-(a.width+a.length)+"px",h=j(c(),{position:"absolute",top:g,left:g});if(a.shadow)for(g=1;g<=a.lines;g++)d(g,
-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(g=1;g<=a.lines;g++)d(g);return e(b,h)};l.prototype.opacity=function(b,a,c,d){b=b.firstChild;d=d.shadow&&d.lines||0;if(b&&a+d<b.childNodes.length&&(b=(b=(b=b.childNodes[a+d])&&b.firstChild)&&b.firstChild))b.opacity=c}}else t=h(n,"animation");return l};"object"==typeof r?m.exports=w():"function"==typeof s&&s("aui/internal/spin",w);this.Spinner=w();return m.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.spin.js' */
("undefined"===typeof window?global:window).__e9282c4286b6886c60cee0b1e3321cc6=function(){var b=jQuery;b.fn.spin=function(a,c){var f,d;if("string"===typeof a){if(!a in b.fn.spin.presets)throw Error("Preset '"+a+"' isn't defined");f=b.fn.spin.presets[a];d=c||{}}else{if(c)throw Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)");f=b.fn.spin.presets.small;d=b.isPlainObject(a)?a:{}}if(window.Spinner)return this.each(function(){var c=
b(this),e=c.data();e.spinner&&(e.spinner.stop(),delete e.spinner);!1!==a&&(d=b.extend({color:c.css("color")},f,d),e.spinner=(new Spinner(d)).spin(this))});throw"Spinner class not available.";};b.fn.spin.presets={small:{lines:12,length:3,width:2,radius:3,trail:60,speed:1.5},medium:{lines:12,length:5,width:3,radius:8,trail:60,speed:1.5},large:{lines:12,length:8,width:4,radius:10,trail:60,speed:1.5}};b.fn.spinStop=function(){if(window.Spinner)return this.each(function(){var a=b(this).data();a.spinner&&
(a.spinner.stop(),delete a.spinner)});throw"Spinner class not available.";};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-spin', location = 'node_modules/@atlassian/aui/src/js/aui/spin.js' */
("undefined"===typeof window?global:window).__e573296a636ce4ee054d5d3b9c8823fb=function(){"use strict";__5948fbc87d30aef48e0301714319f1fd;__e9282c4286b6886c60cee0b1e3321cc6;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__bdbf9d213bf319eb4577ef21ac6c491c=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__307d3e18fd611f85395c67cddeb1fe24),j=f(__574ac67f906effeb9d8ec2753b23cf28),k=f(__4d02fe17b8e885a34493e34af3d145dd),
b=f(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),l=f(__e3152236c406a356c24f20f7bfcccf21),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","ajs"],function(c,a){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append('<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>');d().show();e().spin({lines:12,length:8,width:4,radius:10,
trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();c.always(this.hide.bind(this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",
{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-dialog-loader', location = 'includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["jquery","ajs","confluence/page-loading-indicator","confluence/api/event","wrm"],function(a,e,d,f,h){return function(){var g={userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},i=d(a("body"));Object.keys(g).forEach(function(d){var b=g[d];a("body").on("click",b.selector,function(a){var c=h.require("wr!"+b.resource,function(){f.trigger(b.event)});i.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-permissions-deferred-loader', location = 'includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader",["confluence/dark-features","ajs","confluence/page-loading-indicator","jquery","wrm"],function(b,d,a,e,c){var f=a(e("body"));return function(a){var b=c.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){d.trigger("deferred.page.permissions")});f.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(b){var d=require("ajs"),a=require("skate");a("action-page-permissions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});a("rte-button-restrictions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});d.bind("system-content-metadata.open-restrictions-dialog",b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:site-status-web-item', location = 'includes/js/site-status-web-item.js' */
define("confluence/site-status-web-item",["document","confluence/api/event"],function(a,c){function d(){c.trigger("analyticsEvent",{name:"site-status.requested"})}return{bind:function(){var b=a.getElementById("site-status-menu-link");b&&(b.onclick=d)}}});require("confluence/module-exporter").safeRequire("confluence/site-status-web-item",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:quick-nav', location = 'includes/js/quick-nav.js' */
define("confluence/quick-nav",["jquery","confluence/api/logger"],function(e,c){var d=[],b;return{addDropDownPostProcess:function(a){"undefined"!==typeof a?d.push(a):c.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},setMakeParams:function(a){b=a},init:function(a,c){a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:c,dropdownPostprocess:function(a){e.each(d,function(c,b){b&&b(a)})},makeParams:function(a){return b?b(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}})}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/quick-nav","Confluence.QuickNav");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:contentnamesearch', location = 'includes/js/contentnamesearch.js' */
define("confluence/contentnamesearch",["jquery","ajs","confluence/quick-nav"],function(a,e,k){return function(){var f=function(a){return function(c){a.closest("form").find(".quick-nav-drop-down").append(c)}},h=a("#quick-search-query"),g=a("#space-blog-quick-search-query"),i=a("#confluence-space-key"),l=f(h),j=e.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:k});j.init(h,l);j.addDropDownPostProcess(function(b){a("a",b).each(function(){var b=a(this),d=b.find("span").data("properties");
if((d=d?d.spaceName:null)&&!b.is(".content-type-spacedesc"))b.after(b.clone().attr("class","space-name").html(d)),b.parent().addClass("with-space-name")})});g.length&&i.length&&g.quicksearch("/rest/quicknav/1/search?type=blogpost&spaceKey="+e("i").html(i.attr("content")).text(),null,{dropdownPlacement:f(g)});a("#quick-search").on("click","div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))",function(b){var c=a(this),d=a(b.target);if(!(d.is("a")&&1===d.parent().children("a").index(d))||
void 0!==b.originalEvent)b=c.children("a:first").attr("class"),c=c.index("div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))"),e.trigger("analytics",{name:"quicknav-click-"+b,data:{index:c}})});f=function(){var b={name:"quicknav-hit-enter",data:{results:a("div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))").length}};e.trigger("analytics",b)};a("#quick-search").on("submit",f);a("#quick-search").on("click","div.quick-search-dropdown li:has(a.search-for)",f);a("#quick-search").on({"quick-search-loading-start":function(){a(this).spin({className:"quick-search-spinner"}).addClass("quick-search-loading");
a(".quick-search-spinner").css("left",a(this).outerWidth()-35+"px")},"quick-search-loading-stop":function(){a(this).spinStop().removeClass("quick-search-loading")}});a("#quick-search").on("keydown",function(b){var c=e.dropDown.current&&-1!=e.dropDown.current.getFocusIndex();if(13===b.which&&(b.metaKey||b.ctrlKey)&&!c)b=a(this),b.attr("target","_blank"),b.submit(),b.attr("target","")})}});require("confluence/module-exporter").safeRequire("confluence/contentnamesearch",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/third-party/raphael-spinner.js' */
var Raphael=Raphael||{};Raphael.spinner=function(d,a,e){var b=30*a/60,a={color:e||"#fff",width:13*a/60,radius:b,length:a-b,top:0,left:0,zIndex:0,speed:1.042},c=$(d);c.spin(a);return function(){c.spinStop()}};Raphael.spinner=AJS.deprecate.fn(Raphael.spinner,"Raphael spinner",{alternativeName:"aui-spinner"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/amd/shim/raphael-amd.js' */
define("raphael",function(){return Raphael});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = 'includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = 'includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","confluence/api/querystring","document","window"],function(c,m,b,i){var j=function(a){a=e(a);return"undefined"!==typeof a&&0!==a},e=function(a){a=c.get(a);return isNaN(a)?void 0:Number(a)},k=function(a){return(a=a.match(/[^/?#]*\/plugins\/servlet\/ac\/([^/?#]*)\/([^/?#]*)$/))?{addonKey:a[1],moduleKey:a[2]}:null},l=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},f=function(){return!!b.querySelector(".page.edit")||
!!b.querySelector(".blogpost.edit")},g=function(){return c.get("content-type")},d=function(){return e("page-id")},h=function(){return c.get("space-key")};return{getCurrent:function(){if(f()&&0===d()&&j("draft-id"))return{target:"contentcreate",context:{contentId:e("draft-id"),contentType:g(),spaceKey:h()}};if(f()&&!l()&&0!==d())return{target:"contentedit",context:{contentId:d(),contentType:g(),spaceKey:h()}};if(!f()&&l()&&j("page-id"))return{target:"contentview",context:{contentId:d(),contentType:g(),
spaceKey:h()}};if(null!=k(i.location.pathname)){var a=i.location,b=k(a.pathname),c=m.parse(a.search),a=Object.keys(c).reduce(function(a,b){a[decodeURIComponent(b).replace(/^ac\./g,"")]=c[b].map(decodeURIComponent);return a},{});return{target:"addonmodule",context:{addonKey:decodeURIComponent(b.addonKey),moduleKey:decodeURIComponent(b.moduleKey),context:a}}}return{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/ajs.js' */
define("atlassian-nps-plugin/js/amd-shims/ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/templates.js' */
define("atlassian-nps-plugin/js/amd-shims/templates",function(){return NPS.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/wrm.js' */
define("atlassian-nps-plugin/js/amd-shims/wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/util.js' */
define("atlassian-nps-plugin/js/nps/util",["atlassian-nps-plugin/js/nps/product","atlassian-nps-plugin/js/amd-shims/ajs"],function(b,a){var c={};c.kfyShuffle=function(g){for(var f=g.length-1;f>0;f--){var d=Math.floor(Math.random()*(f+1));var e=g[f];g[f]=g[d];g[d]=e}return g};c.sendAnalyticsEvent=function(d,e){e=e||{};e.product=b.getProductName().toLowerCase();e.page=window.location.pathname.replace(/\//g," ");var f={name:"nps."+d,data:e};a.trigger("analyticsEvent",f)};c.hasShowingDialog=function(){return a.$(".aui-dialog:visible, aui-dialog2:visible").length>0};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/submission.js' */
define("atlassian-nps-plugin/js/nps/submission",["atlassian-nps-plugin/js/nps/util"],function(b){var a={};a.showNotification=function(c){b.sendAnalyticsEvent("notification.show",c)};a.startSurvey=function(){b.sendAnalyticsEvent("survey.start",{})};a.cancelSurvey=function(c){var d={};if(c){d.cancelContext=c}b.sendAnalyticsEvent("survey.cancel",d)};a.ignoreSurvey=function(){b.sendAnalyticsEvent("survey.ignore",{})};a.submitSurvey=function(c){b.sendAnalyticsEvent("survey.submit",c)};a.scheduleNextSurveyDate=function(c){b.sendAnalyticsEvent("survey.schedule",c)};a.showAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.show",c)};a.acceptAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.accept",c)};a.closeAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.close",c)};a.updateNpsStatus=function(c){b.sendAnalyticsEvent("server.status.changed",c)};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/product/confluence.js' */
define("atlassian-nps-plugin/js/nps/product",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/amd-shims/wrm"],function(c,b){var a;var d=b.data.claim("com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources.nps-opted-out");return{getProductName:function(){return"Confluence"},setBindings:function(){require(["atlassian-nps-plugin/js/nps/client-storage"],function(e){c.bind("rte-ready",function(){e.remove("idleStart")});c.bind("rte-destroyed",function(){e.set("idleStart",Date.now())})})},getUserKey:function(){return c.Meta.get("remote-user")},isServerMode:function(){if(a===undefined){var e=b.data.claim("com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources.is-server-instance-data-provider");a=(e===true)}return a},enableABTesting:function(){return true},allowDisplayNotification:function(){if(d){return false}var i=this.getLocation();var g=/authenticate.action/.test(i.href);if(g){return false}if(c.DarkFeatures&&c.DarkFeatures.isEnabled("nps.survey.inline.dialog")){var f=i.search;var e=/(focusedCommentId|replyToComment)=(\d+)/.test(f);var h=/preview=/.test(f);return !e&&!h}else{return true}},getSurveyTrigger:function(){return"#help-menu-link"},getLocation:function(){return window.location},allowDisplayAcknowledgementFlag:function(){if(d){return false}var f=this.getLocation();var e=function(){var g=/\/welcome.action/.test(f.href);var i=sessionStorage.getItem("onboarding-state:tutorialFlow");var h=i&&i!=="__complete__";return g||h};return !e()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/client-storage.js' */
define("atlassian-nps-plugin/js/nps/client-storage",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/nps/product"],function(b,d){var f;function c(){if(f===undefined){f="nps-"+d.getUserKey()}return f}function a(g){return c()+"-"+g}function e(g){return a(d.getProductName().toLowerCase().replace(/\s+/g,"")+"-"+g)}return{set:function(g,h){try{localStorage.setItem(a(g),h)}catch(i){b.warn("Could not set NPS value: "+i)}},setProductValue:function(g,h){try{localStorage.setItem(e(g),h)}catch(i){b.warn("Could not set NPS value: "+i)}},get:function(g){return localStorage.getItem(a(g))},getProductValue:function(g){return localStorage.getItem(e(g))},remove:function(g){localStorage.removeItem(a(g))},removeProductValue:function(g){localStorage.removeItem(e(g))},containsKey:function(g){return localStorage.getItem(a(g))!==null},getNumber:function(g){var h=parseInt(this.get(g),10);if(isNaN(h)){return 0}return h},increment:function(g){this.set(g,(this.getNumber(g)+1))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-server.js' */
define("atlassian-nps-plugin/js/nps/config-manager-server",["atlassian-nps-plugin/js/amd-shims/ajs","jquery","atlassian-nps-plugin/js/nps/client-storage","atlassian-nps-plugin/js/nps/submission"],function(a,e,d,b){var c={optedOut:null,dismissedCount:null,timeToNextSurvey:null};return{getCachedData:function(){return c},removeCachedData:function(){c={optedOut:null,dismissedCount:null,timeToNextSurvey:null}},fetchConfig:function(){return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config",type:"GET",contentType:"application/json",cache:false,success:function(f){if(f.dismissedCount===null){f.dismissedCount=0}c=f;d.setProductValue("nextSurveyDate",Date.now()+c.timeToNextSurvey)},error:function(f){a.warn("Error getting NPS config: ",f)}})},setConfig:function(){var f;if(typeof arguments[0]==="object"){f=arguments[0]}else{if(arguments.length!==2){throw ("Need to provide key/value as argument to set NPS server config")}f={};f[arguments[0]]=arguments[1]}if(localStorage&&localStorage.getItem("nps-testing")==="true"){f.forceUpdate=true}return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config",type:"PUT",contentType:"application/json",data:JSON.stringify(f),success:function(){e.extend(c,f)},error:function(g){a.warn("Error setting NPS config: ",g)}})},scheduleNextSurveyDate:function(){return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config/nextSurveyDate",type:"POST",contentType:"application/json",success:function(f){b.scheduleNextSurveyDate({nextSurveyDate:f});d.setProductValue("nextSurveyDate",f)},error:function(f){a.warn("Error scheduling next survey date for NPS: ",f)}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/session-manager.js' */
define("atlassian-nps-plugin/js/nps/session-manager",["atlassian-nps-plugin/js/nps/client-storage"],function(e){var b=1000*60;var c=5*b;var g=60*b;var f=10*b;function a(){if(!e.containsKey("sessionStart")){e.set("sessionStart",Date.now())}else{if((Date.now()-e.getNumber("lastActive"))>g){e.set("sessionStart",Date.now())}}}function d(){if(!e.containsKey("idleStart")){e.set("idleStart",Date.now())}}return{update:function(){d();a();e.set("lastActive",Date.now())},isSurveyTime:function(){return this.isInSession()&&this.isIdle()},isIdle:function(){var h=Date.now()-e.getNumber("idleStart");return h>c},isInSession:function(){var h=Date.now()-e.getNumber("sessionStart");return h>f},reset:function(){e.remove("lastActive");e.remove("sessionStart");e.remove("idleStart")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/atlassian-nps-plugin.js' */
define("atlassian-nps-plugin/js/atlassian-nps-plugin",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/amd-shims/wrm","atlassian-nps-plugin/js/nps/client-storage","atlassian-nps-plugin/js/nps/product","atlassian-nps-plugin/js/nps/session-manager","atlassian-nps-plugin/js/nps/submission","atlassian-nps-plugin/js/nps/util","jquery"],function(j,a,b,g,d,i,k,e){var m;var o=1000*60*60*24*30;function n(p){m=p;var q=b.getNumber("displayCount");g.setBindings();d.update();if(b.get("optedOut")==="true"){m.setConfig("optedOut",true)}else{if(q!==0){if(q<3){m.fetchConfig().then(h)}else{l()}}else{if(Date.now()-b.get("lastSurveyDate")>=o){if(b.getProductValue("nextSurveyDate")===null){m.fetchConfig().then(h)}else{if(b.getProductValue("nextSurveyDate")-Date.now()<0){m.fetchConfig().then(h)}}}}}}function h(){c().then(f)}function c(){var q=30000;var p=e.Deferred();if(j.DarkFeatures&&j.DarkFeatures.isEnabled("nps.survey.inline.dialog")){q=5000}if(localStorage&&localStorage.getItem("nps-testing")==="true"){q=0}setTimeout(function(){var r=!k.hasShowingDialog();if(r&&d.isSurveyTime()&&m.getCachedData().timeToNextSurvey!=null&&m.getCachedData().timeToNextSurvey<=0){p.resolve()}},q);return p.promise()}function f(){if(g.allowDisplayNotification()===true){a.require("wr!com.atlassian.plugins.atlassian-nps-plugin:nps-specific-resources-async",function(){require(["atlassian-nps-plugin/js/nps/main"],function(p){p.launch(m);b.increment("displayCount");i.showNotification({displayCount:b.getNumber("displayCount"),dismissedCount:parseInt(m.getCachedData().dismissedCount,10)});b.set("lastSurveyDate",Date.now())})})}}function l(){a.require("wr!com.atlassian.plugins.atlassian-nps-plugin:nps-submission-resources",function(){require(["atlassian-nps-plugin/js/nps/submission"],function(p){b.remove("displayCount");p.ignoreSurvey();m.scheduleNextSurveyDate();d.reset()})})}return{init:n}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/bootstrap.js' */
require(["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/atlassian-nps-plugin","atlassian-nps-plugin/js/nps/config-manager-server","atlassian-nps-plugin/js/nps/product"],function(b,d,a,c){if(c.getUserKey()){b.toInit(function(){d.init(a)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:ajs-amd', location = 'lib/amd/ajs-amd.js' */
define("ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:wrm-amd', location = 'lib/amd/wrm-amd.js' */
define("wrm",function(){if(WRM.data instanceof Function){WRM.data.claim=WRM.data}return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:backbone-amd', location = 'lib/amd/backbone-amd.js' */
define("backbone",function(){return Backbone});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:jquery-amd', location = 'lib/amd/jquery-amd.js' */
define("jquery",function(){return AJS.$});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:underscore-amd', location = 'lib/amd/underscore-amd.js' */
define("underscore",function(){return _});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/hipChatDiscovery.js' */
define('confluence/hipchat/integration/hipchat/discovery',
        [
            'wrm'
        ],
        /**
         * HipChat integration feature discovery
         * @tainted WRM
         * @exports confluence/hipchat/integration/discovery/hipchat
         */
        function (WRM) {
            "use strict";
            var pluginKey = "com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";

            var dataKey = pluginKey + ":discovery-javascript-data.link-active";

            /**
             * @type {{linkActive:boolean, conditionsMet:boolean, admin: boolean}}
             */
            var discoveryData = typeof WRM.data != 'function' ? WRM.data.claim(dataKey) : WRM.data(dataKey);

            return {
                /**
                 * Is the instance linked to at least one HipChat instance
                 * @returns {boolean}
                 */
                isLinked: function () {
                    return discoveryData.linkActive === true;
                },
                /**
                 * Are the conditions met to show the discovery popups
                 *
                 * i.e. At least 5 users and at least 1 space
                 *
                 * @returns {boolean}
                 */
                isConditionsMet: function () {
                    return discoveryData.conditionsMet === true;
                },
                /**
                 * Is the user a site admin?
                 *
                 * @returns {boolean}
                 */
                isAdmin: function() {
                    return discoveryData.admin === true;
                },
                /**
                 * Get the plugin key of this module
                 *
                 * @returns {string}
                 */
                pluginKey: function () {
                    return pluginKey;
                }
            };
        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/discoveryPopup.js' */
define('confluence/hipchat/integration/hipchat/discovery/popup',
    [
    'jquery'
    ], function(
        $
) {
    return {
        /**
         *
         * @param {{featureKey:string,
         *  analytics:string,
         *  template:function,
         *  shouldShow:function,
         *  name:string,
         *  target: jQuery,
         *  onAccept: function,
         *  onDismiss: function }} opts
         */
        show : function(opts) {
            var shouldShow, pluginDiscovery;
            var featureKey = opts.featureKey;
            if (opts.shouldShow() && Confluence.FeatureDiscovery) {
                pluginDiscovery = Confluence.FeatureDiscovery.forPlugin(opts.pluginKey);
                shouldShow = pluginDiscovery.shouldShow(opts.featureKey, true);
            } else {
                shouldShow = false;
            }

            if (shouldShow) {

                AJS.trigger('analyticsEvent', {name: opts.analytics + '.view', data: {}});

                pluginDiscovery && pluginDiscovery.addDiscoveryView(featureKey);

                var dialog;

                var acceptDialog = function () {
                    pluginDiscovery && pluginDiscovery.markDiscovered(featureKey);
                    dialog.hide();
                    AJS.trigger('analyticsEvent', {name: opts.analytics + '.accept', data: {}});

                    if ($.isFunction(opts.onAccept)) {
                        opts.onAccept();
                    }
                };

                var dismissDialog = function (content) {
                    return function(event) {
                        event.preventDefault();
                        pluginDiscovery && pluginDiscovery.markDiscovered(featureKey);
                        dialog.hide();
                        content.parent().remove();

                        AJS.trigger('analyticsEvent', {name: opts.analytics + '.dismiss', data: {}});

                        if ($.isFunction(opts.onDismiss)) {
                            opts.onDismiss();
                        }
                    }
                };

                dialog = AJS.InlineDialog(opts.target, opts.name,
                        function (content, trigger, showPopup) {
                            content.html(opts.template({}));

                            showPopup();

                            //Bind handlers and apply styles
                            var parent = content.parent();

                            parent.addClass("hipchat-integration-discovery");

                            if (opts.fixed === true) {
                                parent.addClass("hipchat-integration-discovery-fixed");
                            }

                            content.find("#hipchat-integration-discovery-open").click(acceptDialog);

                            content.find("#hipchat-integration-discovery-dismiss").click(dismissDialog(content));
                        }
                        , {noBind: true});

                dialog.show();

                if (opts.fixed === true) {
                    // For fixed inline dialog recalculate position on window resize
                    $(window).resize(function () {
                        dialog.refresh();
                    });
                }
            }
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-resources', location = 'discovery/integrationDiscovery.soy' */
// This file was automatically generated from integrationDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.integrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Connect your Confluence site to HipChat') + '</h2><p>' + soy.$$escapeHtml("Set up and send notifications to HipChat rooms.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml('Integrate with HipChat') + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml('Not now') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.integrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.integrationDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatServerDiscovery', location = 'discovery/integrationDiscovery.js' */
require([
            'jquery',
            'confluence/hipchat/integration/hipchat/discovery',
            'confluence/hipchat/integration/hipchat/discovery/popup'
        ],
        /**
         * HipChat integration feature discovery
         * @exports confluence/hipchat/integration/discovery/server
         * @tainted Confluence.FeatureDiscovery
         * @tainted Confluence.Templates
         */
        function (
                $,
                hipchat,
                discovery) {
            "use strict";

            $(function () {
                var hipChatIntegrationUrl = AJS.contextPath() + "/plugins/servlet/hipchat/configure";

                discovery.show({
                    featureKey: "hipChatServerIntegration",
                    pluginKey: hipchat.pluginKey(),
                    analytics: "notifications.hipchat.discovery",
                    template: Confluence.Templates.Hipchat.Discovery.integrationDialog,
                    name: "hipchat-integration-dialog",
                    target: $("#admin-menu-link"),
                    shouldShow: function () {
                        return ! hipchat.isLinked()
                                && hipchat.isConditionsMet()
                                && hipchat.isAdmin();
                    },
                    onAccept: function () {
                        window.location.assign(hipChatIntegrationUrl);
                    },
                    onDismiss: function() {},
                    fixed:false
                })
            });
        });

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChat.Presence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_ignored) {
  return '<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-' + soy.$$escapeHtml(opt_data.statusCode) + '" data-status="' + soy.$$escapeHtml(opt_data.statusCode) + '" title="' + soy.$$escapeHtml(opt_data.statusMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.badge.soyTemplateName = 'Confluence.Templates.HipChat.Presence.badge';
}


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_ignored) {
  return '<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="' + soy.$$escapeHtml('Unable to start chat as this user is not known in HipChat.') + '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">' + soy.$$escapeHtml('Chat') + '</span></span></button><button class="aui-button hipchat-voice" title="' + soy.$$escapeHtml('Unable to start voice calls as this user is not known in HipChat.') + '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">' + soy.$$escapeHtml('Voice') + '</span></span></button><button class="aui-button hipchat-video" title="' + soy.$$escapeHtml('Unable to start video calls as this user is not known in HipChat.') + '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">' + soy.$$escapeHtml('Video') + '</span></span></button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.chatBar.soyTemplateName = 'Confluence.Templates.HipChat.Presence.chatBar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function($) {
    "use strict";

    var chatBarEnabled = AJS.DarkFeatures.isEnabled('hipchat.chatbar');

    var Routes = {
        hipChatCall: function(userId, callType) {
            if(!userId) {
                return;
            }
            return "hipchat://hipchat.com/user/" +
                    encodeURI(userId) +
                    (callType ? "?call=" + encodeURI(callType) : "");
        }
    };

    var baseUrl = AJS.contextPath() + "/rest/hipchat/integration/1.0/users/";

    var hipChatClickHandler = function(online) {
        return function(e) {
            var button = $(this);

            var confluenceUserId = button.attr('data-user-id');

            var callerId = button.attr('data-caller-id');
            if (!callerId) {
                return;
            }

            var callType = button.attr('data-call-type');

            //If user is offline, then don't allow voice/video calls
            if (! online && callType) {
                return;
            }

            window.location.replace(Routes.hipChatCall(callerId, callType));

            AJS.trigger('analyticsEvent', {
                name: "hipchat.chatbar." + (callType || "chat"),
                data: {
                    userId: confluenceUserId
                }
            });

            e.preventDefault();
        }
    };

    var statusHandler = function (element) {
        return function (response) {
            if(!response || !response.presence) {
                return;
            }

            var confluenceUserId = response.userId;
            var hipChatUserId = response.hipChatUserId;
            var statusCode;
            var statusMessage;

            var buttons = $(element).find('.hipchat-chatbar .aui-button');
            buttons.attr('data-user-id', confluenceUserId);
            buttons.attr('data-caller-id', hipChatUserId);
            // Evil... userlink.js stops propagation of events, so we can't use delegate. :/
            buttons.click(hipChatClickHandler(response.presence.is_online));

            if(response.presence.is_online) {
                if(response.presence.show === "xa" || response.presence.show === "away") {
                    statusCode = "away";
                    statusMessage = "Away";
                } else if (response.presence.show === "dnd") {
                    statusCode = "dnd";
                    statusMessage = "Do not disturb";
                } else {
                    statusCode = "available";
                    statusMessage = "Available";
                }
                buttons.filter('.hipchat-chat').attr('title', "Start chat with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-voice').attr('title', "Start a voice call with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-video').attr('title', "Start a video call with this user in HipChat.").removeAttr('aria-disabled');
            } else {
                statusCode = "offline";
                statusMessage = "Offline";

                buttons.filter('.hipchat-chat').attr('title', "Start chat with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-voice').attr('title', "Unable to start voice calls as this user is not known in HipChat.");
                buttons.filter('.hipchat-video').attr('title', "Unable to start video calls as this user is not known in HipChat.");
            }

            if(response.presence.status) {
                statusMessage += " (" + response.presence.status + ")";
            }

            $("div.values", element).append(Confluence.Templates.HipChat.Presence.badge({
                statusCode: statusCode,
                statusMessage: statusMessage
            }));

            AJS.trigger('analyticsEvent', {
                name: "hipchat.presence.user.found",
                data: {
                    userId: response.userId
                }
            });
        }
    };

    $(document).bind("ajaxComplete", function (e, res, req) {
        // There is no reliable event in the user popup we can use instead
        // this is an improvement over the v1 implementation (which regex'd then entire response text, not a url).
        if (/userinfopopup\.action/.test(req.url)) {
            $.each($(".vcard"), function (i, vcard) {
                var $vcard = $(vcard);

                var $content = $vcard.closest('.contents');
                var $profile = $content.find('.profile-macro').first();
                var $actions = $content.find('.actions').first();

                if ($profile.hasClass("hipchat-status-applied") || !$actions.length) {
                    // already done, or user popup not ready for hipchatification
                    return;
                }

                $profile.addClass("hipchat-status-applied");

                if(chatBarEnabled) {
                    $actions.addClass("hipchat-chatbar-support");

                    $actions.append(Confluence.Templates.HipChat.Presence.chatBar());

                    // restyle
                    $actions.find('.ajs-menu-bar').addClass('aui-buttons');
                    $actions.find('.ajs-button > a').addClass('aui-button');
                    $actions.find('.user-popup-more').addClass('aui-button');
                    $actions.find('.user-popup-more > span > span').addClass('aui-icon aui-icon-small aui-iconfont-more').text('');
                }

                var username = $(".userLogoLink", $vcard).attr('data-username');
                var url = baseUrl + encodeURIComponent(username);
                $.getJSON(url, statusHandler($content)).fail(function(jxr) {
                    if(jxr.status === 404) {
                        // Check is just missing from HipChat
                        try {
                            var result = JSON.parse(jxr.responseText);
                            if(result.userId) {
                                // Confluence user id, so known to Confluence, but unknown to HipChat, so we want to track this event.
                                AJS.trigger('analyticsEvent', {
                                    name: "hipchat.presence.user.unknown",
                                    data: {
                                        userId: result.userId
                                    }
                                });
                            }
                        } catch (e) {
                            // ignore
                        }
                    }
                });
            });
        }
    });
})(AJS.$);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscoveryData.js' */
define('confluence/hipchat/spacetoroom/hipchat/discovery',
        [
        ],
        /**
         * HipChat integration feature discovery
         * @tainted WRM
         * @exports confluence/hipchat/integration/discovery/hipchat
         */
        function () {
            "use strict";
            var pluginKey = "com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";

            return {
                isSpaceAdmin: function () {
                    return AJS.Meta.get("is-space-admin") === true;
                },
                hasSpaceConfiguration: function () {
                    return AJS.Meta.get("has-space-config") === true;
                },
                pluginKey: function () {
                    return pluginKey;
                }
            };
        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.js' */
require([
            'jquery',
            'confluence/hipchat/integration/hipchat/discovery',
            'confluence/hipchat/spacetoroom/hipchat/discovery',
            'confluence/hipchat/integration/hipchat/discovery/popup'
        ],
        /**
         * HipChat space feature discovery
         * @exports confluence/hipchat/integration/discovery/space
         * @tainted Confluence.FeatureDiscovery
         * @tainted Confluence.Templates
         */
        function (
                $,
                integration,
                spacetoroom,
                discovery
        ) {
            "use strict";

            $(function () {
                var hipChatIntegrationUrl = AJS.contextPath() + "/spaces/hipchat2.action?key=" + encodeURIComponent(AJS.Meta.get("space-key"));
                var menuItem = $("#space-tools-menu-trigger");

                if(menuItem.length) {
                    discovery.show({
                        featureKey: "hipChatSpaceIntegration",
                        pluginKey: spacetoroom.pluginKey(),
                        analytics: "notifications.hipchat.space.discovery",
                        template: Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog,
                        name: "hipchat-space-integration-dialog",
                        target: menuItem,
                        shouldShow: function () {
                            return integration.isLinked()
                                && spacetoroom.isSpaceAdmin()
                                && !spacetoroom.hasSpaceConfiguration();
                        },
                        onAccept: function () {
                            window.location.assign(hipChatIntegrationUrl);
                        },
                        fixed: true
                    });

                    discovery.show({
                        featureKey: "hipChatServerIntegration",
                        pluginKey: spacetoroom.pluginKey(),
                        analytics: "notifications.hipchat.space.link",
                        template: Confluence.Templates.Hipchat.Discovery.spaceLinkDialog,
                        name: "hipchat-space-link-dialog",
                        target: menuItem,
                        /**
                         * Conditions for showing space level integration popup,
                         *      however the popup will only display if the user is not a site admin
                         *      but is a space admin.
                         *
                         * @returns {boolean}
                         */
                        shouldShow: function () {
                            return !integration.isLinked()
                                && integration.isConditionsMet()
                                && !integration.isAdmin()
                                && spacetoroom.isSpaceAdmin();
                        },
                        onAccept: function () {
                            window.location.assign(hipChatIntegrationUrl);
                        },
                        fixed: true
                    });
                }
            });


        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.soy' */
// This file was automatically generated from spaceDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Send messages to a HipChat room') + '</h2><p>' + soy.$$escapeHtml('Send notifications for new pages, blog posts or space changes directly to a room in HipChat.') + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml('Add HipChat notifications') + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml('Not now') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog';
}


Confluence.Templates.Hipchat.Discovery.spaceLinkDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Connect your Confluence site to HipChat') + '</h2><p>' + soy.$$escapeHtml('Set up and send notifications to HipChat rooms.') + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml('Integrate with HipChat') + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml('Not now') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceLinkDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceLinkDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v3', location = '/js/confluence/macro/autoconvert.js' */
(function(a,b){b("ac/confluence/macro/autoconvert",[],function(){var d=function(i){return i.replace(/[\-\[\]\/\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
};
var c=function(k,i,j){return j.replace(new RegExp(k,"g"),i)
};
var h=function(i){while(i.indexOf("{}{}")!==-1){i=i.replace("{}{}","{}")
}i=d(i);
i=c("{}","[^/]*?",i);
i="^"+i+"$";
return i
};
var f=function(k){var l=["http://","https://","http://{}","https://{}","http://{}.{}","https://{}.{}","http://{}.{}.{}","https://{}.{}.{}"];
for(var j=0;
j<l.length;
j++){if(k===l[j]){return false
}}return true
};
var g=function(i){return i&&i.macroName&&i.urlParameter&&i.matchers
};
var e=function(i,j){return function(m,o,q){var l=i.macroName;
var k=i.urlParameter;
var s=i.matcher;
var r=m.source.match(s);
if(r){var p={};
if(k){p[k]=m.source
}var n={name:l,params:p};
j(n,q)
}else{q()
}}
};
return{escapePattern:d,replaceAll:c,factory:e,convertPatternToRegex:h,hasAllFields:g,isPatternSafe:f,registerAutoconvertHandlers:function(q,p){if(q){var k=q.length;
for(var n=0;
n<k;
n++){if(g(q[n])){var l=q[n].matchers.length;
for(var m=0;
m<l;
m++){if(f(q[n].matchers[m].pattern)){var o={macroName:q[n].macroName,urlParameter:q[n].urlParameter,matcher:h(q[n].matchers[m])};
p.plugins.Autoconvert.autoConvert.addHandler(e(o,function(j,i){p.plugins.Autoconvert.convertMacroToDom(j,i,function(r,t,s){AJS.log("error converting macro [ "+j.name+" ] to dom elements [ "+s+" ]");
i()
})
}))
}}}}}}}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v3', location = '/js/confluence/macro/autoconvert-init.js' */
(function(b,a){a(["ac/confluence/macro/autoconvert"],function(c){AJS.bind("init.rte",function(){var d=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources.connect-autoconvert-data");
c.registerAutoconvertHandlers(d,tinymce)
})
})
})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources-v3', location = 'js/confluence/contentbyline/content-byline-view.js' */
AJS.toInit(function(f){var d="com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources.connect-content-byline-data";
var c;
AJS.bind("contentProperty.update",function(m,l){if(!(l&&l.contentProperty&&l.contentProperty.key)){return
}c=c||WRM.data.claim(d);
var n=c[l.contentProperty.key];
if(!n){return
}var i=f(document.getElementById(n));
var k=l.contentProperty.value;
var g=k.name;
var j=k.tooltip;
var h=k.icon;
if(g&&g.value){i.find("span").text(g.value)
}if(j&&j.value){i.attr("title",j.value)
}if(h&&h.url){i.find("img").attr("src",b(h.url,l.context))
}});
function b(h,g){if(a(h)){return h
}return g.remoteOrigin+e(h)
}function a(g){return g.startsWith("http:")||g.startsWith("https:")||g.startsWith("data:")
}function e(g){return g.startsWith("/")?g:("/"+g)
}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:performance-session', location = 'includes/js/performance-session.js' */
define("confluence/performance-session",["ajs","window"],function(e,j){var c=!1,k="",l=!1,f={},m={},n=function(){if(c){for(var a={},o={name:k,data:a},d=b.getEntriesByType("measure"),g=0;g<d.length;g++){var h=d[g],i=h.name;f[i]&&(a[i+".startTime"]=h.startTime,a[i+".duration"]=h.duration)}e.trigger("analyticsEvent",o);c=!1}},b=j.performance;return{register:function(a,b,d){l?e.warn("A session is already active, registering a new session will override the previous session"):(l=!0,k=a,f=b,m=d,j.addEventListener("beforeunload",
function(){c&&n()}))},debugTime:function(a){b&&(b.mark&&f[a])&&(c||(c=!0),b.mark(a+".start"));e.debugEnabled()&&console.time&&(console.log(a+" started"),console.time(a))},debugTimeEnd:function(a){if(b&&b.mark&&f[a]){var c=a+".start";if(0===b.getEntriesByName(c,"mark").length)e.warn("Calling debugTimeEnd for "+a+" before debugTime");else{var d=a+".end";b.mark(d);b.measure(a,c,d);m[a]&&n()}}e.debugEnabled()&&console.timeEnd&&console.timeEnd(a)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:initialise-metrics-collection', location = '/js/initialise-metrics.js' */
define("confluence-collaborative-editor-plugin/initialise-metrics",["confluence/performance-session"],function(a){return function(){a.register("confluence.editor.quickedit.loading.times",{"confluence.editor":!0,"confluence.editor.preload":!0,"confluence.editor.quick.fetchContent":!0,"confluence.editor.tinymce":!0,"confluence.editor.synchrony":!0,"confluence.editor.synchrony.CR":!0,"confluence.editor.synchrony.connect":!0,"confluence.editor.synchrony.deps":!0,"confluence.editor.synchrony.init":!0,
"confluence.editor.synchrony.jsLoad":!0,"confluence.editor.synchrony.snapshot":!0,"confluence.editor.synchrony.unmarshal":!0},{"confluence.editor.synchrony.connect":!0})}});require("confluence/module-exporter").safeRequire("confluence-collaborative-editor-plugin/initialise-metrics",function(a){a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-templates', location = 'includes/js/amd/shim/confluence-templates-amd.js' */
define("confluence/templates",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Templates&&(Confluence.Templates={});return Confluence.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/js/dom-filter-field.js' */
define("confluence/dom-filter-field",["ajs","confluence/templates","jquery"],function(f,k,e){return function(c){function i(){g=e(c.items)}function h(){return e.trim(b.filter(":not(.blank-search)").val())}function j(){c.searcher(g,h());c.postSearch(g.filter(":visible"))}var d={items:null,matcher:function(a,c){return-1<a.text().toLowerCase().indexOf(c)},searcher:function(a,b){""!==b?(b=b.toLowerCase(),a.each(function(){var a=e(this),d=c.matcher(a,b);a.toggleClass("hidden",!d)})):a.removeClass("hidden")},
postSearch:function(){},placeholderText:"Search",submitCallback:function(a,b){f.debug("DomFilterField submitted with "+a.length+" item(s) for search text >"+b+"<")}},c=e.extend(d,c),g;i();var d=e(k.DomFilterField.form()),b=d.find("input");b.keyup(function(a){j();return f.stopEvent(a)}).keyup(function(a){return f.stopEvent(a)}).focus(function(a){b.hasClass("blank-search")&&b.removeClass("blank-search").val("");a.target.select()}).blur(function(){""===h()&&b.addClass("blank-search").val(c.placeholderText)}).blur();
c.formId&&d.attr("id",c.formId);c.inputId&&b.attr("id",c.inputId);d.submit(function(a){f.stopEvent(a);a=g.filter(":visible");a.length&&c.submitCallback(a,h());return!1});return{form:d,reset:function(){""!==h()&&(b.val("").blur(),c.searcher(g,""))},refreshItems:i,filter:j,focus:function(){b.focus()},focusAndSearch:function(a){a=e.trim(a);b.val(a).keyup();a&&b.removeClass("blank-search");b.focus()}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/dom-filter-field","Confluence.DomFilterField");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/soy/dom-filter-field.soy' */
// This file was automatically generated from dom-filter-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DomFilterField.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DomFilterField == 'undefined') { Confluence.Templates.DomFilterField = {}; }


Confluence.Templates.DomFilterField.form = function(opt_data, opt_ignored) {
  return '<form class="aui dom-filter-field-form"><input type="text" class="text"/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.DomFilterField.form.soyTemplateName = 'Confluence.Templates.DomFilterField.form';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/loader.js' */
AJS.toInit(function(c){Confluence.Blueprint=Confluence.Blueprint||{};var h=false;Confluence.Blueprint.Dialog=Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/blueprints/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.helpLink,headingText:"Create"});Confluence.Blueprint.loadDialog=function(q){var p=AJS.$.Deferred();var o;if(!h){o=Confluence.Blueprint.Dialog.openDialog(q);var s=WRM.require("wrc!create-content");var r=AJS.$.Deferred();Confluence.Blueprint.Dialog.requestSpaces().done(function(){var u=Confluence.Blueprint.Dialog.loadedSpaces,t=u.promotedSpaces.spaces[0]||u.otherSpaces.spaces[0];Confluence.Blueprint.Dialog.requestWebItems(t.id).done(function(){r.resolve()})});AJS.$.when(s,r.promise()).done(function(){AJS.trigger("blueprint.wizard-register.load");Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);q=AJS.$.extend(q,{createDialog:o,dialogBase:Confluence.Blueprint.Dialog});h=true;p.resolve(Confluence.Blueprint.Dialog.openDialog(q))}).fail(function(){AJS.log("Could not load resources for create dialog")})}else{p.resolve(Confluence.Blueprint.Dialog.openDialog(q))}return p.promise()};var l=false;AJS.bind("blueprint.wizard-register.load",function(){if(!l){AJS.trigger("blueprint.wizard-register.ready");l=true}});var j=c("#create-page-button:visible"),i=false;if(!j.length){return}j.click(function(o){if(n(o)){AJS.trigger("analytics",{name:"confluence.quick.create.dialog.open"});Confluence.Blueprint.loadDialog({triggerSrc:"create-page"});return false}}).mousedown(function(p){var o=p.which||p.button;if(c.browser.mozilla&&o==2||o==3){o=0}i=o!==0&&o!==1||p.ctrlKey||p.altKey||p.shiftKey||p.metaKey});b(j);c(document).on("click",".create-child-page-link",function(){Confluence.Blueprint.loadDialog({location:"child-page"});return false});c("#addPageLink, #addBlogLink, .acs-pagetree-create-link").hide();m(j);e();function n(p){if(!i){return true}i=false;var o=c(p.target).closest("a").attr("href");if(!o||o.indexOf("createpage.action")==-1){return true}return false}function b(o){var t=AJS.Meta.get("content-type");var s=AJS.Meta.get("content-id")||AJS.Meta.get("page-id");var r=AJS.contextPath()+"/pages/createpage.action";var q=AJS.Meta.get("space-key");var p;if(q){if(t=="page"){p=r+"?"+c.param({spaceKey:q,fromPageId:s})}else{p=r+"?"+c.param({spaceKey:q})}o.attr("href",p)}}function m(p){var o=c("#quick-create-page-button");if(!o.length){p.removeClass("clc-create-dialog-btn").find("span").removeClass()}else{if(o.is(":visible")){f(p);o.on("click",a)}}}function a(o){b(c(o.target));AJS.trigger("analytics",{name:"confluence.quick.create.blank.click"})}function f(o){var q=window.location.href;var p=q.indexOf("src=quick-create")!=-1;if(!p){o.on("click",function(){k()});return}c.getJSON(AJS.contextPath()+"/rest/create-dialog/1.0/storage/quick-create",function(r){if(!r.isExist){g(o)}})}function g(p){var o=new AJS.InlineDialog(c("#create-page-button"),"discoveryTooltip",function(r,q,s){r.html(Confluence.Quick.Create.discoveryTooltip());s();AJS.trigger("analytics",{name:"confluence.quick.create.discovery.open"})},{gravity:"s",width:270,noBind:true,persistent:true});o.show();c(document).off("click","#closeDisDialog").on("click","#closeDisDialog",function(){AJS.trigger("analytics",{name:"confluence.quick.create.discovery.close"});o.hide();k()});p.on("click",function(){o.hide();k()})}function k(){c.ajax({url:AJS.contextPath()+"/rest/create-dialog/1.0/storage/quick-create",type:"PUT"})}function e(){var o=window.location.pathname;if(o.indexOf("/draft-createpage.action")>-1){AJS.bind("rte-ready",function(q){c("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.save"})});c("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.close"})})})}else{if(o.indexOf("/createpage.action")>-1){var p=c("#createpageform input[name='queryString']").val();if(typeof p==="string"&&p.indexOf("src=quick-create")>-1){AJS.bind("rte-ready",function(q){c("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.save"})});c("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.close"})});c("#rte-button-location").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.change.location"})})})}else{AJS.bind("rte-ready",function(q){c("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.save"})});c("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.close"})})})}}}}var d=c("#quick-create-page-button");if(d.is(":visible")){AJS.whenIType("c").followLink("#quick-create-page-button")}else{AJS.whenIType("c").click("#create-page-button")}});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
(function(){function a(d,c,e){Confluence.Blueprint.Dialog.requestWebItems(d,c).done(function(f){var g=Confluence.Blueprint.Dialog.loadedWebitems[d];if(_.isEmpty(g)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+d+"<");return}e(f,g)}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+d+"< failed")})}function b(){var c={};AJS.$("#create-dialog-init-params div").each(function(){c[$(this).data("key")]=$(this).data("value")});return c}AJS.toInit(function(){Confluence.Blueprint=$.extend(Confluence.Blueprint,{loadDialogAndOpenTemplate:function(c){if(!_.isObject(c)){throw new Error("Confluence.Blueprint.loadDialogAndOpenTemplate called with no options")}var e=c.spaceKey,h=c.contentBlueprintId,d=c.templateId,g=c.title,f=c.initContext?c.initContext:b();if(e){Confluence.Blueprint.loadDialog({showDialog:true,updateHeight:false,showStepOne:true,initContext:f}).done(function(i){a(e,true,function(m,n){var k=_.find(n,function(o){if(h){return o.contentBlueprintId==h}return o.templateId==d});if(!k){AJS.log("create-from-template-macro: No Create dialog web item found for contentBlueprintId >"+h+"< and templateId >"+d+"<");return}var l=k.itemModuleCompleteKey;k=$.extend({},k);k.title=g;k.spaceKey=""+e;AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{config:k});Confluence.Blueprint.fireWizard(m,k,i);i.removeBackButton();var j=k.howToUseTemplate&&!k.skipHowToUse;if(j||Confluence.Blueprint.hasWizard(l,k)){i.show()}})})}else{Confluence.Blueprint.loadDialog({initContext:f})}}})});AJS.getWindowQueryParams=function(){var h={};if(window.location.search.length>1){var c=window.location.search.substr(1).split("&");for(var e=0;e<c.length;e++){var g=c[e].split("=");var d=unescape(g[0]);var f=g.length>1?unescape(g[1]):"";h[d]=f}}return h};AJS.toInit(function(){var e=b();if(e.createSpaceDialog){Confluence.SpaceBlueprint.loaded.then(function(){Confluence.SpaceBlueprint.Dialog.launch()});return}var f=AJS.getWindowQueryParams();var d=f.createDialogSpaceKey;if(!f.createDialog&&!d){return}var c=f.createDialogBlueprintKey;if(d&&c){a(d,false,function(h,i){var g=_.find(i,function(j){return j.blueprintModuleCompleteKey==c});if(g){f.createDialogBlueprintId=g.contentBlueprintId}else{AJS.log("No blueprint found with key: "+c)}});delete f.createDialogBlueprintKey}if(d&&!f.createDialogBlueprintId&&!f.createDialogTemplateId){AJS.log("Confluence.Blueprint.launchDialog triggered with incorrect options - please check the URL query: "+window.location.search);return}Confluence.Blueprint.loadDialogAndOpenTemplate({spaceKey:d,contentBlueprintId:f.createDialogBlueprintId,templateId:f.createDialogTemplateId,initContext:e})})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
Confluence.Dialogs=Confluence.Dialogs||{};(function(b){Confluence.Dialogs.CreateDialogBase=function a(J){var g,S,p=J.dialogId,v=J.webItemsPath,y=[],h=false,s=require("confluence/confluence-storage-manager")("confluence-create-content-plugin"),A;function z(){if(S.find(".button-panel-cancel-link:visible").is(".disabled")){return}if(Confluence.Blueprint.HowToUse){Confluence.Blueprint.HowToUse.notifyCancel(g)}AJS.trigger("analytics",{name:p+".cancel"+A});g.remove();b(".tipsy").remove();g=null;S=null;return false}function Q(){return b(".create-dialog-create-button:visible")}function O(){return b(".create-dialog-body .template:visible").length}function E(T){return T.data("content-blueprint-id")}function F(V){var X=E(V),U=V.data("template-id"),W=X||U,T=X?"contentBlueprintId":"templateId";if(!W){return R("itemModuleCompleteKey",V.data("item-module-complete-key"))}return R(T,W)}function k(T){if(!O()){return false}if(b(this).attr("disabled")==="disabled"){return false}b(this).attr("disabled","disabled").before('<div class="create-dialog-button-spinner"></div>');b(".create-dialog-button-spinner").spin("small");var W=C.getSpaceKey();var V=b(".template.selected");var U=F(V);if(!U){throw new Error("Expected at least one template to be selected")}U.spaceKey=W;Confluence.Blueprint.fireWizard(T,U,g)}function x(){if(!O()){Q().attr("disabled","disabled")}else{Q().removeAttr("disabled")}}function R(T,U){return _.find(C.loadedWebitems[C.getSpaceKey()],function(V){return V[T]==U})}function L(T){return R("contentBlueprintId",T)}function G(V){var U=L(V);var T=U&&U.wizard;var W=e(!T);Q().text(W)}function r(T){T.addClass("selected").siblings().removeClass("selected");G(E(T));AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{item:T})}function q(T,Y){var V=T.find(".template");var X=V.filter(".selected");var U=V.index(X)+Y;U=U%V.length;var W=V.eq(U);r(W);W.focus();T.simpleScrollTo(W)}function c(U){var T=2;switch(U){case 37:return -1;case 39:return +1;case 38:return -T;case 40:return +T}return 0}function K(T){T.bind("keydown",function(U){var V=c(U.which);if(V){q(T,V);return AJS.stopEvent(U)}})}function l(ad,X){var ac=C.getSpaceKey();var af=C.loadedWebitems[ac];af=C.filterWebItems(af);h=af&&af.length>0&&af[0].isPromoted;y=n(af);if(!h&&ad){af=y}var U=Confluence.Templates.Blueprints.templates({webItems:af,spaceKey:ac});var aa=b(U);var Z=I(aa);if(h&&Z===undefined){var ac=C.getSpaceKey();var W=b.parseJSON(s.getItem("showMore"))||{};var ab=W[ac];if(!ab||ab<3){var V=aa.find(".template");_.each(V,function(ah){var ag=b(ah);var ai=F(ag);if(!ai.isPromoted){ag.hide()}});var ae=aa.append(Confluence.Templates.Blueprints.Promoted.showMore())[0];b("#promoted-link",ae).click(function(){W[ac]=(ab||0)+1;s.setItemQuietly("showMore",JSON.stringify(W));b(this).closest(".templates").find(".template").css("display","");b(this).closest("li").remove();x()})}}var T=S.find(".templates");if(T.length){if(X){T.fadeOut(150,function(){T.replaceWith(aa.fadeIn(150));u();o();K(aa)})}else{T.replaceWith(aa)}}else{b(".template-select-container-body").append(aa)}if(M()){var Y=!ad;B(y.length,Y)}else{d()}if(S.searcher){S.searcher.refreshItems();S.searcher.filter()}S.find(".loading").removeClass("loading");S.trigger("create-content.loaded");o();K(aa);if(M()){u()}if(Z!==undefined){S.find(".templates").simpleScrollTo(Z.first().click())}x()}function I(X){if(!g.initContext){return}var Y;var U;var W=Confluence.Blueprint.Selector.getSelectors();for(var V=0,T=W.length;V<T;V++){Y=W[V](g.initContext);if(Y&&Y.length){U=X.find('.template[data-item-module-complete-key="'+Y+'"]');if(U.length){return U}else{AJS.log("Attempted to select a blueprint that could not be found in the create dialog: "+Y)}}}}function u(){var T=b(".templates");T.css("height",T.outerHeight(false)-b("#discover-new-banner").outerHeight())}function o(){b(".template").click(function(){r(b(this))}).dblclick(function(){Q().click()}).focus(function(){b(this).click()});b(".template:visible:first").click()}function n(Y){var X="",V=[],W=[];for(var U=0,T=Y.length;U<T;U++){if(Y[U].isNew){W=P();X=(b.inArray(Y[U].itemModuleCompleteKey,W)!=-1);if(X){Y[U].isNew=false}else{V.push(Y[U])}}}return V}function H(){var T=b.parseJSON(s.getItem("dismissed"));return T||[]}function P(){var T=b.parseJSON(s.getItem("used"));return T||[]}function d(){var T=b("#discover-new-banner");if(T.length){T.remove()}}function B(W,U){d();var T=Confluence.Templates.Blueprints.discoverNewBanner({newItemsNo:W,showLinkToNew:U});var V=b(".template-select-container-body");V.prepend(T);V.find(".aui-button-link").click(function(){var X=!b(this).data("is-filtered");C.fillWebItemsInDialog(X,true)});b("#discover-new-banner .icon-close").click(function(){b("#discover-new-banner").slideUp(150);var Y=H();var X,Z;for(X=0,max=y.length;X<max;X++){Z=y[X].itemModuleCompleteKey;if(b.inArray(Z,Y)==-1){Y.push(Z)}}s.setItemQuietly("dismissed",JSON.stringify(Y));C.fillWebItemsInDialog(false)})}function M(){if(y.length==0||h){return false}var U=H();if(U.length==0){return true}for(var T=0;T<y.length;++T){if(b.inArray(y[T].itemModuleCompleteKey,U)==-1){return true}}return false}function m(T){var T=T||{},V=function(X){if(g){if(X.keyCode===27){z()}else{if(X.keyCode===13){var Y=X.target.nodeName&&X.target.nodeName.toLowerCase();if(Y=="textarea"){return}Q().click()}}}};A=T.triggerSrc?"."+T.triggerSrc:"";var U={width:840,height:449,id:p,closeOnOutsideClick:false,keypressListener:V,focusSelector:".templates"};g=b.extend(new AJS.Dialog(U),C);S=g.popup.element;g.addHeader(J.headingText);g.initContext=T.initContext;var W=S.searcher=Confluence.DomFilterField({items:"#create-dialog .templates .template",inputId:"createDialogFilter",placeholderText:"Filter",postSearch:function(X){if(X.length==0){AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{noVisibleItem:true})}else{X.eq(0).click()}if(!T.showStepOne){x()}},submitCallback:function(X,Y){X.eq(0).dblclick()}});W.form.find("input").attr("tabindex",100);S.find(".dialog-title").prepend(J.helpLinkTemplate(),W.form);g.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody(),"loading");b.extend(g,{addButtonPanel:w,addFullButtonPanel:j,addBackButton:t,removeBackButton:i});g.addButtonPanel(g.getPage(0),k);g.prevPage=function(){S.find(".create-dialog-button-spinner").remove();S.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(g,arguments)};S.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);S.options=T=b.extend({showDialog:true,updateHeight:true},T);g.getPanel(0).setPadding(0);g.gotoPanel(0);b("#create-dialog").find(".wait-icon").spin("medium");T.showDialog&&g.show();Confluence.sessionCheck();return g}function e(T){return T?"Create":"Next"}function f(T){return function(U,V,X){var W=T&&T.call(this,U,V);if(W!==true&&X){X.preventDefault()}else{return W}}}function w(X,W,T,V){var U=e(T);X.addButton(AJS.I18n.getText(U),null,"create-dialog-create-button");X.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");X.buttonpanel.find(".create-dialog-create-button").addClass("aui-button-primary").click(W);if(V){X.buttonpanel.addClass(V)}this.addCancel("Close",f(z))}function j(V,U,W,T){this.addBackButton(V,W);this.addButtonPanel(V,f(U),T);return V.buttonpanel}function t(T,U){T.addButton("Back",f(function(V){U&&U();if(V.curpage==1){V.fillWebItemsInDialog()}V.prevPage();if(V.curpage==0){u()}T.remove();V.page.pop();if(O()&&!b(".template.selected").length){b(".template:visible:first").click()}}),"button-panel-back")}function i(){var U=this.getPage(this.curpage);var T=U.buttonpanel.find(".button-panel-back");T.remove()}function N(V,U){var T=this,U=_.isUndefined(U)?true:U;T.loadedWebitems=T.loadedWebitems||{};var W=this.loadedWebitems[V];if(W){return AJS.$.Deferred().resolveWith(W)}return b.ajax({url:Confluence.getContextPath()+v,dataType:"json",data:{spaceKey:V},async:U}).done(function(X){T.loadedWebitems[V]=X})}function D(){var T=this;return AJS.$.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(U){T.loadedSpaces=U;AJS.trigger("create-dialog.data-ready")})}var C={openDialog:m,closeDialog:z,requestWebItems:N,requestSpaces:D,loadedWebitems:{},loadedSpaces:{},fillWebItemsInDialog:l,filterWebItems:function(T){return T},getSpaceKey:function(){return null}};return C}}(AJS.$));Confluence.Dialogs.Events={};Confluence.Dialogs.Events.ITEM_SELECTED="create-dialog.item-selected";
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-blueprint.js' */
define("confluence-create-content/space-blueprint",[],function(){return{loaded:AJS.$.Deferred()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-create-content/space-blueprint","Confluence.SpaceBlueprint");AJS.deprecate.prop(window.Confluence.SpaceBlueprint,"Dialog",{sinceVersion:"6.0.6",extraInfo:"Use require('confluence-create-content/space-blueprint')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
AJS.toInit(function(c){Confluence.SpaceBlueprint.Dialog=c.extend(Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/space-blueprint/dialog/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.spaceHelpLink,headingText:"Create space"}),{getParentPageId:function(){return undefined},getSpaceKey:function(){return undefined},launch:function(f){var e=f?{showDialog:false,updateHeight:false,showStepOne:true,initContext:{}}:{};var d=Confluence.SpaceBlueprint.Dialog.openDialog(e);createSpacePromise=WRM.require("wrc!create-space");webItemsPromise=Confluence.SpaceBlueprint.Dialog.requestWebItems();AJS.$.when(createSpacePromise,webItemsPromise).done(function(j,i){AJS.trigger("blueprint.wizard-register.load");if(!f&&Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()){Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();d.remove();return}Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();var k=Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];if(_.isEmpty(k)){AJS.log("Could not load space dialog - web items not found");return}if(!f){return}var h=_.find(k,function(l){return l.itemModuleCompleteKey==f});if(!h){AJS.log("Error finding space blueprint with id"+f);return}Confluence.Blueprint.fireWizard(i[0],h,d);d.removeBackButton();var g=h.howToUseTemplate&&!h.skipHowToUse;if(g||Confluence.Blueprint.hasWizard(f,h)){d.show()}}).fail(function(){AJS.log("Could not load resources for space dialog")})}});var a=c('#create-space-button, a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]'),b=c("#create-personal-space-link");if(b.length){b.unbind("click");b.click(function(){Confluence.SpaceBlueprint.Dialog.launch("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item");return false})}if(!a.length){return}c('a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]').unbind("click");a.click(function(d){Confluence.SpaceBlueprint.Dialog.launch();return false});Confluence.SpaceBlueprint.loaded.resolve()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/initial-templates.soy' */
// This file was automatically generated from initial-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_ignored) {
  return Confluence.Templates.Blueprints.waitContainer(null) + '<div class="create-dialog-body loadable"><div class="template-select-container">' + Confluence.Templates.Blueprints.waitContainer(null) + '<div class="template-select-container-body loadable"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.createDialogBody.soyTemplateName = 'Confluence.Templates.Blueprints.createDialogBody';
}


Confluence.Templates.Blueprints.waitContainer = function(opt_data, opt_ignored) {
  return '<div class="wait-container">' + Confluence.Templates.Blueprints.waitIcon(null) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitContainer.soyTemplateName = 'Confluence.Templates.Blueprints.waitContainer';
}


Confluence.Templates.Blueprints.waitIcon = function(opt_data, opt_ignored) {
  return '<div class="wait-icon"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitIcon.soyTemplateName = 'Confluence.Templates.Blueprints.waitIcon';
}


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Pages+and+Blogs"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.helpLink.soyTemplateName = 'Confluence.Templates.Blueprints.helpLink';
}


Confluence.Templates.Blueprints.spaceHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Create+a+Space"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.spaceHelpLink.soyTemplateName = 'Confluence.Templates.Blueprints.spaceHelpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
(function(g,c){var n={};var d;var a;var k={};var o={};function p(r){switch(r){case"view":return"content-blueprint/create-content";case"space":return"space-blueprint/create-space?favorite=true";default:return"content-blueprint/create-draft"}}function h(B,t,A,y){AJS.trigger("blueprint.before-create");var w=c("confluence/confluence-storage-manager")("confluence-create-content-plugin");var C=g.parseJSON(w.getItem("used"));if(C==null){C=[]}C.push(d.itemModuleCompleteKey);w.setItemQuietly("used",JSON.stringify(C));var D="";if(_.isString(B)){D=B}var v=d.createResult;var H;if(y&&y.getSubmissionRestPath){H=y.getSubmissionRestPath()}else{H="/rest/create-dialog/1.0/"+p(v)}var s=Confluence.getContextPath()+H;var G=A?A.getParentPageId():"";var r=!!t.goToIndexPage;delete t.goToIndexPage;var u;if(y&&y.assembleSubmissionObject){u=y.assembleSubmissionObject(t)}else{if(v=="space"){u=b(t)}else{u=q(D,t,G)}}var x=JSON.stringify(u);var F=AJS.$(".create-dialog-button-spinner");var z=AJS.$("#create-dialog .dialog-button-panel");var E=z.find(".create-dialog-create-button");if(F.length===0){z.prepend('<div class="create-dialog-button-spinner"></div>');F=AJS.$(".create-dialog-button-spinner").spin("small")}g.ajax({url:s,type:"POST",dataType:"json",contentType:"application/json",data:x}).done(function(J){var I=r?(J.indexPage.createSuccessRedirectUrl||J.indexPage.url):(J.createSuccessRedirectUrl||J.url);window.location=I}).fail(function(M,N,K){var J=JSON.parse(M.responseText).errorMessage||"";var L="We can\'t create that blueprint right now.";var I=c("aui/flag");I({type:"error",title:L,body:J});if(E.length&&E.prop("disabled")){E.prop("disabled",false)}}).always(function(){F.spinStop();F.remove()});AJS.trigger("blueprint.after-create")}function b(r){var s={spaceKey:r.spaceKey,name:r.name,description:r.description,permissions:r.spacePermission,spaceBlueprintId:d.contentBlueprintId};s.context=r;return s}function q(x,w,t){w=w||{};x=w.title||x||"";var v=w.viewPermissionsUsers||"";var u=w.contentTemplateId||"";var r=w.contentTemplateKey||"";t=w.parentPageId||t;var s={};s.spaceKey=a;s.contentBlueprintId=d.contentBlueprintId;s.contentTemplateId=u;s.contentTemplateKey=r;s.title=x;s.viewPermissionsUsers=v;s.context=w;s.parentPageId=t;return s}function m(t){var r=c("confluence/confluence-storage-manager")("confluence-create-content-plugin");var s=g.parseJSON(r.getItem("used"));if(s==null){s=[]}if(g.inArray(t,s)==-1){s.push(t)}r.setItemQuietly("used",JSON.stringify(s))}Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{register:function(r,s){n[r]=s},validateTitle:function(s,v,w,r){var u=g.trim(s.val()),t;if(!w){w="Title is required."}if(!r){r="A page with this name already exists."}if(!u){t=w}else{if(!Confluence.Blueprint.canCreatePage(v,u)){t=r}}if(t){s.focus().siblings(".error").html(t);return false}return true},canCreatePage:function(t,s){var r=false;g.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:t,pageTitle:s},async:false}).done(function(u){r=u}).fail(function(u){AJS.log("Failed to call 'can-create-page' - "+u)});return r},hasWizard:function j(s,r){return(o[s]||(r&&r.wizard))&&!k[s]},setWizard:function f(t,s){var r=g({});s(r);o[t]=r},getWizard:function(r){return o[r]||g({})},setDirectCallback:function(s,r){k[s]=r},getDirectCallback:function(r){return k[r]},fireWizard:function(F,H,v){var s=v.initContext||{};a=H.spaceKey;d=H;var E=H.itemModuleCompleteKey;var r=v.getParentPageId();m(E);if(E){var D=E.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:v.id+".submit."+D,data:{spaceKey:a}});if(H.directLink){var C={templateId:H.templateId,spaceKey:a,title:H.title||"",newSpaceKey:a,fromPageId:(r&&a===AJS.Meta.get("space-key"))?r:""};g.extend(C,s);var z=H.directLink;for(var x in C){z=z.replace(new RegExp("{"+e(x)+"}","g"),C[x])}window.location=Confluence.getContextPath()+l(z);return}var t;var u=this.getDirectCallback(E);if(u){t=function B(){var K={spaceKey:a,pageData:{},initContext:s};u(F,K);var L=g.extend(s,{pageData:K.pageData});new Confluence.DialogWizard(v,h).doFinalAction(F,K,L,h)}}else{if(H.wizard){var A=H.wizard.pages[0].id;t=function y(){var K=Confluence.Blueprint.getWizard(E);Confluence.DialogWizard(v,h).newPage(H,A,{},g.extend(s,{spaceKey:a,pages:{},parentPageId:v.getParentPageId(),title:H.title}),K)}}else{if(n[E]){t=function G(){n[E](v,a,h)}}else{if(H.contentBlueprintId){t=function w(){h(null,g.extend(s,H),v)}}else{throw Error("No way to process item: "+E)}}}}if(H.howToUseTemplate){Confluence.Blueprint.HowToUse.check(v,H,t)}else{t()}}else{if(H.templateId){AJS.trigger("analytics",{name:v.id+".submit.template",data:{spaceKey:a,templateId:H.templateId}});var J=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(H.templateId)+"&spaceKey="+encodeURIComponent(a)+"&title="+encodeURIComponent(H.title||"")+"&newSpaceKey="+encodeURIComponent(a);for(var I in s){J+="&"+encodeURIComponent(I)+"="+encodeURIComponent(s[I])}if(r&&a==AJS.Meta.get("space-key")){J+="&fromPageId="+encodeURIComponent(r)}window.location=J}else{throw new Error("Unknown item: "+H)}}}});function i(){var r={};if(AJS.Meta.get("page-title")){r.parentPageId=AJS.Meta.get("page-id");r.parentPageTitle=AJS.Meta.get("page-title")}else{r.parentPageId=AJS.Meta.get("parent-page-id");r.parentPageTitle=AJS.Meta.get("from-page-title")}return r}function l(t){var r=c("confluence/api/url");var s=r.parse(t);var u=s.queryParams;s.queryParams=Object.keys(u).reduce(function(x,w){var v=u[w].filter(function(y){return !!y});if(v.length){x[w]=v}return x},{});return r.format(s)}function e(r){return r.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")}Confluence.Blueprint.Util={};Confluence.Blueprint.Util.getParentPageLocation=i})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
(function(b){var a=[];Confluence.Blueprint.Selector={registerSelector:function(c){if(c&&typeof(c)==="function"){a.push(c)}},getSelectors:function(){return a}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/discovery-tooltip.soy' */
// This file was automatically generated from discovery-tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Quick.Create.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Quick == 'undefined') { Confluence.Quick = {}; }
if (typeof Confluence.Quick.Create == 'undefined') { Confluence.Quick.Create = {}; }


Confluence.Quick.Create.discoveryTooltip = function(opt_data, opt_ignored) {
  return '<p class="title">' + soy.$$escapeHtml('TIME-SAVING TEMPLATES') + '</p><p>' + soy.$$filterNoAutoescape('Want some help creating awesome pages quickly? There are some useful templates here, to help get you started.') + '</p><p><button class="aui-button" id="closeDisDialog">' + soy.$$escapeHtml('Okay, got it') + '</button></p>';
};
if (goog.DEBUG) {
  Confluence.Quick.Create.discoveryTooltip.soyTemplateName = 'Confluence.Quick.Create.discoveryTooltip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{showIndexPagePopup:function(b){var d=function(i){return function(l,j,k){l.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:i.toLowerCase()}));k()}};var a=AJS.$(AJS.$("li.blueprint."+b)[0]);var h=a.text();var g=AJS.$(".icon",a);var f="blueprintIndexSidebarPopup";var c=AJS.InlineDialog(g.is(":visible")?g:AJS.$(".acs-nav-sections .quick-links-section"),f,d(h),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(i){var j=f+".inline-dialog-check";AJS.$("body").unbind("click."+j)});c.show();var e=function(i){AJS.$(document).on("click","#dismiss-index-popup",function(){i.hide();return false})}(c);AJS.bind("quickedit.success",function(){c.hide()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/sidebar-index-page-popup.soy' */
// This file was automatically generated from sidebar-index-page-popup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml(AJS.format('Find your {0} here',opt_data.indexPageTitle)) + '</h2><p>' + soy.$$escapeHtml(AJS.format('You\x27\x27ve created a {0} page. A shortcut in your sidebar has been added where you can find other {0} in this space.',opt_data.indexPageTitle)) + '</p><br/><form>' + aui.buttons.button({text: 'Dismiss', id: 'dismiss-index-popup'}) + '</form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.sidebarIndexPagePopup.soyTemplateName = 'Confluence.Templates.Blueprints.sidebarIndexPagePopup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
define("confluence-plugins/create-content/create-from-template",["jquery","skate","wrm","confluence/legacy"],function(d,a,b,g){var c="create-from-template-button";function f(i){var j=d(i);if(j.attr("aria-disabled")=="true"){var h={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};j.tooltip(h)}else{j.click(function(k){j.addClass("launching-dialog");g.Blueprint.loadDialogAndOpenTemplate(j.data());return false})}}function e(h){b.require(["wrc!create-content"],function(){f(h)})}a(c,{type:a.types.CLASS,created:e})});require("confluence/module-exporter").safeRequire("confluence-plugins/create-content/create-from-template");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.CreateFromTemplate.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_ignored) {
  return '<a class=\'aui-button create-from-template-button\'' + ((! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml('Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.') + '"' : '') + 'data-space-key=\'' + soy.$$escapeHtml(opt_data.spaceKey) + '\' href=\'' + soy.$$escapeHtml(opt_data.createContentUrl) + '\'' + ((opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '') + ((opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '') + ((opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '') + '>' + soy.$$escapeHtml(opt_data.buttonLabel) + '</a>' + soy.$$escapeHtml(webResourceManager_requireResource('com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources'));
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate.soyTemplateName = 'Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Template.Util.Issue.Status.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.issueStatus) ? '<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="' + soy.$$escapeHtml('No issue status information was provided') + '"></span>' : (opt_data.issueStatus.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatus(opt_data) : JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}));
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatusResolver.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatusResolver';
}


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" width="16" height="16" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + ((opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '') + '" class="jira-issue-status-icon">' + ((! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.iconStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.iconStatus';
}


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_ignored) {
  return '' + JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth});
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatus';
}


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_ignored) {
  var output = '';
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = '<span class="jira-issue-status-tooltip-title">' + soy.$$escapeHtml(opt_data.name) + '</span>' + ((opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  output += '<span class=" jira-issue-status-lozenge aui-lozenge ' + JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data) + ((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '') + ((opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '') + ' jira-issue-status-lozenge-max-width-' + soy.$$escapeHtml(maxWidth__soy46) + '" data-tooltip="' + soy.$$escapeHtml(tooltipContent__soy47) + '">' + soy.$$escapeHtml(opt_data.name) + '</span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozenge.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozenge';
}


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_ignored) {
  return 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray') + ' ' + ((opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozengeClasses.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozengeClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.JIRA.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml('JIRA links') + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Issues', type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Sprints', type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Versions', type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Epics', type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.metadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.metadata';
}


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml('View related JIRA items here') + '</h2><p>' + soy.$$escapeHtml('Now you can see which epics, sprints, versions and issues relate to this page.') + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: 'Show me', extraClasses: 'showme'}) + aui.buttons.button({text: 'Don\x27t show again', type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.featureDiscovery';
}


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('JIRA links cannot be displayed. Either you do not have correct JIRA permissions or the links have been removed.') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.nometadata';
}


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format('{0}Login \x26amp; Approve{1} to retrieve data from {2}','<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml('Authenticate to retrieve data from the following instances:') + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderAuthPrompts';
}


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format('View {0} more in {1}',linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderGroup';
}


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml('JIRA links') + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.loadingMetadata';
}


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve JIRA metadata.') + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml('Unable to retrieve JIRA metadata. The following errors occurred:') + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderJiraErrors';
}


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve JIRA metadata. Could not connect to Confluence') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
define("confluence/jira-metadata",["jquery","ajs","confluence/legacy","skate"],function(g,j,l,s){var h="com.atlassian.confluence.plugins.confluence-jira-metadata";var t=false;var p;var m;var r="jira-metadata-dialog";var u;var e="jira-metadata-discovery";var k="linked-issues-dropdown";function q(v,x,w){f(v,x,w);v.removeClass("hidden");if(b(v)){p=j.InlineDialog(v,r,function(z,y,A){j.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!m||!t){m=z;A();a(v)}else{A()}return false},{hideDelay:null});v.click(function(){if(g("#"+r).is(":visible")){p.hide()}})}if(v&&i()){n(v);v.one("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k)})}}function f(v,x,w){if(!w){var y=(x===1)?"1 JIRA link":j.format("{0} JIRA links",x);v.children("span").text(y)}}function b(v){return !v.attr("href")}function n(v){u=j.InlineDialog(v,e,function(x,w,y){x.html(l.Templates.Metadata.JIRA.featureDiscovery());x.find(".showme").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide();p.show()});x.find(".close").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide()});y()},{noBind:true,closeOthers:false,hideDelay:null});u.show();l.FeatureDiscovery.forPlugin(h).addDiscoveryView(k)}function i(){return !j.Meta.get("blueprint-index-popup-key")&&l.FeatureDiscovery.forPlugin(h).shouldShow(k)}function a(v){d();m.html(l.Templates.Metadata.JIRA.loadingMetadata());m.find(".spinner").spin("medium");var w=v.attr("data-page-id")||j.Meta.get("page-id");g.ajax({url:j.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+w,type:"GET",dataType:"json",contentType:"application/json",error:function(x){c();m.html(l.Templates.Metadata.JIRA.unknownError())},success:function(x){c();t=true;f(v,x.count,false);var y;if(x.count===0&&!(x.unauthorisedAppLinks&&x.unauthorisedAppLinks.length>0)&&x.errors.length==0){j.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});y=l.Templates.Metadata.JIRA.nometadata()}else{y=l.Templates.Metadata.JIRA.metadata(x)}m.html(y);setTimeout(function(){m.find("#"+r).addClass("show")},0);o(v)},complete:function(){g("#"+r+" .icon-close").click(function(x){x.stopPropagation();g(this).closest(".closable").remove()})}})}function o(v){g(".jira-metadata-auth-link").click(function(w){w.preventDefault();window.AppLinks.authenticateRemoteCredentials(g(this).data("href"),function(){a(v)},function(){})})}function d(){if(m&&m.height()>0){m.css("height",m.height())}}function c(){m&&m.css("height","")}return{init:function(){s("content-metadata-jira",{type:s.types.CLASS,attached:function(z){var v=g(z);var A=v.attr("data-jira-metadata-count")||j.Meta.get("jira-metadata-count");A=parseInt(A,10);var y=v.attr("data-count-incomplete")||j.Meta.get("jira-metadata-count-incomplete");var w=v.attr("data-page-id")||j.Meta.get("page-id");if(A>0){q(v,A,y)}else{if(A===-1){var x=j.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+w;g.ajax({url:x,type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(B){if(B.count>0){q(v,B.count,B.incomplete)}}})}}}})}}});require("confluence/module-exporter").safeRequire("confluence/jira-metadata",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
define("confluence-highlight-actions/js/doctheme-utils",["jquery"],function(c){function d(f){var e=c(f);c(f).appendTo(c("body"));return e}function a(){return c(document).scrollTop()}function b(){return c(document).scrollLeft()}return{appendAbsolutePositionedElement:d,getMainContentScrollTop:a,getMainContentScrollLeft:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/doctheme-utils","Confluence.DocThemeUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
define("confluence-highlight-actions/js/scrolling-inline-dialog",["ajs","jquery"],function(a,b){return function(c,f,e,d){d=d||{};var g=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=b(window).width();var K=s.target.position();var i=s.target.outerWidth();var m=K.left+i/2;var C=(window.pageYOffset||document.documentElement.scrollTop)+b(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=b("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(b(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!d.calculatePositions){d.calculatePositions=g}return a.InlineDialog.call(this,c,f,e,d)}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/scrolling-inline-dialog","Confluence.ScrollingInlineDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
define("confluence-highlight-actions/js/highlight-analytics",["ajs"],function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){c.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-analytics","Confluence.HighlightAction.Analytics");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-ranger-helper.js' */
define("confluence-highlight-actions/js/highlight-ranger-helper",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/doctheme-utils"],function(e,b,h,l){function r(s){return s.replace(/\u00a0/g,"\u0020")}function d(u,t){var s={};s.first=t[0];s.last=t[t.length-1];if(u.endOffset!=="undefined"){if(u.endOffset===0&&t.length>1){s.last=t[t.length-2]}}return s}function o(t){var u=l.getMainContentScrollTop();var v=l.getMainContentScrollLeft();var z=t.getClientRects();if(!z.length&&t.parentElement()){var A=b(t.parentElement());var s=A.offset();z=[{top:s.top-u,left:s.left-v,bottom:s.top+A.height(),right:s.left+A.width()}]}var C=d(t,z);var x=function(G,F){var E={};E.top=G.top;E.left=G.left+v;E.bottom=F.bottom;if(G.left>=F.right){E.right=G.right}else{E.right=F.right}E.right=E.right+v;E.top=E.top+u;E.bottom=E.bottom+u;E.width=E.right-E.left;E.height=E.bottom-E.top;return E};var w=function(F){var E={};E.width=F.right-F.left;E.height=F.bottom-F.top;E.left=F.left+v;E.right=F.right+v;E.top=F.top+u;E.bottom=F.bottom+u;return E};var D=x(C.first,C.last);var y=w(C.first);if(h.HighlightAction.debug){var B=b("<div>").attr("id","highlight-actions-debug-helper");l.appendAbsolutePositionedElement(B).css(b.extend({position:"absolute",outline:"1px solid red"},D))}return{first:y,average:D}}function p(t){var s=(t.text!==undefined)?t.text:t.toString();return r(s)}function q(s){return(s.cloneContents)?b("<div>").append(s.cloneContents()).html():s.htmlText}function a(t){if(t.commonAncestorContainer){var s=t.commonAncestorContainer;if(s.nodeType===3){return s.parentNode}return s}else{if(t.parentElement){return t.parentElement()}}}function g(s){return{area:o(s),text:p(s),html:q(s),containingElement:a(s),range:s}}function m(s,v){var t=a(v);var u=function(){var w=false;b.each(s,function(x,y){if(y===t||b.contains(y,t)){w=true;return false}});return w};return u()}function i(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type==="None"||document.selection.createRange().htmlText==="")){return false}var v;if(window.getSelection){var s=window.getSelection();v=s.getRangeAt(s.rangeCount-1)}else{if(document.selection){v=document.selection.createRange()}}if(/^\s*$/.test(p(v))){var t=q(v);if(!t){return false}var u=t.toLowerCase().indexOf("<img ")!==-1;if(!u){return false}}if(!m(b(".wiki-content"),v)){return false}return v}function c(u,t){var s;if(document.createRange){s=document.createRange();s.setStart(u.get(0),0);s.setEnd(t.endContainer,t.originalEndOffset)}else{s=document.body.createTextRange();s.moveToElementText(u.get(0));s.setEndPoint("EndToEnd",t)}return s}function k(t){if(document.createRange){return t.text()}else{var s=document.body.createTextRange();s.moveToElementText(t.get(0));return s.text}}function j(x,w,u){var v=w.find('.user-mention, a[href^="/"]');w.find('.conf-macro[data-hasbody="false"]').each(function(){if(b(this).text().indexOf(x)>-1){v=v.add(this)}});if(v.length>0){var s=x.replace(/\S/g," ");var t=new RegExp(x.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");v.each(function(){var y=b(this).text();b(this).text(y.replace(t,s))});return k(w)}return u}function f(x,v){var t=k(v);t=j(x,v.clone(),t);t=r(t);var w=0;var u=-1;var s=[];while((u=t.indexOf(x,w))>-1){s.push(u);w=u+1}return s}function n(u,t){var s=p(c(u,t));var w=b.trim(p(t));var v=f(w,u);s=s.replace(/\s*$/,"");return{pageId:e.Meta.get("page-id"),selectedText:w,index:b.inArray(s.length-w.length,v),numMatches:v.length}}return{getRangeOption:g,getUserSelectionRange:i,getSelectionRects:o,getSelectionText:p,getSelectionHTML:q,getContainingElement:a,getFirstAndLastSelectionRect:d,isSelectionInsideContent:m,computeSearchTextObject:n}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-ranger-helper","Confluence.HighlightAction.RangeHelper");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-actions.js' */
define("confluence-highlight-actions/js/highlight-actions",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper"],function(n,e,o,g){var d={};var b={MAINCONTENT_AND_COMMENT:function(q){return g.isSelectionInsideContent(e(".wiki-content"),q)},MAINCONTENT_ONLY:function(r){var q=e(".wiki-content").first();return g.isSelectionInsideContent(q,r)},COMMENT_ONLY:function(q){return g.isSelectionInsideContent(e(".comment-content"),q)}};function a(r,s){var q={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[r]=e.extend(q,s)}function l(q){var r=d[q];if(!r){r=function(){n.logError("The button with key "+q+" doesn't have a registered handler")}}return r}function c(r){var q=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return e.ajax({type:"POST",contentType:"application/json",url:q,data:JSON.stringify(r)})}function f(q){var r=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return e.ajax({type:"POST",contentType:"application/json",url:r,data:JSON.stringify(q)})}function p(){return e('meta[name="confluence-request-time"]').attr("content")}function k(r){var q={};q.pageId=r.pageId;q.selectedText=r.selectedText;q.index=r.index;q.numMatches=r.numMatches;q.lastFetchTime=p();return q}function j(s,r,t){var q=k(t);q.tableColumnIndex=r;q.cellModifications=s;return q}function h(q,s){var r=k(s);r.xmlModification=q[0].xmlInsertion;return r}function i(q,s){var r=k(s);r.xmlModification=q;return r}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:c,insertContentsInTableColumnCells:f,createTableInsertionBean:j,createInsertionBean:h,createXMLModificationBean:i,clearTextSelection:m,WORKING_AREA:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-actions","Confluence.HighlightAction");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
define("confluence-highlight-actions/js/highlight-panel",["ajs","confluence/meta","skate","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper","confluence-highlight-actions/js/doctheme-utils","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/scrolling-inline-dialog","confluence-highlight-actions/js/highlight-actions"],function(h,k,r,d,i,q,l,e,w,u){var n=d("<div>").attr("id","action-dialog-target");var a;var m="selection-action-panel";var x;var f;var t=function(y){var z=i.getContextPath()+"/rest/highlighting/1.0/panel-items?pageId="+y;var A=d.get(z,function(B){if(B.length){v(B)}});g(A)};function p(){var z=d("#confluence-ui").length===0;if(z){var y=k.get("page-id");if(y){t(y)}}var A="spa-highlight-actions-placeholder";r(A,{type:r.types.CLASS,attributes:{"data-content-id":{created:function(B,C){if(C.newValue){t(C.newValue)}else{h.debug("content-id value is not defined.")}}}}})}var c=function(){return d(".wiki-content").first()};function v(D){var G=s();var y=29;var H=false;var J=D.length*y;var I=i.HighlightPanel.Templates.panelContent({webItems:D});var F=false;var A=function(L,K,M){if(!F){L.append(I);L.find(".aui-button").tooltip({gravity:"s"});o(L.parent());L.find("button").click(function(Q){var O=d(this).attr("data-key");var R=u.getButtonHandler(O);H=true;a.hide();var P=q.getRangeOption(x);if(d.trim(P.text)!==""){var N=c();P.searchText=q.computeSearchTextObject(N,x)}R.onClick(P)})}M();F=true;return false};var E=function(K){var L=false;K.find("button").each(function(M){var O=d(this);var N=O.attr("data-key");var Q=u.getButtonHandler(N);var P=Q&&Q.shouldDisplay&&Q.shouldDisplay(x);O.css("display",P?"inline-block":"none");L=L||P});if(!L){a.hide()}else{K.find(".contents").width("auto")}};var z=function(){e.sendAnalyticsForOpeningHighlightOptionPanel();E(this.popup);G.bindHideEvents();n.show()};var C=function(){G.unbindHideEvents();n.hide()};var B={centerOnHighlight:true,onTop:true,fadeTime:0,width:J,persistent:true,initCallback:z,hideCallback:C};a=w(n,m,A,B)}function o(y){y.children().attr("unselectable","on").on("selectstart",false)}function g(A){var y;var z=0;var B=1000;d(document).on("mouseup",function(C){A.done(function(E){if(!(E&&E.length>0)){return}var D=d(C.target);if(D.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(y);var F=B;if(d(a[0]).is(":visible")){F=z}y=setTimeout(function(){j()},F)},z)})});A.done(function(){h.bind("quickedit.success",function(){a.hide()})})}function j(){x=q.getUserSelectionRange();var y=function(B){return d.trim(B.toString())!==""};if(x&&x.endOffset!==undefined){x.originalEndOffset=x.endOffset}if(!x||!y(x)){a.hide();return}var A=q.getSelectionRects(x);if(!A){return}var z=b(A);if(z||!d(a[0]).is(":visible")){d(a[0]).hide();a.show()}}function s(){var B=function(){D();A()};var E=function(){y();G()};var z=false;var F=m+".inline-dialog-check";var D=function(){if(!z){d("body").bind("click."+F,function(I){var H=d(I.target);if(H.closest("#inline-dialog-"+m+" .contents").length===0){if(!x){a.hide()}}});z=true}};var y=function(){if(z){d("body").unbind("click."+F)}z=false};var C=function(H){if(H.keyCode===27){a.hide()}};var A=function(){d(document).on("keydown",C)};var G=function(){d(document).off("keydown",C)};return{bindHideEvents:B,unbindHideEvents:E}}function b(z){l.appendAbsolutePositionedElement(n);var y=false;if(!f||z.first.top!=f.first.top||z.first.height!=f.first.height||z.first.left!=f.first.left||z.first.width!=f.first.width){n.css({top:z.first.top,height:z.first.height,left:z.first.left,width:z.first.width});f=z;y=true}return y}return{init:p}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/highlight-panel",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
define("confluence-highlight-actions/js/quote-in-comment",["ajs","jquery","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/highlight-actions"],function(j,e,h,f){var a=true;var i=false;function b(n){var m=n.getBody().createTextRange();m.moveToElementText(n.getBody());m.collapse(false);m.select()}function d(){var m=40;var n=e("#rte-toolbar").offset().top;e(document).scrollTop(n-m)}function l(n,o){var p="<p><br/></p>";if(e.browser.msie&&!i){b(n);p="<p></p>"}var m="<blockquote><p>"+o.html+"</p></blockquote>"+p;n.execCommand("mceInsertContent",false,m);i=false}function k(m){f.clearTextSelection();setTimeout(function(){var n=j&&j.Rte&&j.Rte.getEditor&&j.Rte.getEditor();if(n){h.sendAnalyticsForQuoteInComment();d();l(n,m)}else{h.sendAnalyticsForQuoteInComment(a);i=true;var o=function(){l(j.Rte.getEditor(),m);j.unbind("quickedit.visible",o)};j.bind("quickedit.visible",o);c(g(m.containingElement))}},0)}function g(m){var n=e(m).closest("div.comment");return n}function c(m){if(!m.length>0){e(".quick-comment-prompt").click()}else{m.find(".comment-actions .action-reply-comment").click()}}return{actionCallback:k}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/quote-in-comment",function(b){var c="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";var a=require("confluence-highlight-actions/js/highlight-actions");a.registerButtonHandler(c,{onClick:b.actionCallback,shouldDisplay:a.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.HighlightPanel.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_ignored) {
  var output = '';
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output += '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" title="' + soy.$$escapeHtml(webItemData3.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/></button>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.HighlightPanel.Templates.panelContent.soyTemplateName = 'Confluence.HighlightPanel.Templates.panelContent';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
define("confluence/cjc/page-helper",["jquery","ajs","skate","confluence/legacy","wrm/require"],function(d,i,e,j,f){var b="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var h="wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";var a="Loading\u2026";var c=false;j.CreateJiraContent={Dialogs:{}};var g=function(l,k){d("body").append(k);k.css({top:l.top,height:l.height,left:l.left,width:l.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")};return{initCreatedIssuesNotification:function(){e("jira-issues-created",{type:e.types.CLASS,events:{"click #jira-content-message-panel-view-more-link":function(k,m,l){m.preventDefault();d(l).hide();d(k).find("#jira-content-message-panel-error-warning").show()}},attached:function(m){var k=d(m);if(window.history&&window.history.replaceState){var n=window.location.href;var l=n.substr(0,n.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,l)}if(k.hasClass("success")){setTimeout(function(){k.hide()},10000)}}})},init:function(){var k=j.HighlightAction;if(!k){i.error("confluence-jira-content plugin needs dependency confluence-highlight-actions plugin to initialize.");return}k.registerButtonHandler(b,{onClick:function(n){var l;if(!c){var o=function(q,p,r){q.html('<span class="aui-icon aui-icon-wait"></span> '+a);r();return false};l=d("<div>");g(n.area.average,l);var m=j.ScrollingInlineDialog(l,"create-issue-loading-dialog",o,{});m.show();c=true}f(h).done(function(){if(j.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){j.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(n)}else{j.CreateJiraContent.Dialogs.showCreateIssueDialog(n)}if(typeof l!=="undefined"){l.remove()}})},shouldDisplay:j.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper-init.js' */
require(["confluence/cjc/page-helper"],function(a){a.init();a.initCreatedIssuesNotification()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:es6-promise', location = 'includes/js/third-party/es6-promise.js' */
(function(){function y(a){return"function"===typeof a}function j(){for(var a=0;a<k;a+=2)(0,r[a])(r[a+1]),r[a]=void 0,r[a+1]=void 0;k=0}function s(){}function t(a,b){if(a===b)e(a,new TypeError("You cannot resolve a promise with itself"));else if("function"===typeof b||"object"===typeof b&&null!==b)if(b.constructor===a.constructor)b._state===u?l(a,b._result):b._state===m?e(a,b._result):w(b,void 0,function(b){t(a,b)},function(b){e(a,b)});else{var c;try{c=b.then}catch(d){x.error=d,c=x}if(c===x)e(a,x.error);
else if(void 0===c)l(a,b);else if(y(c)){var h=c;n(function(a){var c=!1,d;a:{d=function(d){c||(c=!0,b!==d?t(a,d):l(a,d))};var g=function(b){c||(c=!0,e(a,b))};try{h.call(b,d,g)}catch(i){d=i;break a}d=void 0}!c&&d&&(c=!0,e(a,d))},a)}else l(a,b)}else l(a,b)}function M(a){a._onerror&&a._onerror(a._result);z(a)}function l(a,b){a._state===o&&(a._result=b,a._state=u,0!==a._subscribers.length&&n(z,a))}function e(a,b){a._state===o&&(a._state=m,a._result=b,n(M,a))}function w(a,b,c,d){var h=a._subscribers,f=
h.length;a._onerror=null;h[f]=b;h[f+u]=c;h[f+m]=d;0===f&&a._state&&n(z,a)}function z(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,h,f=a._result,e=0;e<b.length;e+=3)d=b[e],h=b[e+c],d?D(c,d,h,f):h(f);a._subscribers.length=0}}function E(){this.error=null}function D(a,b,c,d){var h=y(c),f,g,i,j;if(h){try{f=c(d)}catch(k){A.error=k,f=A}f===A?(j=!0,g=f.error,f=null):i=!0;if(b===f){e(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,i=!0;b._state===
o&&(h&&i?t(b,f):j?e(b,g):a===u?l(b,f):a===m&&e(b,f))}function i(a,b){this._instanceConstructor=a;this.promise=new a(s);this._validateInput(b)?(this._input=b,this._remaining=this.length=b.length,this._init(),0===this.length?l(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&l(this.promise,this._result))):e(this.promise,this._validationError())}function g(a){this._id=N++;this._result=this._state=void 0;this._subscribers=[];if(s!==a){if(!y(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
if(!(this instanceof g))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");var b=this;try{a(function(a){t(b,a)},function(a){e(b,a)})}catch(c){e(b,c)}}}var F=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},k=0,G,B,n=function(a,b){r[k]=a;r[k+1]=b;k+=2;2===k&&(B?B(j):p())},q="undefined"!==typeof window?window:void 0,v=q||{},v=v.MutationObserver||v.WebKitMutationObserver,
O="undefined"!==typeof process&&"[object process]"==={}.toString.call(process),P="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,r=Array(1E3),p;if(O)p=function(){process.nextTick(j)};else if(v){var H=0,q=new v(j),I=document.createTextNode("");q.observe(I,{characterData:!0});p=function(){I.data=H=++H%2}}else if(P){var J=new MessageChannel;J.port1.onmessage=j;p=function(){J.port2.postMessage(0)}}else if(void 0===q&&"function"===typeof require)try{var K=
require("vertx");G=K.runOnLoop||K.runOnContext;p=function(){G(j)}}catch(Q){p=function(){setTimeout(j,1)}}else p=function(){setTimeout(j,1)};var o=void 0,u=1,m=2,x=new E,A=new E;i.prototype._validateInput=function(a){return F(a)};i.prototype._validationError=function(){return Error("Array Methods must be provided an Array")};i.prototype._init=function(){this._result=Array(this.length)};i.prototype._enumerate=function(){for(var a=this.length,b=this.promise,c=this._input,d=0;b._state===o&&d<a;d++)this._eachEntry(c[d],
d)};i.prototype._eachEntry=function(a,b){var c=this._instanceConstructor;"object"===typeof a&&null!==a?a.constructor===c&&a._state!==o?(a._onerror=null,this._settledAt(a._state,b,a._result)):this._willSettleAt(c.resolve(a),b):(this._remaining--,this._result[b]=a)};i.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===o&&(this._remaining--,a===m?e(d,c):this._result[b]=c);0===this._remaining&&l(d,this._result)};i.prototype._willSettleAt=function(a,b){var c=this;w(a,void 0,function(a){c._settledAt(u,
b,a)},function(a){c._settledAt(m,b,a)})};var N=0,L=g;g.all=function(a){return(new i(this,a)).promise};g.race=function(a){function b(a){t(d,a)}function c(a){e(d,a)}var d=new this(s);if(!F(a))return e(d,new TypeError("You must pass an array to race.")),d;for(var h=a.length,f=0;d._state===o&&f<h;f++)w(this.resolve(a[f]),void 0,b,c);return d};g.resolve=function(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(s);t(b,a);return b};g.reject=function(a){var b=new this(s);e(b,a);
return b};g._setScheduler=function(a){B=a};g._setAsap=function(a){n=a};g._asap=n;g.prototype={constructor:g,then:function(a,b){var c=this._state;if(c===u&&!a||c===m&&!b)return this;var d=new this.constructor(s),e=this._result;if(c){var f=arguments[c-1];n(function(){D(c,d,f,e)})}else w(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}};var q=function(){var a;if("undefined"!==typeof global)a=global;else if("undefined"!==typeof self)a=self;else try{a=Function("return this")()}catch(b){throw Error("polyfill failed because global object is unavailable in this environment");
}var c=a.Promise;if(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)a.Promise=L},C={Promise:L,polyfill:q};"function"===typeof define&&define.amd?define(function(){return C}):"undefined"!==typeof module&&module.exports?module.exports=C:"undefined"!==typeof this&&(this.ES6Promise=C);q()}).call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'probe.js' */
!function(){var n,t,e,r,i,o,u,a,c,s,f,l,h,y,d,p,v;n=function(){return window}(),t=function(n){return!(!n.performance||!n.performance.now)}(n),e=[],r=function(n){return function(t){n.unshift({addReporter:t})}}(e),i=function(n){return function(t){for(;n.length;)t(n.splice(0,1)[0]);n.unshift=t,n.push=t}}(e),o=function(n,t){return function(e){n.push({end:{key:e.key,timestamp:t.performance.now()}})}}(e,n),u=function(n){return n.document}(n),a=function(n){return n.Promise}(n),c=function(){function n(){this._={}}var t=function(e){var r=e[0],i=e[1];i instanceof n?e.length>=3?Object.keys(i._).forEach(function(n){t([r,i._[n],n].concat(e.slice(2)))}):Object.keys(i._).forEach(function(n){t([r,i._[n],n])}):Array.isArray(i)&&r.apply(null,[i].concat(e.slice(2)))};n.prototype.forEach=function(n){t([n,this])},n.prototype.add=function(){for(var t=this,e=null,r=null,i=0;i<arguments.length;i++){if(r=arguments[i],i===arguments.length-1&&Array.isArray(t)){t.push(r);break}i<arguments.length-2&&!t._.hasOwnProperty(r)?t._[r]=new n:i!==arguments.length-2||t._.hasOwnProperty(r)||(t._[r]=[]),t=t._[r],e=r}};var e=function(n,t){if(0!==n.length){var r=n.pop(),i=r[0],o=r[1];i===t?e(n,i):o._.hasOwnProperty(t)&&delete o._[t],0===Object.keys(o).length&&e(n,i)}};return n.prototype.remove=function(){for(var n,t=!1,r=null,i=this,o=[[r,i]],u=null,a=0;a<arguments.length;a++)if(u=arguments[a],Array.isArray(i))n=i.indexOf(u),n>-1&&(i.splice(n,1),0===i.length&&o.length>1&&e(o,r),t=!0);else{if(!i._.hasOwnProperty(u))break;a===arguments.length-1&&(delete i._[u],0===Object.keys(i).length&&o.length>1&&e(o,r),t=!0),r=u,i=i._[u],o.push([r,i])}return t},n.prototype.get=function(n){return this._.hasOwnProperty(n)?this._[n]:[]},n}(),s=function(n,t,e,r){function i(n){return!n||null==n||"null"===n||"undefined"===n}function o(t,e,r){l||(c.observe(n,{attributes:!0,childList:!0,subtree:!0}),l=!0),s.add(t,e,r)}function u(t,e){var r=n.querySelectorAll(t);return r.length&&(i(e)||Array.prototype.every.call(r,function(n){return!n.querySelector(e)}))}function a(n,e){var r;n.forEach||(n=[n]),!i(e)&&Array.isArray(e)&&(e=e.join(", "));var a=new t(function(i,a){var c=[],f=[];n.forEach(function(n){var r,i;u(n,e)||(r=new t(function(t){o(n,e,t),i=function(){s.remove(n,e,t)},f.push(i)}),c.push(r))});var l=function(){f.forEach(function(n){n()})};t.all(c).then(l).then(i,a),r=function(){l(),a()}});return a.dismiss=r,a}var c,s,f=r.MutationObserver,l=!1;return f&&t?(s=new e,c=new f(function(){s.forEach(function(n,t,e){u(e,t)&&(n.forEach(function(n){n()}),s.remove(e,t))})}),a):void 0}(u,a,c,n),f=function(n){return!!n}(s),l=function(n){function t(){c(),n.body.classList.add(u)}function e(){function e(){n.body.classList.remove(u),n.removeEventListener(i,s),n.removeEventListener(o,c),r=null}if(r)return r;var c,s,f=!1;return r=new Promise(function(e,r){"visible"!==n.visibilityState?r():(s=function(){f=!0},c=function(n){n.animationName===a&&(f?r():e())},n.addEventListener(i,s),n.addEventListener(o,c),t())}),r.then(e,e),r}var r,i="visibilitychange",o="animationend",u="browser-metrics-visibility-test",a="browser-metrics-visibility-animation",c=function(){var t=n.createElement("style"),e=["."+u+" {","-webkit-animation-duration: 0.001s;","animation-duration: 0.001s;","-webkit-animation-name: "+a+";","animation-name: "+a+";","-webkit-animation-iteration-count: 1;","animation-iteration-count: 1;","}","@keyframes "+a+" {}","@-webkit-keyframes "+a+" {","from {}","to {}","}"].join("\n");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(n.createTextNode(e)),n.head.appendChild(t),c=function(){}};return e}(u),h=function(n,t,e,r,i){function o(n){return Array.isArray(n)||(n=[n]),n.map(function(n){return"string"==typeof n?{selector:n,hasNone:null}:n})}function u(n){return Array.isArray(n)||"string"==typeof n}function a(n){return u(n)&&(n={rules:n}),n.rules=o(n.rules),n.requirePaint="undefined"==typeof n.requirePaint?!1:n.requirePaint,n}return function(i,o){if(n){i=a(i);var u=function(){},c=new e(function(n,r){var o=[],a=i.rules.map(function(n){var e=new t(n.selector,n.hasNone);return o.push(function(){e.dismiss()}),e});u=function(){o.forEach(function(n){n()}),r()},e.all(a).then(function(n){}).then(n,r)});return c.cancel=u,i.requirePaint&&(c=c.then(r)),"function"==typeof o&&c.then(o),c}}}(f,s,a,l,n),y=function(n,t){function e(){return r}var r=!1;return n.addEventListener("DOMContentLoaded",function(){t.setTimeout(function(){r=!0})}),e}(u,n),d=function(n,t,e,r,i,o,u){function a(){c=null}var c;return function(o){var s="isInitial"in o?o.isInitial:i()===!1,f="threshold"in o?o.threshold:1e3,l="reporters"in o?o.reporters:[];r.push({start:{key:o.key,isInitial:s,threshold:f,timestamp:s?0:u.performance.now(),reporters:Array.isArray(l)?l:[l]}}),c&&(c.cancel(),a()),o.ready&&e&&(c=n(o.ready),c.then(function(){t({key:o.key})}).then(a,a))}}(h,o,f,e,y,a,n),p=function(n){return function(t){n.push({subscribe:t})}}(e),v=function(n,t,e,r,i,o){var u=function(){};return{start:n?i:u,end:n?r:u,addReporter:n?t:u,delegateTo:n?e:u,subscribe:n?o:u}}(t,r,i,o,d,p),window["browser-metrics"]=v,window.define&&window.define("internal/browser-metrics",function(){return v})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'internal/browser-metrics-aa-beacon.js' */
!function(){var n={};n=function(n){function e(n,e){Object.keys(e).forEach(function(r){n[r]=e[r]})}var r=[],t=[];return n.addUrlCleaner=function(n){t.push(n)},n.cleanUrl=function(n){return t.reduce(function(e,r){var t=r(n);return t.length>e.length?t:e},"")},n.addReportMarshaller=function(n){r.push(n)},n.beacon=function(n){var t={};r.forEach(function(r){var o=r(n);"object"==typeof o&&e(t,o)});var o={name:"browser.metrics.navigation",properties:t};AJS.EventQueue.push(o)},n}(n),window["browser-metrics-aa-beacon"]=n,window.define&&window.define("internal/browser-metrics-aa-beacon",function(){return n})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'loader.js' */
!function(){var n={},r={},i={};n=function(n){var r=window;return r}(n),r=function(n,r){var i=r.WRM;return i}(r,n),i=function(n,r,i){function t(){u===c&&o&&(o(),o=null)}var u=0,c=0,o=null,e={install:function(n){u+=1,n(function(){c+=1,t()})}};return r["browser-metrics-plugin"]=e,i.require(["wrc!browser-metrics-plugin.contrib"],function(){r.require(["internal/browser-metrics-plugin/collector"],function(n){o=function(){n.install()},t()})}),n}(i,n,r)}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:viewcontent', location = '/js/viewcontent.js' */
require(["confluence/api/event","internal/browser-metrics","ajs","jquery"],function(f,e,c,g){function b(i){if(!g(i.target).hasClass("full-load")){var h=i.data.type;if(c.Meta.getBoolean("collaborative-content")){var j="confluence."+h+".edit.collaborative.quick-view";e.start({key:j});c.bind("rte-collab-ready",function(){e.end({key:j});e.start({key:j+".connected"})});c.bind("synchrony.connected",function(){e.end({key:j+".connected"})})}else{if(!c.Meta.getBoolean("shared-drafts")){e.start({key:"confluence."+h+".edit.quick-view",ready:".active-richtext"})}}}}function a(){e.start({key:"confluence.file.preview.firstpage"});f.bind("confluence-previews.fileviewer.completed",function(){e.end({key:"confluence.file.preview.firstpage"})})}function d(){var j=c.Meta.get("content-type");var i=g("#confluence-ui.confluence-dashboard").length;var h=window.location.href.indexOf("/content-only/")>-1;if(j){if(!i&&!h){e.start({key:"confluence."+j+".view",ready:".wiki-content",isInitial:true})}g("#editPageLink").on("click",{type:j},b);g(".confluence-embedded-file-wrapper").on("click",a)}}c.toInit(d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
define("confluence-page-banner/page-banner",["ajs","jquery","skate"],function(i,c,d){function k(){var m=c("#system-content-items");if(m.children(":not(.hidden)").length==0){m.addClass("hidden")}else{m.removeClass("hidden")}}function e(){c("#page-metadata-banner").hide()}function j(){var m=c("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(m);m.click(function(n){g(c(n.target).closest("a"))});c(window).on("click scroll resize",g)}function a(m){c(m).tooltip({live:true,gravity:"n",title:"title",delayIn:500})}function g(m){c(".tipsy").remove();if(m){var n=c(m).data("tipsy");if(n){n.hoverState="out"}}}var f=function(o,q){var p=c("#content-metadata-page-restrictions");var m="";p.removeClass("aui-iconfont-locked aui-iconfont-unlocked restricted");var n=q.hasRestrictions&&!(q.hasExplicitRestrictions||q.hasInheritedRestrictions);if(q.hasExplicitRestrictions||n){p.addClass("aui-icon aui-icon-small aui-iconfont-locked restricted");m="Restrictions apply"}else{if(q.hasInheritedRestrictions){p.addClass("aui-icon aui-icon-small aui-iconfont-unlocked restricted");m="Restrictions apply"}else{p.addClass("aui-icon aui-icon-small aui-iconfont-unlocked");m=q.hasAnyExplicitRestrictions?"Restrictions apply":"Unrestricted"}}p.attr("title",m);a(p);k()};var b=function(){k();i.bind("system-content-metadata.toggled-restrictions",f);i.bind("breadcrumbs.expanded",e);c("#page-metadata-banner").css("visibility","visible");j()};var h=function(){i.unbind("system-content-metadata.toggled-restrictions",f);i.unbind("breadcrumbs.expanded",e)};var l=function(){d("system-metadata-restrictions",{type:d.types.CLASS,events:{click:function(n,m){m.preventDefault();i.trigger("system-content-metadata.open-restrictions-dialog")}},attached:b,detached:h});d("draft-status-lozenge",{type:d.types.CLASS,events:{click:function(m,n){n.preventDefault()}}})};l()});require("confluence/module-exporter").safeRequire("confluence-page-banner/page-banner");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = 'includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.User.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.username);
};
if (goog.DEBUG) {
  Confluence.Templates.User.userLinkUrl.soyTemplateName = 'Confluence.Templates.User.userLinkUrl';
}


Confluence.Templates.User.logo = function(opt_data, opt_ignored) {
  return '' + ((opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) ? '<a ' + ((opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + ' href="' + soy.$$escapeHtml("/wiki") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml('Add a picture of yourself') + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/wiki/s/1090478855/6452/56cdace06279f530d2392e16eacb4fcdf709f778/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Add a picture of yourself') + '"></a>' : (opt_data.profilePictureInfo.anonymous) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/1090478855/6452/56cdace06279f530d2392e16eacb4fcdf709f778/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Anonymous') + '" title="' + soy.$$escapeHtml('Anonymous') + '">' : (opt_data.canView) ? '<a ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '" href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.profilePictureInfo.uriReference) + '" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '"></a>' : '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/1090478855/6452/56cdace06279f530d2392e16eacb4fcdf709f778/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '">');
};
if (goog.DEBUG) {
  Confluence.Templates.User.logo.soyTemplateName = 'Confluence.Templates.User.logo';
}


Confluence.Templates.User.usernameLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.username && opt_data.username != '') ? '<a href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"' + ((opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"') + '>' + ((opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username)) + '</a>' : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameLink.soyTemplateName = 'Confluence.Templates.User.usernameLink';
}


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.fullNameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.fullNameOrAnonymous';
}


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.usernameOrAnonymous';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = 'includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Icons.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml('Track back') + '">' + soy.$$escapeHtml('Track back') + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIcon.soyTemplateName = 'Confluence.Templates.Icons.contentIcon';
}


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml('Track back') + '">' + soy.$$escapeHtml('Track back') + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIconFont.soyTemplateName = 'Confluence.Templates.Icons.contentIconFont';
}


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<span class="icon' + ((opt_data.type) ? ' aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '') + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.iconSpan.soyTemplateName = 'Confluence.Templates.Icons.iconSpan';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = 'includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Captcha.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_ignored) {
  var output = '<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">' + soy.$$escapeHtml('If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance.') + '</span></label>' + Confluence.Templates.Captcha.image(opt_data) + '<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      output += aui.message.warning({content: errorData13});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.form.soyTemplateName = 'Confluence.Templates.Captcha.form';
}


Confluence.Templates.Captcha.image = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml("/wiki") + '/jcaptcha?id=' + soy.$$escapeHtml(opt_data.captchaId) + '" class="captcha-image" alt="' + soy.$$escapeHtml('CAPTCHA image') + '"><input type="hidden" name="captchaId" value="' + soy.$$escapeHtml(opt_data.captchaId) + '" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.image.soyTemplateName = 'Confluence.Templates.Captcha.image';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = 'includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Notifications.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message warning closeable">' + soy.$$filterNoAutoescape('You are not logged in. Any changes you make will be marked as \x3cspan class\x3d\x22smalltext\x22\x3eanonymous\x3c/span\x3e.') + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + soy.$$filterNoAutoescape(AJS.format('You may want to \x3ca href\x3d\x22{0}\x22\x3eLog In\x3c/a\x3e if you already have an account.',opt_data.loginURL)) : '') + '</div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.notLoggedIn.soyTemplateName = 'Confluence.Templates.Notifications.notLoggedIn';
}


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.actionErrors.length > 0) {
    output += '<div class="aui-message aui-message-error ' + ((opt_data.closeable) ? 'closeable' : '') + '"><p class="title">' + soy.$$escapeHtml('The following error(s) occurred:') + '</p><span class="aui-icon icon-error"></span><ul>';
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output += '<li>' + soy.$$filterNoAutoescape(errorHtmlData24) + '</li>';
    }
    output += '</ul></div>';
  }
  output += '<div id="action-messages"></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.actionErrors.soyTemplateName = 'Confluence.Templates.Notifications.actionErrors';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_ignored) {
  var output = '<div id="page-metadata-banner"><ul class="banner">' + Confluence.Templates.PageBanner.renderSystemContentItems(opt_data);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += Confluence.Templates.PageBanner.renderPageBannerItem(itemData6);
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.banner.soyTemplateName = 'Confluence.Templates.PageBanner.banner';
}


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_ignored) {
  var output = '<li id="system-content-items" class="noprint">';
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    output += Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(itemData12, {isSystemContentItem: true}));
  }
  output += '</li>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderSystemContentItems.soyTemplateName = 'Confluence.Templates.PageBanner.renderSystemContentItems';
}


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_ignored) {
  return '<li class="' + ((! opt_data.suppressDefaultStyle) ? 'page-metadata-item noprint' : '') + ((opt_data.isAuiButton) ? 'has-button' : '') + '" ' + ((opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '') + '>' + Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(opt_data, {isSystemContentItem: false})) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderPageBannerItem.soyTemplateName = 'Confluence.Templates.PageBanner.renderPageBannerItem';
}


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.tooltip) + '" ' + ((opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '') + ' ' + ((opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '') + '>' + Confluence.Templates.PageBanner.itemIcon(opt_data) + ((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemAnchor.soyTemplateName = 'Confluence.Templates.PageBanner.itemAnchor';
}


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemIcon.soyTemplateName = 'Confluence.Templates.PageBanner.itemIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-metadata', location = 'includes/js/page-metadata.js' */
define("confluence/page-metadata",["jquery","confluence/api/event"],function(e,f){return function(a){var b=a("#version-comment");if(b.length){var c=a("#show-version-comment"),d=a("#hide-version-comment");c.click(function(a){c.hide();d.show();b.show();return f.stopEvent(a)});d.click(function(a){d.hide();c.show();b.hide();return f.stopEvent(a)});c.length&&d.length&&b.hide()}}});require("confluence/module-exporter").safeRequire("confluence/page-metadata",function(e){require("ajs").toInit(e)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:manage-watchers', location = 'includes/soy/manage-watchers.soy' */
// This file was automatically generated from manage-watchers.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ManageWatchers.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ManageWatchers == 'undefined') { Confluence.Templates.ManageWatchers = {}; }


Confluence.Templates.ManageWatchers.dialogContent = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item page-watchers"><h3>' + soy.$$escapeHtml('Watching this page') + '</h3><p>' + soy.$$escapeHtml('These people are notified when the page is changed.') + '</p>' + Confluence.Templates.ManageWatchers.addWatcherForm({pageId: opt_data.pageId, xsrfToken: opt_data.xsrfToken, notificationType: 'page'}) + '<ul class="user-list"><li class="loading">' + soy.$$filterNoAutoescape('Loading\u2026') + '</li><li class="no-users hidden">' + soy.$$escapeHtml('No page watchers') + '</li></ul></div><div class="aui-item space-watchers"><h3>' + soy.$$escapeHtml('Watching this space') + '</h3><p>' + soy.$$escapeHtml('These people are notified when any content in the space is changed.') + '</p>' + Confluence.Templates.ManageWatchers.addWatcherForm({pageId: opt_data.pageId, xsrfToken: opt_data.xsrfToken, notificationType: 'space'}) + '<ul class="user-list"><li class="loading">' + soy.$$filterNoAutoescape('Loading\u2026') + '</li><li class="no-users hidden">' + soy.$$escapeHtml('No space watchers') + '</li></ul></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.dialogContent.soyTemplateName = 'Confluence.Templates.ManageWatchers.dialogContent';
}


Confluence.Templates.ManageWatchers.userItem = function(opt_data, opt_ignored) {
  return '<li class="watch-user"><img class="profile-picture confluence-userlink" src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" data-username="' + soy.$$escapeHtml(opt_data.username) + '"><span class="user-hover-trigger" data-username="' + soy.$$escapeHtml(opt_data.username) + '">' + soy.$$escapeHtml(opt_data.fullName) + '</span> <span class="username">(' + soy.$$escapeHtml(opt_data.username) + ')</span><span class="remove-watch" title="' + soy.$$escapeHtml('Delete') + '" data-username="' + soy.$$escapeHtml(opt_data.username) + '">' + soy.$$escapeHtml('Delete') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.userItem.soyTemplateName = 'Confluence.Templates.ManageWatchers.userItem';
}


Confluence.Templates.ManageWatchers.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Manage+Watchers"});
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.helpLink.soyTemplateName = 'Confluence.Templates.ManageWatchers.helpLink';
}


Confluence.Templates.ManageWatchers.addWatcherForm = function(opt_data, opt_ignored) {
  return '<form class="aui" action="' + soy.$$escapeHtml("/wiki") + '/json/addwatch.action" method="POST" id="manage-' + soy.$$escapeHtml(opt_data.notificationType) + '-watchers-form"><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.xsrfToken) + '"><input type="hidden" name="pageId" value="' + soy.$$escapeHtml(opt_data.pageId) + '"/><input type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.notificationType) + '" /><input type="hidden" id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-username" name="username" value=""/><input id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-user" name="userFullName" class="text autocomplete-user" type="text" value="" placeholder="' + soy.$$escapeHtml('Full name or username') + '" data-max="10" data-target="#add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-username" data-dropdown-target="#add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-dropdown" data-template="{title}" data-none-message="' + soy.$$escapeHtml('No matching users found.') + '"><input type="submit" name="add"  class="button submit" value="' + soy.$$escapeHtml('Add') + '"><div id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-dropdown" class="aui-dd-parent autocomplete"></div><div class="status hidden"></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.addWatcherForm.soyTemplateName = 'Confluence.Templates.ManageWatchers.addWatcherForm';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:manage-watchers', location = 'includes/js/manage-watchers.js' */
define("confluence/manage-watchers","document ajs confluence/templates confluence/api/constants confluence/placeholder confluence/hover-user confluence/dialog".split(" "),function(i,d,m,n,q,r,s){return function(g){g(i).on("click","#manage-watchers-menu-item, .cw-manage-watchers",function(i){function o(b,e){var a=b.find("#add-"+e+"-watcher-user"),j=b.find("#add-"+e+"-watcher-username"),f,k=b.find("> .status");f={clear:function(){k.addClass("hidden").removeClass("loading error").text("")},loading:function(a){k.addClass("loading").removeClass("hidden error").html(a)},
error:function(a){k.addClass("error").removeClass("hidden loading").html(a)}};b.ajaxForm({beforeSerialize:function(){j.val()==""&&j.val(a.val())},beforeSubmit:function(){a.blur().prop("disabled",true);l.addClass("updating");f.loading("Adding watcher\u2026")},dataType:"json",error:function(a,c){console.error("Failed to add watcher: "+c)},success:function(b){j.val("");a.prop("disabled",false).val("").focus();l.removeClass("updating");if(b.actionErrors&&b.actionErrors.length)f.error(b.actionErrors[0]);
else{c.trigger("list-data-retrieved.manage-watchers",{list:l,watchers:b.pageWatchers,type:"page"});c.trigger("list-data-retrieved.manage-watchers",{list:p,watchers:b.spaceWatchers,type:"space"});f.clear()}}});a.bind("selected.autocomplete-user-or-group",function(){b.submit()});a.focus()}i.preventDefault();var h=new s.component({width:865,height:530,id:"manage-watchers-dialog",onCancel:function(){h.hide().remove()}});h.addHeader("Manage Watchers");h.addPanel("default",
m.ManageWatchers.dialogContent({pageId:d.Meta.get("page-id"),xsrfToken:d.Meta.get("atl-token")}));h.addCancel("Close",function(){h.hide().remove();return false});h.show();var c=g("#manage-watchers-dialog");c.find(".dialog-title").prepend(m.ManageWatchers.helpLink());c.find("input:visible, button:visible").each(function(b){g(this).attr("tabindex",b+1)});q();c.bind("remove-list-item.manage-watchers",function(b,e){var a=e.item,j=e.list,f=e.username,k=e.type;a.addClass("removing");
d.safe.ajax({dataType:"json",type:"POST",url:n.CONTEXT_PATH+"/json/removewatch.action",data:{pageId:d.params.pageId,username:f,type:k},error:function(){console.error("Failed to delete watcher. Refresh page to see latest status.");a.removeClass("removing")},success:function(){a.slideUp().remove();c.trigger("list-updated.manage-watchers",{list:j})}})});c.bind("list-updated.manage-watchers",function(b,c){var a=c.list;if(g("li.watch-user",a).length>0){a.find(".no-users").addClass("hidden");r();a.find(".confluence-userlink").each(function(){g(this).click(function(a){a.preventDefault()})})}else a.find(".no-users").removeClass("hidden")});
c.bind("list-data-retrieved.manage-watchers",function(b,e){var a=e.list,d=e.watchers,f=e.type;a.find(".watch-user").remove();d&&d.length&&g.each(d,function(){var b=this.name,d=g(m.ManageWatchers.userItem({username:b,fullName:this.fullName,url:n.CONTEXT_PATH+"/display/~"+this.name,iconUrl:this.avatarUrl}));a.append(d);d.find(".remove-watch").click(function(){c.trigger("remove-list-item.manage-watchers",{username:b,item:d,list:a,type:f})})});a.find(".loading").hide();c.trigger("list-updated.manage-watchers",
{list:a})});var l=c.find(".page-watchers .user-list"),p=c.find(".space-watchers .user-list");d.safe.ajax({url:n.CONTEXT_PATH+"/json/listwatchers.action",dataType:"json",data:{pageId:d.params.pageId},error:function(){console.error("Failed to retrieve watchers.")},success:function(b){c.trigger("list-data-retrieved.manage-watchers",{list:l,watchers:b.pageWatchers,type:"page"});c.trigger("list-data-retrieved.manage-watchers",{list:p,watchers:b.spaceWatchers,type:"space"})}});o(c.find("#manage-page-watchers-form"),
"page");o(c.find("#manage-space-watchers-form"),"space")})}});require("confluence/module-exporter").safeRequire("confluence/manage-watchers",function(i){require("ajs").toInit(i)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-children', location = 'includes/js/page-children.js' */
define("confluence/page-children",["jquery","ajs","raphael","confluence/api/constants"],function(e,d,k,f){return function(c){var g,h,e=function(a){if(a.homePage){var b="Home page";return'<span class="child-display"><span class="icon icon-home-page" title="'+b+'">'+b+':</span> <a href="'+f.CONTEXT_PATH+a.href+'">'+a.text+"</a></span>"}return'<span class="child-display"><span class="'+(a.recentlyUpdated?"icon icon-recently-updated-page":"icon icon-page")+'" title="Page">Page:</span> <a href="'+
f.CONTEXT_PATH+a.href+'">'+d.escapeHtml(a.text)+"</a></span>"},l=function(a){var b=c("#page-children:not(.children-loaded)");j();if(a&&b.length)if(a.errorMessage)b.html("<span class='error'>"+a.errorMessage+"</span>");else{var d=[];c.each(a,function(a,b){d.push(e(b))});b.html(d.join(""));b.addClass("children-loaded")}},j=function(){h&&(h(),h=null);g.addClass("hidden")},i=function(a){d.safe.ajax({url:f.CONTEXT_PATH+"/json/pagechildrenstoresettings.action",type:"POST",data:{pageId:d.params.pageId,showChildren:a},
success:function(){},error:function(a,c){d.log("Failed to store the user 'showChildren' user setting: "+c)}})};c("#children-section a.children-show-hide").each(function(){c(this).click(function(a){var b=c("#children-section");if(b.hasClass("children-showing"))c("#page-children").hide(),i(!1),b.removeClass("children-showing").addClass("children-hidden");else{c("#page-children").show();if(c("#children-section:not(.children-showing)").length){var e=c("#page-children:not(.children-loaded)");e.length?
(g=c("<div class='throbber'></div>"),e.append(g),h=k.spinner(g[0],10,"#666"),d.safe.ajax({url:f.CONTEXT_PATH+"/json/pagechildren.action",type:"POST",data:{pageId:d.params.pageId,showChildren:!0},success:l,error:function(a,b){var c="Could not load child pages.";j();e.html("<span class='error'>"+c+"</span>");d.log("Error retrieving child pages: "+b)}})):i(!0)}else i(!0);b.removeClass("children-hidden").addClass("children-showing")}return d.stopEvent(a)})})}});
require("confluence/module-exporter").safeRequire("confluence/page-children",function(e){require("ajs").toInit(e)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = 'includes/js/third-party/jquery.floatingScrollbar.js' */
(function(f){function i(){a&&b.scrollLeft(a.scrollLeft())}function c(){e=a;a=null;d.each(function(){var b=f(this),c=b.offset().top,d=c+b.height(),e=g.scrollTop()+g.height();if(c+30<e&&d>e)return a=b,!1});if(a){var c=a.scrollLeft(),h=a.scrollLeft(90019001).scrollLeft(),j=a.innerWidth(),h=j+h;a.scrollLeft(c);if(h<=j)b.toggle(!1);else{b.toggle(!0);if(!e||e[0]!==a[0])e&&e.unbind("scroll",i),a.scroll(i).after(b);b.css({left:a.offset().left-g.scrollLeft(),width:j}).scrollLeft(c);k.width(h)}}else b.toggle(!1)}
var g=f(this);f("html");var d=f([]),a,e,b=f('<div id="floating-scrollbar"><div/></div>'),k=b.children();b.css({display:"none",position:"fixed",bottom:0,height:"30px",overflowX:"auto",overflowY:"hidden"}).scroll(function(){a&&a.scrollLeft(b.scrollLeft())});k.css({border:"1px solid #fff",opacity:0.01});f.fn.floatingScrollbar=function(a){!1===a?(d=d.not(this),this.unbind("scroll",i),d.length||(b.detach(),g.unbind("resize scroll",c))):this.length&&(d.length||g.resize(c).scroll(c),d=d.add(this));c();return this};
f.floatingScrollbarUpdate=c})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = 'includes/js/table-floating-scrollbar.js' */
define("confluence/table-floating-scrollbar",["jquery"],function(a){return{initialize:function(){var b=a(".wiki-content").find(".table-wrap");b.length&&b.floatingScrollbar()}}});require("confluence/module-exporter").safeRequire("confluence/table-floating-scrollbar",function(a){require("ajs").toInit(a.initialize)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:view-comment', location = 'includes/js/comments.js' */
define("confluence/comments",["ajs","jquery","confluence/storage-manager"],function(b,g,h){function f(){return confirm("Are you sure you want to delete the comment?")?(this.href+="&confirm=yes",!0):!1}return{binder:{bindRemoveConfirmation:function(a){g("#comment-"+a+" .comment-action-remove a").click(f)}},initialiser:function(a){var d=h("confluence","comments");if(a("#comments-section").length){a("#comments-section .comment:odd").addClass("odd");a(".comment-action-remove a").click(f);var e=
a("#addcomment.comment-text"),c=a("#comments-text-editor textarea");c.focus(function(){e.addClass("active")}).blur(function(){a.trim(c.val()).length||e.removeClass("active")}).bind("reset.default-text",function(){e.removeClass("active")});a("form[name='textcommentform']").submit(function(){var d=c.val();return!a.trim(d)?(alert("Comment text is empty. Cannot create empty comments."),!1):!0});a("#add-comment-rte").click(function(){c.hasClass("placeholded")||d.setItem("text-comment",a.trim(c.val()))});a("#addcomment #rte").length&&
b.bind("init.rte",function(a,b){var c=d.getItem("text-comment");c&&(b.editor.setContent(c),d.setItem("text-comment",""))})}}}});require("confluence/module-exporter").safeRequire("confluence/comments",function(b){Confluence.Comments=b.binder;require("ajs").toInit(b.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-utils', location = 'includes/js/fh/utils/dom.js' */
define("confluence/fh/utils/dom",["jquery","confluence/meta","confluence/api/event"],function(c,q,r){function g(a){if(!g.done||a)j=0!==c("#main .aui-page-panel-outer-content").length?c("#main .aui-page-panel-outer-content"):c("#main"),p=c("#header"),h=c("#main-header"),g.done=!0}function l(){g();var a=parseInt(h.css("top"))+h.outerHeight();isNaN(a)||a===l.lastValue||(l.lastValue=a,r.trigger("sticky-table-headers.change.options",{fixedOffset:a,cacheHeaderHeight:!0}))}function i(a,d,b){if(b){i[b]=i[b]||
{};if(d===i[b].lastValue)return;i[b].lastValue=d}a.css({transform:"translateY("+d+"px)","-webkit-transform":"translateY("+d+"px)"})}function m(a,d,b){var c={};b.forEach(function(b){c[b]=a.css(b)});d.css(c)}var e,j,p,h,n,o,k;n=["margin-top","margin-right","margin-left","margin-bottom"];o=["padding-top","padding-right","padding-left","padding-bottom"];k=["font-family","font-size","font-style","font-weight"];var f={forceInitialize:function(){g(!0)},addClassToPage:function(){var a=require("tinymce"),
d=q.get("content-type");("page"===d||"blogpost"===d)&&c(a.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit")},adjustMainHeaderSize:function(){g();h.css({width:j.outerWidth()-(parseInt(j.css("padding-left"))+parseInt(j.css("padding-right")))})}};f.updateTableStickyHeaderOption=l;f.translateVertical=i;f.createMainHeaderPlaceHolder=function(){g();if(e)return e;e=c('<div id="main-header-placeholder"></div>');var a=c("#title-text"),d=a.find("a"),b=a.clone().removeAttr("id"),f=b.find("a");
m(h,e,n.concat(o));e.css({height:h.outerHeight()});m(a,b,k.concat("text-decoration","letter-spacing","text-align","padding-right","padding-bottom","padding-left","margin-right","margin-bottom","margin-left"));b.css({paddingTop:parseInt(a.css("padding-top"))+Math.round(a.offset().top-h.offset().top)});m(d,f,k.concat(n,o,k,"color","text-decoration","letter-spacing","text-align"));e.append(b);return e};f.removeMainHeaderPlaceHolder=function(){e&&e.remove()};f.scrollIfAnchor=function(a){if(a="string"===
typeof a?a:c(this).attr("href")){g();var d=p.outerHeight(),b=c(a.replace(/(!|\"|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|\:|;|<|=|>|\?|@|\[|\\|\]|\^|`|\{|\||\}|~)/g,"\\$1"));if(b.length&&(window.scrollTo(0,Math.round(b.offset().top)-d),history&&"pushState"in history))return history.pushState({},document.title,window.location.pathname+window.location.search+a),!1}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-handlers', location = 'includes/js/fh/handlers/page-view-handler.js' */
define("confluence/fh/handlers/page-view-handler",["confluence/fh/utils/dom","jquery","window","confluence/api/event"],function(h,i,y,z){function k(f){if(!k.done||f)l=i("#header"),c=i("#main .aui-page-panel-outer-content"),0===c.length&&(c=i("#main")),b=i("#main-header"),o=i("#action-menu-link"),h.createMainHeaderPlaceHolder(),v=i(".ia-splitter-left .ia-fixed-sidebar"),A=b.prop("style"),B=c.prop("style"),C=Math.round(l.offset().top),d=l.height(),D=Math.round(b.offset().top)-d-(parseInt(c.css("padding-top"))+
parseInt(b.css("margin-top"))),k.done=!0}function E(){j&&0!==e&&(e=0,b.addClass("overlay-header"),b.css({top:d+"px",zIndex:r}),w&&h.translateVertical(o,e,o.attr("id")),h.updateTableStickyHeaderOption())}var l,c,b,o,v,A,B,C,d,D,p=!1,j=!1,s=!1,x=0,e=0,m=0,r=100,t="by-other",w=!1,F=function(){k();var f=i(y).scrollTop(),a=f>C;a&&parseInt(v.css("top"))<d&&v.css({top:d+"px"});!p&&a?(p=!0,l.addClass("fixed-header"),c.css({marginTop:d+"px"})):a||(l.removeClass("fixed-header"),B.removeProperty("margin-top"),
p=!1);a=f>D;!j&&a?(j=!0,b.find("#title-text").hide(),b.css({position:"fixed",width:c.outerWidth()-(parseInt(c.css("padding-left"))+parseInt(c.css("padding-right"))),right:0,top:d+"px",marginTop:0,paddingTop:parseInt(c.css("padding-top"))+parseInt(b.css("margin-top")),paddingBottom:parseInt(c.css("padding-top"))+parseInt(b.css("margin-top")),paddingLeft:c.css("padding-left"),paddingRight:c.css("padding-right"),zIndex:r}),b.before(h.createMainHeaderPlaceHolder())):a||("position width right top margin-top padding-top padding-bottom padding-left padding-right z-index".split(" ").forEach(function(a){A.removeProperty(a)}),
b.removeClass("overlay-header"),b.find("#title-text").show(),s=j=!1,h.removeMainHeaderPlaceHolder());var g,q,a=b.outerHeight(),n=x-f,u=parseInt(b.css("top"))+n;if(0>=f)e=m=0,g=d;else if(j&&0<n){if(u>d)m=d,e=0,g=d,q=r;else if(m+=Math.abs(n),50<=m||f<=a)e-=Math.abs(n),g=u,q=r;f>a+50&&!s&&(b.addClass("overlay-header"),s=!0);t="by-scroll"}else j&&0>n&&(u<d-a?(m=0,e=a,g=d-a,q=0):(e+=Math.abs(n),g=u));void 0!==q&&void 0!==g?b.css({top:g+"px",zIndex:q}):void 0!==g&&b.css({top:g+"px"});w&&h.translateVertical(o,
e,o.attr("id"));h.updateTableStickyHeaderOption();x=f},a={forceInitialize:function(){k(!0)}};a.onScrollHandler=F;a.onHoverActionMenuLinkHandler=function(){k();E();t="by-hover"};a.onClickEditPageLinkHandler=function(){k();E();z.bind("quick-edit.viewport.saved",function(){l.removeAttr("style");h.removeMainHeaderPlaceHolder()});i(y).off("scroll",F).off("resize.confluence-fixed-headers-responsive");z.trigger("analyticsEvent",{name:"view.edit.transition.edit.button.clicked",data:{method:t}})};a.isKeepDotDotDotButton=
w;a.__getShowMainHeaderBy=function(){return t};a.__getFixedHeader=function(){return p};a.__getFixedMainHeader=function(){return j};a.__setFixedHeader=function(a){p=a};a.__setFixedMainHeader=function(a){j=a};a.__setMainHeaderOverlay=function(a){s=a};a.__setScrollPosition=function(a){x=a};a.__setMovingDistance=function(a){e=a};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-view-content-resources', location = 'includes/js/fh/confluence-fixed-headers.js' */
require(["confluence/fh/utils/dom","confluence/fh/handlers/page-view-handler","ajs","jquery"],function(c,d,e,a){e.toInit(function(){if(e.Meta.get("content-type")){var h=a("#main-header"),i={"margin-left":0,"margin-right":0,"margin-top":-10,"padding-left":0,"padding-right":0,"padding-top":0};if(!Object.keys(i).some(function(a){var c=i[a];return parseInt(h.css(a),10)!==c})&&!(0<a("#main-content").find("style").length)){var k=a("#header"),j=a("#main"),f=a("#content"),l=a("#editPageLink"),m=a("#action-menu-link"),
n=["inline-dialog-notifications-miniview","inline-dialog-confluence-watch","inline-dialog-shareContentPopup","inline-dialog-ap-inline-dialog-content-confstats-connect-dev__confstats-live-watcher","inline-dialog-jira-metadata-dialog"];(new MutationObserver(function(){c.adjustMainHeaderSize()})).observe(j[0],{attributes:!0,attributeFilter:["style"]});var g=new MutationObserver(function(){"0px"===f.css("padding-right")&&f.css({paddingRight:"28px"})});g.observe(f[0],{attributes:!0,attributeFilter:["style"]});
a(window).on("resize.confluence-fixed-headers-responsive",e.debounce(c.adjustMainHeaderSize,100)).on("scroll",d.onScrollHandler).scroll(e.debounceImmediate(function(){var b=a('.aui-dropdown2[aria-hidden="false"]');b.length&&a('.aui-dropdown2-trigger[aria-owns="'+b.attr("id")+'"]').trigger("aui-button-invoke");b=a(".aui-inline-dialog:visible");b.length&&(b=b.filter(function(){var b=a(this),c=b.attr("id");return b.hasClass("non-persistence-dialog")||-1!==n.indexOf(c)}),b.css({display:"none"}),k.find(".aui-button.active, .aui-nav-imagelink.active").removeClass("active"),
h.find(".aui-button.active, .aui-nav-imagelink.active").removeClass("active"),document.activeElement.blur())},250));d.isKeepDotDotDotButton&&(j.addClass("floating-action-menu"),m.on("hover",d.onHoverActionMenuLinkHandler));l.click(function(){g&&g.disconnect();d.onClickEditPageLinkHandler()});setTimeout(function(){c.scrollIfAnchor(window.location.hash)});a("body").on("click",'a[href^="#"]',c.scrollIfAnchor)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,d){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&
a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var j={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},j,a),b,c=a,c=f.template('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);a=b;a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left");a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,j,k,l){function f(){var a=c("#"+g);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;h?b=c("#header").height()+d:(b=e.scrollTop(),b=b<=i-d?i-Math.max(b,0):d);a.css("top",b)}}var d=20,i=71,g="aui-flag-container",h=!1,e;return function(a){e=(h=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",f);l.addEventListener("aui-flag-show",f);j.bind("rte-ready",function(){"page"===
k.get("content-type")&&a("#"+g).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Comments.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads"><li class="comment-thread">' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, parentId: opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}) + '</li></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayReplyEditorLoadingContainer.soyTemplateName = 'Confluence.Templates.Comments.displayReplyEditorLoadingContainer';
}


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder.soyTemplateName = 'Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder';
}


Confluence.Templates.Comments.displayEditEditorContainer = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, id: opt_data.commentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'edit'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayEditEditorContainer.soyTemplateName = 'Confluence.Templates.Comments.displayEditEditorContainer';
}


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml(opt_data.message) + '</p><p><a href="' + soy.$$escapeHtml(opt_data.fallbackUrl) + '">' + soy.$$escapeHtml('Try again') + '</a></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.editorLoadErrorMessage.soyTemplateName = 'Confluence.Templates.Comments.editorLoadErrorMessage';
}


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_ignored) {
  var output = '<div class="quick-comment-container comment ' + soy.$$escapeHtml(opt_data.mode) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:' + ((opt_data.state == 'loading') ? 'block' : 'none') + ';"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:' + ((opt_data.state == 'loading') ? 'none' : 'block') + ';" class="quick-comment-form aui" method="post" ';
  switch (opt_data.mode) {
    case 'add':
      output += 'name="inlinecommentform" action="' + soy.$$escapeHtml("/wiki") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '"';
      break;
    case 'edit':
      output += 'name="editcommentform" action="' + soy.$$escapeHtml("/wiki") + '/pages/doeditcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&commentId=' + soy.$$escapeHtml(opt_data.comment.id) + '"';
      break;
    case 'reply':
      output += 'name="threadedcommentform"  action="' + soy.$$escapeHtml("/wiki") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&parentId=' + soy.$$escapeHtml(opt_data.comment.parentId) + '"';
      break;
  }
  output += ' >' + ((opt_data.mode == 'add') ? '<div title="' + soy.$$escapeHtml('Add a Comment') + '" class="quick-comment-prompt"><span>' + soy.$$escapeHtml('Write a comment\u2026') + '</span></div>' : '') + '</form></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentEditorCommon.soyTemplateName = 'Confluence.Templates.Comments.displayCommentEditorCommon';
}


Confluence.Templates.Comments.userLogo = function(opt_data, opt_ignored) {
  return '<p class="comment-user-logo">' + ((opt_data.userInfo.userName == null) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/1090478855/6452/56cdace06279f530d2392e16eacb4fcdf709f778/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Anonymous') + '" title="' + soy.$$escapeHtml('Anonymous') + '">' : (opt_data.userInfo.profilePicture.isDefault) ? '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + soy.$$escapeHtml("/wiki") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml('Add a picture of yourself') + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/wiki/s/1090478855/6452/56cdace06279f530d2392e16eacb4fcdf709f778/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Add a picture of yourself') + '"></a>' : '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.userInfo.profilePicture.path) + '" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" title="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '"></a>') + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.userLogo.soyTemplateName = 'Confluence.Templates.Comments.userLogo';
}


Confluence.Templates.Comments.displayComment = function(opt_data, opt_ignored) {
  return '' + ((opt_data.comment.parentId == 0 && opt_data.firstReply) ? (opt_data.isReactViewPageComponentEnabled) ? '<div id="react-comments-section"></div>' : '<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">' + soy.$$escapeHtml('1 Comment') + '</h2>' + Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}) + '</div></div>' : (opt_data.firstReply) ? Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}) : Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}));
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayComment.soyTemplateName = 'Confluence.Templates.Comments.displayComment';
}


Confluence.Templates.Comments.commentThread = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads' + ((opt_data.topLevel) ? ' top-level" id="page-comments' : '') + '">' + Confluence.Templates.Comments.commentThreadItem(opt_data) + '</ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThread.soyTemplateName = 'Confluence.Templates.Comments.commentThread';
}


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_ignored) {
  return '<li id="comment-thread-' + soy.$$escapeHtml(opt_data.comment.id) + '" class="comment-thread">' + Confluence.Templates.Comments.commentView(opt_data) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThreadItem.soyTemplateName = 'Confluence.Templates.Comments.commentThreadItem';
}


Confluence.Templates.Comments.commentView = function(opt_data, opt_ignored) {
  return '<div class="comment' + ((opt_data.highlight == true) ? ' focused' : '') + '" id="comment-' + soy.$$escapeHtml(opt_data.comment.id) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="comment-header"><h4 class="author">' + ((opt_data.commenter.userName == null) ? soy.$$escapeHtml('Anonymous') : '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>') + '</h4></div><div class="comment-body"><div class="comment-content wiki-content">' + soy.$$filterNoAutoescape(opt_data.comment.html) + '</div><div class="comment-actions">' + Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}) + Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentView.soyTemplateName = 'Confluence.Templates.Comments.commentView';
}


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_ignored) {
  var output = '<ul class="comment-actions-' + soy.$$escapeHtml(opt_data.section) + '">';
  if (opt_data.actions != null) {
    var itemList215 = opt_data.actions;
    var itemListLen215 = itemList215.length;
    for (var itemIndex215 = 0; itemIndex215 < itemListLen215; itemIndex215++) {
      var itemData215 = itemList215[itemIndex215];
      output += '<li ' + ((itemData215.style != null) ? ' class="' + soy.$$escapeHtml(itemData215.style) + '"' : '') + '><a ' + ((itemData215.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData215.tooltip) + '"' : '') + ' href="' + soy.$$escapeHtml(itemData215.url) + '" ' + ((itemData215.id) ? ' id="' + soy.$$escapeHtml(itemData215.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '') + '><span>' + soy.$$escapeHtml(itemData215.label) + '</span></a></li>\n';
    }
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentActions.soyTemplateName = 'Confluence.Templates.Comments.displayCommentActions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
define("confluence-quick-edit/comment-display-manager",["ajs","confluence/templates","confluence/comments","jquery"],function(f,h,j,c){var i={_updateCommentSectionTitle:function(){var a=c("#comments-section-title");if(0!==a.length){var b=this.commentCount();1===b?a.text("1 Comment"):a.text(f.format("{0} Comments",b))}},addComment:function(a,b,g,d){a={comment:b,commenter:a,highlight:g,context:{contextPath:f.Meta.get("context-path"),staticResourceUrlPrefix:f.Meta.get("static-resource-url-prefix")}};
a.isReactViewPageComponentEnabled=f.DarkFeatures.isEnabled("page.comments");if(this.hasComments()){if(0==b.parentId)a.firstReply=!1,g=c("#comments-section .comment-threads.top-level");else{var g=c("#comment-thread-"+b.parentId),e=g.children(".commentThreads");e.length?(a.firstReply=!1,g=e):a.firstReply=!0}d||this.clearFocus();d=c(h.Comments.displayComment(a));d.addClass("fadeInComment");g.append(d);this._updateCommentSectionTitle()}else a.firstReply=!0,d=c(h.Comments.displayComment(a)),d.addClass("fadeInComment"),
c("#comments-section").prepend(d);j.binder.bindRemoveConfirmation(b.id);b=this.getCommentNode(b.id);b.scrollToElement();return b},addOrUpdateComment:function(a,b,c,d){var e=this.getCommentNode(b.id);return e?(e.find(".comment-content").html(b.html),d||this.clearFocus(),c&&e.addClass("focused"),e.addClass("fadeInComment"),e.scrollToElement(),e):this.addComment.apply(this,arguments)},isVisible:function(){return!c("#page-comments").hasClass("hidden")},hasComments:function(){return 0<this.commentCount()},
commentCount:function(){return c("#comments-section .comment").not(".quick-comment-container").length},clearFocus:function(){c(".comment").removeClass("focused")},getCommentNode:function(a){a=c("#comment-"+a);return a.length?a:null},getParentId:function(a){a=i.getCommentNode(a);return null!=a&&(a=a.closest("div.comment"),a.length)?(a=a.attr("id"),a=/\d+/.exec(a),parseInt(a)):0}};return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/comment-display-manager","Confluence.CommentDisplayManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
define("confluence-quick-edit/scroll-util",["window","document","jquery"],function(a,c,e){return{scrollToElement:function(){this.scrollWindowToElement()||this.scrollOverflowContainerToElement();return this},scrollWindowToElement:function(){function b(){return"pageYOffset"in a?a.pageYOffset:c.documentElement.scrollTop}var f=b(),d;if("number"===typeof a.innerWidth)d=a.innerHeight;else if(c.documentElement&&c.documentElement.clientWidth)d=c.documentElement.clientHeight;else return this[0].scrollIntoView(!1),
!0;var g=this.offset().top,h=this.height();return g+h+40>f+d?(this[0].scrollIntoView(!1),a.scrollBy(0,40),f!=b()):!0},scrollOverflowContainerToElement:function(){var b=null;this.parents().each(function(){var a=e(this).css("overflow");if("auto"==a||"scroll"==a)return b=e(this),!1});if(!b)return!1;var a=b.height(),d=this.offset().top,c=this.height(),a=a-(d+c+40);0>a&&(b[0].scrollTop-=a);return!0}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/scroll-util",function(a){require("jquery").fn.extend(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
define("confluence-like/like-namespace",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Likes&&(Confluence.Likes={});return Confluence.Likes||{}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-namespace","Confluence.Likes");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
define("confluence-like/like-summary-factory",["ajs","confluence/templates","jquery"],function(a,g,h){var i={"likes.summary.you":"You like this","likes.summary.1.promoted":"{0} likes this","likes.summary.2.promoted":"{0} and {1} like this","likes.summary.3.promoted":"{0}, {1} and {2} like this","likes.summary.1.non-promoted":"{0} likes this","likes.summary.x.non-promoted":"\u003ca href=\"\" {1}\u003e{0} people\u003c/a\u003e like this",
"likes.summary.you.1.promoted":"You and {0} like this","likes.summary.you.2.promoted":"You, {0} and {1} like this","likes.summary.you.3.promoted":"You, {0}, {1} and {2} like this","likes.summary.you.1.non-promoted":"You and {0} like this","likes.summary.you.x.non-promoted":"You and \u003ca href=\"\" {1}\u003e{0} others\u003c/a\u003e like this","likes.summary.1.promoted.1.non-promoted":"{0} and {1} like this",
"likes.summary.1.promoted.x.non-promoted":"{0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.2.promoted.1.non-promoted":"{0}, {1} and {2} like this","likes.summary.2.promoted.x.non-promoted":"{0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.3.promoted.1.non-promoted":"{0}, {1}, {2} and {3} like this","likes.summary.3.promoted.x.non-promoted":"{0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this","likes.summary.you.1.promoted.1.non-promoted":"You, {0} and {1} like this",
"likes.summary.you.1.promoted.x.non-promoted":"You, {0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.you.2.promoted.1.non-promoted":"You, {0}, {1} and {2} like this","likes.summary.you.2.promoted.x.non-promoted":"You, {0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.you.3.promoted.1.non-promoted":"You, {0}, {1}, {2} and {3} like this","likes.summary.you.3.promoted.x.non-promoted":"You, {0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this"};
return{getLikeSummary:function(a,c,k){if(!a||0===a.length)return{key:"",text:""};if(!c)throw Error("contentId is required.");var j,e=[],f=[];h.each(a,function(a,b){b.user&&b.user.name==k?j=b:3>e.length&&b.user.followedByRemoteUser?e.push(b):f.push(b)});var a=["likes.summary"],d=[];null!=j&&a.push(".you");0<e.length&&(a.push("."),a.push(e.length),a.push(".promoted"),h.each(e,function(a,b){d.push(g.Likes.userLink(b))}));1===f.length?(a.push(".1.non-promoted"),d.push(g.Likes.userLink(f[0]))):1<f.length&&
(a.push(".x.non-promoted"),d.push(f.length),d.push('class="likes" data-content-id="'+c+'"'));c=a.join("");return{key:c,args:0===d.length?void 0:d,text:c in i?i[c]:""}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
define("confluence-like/like","ajs confluence/templates jquery confluence/meta confluence/hover-user confluence-like/like-summary-factory".split(" "),function(c,l,e,g,t,u){function o(b){return c.contextPath()+"/rest/likes/1.0/content/"+b+"/likes"}function r(){return(g.get("remote-user")||"").length>0&&g.get("remote-user-has-licensed-access")!==false}function p(b,a,d){var f=g.get("remote-user")||"",a=u.getLikeSummary(b.likes,a,f);if(!a.key&&i()&&(b.content_type=="page"||b.content_type=="blogpost"))a.text=
"Be the first to like this";f=[];f.push(a.text);f=f.concat(a.args);(a=c.format.apply(c,f))&&a.length>0?d.html(a):d.empty();if(a){d.find(".likes").click(n.showLikeUsers);t();b.content_type=="comment"&&d.prepend("<span class='comment-action-separator'>\u2022</span><span class='aui-icon aui-icon-small aui-iconfont-like-small'></span>")}}function m(b,a,d){var f=g.get("remote-user")||"";if(b===void 0)throw Error("type is required");if(a===void 0)throw Error("contentId is required");if(d===void 0)throw Error("contentType is required");
return function(){if(typeof this!=="object"||!this.nodeType||this.nodeType!==1||this.nodeName!=="A")throw Error("this handler should be bound to a DOM anchor element");var h=e(this),l=arguments.callee,i=h.next(".like-summary");e.ajax({type:b===j?"POST":"DELETE",url:o(a),contentType:"application/json",data:{"atlassian-token":g.get("atlassian-token")},dataType:"json",timeout:5E3}).fail(function(){var a=i.siblings(".like-error"),d;d=b===j?"Like failed":"Unlike failed";
a.length===0?i.after('<span class="like-error" title="'+d+'"></span>'):a.attr("title",d)}).success(function(){i.attr("data-liked",b===j);i.parent().find(".like-error").remove()});h.unbind("click",l).bind("click",b===j?m(q,a,d):m(j,a,d)).find(".like-button-text").html(b===j?"Unlike":"Like");k[a]=k[a]||{content_type:d,likes:[]};b===j?k[a].likes.push({user:{name:f}}):k[a].likes=e.grep(k[a].likes,function(a){return a.user.name!=f});b===j&&c.trigger("analytics",
{name:"confluence."+d+".like.create",data:{pageID:g.get("page-id")}});p(k[a],a,i);return false}}var j=0,q=1,h,k={},i=r,s=e.Deferred(),n={getLikesCache:function(){return s.promise()},showLikeUsers:function(b){b&&b.preventDefault();var b=e(this),a=b.data("content-id");b.blur();if(h){h.remove();h=void 0}h=new c.Dialog(400,365,"likes-dialog");h.addHeader("People who like this");h.addPanel("Panel 1","<div class='spinner-container'></div>");h.addCancel("Close",function(a){a.remove();
h=void 0});h.getCurrentPanel().setPadding(0);h.show();e.ajax({type:"GET",url:o(a),data:{expand:"user",max:50},dataType:"json"}).done(function(a){if(h.popup.element.is(":visible")){a.showFollowActions=r();h.getCurrentPanel().html(l.Likes.likesDialog(a));e("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var a=e(this);e.ajax({type:"PUT",url:c.contextPath()+"/rest/likes/1.0/user/"+g.get("remote-user")+"/following?username="+a.data("username"),contentType:"application/json",dataType:"json"}).done(function(){a.replaceWith("Following")})})}})},
appendAction:function(b){var b=b.find(".comment-actions-primary").find("li.comment-action-like"),a=l.Likes.commentLikeSection({showLikeButton:i()});b.replaceWith(a)},reload:function(b){e.each(b,function(a,b){var c=e("#comment-"+a).find(".like-summary");p(b,a,c);k[a]=b});!i()&&e("#page-comments").find(".like-summary:empty").each(function(){e(this).closest(".comment-action-like").hide()});e("#page-comments .comment").each(function(){n.updateComment(e(this),b)});s.resolve(k)},updateComment:function(b,
a){var d=b.attr("id");if(!d)return true;var f=(/^comment-(\d+)$/.exec(d)||[])[1];if(!f)throw Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+d);d=a[f]&&g.get("remote-user")&&e.grep(a[f].likes,function(a){return a.user.name==g.get("remote-user")}).length>0;b.find(".like-button").click(d?m(q,f,"comment"):m(j,f,"comment")).find(".like-button-text").html(d?"Unlike":"Like")},init:function(){var b=e(l.Likes.likeSection({showLikeButton:i()}));
g.get("page-id")&&e.ajax({type:"GET",url:o(g.get("page-id")),data:{commentLikes:true},dataType:"json"}).done(function(a){if(g.get("remote-user")){var d=e.grep(a.likes,function(a){return a.user.name==g.get("remote-user")}).length>0,f=a.content_type;b.find(".like-button").click(d?m(q,g.get("page-id"),f):m(j,g.get("page-id"),f)).find(".like-button-text").html(d?"Unlike":"Like")}d=b.find(".like-summary");p(a,a.content_id,d);d.html()==""&&!i()&&b.hide();e("#likes-section").html(b);
k[a.content_id]=a;n.reload(a.commentLikes)});n.appendAction(e("#page-comments"))}};return n});require("confluence/module-exporter").safeRequire("confluence-like/like",function(c){var l=require("ajs");Confluence.Likes.getLikesCache=c.getLikesCache;l.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget||(l.toInit(c.init),Confluence.Likes.showLikeUsers=c.showLikeUsers,Confluence.Likes.appendAction=c.appendAction,Confluence.Likes.reload=c.reload,Confluence.Likes.updateComment=c.updateComment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Likes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeButton = function(opt_data, opt_ignored) {
  return '<a href="" class="like-button">' + ((opt_data.useIcon) ? '<span class="aui-icon aui-icon-small aui-iconfont-like"></span>' : '') + '<span class="like-button-text">' + soy.$$escapeHtml('Like') + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeButton.soyTemplateName = 'Confluence.Templates.Likes.likeButton';
}


Confluence.Templates.Likes.likeSection = function(opt_data, opt_ignored) {
  return '<div>' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: true}) : '') + '<span class="like-summary"></span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeSection.soyTemplateName = 'Confluence.Templates.Likes.likeSection';
}


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_ignored) {
  return '<li class="comment-action-like">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: false}) : '') + '<span class="like-summary"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.commentLikeSection.soyTemplateName = 'Confluence.Templates.Likes.commentLikeSection';
}


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_ignored) {
  var output = '<div id="likes-dialog-body"><ol>';
  var likeList26 = opt_data.likes;
  var likeListLen26 = likeList26.length;
  for (var likeIndex26 = 0; likeIndex26 < likeListLen26; likeIndex26++) {
    var likeData26 = likeList26[likeIndex26];
    output += '<li><div class="avatar-container"><a href="' + soy.$$escapeHtml(likeData26.user.url) + '"><img class="like-user-avatar" src="' + soy.$$escapeHtml(likeData26.user.avatarUrl) + '"></a></div><div class="like-user"><a class="like-user-link" href="' + soy.$$escapeHtml(likeData26.user.url) + '">' + soy.$$escapeHtml(likeData26.user.fullName) + '</a></div>' + ((opt_data.showFollowActions) ? '<div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">' + ((likeData26.user.followedByRemoteUser) ? soy.$$escapeHtml('Following') : '<button data-username="' + soy.$$escapeHtml(likeData26.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml('Follow') + '</button>') + '</li></ul></div>' : '') + '</li>';
  }
  output += '</ol></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likesDialog.soyTemplateName = 'Confluence.Templates.Likes.likesDialog';
}


Confluence.Templates.Likes.userLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.user.url) + '" class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.userLink.soyTemplateName = 'Confluence.Templates.Likes.userLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload.soy' */
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace QuickReload.Templates.
 */

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.pageEdit = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.pageEditors}) + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: 'Reload page', type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.pageEditors}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageEdit.soyTemplateName = 'QuickReload.Templates.pageEdit';
}


QuickReload.Templates.pageComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.commentUsers}) + ((opt_data.commentUsers.length == 1) ? '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span>' : '') + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.commentUsers.length > 1) ? soy.$$escapeHtml('Show all') : soy.$$escapeHtml('Show')), type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.commentUsers}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageComment.soyTemplateName = 'QuickReload.Templates.pageComment';
}


QuickReload.Templates.inlineComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.user}) + '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span></div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.reloadRequired) ? soy.$$escapeHtml('Reload page') : soy.$$escapeHtml('Show')), type: 'text', extraClasses: 'qr-notice-show aui-button-text', extraAttributes: ['data-reload-required', opt_data.reloadRequired]}) + QuickReload.Templates.summaryText({users: opt_data.user}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.inlineComment.soyTemplateName = 'QuickReload.Templates.inlineComment';
}


QuickReload.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="qr-container">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  QuickReload.Templates.container.soyTemplateName = 'QuickReload.Templates.container';
}


QuickReload.Templates.noticeHeader = function(opt_data, opt_ignored) {
  var output = '';
  var userList68 = opt_data.users;
  var userListLen68 = userList68.length;
  for (var userIndex68 = 0; userIndex68 < userListLen68; userIndex68++) {
    var userData68 = userList68[userIndex68];
    output += (userIndex68 < 8) ? aui.avatar.avatar({size: 'small', avatarImageUrl: userData68.profilePicture.path, title: userData68.displayName != '' ? userData68.displayName : 'Anonymous', extraClasses: 'qr-author-avatar'}) : '';
  }
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.noticeHeader.soyTemplateName = 'QuickReload.Templates.noticeHeader';
}


QuickReload.Templates.summaryText = function(opt_data, opt_ignored) {
  var output = '';
  var lastModifier__soy78 = opt_data.users[0];
  var others__soy79 = opt_data.users.length - 1;
  output += '<span class="qr-notice-summary-text">' + soy.$$escapeHtml('by') + ' ' + Confluence.Templates.User.usernameLink({canView: false, username: lastModifier__soy78.userName, fullName: lastModifier__soy78.displayName != '' ? lastModifier__soy78.displayName : 'Anonymous'}) + ((others__soy79 == 1) ? ' ' + soy.$$escapeHtml('and 1 other') : '') + ((others__soy79 > 1) ? ' ' + soy.$$escapeHtml(AJS.format('and {0} others',others__soy79)) : '') + '</span>';
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.summaryText.soyTemplateName = 'QuickReload.Templates.summaryText';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-timer.js' */
define("confluence-quick-reload/utils/quick-reload-timer",["jquery","underscore"],function(c,d){function a(b,a){this.options=c.extend({min:3E4,max:36E5,inactivity:12E4},a);d.bindAll(this,"start","stop","_now","_timeSinceLastSeen","_setActive","_setActivityTrigger","_clamp","_intervalMultiplier");this.callback=b;this._timer=null;this._setActivityTrigger(this._setActive)}a.prototype.start=function(b){this.lastSeenTimestamp=this._now();this.stop();b&&this.callback();var a=function(){this.callback();
c.call(this)},c=function(){this.stop();this._timer=setTimeout(d.bind(a,this),this.options.min*this._intervalMultiplier())};c.call(this)};a.prototype.stop=function(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)};a.prototype._setActive=function(){if(null!==this._timer){var b=this._timeSinceLastSeen()>this.options.inactivity;this.lastSeenTimestamp=this._now();b&&this.start(!0)}};a.prototype._setActivityTrigger=function(b){document.addEventListener("visibilitychange",function(){document.hidden||
b()},!1);c(window).focus(b);c("body").click(b);c(window).scroll(b)};a.prototype._now=function(){return(new Date).getTime()};a.prototype._timeSinceLastSeen=function(){return this._now()+1-this.lastSeenTimestamp};a.prototype._clamp=function(b,a,c){a=Math.max(Math.min(a,c),b);return isNaN(a)?b:a};a.prototype._intervalMultiplier=function(){var a=(document.hidden?3:1)*Math.ceil(this._timeSinceLastSeen()/this.options.inactivity);return this._clamp(1,this.options.max/this.options.min,a)};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-count.js' */
define("confluence-quick-reload/utils/quick-reload-count",function(){function a(){this.count=0}var b=document.title;a.prototype.getCount=function(){return this.count};a.prototype.setCount=function(a){this.count=a;this._displayCount()};a.prototype._displayCount=function(){document.title=(0<this.count?"("+this.count+") ":"")+b};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-comments","ajs underscore jquery confluence/flag confluence-quick-reload/utils/quick-reload-count confluence-like/like confluence-quick-edit/comment-display-manager".split(" "),function(k,c,d,l,h,i,g){function j(c){return c.comment.id}var a,e=[];return{results:[],property:"comments",ignoreOnce:function(c){e.push(c)},filterNewResults:function(a,f){if(f.length===0)return f;var b=c.map(a,j);return c.filter(f,function(a){if(a.comment.isInlineComment)return false;
a=j(a);if(c.contains(b,a))return false;a=d.inArray(a,e);if(a>=0){e.splice(a,1);return false}return true})},render:function(e){h.setCount(h.getCount()+e.length);var e={close:"manual",type:"info",extraClasses:"qr-flag",fifo:true,stack:"quickreload"},f=this.results.length>1?k.format("{0} New comments",this.results.length):"New comment",b;b=c.clone(this.results);b.reverse();b=c.uniq(b,function(a){return a.commenter.userName});b=c.map(b,function(a){return a.commenter});
var m=d("<div>").html(this.results[this.results.length-1].comment.html).text();b=QuickReload.Templates.pageComment({commentUsers:b,noticeText:m});if(a===void 0||a.getAttribute("aria-hidden")==="true"){a=new l(d.extend({},{body:b,title:f},e));d(a).on("click",".qr-notice-show",c.bind(function(){var b=this.results;if(g){g.clearFocus();c.map(b,function(a){var b=g.getCommentNode(j(a))!==null,a=g.addOrUpdateComment(a.commenter,a.comment,true,true);if(i&&!b){i.appendAction(d(a));i.updateComment(d(a),{})}});
g._updateCommentSectionTitle()}a.close()},this));d(a).on("aui-flag-close",c.bind(function(){h.setCount(h.getCount()-this.results.length);this.results=[]},this))}else{d(a).find(".qr-container").replaceWith(b);d(a).find(".title").text(f)}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-inline-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-inline-comments",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(b,f,h,q,l){function o(a,d,b,e,c){a=QuickReload.Templates.inlineComment({user:[a.commenter],noticeText:a&&a.comment&&f("<div>").text(a.comment.html).text(),reloadRequired:d});c=1<c?"New inline comments":"New inline comment";c=new q(f.extend({},{title:c,body:a},{close:"manual",
type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"}));f(c).find(".qr-notice-show").click(b);d||f(c).find(".qr-notice-show").click(c.close);f(c).on("aui-flag-close",e)}function n(a){return 0===a.comment.parentId}function i(a){return n(a)?a.comment.id:a.comment.parentId}return{results:[],property:"comments",filterNewResults:function(a,d){d=b.clone(d);d=b.filter(d,function(a){return a.comment.isInlineComment&&a.commenter.userName!==h.Meta.get("remote-user")});if(0<d.length)var f=b.map(a,
i),e=b.filter(d,n),c=b.filter(d,function(a){return!n(a)}),g=b.map(e,i),j=b.map(c,i),k=b.difference(j,g),p=[],c=b.filter(c,function(a){return-1!==k.indexOf(a.comment.parentId)&&-1===p.indexOf(a.comment.parentId)?(p.push(a.comment.parentId),!0):!1}),e=e.concat(c),d=b.filter(e,function(a){return-1===f.indexOf(i(a))});return d},render:function(a){l.setCount(l.getCount()+a.length);b.each(a,function(a){var m=i(a),e=function(){h.trigger("qr:show-new-thread",m)},c=function(){var a=h.Meta.Links.canonical(),
b=-1===a.indexOf("?")?"?":"&";window.location=a+b+"focusedCommentId="+m+"#comment-"+m},g=function(){this.results=b.filter(this.results,function(a){return i(a)!==m});l.setCount(l.getCount()-1)},g=b.bind(g,this),j=this.results.length;if(n(a)){var k=new f.Deferred;k.fail(function(a){o(a,!0,c,g,j)});k.done(function(a){o(a,!1,e,g,j)});h.trigger("qr:add-new-highlight",[a,k])}else o(a,!1,e,g,j)},this)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-page.js' */
define("confluence-quick-reload/handlers/quick-reload-page",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(d,a,g,i,e){var c;return{results:[],property:"page",filterNewResults:function(c,a){return 0<a.length&&"string"!==typeof a[0]?a:[]},render:function(f){e.setCount(e.getCount()+f.length);var f={close:"manual",type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"},h=1<this.results.length?g.format("{0} new edits",this.results.length):
"New page edits",b;b=d.clone(this.results);b.reverse();b=d.uniq(b,function(a){return a.editor.userName});b=d.map(b,function(a){return a.editor});b=QuickReload.Templates.pageEdit({pageEditors:b});void 0===c||"true"===c.getAttribute("aria-hidden")?(c=new i(a.extend({},{body:b,title:h},f)),a(c).on("click",".qr-notice-show",function(){a(this).prop("disabled",!0).prepend('<span class="aui-icon aui-icon-wait"></span>&nbsp;');window.location.reload()}),a(c).on("aui-flag-close",d.bind(function(){e.setCount(e.getCount()-
this.results.length);this.results=[]},this))):(a(c).find(".qr-container").replaceWith(b),a(c).find(".title").text(h))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload-manager.js' */
define("confluence-quick-reload/main/quick-reload-manager",["underscore","jquery","ajs","confluence-quick-reload/utils/quick-reload-timer"],function(h,f,g,i){function a(){this._isEnabled=!1;this.handlers=[];this.lastFetchTime=f('meta[name="confluence-request-time"]').attr("content")||(new Date).getTime();this._timer=null;h.bindAll(this,"addHandler","removeHandler","update","enable","disable","_onUpdateSuccess","_onUpdateError")}a.prototype.addHandler=function(d){for(var a=!1,e=0;e<this.handlers.length;e++)this.handlers[e]===
d&&(a=!0);!0!==a&&this.handlers.push(d)};a.prototype.removeHandler=function(d){if(d)for(var a=0;a<this.handlers.length;a++)if(this.handlers[a]===d){this.handlers.splice(a,1);break}};a.prototype.update=function(){f("body").hasClass("contenteditor")?this.disable():f.ajax({type:"GET",url:g.contextPath()+"/rest/quickreload/latest/"+g.Meta.get("page-id")+"?since="+encodeURIComponent(this.lastFetchTime),dataType:"json"}).done(this._onUpdateSuccess).fail(this._onUpdateError)};a.prototype.enable=function(){null===
this._timer&&(this._timer=new i(this.update));this._timer.start();this._isEnabled=!0};a.prototype.disable=function(){null!==this._timer&&this._timer.stop();this._isEnabled=!1};a.prototype.isEnabled=function(){return this._isEnabled};a.prototype._onUpdateSuccess=function(a,f,e){204!==e.status&&(this.lastFetchTime=a.time,h.map(this.handlers,function(c){var b=a[c.property];Array.isArray(b)||(b=[b]);b=c.filterNewResults(c.results,b);0<b.length&&(c.results=c.results.concat(b),c.render(b))},this))};a.prototype._onUpdateError=
function(a){a=a||{};if(a={404:"not found - the plugin has been probably been removed or disabled from Confluence",500:"generic server error",503:"service unavailable",504:"gateway timeout"}[a.status])this.disable(),g.log('Quick comment reload plugin has been disabled in this page due to a server error: "'+a+'". Please refresh the page to get it back.')};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-bootstrap', location = 'main/quick-reload-main.js' */
require("ajs confluence-quick-reload/main/quick-reload-manager confluence-quick-reload/handlers/quick-reload-comments confluence-quick-reload/handlers/quick-reload-inline-comments confluence-quick-reload/handlers/quick-reload-page confluence-quick-edit/comment-display-manager".split(" "),function(a,b,c,d,e,f){a.toInit(function(){if(!(a.DarkFeatures.isEnabled("react.ui.view-page")||a.DarkFeatures.isEnabled("quickreload.disabled")||!f||a.Meta.get("page-id")===void 0)){b.addHandler(c);b.addHandler(d);
b.addHandler(e);b.enable();a.bind("page.commentAddedOrUpdated",function(a,b){c.ignoreOnce(b.commentId)})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Plugins.ContentReport.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_ignored) {
  var output = '';
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output += '<div class="blueprint-blank-experience ' + soy.$$escapeHtml(opt_data.blueprintKey) + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '') + '</div>';
  } else {
    output += '<table class="aui content-report-table-macro' + ((hasSocialColumn__soy3) ? ' with-extra-columns' : '') + '"' + ((opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '') + '><thead><tr><th>' + soy.$$escapeHtml('Title') + '</th><th>' + soy.$$escapeHtml('Creator') + '</th><th>' + soy.$$escapeHtml('Modified') + '</th></tr></thead><tbody>';
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output += '<tr><td class="title"><a href="' + soy.$$escapeHtml(resultData43.urlPath) + '">' + soy.$$escapeHtml(resultData43.title) + '</a></td><td class="creator">' + Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}) + '</td><td class="modified" data-sortable-date="' + soy.$$escapeHtml(resultData43.sortableDate) + '">' + soy.$$escapeHtml(resultData43.friendlyModificationDate) + '</td>' + ((hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '') + '</tr>';
      }
    } else {
      output += '<tr><td colspan="3">' + soy.$$escapeHtml('No content found.') + '</td></tr>';
    }
    output += '</tbody></table>' + ((opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml('Find more results') + '</a></div>' : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Plugins.ContentReport.contentReportTable.soyTemplateName = 'Confluence.Templates.Plugins.ContentReport.contentReportTable';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-tablesorter', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.tablesorter.js' */
("undefined"===typeof window?global:window).__c9edf5d8d2fcc7f0411bc8f50451f94a=function(){var h=jQuery;h.extend({tablesorter:new function(){function e(){var a=arguments[0],b=1<arguments.length?Array.prototype.slice.call(arguments):a;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(a)?"error":/warn/i.test(a)?"warn":"log"](b);else alert(b)}function o(a,b){e(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function p(a){for(var b in a)return!1;return!0}function m(a,
b,c){if(!b)return"";var g,d=a.config,j=d.textExtraction||"",e="",e="basic"===j?h(b).attr(d.textAttribute)||b.textContent||b.innerText||h(b).text()||"":"function"===typeof j?j(b,a,c):"function"===typeof(g=f.getColumnData(a,j,c))?g(b,a,c):b.textContent||b.innerText||h(b).text()||"";return h.trim(e)}function t(a){var b,c,g=a.config,d=g.$tbodies=g.$table.children("tbody:not(."+g.cssInfoBlock+")"),j,u,i,l,k,h,r,n,q,p=0,B="",t=d.length;if(0===t)return g.debug?e("Warning: *Empty table!* Not building a parser cache"):
"";g.debug&&(q=new Date,e("Detecting parsers for each column"));b=[];for(c=[];p<t;){j=d[p].rows;if(j[p]){u=g.columns;for(i=0;i<u;i++){l=g.$headers.filter('[data-column="'+i+'"]:last');k=f.getColumnData(a,g.headers,i);n=f.getParserById(f.getData(l,k,"extractor"));r=f.getParserById(f.getData(l,k,"sorter"));h="false"===f.getData(l,k,"parser");g.empties[i]=f.getData(l,k,"empty")||g.emptyTo||(g.emptyToBottom?"bottom":"top");g.strings[i]=f.getData(l,k,"string")||g.stringTo||"max";h&&(r=f.getParserById("no-parser"));
n||(n=!1);if(!r)a:{l=a;k=j;h=-1;r=i;for(var s=void 0,F=f.parsers.length,C=!1,w="",s=!0;""===w&&s;)h++,k[h]?(C=k[h].cells[r],w=m(l,C,r),l.config.debug&&e("Checking if value was empty on row "+h+", column: "+r+': "'+w+'"')):s=!1;for(;0<=--F;)if((s=f.parsers[F])&&"text"!==s.id&&s.is&&s.is(w,l,C)){r=s;break a}r=f.getParserById("text")}g.debug&&(B+="column:"+i+"; extractor:"+n.id+"; parser:"+r.id+"; string:"+g.strings[i]+"; empty: "+g.empties[i]+"\n");c[i]=r;b[i]=n}}p+=c.length?t:1}g.debug&&(e(B?B:"No parsers detected"),
o("Completed detecting parsers",q));g.parsers=c;g.extractors=b}function s(a){var b,c,g,d,j,u,i,l,k,p,r,n=a.config,q=n.$table.children("tbody"),t=n.extractors,s=n.parsers;n.cache={};n.totalRows=0;if(!s)return n.debug?e("Warning: *Empty table!* Not building a cache"):"";n.debug&&(l=new Date);n.showProcessing&&f.isProcessing(a,!0);for(j=0;j<q.length;j++)if(r=[],b=n.cache[j]={normalized:[]},!q.eq(j).hasClass(n.cssInfoBlock)){k=q[j]&&q[j].rows.length||0;for(g=0;g<k;++g)if(p={child:[]},u=h(q[j].rows[g]),
i=[],u.hasClass(n.cssChildRow)&&0!==g)c=b.normalized.length-1,b.normalized[c][n.columns].$row=b.normalized[c][n.columns].$row.add(u),u.prev().hasClass(n.cssChildRow)||u.prev().addClass(f.css.cssHasChild),p.child[c]=h.trim(u[0].textContent||u[0].innerText||u.text()||"");else{p.$row=u;p.order=g;for(d=0;d<n.columns;++d)if("undefined"===typeof s[d])n.debug&&e("No parser found for cell:",u[0].cells[d],"does it have a header?");else if(c=m(a,u[0].cells[d],d),c="undefined"===typeof t[d].id?c:t[d].format(c,
a,u[0].cells[d],d),c="no-parser"===s[d].id?"":s[d].format(c,a,u[0].cells[d],d),i.push(n.ignoreCase&&"string"===typeof c?c.toLowerCase():c),"numeric"===(s[d].type||"").toLowerCase())r[d]=Math.max(Math.abs(c)||0,r[d]||0);i[n.columns]=p;b.normalized.push(i)}b.colMax=r;n.totalRows+=b.normalized.length}n.showProcessing&&f.isProcessing(a);n.debug&&o("Building cache for "+k+" rows",l)}function w(a,b){var c=a.config,g=c.widgetOptions,d=a.tBodies,j=[],e=c.cache,i,l,k,m,r,n;if(p(e))return c.appender?c.appender(a,
j):a.isUpdating?c.$table.trigger("updateComplete",a):"";c.debug&&(n=new Date);for(r=0;r<d.length;r++)if(i=h(d[r]),i.length&&!i.hasClass(c.cssInfoBlock)){k=f.processTbody(a,i,!0);i=e[r].normalized;l=i.length;for(m=0;m<l;m++)j.push(i[m][c.columns].$row),(!c.appender||c.pager&&(!c.pager.removeRows||!g.pager_removeRows)&&!c.pager.ajax)&&k.append(i[m][c.columns].$row);f.processTbody(a,k,!1)}c.appender&&c.appender(a,j);c.debug&&o("Rebuilt table",n);!b&&!c.appender&&f.applyWidget(a);a.isUpdating&&c.$table.trigger("updateComplete",
a)}function z(a){var b,c,g,d,j,u,i,l=a.config;l.headerList=[];l.headerContent=[];l.debug&&(i=new Date);l.columns=f.computeColumnIndex(l.$table.children("thead, tfoot").children("tr"));d=l.cssIcon?'<i class="'+(l.cssIcon===f.css.icon?f.css.icon:l.cssIcon+" "+f.css.icon)+'"></i>':"";l.$headers=h(a).find(l.selectorHeaders).each(function(i){c=h(this);b=f.getColumnData(a,l.headers,i,!0);l.headerContent[i]=h(this).html();j=l.headerTemplate.replace(/\{content\}/g,h(this).html()).replace(/\{icon\}/g,d);l.onRenderTemplate&&
(g=l.onRenderTemplate.apply(c,[i,j]))&&"string"===typeof g&&(j=g);h(this).html('<div class="'+f.css.headerIn+'">'+j+"</div>");l.onRenderHeader&&l.onRenderHeader.apply(c,[i]);this.column=parseInt(h(this).attr("data-column"),10);var e=f.getData(c,b,"sortInitialOrder")||l.sortInitialOrder;this.order=/^d/i.test(e)||1===e?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;u=f.getData(c,b,"lockedOrder")||!1;"undefined"!==typeof u&&!1!==u&&(this.order=this.lockedOrder=/^d/i.test(u)||1===u?[1,1,1]:[0,0,0]);
c.addClass(f.css.header+" "+l.cssHeader);l.headerList[i]=this;c.parent().addClass(f.css.headerRow+" "+l.cssHeaderRow).attr("role","row");l.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});A(a);l.debug&&(o("Built headers:",i),e(l.$headers))}function y(a,b,c){var g=a.config;g.$table.find(g.selectorRemove).remove();t(a);s(a);D(g.$table,b,c)}function A(a){var b,c,g,d=a.config;d.$headers.each(function(j,e){c=h(e);g=f.getColumnData(a,d.headers,j,!0);b="false"===f.getData(e,g,"sorter")||
"false"===f.getData(e,g,"parser");e.sortDisabled=b;c[b?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+b);a.id&&(b?c.removeAttr("aria-controls"):c.attr("aria-controls",a.id))})}function x(a){var b,c,g=a.config,d=g.sortList,j=d.length,e=f.css.sortNone+" "+g.cssNone,i=[f.css.sortAsc+" "+g.cssAsc,f.css.sortDesc+" "+g.cssDesc],l=["ascending","descending"],k=h(a).find("tfoot tr").children().add(g.$extraHeaders).removeClass(i.join(" "));g.$headers.removeClass(i.join(" ")).addClass(e).attr("aria-sort",
"none");for(b=0;b<j;b++)if(2!==d[b][1]&&(a=g.$headers.not(".sorter-false").filter('[data-column="'+d[b][0]+'"]'+(1===j?":last":"")),a.length)){for(c=0;c<a.length;c++)a[c].sortDisabled||a.eq(c).removeClass(e).addClass(i[d[b][1]]).attr("aria-sort",l[d[b][1]]);k.length&&k.filter('[data-column="'+d[b][0]+'"]').removeClass(e).addClass(i[d[b][1]])}g.$headers.not(".sorter-false").each(function(){var a=h(this),b=this.order[(this.count+1)%(g.sortReset?3:2)],b=a.text()+": "+f.language[a.hasClass(f.css.sortAsc)?
"sortAsc":a.hasClass(f.css.sortDesc)?"sortDesc":"sortNone"]+f.language[0===b?"nextAsc":1===b?"nextDesc":"nextNone"];a.attr("aria-label",b)})}function G(a,b,c){if(a.isUpdating)return setTimeout(function(){G(a,b,c)},50);var g,d,j,e,i=a.config,l=!c[i.sortMultiSortKey],k=i.$table;k.trigger("sortStart",a);b.count=c[i.sortResetKey]?2:(b.count+1)%(i.sortReset?3:2);i.sortRestart&&(d=b,i.$headers.each(function(){if(this!==d&&(l||!h(this).is("."+f.css.sortDesc+",."+f.css.sortAsc)))this.count=-1}));d=b.column;
if(l){i.sortList=[];if(null!==i.sortForce){g=i.sortForce;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}g=b.order[b.count];if(2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}else{if(i.sortAppend&&1<i.sortList.length)for(j=0;j<i.sortAppend.length;j++)e=f.isValueInArray(i.sortAppend[j][0],i.sortList),0<=e&&i.sortList.splice(e,1);if(0<=f.isValueInArray(d,i.sortList))for(j=0;j<i.sortList.length;j++)e=i.sortList[j],g=i.$headers.filter('[data-column="'+
e[0]+'"]:last')[0],e[0]===d&&(e[1]=g.order[b.count],2===e[1]&&(i.sortList.splice(j,1),g.count=-1));else if(g=b.order[b.count],2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}if(null!==i.sortAppend){g=i.sortAppend;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}k.trigger("sortBegin",a);setTimeout(function(){x(a);E(a);w(a);k.trigger("sortEnd",a)},1)}function E(a){var b,c,g,d,j,e,i,h,k,m,r,n=0,q=a.config,s=q.textSorter||"",t=q.sortList,v=t.length,
w=a.tBodies.length;if(!q.serverSideSorting&&!p(q.cache)){q.debug&&(j=new Date);for(c=0;c<w;c++)e=q.cache[c].colMax,i=q.cache[c].normalized,i.sort(function(c,j){for(b=0;b<v;b++){d=t[b][0];h=t[b][1];n=0===h;if(q.sortStable&&c[d]===j[d]&&1===v)break;(g=/n/i.test(q.parsers&&q.parsers[d]?q.parsers[d].type||"":""))&&q.strings[d]?(g="boolean"===typeof q.string[q.strings[d]]?(n?1:-1)*(q.string[q.strings[d]]?-1:1):q.strings[d]?q.string[q.strings[d]]||0:0,k=q.numberSorter?q.numberSorter(c[d],j[d],n,e[d],a):
f["sortNumeric"+(n?"Asc":"Desc")](c[d],j[d],g,e[d],d,a)):(m=n?c:j,r=n?j:c,k="function"===typeof s?s(m[d],r[d],n,d,a):"object"===typeof s&&s.hasOwnProperty(d)?s[d](m[d],r[d],n,d,a):f["sortNatural"+(n?"Asc":"Desc")](c[d],j[d],d,a,q));if(k)return k}return c[q.columns].order-j[q.columns].order});q.debug&&o("Sorting on "+t.toString()+" and dir "+h+" time",j)}}function H(a,b){a[0].isUpdating&&a.trigger("updateComplete");h.isFunction(b)&&b(a[0])}function D(a,b,c){var g=a[0].config.sortList;!1!==b&&!a[0].isProcessing&&
g.length?a.trigger("sorton",[g,function(){H(a,c)},!0]):(H(a,c),f.applyWidget(a[0],!1))}function I(a){var b=a.config,c=b.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave".split(" ").join(b.namespace+" ")).bind("sortReset"+b.namespace,function(g,d){g.stopPropagation();b.sortList=[];x(a);E(a);w(a);h.isFunction(d)&&d(a)}).bind("updateAll"+b.namespace,function(g,d,
c){g.stopPropagation();a.isUpdating=!0;f.refreshWidgets(a,!0,!0);f.restoreHeaders(a);z(a);f.bindEvents(a,b.$headers,!0);I(a);y(a,d,c)}).bind("update"+b.namespace+" updateRows"+b.namespace,function(b,d,c){b.stopPropagation();a.isUpdating=!0;A(a);y(a,d,c)}).bind("updateCell"+b.namespace,function(g,d,j,f){g.stopPropagation();a.isUpdating=!0;c.find(b.selectorRemove).remove();var e,l,k;l=c.find("tbody");k=h(d);g=l.index(h.fn.closest?k.closest("tbody"):k.parents("tbody").filter(":first"));e=h.fn.closest?
k.closest("tr"):k.parents("tr").filter(":first");d=k[0];if(l.length&&0<=g){l=l.eq(g).find("tr").index(e);k=k.index();b.cache[g].normalized[l][b.columns].$row=e;e="undefined"===typeof b.extractors[k].id?m(a,d,k):b.extractors[k].format(m(a,d,k),a,d,k);d="no-parser"===b.parsers[k].id?"":b.parsers[k].format(e,a,d,k);b.cache[g].normalized[l][k]=b.ignoreCase&&"string"===typeof d?d.toLowerCase():d;if("numeric"===(b.parsers[k].type||"").toLowerCase())b.cache[g].colMax[k]=Math.max(Math.abs(d)||0,b.cache[g].colMax[k]||
0);D(c,j,f)}}).bind("addRows"+b.namespace,function(g,d,j,e){g.stopPropagation();a.isUpdating=!0;if(p(b.cache))A(a),y(a,j,e);else{var d=h(d).attr("role","row"),f,l,k,o,r,n=d.filter("tr").length,q=c.find("tbody").index(d.parents("tbody").filter(":first"));(!b.parsers||!b.parsers.length)&&t(a);for(g=0;g<n;g++){l=d[g].cells.length;r=[];o={child:[],$row:d.eq(g),order:b.cache[q].normalized.length};for(f=0;f<l;f++)if(k="undefined"===typeof b.extractors[f].id?m(a,d[g].cells[f],f):b.extractors[f].format(m(a,
d[g].cells[f],f),a,d[g].cells[f],f),k="no-parser"===b.parsers[f].id?"":b.parsers[f].format(k,a,d[g].cells[f],f),r[f]=b.ignoreCase&&"string"===typeof k?k.toLowerCase():k,"numeric"===(b.parsers[f].type||"").toLowerCase())b.cache[q].colMax[f]=Math.max(Math.abs(r[f])||0,b.cache[q].colMax[f]||0);r.push(o);b.cache[q].normalized.push(r)}D(c,j,e)}}).bind("updateComplete"+b.namespace,function(){a.isUpdating=!1}).bind("sorton"+b.namespace,function(b,d,j,e){var i=a.config;b.stopPropagation();c.trigger("sortStart",
this);var l,k,o,m,n,q=a.config,b=d||q.sortList;q.sortList=[];h.each(b,function(a,b){m=parseInt(b[0],10);if(o=q.$headers.filter('[data-column="'+m+'"]:last')[0]){k=(k=(""+b[1]).match(/^(1|d|s|o|n)/))?k[0]:"";switch(k){case "1":case "d":k=1;break;case "s":k=n||0;break;case "o":l=o.order[(n||0)%(q.sortReset?3:2)];k=0===l?1:1===l?0:2;break;case "n":o.count+=1;k=o.order[o.count%(q.sortReset?3:2)];break;default:k=0}n=0===a?k:n;l=[m,parseInt(k,10)||0];q.sortList.push(l);k=h.inArray(l[1],o.order);o.count=
0<=k?k:l[1]%(q.sortReset?3:2)}});x(a);i.delayInit&&p(i.cache)&&s(a);c.trigger("sortBegin",this);E(a);w(a,e);c.trigger("sortEnd",this);f.applyWidget(a);h.isFunction(j)&&j(a)}).bind("appendCache"+b.namespace,function(b,d,c){b.stopPropagation();w(a,c);h.isFunction(d)&&d(a)}).bind("updateCache"+b.namespace,function(c,d){(!b.parsers||!b.parsers.length)&&t(a);s(a);h.isFunction(d)&&d(a)}).bind("applyWidgetId"+b.namespace,function(c,d){c.stopPropagation();f.getWidgetById(d).format(a,b,b.widgetOptions)}).bind("applyWidgets"+
b.namespace,function(b,d){b.stopPropagation();f.applyWidget(a,d)}).bind("refreshWidgets"+b.namespace,function(b,d,c){b.stopPropagation();f.refreshWidgets(a,d,c)}).bind("destroy"+b.namespace,function(b,d,c){b.stopPropagation();f.destroy(a,d,c)}).bind("resetToLoadState"+b.namespace,function(){f.refreshWidgets(a,!0,!0);b=h.extend(!0,f.defaults,b.originalSettings);a.hasInitialized=!1;f.setup(a,b)})}var f=this;f.version="2.17.7";f.parsers=[];f.widgets=[];f.defaults={theme:"default",widthFixed:!1,showProcessing:!1,
headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],
widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",
header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};f.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"};
f.log=e;f.benchmark=o;f.construct=function(a){return this.each(function(){var b=h.extend(!0,{},f.defaults,a);b.originalSettings=a;!this.hasInitialized&&f.buildTable&&"TABLE"!==this.tagName?f.buildTable(this,b):f.setup(this,b)})};f.setup=function(a,b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?e("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",g=h(a),d=h.metadata;a.hasInitialized=!1;a.isProcessing=!0;
a.config=b;h.data(a,"tablesorter",b);b.debug&&h.data(a,"startoveralltimer",new Date);var j;j=h.fn.jquery.split(".");j[0]=parseInt(j[0],10);j=1<j[0]||1===j[0]&&4<=parseInt(j[1],10);b.supportsDataObject=j;b.string={max:1,min:-1,emptyMin:1,emptyMax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(g.attr("class"))||(c=""!==b.theme?" tablesorter-"+b.theme:"");b.table=a;b.$table=g.addClass(f.css.table+" "+b.tableClass+c).attr("role","grid");b.$headers=g.find(b.selectorHeaders);b.namespace=
b.namespace?"."+b.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);b.$table.children().children("tr").attr("role","row");b.$tbodies=g.children("tbody:not(."+b.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});b.$table.find("caption").length&&b.$table.attr("aria-labelledby","theCaption");b.widgetInit={};b.textExtraction=b.$table.attr("data-text-extraction")||b.textExtraction||"basic";z(a);if(a.config.widthFixed&&0===h(a).find("colgroup").length){var u=
h("<colgroup>"),i=h(a).width();h(a.tBodies[0]).find("tr:first").children(":visible").each(function(){u.append(h("<col>").css("width",parseInt(1E3*(h(this).width()/i),10)/10+"%"))});h(a).prepend(u)}t(a);b.totalRows=0;b.delayInit||s(a);f.bindEvents(a,b.$headers,!0);I(a);b.supportsDataObject&&"undefined"!==typeof g.data().sortlist?b.sortList=g.data().sortlist:d&&(g.metadata()&&g.metadata().sortlist)&&(b.sortList=g.metadata().sortlist);f.applyWidget(a,!0);0<b.sortList.length?g.trigger("sorton",[b.sortList,
{},!b.initWidgets,!0]):(x(a),b.initWidgets&&f.applyWidget(a,!1));b.showProcessing&&g.unbind("sortBegin"+b.namespace+" sortEnd"+b.namespace).bind("sortBegin"+b.namespace+" sortEnd"+b.namespace,function(d){clearTimeout(b.processTimer);f.isProcessing(a);if(d.type==="sortBegin")b.processTimer=setTimeout(function(){f.isProcessing(a,true)},500)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&f.benchmark("Overall initialization time",h.data(a,"startoveralltimer"));g.trigger("tablesorter-initialized",a);
"function"===typeof b.initialized&&b.initialized(a)};f.getColumnData=function(a,b,c,g){if(!("undefined"===typeof b||null===b)){var a=h(a)[0],d,f=a.config;if(b[c])return g?b[c]:b[f.$headers.index(f.$headers.filter('[data-column="'+c+'"]:last'))];for(d in b)if("string"===typeof d&&(a=g?f.$headers.eq(c).filter(d):f.$headers.filter('[data-column="'+c+'"]:last').filter(d),a.length))return b[d]}};f.computeColumnIndex=function(a){var b=[],c=0,g,d,f,e,i,l,k,o,m,n;for(g=0;g<a.length;g++){i=a[g].cells;for(d=
0;d<i.length;d++){f=i[d];e=h(f);l=f.parentNode.rowIndex;e.index();k=f.rowSpan||1;o=f.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(f=0;f<b[l].length+1;f++)if("undefined"===typeof b[l][f]){m=f;break}c=Math.max(m,c);e.attr({"data-column":m});for(f=l;f<l+k;f++){"undefined"===typeof b[f]&&(b[f]=[]);n=b[f];for(e=m;e<m+o;e++)n[e]="x"}}}return c+1};f.isProcessing=function(a,b,c){var a=h(a),g=a[0].config,d=c||a.find("."+f.css.header);b?("undefined"!==typeof c&&0<g.sortList.length&&(d=d.filter(function(){return this.sortDisabled?
!1:0<=f.isValueInArray(parseFloat(h(this).attr("data-column")),g.sortList)})),a.add(d).addClass(f.css.processing+" "+g.cssProcessing)):a.add(d).removeClass(f.css.processing+" "+g.cssProcessing)};f.processTbody=function(a,b,c){a=h(a)[0];if(c)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),c=h.fn.detach?b.detach():b.remove();c=h(a).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove();a.isProcessing=!1};f.clearTableBody=function(a){h(a)[0].config.$tbodies.children().detach()};
f.bindEvents=function(a,b,c){var a=h(a)[0],g,d=a.config;!0!==c&&(d.$extraHeaders=d.$extraHeaders?d.$extraHeaders.add(b):b);b.find(d.selectorSort).add(b.filter(d.selectorSort)).unbind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" "),function(c,f){var e;e=c.type;if(!((c.which||c.button)!==1&&!/sort|keyup/.test(e)||e==="keyup"&&c.which!==13)&&!(e==="mouseup"&&f!==true&&(new Date).getTime()-g>250)){if(e==="mousedown"){g=(new Date).getTime();
return/(input|select|button|textarea)/i.test(c.target.tagName)?"":!d.cancelSelection}d.delayInit&&p(d.cache)&&s(a);e=h.fn.closest?h(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:h(this).parents("th, td")[0];e=d.$headers[b.index(e)];e.sortDisabled||G(a,e,c)}});d.cancelSelection&&b.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};f.restoreHeaders=function(a){var b=h(a)[0].config;b.$table.find(b.selectorHeaders).each(function(a){h(this).find("."+
f.css.headerIn).length&&h(this).html(b.headerContent[a])})};f.destroy=function(a,b,c){a=h(a)[0];if(a.hasInitialized){f.refreshWidgets(a,!0,!0);var g=h(a),d=a.config,e=g.find("thead:first"),o=e.find("tr."+f.css.headerRow).removeClass(f.css.headerRow+" "+d.cssHeaderRow),i=g.find("tfoot:first > tr").children("th, td");!1===b&&0<=h.inArray("uitheme",d.widgets)&&(g.trigger("applyWidgetId",["uitheme"]),g.trigger("applyWidgetId",["zebra"]));e.find("tr").not(o).remove();g.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState".split(" ").join(d.namespace+
" "));d.$headers.add(i).removeClass([f.css.header,d.cssHeader,d.cssAsc,d.cssDesc,f.css.sortAsc,f.css.sortDesc,f.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");o.find(d.selectorSort).unbind(["mousedown","mouseup","keypress"].join(d.namespace+" "));f.restoreHeaders(a);g.toggleClass(f.css.table+" "+d.tableClass+" tablesorter-"+d.theme,!1===b);a.hasInitialized=!1;delete a.config.cache;"function"===typeof c&&c(a)}};f.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};f.sortNatural=function(a,b){if(a===b)return 0;var c,g,d,e,h,i;g=f.regex;if(g.hex.test(b)){c=parseInt(a.match(g.hex),16);d=parseInt(b.match(g.hex),16);if(c<d)return-1;if(c>d)return 1}c=a.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");g=b.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");i=Math.max(c.length,g.length);for(h=0;h<i;h++){d=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;e=isNaN(g[h])?g[h]||0:parseFloat(g[h])||0;if(isNaN(d)!==
isNaN(e))return isNaN(d)?1:-1;typeof d!==typeof e&&(d+="",e+="");if(d<e)return-1;if(d>e)return 1}return 0};f.sortNaturalAsc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:c||1:f.sortNatural(a,b)};f.sortNaturalDesc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===b&&0!==c?"boolean"===typeof c?c?
1:-1:-c||-1:f.sortNatural(b,a)};f.sortText=function(a,b){return a>b?1:a<b?-1:0};f.getTextValue=function(a,b,c){if(c){for(var g=a?a.length:0,d=c+b,c=0;c<g;c++)d+=a.charCodeAt(c);return b*d}return 0};f.sortNumericAsc=function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return a-b};f.sortNumericDesc=
function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:d||1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:-d||-1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return b-a};f.sortNumeric=function(a,b){return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",
E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};f.replaceAccents=function(a){var b,c="[",g=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in g)"string"===typeof b&&(c+=g[b],f.characterRegexArray[b]=RegExp("["+g[b]+"]","g"));f.characterRegex=
RegExp(c+"]")}if(f.characterRegex.test(a))for(b in g)"string"===typeof b&&(a=a.replace(f.characterRegexArray[b],b));return a};f.isValueInArray=function(a,b){var c,g=b.length;for(c=0;c<g;c++)if(b[c][0]===a)return c;return-1};f.addParser=function(a){var b,c=f.parsers.length,g=!0;for(b=0;b<c;b++)f.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(g=!1);g&&f.parsers.push(a)};f.getParserById=function(a){if("false"==a)return!1;var b,c=f.parsers.length;for(b=0;b<c;b++)if(f.parsers[b].id.toLowerCase()===
a.toString().toLowerCase())return f.parsers[b];return!1};f.addWidget=function(a){f.widgets.push(a)};f.hasWidget=function(a,b){a=h(a);return a.length&&a[0].config&&a[0].config.widgetInit[b]||!1};f.getWidgetById=function(a){var b,c,g=f.widgets.length;for(b=0;b<g;b++)if((c=f.widgets[b])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===a.toLowerCase())return c};f.applyWidget=function(a,b){var a=h(a)[0],c=a.config,g=c.widgetOptions,d=[],e,m,i;if(!(!1!==b&&a.hasInitialized&&(a.isApplyingWidgets||a.isUpdating)))if(c.debug&&
(e=new Date),c.widgets.length&&(a.isApplyingWidgets=!0,c.widgets=h.grep(c.widgets,function(a,b){return h.inArray(a,c.widgets)===b}),h.each(c.widgets||[],function(a,b){if((i=f.getWidgetById(b))&&i.id)i.priority||(i.priority=10),d[a]=i}),d.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),h.each(d,function(d,e){if(e){if(b||!c.widgetInit[e.id])c.widgetInit[e.id]=!0,e.hasOwnProperty("options")&&(g=a.config.widgetOptions=h.extend(!0,{},e.options,g)),e.hasOwnProperty("init")&&
e.init(a,e,c,g);!b&&e.hasOwnProperty("format")&&e.format(a,c,g,!1)}})),setTimeout(function(){a.isApplyingWidgets=false},0),c.debug)m=c.widgets.length,o("Completed "+(!0===b?"initializing ":"applying ")+m+" widget"+(1!==m?"s":""),e)};f.refreshWidgets=function(a,b,c){var a=h(a)[0],g,d=a.config,j=d.widgets,o=f.widgets,i=o.length;for(g=0;g<i;g++)if(o[g]&&o[g].id&&(b||0>h.inArray(o[g].id,j)))d.debug&&e('Refeshing widgets: Removing "'+o[g].id+'"'),o[g].hasOwnProperty("remove")&&d.widgetInit[o[g].id]&&(o[g].remove(a,
d,d.widgetOptions),d.widgetInit[o[g].id]=!1);!0!==c&&f.applyWidget(a,b)};f.getData=function(a,b,c){var e="",a=h(a),d,f;if(!a.length)return"";d=h.metadata?a.metadata():!1;f=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?e+=a.data(c)||a.data(c.toLowerCase()):d&&"undefined"!==typeof d[c]?e+=d[c]:b&&"undefined"!==typeof b[c]?e+=b[c]:" "!==f&&f.match(" "+c+"-")&&(e=f.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return h.trim(e)};f.formatFloat=function(a,
b){if("string"!==typeof a||""===a)return a;var c,a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?h.trim(a):c};f.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}});var m=h.tablesorter;h.fn.extend({tablesorter:m.construct});m.addParser({id:"no-parser",is:function(){return!1},
format:function(){return""},type:"text"});m.addParser({id:"text",is:function(){return!0},format:function(e,o){var p=o.config;e&&(e=h.trim(p.ignoreCase?e.toLocaleLowerCase():e),e=p.sortLocaleCompare?m.replaceAccents(e):e);return e},type:"text"});m.addParser({id:"digit",is:function(e){return m.isDigit(e)},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"currency",
is:function(e){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((e||"").replace(/[+\-,. ]/g,""))},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"ipAddress",is:function(e){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)},format:function(e,h){var p,v=e?e.split("."):"",t="",s=v.length;
for(p=0;p<s;p++)t+=("00"+v[p]).slice(-3);return e?m.formatFloat(t,h):e},type:"numeric"});m.addParser({id:"url",is:function(e){return/^(https?|ftp|file):\/\//.test(e)},format:function(e){return e?h.trim(e.replace(/(https?|ftp|file):\/\//,"")):e},type:"text"});m.addParser({id:"isoDate",is:function(e){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(e)},format:function(e,h){return e?m.formatFloat(""!==e?(new Date(e.replace(/-/g,"/"))).getTime()||e:"",h):e},type:"numeric"});m.addParser({id:"percent",is:function(e){return/(\d\s*?%|%\s*?\d)/.test(e)&&
15>e.length},format:function(e,h){return e?m.formatFloat(e.replace(/%/g,""),h):e},type:"numeric"});m.addParser({id:"usLongDate",is:function(e){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date(e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"shortDate",is:function(e){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((e||
"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(e,h,p,v){if(e){var p=h.config,t=p.$headers.filter("[data-column="+v+"]:last"),v=t.length&&t[0].dateFormat||m.getData(t,m.getColumnData(h,p.headers,v),"dateFormat")||p.dateFormat,e=e.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===v&&(e=e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,
"$1/$2/$3"))}return e?m.formatFloat((new Date(e)).getTime()||e,h):e},type:"numeric"});m.addParser({id:"time",is:function(e){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date("2000/01/01 "+e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"metadata",is:function(){return!1},format:function(e,m,p){e=m.config;e=!e.parserMetadataName?"sortValue":e.parserMetadataName;return h(p).metadata()[e]},
type:"numeric"});m.addWidget({id:"zebra",priority:90,format:function(e,o,p){var v,t,s,w,z,y,A=RegExp(o.cssChildRow,"i"),x=o.$tbodies;o.debug&&(z=new Date);for(e=0;e<x.length;e++)v=x.eq(e),y=v.children("tr").length,1<y&&(s=0,v=v.children("tr:visible").not(o.selectorRemove),v.each(function(){t=h(this);A.test(this.className)||s++;w=0===s%2;t.removeClass(p.zebra[w?1:0]).addClass(p.zebra[w?0:1])}));o.debug&&m.benchmark("Applying Zebra widget",z)},remove:function(e,m,p){for(var v,m=m.$tbodies,t=(p.zebra||
["even","odd"]).join(" "),p=0;p<m.length;p++)v=h.tablesorter.processTbody(e,m.eq(p),!0),v.children().removeClass(t),h.tablesorter.processTbody(e,v,!1)}});!0;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tables-sortable', location = 'node_modules/@atlassian/aui/src/js/aui/tables-sortable.js' */
("undefined"===typeof window?global:window).__e447bd0d7692d52f66ca23f80e610893=function(){function h(e){var b=i;e.find("th").each(function(c,e){var a=(0,d.default)(e);b.headers[c]={};a.hasClass("aui-table-column-unsortable")?b.headers[c].sorter=!1:(a.attr("tabindex","0"),a.wrapInner("<span class='aui-table-header-content'/>"),a.hasClass("aui-table-column-issue-key")&&(b.headers[c].sorter="issue-key"))});e.tablesorter(b)}var f={};"use strict";Object.defineProperty(f,"__esModule",{value:!0});var a=
__307d3e18fd611f85395c67cddeb1fe24,d=a&&a.__esModule?a:{"default":a};__c9edf5d8d2fcc7f0411bc8f50451f94a;var a=(a=__4d02fe17b8e885a34493e34af3d145dd)&&a.__esModule?a:{"default":a},i={sortMultiSortKey:"",headers:{},debug:!1,tabIndex:!1},g={setup:function(){d.default.tablesorter.addParser({id:"issue-key",is:function(){return!1},format:function(a){var b=a.split("-"),a=b[1],b=(b[0]+"..........").slice(0,10);return b+=("000000"+a).slice(-6)},type:"text"});d.default.tablesorter.addParser({id:"textSortAttributeParser",
is:function(a,b,c){return c.hasAttribute("data-sort-value")&&(!c.hasAttribute("data-sort-type")||"text"===c.getAttribute("data-sort-type"))},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"text"});d.default.tablesorter.addParser({id:"numericSortAttributeParser",is:function(a,b,c){return"numeric"===c.getAttribute("data-sort-type")&&c.hasAttribute("data-sort-value")},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"numeric"});(0,d.default)(".aui-table-sortable").each(function(){h((0,
d.default)(this))})},setTableSortable:function(a){h(a)}};(0,d.default)(g.setup);(0,a.default)("tablessortable",g);f.default=g;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
define("confluence-sortable-tables/sortable-tables",["jquery","ajs","document","skate"],function(e,h,i,j){function k(){var a=h.Meta.get("date.format"),b;a&&0!==a.length&&(a=a.toLowerCase()[0],"m"===a?b="mmddyyyy":"d"===a?b="ddmmyyyy":"y"===a&&(b="yyyymmdd"));return b}var g={init:function(a){g.enable(a)},destroy:function(){},shouldSort:function(a){var b=e(a),f=b.find("td, th"),d=a.rows.length&&e(a.rows[0].cells),c;if("false"===b.attr("data-sortable")||-1<a.className.indexOf("tablesorter")||e(a).find("> thead:first").is(":visible"))return!1;
c=e.Event("makeSortable.SortableTables");b.trigger(c);if(c.isDefaultPrevented()||!d||0===d.length)return!1;c=0;for(var l=f.length;c<l;c++)if(b=f[c],1!=b.rowSpan||1!=b.colSpan)return!1;return e(a.rows[0]).find("table").length||d.filter("th").length!==d.length||d.hasClass("nohighlight")?!1:a.rows[1]},enable:function(a){if(g.shouldSort(a)){var b=a.removeChild(a.tBodies[0]),f=e(b.children),f=Array.prototype.shift.call(f),d=i.createDocumentFragment(),c=i.createElement("thead");d.appendChild(c);c.appendChild(f);
d.appendChild(b);a.appendChild(d);a=e(a);a.tablesorter({headers:a.data("tablesorterHeaders"),cssHeader:"sortableHeader",cssAsc:"tablesorter-headerSortUp",cssDesc:"tablesorter-headerSortDown",delayInit:!0,textExtraction:function(a){a=e(a);return a.attr("data-sort-value")?a.attr("data-sort-value"):h.trim(a.text())},dateFormat:k()})}}};h.toInit(function(){setTimeout(function(){j("table",{type:j.types.TAG,created:function(a){g.init(a)}})},100)});return g});require("confluence/module-exporter").safeRequire("confluence-sortable-tables/sortable-tables");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:get-more-helper', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more-helper.js' */
define("confluence-advanced-macros/get-more-helper",["ajs","jquery"],function(d,e){return{moreLinkClickHandler:function(f,g){var c=e(f),h=c.attr("href"),b=c.closest(".more-link-container");if(!b.length)throw Error("Could not find more link container when one was expected.");b.addClass("loading");e.get(h,function(a){var a=e(a).wrap("<div/>").parent(),c=a.children("ul").children("li");b.closest(".results-container").children("ul").append(c);a=a.find(".more-link-container");0===a.length?b.remove():b.replaceWith(a);
d.PageGadget&&d.PageGadget.contentsUpdated&&d.PageGadget.contentsUpdated()});g.preventDefault()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more.js' */
define("confluence-advanced-macros/get-more",["ajs","jquery","skate","confluence-advanced-macros/get-more-helper"],function(b,e,a,c){return{init:function(){a("results-container",{type:a.types.CLASS,events:{"click .more-link":function(b,a,d){c.moreLinkClickHandler(d,a)}}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/get-more",function(b){b.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/filter-control.js' */
define("confluence-advanced-macros/filter-control",["ajs","jquery","skate","confluence-advanced-macros/get-more-helper"],function(b,a,e,f){return{init:function(){e("content-filter",{type:e.types.CLASS,attached:function(c){c=a(c);"select"===c.prop("tagName").toLowerCase()&&c.change(function(){a(".filter-control .waiting-image").removeClass("hidden");var c=a(this);a.get(b.params.changesUrl,{contentType:a(this).val()},function(d){var d=a(d),b=c.parent();b.parent().siblings(".results-container").children("ul").html(d);
a(".waiting-image",b).addClass("hidden");a(".more-link",d).click(function(a){f.moreLinkClickHandler(this,a)})})})}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/filter-control",function(b){b.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){var a=function(b){this.$=b;this.createToggleFunction=function(e){var d=this.$;return function c(i){if(typeof e!="undefined"&&!e(i)){return}var f=d(this),g=d(".expand-control-icon",f),h=d(".expand-content",f.closest(".expand-container")).first();var j;if(h.hasClass("expand-hidden")){h.css("display","block");h.animate({opacity:1});j="expand"}else{h.animate({opacity:0},{complete:function(){h.hide()}});j="collapse"}h.toggleClass("expand-hidden");g.toggleClass("expanded");AJS.trigger("analyticsEvent",{name:"confluence.expand-macro.expand-click",data:{userAction:j}})}};this.getExpandElements=function(c){return this.$(".expand-control",c)}};if(typeof Confluence==="undefined"){Confluence={}}if(typeof Confluence.Plugins==="undefined"){Confluence.Plugins={}}Confluence.Plugins.ExpandMacro={bind:function(b,c,g,f){var e=new a(b);var d=e.getExpandElements(c);d.length&&d.bind(g,e.createToggleFunction(f))}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function(a){Confluence.Plugins.ExpandMacro.bind(a,a("body"),"click keyup",function(b){return !(b.type=="keyup"&&b.keyCode!=13)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.SharelinksUrlMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_ignored) {
  return '<a class="aui-button sharelinks-urlmacro-button" href="' + Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data) + '"><span>' + soy.$$escapeHtml('Share on Confluence') + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink';
}


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_ignored) {
  return 'javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'' + soy.$$filterNoAutoescape(opt_data.bookmarkletActionURL) + '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
define("confluence-plugins/business-blueprints/sharelinksurlmacro/sharelinks-urlmacro",["ajs","skate"],function(b,a){a("sharelinks-urlmacro-button",{type:a.types.CLASS,events:{click:function(){alert("Drag this link to your toolbar");return false}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jsUri', location = 'includes/js/third-party/jsUri.js' */
(function(){function g(a){a=decodeURIComponent(a);return a=a.replace("+"," ")}function h(a){var c,b,f,e,d=[];if("undefined"===typeof a||null===a||""===a)return d;0===a.indexOf("?")&&(a=a.substring(1));c=a.toString().split(/[&;]/);for(a=0;a<c.length;a++)b=c[a],f=b.split("="),e=f[0],b=-1===b.indexOf("=")?null:null===f[1]?"":f[1],d.push([e,b]);return d}function d(a){var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a||
""),b={};"source protocol authority userInfo user password host port relative path directory file query anchor".split(" ").forEach(function(a,e){b[a]=c[e]||""});this.uriParts=b;this.queryPairs=h(this.uriParts.query);this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,c){for(var b=0,f=this.length;b<f;++b)a.call(c||this,this[b],b,this)});"protocol userInfo host port path anchor".split(" ").forEach(function(a){d.prototype[a]=function(c){typeof c!=="undefined"&&
(this.uriParts[a]=c);return this.uriParts[a]}});d.prototype.hasAuthorityPrefix=function(a){if(typeof a!=="undefined")this.hasAuthorityPrefixUserPref=a;return this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref};d.prototype.query=function(a){var c="",b;if(typeof a!=="undefined")this.queryPairs=h(a);for(a=0;a<this.queryPairs.length;a++){b=this.queryPairs[a];c.length>0&&(c=c+"&");c=b[1]===null?c+b[0]:c+b.join("=")}return c.length>0?"?"+c:c};
d.prototype.getQueryParamValue=function(a){var c,b;for(b=0;b<this.queryPairs.length;b++){c=this.queryPairs[b];if(g(a)===g(c[0]))return c[1]}};d.prototype.getQueryParamValues=function(a){var c=[],b,f;for(b=0;b<this.queryPairs.length;b++){f=this.queryPairs[b];g(a)===g(f[0])&&c.push(f[1])}return c};d.prototype.deleteQueryParam=function(a,c){var b=[],f,e,d,h;for(f=0;f<this.queryPairs.length;f++){e=this.queryPairs[f];d=g(e[0])===g(a);h=g(e[1])===g(c);(arguments.length===1&&!d||arguments.length===2&&!d&&
!h)&&b.push(e)}this.queryPairs=b;return this};d.prototype.addQueryParam=function(a,c,b){if(arguments.length===3&&b!==-1){b=Math.min(b,this.queryPairs.length);this.queryPairs.splice(b,0,[a,c])}else arguments.length>0&&this.queryPairs.push([a,c]);return this};d.prototype.replaceQueryParam=function(a,c,b){var d=-1,e,h;if(arguments.length===3){for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)&&decodeURIComponent(h[1])===g(b)){d=e;break}}this.deleteQueryParam(a,b).addQueryParam(a,
c,d)}else{for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)){d=e;break}}this.deleteQueryParam(a);this.addQueryParam(a,c,d)}return this};"protocol hasAuthorityPrefix userInfo host port path query anchor".split(" ").forEach(function(a){var c="set"+a.charAt(0).toUpperCase()+a.slice(1);d.prototype[c]=function(b){this[a](b);return this}});d.prototype.scheme=function(){var a="";if(this.protocol()){a=a+this.protocol();this.protocol().indexOf(":")!==this.protocol().length-1&&(a=
a+":");a=a+"//"}else this.hasAuthorityPrefix()&&this.host()&&(a=a+"//");return a};d.prototype.origin=function(){var a=this.scheme();if(this.userInfo()&&this.host()){a=a+this.userInfo();this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a=a+"@")}if(this.host()){a=a+this.host();this.port()&&(a=a+(":"+this.port()))}return a};d.prototype.toString=function(){var a=this.origin();if(this.path())a=a+this.path();else if(this.host()&&(this.query().toString()||this.anchor()))a=a+"/";if(this.query().toString()){this.query().toString().indexOf("?")!==
0&&(a=a+"?");a=a+this.query().toString()}if(this.anchor()){this.anchor().indexOf("#")!==0&&(a=a+"#");a=a+this.anchor()}return a};d.prototype.clone=function(){return new d(this.toString())};define("confluence/jsUri",function(){return d})})(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-templates', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_ignored) {
  return '<div class="aui-message error' + ((opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '') + '" id="inline-tasks-notice">' + soy.$$filterNoAutoescape(opt_data.textMessage) + '&nbsp;&nbsp;<a href="#" class="notice-close">' + soy.$$escapeHtml('Dismiss') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Templates.notice.soyTemplateName = 'Confluence.InlineTasks.Templates.notice';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-focus.js' */
define("inline-tasks/focus",["confluence/jsUri"],function(a){return{scrollToFocussedTaskIfRequired:function(){var d="focusedTaskId";var c=new a(window.location.href);var e=c.getQueryParamValue(d);if(e){var b=$("li[data-inline-task-id="+e+"]");if(b.length){b.addClass("focused");window.scrollTo(b.offset().left,(b.offset().top-($(window).height()/2)))}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
require(["jquery","ajs","skate","inline-tasks/focus"],function(d,j,e,b){function m(s){var n,t;if(s.offsetX===undefined){var r=0,q=0,p=s.target,o;do{if(p.scrollTop!=0||p.scrollLeft!=0){o=p}r+=p.offsetLeft;q+=p.offsetTop;p=p.offsetParent}while(p&&p!=p.offsetParent);n=s.pageX+(o?o.scrollLeft:0)-r;t=s.pageY+(o?o.scrollTop:0)-q}else{n=s.offsetX;t=s.offsetY}return n>=3&&n<=14&&t>=3&&t<=14}function h(n){return n.currentTarget===n.target}function i(o){var n="page";if(o.closest("table.tasks-report").length){n="report"}else{if(o.closest("#task-container").length){n="mytasks"}else{if(o.closest("ul.inline-task-list").length){n="task"}}}return n}function g(q,o){var n=q.attr("data-inline-task-id");var p=q.find(o).first();if(p.closest("li").attr("data-inline-task-id")===n){return p}else{return d()}}function k(o){var p=""+o.getFullYear();var q=""+(o.getMonth()+1);var n=""+o.getDate();if(q.length<2){q="0"+q}if(n.length<2){n="0"+n}return[p,q,n].join("-")}var a=false;d(window).bind("beforeunload",function(){a=true});function f(){return typeof AP!=="undefined"}var c=[];function l(n){if(!__skate){return false}if(!__skate.registry){return false}return __skate.registry[n]!==undefined}if(!l("inline-task-list")){e("inline-task-list",{type:e.types.CLASS,created:function(o){b.scrollToFocussedTaskIfRequired();var n=d(o);if(n.parents(".inline-task-list").length!=0){return}n.find("li[data-inline-task-id]").on({click:function(v){if(h(v)&&m(v)){var y=d(v.target).toggleClass("checked"),u=y.hasClass("checked")?"CHECKED":"UNCHECKED",w=y.data("inline-task-id"),p=y.closest("ul").attr("data-inline-tasks-content-id")||j.params.pageId,q="/rest/inlinetasks/1/task/"+p+"/"+w+"/";function s(){y.prop("disabled",false);var z=y.closest("tr");z.attr("aria-disabled",false);c.splice(j.indexOf(c,w),1);j.trigger("inline-tasks.status-update.complete",{status:u,taskId:w,taskListQueue:c})}y.prop("disabled",true);var t=y.closest("tr");t.attr("aria-disabled",true);c.push(w);j.trigger("inline-tasks.status-update.start",{status:u,taskId:w,taskListQueue:c});var x=f()?AP.request:d.ajax;var r=x({type:"POST",url:f()?q:j.contextPath()+q,data:d.toJSON({status:u,trigger:"VIEW_PAGE"}),dataType:"json",contentType:"application/json",timeout:30000,error:function(A,C,z){if(a||C==="timeout"){return}j.logError("Inline Task #"+w+" was not persisted to "+u+" because of "+z+" (status: "+C+")");y.toggleClass("checked");var B;if(A.status===403){B=new Confluence.InlineTasks.Notice({textMessage:"Oops! You can\'t update this task because you are not allowed to edit the page it appears on.",className:"forbidden-notice"})}else{B=new Confluence.InlineTasks.Notice()}B.show();if(f()){s()}},success:function(){var z=false;if(window.parent.AJS){var A=window.parent.AJS.Meta.get("space-type")||"null";z=(A==="project")}var B={dueDate:g(y,"time").attr("datetime"),completionDate:k(new Date()),mode:"view",assigneeUsername:g(y,".user-mention").attr("data-username"),context:i(y),isProject:z};if(u==="CHECKED"){j.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:B})}if(f()){s()}}});if(!f()){r.always(s)}}},mousemove:function(p){if(h(p)){if(m(p)){d(p.target).addClass("hover")}else{d(p.target).removeClass("hover")}}},mouseout:function(p){if(h(p)){d(p.target).removeClass("hover")}},mousedown:function(p){if(h(p)&&m(p)){d(p.target).addClass("task-active")}},mouseup:function(p){if(h(p)&&m(p)){d(p.target).removeClass("task-active")}}});n.find("li:not(.checked) time.date-upcoming").tooltip({title:function(){return "This task is due in less than a week"},live:true});n.find("li:not(.checked) time.date-past").tooltip({title:function(){return "This task is overdue"},live:true});n.find("span.emptycompletedate").tooltip({title:function(){return "A completion date wasn\'t recorded for this task"},live:true})}})}d(document).on("click","time",function(){var o=d(this);var n={date:o.attr("datetime"),mode:"view",context:i(o)};j.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:n})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\'t be saved. \u003cbr/\u003eThere could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f);c.Binder.userHover()};b.prototype._triggerAnalyticsSorting=function(){var e=this.analyticEventKey;var d=false;if(window.parent.AJS){var f=window.parent.AJS.Meta.get("space-type")||"null";d=(f==="project")}var g={column:this.sortColumn,direction:this.reverseSort?"desc":"asc",isProject:d};AJS.trigger("analyticsEvent",{name:e,data:g})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\'t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/dark-features.js' */
define("confluence-ui-components/dark-features",["ajs"],function(a){return a.DarkFeatures});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false);Confluence.Binder.userHover()}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.Pagination.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_ignored) {
  var output = '<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-initial-page-index="' + soy.$$escapeHtml(opt_data.currentPage) + '"><li class="aui-nav-previous"><a ' + ((opt_data.currentPage == 0) ? 'aria-disabled="true"' : 'href="#"') + '>' + soy.$$escapeHtml('Prev') + '</a></li>';
  var startIdx__soy16 = opt_data.startPage + 1;
  var currentIdx__soy17 = opt_data.currentPage + 1;
  var endIdx__soy18 = startIdx__soy16 + opt_data.itemsToRender;
  var totalRange__soy19 = opt_data.totalPages + 1;
  var indexInit20 = startIdx__soy16;
  var indexLimit20 = endIdx__soy18 < totalRange__soy19 ? endIdx__soy18 : totalRange__soy19;
  for (var index20 = indexInit20; index20 < indexLimit20; index20++) {
    output += (index20 == currentIdx__soy17) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index20 - 1) + '">' + soy.$$escapeHtml(index20) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index20 - 1) + '"><a href="#">' + soy.$$escapeHtml(index20) + '</a></li>';
  }
  output += '<li class="aui-nav-next"><a ' + ((currentIdx__soy17 == opt_data.totalPages) ? 'aria-disabled="true"' : 'href="' + soy.$$escapeHtml(opt_data.url) + '"') + '>' + soy.$$escapeHtml('Next') + '</a></li></ol>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.Pagination.Templates.paginationFooter.soyTemplateName = 'Confluence.UI.Components.Pagination.Templates.paginationFooter';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.BlankPlaceholderBox.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_ignored) {
  return '<div class="blank-placeholder-box ' + ((opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '') + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.customHtml) ? soy.$$filterNoAutoescape(opt_data.customHtml) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox.soyTemplateName = 'Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Report.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_ignored) {
  var output = '<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="' + soy.$$escapeHtml(opt_data.reportParameters) + '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="' + soy.$$escapeHtml(opt_data.totalPages) + '" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-adaptive="' + soy.$$escapeHtml(opt_data.adaptive) + '" data-page-limit="' + soy.$$escapeHtml(opt_data.pageLimit) + '"><thead><tr class="tablesorter-headerRow">';
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output += '<th class="header-' + soy.$$escapeHtml(headingData14) + ((headingData14 == 'description') ? ' aui-table-column-unsortable' : '') + '" data-column-name="' + soy.$$escapeHtml(headingData14) + '">' + soy.$$escapeHtml(opt_data.headingTexts[headingData14]) + '</th>';
  }
  output += '</tr></thead><tbody>';
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      output += Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings});
    }
  } else {
    output += '<tr><td colspan="' + soy.$$escapeHtml(opt_data.headings.length) + '">' + soy.$$escapeHtml('Create a task list in a Confluence page to keep track of things you need to do.') + '</td></tr>';
  }
  output += '</tbody></table></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReport.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReport';
}


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Hey! Did you know...') + '</h2><p>' + soy.$$escapeHtml('You can view the tasks you created, or assigned to you, in the tasks tabs of your profile.') + '</p>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification';
}


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_ignored) {
  var output = '<tr data-task-id="' + soy.$$escapeHtml(opt_data.task.taskId) + '" aria-disabled="false">';
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '') + '</td>';
    } else if (columnData51 == 'description') {
      output += '<td>' + soy.$$filterNoAutoescape(opt_data.task.taskHtml) + '</td>';
    } else if (columnData51 == 'assignee') {
      output += '<td class=\'tasks-report-assignee\'>' + ((opt_data.task.assigneeUserName) ? Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}) : '') + '</td>';
    } else if (columnData51 == 'location') {
      output += '<td><a class=\'task-location\' href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.task.pageUrl) + '">' + soy.$$escapeHtml(opt_data.task.pageTitle) + '</a></td>';
    } else if (columnData51 == 'completedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '') + '</td>';
    } else if (columnData51 == 'labels') {
      output += '<td>';
      var labelList90 = opt_data.task.labels;
      var labelListLen90 = labelList90.length;
      for (var labelIndex90 = 0; labelIndex90 < labelListLen90; labelIndex90++) {
        var labelData90 = labelList90[labelIndex90];
        output += aui.labels.label({text: labelData90});
      }
      output += '</td>';
    }
  }
  output += '</tr>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReportLine.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReportLine';
}


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_ignored) {
  var param98 = '<p>' + soy.$$escapeHtml('Unable to show this task report.') + '</p>';
  var messageList102 = opt_data.messages;
  var messageListLen102 = messageList102.length;
  for (var messageIndex102 = 0; messageIndex102 < messageListLen102; messageIndex102++) {
    var messageData102 = messageList102[messageIndex102];
    param98 += '<p>' + soy.$$escapeHtml(messageData102) + '</p>';
  }
  var output = '' + aui.message.warning({content: param98});
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning';
}


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to show the task report. Edit this page to resolve the issues.') + '</p>'});
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.Templates.HelpTip.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_ignored) {
  return ((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '') + '<div class="helptip-body">' + soy.$$filterNoAutoescape(opt_data.bodyHtml) + '</div>' + ((opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml('Learn more') + '</a>' : '');
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipContent.soyTemplateName = 'AJS.Templates.HelpTip.tipContent';
}


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_ignored) {
  return '<button class="helptip-dismiss aui-button" type="button">' + soy.$$escapeHtml('Dismiss') + '</button>';
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipDismiss.soyTemplateName = 'AJS.Templates.HelpTip.tipDismiss';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-metadata";var b="inline-tasks-flag";function a(){if(!!AJS.HelpTip){var e={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:d("#user-menu-link")};var f=new AJS.HelpTip(e);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});f.show();Confluence.FeatureDiscovery.forPlugin(c).markDiscovered(b)}}d(function(){if(d("meta[name=show-task-feature-discovery-flag]").length>0&&Confluence.FeatureDiscovery.forPlugin(c).shouldShow(b)){a()}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-view-content', location = 'js/drag-and-drop-for-view-content.js' */
require(["wrm","window"],function(a,b){b.addEventListener("load",function(){a.require("wr!com.atlassian.confluence.plugins.drag-and-drop:support")})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/utils.js' */
define("confluence/ic/util/utils",["jquery","underscore","ajs","backbone","exports"],function(C,Y,y,D,L){var j=window.top;var o={INLINE_COMMENTS:y.DarkFeatures.isEnabled("confluence-inline-comments"),RESOLVED_INLINE_COMMENTS:y.DarkFeatures.isEnabled("confluence-inline-comments-resolved"),RICH_TEXT_EDITOR:y.DarkFeatures.isEnabled("confluence-inline-comments-rich-editor"),DANGLING_COMMENT:y.DarkFeatures.isEnabled("confluence-inline-comments-dangling-comment")},w=["dateautocomplete","confluencemacrobrowser","propertypanel","jiraconnector","dfe"],q=["autoresize","confluenceleavecomment"],u=["code"];var I,t;function V(){return Y.clone(o)}function U(){return Y.clone(w)}function l(){return Y.clone(q)}function c(ab,aa){var ad;if(!ab||!aa){return}var Z=C(ab.containingElement);if(!Z.is(".inline-comment-marker.valid")){Z=C("<div/>").append(ab.html).find(".inline-comment-marker.valid")}if(Z.length>0&&e(Z)){var ac=Z.first().data("ref");ad=aa.findWhere({markerRef:ac});return ad}}function e(Z){return Z.filter(function(){return C(this).text().length>0}).length>0}function i(Z){return y.contextPath()+"/pages/viewpage.action?pageId="+y.Meta.get("latest-page-id")+"&focusedCommentId="+Z+"#comment-"+Z}function v(af,ae,Z){var ac=ae.match(/(focusedCommentId|replyToComment)=(\d+)/);if(ac==null){return}var ab=ac[1]==="replyToComment";var ad=parseInt(ac[2],10);var aa=af.findWhere({id:ad});if(aa!=null){r(af,aa,Z,ab)}else{C.ajax({url:y.contextPath()+"/rest/inlinecomments/1.0/comments/replies/"+ad+"/commentId"}).done(function(ag){aa=af.findWhere({id:ag});r(af,aa,Z,ab)})}}function r(ac,ab,Z,aa){if(ab!=null){if(ab.isResolved()){new Z({collection:ac,focusCommentId:ab.get("id")}).render()}else{if(!ab.isDangling()){D.trigger("ic:view",ab,"permalink",{isReplyComment:aa})}}}}function R(){if(y.Meta.get("current-user-avatar-url")){return y.contextPath()+y.Meta.get("current-user-avatar-url")}return y.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/anonymous.png"}function W(){return y.Meta.get("user-display-name")||y.Meta.get("current-user-fullname")}function a(ab){if(typeof ab.selectionStart==="number"){var Z=ab.value.length;ab.selectionStart=Z;ab.selectionEnd=Z}else{if(typeof ab.createTextRange!=null){ab.focus();var aa=ab.createTextRange();aa.collapse(false);aa.select()}}}function S(Z){a(Z);window.setTimeout(function(){a(Z)},1)}function K(ae,ad){var ab="webkitAnimationEnd oanimationend msAnimationEnd animationend";var aa=ae.$wikiContent;var Z=C.Deferred();if(ad){var af=C(".inline-comment-marker.active");aa.addClass("ic-fade-in-animation");aa.one(ab,function(){C(this).removeClass("ic-fade-in-animation")});ae.$el.addClass("ic-slide-in");ae.$el.one(ab,function(){C(this).removeClass("ic-slide-in");af.addClass("ic-highlight-pulse");af.one(ab,function(){af.removeClass("ic-highlight-pulse")})});Z.resolve()}else{aa.bind(ab,function(ag){if(ag.originalEvent.animationName=="ic-fade-out-animation"){ae.$wikiContent.removeClass("ic-fade-out-animation");ae.$wikiContent.css("opacity","0.5")}else{if(ag.originalEvent.animationName=="ic-fade-in-animation"){ae.$wikiContent.css("opacity","1");ae.$wikiContent.removeClass("ic-fade-in-animation");ae.$wikiContent.unbind(ab)}}});aa.addClass("ic-fade-out-animation");ae.$el.addClass("ic-slide-out");var ac=function(){ae.$el.removeClass("ic-slide-out");ae._emptySidebar();E().css("padding-right","0");aa.addClass("ic-fade-in-animation");aa.css("position","static");Z.resolve();ae.$el.off(ab,ac)};ae.$el.on(ab,ac)}return Z.promise()}function m(Z){var aa=C(Z).closest("a");if(!aa.length){aa=C(Z).find("a")}return aa}function G(Z){Z.each(function(){var aa=m(this);aa.length&&aa.off("mousemove")})}function X(){return document.body.style.animation!==undefined||document.body.style.webkitAnimation!==undefined}function b(aa){var Z=aa.parents(".expand-content.expand-hidden");Z.each(function(ab){C(this).siblings(".expand-control").click()})}function B(aa){var Z=y.Rte&&y.Rte.getEditor();if(aa===true){if(T()&&Z&&Z.isDirty()){return confirm("Your comment will be lost.")}}else{if(Z&&Z.isDirty()&&Confluence.Editor&&!Confluence.Editor.getContentType){return confirm("Your comment will be lost.")}}return true}function T(){return !!C(".ic-sidebar #wysiwygTextarea_ifr").length}function M(){return y.Meta.get("use-keyboard-shortcuts")&&Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled}function s(Z){Z.$("button.ic-action-hide").tooltip({gravity:"se"});Z.$("#ic-nav-next").tooltip({gravity:"s"});Z.$("#ic-nav-previous").tooltip({gravity:"s"})}function H(ad){if(Q()){ad.css("padding-bottom","20px");return}var ab=ad.height();var ac=ad.offset().top;var aa=ac+ab;var ae=this.getPageContainer().offset().top;var Z=aa-ae;this.getPageContainer().css({"min-height":Z+"px"})}function F(ad){ad=ad.closest(".ic-display-comment-view");var ac=this;var aa=C(".confluence-embedded-image, .confluence-embedded-file img",ad);var ab=aa.length;var Z=0;if(ab>0){aa.off("load").one("load",function(){if(++Z===ab){ac.recalculateContentHeight(ad)}}).each(function(){if(this.complete){C(this).load()}})}}function Q(){if(t===undefined){t=!!J().length}return t}function E(){return C("#content")}function J(){if(I===undefined){I=C("#splitter-content")}return I}function h(ac,ab,aa){aa=(typeof aa!=="undefined")?aa:p();var Z=function(){var ae=ab&&ab.is(":visible");if(ac&&ae){var ad=ab.offset().top-ac;C(j).scrollTop(ad)}};if(aa){setTimeout(Z,1)}else{Z()}}function x(ac,ab,aa){aa=aa||1;ac=ac||C(j).scrollTop();var Z=C.Deferred();var ad={duration:100,step:function(ae){C(j).scrollTop(ae)},complete:function(){setTimeout(Z.resolve,aa)}};C({scrollTop:ac}).animate({scrollTop:ab},ad);return Z.promise()}function P(Z,aa){var ac=C(j).scrollTop();var ab=ac+Z-aa;return x(ac,ab)}function d(aa){var Z=C.Deferred();C.ajax({url:y.contextPath()+"/rest/api/content/"+aa+"?expand=body.editor",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8"}).then(function(ab){var ac=ab.body.editor.value;Z.resolve(ac)}).fail(function(ab,ad,ac){Z.reject(ab,ad,ac)});return Z.promise()}function O(Z){var aa=Z.closest(".conf-macro");return(aa.data("hasbody")===false||Z.find('.conf-macro[data-hasbody="false"]').length>0)||u.indexOf(aa.data("macro-name"))!=-1}function k(Z){return Z.closest(".user-mention").length>0||Z.find(".user-mention").length>0}function n(Z){return Z.closest("a[href^='/']:not('.user-mention')").length>0||Z.find("a[href^='/']:not('.user-mention')").length>0}function N(){var Z={isDefault:true,path:y.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};if(y.Meta.get("current-user-avatar-url")!=="/images/icons/profilepics/default.png"){Z={isDefault:false,path:y.contextPath()+y.Meta.get("current-user-avatar-url")}}var aa=y.Meta.get("remote-user");return{userName:aa==""?null:aa,displayName:y.Meta.get("current-user-fullname"),profilePicture:Z}}function g(Z){return Z.offset().top-C(j).scrollTop()}function z(){var Z=100;return x(null,0,Z)}function A(){return window.frameElement&&window.frameElement.getAttribute("data-bridge-id")}function f(Z){Z.bridgeId=""+A();window.parent.postMessage(Z,window.location.origin)}function p(){var Z=window.frameElement&&window.frameElement.getAttribute("name");return Z&&Z==="fallback-mode-iframe"&&window.top!==window.self}L.overlappedSelection=c;L.focusedCommentUrl=i;L.showFocusedComment=v;L.getAuthorAvatarUrl=R;L.moveCaretToEnd=S;L.animateSidebar=K;L.getDarkFeatures=V;L.getInlineLinks=m;L.removeInlineLinksDialog=G;L.isAnimationSupported=X;L.showHighlightContent=b;L.getUnsupportedRtePlugins=U;L.getSupportedRtePlugins=l;L.confirmProcess=B;L.getAuthorDisplayName=W;L.isKeyboardShortcutsEnable=M;L.addSidebarHeadingTooltip=s;L.hasEditorInSidebar=T;L.recalculateContentHeight=H;L.resizeContentAfterLoadingImages=F;L.isDocTheme=Q;L.getPageContainer=E;L.getSplitterContent=J;L.scrollToCommentAfterToggleSideBar=h;L.getEditorFormat=d;L.containUnsupportedMacro=O;L.containInternalLink=k;L.containUserMetion=n;L.getCurrentUserInfo=N;L.getOffsetTopRelativeInWindowCoordinate=g;L.scrollToActiveHighlight=P;L.scrollToTop=z;L.sendMessageToParent=f;L.isFallbackModeIframe=p});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/text-highlighter.js' */
define("confluence/ic/util/text-highlighter",["jquery"],function(c){var a="ic-current-selection";function b(){c.textHighlighter.createWrapper=function(d){return c("<span></span>").addClass(d.highlightedClass)};this.$el=c("#content .wiki-content").first();if(this.$el.length>0){this.$el.textHighlighter({highlightedClass:a})}}b.prototype.highlight=function(e){if(this.$el.length===0){return}var d=c(this.$el.getHighlighter().doHighlight(e));return this.$el.getHighlighter().serializeHighlights(d)};b.prototype.removeHighlight=function(){if(this.$el.length===0){return}this.$el.getHighlighter().removeHighlights();return this};b.prototype.deserializeHighlights=function(d,e){if(this.$el.length===0){return}var f='<span class="inline-comment-marker" data-ref="'+e+'"></span>';return this.$el.getHighlighter().deserializeHighlights(d,f)};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment.js' */
define("confluence/ic/model/comment",["jquery","underscore","backbone","ajs","confluence/ic/util/utils","confluence/ic/model/reply-collection"],function(d,b,g,a,c,f){var e=g.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:a.Meta.get("remote-user"),authorAvatarUrl:a.contextPath()+a.Meta.get("current-user-avatar-url"),body:"",originalSelection:"",parentCommentId:"0",lastFetchTime:d("meta[name=confluence-request-time]").attr("content"),hasDeletePermission:true,hasEditPermission:true,hasResolvePermission:true,resolveProperties:{resolved:false,resolvedTime:0},serializedHighlights:"",deleted:false},urlRoot:a.contextPath()+"/rest/inlinecomments/1.0/comments",initialize:function(h){h=h||{};this._setHighlights(h.markerRef);var i=this;this.replies=new f();this.replies.url=function(){return i.url()+"/replies"};this.set({containerId:a.Meta.get("latest-page-id")},{silent:true});if(c.getDarkFeatures().DANGLING_COMMENT&&a.Meta.get("page-id")===a.Meta.get("latest-page-id")){if(this.isDangling()&&!this.isResolved()){this.resolve(true,{wait:true,dangling:true,success:b.bind(function(){g.trigger("ic:open:dangled",this)},this),error:b.bind(function(){g.trigger("ic:resolve:dangled:failed",this)},this)})}}},validate:function(){if(!this.get("body")){return true}},resolve:function(h,i){i=i||{};this.save({},b.extend(i,{url:this.urlRoot+"/"+this.get("id")+"/resolve/"+h+"/dangling/"+(i.dangling===true)}))},isResolved:function(){return this.get("resolveProperties").resolved},isDangling:function(){return this.highlight===undefined},isDeleted:function(){return this.get("deleted")},_setHighlights:function(i){var h;if(i!==undefined){h=d("#content .wiki-content:first").find('.inline-comment-marker[data-ref="'+i+'"]')}else{h=d(".ic-current-selection")}if(h.length!==0){this.highlights=h;this.highlight=h.first()}else{this.highlights=undefined;this.highlight=undefined}},destroy:function(i){i=i?b.clone(i):{};var h=this;var k=i.success;var j=function(n,m){var l=m.error;m.error=function(o){if(l){l(n,o,m)}n.trigger("error",n,o,m)}};i.success=function(l){if(k){k(h,l,i)}};j(this,i);return this.sync("delete",this,i)}});return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment-collection.js' */
define("confluence/ic/model/comment-collection",["jquery","backbone","ajs","underscore","confluence/ic/model/comment"],function(d,f,a,b,e){var c=f.Collection.extend({model:e,initialize:function(){this.listenTo(this,"sort",this._removeCachedMarkers)},url:function(){var h=a.contextPath();var g=a.Meta.get("page-id");return h+"/rest/inlinecomments/1.0/comments?containerId="+g},getResolvedCount:function(){return this.getResolvedComments().length},getUnresolveCount:function(){return this.reject(function(g){return g.isResolved()===true&&g.isDeleted()===false}).length},getResolvedComments:function(){return this.filter(function(g){return g.isResolved()===true&&g.isDeleted()===false})},getResolvedCommentsDesc:function(){return b.sortBy(this.getResolvedComments(),function(g){return 0-g.get("resolveProperties").resolvedTime})},getNextCommentOnPage:function(){return this._getCommentAtRelativeOffset(1)},getPrevCommentOnPage:function(){return this._getCommentAtRelativeOffset(-1)},_getCommentAtRelativeOffset:function(j){var k=this.getCommentsOnPage();var g=this.findWhere({active:true});if(g===undefined||k.length<=1){return null}var i=b.pluck(k,"id");var h=b.indexOf(i,g.get("id"));return k[(h+j+k.length)%k.length]},getCommentsOnPage:function(){return this.filter(function(g){return((g.isResolved()===false)&&!g.isDangling()&&(g.isDeleted()===false))||g.get("active")===true})},getCommentsOnPageCount:function(){return this.getCommentsOnPage().length},getActiveIndexWithinPageComments:function(){var h=b.pluck(this.getCommentsOnPage(),"id");var g=this.findWhere({active:true});if(g===undefined){return null}var i=g.get("id");return b.indexOf(h,i)},comparator:function(h,g){if(this.markers===undefined){this.markers=d("#content .wiki-content:first").find(".inline-comment-marker")}if(h.highlight===undefined){return 1}if(g.highlight===undefined){return -1}return this.markers.index(h.highlight)-this.markers.index(g.highlight)},_removeCachedMarkers:function(){this.markers=undefined}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply.js' */
define("confluence/ic/model/reply",["jquery","backbone","ajs","confluence/ic/util/utils",],function(d,e,b,c){var a=e.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:b.Meta.get("remote-user"),authorAvatarUrl:b.contextPath()+b.Meta.get("current-user-avatar-url"),body:"",commentId:"0",hasDeletePermission:true,hasEditPermission:!!b.Meta.get("remote-user")},urlRoot:function(){return b.contextPath()+"/rest/inlinecomments/1.0/comments/"+this.get("commentId")+"/replies"},sync:function(h,g,f){f=f||{};if(h==="create"){f.url=this.urlRoot()+"?containerId="+b.Meta.get("latest-page-id")}return e.sync.call(this,h,g,f)},validate:function(){if(!this.get("body")){return true}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply-collection.js' */
define("confluence/ic/model/reply-collection",["backbone","confluence/ic/model/reply"],function(c,a){var b=c.Collection.extend({model:a});return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = 'analytics/ic-analytics.js' */
define("confluence/ic/analytics",["ajs","underscore","backbone"],function(b,c,d){var a={};c.extend(a,d.Events);a.start=function(){if(this.running===true){return}this.running=true;this.send=function(e,f){b.trigger("analytics",{name:e,data:f})};this.listenTo(d,"ic:highlight-panel-click",function(){this.send("confluence.highlight.actions.comment.inline")});this.listenTo(d,"ic:view",function(f,e){this.send("confluence.comment.inline.view");if(e==="nav"){this.send("confluence.comment.inline.view.nav")}if(e==="permalink"){this.send("confluence.comment.inline.view.permalink")}});this.listenTo(d,"ic:overlap",function(){this.send("confluence.comment.inline.overlap")});this.listenTo(d,"ic:edit",function(){this.send("confluence.comment.inline.edit")});this.listenTo(d,"ic:persist",function(){this.send("confluence.comment.inline.create")});this.listenTo(d,"ic:sidebar:close",function(){this.send("confluence.comment.inline.sidebar.close")});this.listenTo(d,"ic:reply:persist",function(){this.send("confluence.comment.inline.reply")});this.listenTo(d,"ic:delete ic:reply:delete",function(){this.send("confluence.comment.inline.delete")});this.listenTo(d,"ic:resolved",function(){this.send("confluence.comment.inline.resolved")});this.listenTo(d,"ic:unresolved",function(){this.send("confluence.comment.inline.unresolved")});this.listenTo(d,"ic:resolved:view",function(f){var e={total:f};this.send("confluence.comment.inline.resolved.view",e)});this.listenTo(d,"ic:resolved:dismiss:recovery",function(){this.send("confluence.comment.inline.resolved.dismiss")});this.listenTo(d,"ic:resolved:show:recovery",function(){this.send("confluence.comment.inline.resolved.discovery")});this.listenTo(d,"ic:open:dangled",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.open.dangled",e)});this.listenTo(d,"ic:editor:load:fail",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.editor.load.fail",e)});this.listenTo(d,"ic:resolve:dangled:failed",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.resolved.dangled.failed",e)})};a.stop=function(){this.running=false;this.stopListening()};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = '/app/app.js' */
define("confluence/ic/app/app",["jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/comment-collection","confluence/ic/analytics","exports"],function(g,m,i,c,d,k,f){var a;var n=function(p){var q=require("confluence/ic/app/loader");q.init(p);return q};function l(){if(e.firstCaller){e.firstCaller=false;if(a&&a.isResolved()){n(e)}else{a=g.Deferred();WRM.require("wrc!inline-comments-load-sidebar").then(function(){a.resolve(n(e))})}}e.isSidebarLoaded=false;return a.promise()}var h=".ic-app";var e={firstCaller:true,isSidebarLoaded:false,commentCollection:null,views:{sidebar:null},init:function(){e.firstCaller=true;e.isSidebarLoaded=false;if(!e.commentCollection){e.commentCollection=new d()}e.commentCollection.reset();e.bindDOMEvents();e.fetch();e.bindQuickReloadEvents();e.bindAppEvents();e.focusOnComment();e.updateResolvedCount();i.bind("ic.force-refetch",e.fetch)},initAsync:function(){l().done(function(p){p.afterSyncCommentCollection();p.displayPermalinkedComment(e.commentCollection)})},destroy:function(){i.unbind(h)},bindDOMEvents:function(){var p="#view-resolved-comments";g("body").off("click"+h,p).on("click"+h,p,function(q){q.preventDefault();l().done(function(r){r.createResolvedCommentListView()})})},bindAppEvents:function(){var p="ic:resolved."+h;m.listenTo(m,p,function(){e.initAsync()})},fetch:function(){return e.commentCollection.fetch({cache:false}).done(function(){if(e.commentCollection.getCommentsOnPageCount()>0){e.initAsync()}if(e.commentCollection.getResolvedCount()>0){l().done(function(p){p.updateResolvedCommentCountInToolsMenu()})}i.trigger("ic-fetch-completed",e.commentCollection)})},focusOnComment:function(){var p=window.location.search;if(p.indexOf("focusedCommentId")!==-1){e.initAsync()}},bindQuickReloadEvents:function(){var p=function(s,r){var t=e.commentCollection.get(r);var q=false;if(t===undefined){t=new c({id:r});q=true}t.fetch({success:function(u){u._setHighlights(u.get("markerRef"));if(q){e.commentCollection.add(u)}else{t.replies.isFetched=false}m.trigger("ic:view",t,"quickreload")}})};i.unbind("qr:show-new-thread"+h).bind("qr:show-new-thread"+h,function(r,q){l().done(function(){p(r,q)})});i.unbind("qr:add-new-highlight"+h).bind("qr:add-new-highlight",function(s,r,q){l().done(function(){i.trigger("qr:add-new-highlight-text",[r,q])})})},updateResolvedCount:function(){var p=g("#view-resolved-comments>span");p.text("Resolved comments"+i.format(" ({0})",e.commentCollection.getResolvedCount()))}};function b(){g(".tipsy").remove()}function o(){k.start();b();e.init();var p="com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment";if(Confluence&&Confluence.HighlightAction){Confluence.HighlightAction.registerButtonHandler(p,{onClick:function(q){l().done(function(r){if(!e.isSidebarLoaded){e.isSidebarLoaded=true;r.loadSidebarOnClick(q)}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}function j(){b();e.destroy()}f.init=o;f.destroy=j});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:bootstrap', location = '/app/bootstrap.js' */
require(["jquery","ajs","skate","confluence/ic/app/app"],function(h,d,b,g){var f=h("#confluence-ui").length>0;if(!f){var c=d.Meta.get("page-id");var a=d.Meta.get("latest-page-id");if(c&&(c===a)){h(g.init)}}var e="view-page-body";b(e,{type:b.types.CLASS,attributes:{"data-content-id":{updated:function(i,j){g.init({contentId:i.newValue})}}},attached:function(i){g.init()},detached:function(i){g.destroy()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"Document","excel spreadsheet":"Spreadsheet","powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
define("confluence-editor/utils/file-types-utils",[],function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;return{getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/file-types-utils","AJS.Confluence.FileTypesUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-nice-type="' + soy.$$escapeHtml(opt_data.niceType) + '" data-file-src="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-linked-resource-id="' + soy.$$escapeHtml(opt_data.attachmentId) + '" data-linked-resource-type="attachment" data-linked-resource-container-id="' + soy.$$escapeHtml(opt_data.containerId) + '" data-linked-resource-default-alias="' + soy.$$escapeHtml(opt_data.fileName) + '" data-mime-type="' + soy.$$escapeHtml(opt_data.mimeType) + '" data-has-thumbnail="' + ((opt_data.hasThumbnail) ? 'true' : 'false') + '" data-linked-resource-version="' + soy.$$escapeHtml(opt_data.attachmentVersion) + '"' + ((opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '') + '><img src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" height="' + soy.$$escapeHtml(opt_data.height) + '" />' + ((! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedFile';
}


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" /></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedUnknownFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedUnknownFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_ignored) {
  return '<span class="overlay"></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_ignored) {
  return '<span class="comment-count-overlay"><span class="content">' + soy.$$escapeHtml(opt_data.commentCountRep) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_ignored) {
  return '<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.iconClass) + '"></i><span class="content"> ' + soy.$$escapeHtml(opt_data.fileType) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","skate","vfm/components/embedded-file-view"],function(f,b,a,d){f(document).on("click",".confluence-embedded-file.unknown-attachment",function(g){g.preventDefault()});function c(g){if(!__skate||!__skate.registry){return false}return __skate.registry[g]!==undefined}var e="confluence-embedded-file-wrapper";if(!c(e)){a(e,{type:a.types.CLASS,attached:function(g){d.render({el:g})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:captcha-manager', location = 'jscripts/captcha-manager.js' */
define("confluence-quick-edit/captcha-manager",["jquery","ajs"],function(d,e){return function(f){function a(a){return d(f||"body").find(a)}return{refreshCaptcha:function(){var b=a("img.captcha-image");if(0<b.length){var c=Math.random();b.attr("src",e.contextPath()+"/jcaptcha?id="+c);a('input[name="captchaId"]').val(c);a('input[name="captchaResponse"]').val("")}},getCaptchaData:function(){return{id:a('input[name="captchaId"]').val(),response:a('input[name="captchaResponse"]').val()}}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/captcha-manager","AJS.Confluence.QuickEditCaptchaManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader","jquery confluence/meta confluence/aui-overrides confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/dark-features ajs wrm window confluence/performance-session".split(" "),function(b,h,p,i,q,c,r,s,o){var d,l,t=b("#confluence-ui").length,g={_listening:false,_queuedHandlers:[],_watchHandler:function(){i.UI.toggleWatchPage(false)},_unwatchHandler:function(){i.UI.toggleWatchPage(true)},_createQueueAdder:function(a){return function(){g._listening&&
g._queuedHandlers.push(a)}},bind:function(){c.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));c.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;){a();a=this._queuedHandlers.pop()}}};g.setListening(true);g.bind();var m=function(){return b("#editor-preload-container").length},n=function(){var a=b("#editor-preload-container"),c=h.get("page-id");
m()||(a=b('<div id="editor-preload-container" style="display: none;" data-contentId="'+c+'"></div>'));return a},e;return{getPreloadContainer:n,getEditorPreloadMarkup:function(a){if(e&&!a)return e;e&&e.readyState!==4&&e.abort();o.debugTime("confluence.editor.preload");a=c.contextPath()+"/plugins/editor-loader/editor.action";return e=b.get(a,{parentPageId:h.get("parent-page-id"),pageId:h.get("page-id"),spaceKey:h.get("space-key"),atl_after_login_redirect:s.location.pathname,timeout:c.Confluence.EditorLoader.loadingTimeout})},
resourcesLoaded:function(){return d&&d.isResolved()},loadingTimeout:12E3,isEditorActive:function(){var a=b("#editor-preload-container");return a.length&&a.is(":visible")},load:function(a,e){var f;f=m();var g=n();f=!f||f&&g.attr("data-contentId")!==h.get("page-id");if(!f){if(d){d.fail(function(){e?e.call(this,arguments):c.log("EditorLoader: loadGuard - previous load failed.")});d.done(function(){a?d.done(function(){setTimeout(a,0)}):c.log("EditorLoader: loadGuard - editor is already loaded.")});g=
true}else g=void 0;if(g)return}d=new b.Deferred;c.debug("Waiting for frontend editor plugins resources.");if(c.DarkFeatures.isEnabled("frontend.editor.plugins")){var i=b.Deferred();c.bind("frontend.editor.plugins.resources.loaded",function(){c.debug("Resolving frontend editor plugins resources.");i.resolve()});l=i}else l=b.Deferred().resolve();a&&d.done(a);e&&d.fail(e);var j=n();if(m()){j.attr("data-contentId",h.get("page-id"));j.empty()}else b("body").append(j);var k=new b.Deferred;h.get("page-id")?
this.getEditorPreloadMarkup(f).done(function(a,d,e){if(d==="success"||d==="notmodified"){d=b.ajaxSettings.cache;try{b.ajaxSettings.cache=true;j.append(a)}finally{b.ajaxSettings.cache=d}if(t){var a=j.find("#dynamic-editor-metadata-template").text(),g=[];b("<div />").html(a).find("meta").each(function(a,d){var c=b(d),e=c.attr("name").substr(4),f=c.attr("content"),i=b('meta[name="ajs-'+e+'"]');i.length>0?i.attr("content",f):g.push(c[0].outerHTML);h.set(e,f==="true"||f==="false"?f==="true":f)});g.length&&
b("head").append(g.join(""))}else{a=c.renderTemplate("dynamic-editor-metadata");b("head").append(a)}p.metaToParams();c.debug("EditorLoader: Finished loading the editor template.");k.resolve();o.debugTimeEnd("confluence.editor.preload")}else k.reject("Error loading the Editor template: "+e.status+" - "+e.statusText)}):k.resolve();f=q.isEnabled("fd-87.editor.spa")?b.Deferred().resolve():r.require(["wrc!editor","wrc!macro-browser","wrc!fullpage-editor"]).fail(function(a){c.logError("Failed to load editor resources",
a)});b.when(k,f,l).done(function(){c.debug("EditorLoader: Finished loading the editor.");d.resolve()}).fail(function(){d.reject(arguments)})},getEditorForm:function(){if(this.isEditorActive()){var a=require("tinymce");return b(a.activeEditor.getContainer()).closest("form")}return null},getEditorLoadingStatus:function(){return d}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-core-resources', location = 'loader/profiles.js' */
define("confluence-editor/profiles",["jquery","ajs"],function(d,c){return{createProfileForCommentEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavecomment confluencewatch autoresize".split(" ")}},createProfileForPageEditor:function(a){var b="searchreplace confluencedrafts confluenceimagedialog autocompletemacro confluencemacrobrowser flextofullsize referrer".split(" ");c.Meta.getBoolean("shared-drafts")&&c.DarkFeatures.isEnabled("unpublished-changes-lozenge")&&
b.push("unpublishedchanges");a&&a.versionComment&&b.push("confluenceversioncomment");a&&a.notifyWatchers&&b.push("confluencenotifywatchers");return{plugins:b}},createProfileForTemplateEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavetemplate flextofullsize confluencetemplateeditor".split(" ")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/profiles","AJS.Confluence.Editor._Profiles");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-util', location = 'jscripts/util.js' */
define("confluence-quick-edit/util",["window","ajs"],function(c,d){return{generateUUID:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},getBaseUrl:function(){var a=c.location.protocol.replace(/:$/,"")+"://"+c.location.host+"/"+c.location.pathname.replace(/^\//,""),b=c.location.search.replace(/^\?/,""),b=b.replace(/\&?focusedCommentId=\d+/,""),b=b.replace(/^\&/,"");return{url:a,search:b,addQueryParam:function(a,
b){this.search=this.search?this.search+"&"+a+"="+b:a+"="+b},toString:function(){return this.url+"?"+this.search}}},timeoutDeferred:function(a,b,c){"function"!==typeof b.reject&&d.log("WARNING: invalid, not rejectable object passed to AJS.Confluence.QuickEdit.Util.timeoutDeferred. You should use a Deferred object");setTimeout(function(){"pending"===b.state()&&(d.logError("Timeout: "+a),b.reject("timeout"))},c);return b}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/util","AJS.Confluence.QuickEdit.Util");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = 'includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^\?|#]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = 'includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,n,k,l,h){var b={},m;b.setAnalyticsSource=function(a,d){if(typeof m==="undefined"){var c=j._data(k,"events");m=c&&c.analytics&&c.analytics.length>0}m&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(l.URL),d={userKey:n.get("remote-user-key"),pageID:n.get("page-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(l.URL);l.URL!==a&&
k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/quick-edit.js' */
define("confluence-quick-edit/quick-edit","ajs confluence/templates confluence/meta jquery window document confluence-quick-edit/util confluence-quick-edit/captcha-manager confluence/legacy-editor-global-AVOID-IF-POSSIBLE wrm".split(" "),function(c,q,j,b,r,s,t,g,e,u){function v(){var a=new b.Deferred;c.Confluence.EditorLoader.load(function(){setTimeout(function(){a.resolve()},0)},function(){a.reject()});return a}var o={enableShortcut:function(){b("#editPageLink").addClass("full-load")},disableShortcut:function(){b("#editPageLink").removeClass("full-load")}},
h=[],n={loadingContentTimeout:4E3,register:function(a){h.push(a)},disableHandlers:function(){b.each(h,function(a,b){return b.disable()})},enableHandlers:function(){b.each(h,function(a,b){return b.enable()})},SaveBarBinder:{bind:function(a,b){a&&e.addSaveHandler(a);b&&e.addCancelHandler(b)}},activateEditor:function(a){function e(){function f(a){var c=new b.Deferred;u.require(a).done(function(a){c.resolve(a)}).fail(function(a){c.reject(a)});return c}var h,k=new b.Deferred;if(c.Rte&&c.Rte.getEditor()){c.debug("there is already an editor open");
return k.reject("there is already an editor open")}if(!a.$container||!a.$form){c.logError("activateEditor could not be initialsed: bad arguments",a);return k.reject("bad parameters")}if(a.$container.nodeType)a.$container=b(a.$container);if(a.$form.nodeType)a.$form=b(a.$form);h=c.Confluence.BlockAndBuffer.block(b(s));a.preActivate&&a.preActivate();o.disableShortcut();var p=a.timeoutResources||c.Confluence.EditorLoader.loadingTimeout,g=n.loadingContentTimeout,i=t.timeoutDeferred;b.when(i("resources",
v(),p),i("fetch content",a.fetchContent||b.Deferred().resolve(),g),i("additional resources",a.additionalResources?f(a.additionalResources):b.Deferred().resolve(),p)).done(function(e,f){var d={$container:a.$container,content:f,$form:a.$form,replayBufferedKeys:h};a.preInitialise&&a.preInitialise(d);b(".quick-comment-prompt",d.$container).hide();b(".quick-comment-body",d.$container).addClass("comment-body");var l=b(c.Confluence.EditorLoader.getPreloadContainer());if(d.content&&d.content.title){var m=
d.content.title;l.find("#content-title").val(m)}d.$form.append(l.children());l.show();b("#editor-precursor").hide();b("#rte-savebar").find(".toolbar-split-left").hide();if(j.get("content-type")==="comment"){b("#pluggable-status").hide();var l=q.Editor.Page.cancelButton({contentType:j.get("content-type"),sharedDraftsEnabled:j.getBoolean("shared-drafts")}),m=b("#rte-button-cancel"),g=m.parent(".rte-toolbar-group-done");if(g.length){g.remove();b("#rte-button-discard").remove()}else m.remove();b("#rte-savebar").find(".toolbar-split-right").append(l)}var i=
function(){d.editor=c.Rte.getEditor();if(d&&d.$container&&d.$container.nodeType)d.$container=b(d.$container);if(d&&d.$container&&d.$form.nodeType)d.$form=b(d.$form);d.$container.find(".quick-comment-loading-container").hide();d.$form.show();d.$form.addClass("fadeIn");var e=d.editor,f=d.content?d.content.editorContent:"",g=d.replayBufferedKeys;if(f){e.setContent(f);e.startContent=e.getContent({format:"raw",no_events:1});e.undoManager.clear()}g()&&e.undoManager.add();c.trigger("quickedit.success");
c.trigger("quickedit.visible");c.trigger("add-bindings.keyboardshortcuts");c.trigger("active.dynamic.rte");b("div.aui-message.closeable").each(function(){var a=b(this),d;if(!a.find(".icon-close").length){d=b('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){a.closeMessage()}).keypress(function(b){if(b.which===c.keyCode.ENTER||b.which===c.keyCode.SPACE){a.closeMessage();b.preventDefault()}});a.append(d)}});a.postInitialise&&a.postInitialise(d);n.SaveBarBinder.bind(a.saveHandler,
a.cancelHandler);c.trigger("rte-quick-edit-ready");e=j.get("content-type");j.get("collaborative-content")&&(e==="page"||e==="blogpost")&&c.trigger("rte-collab-editor-loaded");c.unbind("rte-ready",i);k.resolve()};c.bind("rte-ready",i);c.bind("rte-destroyed",a.postDeactivate||function(){});c.Rte.BootstrapManager.initialise({plugins:a.plugins,toolbar:a.toolbar,excludePlugins:a.excludePlugins,isQuickEdit:true,onInitialise:a.onInitialise})}).fail(function(b,e){k.reject(b,e);c.logError("Error loading page quick edit. Falling back to normal edit URL...");
c.trigger("analytics",{name:"rte.quick-edit.activate-editor.failed"});if(a.fallbackUrl){c.log("This parameter is deprecated. To be removed in the next major version (5.8 or 6.0). Please use the promise returned to bind custom action if the editor fails to load instead.");r.location=a.fallbackUrl}});return k.promise()}if(a.closeAnyExistingEditor&&c.Rte&&c.Rte.getEditor()){var f=new b.Deferred;this.deactivateEditor().done(function(){e().done(function(){f.resolve()}).fail(function(a){f.reject(a)})}).fail(function(){c.debug("Could not deactivate current editor.");
f.reject("Could not deactivate current editor.")});return f}return e()},deactivateEditor:function(){require("tinymce").execCommand("mceRemoveControl",true,"wysiwygTextarea");e.UI.toggleSavebarBusy(false);var a=c.Confluence.EditorLoader.getPreloadContainer().empty();b(".editor-container").remove();b("#editor-precursor").remove();b("#anonymous-warning").remove();b(".quick-comment-prompt").show();b(".bottom-comment-panels").show();b("#editor-notification-container").empty();b(".action-reply-comment").removeAttr("reply-disabled");
o.enableShortcut();e.removeAllSaveHandlers();e.removeAllCancelHandlers();return c.Confluence.EditorLoader.getEditorPreloadMarkup().done(function(b){a.append(b);a.hide();(new g(a)).refreshCaptcha();c.trigger("rte-destroyed");c.unbind("rte-destroyed")})}};return n});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/quick-edit","AJS.Confluence.QuickEdit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/view.js' */
define("confluence-quick-edit/handlers/view",["jquery","ajs","window"],function(c,d,e){return function(){var a;sessionStorage.viewPort&&(a=JSON.parse(sessionStorage.viewPort));if(a&&a.pageId==d.params.pageId){var b;b=c("#main-content");var f=c("#header");b=-1!==a.blockIndex?b.children().first().children().eq(a.blockIndex).find(".innerCell").eq(a.columnIndex).children().eq(a.index):b.children().eq(a.index);e.scrollTo(0,b.offset().top+a.offset-f.outerHeight())}delete sessionStorage.viewPort}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/handlers/view",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/shortcut.js' */
define("confluence-quick-edit/handlers/shortcut",["ajs"],function(a){var d=!1;a.bind("initialize.keyboardshortcuts add-bindings.keyboardshortcuts",function(){d=!0});a.bind("remove-bindings.keyboardshortcuts",function(){d=!1});return{createShortcut:function(f,g){function b(){c=c||a.whenIType(f).moveToAndClick(g)}function e(){c&&c.unbind();c=null}var c;return{bind:function(){d&&b();a.bind("initialize.keyboardshortcuts",b);a.bind("add-bindings.keyboardshortcuts",b);a.bind("remove-bindings.keyboardshortcuts",
e)},unbind:function(){e();a.unbind("initialize.keyboardshortcuts",b);a.unbind("add-bindings.keyboardshortcuts",b);a.unbind("remove-bindings.keyboardshortcuts",e)}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/shortcut","AJS.Confluence.QuickEdit.KeyboardShortcuts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/page.js' */
define("confluence-quick-edit/handlers/page","jquery ajs underscore confluence/meta confluence-quick-edit/handlers/shortcut confluence/aui-overrides confluence/analytics-support confluence-editor/profiles window confluence/performance-session confluence-quick-edit/quick-edit confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/get-content-id confluence/api/browser confluence-editor/editor/page-editor-message".split(" "),function(b,c,H,n,z,A,j,B,k,l,p,m,q,C,D){function r(){if(d){d.find(".aui-icon").css("visibility",
"visible");d.parent().spinStop()}}function s(){var a=n.get("content-type");return n.get("collaborative-content")&&(a==="page"||a==="blogpost")}function t(a,c,f){var e={pageId:f,blockIndex:-1,columnIndex:-1,index:-1,offset:0,hasBlock:function(){return this.blockIndex!==-1}},d=false,g=function(a,b){var f=a.offset();if(h(a)){e.index=b;e.offset=c-f.top;d=true}},h=function(a){var b=a.offset();return b.top-8<=c&&b.top+a.height()>=c};if(a.children().length===1&&a.children().first().hasClass("contentLayout2")){a.children().first().children().each(function(a){if(!e.hasBlock()&&
h(b(this)))e.blockIndex=a});if(e.hasBlock()){a=a.children().first().children().eq(e.blockIndex).find(".innerCell");a.each(function(a){if(e.columnIndex===-1){var c=b(this).children().length;if(c>0)if(c<2){if(b(this).children().first().height()>25)e.columnIndex=a}else e.columnIndex=a}});a.eq(e.columnIndex).children().each(function(a){d||g(b(this),a)})}}else a.children().each(function(a){d||g(b(this),a)});return d?e:null}function u(a){var i=require("tinymce");g.disable();A.metaToParams();if(a.$container.nodeType)a.$container=
b(a.$container);if(a.$form.nodeType)a.$form=b(a.$form);if(c.DarkFeatures.isEnabled("confluence.view.edit.transition")){var f=b("#main-content"),e=b("#header"),d=b("#main-header"),e=k.pageYOffset+e.outerHeight()+d.outerHeight();h=t(f,e,c.params.pageId);c.trigger("quick-edit.viewport.saved");var j=function(){b(i.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit");b("#content").css({paddingRight:0});c.unbind("quickedit.visible",j)};c.bind("quickedit.visible",j)}f=a.$form;e=c.Meta.get("content-type")===
"page"?"doeditpage":"doeditblogpost";e=c.contextPath()+"/pages/"+e+".action?pageId="+q();b(".ia-splitter-left").remove();try{c.DarkFeatures.isEnabled("react.ui.view-page")&&b("#confluence-ui").length?b("#main").detach().appendTo("#full-height-container"):b("#main").unwrap()}catch(l){}b("#rte").removeClass("editor-default").addClass("editor-fullheight");a.$container.children().remove();b(".editor-container").children().eq(0).unwrap();f.attr({"class":"editor aui",action:e,name:"editpageform",id:"editpageform",
style:""});a.$container.append(f);a.$container.removeClass("view").addClass("edit");b("body").addClass("contenteditor edit")}function v(a){require("tinymce");b("#editor-precursor").show();b("#rte-savebar").find(".toolbar-split-left").show();if(k.history.pushState){var i=d.attr("href");if(i!=k.location.pathname+k.location.search){history.pushState({quickEdit:true},"",i);c.trigger("rte-quick-edit-push-state",i)}}else{k.location.hash="editor";c.trigger("rte-quick-edit-push-hash")}i=a.content;if(i.permissions)for(var f in i.permissions)b("#"+
f).attr("value",i.permissions[f]);b("#originalVersion").val(a.content.pageVersion);c.Meta.set("page-version",a.content.pageVersion);c.Meta.set("page-title",a.content.title);b('meta[name="page-version"]').attr("content",a.content.pageVersion);b('meta[name="ajs-page-version"]').attr("content",a.content.pageVersion);b("#syncRev").val(a.content.syncRev);c.Meta.set("conf-revision",a.content.confRev);b('meta[name="ajs-conf-revision"]').attr("content",a.content.confRev);f=a.content.atlToken;c.Meta.set("atl-token",
f);b('input[name="atl_token"]').val(f);c.trigger("analyticsEvent",{name:"quick-edit-success"});b("#navigation").remove();var e=new Date,g=function(c,b){if(e&&!(b.type==="keydown"&&[91,92,93,224,33,34,37,38,39,40,16,17,18,20,112,113,114,115,116,117,118,119,120,121,122,123].indexOf(b.keyCode)>-1)){var f=new Date-e;e=null;j.publish("confluence.editor.transition.firstkeydown",{delay:f});a.editor.onKeyDown.remove(g);a.editor.onChange.remove(g)}};a.editor.onKeyDown.add(g);a.editor.onChange.add(g);l.debugTimeEnd("confluence.editor")}
function F(a){setTimeout(function(){if(h){var c;c=b(a.getBody());c=h.hasBlock()?c.children().first().children().eq(h.blockIndex).find(".innerCell").eq(h.columnIndex).children().eq(h.index):c.children().eq(h.index);a.getWin().scrollTo(0,c.offset().top+h.offset);b("#main").css("visibility","visible")}})}function w(a){c.trigger("rte-collaborative-content-ready",a)}function G(){var a=new b.Deferred;l.debugTime("confluence.editor.quick.fetchContent");var d=b.ajax({url:c.contextPath()+"/rest/tinymce/1/content/"+
q()+".json",cache:false});d.success(function(b){c.Meta.get("edit-mode")&&c.Meta.get("edit-mode")!==b.editMode&&a.reject("edit mode change",d);l.debugTimeEnd("confluence.editor.quick.fetchContent");s()&&w(b);c.bind("synchrony-events-bound",function E(){w(b);c.unbind("synchrony-events-bound",E)});a.resolve(b)});d.error(function(b){a.reject("error fetching content",b)});return a}function x(a,b){if(b)switch(b.status){case 423:var f=JSON.parse(b.responseText).user;r();c.MessageHandler.flag({type:"info",
title:"Unable to edit",body:c.format("Collaborative editing is offline right now, and {0} is editing this page. Try again in a few minutes.",f),close:"manual"});return;case 412:r();D.handleMessage("collab.edit.user.limit.reached",{type:"warning",title:"You can\'t edit this page right now",message:"\u003cp\u003eThis page is so popular, you\'ve reached the maximum number of simultaneous editors.\u003c/p\u003e\u003cp\u003eTry again when it\'s not so busy.\u003c/p\u003e",close:"manual"});j.publish("collab.edit.user.limit.reached",{browser:y.friendlyName()+"-"+y.version(),pageId:n.get("page-id"),editMode:"quick"});return}k.location=d.attr("href")}
var o,h,d,y=new C(k.navigator.userAgent),g={editShortcut:z.createShortcut("e","#editPageLink"),activateEventHandler:function(a){if(!a.metaKey&&!a.shiftKey&&!a.ctrlKey&&!a.altKey&&!(a.which===2||a.which===3)){a.preventDefault();if(o&&o.state()==="pending")c.debug("Editor is being activated. Ignoring handler...");else{o=g.activateEditor();if(d){d.find(".aui-icon").css("visibility","hidden");d.parent().spin({left:"10px"})}}}},enable:function(){if(b("#confluence-ui").length)return false;d=b("#editPageLink");
if(b("body").is(".theme-default")){d.on("click",g.activateEventHandler);d.removeClass("full-load");g.editShortcut.bind();c.debug("QuickPageEdit enabled")}else c.debug("QuickPageEdit not enabled")},activateEditor:function(){l.debugTime("confluence.editor");s()&&c.trigger("rte-quick-edit-init");var a=b("#content").find(".quick-comment-form"),d=function(){var a=require("tinymce").activeEditor.getWin(),d=b(a.document).find("#tinymce");if(a=t(d,a.pageYOffset,c.params.pageId))sessionStorage.viewPort=JSON.stringify(a)};
return p.activateEditor({fetchContent:G(),$container:b("#content"),$form:a.length?a:b('<form method="post"></form>'),preInitialise:u,postInitialise:v,saveHandler:function(){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&d();m.getNumConcurrentEditors()>1&&j.publish("rte.notification.concurrent-editing.save",{numEditors:m.getNumConcurrentEditors(),pageId:c.params.pageId,draftType:c.params.draftType})},cancelHandler:function(){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&
d();m.getNumConcurrentEditors()>1&&j.publish("rte.notification.concurrent-editing.cancel",{numEditors:m.getNumConcurrentEditors(),pageId:c.params.pageId,draftType:c.params.draftType})},plugins:B.createProfileForPageEditor({versionComment:true,notifyWatchers:true}).plugins,onInitialise:function(a){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&a.onLoad.add(F)}}).fail(x)},disable:function(){c.debug("QuickPageEdit disabled.");g.editShortcut.unbind();d&&d.unbind("click",g.activateEventHandler)}};
p.register(g);return{disable:g.disable,activate:g.activateEditor,preInitialise:u,postInitialize:v,_objForTesting:{onFailActivateEditor:x}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/page","AJS.Confluence.QuickEdit.QuickEditPage");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/init.js' */
define("confluence-quick-edit/init",["ajs","jquery","window","confluence-quick-edit/quick-edit","confluence-editor-loader/editor-loader"],function(b,a,c,d,e){return function(){a("body").hasClass("page-gadget")?b.debug("QuickComment: editor preload is disabled"):a(c).load(function(){b.debug("QuickComment: instigated background loading of the comment editor.");e.load()});d.enableHandlers();b.trigger("rte-quick-edit-enable-handlers")}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/init",function(b){var a=require("ajs");a.DarkFeatures.isEnabled("disable-quick-edit")?a.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually."):a.toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment.js' */
define("confluence-quick-edit/handlers/comment","ajs jquery aui/flag confluence-quick-edit/util confluence-editor/editor/page-editor-message confluence-quick-edit/handlers/page confluence-quick-edit/quick-edit confluence-quick-edit/captcha-manager confluence-quick-edit/comment-display-manager confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/get-content-id".split(" "),function(a,d,o,l,f,p,h,q,r,k,m){function n(a,c){var g=a.match(RegExp("[?&]"+c+"=(\\d+)"));return g&&g.length>1?parseInt(g[1]):
0}d(function(){a.AppLinksInitialisationBinder=function(b){a.bind("init.rte",b)}});var e={timeout:8E3,showLoadingEditorErrorMessage:function(){a.trigger("rte-quick-comment-loading-failed");o({type:"error",title:"Error",persistent:false,body:"Error loading the comment editor. Please refresh the page to try again."})},preInitialise:function(){p.disable();a.Meta.set("content-type","comment");a.Meta.set("draft-type","");a.params.contentType="comment";a.params.draftType=
"";a.Meta.set("use-inline-tasks","false");d("#editor-precursor").children().eq(0).hide();d("#pagelayout-menu").parent().hide();d("#page-layout-2-group").hide();d("#rte-button-tasklist").remove();d("#pluggable-status-container").remove();d("#rte-insert-tasklist").parent().remove()},postInitialise:function(b){a.Rte.editorFocus(b.editor)},delegatingSaveCommentHandler:function(a){return a.asyncRenderSafe?e.ajaxSaveCommentHandler(a):e.reloadPageSaveCommentHandler(a)},reloadPageSaveCommentHandler:function(a){var c=
l.getBaseUrl();c.addQueryParam("focusedCommentId",a.id);c.addQueryParam("refresh",+new Date);window.location.href=c.toString()+"#comment-"+a.id},ajaxSaveCommentHandler:function(b){var c={isDefault:true,path:a.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};a.Meta.get("current-user-avatar-uri-reference")!==a.contextPath()+"/images/icons/profilepics/default.png"&&(c={isDefault:false,path:a.Meta.get("current-user-avatar-uri-reference")});var g=a.Meta.get("remote-user"),
d={userName:g===""?null:g,displayName:a.Meta.get("current-user-fullname"),profilePicture:c};e.cancelComment().done(function(){r.addOrUpdateComment(d,b,true,false);a.trigger("page.commentAddedOrUpdated",{commentId:b.id})})},cancelHandler:function(){if(h){a.Rte.Content.editorResetContentChanged();h.deactivateEditor()}},createCommenterParam:function(b,c,d){return{userName:c||a.Meta.get("remote-user")||null,displayName:d||a.Meta.get("user-display-name"),profilePicture:{isDefault:b.hasClass("defaultLogo"),
path:b.attr("src")}}},createSaveHandler:function(b,c){var g=l.generateUUID();return function(e){e.preventDefault();if(a.Rte.Content.isEmpty()){a.Confluence.EditorNotification.notify("warning","Comment text is empty. Cannot create empty comments.");k.UI.toggleSavebarBusy(false)}else{var i=e=0,j=a.Confluence.EditorLoader.getEditorForm();if(j.is("form")){i=j.attr("action");e=n(i,"parentId");i=n(i,"commentId")}var f=new q(j),j=function(a){c(a);f.refreshCaptcha()},h=d("#watchPage").is(":checked");i>0?k.CommentManager.updateComment(m(),
i,a.Rte.Content.getHtml(),h,f.getCaptchaData(),b,j):k.CommentManager.saveComment(m(),e,a.Rte.Content.getHtml(),h,g,f.getCaptchaData(),b,j)}}},saveCommentErrorHandler:function(b){k.UI.toggleSavebarBusy(false);var c;if(b&&b.search(/captcha/i)!==-1){c="The typed word did not match the text in the picture.";f.closeMessages(["captcha-response-failed"]);f.handleMessage("captcha-response-failed",{type:"error",message:c})}else{c="Failed to save the comment. Please try again later.";f.closeMessages(["server-offline"]);f.handleMessage("server-offline",
{type:"error",message:c})}a.logError("Error saving comment",b)},cancelComment:function(){a.Rte.Content.editorResetContentChanged();return h.deactivateEditor()},proceedWithActivation:function(){var b=new d.Deferred,c=a.Rte&&a.Rte.getEditor();if(c)if(c.isDirty()&&!k.isEmpty())if(confirm("Your comment will be lost."))b=e.cancelComment();else return b.reject();else b=e.cancelComment();else b.resolve();return b}};return e});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment","AJS.Confluence.QuickEdit.QuickComment");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/top-level.js' */
define("confluence-quick-edit/handlers/comment/top-level","ajs jquery confluence-quick-edit/handlers/shortcut confluence-quick-edit/handlers/comment window confluence-quick-edit/quick-edit".split(" "),function(c,a,e,b,f,g){function h(a){b.preInitialise(a)}function i(c){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#rte-savebar").scrollWindowToElement();b.postInitialise(c)}function j(){if(!c.Confluence.EditorLoader.resourcesLoaded()){c.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"});
a(".quick-comment-prompt").hide();a(".quick-comment-loading-container").fadeIn().spin("medium")}}function k(b){b.preventDefault();f.location=a("#add-comment-rte").attr("href")}var l=c.DarkFeatures.isEnabled("editor.slow.comment.disable"),d={commentShortcut:e.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(e){e.preventDefault();b.proceedWithActivation().done(function(){var d=b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler);return g.activateEditor({preActivate:j,
$container:a("form[name=inlinecommentform]").closest(".quick-comment-container"),$form:a("form[name=inlinecommentform]"),preInitialise:h,saveHandler:d,cancelHandler:b.cancelHandler,postInitialise:i,plugins:c.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){l?b.showLoadingEditorErrorMessage():f.location=a("#add-comment-rte").attr("href")})}).fail(function(){a("#comments-section").one("click",
".quick-comment-prompt",d.activateEventHandler)})},enable:function(){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#add-comment-rte").removeClass("full-load");this.commentShortcut.bind()},disable:function(){a("#comments-section").off("click",".quick-comment-prompt");this.commentShortcut.unbind()}};g.register(d);return{bindCommentAreaFallbackHandler:function(){a("#comments-section").delegate(".quick-comment-prompt","click",k)},cancelComment:function(){c.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/top-level","AJS.Confluence.QuickEdit.QuickComment.TopLevel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/reply.js' */
define("confluence-quick-edit/handlers/comment/reply","ajs confluence/templates jquery confluence-quick-edit/handlers/comment confluence-quick-edit/quick-edit confluence/get-content-id".split(" "),function(d,j,a,b,h,k){function l(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function m(a){b.postInitialise(a)}function i(a){var b=a.attr("id").match(/comment-(\d+)/),f=0;if(b)f=parseInt(b[1]);else{d.trigger("analytics",{name:"rte.quick-edit.get-reply-parent.failed"});d.logError("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id "+
a.attr("id"))}return f}function n(){a(".comment.reply").closest(".comment-threads").remove()}var o=d.DarkFeatures.isEnabled("editor.slow.comment.disable"),e={activateEventHandler:function(e){e.preventDefault();e.stopPropagation();var g=this;if(a(g).attr("reply-disabled"))return false;b.proceedWithActivation().done(function(){var f=a(g).closest("div.comment"),c=a(".quick-comment-container img.userLogo"),c=b.createCommenterParam(c),c={contentId:k(),parentCommentId:i(f),commenter:c,context:{contextPath:d.Meta.get("context-path"),
staticResourceUrlPrefix:d.Meta.get("static-resource-url-prefix")}},c=a(j.Comments.displayReplyEditorLoadingContainer(c)),e=a(".quick-comment-loading-container",c);e.hide();f.after(c);if(d.Confluence.EditorLoader.resourcesLoaded())d.trigger("analytics",{name:"rte.quick-edit.reply-comment.no-spinner"});else{d.trigger("analytics",{name:"rte.quick-edit.reply-comment.spinner"});f.after(c);e.fadeIn();e.spin("medium");e[0].scrollIntoView()}c=a(g).closest(".comment-thread").find(".quick-comment-container");
d.Meta.set("form-name",a("form",c).attr("name"));h.activateEditor({$container:c,$form:a("form.quick-comment-form[name=threadedcommentform]"),preInitialise:l,postInitialise:m,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:d.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:n,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){o?b.showLoadingEditorErrorMessage():
window.location=a("#reply-comment-"+i(f)).attr("href")});a(g).attr("reply-disabled",true)})},enable:function(){a("#comments-section").delegate(".action-reply-comment","click",e.activateEventHandler)},disable:function(){a("#comments-section").undelegate(".action-reply-comment","click")}};h.register(e);return{cancelComment:function(){d.log("'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/reply","AJS.Confluence.QuickEdit.QuickComment.Reply");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/edit.js' */
define("confluence-quick-edit/handlers/comment/edit","ajs confluence-quick-edit/handlers/comment jquery confluence/templates confluence-quick-edit/quick-edit confluence/get-content-id".split(" "),function(e,b,d,j,i,k){function l(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function m(a){b.postInitialise(a)}function h(a){return(a=a.attr("id").match(/comment-(\d+)/))?parseInt(a[1]):0}function n(a){var b=new d.Deferred;d.ajax({url:e.contextPath()+"/rest/api/content/"+a+"?expand=body.editor",
cache:false}).done(function(a){!a||!a.body||!a.body.editor?b.reject("invalid response from loading comment rest endpoint"):b.resolve({editorContent:a.body.editor.value})}).fail(function(){b.reject("error fetching content")});return b}function o(){var a=d(".comment.edit");a.prev(".comment").show();a.remove()}var p=e.DarkFeatures.isEnabled("editor.slow.comment.disable"),g={activateEventHandler:function(a){var g=this;a.preventDefault();a.stopPropagation();b.proceedWithActivation().done(function(){var a=
d(g).closest("div.comment"),c;c=a.find(".author .confluence-userlink");var f=a.find(".comment-user-logo img.userLogo");c=b.createCommenterParam(f,c.attr("data-username"),c.text());c={contentId:k(),commentId:h(a),commenter:c,context:{contextPath:e.Meta.get("context-path"),staticResourceUrlPrefix:e.Meta.get("static-resource-url-prefix")},mode:"edit"};c=d(j.Comments.displayEditEditorContainer(c));f=d(".quick-comment-loading-container",c);a.hide();a.after(c);f.fadeIn().spin("medium");f[0].scrollIntoView();
c=a.next(".quick-comment-container");e.Meta.set("form-name",d("form",c).attr("name"));i.activateEditor({$container:c,$form:d("form.quick-comment-form[name=editcommentform]"),fetchContent:n(h(a)),preInitialise:l,postInitialise:m,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:e.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:o,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){p?
b.showLoadingEditorErrorMessage():window.location=d("#edit-comment-"+h(a)).attr("href")})})},enable:function(){d("#comments-section").delegate(".comment-action-edit","click",g.activateEventHandler)},disable:function(){d("#comments-section").undelegate(".comment-action-edit","click")}};i.register(g);return{cancelComment:function(){e.log("'AJS.Confluence.QuickEdit.QuickComment.Edit.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return b.cancelComment()}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/edit","AJS.Confluence.QuickEdit.QuickComment.Edit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/editor-comment-manager.js' */
define("confluence-quick-edit/editor-comment-manager",["ajs","jquery","confluence-quick-edit/comment-display-manager","confluence/legacy-editor-global-AVOID-IF-POSSIBLE"],function(d,l,m,n){return function(){function k(a,e,i,h,b,f,g){d.trigger("analytics",{name:"confluence.page.comment.create",data:{pageID:d.Meta.get("page-id")}});a={type:"POST",url:a,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{html:e,watch:i,uuid:h},dataType:"json",cache:!1,headers:{"X-Atlassian-Token":"no-check"},
success:function(a){f(a)},error:function(a,c,b){c=c+": "+b;a.responseText&&(c=c+" - "+a.responseText);g(c)},timeout:12E4};b&&b.id&&(a.headers["X-Atlassian-Captcha-Id"]=b.id,a.headers["X-Atlassian-Captcha-Response"]=b.response);l.ajax(a)}return{addComment:function(a,e,d,h,b,f,g,j,c){n.CommentManager.saveComment(a,e,d,function(a){m.addComment(g,a,f);j(a)},c)},saveComment:function(a,e,i,h,b,f,g,j){var c=null,c=e?d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+e+"/comment?actions=true":d.contextPath()+
"/rest/tinymce/1/content/"+a+"/comment?actions=true";k(c,i,h,b,f,g,j)},updateComment:function(a,e,i,h,b,f,g){a=d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+e+"?actions=true";k(a,i,h,null,b,f,g)}}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/editor-comment-manager",function(d){require("ajs").bind("init.rte",function(){Confluence.Editor.CommentManager=d()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation-util.js' */
define("confluence-quick-edit/view-content/pushed-navigation-util",["ajs","jquery","window"],function(d,f,a){function c(){return d.Rte&&d.Rte.getEditor()&&!!f("#editpageform").length}var b=a.location.hash,e=a.location.search;return{isInEditPage:c,filterPreviewHashChange:function(){var g=c()||a.history.pushState||!(a.location.hash&&0===a.location.hash.indexOf("#!"))&&!(b&&0===b.indexOf("#!"));b=a.location.hash;return g},filterPreviewNavigationEvent:function(){var b=c()||!/[?&]preview=([^&]*)/.test(a.location.search)&&
!/[?&]preview=([^&]*)/.test(e);e=a.location.search;return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/view-content/pushed-navigation-util","Confluence.Editor.PushedNavUtil");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation.js' */
define("confluence-quick-edit/view-content/pushed-navigation","jquery underscore window ajs confluence-quick-edit/view-content/pushed-navigation-util confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(b,n,a,c,d,g){function e(){if(h){if(f.split("#")[0]!=a.location.href.split("#")[0]){b(a).unbind("popstate",k);a.location.reload()}}else f.split("#")[0]==a.location.href.split("#")[0]&&f.split("#")[1]!=="editor"||a.location.reload()}function i(){f=a.location.href}function l(){var b=
g.Drafts.unloadMessage();if(b){g.Drafts.unBindUnloadMessage();if(confirm(b+"\n\n"+"Press OK to continue, or Cancel to stay on the current page.")){c.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"});e()}else{c.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"});if(h){j=true;a.history.forward()}else a.location.hash="editor";g.Drafts.bindUnloadMessage()}}else e()}function o(){d.isInEditPage()?a.location.hash!=="#editor"&&l():e()}function k(){j?j=false:d.isInEditPage()?l():e()}function m(a,
b){return function(){n.every(b,function(a){return a()})&&a()}}var h=!!a.history.pushState,j=false,f=a.location.href,p=[d.filterPreviewHashChange],q=[d.filterPreviewNavigationEvent];c.bind("rte-quick-edit-enable-handlers",function(){a.location.hash==="#editor"&&b("#editPageLink").click()});return function(){i();if(h){b(a).bind("popstate",m(k,q));b(a).bind("rte-quick-edit-push-state",i)}else{b(a).bind("hashchange",m(o,p));b(a).bind("rte-quick-edit-push-hash",i)}}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/view-content/pushed-navigation",function(b){require("ajs").toInit(function(){setTimeout(b,0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-trigger', location = 'node_modules/@atlassian/aui/src/js/aui/trigger.js' */
("undefined"===typeof window?global:window).__50e2876f514ad7c8f1fee05297cde9e2=function(){function e(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){if(a.isEnabled()){var c=document.getElementById(a.getAttribute("aria-controls"));c&&c.message&&c.message(b)}}"use strict";var g=e(__307d3e18fd611f85395c67cddeb1fe24),h=e(__574ac67f906effeb9d8ec2753b23cf28),f=e(__c1ce1f1e3e613f564fc234ff043570f1);(0,f.default)("data-aui-trigger",{type:f.default.type.ATTRIBUTE,events:{click:function(a,b){var c=
b.target,c=(0,g.default)(c).closest("a[href]",a);c.length&&c[0]!==a||(d(a,b),b.preventDefault())},mouseenter:function(a,b){d(a,b)},mouseleave:function(a,b){d(a,b)},focus:function(a,b){d(a,b)},blur:function(a,b){d(a,b)}},prototype:{disable:function(){this.setAttribute("aria-disabled","true")},enable:function(){this.setAttribute("aria-disabled","false")},isEnabled:function(){return"true"!==this.getAttribute("aria-disabled")}}});(0,h.default)("aui/trigger");return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-trigger', location = 'src/soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.trigger.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '" ' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '" aria-controls="' + soy.$$escapeHtml(opt_data.menu.id) + '" aria-haspopup="true" role="button"' + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '') + (((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex || (! opt_data.extraAttributes.href || ! opt_data.extraAttributes.tabindex))) ? ' tabindex="0"' : '') + ' data-aui-trigger' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + ((! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + '>';
};
if (goog.DEBUG) {
  aui.trigger.trigger.soyTemplateName = 'aui.trigger.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-attributes', location = 'node_modules/@atlassian/aui/src/js/aui/internal/attributes.js' */
("undefined"===typeof window?global:window).__29fa312a51517f20df339a1900640e1d=function(){function d(a){return null!==a}function e(a,b,c){c?a.setAttribute(b,""):a.removeAttribute(b)}function f(a,b){var c=function(a){return a.toLowerCase()===b.toLowerCase()},d=null===b,e=!d&&!a.values.filter(c).length;return d?a.hasOwnProperty("missingDefault")?a.missingDefault:null:e?a.hasOwnProperty("invalidDefault")?a.invalidDefault:a.hasOwnProperty("missingDefault")?a.missingDefault:null:a.values.length?a.values.filter(c)[0]:
null}function g(a,b,c){a.setAttribute(b.attribute,c)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.computeBooleanValue=d;b.setBooleanAttribute=e;b.computeEnumValue=f;b.setEnumAttribute=g;b.default={computeBooleanValue:d,setBooleanAttribute:e,computeEnumValue:f,setEnumAttribute:g};return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-enforcer', location = 'node_modules/@atlassian/aui/src/js/aui/internal/enforcer.js' */
("undefined"===typeof window?global:window).__8339408c10b0a9052af9f3aad7b3a4e8=function(){var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d;var a=__cf890abdf040e0993fb71f2f839bc972;if(a&&a.__esModule)d=a;else{var b={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);b.default=a;d=b}c.default=function(a){function c(b){return e(function(){return a.hasAttribute(b)},b+" wasn't defined")}function b(d){if(!c(d,a))return!1;var f=a.getAttribute(d);
return e(function(){return document.getElementById(f)},'an element with id set to "'+f+'" was not found')}function e(b,c){return!b()?(a?d.error(c,a):d.error(c),!1):!0}return{attributeExists:c,refersTo:b,satisfiesRules:e,ariaControls:function(){return b("aria-controls")},ariaOwns:function(){return b("aria-owns")}}};return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-inline-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/inline-dialog2.js' */
("undefined"===typeof window?global:window).__2883f62e804d6ae6a52910b6c4a55520=function(){function c(a){return a&&a.__esModule?a:{"default":a}}function l(a,b){var d=document.querySelector('[aria-controls="'+a.id+'"]');d&&b(d)}function n(a){a=a.target;(0,e.default)(a).set("mouse-inside",!0);a.message({type:"mouseenter"})}function o(a){a=a.target;(0,e.default)(a).set("mouse-inside",!1);a.message({type:"mouseleave"})}function m(a){(0,e.default)(a).set("mouse-inside",void 0);a.removeEventListener("mouseenter",
n);a.removeEventListener("mouseleave",o);"hover"===a.respondsTo&&((0,e.default)(a).set("mouse-inside",!1),a.addEventListener("mouseenter",n),a.addEventListener("mouseleave",o))}function j(a){var b=!a.hasAttribute("aria-hidden"),d=a.hasAttribute("open");if(b||a.open!==d)d?((0,e.default)(a).set("is-processing-show",!0),(0,f.default)(a).show(),(0,f.default)(a).isVisible()?l(a,function(b){a._auiAlignment||(a._auiAlignment=new p.default(a,b));a._auiAlignment.enable();b.setAttribute("aria-expanded","true")}):
a.open=!1,(0,e.default)(a).set("is-processing-show",!1)):((0,f.default)(a).hide(),(0,f.default)(a).isVisible()?a.open=!0:l(a,function(b){a._auiAlignment||(a._auiAlignment=new p.default(a,b));a._auiAlignment.disable();b.setAttribute("aria-expanded","false")}))}var k={};"use strict";Object.defineProperty(k,"__esModule",{value:!0});var q=c(__307d3e18fd611f85395c67cddeb1fe24),p=c(__f420c577506564c314d7d5d82088641c),r=c(__574ac67f906effeb9d8ec2753b23cf28),g=c(__29fa312a51517f20df339a1900640e1d),s=c(__8339408c10b0a9052af9f3aad7b3a4e8),
t=c(__4d02fe17b8e885a34493e34af3d145dd),f=c(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),h=c(__c1ce1f1e3e613f564fc234ff043570f1),e=c(__fd7d82ce22cd33cac1609667ce8040f9),u={click:function(a){if(a.open){if(!(0,f.default)(a).isPersistent())a.open=!1}else a.open=!0},mouseenter:function(a){a.open||(a.open=!0);a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout()},mouseleave:function(a){if(!(0,f.default)(a).isPersistent()&&a.open){a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout();var b=setTimeout(function(){if(!(0,
e.default)(a).get("mouse-inside"))a.open=!1},1E3);a._clearMouseleaveTimeout=function(){clearTimeout(b);a._clearMouseleaveTimeout=null}}},focus:function(a){a.open||(a.open=!0)},blur:function(a){if(!(0,f.default)(a).isPersistent()&&a.open)a.open=!1}},i={attribute:"responds-to",values:["toggle","hover"],missingDefault:"toggle",invalidDefault:"toggle"},h=(0,h.default)("aui-inline-dialog",{prototype:{get open(){return(0,f.default)(this).isVisible()},set open(a){g.default.setBooleanAttribute(this,"open",
a);j(this)},get persistent(){return this.hasAttribute("persistent")},set persistent(a){g.default.setBooleanAttribute(this,"persistent",a)},get respondsTo(){return g.default.computeEnumValue(i,this.getAttribute(i.attribute))},set respondsTo(a){var b=this.respondsTo;g.default.setEnumAttribute(this,i,a);b!==this.respondsTo&&m(this)},message:function(a){var b={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]}[this.respondsTo];if(b&&-1<b.indexOf(a.type))u[a.type](this,a);return this}},
created:function(a){(0,e.default)(a).set("is-processing-show",!1);l(a,function(b){b.setAttribute("aria-expanded",a.open);b.setAttribute("aria-haspopup","true")})},attributes:{"aria-hidden":function(a,b){if("true"===b.newValue){var d=document.querySelector('[aria-controls="'+a.id+'"]');d&&d.setAttribute("aria-expanded","false")}g.default.setBooleanAttribute(a,"open","false"===b.newValue)},open:function(a){document.body.contains(a)&&j(a)},"responds-to":function(a,b){var d=g.default.computeEnumValue(i,
b.oldValue),c=g.default.computeEnumValue(i,b.newValue);d!==c&&m(a)}},attached:function(a){(0,s.default)(a).attributeExists("id");a.hasAttribute("open")?(0,e.default)(a).get("is-processing-show")||j(a):j(a);m(a)},detached:function(a){a._auiAlignment&&a._auiAlignment.destroy()},template:function(a){var b=(0,q.default)('<div class="aui-inline-dialog-contents"></div>').append(a.childNodes);(0,q.default)(a).addClass("aui-layer").html(b)}});(0,r.default)("aui/inline-dialog2",h);(0,t.default)("InlineDialog2",
h);k.default=h;return k=k["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = 'src/soy/inline-dialog2.soy' */
// This file was automatically generated from inline-dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.inlineDialog2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.inlineDialog2 == 'undefined') { aui.inlineDialog2 = {}; }


aui.inlineDialog2.inlineDialog2 = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.alignment) ? ' alignment="' + soy.$$escapeHtml(opt_data.alignment) + '"' : '') + ((opt_data.open) ? ' open' : '') + ((opt_data.persistent) ? ' persistent' : '') + ((opt_data.respondsTo) ? ' responds-to="' + soy.$$escapeHtml(opt_data.respondsTo) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  aui.inlineDialog2.inlineDialog2.soyTemplateName = 'aui.inlineDialog2.inlineDialog2';
}


aui.inlineDialog2.trigger = function(opt_data, opt_ignored) {
  return '' + aui.trigger.trigger(soy.$$augmentMap(opt_data, {showIcon: opt_data.showIcon ? opt_data.showIcon : false}));
};
if (goog.DEBUG) {
  aui.inlineDialog2.trigger.soyTemplateName = 'aui.inlineDialog2.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview-support.js' */
define("cp/confluence/preview-support",["ajs"],function(b){var g=function(i){i.bridgeId=""+a(window);var h=window.location.origin;if(!h){h=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}window.parent.postMessage(i,h)};var d=function(h){var i=h.frameElement&&h.frameElement.getAttribute("name");return i&&i==="fallback-mode-iframe"};var a=function(h){return h.frameElement&&h.frameElement.getAttribute("data-bridge-id")};var f=function(){var h=c.SELECTOR_STRINGS.IMAGE+", "+c.SELECTOR_STRINGS.LINK_IMAGE+", "+c.SELECTOR_STRINGS.EXTERNAL_IMAGE;if(c.isPDFSupported()){h+=", "+c.SELECTOR_STRINGS.PDF+", "+c.SELECTOR_STRINGS.LINK_PDF}return h};var e=function(){return c.SELECTOR_STRINGS.IMAGE+", "+c.SELECTOR_STRINGS.EXTERNAL_IMAGE+", "+c.SELECTOR_STRINGS.FILE+", "+c.SELECTOR_STRINGS.LINK_FILE+", "+c.SELECTOR_STRINGS.ATTACHMENT_MACRO};var c={SELECTOR_STRINGS:{IMAGE:"img.confluence-embedded-image[data-linked-resource-id]",EXTERNAL_IMAGE:"img.confluence-embedded-image.confluence-external-resource",PDF:"a.confluence-embedded-file[data-nice-type='PDF Document']",LINK_IMAGE:"a[data-linked-resource-type='attachment'][data-nice-type='Image']",LINK_PDF:"a[data-linked-resource-type='attachment'][data-nice-type='PDF Document']",FILE:"a.confluence-embedded-file",LINK_FILE:"a[data-linked-resource-type='attachment']",FILE_OVERLAY:"span.confluence-embedded-file-wrapper .overlay",ATTACHMENT_MACRO:".plugin_attachments_container a.previewAttachmentLink"},VIEW_MODE:{FULL:"full",COMMENT:"comment",SIMPLE:"simple"},isPDFSupported:function(){return b.DarkFeatures.isEnabled("pdf-preview")},getFileSelectorString:function(){if(b.DarkFeatures.isEnabled("previews.trigger-all-file-types")){return e()}else{return f()}},sendPreviewerToParent:function(j,i,h,k){g({type:"openPreviewOnParent",files:j,viewMode:i,fileQuery:h,analyticsSource:k})},autoShowAnnotationsOnParent:function(){g({type:"autoShowAnnotationsOnParent"})},isFallbackModeIframe:window.top!==window.self&&d(window)};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview.js' */
define("cp/confluence/preview",["underscore","jquery","cp/confluence/preview-support","ajs","confluence/jsUri"],function(k,e,f,i,b){var j,l;e(document).ready(g);function g(){var o=e(f.getFileSelectorString());o.off("click.fb");e(document.body).off("click.filePreviews");e(document.body).on("click.filePreviews",f.getFileSelectorString(),n);e(document.body).on("click.filePreviews",f.SELECTOR_STRINGS.FILE_OVERLAY,h);e(window).on("popstate",function(){if(!l&&i.DarkFeatures.isEnabled("previews.sharing.pushstate")){a()}});a()}function n(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey&&!e(this).parent().closest("a, #draft-changes-dialog, #cp-annotations").length){o.preventDefault();m(this,e(o.currentTarget).data("preview-view-mode"))}}function h(p){p.preventDefault();var o=e(p.target);var q=o.closest("span.confluence-embedded-file-wrapper");m(q.find(f.SELECTOR_STRINGS.IMAGE+","+f.SELECTOR_STRINGS.FILE),undefined,undefined,o.closest(".comment-count-overlay").length>0)}function m(q,r,o,x){if(!l){var s="confluence-previews-css";var p="media-viewer";WRM.require("wr!com.atlassian.confluence.plugins.confluence-previews:"+s);var y=e.Deferred(),u=y.promise();var t=setInterval(function(){for(var B=0;B<document.styleSheets.length;B++){var C=document.styleSheets[B];if(C.href&&(C.href.indexOf(s)!==-1||C.href.indexOf(p)!==-1)){w();return}}},100);var w=function(){y.resolve();clearInterval(t)};var A=i.Meta.get("static-resource-url-prefix");var z="com.atlassian.confluence.plugins.confluence-previews:mediaviewer-chunks";var v=A+"/download/resources/"+z+"/";l=e.when(WRM.require(["wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-js","wrc!media-viewer"]),u);l.done(function(){j=require("cp/confluence/file-preview-loader");d(q,r,o,x);i.bind("reset-file-list.filePreviews",j.resetPreviewFileList)});if(!f.isFallbackModeIframe){Confluence.PageLoadingIndicator(e("body")).showUntilResolved(l,"We were unable to load the file previewer")}}else{l.done(k.partial(d,q,r,o,x))}return l}var d=function(q,p,s,t){var o=e("#content");var r=e(q).closest(".comment,.cq-content,.ic-content");if(!p){if(!(o.hasClass("page")||o.hasClass("blogpost"))){p=f.VIEW_MODE.SIMPLE}else{if(r.length){p=f.VIEW_MODE.COMMENT}}}if(p===f.VIEW_MODE.COMMENT){j.showPreviewerForComment(q,r,p,t)}else{if(p===f.VIEW_MODE.SIMPLE){j.showPreviewerForSingleFile(q,p,s)}else{p=f.VIEW_MODE.FULL;j.showPreviewer(undefined,q,p,t)}}};function a(){if(c()){var q=new b(window.location.href);var p=window.history.pushState&&i.DarkFeatures.isEnabled("previews.sharing.pushstate");if(q.getQueryParamValue("preview")&&!p){var r="#!/preview"+q.getQueryParamValue("preview");var o=decodeURIComponent(q.deleteQueryParam("preview").setAnchor(r).toString());if(window.history.replaceState){window.history.replaceState({},"",o)}else{window.location=o}}else{if(q.anchor().indexOf("!/preview")===0&&p){var o;if(q.getQueryParamValue("preview")){o=q.setAnchor("")}else{o=q.addQueryParam("preview",q.anchor().substr("!/preview".length,q.anchor().length)).setAnchor("")}window.history.replaceState({},"",o)}}m()}}function c(){var o=new b(window.location.href);return i.DarkFeatures.isEnabled("previews.sharing")&&(o.getQueryParamValue("preview")||(o.anchor()&&o.anchor().indexOf("!/preview")===0))}return{loadConfluencePreviews:m}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/jquery-previewer.js' */
require(["cp/confluence/preview","jquery"],function(b,a){a.fn.previewer=function(c){if(!a(this).length){return this}var d=a.extend({},c);return this.each(function(){var f=a(this);var e=f.closest("li");var g=d.src||f.attr("data-image-src")||f.attr("src");if(g){f.click(function(j){var i={src:g,type:d.type,thumbnail:g,title:d.title||e.attr("data-file-name")||g,id:e.attr("data-attachment-id"),ownerId:e.attr("data-owner-id")};var h=b.loadConfluencePreviews([i],d.viewMode||"simple",d.from||"custom");d.zindex&&h.done(function(){a(".cp-container").css({"z-index":d.zindex})})})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(f){var d="x-atlassian-mau-ignore";var e=XMLHttpRequest.prototype.send;var b=window.fetch;var g=XMLHttpRequest.prototype.open;var a=false;var i=Object.create(null);var h=new RegExp("^(?:[a-z]+:)?//","i");var c=function(j){var k=document.createElement("a");k.href=j;return k.hostname};return{install:function(){if(!a&&f.supported){XMLHttpRequest.prototype.open=function(k,j){this._url=j;return g.apply(this,arguments)};XMLHttpRequest.prototype.send=function(){var j=h.test(this._url)?c(this._url) in i:true;if(f.isHidden()&&j){this.setRequestHeader(d,f.isHidden())}e.apply(this,arguments)};if(b){window.fetch=function(j,m){var k=m||{};var l=k.headers;if(f.isHidden()){k.headers=(l)?new Headers(l):new Headers();k.headers.append(d,f.isHidden())}return b.call(this,j,k)}}a=true}},uninstall:function(){if(a){XMLHttpRequest.prototype.send=e;if(b){window.fetch=b}}a=false},addHost:function(j){i[j]=true}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/atlassian-analytics.js' */
(function(d){var p=AJS.$.ajax;var k="atlassian-analytics";var i=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var o=null;var l=null;var f=null;var q="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(y){var x=Math.random()*16|0,w=y=="x"?x:(x&3|8);return w.toString(16)});var s=function(){var w="unknown";if(document.body.id=="jira"){w="jira"}else{if(document.body.id=="com-atlassian-confluence"){w="confluence"}}l=k+"."+w;f=l+".lock"};var e=function(){if(store.get(f)){return false}store.set(f,q);return(store.get(f)===q)};var t=function(){store.set(f,null)};var h=function(){var x=[],z,A,w,y;if(AJS.EventQueue.length==0){return}x=store.get(l)||x;for(w=0,y=AJS.EventQueue.length;w<y;++w){A=AJS.EventQueue[w];if(A.name){z={name:A.name,properties:A.properties,time:A.time||0};x.push(z)}}AJS.EventQueue.length=0;store.set(l,x)};var u=0;var a=function(w){return Math.min(5000*Math.pow(2,w),5*60*1000)};var g=function(){var z;function x(){setTimeout(g,a(u=0))}function w(){setTimeout(g,a(++u))}if(!e()){return x()}h();z=store.get(l);if(!z||!z.length){t();return x()}store.remove(l);t();if(!n(z)){return x()}var A=new Date().getTime();for(var y=0;y<z.length;y++){if(z[y].time>0){z[y].timeDelta=z[y].time-A}else{z[y].timeDelta=y-z.length}delete z[y].time}o=p({type:"POST",url:i+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(z),contentType:"application/json",dataType:"json"});o.fail(function(){AJS.EventQueue.concat(z);h();w()});o.done(function(){x()})};var n=function(y){for(var x=y.length-1;x>=0;x--){var A="";var z=y[x];var w=z.properties;if(typeof z.name==="undefined"){A="you must provide a name for the event."}else{if(typeof w!=="undefined"&&w!==null){if(w.constructor!==Object){A="properties must be an object with key value pairs."}else{b(w)}}}if(A!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+A+"\nEvent: "+JSON.stringify(z));y.splice(x,1)}}return y.length};var b=function(y){for(var x in y){if(y.hasOwnProperty(x)){var w=y[x];if(c(w)&&j(w)){}else{if(c(w)&&w.toString){y[x]=w.toString()}else{y[x]=""}}}}};function c(w){return typeof w!=="undefined"&&w!==null}function j(w){return typeof w==="number"||typeof w==="string"||typeof w==="boolean"}var m=function(){if(o&&!(o.state()==="resolved"||o.state()==="rejected")){o.abort()}};AJS.EventQueue=AJS.EventQueue||[];var r=Array.prototype.push;AJS.EventQueue.push=function(w){w.time=new Date().getTime();r.call(AJS.EventQueue,w)};AJS.toInit(function(){s();setTimeout(g,500);v()});d(window).unload(function(){m();h()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(w,x){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:w,properties:x})}};AJS.bind("analytics",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});AJS.bind("analyticsEvent",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});var v=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var x=AJS.$(":contains(Enable Atlassian analytics)");if(x.size()>0){var w=x[x.size()-2];if(w){w.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: 'Other applications', content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){var b=false;a.AdminShortcuts=(function(){var d=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var c=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{renderLoading:function(){var e=AJS.$(navlinks.templates.appswitcher.loading());a.ApplicationHeader.Cog.getDropdown().append(e)},render:function(){if(!AJS.$("#nl-remote-admin-section").length&&!b){a.AdminShortcuts.renderLoading();b=true;d().done(function(f){f=_.reject(f,function(g){return g.local===true});if(f.length){var e=navlinks.templates.adminshortcuts.section({links:f});a.ApplicationHeader.Cog.getDropdown().append(e);c()}}).always(function(){b=false;a.ApplicationHeader.Cog.getDropdown().find(".app-switcher-loading").remove()})}}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts.js' */
AJS.$(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.ApplicationHeader.Cog.getDropdown().on("aui-dropdown2-show",function(){NavLinks.AdminShortcuts.render()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css.js' */
/**
 * Look up addonKey+moduleKey from WRM data, then add Link tag onto page.
 * Browser will request for additional css from AddonStyleServlet
 */
define("ac/confluence/style/link-style-css", [], function () {
    "use strict";
    var URI_MAX_LENGTH = 2000;
    var STYLE_KEYS = [
        'com.atlassian.plugins.atlassian-connect-plugin:featured-macro-css-resources.featuredMacroCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources.iconsCssData'
        //Add more keys here...
    ];

    function getIconStyleUrl() {
        return AJS.contextPath() + "/plugins/servlet/ac/css-style?";
    }

    function addLinkTag(params) {
        var uri = getIconStyleUrl() + params;
        var linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = uri;
        linkTag.type = "text/css";

        document.head.appendChild(linkTag);
    }

    function appendParam(urlBuffer, paramsString) {
        return urlBuffer + (urlBuffer.length == 0 ? "" : "&") + paramsString;
    }

    return {
        addLinkTags : function() {
            var urlBuffer = "";
            for (var key in STYLE_KEYS) {
                var addonToModules = WRM.data.claim(STYLE_KEYS[key]);

                for (var addon in addonToModules) {
                    var modules = addonToModules[addon];
                    var paramsString = addon + "=" + modules.join();
                    if (appendParam(urlBuffer, paramsString).length > (URI_MAX_LENGTH - getIconStyleUrl().length)) {
                        //add on link tag using the current urlBuffer
                        addLinkTag(urlBuffer);
                        //reset urlBuffer
                        urlBuffer = "";
                    }
                    urlBuffer = appendParam(urlBuffer, paramsString);
                }
            }

            if (urlBuffer.length > 0) {
                addLinkTag(urlBuffer);
            }
        }
    };
});







}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css-init.js' */
/**
 * js to execute link-icon-css
 */
require(["ac/confluence/style/link-style-css"], function(linkIconCss) {
    linkIconCss.addLinkTags();
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dialog-options-v3', location = 'js/iframe/host/dialog-options.js' */
(function(){window._AP=window._AP||{};
function b(){var d="com.atlassian.plugins.atlassian-connect-plugin:dialog-options.data";
return WRM.data.claim(d)
}var c=b();
for(var a in c){if(c.hasOwnProperty(a)){window._AP[a]=c[a]
}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-core', location = '/js/core/connect-host-amd.js' */
(function(a,b){if(typeof define==="function"&&define.amd){define("connect-host",[],b)
}else{if(!window._AP){window._AP={}
}AJS.$.extend(_AP,b())
}}(this,function(){if(!window._AP){window._AP={}
}define("_dollar",[],function(){return AJS.$
});
define("host/_util",[],function(){return{escapeSelector:function(c){if(!c){throw new Error("No selector to escape")
}return c.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")
},addonToNs:function(d,c){if(d.length===0||c.length===0){throw new Error("addon_key and module_key must be specified")
}return d+"__"+c
}}
});
((typeof _AP!=="undefined")?define:AP.define)("_events",["_dollar"],function(h){var d=window,f=(d.AJS&&d.AJS.log)||(d.console&&d.console.log)||(function(){});
function c(j,i){this._key=j;
this._origin=i;
this._events={};
this._any=[]
}var g=c.prototype;
g.on=function(i,j){if(i&&j){this._listeners(i).push(j)
}return this
};
g.once=function(j,k){var i=this;
var l=function(){i.off(j,l);
k.apply(null,arguments)
};
this.on(j,l);
return this
};
g.onAny=function(i){this._any.push(i);
return this
};
g.off=function(j,m){var l=this._events[j];
if(l){var k=h.inArray(m,l);
if(k>=0){l.splice(k,1)
}if(l.length===0){delete this._events[j]
}}return this
};
g.offAll=function(i){if(i){delete this._events[i]
}else{this._events={}
}return this
};
g.offAny=function(l){var k=this._any;
var j=h.inArray(l,k);
if(j>=0){k.splice(j,1)
}return this
};
g.emit=function(i){return this._emitEvent(this._event.apply(this,arguments))
};
g._event=function(i){return{name:i,args:[].slice.call(arguments,1),attrs:{},source:{key:this._key,origin:this._origin}}
};
g._emitEvent=function(j){var i=j.args.concat(j);
e(this._listeners(j.name),i);
e(this._any,[j.name].concat(i));
return this
};
g._listeners=function(i){return this._events[i]=this._events[i]||[]
};
function e(l,j){for(var k=0;
k<l.length;
++k){try{l[k].apply(null,j)
}catch(m){f(m.stack||m.message||m)
}}}return{Events:c}
});
((typeof _AP!=="undefined")?define:AP.define)("_base64",["_dollar"],function(g){function k(){this.buffer=[]
}k.prototype.append=function e(l){this.buffer.push(l);
return this
};
k.prototype.toString=function d(){return this.buffer.join("")
};
var h={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var l=new k();
var m=new f(n);
while(m.moveNext()){var u=m.current;
m.moveNext();
var s=m.current;
m.moveNext();
var q=m.current;
var t=u>>2;
var r=((u&3)<<4)|(s>>4);
var p=((s&15)<<2)|(q>>6);
var o=q&63;
if(isNaN(s)){p=o=64
}else{if(isNaN(q)){o=64
}}l.append(this.codex.charAt(t)+this.codex.charAt(r)+this.codex.charAt(p)+this.codex.charAt(o))
}return l.toString()
},decode:function(n){var m=new k();
var q=new j(n);
while(q.moveNext()){var l=q.current;
if(l<128){m.append(String.fromCharCode(l))
}else{if((l>191)&&(l<224)){q.moveNext();
var p=q.current;
m.append(String.fromCharCode(((l&31)<<6)|(p&63)))
}else{q.moveNext();
var p=q.current;
q.moveNext();
var o=q.current;
m.append(String.fromCharCode(((l&15)<<12)|((p&63)<<6)|(o&63)))
}}}return m.toString()
}};
function f(l){this._input=l;
this._index=-1;
this._buffer=[]
}f.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();
return true
}else{if(this._index>=(this._input.length-1)){this.current=Number.NaN;
return false
}else{var l=this._input.charCodeAt(++this._index);
if((l==13)&&(this._input.charCodeAt(this._index+1)==10)){l=10;
this._index+=2
}if(l<128){this.current=l
}else{if((l>127)&&(l<2048)){this.current=(l>>6)|192;
this._buffer.push((l&63)|128)
}else{this.current=(l>>12)|224;
this._buffer.push(((l>>6)&63)|128);
this._buffer.push((l&63)|128)
}}return true
}}}};
function j(l){this._input=l;
this._index=-1;
this._buffer=[]
}j.prototype={current:64,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();
return true
}else{if(this._index>=(this._input.length-1)){this.current=64;
return false
}else{var r=h.codex.indexOf(this._input.charAt(++this._index));
var q=h.codex.indexOf(this._input.charAt(++this._index));
var p=h.codex.indexOf(this._input.charAt(++this._index));
var o=h.codex.indexOf(this._input.charAt(++this._index));
var n=(r<<2)|(q>>4);
var m=((q&15)<<4)|(p>>2);
var l=((p&3)<<6)|o;
this.current=n;
if(p!=64&&m!=0){this._buffer.push(m)
}if(o!=64&&l!=0){this._buffer.push(l)
}return true
}}}};
function i(l){return h.encode(l)
}function c(l){return h.decode(l)
}return{encode:i,decode:c}
});
((typeof _AP!=="undefined")?define:AP.define)("_jwt",["_base64"],function(d){function f(g){return c(g)["iss"]
}function c(j){if(null===j||""===j){throw ("Invalid JWT: must be neither null nor empty-string.")
}var i=j.indexOf(".");
var h=j.indexOf(".",i+1);
if(i<0||h<=i){throw ('Invalid JWT: must contain 2 period (".") characters.')
}var k=j.substring(i+1,h);
if(null===k||""===k){throw ("Invalid JWT: encoded claims must be neither null nor empty-string.")
}var g=d.decode(k);
return JSON.parse(g)
}function e(j,h){if(h===undefined){h=60
}var k=c(j),g=0,i=Math.floor(Date.now()/1000);
if(k&&k.exp){g=k.exp
}if((g-i)<h){return true
}return false
}return{parseJwtIssuer:f,parseJwtClaims:c,isJwtExpired:e}
});
/*!
 * jsUri
 * https://github.com/derek-watson/jsUri
 *
 * Copyright 2013, Derek Watson
 * Released under the MIT license.
 *
 * Includes parseUri regular expressions
 * http://blog.stevenlevithan.com/archives/parseuri
 * Copyright 2007, Steven Levithan
 * Released under the MIT license.
 */
((typeof _AP!=="undefined")?define:AP.define)("_uri",[],function(){var f={starts_with_slashes:/^\/+/,ends_with_slashes:/\/+$/,pluses:/\+/g,query_separator:/[&;]/,uri_parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};
if(!Array.prototype.forEach){Array.prototype.forEach=function(o,i){var l,j;
if(this==null){throw new TypeError(" this is null or not defined")
}var n=Object(this);
var h=n.length>>>0;
if(typeof o!=="function"){throw new TypeError(o+" is not a function")
}if(arguments.length>1){l=i
}j=0;
while(j<h){var m;
if(j in n){m=n[j];
o.call(l,m,j,n)
}j++
}}
}function g(h){if(h){h=h.toString().replace(f.pluses,"%20");
h=decodeURIComponent(h)
}return h
}function e(k){var l=f.uri_parser;
var i=["source","protocol","authority","userInfo","user","password","host","port","isColonUri","relative","path","directory","file","query","anchor"];
var h=l.exec(k||"");
var j={};
i.forEach(function(n,m){j[n]=h[m]||""
});
return j
}function c(t){var s,h,m,o,r,u,q;
var j=[];
if(typeof(t)==="undefined"||t===null||t===""){return j
}if(t.indexOf("?")===0){t=t.substring(1)
}h=t.toString().split(f.query_separator);
for(s=0,q=h.length;
s<q;
s++){m=h[s];
o=m.indexOf("=");
if(o!==0){r=g(m.substring(0,o));
u=g(m.substring(o+1));
j.push(o===-1?[m,null]:[r,u])
}}return j
}function d(h){this.uriParts=e(h);
this.queryPairs=c(this.uriParts.query);
this.hasAuthorityPrefixUserPref=null
}["protocol","userInfo","host","port","path","anchor"].forEach(function(h){d.prototype[h]=function(i){if(typeof i!=="undefined"){this.uriParts[h]=i
}return this.uriParts[h]
}
});
d.prototype.hasAuthorityPrefix=function(h){if(typeof h!=="undefined"){this.hasAuthorityPrefixUserPref=h
}if(this.hasAuthorityPrefixUserPref===null){return(this.uriParts.source.indexOf("//")!==-1)
}else{return this.hasAuthorityPrefixUserPref
}};
d.prototype.isColonUri=function(h){if(typeof h!=="undefined"){this.uriParts.isColonUri=!!h
}else{return !!this.uriParts.isColonUri
}};
d.prototype.query=function(n){var k="",j,m,h;
if(typeof n!=="undefined"){this.queryPairs=c(n)
}for(j=0,h=this.queryPairs.length;
j<h;
j++){m=this.queryPairs[j];
if(k.length>0){k+="&"
}if(m[1]===null){k+=m[0]
}else{k+=m[0];
k+="=";
if(typeof m[1]!=="undefined"){k+=encodeURIComponent(m[1])
}}}return k.length>0?"?"+k:k
};
d.prototype.getQueryParamValue=function(k){var m,j,h;
for(j=0,h=this.queryPairs.length;
j<h;
j++){m=this.queryPairs[j];
if(k===m[0]){return m[1]
}}};
d.prototype.getQueryParamValues=function(m){var h=[],k,n,j;
for(k=0,j=this.queryPairs.length;
k<j;
k++){n=this.queryPairs[k];
if(m===n[0]){h.push(n[1])
}}return h
};
d.prototype.deleteQueryParam=function(n,q){var h=[],m,p,k,o,j;
for(m=0,j=this.queryPairs.length;
m<j;
m++){p=this.queryPairs[m];
k=g(p[0])===g(n);
o=p[1]===q;
if((arguments.length===1&&!k)||(arguments.length===2&&(!k||!o))){h.push(p)
}}this.queryPairs=h;
return this
};
d.prototype.addQueryParam=function(i,j,h){if(arguments.length===3&&h!==-1){h=Math.min(h,this.queryPairs.length);
this.queryPairs.splice(h,0,[i,j])
}else{if(arguments.length>0){this.queryPairs.push([i,j])
}}return this
};
d.prototype.hasQueryParam=function(k){var j,h=this.queryPairs.length;
for(j=0;
j<h;
j++){if(this.queryPairs[j][0]==k){return true
}}return false
};
d.prototype.replaceQueryParam=function(n,l,j){var k=-1,h=this.queryPairs.length,m,o;
if(arguments.length===3){for(m=0;
m<h;
m++){o=this.queryPairs[m];
if(g(o[0])===g(n)&&decodeURIComponent(o[1])===g(j)){k=m;
break
}}if(k>=0){this.deleteQueryParam(n,g(j)).addQueryParam(n,l,k)
}}else{for(m=0;
m<h;
m++){o=this.queryPairs[m];
if(g(o[0])===g(n)){k=m;
break
}}this.deleteQueryParam(n);
this.addQueryParam(n,l,k)
}return this
};
["protocol","hasAuthorityPrefix","isColonUri","userInfo","host","port","path","query","anchor"].forEach(function(h){var i="set"+h.charAt(0).toUpperCase()+h.slice(1);
d.prototype[i]=function(j){this[h](j);
return this
}
});
d.prototype.scheme=function(){var h="";
if(this.protocol()){h+=this.protocol();
if(this.protocol().indexOf(":")!==this.protocol().length-1){h+=":"
}h+="//"
}else{if(this.hasAuthorityPrefix()&&this.host()){h+="//"
}}return h
};
d.prototype.origin=function(){var h=this.scheme();
if(this.userInfo()&&this.host()){h+=this.userInfo();
if(this.userInfo().indexOf("@")!==this.userInfo().length-1){h+="@"
}}if(this.host()){h+=this.host();
if(this.port()||(this.path()&&this.path().substr(0,1).match(/[0-9]/))){h+=":"+this.port()
}}return h
};
d.prototype.addTrailingSlash=function(){var h=this.path()||"";
if(h.substr(-1)!=="/"){this.path(h+"/")
}return this
};
d.prototype.toString=function(){var i,h=this.origin();
if(this.isColonUri()){if(this.path()){h+=":"+this.path()
}}else{if(this.path()){i=this.path();
if(!(f.ends_with_slashes.test(h)||f.starts_with_slashes.test(i))){h+="/"
}else{if(h){h.replace(f.ends_with_slashes,"/")
}i=i.replace(f.starts_with_slashes,"/")
}h+=i
}else{if(this.host()&&(this.query().toString()||this.anchor())){h+="/"
}}}if(this.query().toString()){h+=this.query().toString()
}if(this.anchor()){if(this.anchor().indexOf("#")!==0){h+="#"
}h+=this.anchor()
}return h
};
d.prototype.clone=function(){return new d(this.toString())
};
return{init:d}
});
((typeof _AP!=="undefined")?define:AP.define)("_ui-params",["_dollar","_base64","_uri"],function(e,c,d){return{encode:function(f){if(f){return c.encode(JSON.stringify(f))
}},fromUrl:function(f){var f=new d.init(f),g=f.getQueryParamValue("ui-params");
return this.decode(g)
},fromWindowName:function(f,h){f=f||window;
var g=this.decode(f.name);
if(!h){return g
}return(g)?g[h]:undefined
},decode:function(h){var g={};
if(h&&h.length>0){try{g=JSON.parse(c.decode(h))
}catch(f){if(console&&console.log){console.log("Cannot decode passed ui params",h)
}}}return g
}}
});
((typeof _AP!=="undefined")?define:AP.define)("_create-iframe",["_ui-params","_dispatch-custom-event"],function(e,d){return function c(g){if(!g.container){throw new Error("config.container must be defined")
}var h=document.createElement("iframe"),j="easyXDM_"+g.container+"_provider",f="";
if(g.uiParams){f=e.encode(g.uiParams)
}h.id=j;
h.name=f;
h.frameBorder="0";
Object.keys(g.props).forEach(function(k){h[k]=g.props[k]
});
h.setAttribute("rel","nofollow");
h.className="ap-iframe";
var i=document.getElementById(g.container);
if(i){i.appendChild(h)
}d(h,"ra.iframe.create");
h.src=g.remote;
return h
}
});
((typeof _AP!=="undefined")?define:AP.define)("_dispatch-custom-event",[],function(){return function c(g,d,f){var e;
if(window.CustomEvent&&typeof window.CustomEvent==="function"){e=new CustomEvent(d,{detail:f})
}else{e=document.createEvent("CustomEvent");
e.initCustomEvent(d,true,true,f)
}return g.dispatchEvent(e)
}
});
var b=["_events","_jwt","_uri","_create-iframe"];
((typeof _AP!=="undefined")?define:AP.define)("_xdm",b,function(d,f,h,c){var g=0;
function i(k){var n,m=k.uiParams||{},j=m.addonNestingLevel||1;
n=window;
for(var l=0;
l<j;
l++){n=n.parent
}return n
}function e(H,O,T){var r,L,m,N,V,M,R,w,B,t=window.location.toString(),x=T.local||{},D=T.remote||[],F=C(t);
var l=function(){var W={};
return{add:function(Z,Y,X){W[Z]={done:Y||null,fail:X||null,async:!!Y}
},invoke:function(Z,Y,X){var aa;
if(W[Y]){if(W[Y][Z]){W[Y][Z](X);
aa=true
}else{aa=!W[Y].async&&Z!=="fail"
}delete W[Y]
}return aa
}}
}();
var K=!/xdm_e/.test(t);
var j,s;
if(O.addonHostBridge){j=i(O)
}else{s=c(O);
j=s.contentWindow
}if(K||s!==undefined){M="IsNotUsed";
R=O.remoteKey;
B=R;
w=R;
m=(O.remoteOrigin?O.remoteOrigin:C(O.remote)).toLowerCase();
N=O.channel;
V={isHost:true,iframe:s,uiParams:O.uiParams,isActive:function(){if(!K&&j!==window.top){return document.contains(r.iframe)
}if(K&&s){return H.contains(document.documentElement,r.iframe)
}return true
}};
if(K){V.destroy=function(){window.clearTimeout(r.timeout);
y();
if(r.iframe){H(r.iframe).remove();
delete r.iframe
}};
if(s){H(s).on("ra.iframe.destroy",V.destroy)
}}}else{M="local";
B=p(t,"xdm_deprecated_addon_key_do_not_use");
w=M;
m=p(t,"xdm_e").toLowerCase();
N=p(t,"xdm_c");
V={isHost:false,isActive:function(){return true
}}
}L=w+"|"+(g+=1);
r=H.extend({id:L,remoteOrigin:m,channel:N,addonKey:w},V);
function E(W,aa,ab){try{var ad=j,Y=m;
if(typeof ab==="undefined"||ab==null){return ad.postMessage({c:N,i:W,k:B,t:aa,m:ab},Y)
}var X=ab.n;
if(ab.a){ab.a=J(ab.a)
}if(X==="registerInnerIframe"){ad=i(O);
Y="*"
}var ac=["resize","sizeToParent","init"];
if(ac.indexOf(X)>-1){ad=window.parent;
Y="*"
}return ad.postMessage({c:N,i:W,k:B,t:aa,m:ab},Y)
}catch(Z){q(A(Z))
}}function U(Z,aa,Y,X){var W=Math.floor(Math.random()*1000000000).toString(16);
l.add(W,Y,X);
E(W,"request",{n:Z,a:aa})
}function P(W,X){E(W,"done",X)
}function Q(W,X){E(W,"fail",X)
}function k(W){try{var ah=W.data,ac=ah.i,ad=ah.c,aj=ah.t,ai=ah.m,X;
if(typeof ai==="object"&&ai!=null){X=ai.n
}if(W.source!==j&&W.origin.toLowerCase()===m&&ad===N){j=W.source
}if(X!=="registerInnerIframe"&&((W.source!==j&&W.source!==window.parent&&W.source!==window.top)||W.origin.toLowerCase()!==m||ad!==N)){return
}if(aj==="request"){var af=ai.a,ag=x[X],ab,Z,aa;
if(ag){ab=function(ak){P(ac,ak)
};
Z=function(ak){Q(ac,ak)
};
aa=(af?af.length:0)<ag.length;
var Y=x;
if(r.isHost===true){Y=r;
if(Y.analytics){Y.analytics.trackBridgeMethod(X)
}}else{Y.isHost=false
}try{if(aa){ag.apply(Y,af.concat([ab,Z]))
}else{ab(ag.apply(Y,af))
}}catch(ae){Z(A(ae));
o(ae)
}}else{z("Unhandled request:",ah)
}}else{if(aj==="done"||aj==="fail"){if(!l.invoke(aj,ac,ai)){z("Unhandled response:",aj,ac,ai)
}}}}catch(ae){q(A(ae))
}}function u(W){return function(){var Z=[].slice.call(arguments),Y,X;
function aa(){if(H.isFunction(Z[Z.length-1])){return Z.pop()
}}X=aa();
Y=aa();
if(!Y){Y=X;
X=undefined
}U(W,Z,Y,X)
}
}H.each(D,function(X,W){if(typeof X==="number"){X=W
}r[X]=u(X)
});
var v=r.events=new d.Events(M,F);
v.onAny(function(){var X=arguments[arguments.length-1];
var Y=X.trace=X.trace||{};
var W=r.id+"|xdm";
if((r.isHost&&!Y[W]&&X.source.channel!==r.id)||(!r.isHost&&X.source.key===M)){Y[W]=true;
X=H.extend({},X);
delete X.trace;
z("Forwarding "+(r.isHost?"host":"addon")+" event:",X);
U("_event",[X])
}});
x._event=function(W){delete W.trace;
if(this.isHost){W.source={channel:this.id||L,key:this.addonKey,origin:this.remoteOrigin||m}
}z("Receiving as "+(this.isHost?"host":"addon")+" event:",W);
v._emitEvent(W)
};
function G(W){if(r.isActive()){k(W.originalEvent?W.originalEvent:W)
}else{y()
}}function n(){H(window).bind("message",G)
}function y(){H(window).unbind("message",G)
}function p(X,W){return new h.init(X).getQueryParamValue(W)
}function C(W){return new h.init(W).origin()
}function I(X,Y){var W=new h.init(X);
H.each(Y,function(aa,Z){W.addQueryParam(aa,Z)
});
return W.toString()
}function A(W){return W.message||W.toString()
}function z(){if(e.debug){q.apply(window,["DEBUG:"].concat([].slice.call(arguments)))
}}function q(){var W=H.log||(window.AJS&&window.AJS.log);
if(W){W.apply(window,arguments)
}}function o(){var W=(window.AJS&&window.AJS.error);
if(W){W.apply(window,arguments)
}}function J(W){var X=[];
return(function Y(ac){var aa,Z,ad;
if(typeof ac==="object"&&ac!==null&&!(ac instanceof Boolean)&&!(ac instanceof String)&&!(ac instanceof Date)&&!(ac instanceof RegExp)&&!(ac instanceof Blob)&&!(ac instanceof File)&&!(ac instanceof FileList)&&!(ac instanceof Error)&&!(ac instanceof Node)){if(X.indexOf(ac)>-1){q("XDM: A circular reference was detected and removed from the message.");
return null
}X.push(ac);
if(Array.isArray(ac)){ad=[];
for(aa=0;
aa<ac.length;
aa++){ad[aa]=Y(ac[aa])
}}else{ad={};
for(Z in ac){if(ac.hasOwnProperty(Z)){var ab=Y(ac[Z]);
if(ab!==null){ad[Z]=ab
}}}}return ad
}if(typeof ac==="function"){q("XDM: A function was detected and removed from the message.");
return null
}if(ac instanceof Error){q("XDM: An Error object was detected and removed from the message.");
return{}
}if(ac instanceof Node){q("XDM: A Node object was detected and removed from the message.");
return{}
}return ac
}(W))
}n();
var S=this;
r.bridgeReceive=function(){return k.apply(S,arguments)
};
return r
}return e
});
define("host/jwt-keepalive",["_dollar","_jwt"],function(e,c){function d(f){var g=e.Deferred(function(i){var h=window._AP.contentResolver.resolveByParameters({addonKey:f.addonKey,moduleKey:f.moduleKey,productContext:f.productContext,uiParams:f.uiParams,width:f.width,height:f.height,classifier:"json"});
h.done(function(k){var j=JSON.parse(k);
i.resolve(j.src)
})
});
return g
}return{updateUrl:d,isExpired:c.isJwtExpired}
});
define("_rpc",["_dollar","_xdm","host/jwt-keepalive","_uri","host/_util","_create-iframe"],function(e,h,f,d,i,n){var o=e.each,m=e.extend,g=e.isFunction,j={},c=[],k={},l=[];
return{extend:function(p){if(g(p)){p=p()
}m(j,p.apis);
m(k,p.internals);
c=c.concat(p.stubs||[]);
var q=p.init;
if(g(q)){l.push(q)
}return p.apis
},init:function(r,q,u){var p=new d.init(q.remote),s=p.getQueryParamValue("jwt"),t;
r=r||{};
u=u||{remote:c,local:e.extend({},k)};
o(j,function(v){c.push(v)
});
if(s&&f.isExpired(s)){t=f.updateUrl({addonKey:q.remoteKey,moduleKey:r.moduleKey,productContext:r.productContext||{},uiParams:q.uiParams,width:q.props.width,height:q.props.height})
}e.when(t).always(function(w){if(w){q.remote=w
}e("#"+i.escapeSelector(q.container)).find("iframe").trigger("ra.iframe.destroy");
var v=new h(e,q,u);
o(l,function(x,z){try{z(m({},r),v)
}catch(y){console.log(y)
}})
})
},initInner:function(q,p){o(j,function(s){c.push(s)
});
p.addonHostBridge=true;
var r=new h(e,p,{remote:c,local:e.extend({},k)});
o(l,function(s,u){try{u(m({},q),r)
}catch(t){console.log(t)
}});
return r
}}
});
define("resize",["_dollar","_rpc"],function(c,d){d.extend(function(){return{init:function(f,g){g.resize=AJS.debounce(function e(k,i,h){k(this.iframe).css({width:i,height:h});
var j=k(this.iframe).closest(".ap-container");
j.trigger("resized",{width:i,height:h})
})
},internals:{resize:function(f,e){if(!this.uiParams.isDialog){this.resize(c,f,e)
}},sizeToParent:AJS.debounce(function(f){var e=function(h){var g;
if(f){c(".ac-content-page #footer").css({display:"none"});
c(".ac-content-page").css({overflow:"hidden !important"});
g=c(document).height()-c("#header > nav").outerHeight()
}else{g=c(document).height()-c("#header > nav").outerHeight()-c("#footer").outerHeight()-20
}c(h).css({width:"100%",height:g+"px"})
};
if(this.uiParams.isGeneral){c(this.iframe).addClass("full-size-general-page");
c(window).on("resize",function(){e(this.iframe)
});
e(this.iframe)
}else{c(this.iframe).addClass("full-size-general-page-fail")
}})}}
})
});
require("resize");
define("host/_status_helper",["_dollar"],function(g){var d={loading:{descriptionHtml:'<div class="small-spinner"></div>Loading add-on...'},"load-timeout":{descriptionHtml:'<div class="small-spinner"></div>Add-on is not responding. Wait or <a href="#" class="ap-btn-cancel">cancel</a>?'},"load-error":{descriptionHtml:"Add-on failed to load."}};
function f(l){if(l.data("loadingStatusTimer")){clearTimeout(l.data("loadingStatusTimer"));
l.removeData("loadingStatusTimer")
}l.find(".ap-status").addClass("hidden")
}function h(m,l){f(m);
m.closest(".ap-container").removeClass("hidden");
m.find(".ap-stats").removeClass("hidden");
m.find(".ap-"+l).removeClass("hidden");
setTimeout(function(){var n=m.find(".small-spinner",".ap-"+l);
if(n.length&&n.spin){n.spin({zIndex:"1"})
}},10)
}function i(l){f(l)
}function e(m,l){if(!l){h(m,"loading")
}else{var n=setTimeout(h.bind(null,m,"loading"),l);
m.data("loadingStatusTimer",n)
}}function j(l){h(l,"load-timeout")
}function k(l){h(l,"load-error")
}function c(){var n,m=g('<div class="ap-stats" />');
for(n in d){var l=g('<div class="ap-'+n+' ap-status hidden" />');
l.append("<small>"+d[n].descriptionHtml+"</small>");
m.append(l)
}return m
}return{createStatusMessages:c,showLoadingStatus:e,showloadTimeoutStatus:j,showLoadErrorStatus:k,showLoadedStatus:i}
});
require(["_dollar","_rpc","host/_status_helper"],function(d,e,c){e.extend(function(f){return{init:function(i,h){var g=d(h.iframe).closest(".ap-container");
c.showLoadingStatus(g,0);
g.find(".ap-load-timeout a.ap-btn-cancel").click(function(){c.showLoadErrorStatus(g);
if(h.analytics&&h.analytics.iframePerformance){h.analytics.iframePerformance.cancel()
}});
h.timeout=setTimeout(function(){h.timeout=null;
c.showloadTimeoutStatus(g);
if(h.isActive()&&h.analytics&&h.analytics.iframePerformance){h.analytics.iframePerformance.timeout()
}},20000)
},internals:{init:function(){if(this.analytics&&this.analytics.iframePerformance){this.analytics.iframePerformance.end()
}var g=d(this.iframe).closest(".ap-container");
c.showLoadedStatus(g);
clearTimeout(this.timeout);
g.find(".ap-content").addClass("iframe-init")
}}}
})
});
define("host/content",["_dollar","_uri","host/_util"],function(i,f,j){function e(q,p){var o=q.attr("class");
var n=o?o.match(p):null;
return i.isArray(n)?n[1]:false
}function l(m){return e(m,/ap-plugin-key-([^\s]*)/)
}function d(m){return e(m,/ap-module-key-([^\s]*)/)
}function k(m){return e(m,/ap-target-key-([^\s]*)/)
}function h(p){var n=d(p),m=l(p),o=p.hasClass("ap-inline-dialog")?"inlineDialog":"dialog";
return window._AP[o+"Options"][j.addonToNs(m,n)]||{}
}function c(m){var n=new f.init(m).queryPairs;
var o={};
i.each(n,function(p,q){o[q[0]]=q[1]
});
return o
}function g(o,m,p){function n(u){u.preventDefault();
var t=i(u.target).closest(m),q=t.attr("href"),s=new f.init(q),r={bindTo:t,defaultHeader:t.text(),width:s.getQueryParamValue("width"),height:s.getQueryParamValue("height"),cp:s.getQueryParamValue("cp"),key:l(t),productContext:c(q)};
p(q,r,u.type)
}i(window.document).on(o,m,n)
}return{eventHandler:g,getOptionsForWebItem:h,getWebItemPluginKey:l,getWebItemModuleKey:d,getWebItemTargetKey:k}
});
(function(o){var c=(function(){function p(q){this.options=q
}p.prototype.toString=function(){if(JSON&&JSON.stringify){return JSON.stringify(this.options)
}else{return this.options
}};
return p
}());
var k=(function(){function v(y){return Object.prototype.toString.apply(y)==="[object Array]"
}function s(y){return Object.prototype.toString.apply(y)==="[object String]"
}function x(y){return Object.prototype.toString.apply(y)==="[object Number]"
}function u(y){return Object.prototype.toString.apply(y)==="[object Boolean]"
}function t(z,B){var y="",C=true,A;
for(A=0;
A<z.length;
A+=1){if(C){C=false
}else{y+=B
}y+=z[A]
}return y
}function q(z,B){var y=[],A=0;
for(;
A<z.length;
A+=1){y.push(B(z[A]))
}return y
}function r(A,z){var y=[],B=0;
for(;
B<A.length;
B+=1){if(z(A[B])){y.push(A[B])
}}return y
}function p(z){if(typeof z!=="object"||z===null){return z
}Object.freeze(z);
var A,y;
for(y in z){if(z.hasOwnProperty(y)){A=z[y];
if(typeof A==="object"){w(A)
}}}return z
}function w(y){if(typeof Object.freeze==="function"){return p(y)
}return y
}return{isArray:v,isString:s,isNumber:x,isBoolean:u,join:t,map:q,filter:r,deepFreeze:w}
}());
var l=(function(){function r(s){return(s>="a"&&s<="z")||((s>="A"&&s<="Z"))
}function p(s){return s>="0"&&s<="9"
}function q(s){return p(s)||(s>="a"&&s<="f")||(s>="A"&&s<="F")
}return{isAlpha:r,isDigit:p,isHexDigit:q}
}());
var h=(function(){var p={encode:function(v){return unescape(encodeURIComponent(v))
},numBytes:function(v){if(v<=127){return 1
}else{if(194<=v&&v<=223){return 2
}else{if(224<=v&&v<=239){return 3
}else{if(240<=v&&v<=244){return 4
}}}}return 0
},isValidFollowingCharCode:function(v){return 128<=v&&v<=191
}};
function u(z){var v="",y=p.encode(z),w,x;
for(x=0;
x<y.length;
x+=1){w=y.charCodeAt(x);
v+="%"+(w<16?"0":"")+w.toString(16).toUpperCase()
}return v
}function t(v,w){return v.charAt(w)==="%"&&l.isHexDigit(v.charAt(w+1))&&l.isHexDigit(v.charAt(w+2))
}function s(v,w){return parseInt(v.substr(w,2),16)
}function r(x){if(!t(x,0)){return false
}var y=s(x,1);
var w=p.numBytes(y);
if(w===0){return false
}for(var v=1;
v<w;
v+=1){if(!t(x,3*v)||!p.isValidFollowingCharCode(s(x,3*v+1))){return false
}}return true
}function q(A,z){var y=A.charAt(z);
if(!t(A,z)){return y
}var x=s(A,z+1);
var w=p.numBytes(x);
if(w===0){return y
}for(var v=1;
v<w;
v+=1){if(!t(A,z+3*v)||!p.isValidFollowingCharCode(s(A,z+3*v+1))){return y
}}return A.substr(z,3*w)
}return{encodeCharacter:u,isPctEncoded:r,pctCharAt:q}
}());
var d=(function(){function p(s){return l.isAlpha(s)||l.isDigit(s)||s==="_"||h.isPctEncoded(s)
}function q(s){return l.isAlpha(s)||l.isDigit(s)||s==="-"||s==="."||s==="_"||s==="~"
}function r(s){return s===":"||s==="/"||s==="?"||s==="#"||s==="["||s==="]"||s==="@"||s==="!"||s==="$"||s==="&"||s==="("||s===")"||s==="*"||s==="+"||s===","||s===";"||s==="="||s==="'"
}return{isVarchar:p,isUnreserved:q,isReserved:r}
}());
var f=(function(){function q(w,x){var t="",u,v="";
if(typeof w==="number"||typeof w==="boolean"){w=w.toString()
}for(u=0;
u<w.length;
u+=v.length){v=w.charAt(u);
t+=d.isUnreserved(v)||(x&&d.isReserved(v))?v:h.encodeCharacter(v)
}return t
}function p(t){return q(t,true)
}function s(v,t){var u=h.pctCharAt(v,t);
if(u.length>1){return u
}else{return d.isReserved(u)||d.isUnreserved(u)?u:h.encodeCharacter(u)
}}function r(w){var t="",u,v="";
for(u=0;
u<w.length;
u+=v.length){v=h.pctCharAt(w,u);
if(v.length>1){t+=v
}else{t+=d.isReserved(v)||d.isUnreserved(v)?v:h.encodeCharacter(v)
}}return t
}return{encode:q,encodePassReserved:p,encodeLiteral:r,encodeLiteralCharacter:s}
}());
var j=(function(){var p={};
function q(r){p[r]={symbol:r,separator:(r==="?")?"&":(r===""||r==="+"||r==="#")?",":r,named:r===";"||r==="&"||r==="?",ifEmpty:(r==="&"||r==="?")?"=":"",first:(r==="+")?"":r,encode:(r==="+"||r==="#")?f.encodePassReserved:f.encode,toString:function(){return this.symbol
}}
}q("");
q("+");
q("#");
q(".");
q("/");
q(";");
q("?");
q("&");
return{valueOf:function(r){if(p[r]){return p[r]
}if("=,!@|".indexOf(r)>=0){return null
}return p[""]
}}
}());
function n(q){var p;
if(q===null||q===undefined){return false
}if(k.isArray(q)){return q.length>0
}if(typeof q==="string"||typeof q==="number"||typeof q==="boolean"){return true
}for(p in q){if(q.hasOwnProperty(p)&&n(q[p])){return true
}}return false
}var e=(function(){function p(q){this.literal=f.encodeLiteral(q)
}p.prototype.expand=function(){return this.literal
};
p.prototype.toString=p.prototype.expand;
return p
}());
var i=(function(){function q(y){var u,z=[],A=null,v=null,s=null,x,w="";
function t(){var B=y.substring(v,x);
if(B.length===0){throw new c({expressionText:y,message:"a varname must be specified",position:x})
}A={varname:B,exploded:false,maxLength:null};
v=null
}function r(){if(s===x){throw new c({expressionText:y,message:"after a ':' you have to specify the length",position:x})
}A.maxLength=parseInt(y.substring(s,x),10);
s=null
}u=(function(B){var C=j.valueOf(B);
if(C===null){throw new c({expressionText:y,message:"illegal use of reserved operator",position:x,operator:B})
}return C
}(y.charAt(0)));
x=u.symbol.length;
v=x;
for(;
x<y.length;
x+=w.length){w=h.pctCharAt(y,x);
if(v!==null){if(w==="."){if(v===x){throw new c({expressionText:y,message:"a varname MUST NOT start with a dot",position:x})
}continue
}if(d.isVarchar(w)){continue
}t()
}if(s!==null){if(x===s&&w==="0"){throw new c({expressionText:y,message:"A :prefix must not start with digit 0",position:x})
}if(l.isDigit(w)){if(x-s>=4){throw new c({expressionText:y,message:"A :prefix must have max 4 digits",position:x})
}continue
}r()
}if(w===":"){if(A.maxLength!==null){throw new c({expressionText:y,message:"only one :maxLength is allowed per varspec",position:x})
}if(A.exploded){throw new c({expressionText:y,message:"an exploeded varspec MUST NOT be varspeced",position:x})
}s=x+1;
continue
}if(w==="*"){if(A===null){throw new c({expressionText:y,message:"exploded without varspec",position:x})
}if(A.exploded){throw new c({expressionText:y,message:"exploded twice",position:x})
}if(A.maxLength){throw new c({expressionText:y,message:"an explode (*) MUST NOT follow to a prefix",position:x})
}A.exploded=true;
continue
}if(w===","){z.push(A);
A=null;
v=x+1;
continue
}throw new c({expressionText:y,message:"illegal character",character:w,position:x})
}if(v!==null){t()
}if(s!==null){r()
}z.push(A);
return new g(y,u,z)
}function p(x){var s,v,w=[],u=null,t=0;
for(s=0;
s<x.length;
s+=1){v=x.charAt(s);
if(t!==null){if(v==="}"){throw new c({templateText:x,message:"unopened brace closed",position:s})
}if(v==="{"){if(t<s){w.push(new e(x.substring(t,s)))
}t=null;
u=s
}continue
}if(u!==null){if(v==="{"){throw new c({templateText:x,message:"brace already opened",position:s})
}if(v==="}"){if(u+1===s){throw new c({templateText:x,message:"empty braces",position:u})
}try{w.push(q(x.substring(u+1,s)))
}catch(r){if(r.prototype===c.prototype){throw new c({templateText:x,message:r.options.message,position:u+r.options.position,details:r.options})
}throw r
}u=null;
t=s+1
}continue
}throw new Error("reached unreachable code")
}if(u!==null){throw new c({templateText:x,message:"unclosed brace",position:u})
}if(t<x.length){w.push(new e(x.substr(t)))
}return new m(x,w)
}return p
}());
var g=(function(){function s(y){return(JSON&&JSON.stringify)?JSON.stringify(y):y
}function v(z){if(!n(z)){return true
}if(k.isString(z)){return z===""
}if(k.isNumber(z)||k.isBoolean(z)){return false
}if(k.isArray(z)){return z.length===0
}for(var y in z){if(z.hasOwnProperty(y)){return false
}}return true
}function q(A){var y=[],z;
for(z in A){if(A.hasOwnProperty(z)){y.push({name:z,value:A[z]})
}}return y
}function t(A,y,z){this.templateText=A;
this.operator=y;
this.varspecs=z
}t.prototype.toString=function(){return this.templateText
};
function u(z,A,B){var y="";
B=B.toString();
if(A.named){y+=f.encodeLiteral(z.varname);
if(B===""){y+=A.ifEmpty;
return y
}y+="="
}if(z.maxLength!==null){B=B.substr(0,z.maxLength)
}y+=A.encode(B);
return y
}function p(y){return n(y.value)
}function x(A,B,C){var z=[],y="";
if(B.named){y+=f.encodeLiteral(A.varname);
if(v(C)){y+=B.ifEmpty;
return y
}y+="="
}if(k.isArray(C)){z=C;
z=k.filter(z,n);
z=k.map(z,B.encode);
y+=k.join(z,",")
}else{z=q(C);
z=k.filter(z,p);
z=k.map(z,function(D){return B.encode(D.name)+","+B.encode(D.value)
});
y+=k.join(z,",")
}return y
}function r(A,B,C){var z=k.isArray(C),y=[];
if(z){y=C;
y=k.filter(y,n);
y=k.map(y,function(E){var D=f.encodeLiteral(A.varname);
if(v(E)){D+=B.ifEmpty
}else{D+="="+B.encode(E)
}return D
})
}else{y=q(C);
y=k.filter(y,p);
y=k.map(y,function(D){var E=f.encodeLiteral(D.name);
if(v(D.value)){E+=B.ifEmpty
}else{E+="="+B.encode(D.value)
}return E
})
}return k.join(y,B.separator)
}function w(A,B){var z=[],y="";
if(k.isArray(B)){z=B;
z=k.filter(z,n);
z=k.map(z,A.encode);
y+=k.join(z,A.separator)
}else{z=q(B);
z=k.filter(z,function(C){return n(C.value)
});
z=k.map(z,function(C){return A.encode(C.name)+"="+A.encode(C.value)
});
y+=k.join(z,A.separator)
}return y
}t.prototype.expand=function(F){var B=[],C,z,E,y,D=false,A=this.operator;
for(C=0;
C<this.varspecs.length;
C+=1){z=this.varspecs[C];
E=F[z.varname];
if(E===null||E===undefined){continue
}if(z.exploded){D=true
}y=k.isArray(E);
if(typeof E==="string"||typeof E==="number"||typeof E==="boolean"){B.push(u(z,A,E))
}else{if(z.maxLength&&n(E)){throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+s(E))
}else{if(!z.exploded){if(A.named||!v(E)){B.push(x(z,A,E))
}}else{if(n(E)){if(A.named){B.push(r(z,A,E))
}else{B.push(w(A,E))
}}}}}}if(B.length===0){return""
}else{return A.first+k.join(B,A.separator)
}};
return t
}());
var m=(function(){function p(r,q){this.templateText=r;
this.expressions=q;
k.deepFreeze(this)
}p.prototype.toString=function(){return this.templateText
};
p.prototype.expand=function(s){var r,q="";
for(r=0;
r<this.expressions.length;
r+=1){q+=this.expressions[r].expand(s)
}return q
};
p.parse=i;
p.UriTemplateError=c;
return p
}());
o(m)
}(function(c){if(typeof define==="function"){define("_uritemplate",[],function(){return c
})
}else{if(typeof window!=="undefined"){window.UriTemplate=c
}else{global.UriTemplate=c
}}}));
define("host/_addons",["_dollar","_rpc"],function(d,e){var c={};
e.extend(function(){var f={_emitEvent:function(g){if(g.source.key in c){d.each(c[g.source.key],function(i,h){h.bus._emitEvent(g)
})
}else{AJS.trigger("analyticsEvent",{name:"emitToAll.unknownSource",data:g.source})
}},remove:function(h){var g=c[h.addonKey][h.id];
if(g){g.bus.offAny(g.listener)
}delete c[h.addonKey][h.id];
return this
},init:function(g,i){if(!c[i.addonKey]){c[i.addonKey]={}
}var h=c[i.addonKey][i.id]={bus:i.events,listener:function(){var k=arguments[arguments.length-1];
var l=k.trace=k.trace||{};
var j=i.id+"|addon";
if(!l[j]){l[j]=true;
f._emitEvent(k)
}}};
h.bus.onAny(h.listener);
h.bus.on("ra.iframe.destroy",function(){f.remove(i)
})
}};
return f
});
return{emitToAll:function(f){d.each(c,function(g,h){d.each(h,function(j,i){i.bus.emit(f)
})
})
}}
});
require(["_dollar","_rpc","_ui-params"],function(e,g,f){var m=[];
var h=0;
var c=[];
function k(r){var p=r.key;
var q=r.origin.toLowerCase();
var t=e.extend({},r);
var s="channel-"+t.ns;
t.ns=t.ns+"-"+p+"-"+h++;
t.key=p;
t.origin=q;
t.uiParams=f.fromUrl(window.location.toString())||{};
t.uiParams.isGeneral=!!t.general;
if(t.productCtx&&!t.productContext){t.productContext=JSON.parse(t.productCtx)
}var u="embedded-"+t.ns;
var o={remote:t.src,remoteOrigin:t.origin,remoteKey:t.key,container:u,channel:s,props:{},uiParams:t.uiParams};
c.push({innerFrameOptions:t,xdmOptions:o,origin:t.origin})
}g.extend(function(){return{internals:{registerInnerIframe:function(o){k(o)
}}}
});
function l(o){return m.indexOf(o)>-1
}function d(o,p){return o&&_AP.addonOriginMap&&_AP.addonOriginMap[o]!==undefined&&_AP.addonOriginMap[o].toLowerCase()===p.toLowerCase()
}function i(){return[].slice.call(document.getElementsByTagName("iframe"))
}function j(p){p=p.originalEvent?p.originalEvent:p;
var v=p.data,o=p.source,w=p.origin,t=v.c,q=v.k;
if(o===window.top){return
}var r=i().filter(function(x){return x.contentWindow===o
}).length>0;
if(r){return
}if(l(t)){return
}if(!d(q,w)){return
}m.push(t);
var u=c.filter(function(x){return x&&x.xdmOptions&&x.xdmOptions.channel===t
})[0];
if(!u){return
}var s=g.initInner(u.innerFrameOptions,u.xdmOptions,o);
s.bridgeReceive(p)
}function n(){window.addEventListener("message",j)
}n()
});
define("analytics/analytics",["_dollar"],function(g){var d=["resize","init"];
var f=20000;
var i=100;
function h(){return window.performance&&window.performance.now?window.performance.now():new Date().getTime()
}function c(j){var k={};
this.addonKey=j.addonKey;
this.moduleKey=j.moduleKey;
this.iframePerformance={start:function(){k.startLoading=h()
},end:function(){var l=h()-k.startLoading;
e.track("iframe.performance.load",{addonKey:j.addonKey,moduleKey:j.moduleKey,value:l>f?"x":Math.ceil((l)/i)});
delete k.startLoading
},timeout:function(){e.track("iframe.performance.timeout",{addonKey:j.addonKey,moduleKey:j.moduleKey});
this.end()
},cancel:function(){e.track("iframe.performance.cancel",{addonKey:j.addonKey,moduleKey:j.moduleKey})
}}
}var e=c.prototype;
e.getKey=function(){return this.addonKey+":"+this.moduleKey
};
e.track=function(j,l){var k="connect.addon."+j;
if(AJS.Analytics){AJS.Analytics.triggerPrivacyPolicySafeEvent(k,l)
}else{if(AJS.trigger){AJS.trigger("analyticsEvent",{name:k,data:l})
}else{return false
}}return true
};
e.trackBridgeMethod=function(j){if(g.inArray(j,d)!==-1){return false
}this.track("bridge.invokemethod",{name:j,addonKey:this.addonKey,moduleKey:this.moduleKey})
};
return{get:function(j){return new c(j)
}}
});
(function(c){define("host/create",["_dollar","host/_util","_rpc","_ui-params","analytics/analytics"],function(i,d,k,h,e){var j=window.requestAnimationFrame||function(l){setTimeout(l,10)
};
function g(l){if(!l){throw new Error("ns undefined")
}return i("#embedded-"+d.escapeSelector(l))
}function f(n){if(typeof n.uiParams!=="object"){n.uiParams=h.fromUrl(n.src)||{}
}var o=n.ns=d.addonToNs(n.key,n.moduleKey);
var r="embedded-"+o,p="channel-"+o,m=n.w||"100%",q=n.h||"0";
n.uiParams.isGeneral=!!n.general;
var l={remote:n.src,remoteOrigin:n.origin,remoteKey:n.key,container:r,channel:p,props:{width:m,height:q},uiParams:n.uiParams};
if(n.productCtx&&!n.productContext){n.productContext=JSON.parse(n.productCtx)
}k.extend({init:function(t,s){s.analytics=e.get({addonKey:s.addonKey,moduleKey:o});
s.analytics.iframePerformance.start();
s.productContext=n.productContext
}});
k.init(n,l)
}return function(m){var o=0;
var n=d.addonToNs(m.key,m.moduleKey);
function l(){if(g(n).length===0&&o<10){setTimeout(function(){o++;
l()
},50);
return
}f(m)
}if(AJS.$.isReady){j(l)
}else{i(l)
}}
})
}(this));
var a=require("_rpc");
return{extend:a.extend,init:a.init,uiParams:require("_ui-params"),create:require("host/create"),_uriHelper:require("_uri"),_statusHelper:require("host/_status_helper"),_addons:require("host/_addons"),webItemHelper:require("host/content"),version:"3.2.11"}
}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:remote-condition', location = 'js/condition/remote.js' */
(function($, context){
  var hidden;

  function hide() {
    if (!hidden) {
      hidden = true;
      // Connect any Remotable Plugin hosted Web Items to a dialog that loads the appropriate IFrame Servlet,
      // look for jira issue tabs, and look for jira project tabs
      $(".remote-condition, #issue-tabs a[id$='-remote-condition'], .tabs a[id$='-remote-condition-panel']").each(function (i, el) {
        var el$ = $(el), parent$ = el$.parent();
        el$.addClass("hidden");
        if (parent$[0].tagName == "LI") {
          parent$.addClass("hidden");
        }
      });
    }
  }

  AJS.toInit(hide);

  context.RemoteConditions = {
    /**
     * Hides UI elements that are protected by remote conditions. These are all hacks hiding is supported
     * by the module types directly
     */
    hide: hide
  };

})(AJS.$, _AP);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:amd-module-shim', location = '/js/iframe/host/main.js' */
define("connect-host",function(){return _AP
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js', location = '/js/iframe/host/content-resolver.js' */
(function(g,c,h,d){function b(j,i){return AJS.contextPath()+"/plugins/servlet/ac/"+encodeURIComponent(j)+"/"+encodeURIComponent(i)
}function f(j){var i={};
c.keys(j).forEach(function(k){i["ac."+k]=j[k]
});
return i
}function e(k,i){var j={};
c.keys(k).forEach(function(l){if(i(l,k[l])){j[l]=k[l]
}});
return j
}var a={resolveByUrl:function(i){var j=jQuery.Deferred(function(k){k.resolve(i)
}).promise();
return j
},resolveByParameters:function(k){var j={"ui-params":h.encode(k.uiParams),"plugin-key":k.addonKey,"product-context":JSON.stringify(k.productContext),key:k.moduleKey,width:k.width||"100%",height:k.height||"100%",classifier:k.classifier||"raw"};
var l=k.uiParams.customData||{};
var i=e(l,function(m,n){if(c.isObject(n)){return false
}else{if(typeof n==="string"||n instanceof String){return n.length<255
}}return true
});
return g.ajax(b(k.addonKey,k.moduleKey),{dataType:"html",data:g.extend({},j,f(i)),type:"POST"})
}};
d._AP.contentResolver=a
}(AJS.$,window._,_AP.uiParams,this));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-cookie.js' */
(function(b,a){b("ac/cookie/main",[],function(){function c(d,e){if(!d||d.length===0){throw new Error("addon key must be defined on cookies")
}if(!e||e.length===0){throw new Error("Name must be defined")
}return d+"$$"+e
}return{saveCookie:function(d,f,g,e){a.Cookie.save(c(d,f),g,e)
},readCookie:function(d,e,g){var f=a.Cookie.read(c(d,e));
if(typeof g==="function"){g(f)
}},eraseCookie:function(d,e){a.Cookie.erase(c(d,e))
}}
})
})(define,AJS);
(function(a){a("ac/cookie",["ac/cookie/main","connect-host"],function(b,c){c.extend(function(){return{internals:{saveCookie:function(e,f,d){b.saveCookie(this.addonKey,e,f,d)
},readCookie:function(d,e){b.readCookie(this.addonKey,d,e)
},eraseCookie:function(d){b.eraseCookie(this.addonKey,d)
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-scroll-position.js' */
(function(b,a){b("ac/scrollPosition",["connect-host"],function(f){function d(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
}function c(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
}var e={getPosition:function(){if(this.uiParams.isGeneral){var h=this.iframe.getBoundingClientRect();
var i=h.top+d();
var g=h.left+c();
return{scrollY:window.scrollY-i,scrollX:window.scrollX-g,width:window.innerWidth,height:window.innerHeight}
}else{a.log("ScrollPosition is only available to page modules")
}}};
f.extend(function(){return{internals:e}
});
return e
})
})(define,AJS);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-env.js' */
(function(a){a("ac/env",["connect-host"],function(c){var b;
c.extend(function(){return{init:function(d){b=d
},internals:{getLocation:function(){return window.location.href
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-messages.js' */
(function(c,a,b){c("ac/messages/main",[],function(){var e="ac-message-container",f=["generic","error","warning","success","info","hint"];
function h(i){return i.search(/^ap\-message\-[0-9]+$/)==0
}function d(){var i=b("#"+e);
if(i.length<1){i=b('<div id="'+e+'" />').appendTo("body")
}return i
}function g(j){var l,k,n={},m=["closeable","fadeout","delay","duration","id"];
for(l in m){k=m[l];
if(k in j){n[k]=j[k]
}}return n
}return{showMessage:function(l,m,i,k){var j=d();
k=g(k);
b.extend(k,{title:m,body:a.escapeHtml(i)});
if(b.inArray(l,f)<0){throw"Invalid message type. Must be: "+f.join(", ")
}if(h(k.id)){a.messages[l](j,k);
j.css("margin-left","-"+j.innerWidth()/2+"px")
}},clearMessage:function(i){if(h(i)){b("#"+i).remove()
}},onClose:function(j,i){if(h(j)&&b.isFunction(i)){b(document).on("aui-message-close",function(l,k){if(k.attr("id")===j){i()
}})
}}}
})
})(define,AJS,AJS.$);
(function(a){a("ac/messages",["ac/messages/main","connect-host"],function(b,c){c.extend(function(){return{internals:{showMessage:function(f,g,d,e){return b.showMessage(f,g,d,e)
},clearMessage:function(d){return b.clearMessage(d)
},onClose:function(e,d){return b.onClose(e,d)
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-request.js' */
(function(c,a,b){c("ac/request",["connect-host"],function(j){var h=["status","statusText","responseText"],d=["Content-Type","ETag"],g=["If-Match","If-None-Match"],e=null;
function f(m,k,l){if(l._isBlob&&l.blob&&l.name){m.append(k,l.blob,l.name)
}else{m.append(k,l)
}return m
}function i(k){k.contentType=false;
k.processData=false;
if(k.data&&typeof k.data==="object"){var l=new FormData();
Object.keys(k.data).forEach(function(m){var n=k.data[m];
if(Array.isArray(n)){n.forEach(function(p,o){l=f(l,m+"["+o+"]",p)
})
}else{l=f(l,m,n)
}});
k.data=l
}else{throw new Error("For a Multipart request, data must to be an Object")
}k.headers["X-Atlassian-Token"]="no-check";
return k
}j.extend(function(){return{init:function(k){e=k.cp
},internals:{request:function(p,s,q){var k=e+p.url;
k=k.replace(/\/\.\.\//ig,"");
function r(u){var t={headers:{}};
b.each(h,function(x,w){t[w]=u[w]
});
b.each(d,function(x,w){t.headers[w]=u.getResponseHeader(w)
});
return t
}function o(t,v,u){s([t,v,r(u)])
}function m(u,v,t){q([r(u),v,t])
}var l={};
b.each(p.headers||{},function(u,t){l[u.toLowerCase()]=t
});
var n={url:k,type:p.type||"GET",data:p.data,dataType:"text",contentType:p.contentType,cache:(typeof p.cache!=="undefined")?!!p.cache:undefined,headers:{Accept:l.accept||"*/*","AP-Client-Key":this.addonKey}};
if(n.contentType==="multipart/form-data"){n=i(n)
}b.each(g,function(t,u){if(l[u.toLowerCase()]){n.headers[u]=l[u.toLowerCase()]
}});
if(p.experimental===true){n.headers["X-ExperimentalApi"]="opt-in"
}b.ajax(n).then(o,m)
}}}
})
})
})(define,AJS,AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-history.js' */
(function(a){a("ac/history/main",["connect-host"],function(i){var l,e="!",c=i._uriHelper;
function f(o){if(o===undefined||o===null){return""
}return o.toString().replace(new RegExp("^"+e),"")
}function m(o){if(o===undefined||o===null){throw"You must supply text to prefix"
}return e+f(o)
}function n(o,p){var q=new c.init(window.location.href),r=new c.init(window.location.href);
r.anchor(m(o));
if(r.anchor()!==q.anchor()){l=r.anchor();
if(p){window.location.replace("#"+r.anchor())
}else{window.location.assign("#"+r.anchor())
}return r.anchor()
}}function j(o){n(o)
}function h(o){n(o,true)
}function d(o){history.go(o)
}function g(q,o){var r=new c.init(q.newURL);
var p=new c.init(q.oldURL);
if((r.anchor()!==p.anchor())&&(l!==r.anchor())){o(b(q))
}l=null
}function b(o){return{newURL:f(new c.init(o.newURL).anchor()),oldURL:f(new c.init(o.oldURL).anchor())}
}function k(){var p=new c.init(window.location.href),o=f(p.anchor());
return o
}return{pushState:j,replaceState:h,go:d,hashChange:g,getState:k}
})
})(define);
(function(c,a,b){c("ac/history",["ac/history/main","connect-host"],function(d,e){e.extend(function(){return{init:function(g,f){if(g.uiParams.isGeneral){b(window).on("hashchange",function(h){d.hashChange(h.originalEvent,f.historyMessage)
})
}},internals:{historyPushState:function(f){if(this.uiParams.isGeneral){return d.pushState(f)
}else{a.log("History is only available to page modules")
}},historyReplaceState:function(f){if(this.uiParams.isGeneral){return d.replaceState(f)
}else{a.log("History is only available to page modules")
}},historyGo:function(f){if(this.uiParams.isGeneral){return d.go(f)
}else{a.log("History is only available to page modules")
}}},stubs:["historyMessage"]}
})
})
})(define,AJS,AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-dialog.js' */
define("host/_util",[],function(){return{escapeSelector:function(a){if(!a){throw new Error("No selector to escape")
}return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")
},addonToNs:function(b,a){if(b.length===0||a.length===0){throw new Error("addon_key and module_key must be specified")
}return b+"__"+a
}}
});
(function(b,a){b("ac/dialog/header-controls",[],function(){var c='<div class="header-title-container" class="aui-item expanded"><div><span class="header-title"></span></div></div><div class="header-control-panel" class="aui-item"></div>';
return{create:function(e){var d=a(c);
d.find(".header-title").text(e.header||"");
return{$el:d}
}}
})
})(define,AJS.$);
(function(b,a){b("ac/dialog/button",[],function(){function c(d){this.$el=a("<button />").text(d.text).addClass("aui-button aui-button-"+d.type).addClass(d.additionalClasses);
this.isEnabled=function(){return !(this.$el.attr("aria-disabled")==="true")
};
this.setEnabled=function(e){if(d.noDisable===true){return false
}this.$el.attr("aria-disabled",!e);
return true
};
this.isHidden=function(){return(this.$el.css("display")==="none")
};
this.setHidden=function(e){if(d.noHide===true){return false
}if(e){this.$el.hide()
}else{this.$el.show()
}return true
};
this.setEnabled(true);
this.click=function(e){if(e){this.$el.unbind("ra.dialog.click");
this.$el.bind("ra.dialog.click",e)
}else{this.dispatch(true)
}};
this.dispatch=function(e){var f=e?"done":"fail";
d.actions&&d.actions[f]&&d.actions[f]()
};
this.setText=function(e){if(e){this.$el.text(e)
}}
}return{button:c,submit:function(d){return new c({type:"primary",text:"Submit",additionalClasses:"ap-dialog-submit",actions:d})
},cancel:function(d){return new c({type:"link",text:"Cancel",noDisable:true,noHide:true,additionalClasses:"ap-dialog-cancel",actions:d})
}}
})
})(define,AJS.$);
(function(d,b,a,c){d("ac/dialog",["connect-host","ac/dialog/button","ac/dialog/header-controls"],function(t,e,r){var p=c(window);
var q=0;
var f=[];
var i;
var n;
var o;
function l(){return{submit:e.submit({done:g}),cancel:e.cancel({done:g})}
}var k=function(u){if(u.keyCode===27&&n&&n.hide){n.hide();
c(document).unbind("keydown",k)
}};
function j(u){var v=u.header||u.defaultHeader;
if(typeof v==="object"){v=v.value
}return v
}function s(C){var B,v=["ap-aui-dialog2"];
var y=C.size!=="fullscreen"&&!C.chrome;
if(y){v.push("ap-aui-dialog2-chromeless")
}var x=C.size;
if(x==="fullscreen"){x="maximum"
}B=c(aui.dialog.dialog2({id:C.id,titleText:j(C),titleId:C.titleId,size:x,extraClasses:v,removeOnHide:true,footerActionContent:true,modal:true}));
if(y){B.find("header, footer").remove()
}else{o.submit.setText(C.submitText);
o.cancel.setText(C.cancelText);
var u;
if(C.size==="fullscreen"){B.addClass("ap-header-controls");
var w=r.create(C);
var A=B.find("header");
A.addClass("aui-group").empty().append(w.$el);
u=A.find(".header-control-panel");
o.submit.$el.addClass("aui-icon aui-icon-small aui-iconfont-success");
o.cancel.$el.addClass("aui-icon aui-icon-small aui-iconfont-close-dialog")
}else{u=B.find(".aui-dialog2-footer-actions");
u.empty()
}u.append(o.submit.$el,o.cancel.$el)
}B.find(".aui-dialog2-content").append(i);
i.data("ra.dialog.buttons",o);
function z(D){if(D.isEnabled()){D.$el.trigger("ra.dialog.click",D.dispatch)
}}c.each(o,function(E,D){D.$el.click(function(){z(D)
})
});
return B
}function h(v,u){v.append('<div id="embedded-'+u.ns+'" class="ap-dialog-container ap-content" />')
}function m(w,u){if(typeof w==="string"){var v=w.indexOf("%")===w.length-1;
w=parseInt(w,10);
if(v){w=w/100*u
}}return w
}function g(){if(!n||f.length===0){throw Error("Can't close dialog: no dialogs are currently open")
}if(n.isClosing){return
}n.isClosing=true;
if(i){i.trigger("ra.iframe.destroy").removeData("ra.dialog.buttons").unbind();
i=null
}o=null;
n.hide();
var u=f.pop();
if(n!==u){throw Error("The dialog being closed must be the last dialog to be opened.")
}n=f[f.length-1];
if(n){i=n.$el.find(".ap-servlet-placeholder");
o=i.data("ra.dialog.buttons")
}}return{_getActiveDialog:function(){return n
},isCloseOnEscape:function(){return i&&i.data("ra.dialog.closeOnEscape")
},getButton:function(u){var v=i&&i.data("ra.dialog.buttons")||{};
return u?v[u]:v
},createButton:function(v,u){var w=new e.button({type:"secondary",text:v,additionalClasses:"ap-dialog-custom-button"});
n.$el.find(".aui-dialog2-footer-actions").prepend(w.$el);
o[v]=w;
w.$el.click(function(){if(w.isEnabled()){w.$el.trigger("ra.dialog.click",w.dispatch)
}});
return w
},create:function(y,x){var u="ap-"+y.ns;
f.forEach(function(B){if(B.$el.find("#"+u).length>0){throw new Error("Can't create dialog. A dialog is already open with namespace: "+y.ns)
}});
var w={width:"50%",height:"50%",closeOnEscape:true},v=y.id||"ap-dialog-"+(q+=1),A=c.extend({id:v},w,y,{dlg:1}),z;
if(A.width==="100%"&&A.height==="100%"){A.size="maximum"
}if(A.size==="maximum"&&typeof A.chrome==="undefined"){A.chrome=false
}i=c("<div />").addClass("ap-servlet-placeholder ap-container").attr("id",u).bind("ra.dialog.close",g);
o=l();
z=s(A);
z.find(".aui-dialog2-content").append(i);
if(y.size){A.w="100%";
A.h="100%"
}else{A.w=m(A.width,p.width());
A.h=m(A.height,p.height());
a.layer(z).changeSize(A.w,A.h);
z.removeClass("aui-dialog2-medium")
}n=a.dialog2(z);
f.push(n);
n.on("hide",g);
i.data("ra.dialog.closeOnEscape",A.closeOnEscape);
if(A.closeOnEscape){c(document).on("keydown",function(B){k(B)
})
}c.each(o,function(B,C){C.click(function(){C.dispatch(true)
})
});
h(i,A);
if(x!==false){i.append(t._statusHelper.createStatusMessages())
}if(y.src){_AP.create(A)
}z.on("ra.iframe.create","iframe",function(){this.focus()
});
n.show();
return n
},close:g}
})
})(define,require,AJS,AJS.$);
AJS.toInit(function(a){(function(c,b){if(typeof window._AP!=="undefined"){c(["ac/dialog"],function(d){_AP.Dialog=d
})
}})(require,AJS)
});
(function(b,a){b("ac/dialog/dialog-factory",["ac/dialog","host/_util"],function(d,c){return function(o,j,g){if(j.dialogModuleKey){var m=window._AP.dialogModules;
var e=m&&m[o.key];
var h=e&&e[j.dialogModuleKey];
if(h){j=a.extend({},h.options,j)
}}var n,f,l=a.extend({isDialog:1},o.uiParams,{customData:j.customData});
var k=j.chrome;
if(typeof k==="undefined"){k=o.chrome
}var i=d.create({id:o.id,key:o.key,moduleKey:o.moduleKey,ns:o.ns||c.addonToNs(o.key,o.moduleKey),chrome:k,header:j.header,width:j.width,height:j.height,size:j.size,submitText:j.submitText,cancelText:j.cancelText,closeOnEscape:j.closeOnEscape},false);
f=i.$el.find(".ap-dialog-container");
if(o.url){throw new Error("Cannot retrieve dialog content by URL")
}n=window._AP.contentResolver.resolveByParameters({addonKey:o.key,moduleKey:o.moduleKey,productContext:g,uiParams:l});
n.done(function(r){var p=a(r);
p.find(".ap-content").addClass("ap-dialog-container");
var q=a(document.getElementById(p.attr("id")));
if(q.length!==0){q.empty();
p.each(function(s){q.append(p[s])
})
}else{f.replaceWith(p)
}}).fail(function(t,p,q){var s=a("<p class='title' />").text("Unable to load add-on content. Please try again later.");
var r=p+(q?": "+q.toString():"");
f.html("<div class='aui-message error ap-aui-message'></div>");
f.find(".error").text(r);
f.find(".error").prepend(s);
AJS.log(r)
});
return d
}
})
})(define,AJS.$);
(function(a,b){a(["connect-host","ac/dialog/dialog-factory","ac/dialog"],function(c,e,d){function f(g,h){var i=d._getActiveDialog().xdm;
h.click(function(j,k){if(i.isActive()&&i.buttonListenerBound){i.dialogMessage(g,k)
}else{k(true)
}})
}c.extend(function(){return{stubs:["dialogMessage"],init:function(i,h){if(i.dlg==="1"){h.uiParams.isDialog=true
}var g=d._getActiveDialog();
if(!g){return
}g.xdm=h;
b.each(d.getButton(),function(j,k){f(j,k)
})
},internals:{dialogListenerBound:function(){this.buttonListenerBound=true
},setDialogButtonEnabled:function(h,g){d.getButton(h).setEnabled(g)
},setDialogButtonHidden:function(g,h){d.getButton(g).setHidden(h)
},isDialogButtonEnabled:function(g,i){var h=d.getButton(g);
i(h?h.isEnabled():void 0)
},isDialogButtonHidden:function(g,i){var h=d.getButton(g);
i(h?h.isHidden():void 0)
},createButton:function(h,g){var i=d.createButton(h,g);
f(h,i)
},isCloseOnEscape:function(g){g(d.isCloseOnEscape())
},createDialog:function(h){var g={key:this.addonKey};
if(h.key){g.moduleKey=h.key
}else{if(h.url){throw new Error("Cannot open dialog by URL, please use module key")
}}h.dialogModuleKey=h.key;
e(g,h,this.productContext)
},closeDialog:function(){this.events.emit("ra.iframe.destroy");
d.close()
}}}
})
})
})(require,AJS.$);
AJS.toInit(function(a){(function(c,b){c(["ac/dialog","ac/dialog/dialog-factory","connect-host","host/_util"],function(g,h,f,e){var i="click",d=".ap-dialog",j=function(n,o){var m=f.webItemHelper.getOptionsForWebItem(o.bindTo),l=f.webItemHelper.getWebItemModuleKey(o.bindTo),k=f.webItemHelper.getWebItemPluginKey(o.bindTo),p=f.webItemHelper.getWebItemTargetKey(o.bindTo);
a.extend(o,m,{dialogModuleKey:p});
if(!o.ns){o.ns=e.addonToNs(k,l)
}if(!o.container){o.container=o.ns
}if(typeof o.chrome==="string"){o.chrome=(o.chrome.toLowerCase()==="false")?false:true
}if(o.chrome===undefined&&o.size!=="maximum"){o.chrome=true
}if(o.header){o.defaultHeader=o.header
}h({key:k,moduleKey:l},o,o.productContext)
};
f.webItemHelper.eventHandler(i,d,j)
})
})(require,AJS)
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-inline-dialog.js' */
(function(b,a){b("ac/inline-dialog",["connect-host"],function(d){function f(i){return i.closest(".contents").data("inlineDialog")
}function c(i){f(i).show()
}function e(j,k,i){j.closest(".contents").css({width:k,height:i});
h(j)
}function h(i){f(i).refresh()
}function g(i){f(i).hide()
}d.extend(function(){return{init:function(j,i){if(i.uiParams.isInlineDialog){a(i.iframe).closest(".ap-container").on("resized",function(l,k){e(a(i.iframe),k.width,k.height)
})
}},internals:{hideInlineDialog:function(){g(a(this.iframe))
}}}
})
})
})(define,AJS.$);
(function(c,a,b){c("ac/inline-dialog/simple",["connect-host"],function(d){return function(k,h){var i;
if(!h.bindTo||!h.bindTo.jquery){return
}var g=h.bindTo.hasClass("ap-inline-dialog")?h.bindTo:h.bindTo.closest(".ap-inline-dialog");
var j=g.attr("id");
if(!j){return
}var e=function(p,n,m){n=b(n);
p.data("inlineDialog",i);
var o=d.webItemHelper.getWebItemPluginKey(n),l=d.webItemHelper.getWebItemModuleKey(n),q=window._AP.contentResolver.resolveByParameters({addonKey:o,moduleKey:l,isInlineDialog:true,productContext:h.productContext,uiParams:{isInlineDialog:true}});
q.done(function(r){p.empty().append(r);
if(h.width||h.height){p.css({width:h.width,height:h.height})
}}).fail(function(v,r,s){var u=b("<p class='title' />").text("Unable to load add-on content. Please try again later.");
p.html("<div class='aui-message error ap-aui-message'></div>");
p.find(".error").append(u);
var t=r+(s?": "+s.toString():"");
p.find(".error").text(t);
a.log(t)
}).always(function(){m()
})
};
var f="ap-inline-dialog-content-"+j;
i=b(document.getElementById("inline-dialog-"+f));
if(i.length!==0){i.remove()
}i=a.InlineDialog(h.bindTo,f,e,h);
return{id:i.attr("id"),show:function(){i.show()
},hide:function(){i.hide()
}}
}
})
})(define,AJS,AJS.$);
AJS.toInit(function(a){(function(c,b){c(["ac/inline-dialog/simple","connect-host"],function(d,h){var e=".ap-inline-dialog";
var f="click mouseover mouseout",g=function(j,k,l){var i=h.webItemHelper.getOptionsForWebItem(k.bindTo);
a.extend(k,i);
var m=k.onHover===true;
if(!m&&l!=="click"){return
}if(m&&k.bindTo.hasClass("active")){return
}d(j,k).show()
};
h.webItemHelper.eventHandler(f,e,g)
})
})(require,AJS)
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-navigator.js' */
(function(a){a("ac/navigator-browser",[],function(){var c=function(){location.reload()
};
var b=function(d){document.location=d
};
return{reloadBrowserPage:c,goToUrl:b}
})
})(define);
(function(b,a){b("ac/navigator",["connect-host","ac/navigator-browser","_uritemplate"],function(m,f,d){var j=undefined;
var l=function(){throw new Error("context api not yet implemented for this product")
};
var e=function(o,n){if(!j){throw new Error("navigation api not yet implemented for this product")
}if(Object.getOwnPropertyNames(j).length===0){throw new Error("No routes defined")
}if(o in j){n=n||{};
if(typeof j[o]==="function"){j[o](n,f.goToUrl)
}else{if(typeof j[o]==="string"){f.goToUrl(h(j[o],n))
}}}else{throw new Error("The URL target "+o+" is not available. Valid targets are: "+Object.keys(j).toString())
}};
var c=function(){f.reloadBrowserPage()
};
var h=function(o,n){if(o.indexOf("/")!==0){o="/"+o
}return a.contextPath()+d.parse(o).expand(n)
};
var g=function(n){j=n
};
var k=function(n){if(typeof n==="function"){l=n
}else{throw new Error("invalid context function specified")
}};
var i=function(n){if(typeof n!=="function"){throw new Error("invalid callback function specified")
}n(l())
};
return{go:e,reload:c,setRoutes:g,getContext:i,setContextFunction:k}
})
})(define,AJS);
(function(m){var a=(function(){function n(o){this.options=o
}n.prototype.toString=function(){if(JSON&&JSON.stringify){return JSON.stringify(this.options)
}else{return this.options
}};
return n
}());
var i=(function(){function t(w){return Object.prototype.toString.apply(w)==="[object Array]"
}function q(w){return Object.prototype.toString.apply(w)==="[object String]"
}function v(w){return Object.prototype.toString.apply(w)==="[object Number]"
}function s(w){return Object.prototype.toString.apply(w)==="[object Boolean]"
}function r(x,z){var w="",A=true,y;
for(y=0;
y<x.length;
y+=1){if(A){A=false
}else{w+=z
}w+=x[y]
}return w
}function o(x,z){var w=[],y=0;
for(;
y<x.length;
y+=1){w.push(z(x[y]))
}return w
}function p(y,x){var w=[],z=0;
for(;
z<y.length;
z+=1){if(x(y[z])){w.push(y[z])
}}return w
}function n(x){if(typeof x!=="object"||x===null){return x
}Object.freeze(x);
var y,w;
for(w in x){if(x.hasOwnProperty(w)){y=x[w];
if(typeof y==="object"){u(y)
}}}return x
}function u(w){if(typeof Object.freeze==="function"){return n(w)
}return w
}return{isArray:t,isString:q,isNumber:v,isBoolean:s,join:r,map:o,filter:p,deepFreeze:u}
}());
var j=(function(){function p(q){return(q>="a"&&q<="z")||((q>="A"&&q<="Z"))
}function n(q){return q>="0"&&q<="9"
}function o(q){return n(q)||(q>="a"&&q<="f")||(q>="A"&&q<="F")
}return{isAlpha:p,isDigit:n,isHexDigit:o}
}());
var f=(function(){var n={encode:function(t){return unescape(encodeURIComponent(t))
},numBytes:function(t){if(t<=127){return 1
}else{if(194<=t&&t<=223){return 2
}else{if(224<=t&&t<=239){return 3
}else{if(240<=t&&t<=244){return 4
}}}}return 0
},isValidFollowingCharCode:function(t){return 128<=t&&t<=191
}};
function s(x){var t="",w=n.encode(x),u,v;
for(v=0;
v<w.length;
v+=1){u=w.charCodeAt(v);
t+="%"+(u<16?"0":"")+u.toString(16).toUpperCase()
}return t
}function r(t,u){return t.charAt(u)==="%"&&j.isHexDigit(t.charAt(u+1))&&j.isHexDigit(t.charAt(u+2))
}function q(t,u){return parseInt(t.substr(u,2),16)
}function p(v){if(!r(v,0)){return false
}var w=q(v,1);
var u=n.numBytes(w);
if(u===0){return false
}for(var t=1;
t<u;
t+=1){if(!r(v,3*t)||!n.isValidFollowingCharCode(q(v,3*t+1))){return false
}}return true
}function o(y,x){var w=y.charAt(x);
if(!r(y,x)){return w
}var v=q(y,x+1);
var u=n.numBytes(v);
if(u===0){return w
}for(var t=1;
t<u;
t+=1){if(!r(y,x+3*t)||!n.isValidFollowingCharCode(q(y,x+3*t+1))){return w
}}return y.substr(x,3*u)
}return{encodeCharacter:s,isPctEncoded:p,pctCharAt:o}
}());
var b=(function(){function n(q){return j.isAlpha(q)||j.isDigit(q)||q==="_"||f.isPctEncoded(q)
}function o(q){return j.isAlpha(q)||j.isDigit(q)||q==="-"||q==="."||q==="_"||q==="~"
}function p(q){return q===":"||q==="/"||q==="?"||q==="#"||q==="["||q==="]"||q==="@"||q==="!"||q==="$"||q==="&"||q==="("||q===")"||q==="*"||q==="+"||q===","||q===";"||q==="="||q==="'"
}return{isVarchar:n,isUnreserved:o,isReserved:p}
}());
var d=(function(){function o(u,v){var r="",s,t="";
if(typeof u==="number"||typeof u==="boolean"){u=u.toString()
}for(s=0;
s<u.length;
s+=t.length){t=u.charAt(s);
r+=b.isUnreserved(t)||(v&&b.isReserved(t))?t:f.encodeCharacter(t)
}return r
}function n(r){return o(r,true)
}function q(t,r){var s=f.pctCharAt(t,r);
if(s.length>1){return s
}else{return b.isReserved(s)||b.isUnreserved(s)?s:f.encodeCharacter(s)
}}function p(u){var r="",s,t="";
for(s=0;
s<u.length;
s+=t.length){t=f.pctCharAt(u,s);
if(t.length>1){r+=t
}else{r+=b.isReserved(t)||b.isUnreserved(t)?t:f.encodeCharacter(t)
}}return r
}return{encode:o,encodePassReserved:n,encodeLiteral:p,encodeLiteralCharacter:q}
}());
var h=(function(){var n={};
function o(p){n[p]={symbol:p,separator:(p==="?")?"&":(p===""||p==="+"||p==="#")?",":p,named:p===";"||p==="&"||p==="?",ifEmpty:(p==="&"||p==="?")?"=":"",first:(p==="+")?"":p,encode:(p==="+"||p==="#")?d.encodePassReserved:d.encode,toString:function(){return this.symbol
}}
}o("");
o("+");
o("#");
o(".");
o("/");
o(";");
o("?");
o("&");
return{valueOf:function(p){if(n[p]){return n[p]
}if("=,!@|".indexOf(p)>=0){return null
}return n[""]
}}
}());
function l(o){var n;
if(o===null||o===undefined){return false
}if(i.isArray(o)){return o.length>0
}if(typeof o==="string"||typeof o==="number"||typeof o==="boolean"){return true
}for(n in o){if(o.hasOwnProperty(n)&&l(o[n])){return true
}}return false
}var c=(function(){function n(o){this.literal=d.encodeLiteral(o)
}n.prototype.expand=function(){return this.literal
};
n.prototype.toString=n.prototype.expand;
return n
}());
var g=(function(){function o(w){var s,x=[],y=null,t=null,q=null,v,u="";
function r(){var z=w.substring(t,v);
if(z.length===0){throw new a({expressionText:w,message:"a varname must be specified",position:v})
}y={varname:z,exploded:false,maxLength:null};
t=null
}function p(){if(q===v){throw new a({expressionText:w,message:"after a ':' you have to specify the length",position:v})
}y.maxLength=parseInt(w.substring(q,v),10);
q=null
}s=(function(z){var A=h.valueOf(z);
if(A===null){throw new a({expressionText:w,message:"illegal use of reserved operator",position:v,operator:z})
}return A
}(w.charAt(0)));
v=s.symbol.length;
t=v;
for(;
v<w.length;
v+=u.length){u=f.pctCharAt(w,v);
if(t!==null){if(u==="."){if(t===v){throw new a({expressionText:w,message:"a varname MUST NOT start with a dot",position:v})
}continue
}if(b.isVarchar(u)){continue
}r()
}if(q!==null){if(v===q&&u==="0"){throw new a({expressionText:w,message:"A :prefix must not start with digit 0",position:v})
}if(j.isDigit(u)){if(v-q>=4){throw new a({expressionText:w,message:"A :prefix must have max 4 digits",position:v})
}continue
}p()
}if(u===":"){if(y.maxLength!==null){throw new a({expressionText:w,message:"only one :maxLength is allowed per varspec",position:v})
}if(y.exploded){throw new a({expressionText:w,message:"an exploeded varspec MUST NOT be varspeced",position:v})
}q=v+1;
continue
}if(u==="*"){if(y===null){throw new a({expressionText:w,message:"exploded without varspec",position:v})
}if(y.exploded){throw new a({expressionText:w,message:"exploded twice",position:v})
}if(y.maxLength){throw new a({expressionText:w,message:"an explode (*) MUST NOT follow to a prefix",position:v})
}y.exploded=true;
continue
}if(u===","){x.push(y);
y=null;
t=v+1;
continue
}throw new a({expressionText:w,message:"illegal character",character:u,position:v})
}if(t!==null){r()
}if(q!==null){p()
}x.push(y);
return new e(w,s,x)
}function n(v){var q,t,u=[],s=null,r=0;
for(q=0;
q<v.length;
q+=1){t=v.charAt(q);
if(r!==null){if(t==="}"){throw new a({templateText:v,message:"unopened brace closed",position:q})
}if(t==="{"){if(r<q){u.push(new c(v.substring(r,q)))
}r=null;
s=q
}continue
}if(s!==null){if(t==="{"){throw new a({templateText:v,message:"brace already opened",position:q})
}if(t==="}"){if(s+1===q){throw new a({templateText:v,message:"empty braces",position:s})
}try{u.push(o(v.substring(s+1,q)))
}catch(p){if(p.prototype===a.prototype){throw new a({templateText:v,message:p.options.message,position:s+p.options.position,details:p.options})
}throw p
}s=null;
r=q+1
}continue
}throw new Error("reached unreachable code")
}if(s!==null){throw new a({templateText:v,message:"unclosed brace",position:s})
}if(r<v.length){u.push(new c(v.substr(r)))
}return new k(v,u)
}return n
}());
var e=(function(){function q(w){return(JSON&&JSON.stringify)?JSON.stringify(w):w
}function t(x){if(!l(x)){return true
}if(i.isString(x)){return x===""
}if(i.isNumber(x)||i.isBoolean(x)){return false
}if(i.isArray(x)){return x.length===0
}for(var w in x){if(x.hasOwnProperty(w)){return false
}}return true
}function o(y){var w=[],x;
for(x in y){if(y.hasOwnProperty(x)){w.push({name:x,value:y[x]})
}}return w
}function r(y,w,x){this.templateText=y;
this.operator=w;
this.varspecs=x
}r.prototype.toString=function(){return this.templateText
};
function s(x,y,z){var w="";
z=z.toString();
if(y.named){w+=d.encodeLiteral(x.varname);
if(z===""){w+=y.ifEmpty;
return w
}w+="="
}if(x.maxLength!==null){z=z.substr(0,x.maxLength)
}w+=y.encode(z);
return w
}function n(w){return l(w.value)
}function v(y,z,A){var x=[],w="";
if(z.named){w+=d.encodeLiteral(y.varname);
if(t(A)){w+=z.ifEmpty;
return w
}w+="="
}if(i.isArray(A)){x=A;
x=i.filter(x,l);
x=i.map(x,z.encode);
w+=i.join(x,",")
}else{x=o(A);
x=i.filter(x,n);
x=i.map(x,function(B){return z.encode(B.name)+","+z.encode(B.value)
});
w+=i.join(x,",")
}return w
}function p(y,z,A){var x=i.isArray(A),w=[];
if(x){w=A;
w=i.filter(w,l);
w=i.map(w,function(C){var B=d.encodeLiteral(y.varname);
if(t(C)){B+=z.ifEmpty
}else{B+="="+z.encode(C)
}return B
})
}else{w=o(A);
w=i.filter(w,n);
w=i.map(w,function(B){var C=d.encodeLiteral(B.name);
if(t(B.value)){C+=z.ifEmpty
}else{C+="="+z.encode(B.value)
}return C
})
}return i.join(w,z.separator)
}function u(y,z){var x=[],w="";
if(i.isArray(z)){x=z;
x=i.filter(x,l);
x=i.map(x,y.encode);
w+=i.join(x,y.separator)
}else{x=o(z);
x=i.filter(x,function(A){return l(A.value)
});
x=i.map(x,function(A){return y.encode(A.name)+"="+y.encode(A.value)
});
w+=i.join(x,y.separator)
}return w
}r.prototype.expand=function(D){var z=[],A,x,C,w,B=false,y=this.operator;
for(A=0;
A<this.varspecs.length;
A+=1){x=this.varspecs[A];
C=D[x.varname];
if(C===null||C===undefined){continue
}if(x.exploded){B=true
}w=i.isArray(C);
if(typeof C==="string"||typeof C==="number"||typeof C==="boolean"){z.push(s(x,y,C))
}else{if(x.maxLength&&l(C)){throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+q(C))
}else{if(!x.exploded){if(y.named||!t(C)){z.push(v(x,y,C))
}}else{if(l(C)){if(y.named){z.push(p(x,y,C))
}else{z.push(u(y,C))
}}}}}}if(z.length===0){return""
}else{return y.first+i.join(z,y.separator)
}};
return r
}());
var k=(function(){function n(p,o){this.templateText=p;
this.expressions=o;
i.deepFreeze(this)
}n.prototype.toString=function(){return this.templateText
};
n.prototype.expand=function(q){var p,o="";
for(p=0;
p<this.expressions.length;
p+=1){o+=this.expressions[p].expand(q)
}return o
};
n.parse=g;
n.UriTemplateError=a;
return n
}());
m(k)
}(function(a){if(typeof define==="function"){define("_uritemplate",[],function(){return a
})
}else{if(typeof window!=="undefined"){window.UriTemplate=a
}else{global.UriTemplate=a
}}}));
(function(a){a(["connect-host","ac/navigator"],function(c,b){c.extend(function(){return{internals:{go:function(e,d){b.go(e,d)
},reload:function(){b.reload()
},getContext:function(d){b.getContext(d)
}},stubs:["go","reload","getContext"]}
})
})
}(require));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user', location = '/js/iframe/host/user.js' */
(function(a,c){var b;
c(function(e){return{init:function d(f){b=f
},internals:{getUser:function(){var f=AJS.Meta,g=f?f.get("remote-user-fullname"):null;
if(!g){g=a("a#header-details-user-fullname, .user.ajs-menu-title, a#user").text()
}if(!g){g=a("a#user-menu-link").attr("title")
}return{fullName:g,id:b.uid,key:b.ukey}
},getTimeZone:function(){return b.timeZone
}}}
})
})(AJS.$,_AP.extend);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-content-property-api', location = 'js/confluence/contentproperty/content-property.js' */
(function(a,b){b("ac/confluence/content-property",["confluence/root","ajs"],function(i,d){function f(k){var l=i.getContentId();
var j=d.contextPath();
return j+"/rest/api/content/"+l+"/property/"+k
}function g(j){d.log(j);
d.flag({type:"error",title:j,body:"<p>There was a problem communicating with the server. Please refresh the page and try again</p>"})
}function e(j,l){var k=f(j);
a.getJSON(k).done(l).fail(function(m){if(m.status===404){l(null)
}else{g("Unable to check item state: "+j)
}})
}function h(l,m){var k=l.key;
var j={url:f(k),contentType:"application/json",data:JSON.stringify(l)};
if(l.version&&l.version.number&&l.version.number>1){j.type="PUT"
}else{j.type="POST"
}a.ajax(j).done(function(n){d.log("contentProperty "+k+" "+j.type+" successful");
if(typeof m==="function"){m(n)
}}).fail(function(p,n,o){g("Unable to "+j.type+" item: "+k);
if(typeof m==="function"){m({error:o})
}})
}function c(k,j){d.trigger("contentProperty.update",{contentProperty:k,context:j})
}return{getContentProperty:function(j,k){e(j,k)
},syncPropertyFromServer:function(j,l){var k=this;
e(j,function(m){c(m,k);
l(m)
})
},setContentProperty:function(k,l){var j=this;
c(k,j);
h(k,l)
}}
})
})(AJS.$,define);
(function(a){a(["connect-host","ac/confluence/content-property"],function(b,c){b.extend(function(){return{internals:{getContentProperty:c.getContentProperty,setContentProperty:c.setContentProperty,syncPropertyFromServer:c.syncPropertyFromServer}}
})
})
}(require));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes', location = 'js/confluence/navigator/routes.js' */
(function(a,b){b("ac/confluence/navigator/routes",["ac/navigator"],function(c){return function(){var h=["page","blogpost","attachment","comment"];
var e=AJS.contextPath();
var j={dashboard:"",addonmodule:function(o,q){if(g(o,"addonKey")&&g(o,"moduleKey")){var p=k([o.addonKey,o.moduleKey]);
var n=e+"/plugins/servlet/ac/"+p;
if(o.context){var m=i(o.context);
n=(m!="")?n+"?"+m:n
}q.apply(this,[n])
}},contentedit:function(m,o){if(g(m,"contentId")){var n=m.contentId;
l(m.contentId,function(p){var q=p.type;
if(f(q)){o(e+"/display/"+p.space.key+"/customcontent/edit/"+p.id)
}else{if(d(q)){o(e+"/pages/edit"+q+".action?pageId="+p.id)
}else{AJS.error('Cannot navigate to "contentedit" target for content (ID='+p.id+"). Content type <"+q+"> is not supported.")
}}})
}},spacetools:"/spaces/viewspacesummary.action?key={spaceKey}",spaceview:"/spaces/{spaceKey}",userprofile:"/display/~{username}",contentview:function(m,n){if(g(m,"contentId")){l(m.contentId,function(p){var o=e+p._links.webui;
if(o){n(o)
}})
}},contentlist:function(m,p){var n=encodeURIComponent(m.spaceKey);
var o=m.contentType;
if(o==="page"){p(e+"/collector/pages.action?key="+n)
}else{if(o==="blogpost"){p(e+"/pages/viewrecentblogposts.action?key="+n)
}else{if(f(o)){p(e+"/display/"+n+"/customcontent/list/"+encodeURIComponent(o))
}else{AJS.error('Cannot navigate to "contentlist" target for content type <'+o+">")
}}}}};
c.setRoutes(j);
function k(m){return m.map(encodeURIComponent).join("/")
}function i(m){return Object.keys(m).map(function(n){return["ac."+n,m[n]].map(encodeURIComponent).join("=")
}).join("&")
}function l(n,m){a.ajax({url:e+"/rest/api/content/"+n,dataType:"json"}).success(m).fail(function(){AJS.error("Content not found (ID="+n+")")
})
}function g(m,n){if(!m||!m[n]){throw new Error("Missing "+n+" in navigator context");
return false
}return true
}function f(m){return/^ac:/.test(m)
}function d(m){return h.indexOf(m)!==-1
}}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes', location = 'js/confluence/navigator/context.js' */
(function(b,a){a(["ac/navigator","confluence/api/navigator-context","ac/confluence/navigator/routes"],function(d,e,c){d.setContextFunction(e.getCurrent);
c()
})
})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources', location = 'webpack/init.js' */
!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=n(377),o=i(r),a=n(379),u=i(a);AJS.toInit(function(){function e(e,t){AJS.EventQueue.push({name:e,properties:s({},t)})}function t(t){if(c(t)){t.preventDefault(),l("#appswitcher-button").unbind("click").unbind("keydown"),l("body").addClass("loading-cursor"),e("appswitcher.trigger.click");var o=WRM.require("wr!com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-resources"),d=l.ajax({url:p+"/rest/menu/latest/appswitcher",dataType:"json"}),f=g?l.Deferred().reject():l.ajax({url:n()+"/api/client/recent/containers?cloudId="+h,xhrFields:{withCredentials:!0}});i([o,d,f]).then(function(t,n,i){if(l("body").removeClass("loading-cursor"),e("appswitcher.dropdown.show"),!t.success)return void e("appswitcher.dropdown.display.error",{reason:"WRM.require() failed"});n.success||e("appswitcher.dropdown.display.error");var o=r(n.response),c={recentContainers:i.success?i.response.data:[],linkedApplications:{configureLink:!!v.isUserAdmin&&y,apps:n.success?n.response.map(function(e){return{name:e.label,url:e.link,product:e.applicationType}}):[],error:!n.success},suggestedApplication:0===o.length?{show:!1}:s({show:v.isAppSuggestionAvailable,onDontShowAgainClick:function(){return a("key-no-thanks","true")}},o[0]),isAnonymousUser:g,i18n:u.default,analytics:e};requirejs("fabric/app-switcher").initAppSwitcher(c)})}}function n(){var e=window.location.hostname;return e.indexOf("jira-dev.com")>-1?"https://activity.staging.atlassian.io":"https://activity.atlassian.io"}function i(e){return l.when.apply(l,l.map(e,function(e){var t=l.Deferred();return e.done(function(e){t.resolve({success:!0,response:e})}).fail(function(e){t.resolve({success:!1,response:e})}),t.promise()}))}function r(e){var t=[{application:"jira",url:v.isUserAdmin?"/admin/billing/addapplication":"https://www.atlassian.com/software/jira"},{application:"confluence",url:v.isUserAdmin?"/admin/billing/addapplication?product=confluence.ondemand":"https://www.atlassian.com/software/confluence"}],n=new Set;return e.map(function(e){return e.applicationType.toLowerCase()}).forEach(function(e){return n.add(e)}),t.filter(function(e){return!n.has(e.application)})}function a(e,t){l.ajax({url:p+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:e,value:t})})}function c(e){return"click"===e.type||"keydown"===e.type&&(40===e.which||32===e.which||13===e.which)}var p=AJS.contextPath(),d=p.indexOf("/wiki")===-1,f=requirejs(d?"jira/util/data/meta":"confluence/meta"),l=requirejs("jquery"),h=WRM.data.claim("com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources.cloud-id"),g=WRM.data.claim("com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources.is-anonymous"),v=l("#app-switcher").data("environment"),y=p+"/plugins/servlet/customize-application-navigator";f.getBoolean("show-new-app-switcher")&&(l(".app-switcher-trigger").filter(":visible").length&&(l(".app-switcher-trigger, #app-switcher").remove(),l(".aui-header-before").append('\n            <span id="appswitcher-container">\n                <a id="appswitcher-button" tabindex="0">\n                    <span class="aui-icon aui-icon-small aui-iconfont-appswitcher"></span>\n                </a>\n            </span>'),l("#appswitcher-button").click(t).keydown(t)),l(window).load(o.default))})},377:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={analyticsscheme:"https",analyticsserver:"analytics.atlassian.com",server:window.location.hostname,product:"home",queue:[],storage_key:"atlassian.home.analytics",save_interval:5e3,publish_interval:1e4},t=(0,r.default)(e);t.start()};var s=n(378),r=i(s)},378:function(e,t,n){!function(){var t,n;t=function(){var e={},t={};return e.getLocalStorage=function(){return window.localStorage},e.getSessionStorage=function(){return window.sessionStorage},e.getInternalStorage=function(){return t.getItem=function(e){return t[e]},t.setItem=function(e,n){t[e]=n},t.clear=function(){t={}},t},e.getStorage=function(){var t;try{var n=e.getLocalStorage();t="undefined"!=typeof n?n:e.getSessionStorage()}catch(e){}return"undefined"==typeof t&&(t=e.getInternalStorage()),t},e.isCORSRequest=function(e){var t=document.createElement("a");return t.href=e,t.host!==window.location.host},e.useXDomainRequest=function(t){return e.isCORSRequest(t)&&!!window.XDomainRequest&&(navigator.appVersion.indexOf("MSIE 8.")!==-1||navigator.appVersion.indexOf("MSIE 9.")!==-1)},e.getCookieValue=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null},e}(),n=function(e){function t(e){return i&&i.is_started?(i.stop(),i.config=i.parseConfig(e)):(i=new n(e),window["herment-gas-client"]=i),i}function n(t){return this.STORAGE_KEY_PREAMBLE="herment",this.MAXEVENTS=100,this.PUBLISH_INTERVAL=5e3,this.SAVE_INTERVAL=1e3,this.config=this.parseConfig(t),this.storage=e.getStorage(),this.is_started=!1,"undefined"!=typeof window.addEventListener?window.addEventListener("unload",function(){this.moveQueueToStorage()}.bind(this)):window.attachEvent("onunload",function(){this.moveQueueToStorage()}.bind(this)),this}var i=window["herment-gas-client"];return n.prototype={getAtlPath:function(){return e.getCookieValue("__atl_path")},getServerName:function(){var e;return"undefined"!=typeof document.location&&"undefined"!=typeof document.location.hostname&&(e=document.location.hostname),""===e&&(e="-"),e},getProductNameFromServerName:function(e){return"undefined"!=typeof e?e.replace(".com","").replace(".net","").replace(".org","").replace(".au","").replace(".io",""):"-"},getSubdomain:function(e){var t="-",n=e.match(/^([a-z0-9\.]*)[\-\.]{1}([a-z0-9]+)+\.([a-z]{2,6})$/i);if(n){var i=e.split(".");i=2===i[i.length-1].length?i.slice(0,i.length-3):i.slice(0,i.length-2),0!==i.length&&(t=i.join("."))}return t},generateRandomStorageKey:function(){var e=2,t=12,n=(Math.random()+"").slice(e,t),i=(Math.random()+"").slice(e,t);return n.concat(i)},ajaxPost:function(t,n){var i;if(e.useXDomainRequest(t))i=new window.XDomainRequest;else if(window.XMLHttpRequest)i=new XMLHttpRequest;else{if(!window.ActiveXObject)return;i=new window.ActiveXObject("Microsoft.XMLHTTP")}i.open("POST",t,!0),"undefined"!=typeof i.setRequestHeader&&(i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Accept","application/json, text/javascript, */*;")),i.send(n)},parseConfig:function(e){var t,n,i,s,r,o,a,u,c,p,d,f,l,h,g,v,y,m;if("undefined"==typeof e||"undefined"==typeof e.queue){var w=window.AJS=window.AJS||{};w.EventQueue=w.EventQueue||[],t=w.EventQueue}else t=e.queue;return n="undefined"==typeof e||"undefined"==typeof e.analyticsscheme?"https":e.analyticsscheme,i="undefined"==typeof e||"undefined"==typeof e.analyticsserver?"analytics.atlassian.com":e.analyticsserver,s="undefined"==typeof e||"undefined"==typeof e.analyticsurl?"/analytics/events":e.analyticsurl,r="undefined"==typeof e||"undefined"==typeof e.server?this.getServerName():e.server,o="undefined"==typeof e||"undefined"==typeof e.product?this.getProductNameFromServerName(r):e.product,"undefined"==typeof e||"undefined"==typeof e.subproduct?(a=this.getSubdomain(r),"undefined"==typeof a&&(a="-")):a=e.subproduct,u="undefined"==typeof e||"undefined"==typeof e.version?null:e.version,c="undefined"==typeof e||"undefined"==typeof e.session?null:e.session,p="undefined"==typeof e||"undefined"==typeof e.sen?null:e.sen,d="undefined"==typeof e||"undefined"==typeof e.sourceip?null:e.sourceip,f="undefined"==typeof e||"undefined"==typeof e.atlpath?this.getAtlPath():e.atlpath,l="undefined"==typeof e||"undefined"==typeof e.ajax?this.ajaxPost:e.ajax,h="undefined"==typeof e||"undefined"==typeof e.maxevents?this.MAXEVENTS:e.maxevents,g="undefined"==typeof e||"undefined"==typeof e.storage_key?this.STORAGE_KEY_PREAMBLE+this.generateRandomStorageKey()+this.generateRandomStorageKey():e.storage_key,v="undefined"==typeof e||"undefined"==typeof e.user?"default":e.user,y="undefined"==typeof e||"undefined"==typeof e.publish_interval?this.PUBLISH_INTERVAL:e.publish_interval,m="undefined"==typeof e||"undefined"==typeof e.save_interval?this.SAVE_INTERVAL:e.save_interval,{queue:t,gasScheme:n,gasServer:i,gasUrl:s,serverName:r,productName:o,subProductName:a,version:u,session:c,sen:p,sourceIP:d,atlPath:f,post:l,maxevents:h,storageKey:g,user:v,publishInterval:y,saveInterval:m}},pushToServer:function(e,t){var n="undefined"!=typeof t?t:this.config.post,i=this.config.gasScheme+"://"+this.config.gasServer+this.config.gasUrl,s={events:e},r=JSON.stringify(s);n(i,r)},addEventsToArray:function(e,t,n){if("undefined"!=typeof n&&"undefined"!=typeof n.server&&"undefined"!=typeof n.product&&"undefined"!=typeof n.subproduct&&"undefined"!=typeof n.user)for(var i in e)if(e.hasOwnProperty(i)){var s=e[i];if(t.length>=this.config.maxevents)break;if(s.name&&s.properties){var r={name:s.name,properties:s.properties,serverTime:s.time||(new Date).getTime(),server:n.server,user:s.user||n.user,product:n.product,subproduct:n.subproduct,version:n.version,session:n.session,sen:n.sen,sourceIP:n.sourceIP,atlPath:n.atlPath};t.push(r)}}},publishFromQueueAndStorage:function(e){try{var t="undefined"!=typeof e?e:this.pushToServer.bind(this),n=[];if(this.config.queue.length<1&&("undefined"==typeof this.storage||this.storage.length<1))return;var i={server:this.config.serverName,user:this.config.user,product:this.config.productName,subproduct:this.config.subProductName,version:this.config.version,session:this.config.session,sen:this.config.sen,sourceIP:this.config.sourceIP,atlPath:this.config.atlPath};this.addEventsToArray(this.config.queue,n,i);var s=this.popEventsFromStorage();this.addEventsToArray(s,n,i),this.config.queue.length=0,n&&n.length&&t(n)}catch(e){}},serialiseEventsToString:function(e){return JSON.stringify(e)},deserialiseEvents:function(e){return JSON.parse(e)},storeEvents:function(e){if("undefined"!=typeof this.storage)try{if(this.storage[this.config.storageKey]){var t=this.deserialiseEvents(this.storage[this.config.storageKey])||[];t.length<this.config.maxevents&&t.push.apply(t,e),e=t}this.storage.setItem(this.config.storageKey,this.serialiseEventsToString(e))}catch(e){}},popEventsFromStorage:function(){if("undefined"==typeof this.storage)return[];try{if(this.storage[this.config.storageKey]){var e=this.deserialiseEvents(this.storage[this.config.storageKey]);return this.storage[this.config.storageKey]=this.serialiseEventsToString([]),e}}catch(e){}return[]},moveQueueToStorage:function(){0!==this.config.queue.length&&"undefined"!=typeof this.storage&&(this.storeEvents(this.config.queue),this.config.queue.length=0)},start:function(){this.is_started=!0;var e=Array.prototype.push;this.config.queue.push=function(t){t.time=(new Date).getTime(),e.call(this.config.queue,t)}.bind(this),this.initialSaveTimeout=setTimeout(this.publishFromQueueAndStorage.bind(this),this.config.saveInterval),this.saveInterval=setInterval(this.moveQueueToStorage.bind(this),this.config.saveInterval),this.startPublisher()},stop:function(){this.is_started=!1,this.publishFromQueueAndStorage(),clearTimeout(this.initialSaveTimeout),clearInterval(this.saveInterval),this.stopPublisher()},stopPublisher:function(){clearInterval(this.publishInterval)},startPublisher:function(){this.publishInterval=setInterval(this.publishFromQueueAndStorage.bind(this),this.config.publishInterval)},destroy:function(){this.stop(),window["herment-gas-client"]=t}},t}(t),window["herment-gas-client"]=n,e.exports=n}()},379:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:"Home",apps:"Apps",configure:"Configure",recent:"Recent","try.other.apps":"Try other Atlassian apps","don't.show.this.again":"Don\'t show this again","container.confluence-space":"Space","container.jira-project":"Project","suggested.application.description.confluence":"Collaboration and content sharing","suggested.application.description.jira":"Issue & project tracking software","applinks.error":"Unable to load linked applications"}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'js/pas-config.js' */
define("pas/pas-config",["jquery","confluence/storage-manager","confluence/api/constants"],function(c,b,a){return{timeUpdateInterval:6E4,pollingInterval:9E5,url:a.CONTEXT_PATH+"/rest/pas/latest/announcement",store:new b("confluence","pas"),nextAnnouncementKey:"nextAnnouncement",timeStampKey:"timeStamp",config:{url:a.CONTEXT_PATH+"/rest/pas/latest/settings",timeStampKey:"configTimeStampKey",pollingInterval:18E5,currentConfigKey:"currentConfigKey"},cookieKey:a.CONTEXT_PATH.replace("/","")+"_pas.dismiss"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'js/pas.js' */
require("jquery aui/flag ajs pas/pas-config confluence/api/event confluence/api/logger".split(" "),function(f,v,p,a,l,w){var m=null,n=null,i=null,j=0,h,q,r,s=function(b){var a=function(a,b,c){for(a=""+a;a.length<c;)a=b+a;return a},e=function(a,b){var c=a+" "+b;a!==1&&(c=c+"s");return c};if(b<6E4)return"in less than a minute";if(b<36E5)return"in "+e(Math.round(b/6E4),"min");if(b<864E5)return"in "+e(Math.round(b/36E5),"hour")+" "+e(Math.round(b%36E5/6E4),"minute");e=new Date;e.setSeconds(e.getSeconds()+
Math.round(b/1E3));return a(e.getFullYear(),"0",4)+"/"+a(e.getMonth()+1,"0",2)+"/"+a(e.getDate(),"0",2)+" "+a(e.getHours(),"0",2)+":"+a(e.getMinutes(),"0",2)},t=function(){var b=a.announcementText,d=a.announcementUrl||"",e=a.announcementTime,k=a.announcementId,g=a.announcementTicket;h=a.announcementSource;q=/([A-Z])\w+/g.exec(g);r=/\d+/g.exec(g);var g=a.announcementTargetPath.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")||"",c;if(location.href.match(RegExp(g))!==null){c=v({type:"info",title:"Public service announcement",
body:b+d+e,close:"manual"});h==="alertr"&&o({name:"pas.alertr.announcement.display"})}if(c!==void 0){c.setAttribute("id","pas-announcement");c.setAttribute("announcementId",k);c.addEventListener("aui-flag-close",function(){var b=a.announcementId,c=new Date;c.setDate(c.getDate()+1);b=b+"; "+c.toUTCString();document.cookie=a.cookieKey+"="+b+"; path=/";l.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.dismiss-announcement.click",data:{message:f("#pas-announcement span:first").text()}});h===
"alertr"&&o({name:"pas.alertr.announcement.dismissed"})})}f("#more-info").on("click",function(){h==="alertr"&&o({name:"pas.alertr.announcement.url.clicked"})})},x=function(){if(j>0){var b=j-a.timeUpdateInterval;j=b;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:s(b)})}else{clearInterval(i);i=null}},o=function(a){l.trigger("analyticsEvent",{name:a.name,data:{issueNumber:r,project:q[0]}})},u=function(){var b=JSON.parse(a.store.getItem(a.nextAnnouncementKey)),d;if(!(d=b==null))if(!(d=b.message==
null))a:{d=b.id;for(var e=a.cookieKey,k=document.cookie.split(";"),g=0;g<k.length;g++){var c=k[g],f=c.indexOf("="),h=c.substr(0,f).trim(),c=c.substr(f+1).trim();if(h===e){d=c===d.toString();break a}}d=false}if(!d){j=b.timeLeft;a.announcementText='<span class="pas-announcement-text">'+b.message+"</span>";a.announcementTime=Atlassian.PAS.Templates.pasTime({time:s(j)});i=setInterval(x,a.timeUpdateInterval);if(b.url)a.announcementUrl=Atlassian.PAS.Templates.pasUrl({url:b.url});a.announcementTargetPath=
b.targetPath;a.announcementId=b.id;d=b.duration;b.timeToStart=b.timeToStart-((new Date).getTime()-JSON.parse(a.store.getItem(a.timeStampKey)));if(b.source)a.announcementSource=b.source;if(b.incidentTicket)a.announcementTicket=b.incidentTicket;if(b.timeToStart>0){d=d+b.timeToStart;m=setTimeout(function(){t()},b.timeToStart)}else t();d>0&&(n=setTimeout(function(){m!=null&&clearTimeout(m);n!=null&&clearTimeout(n);i!=null&&clearInterval(i);document.getElementById("pas-announcement").close()},d))}};p.toInit(function(){f(document).on("click",
"#more-info",function(){l.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.more-info.click",data:{message:f("#pas-announcement span:first").text()}})});var b=a.pollingInterval,d=JSON.parse(a.store.getItem(a.timeStampKey)),e=(new Date).getTime()-d;d===void 0||e>b?f.ajax({type:"GET",contentType:"application/json",url:a.url,cache:false,global:false,timeout:5E3,success:function(b){var d=(new Date).getTime();a.store.setItem(a.timeStampKey,JSON.stringify(d));a.store.setItem(a.nextAnnouncementKey,
JSON.stringify(b));u()},error:function(a,b,c){w.log("Could not get announcement from server: "+c)}}):u()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'templates/soy/pas.soy' */
// This file was automatically generated from pas.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Atlassian.PAS.Templates.
 */

if (typeof Atlassian == 'undefined') { var Atlassian = {}; }
if (typeof Atlassian.PAS == 'undefined') { Atlassian.PAS = {}; }
if (typeof Atlassian.PAS.Templates == 'undefined') { Atlassian.PAS.Templates = {}; }


Atlassian.PAS.Templates.pasTime = function(opt_data, opt_ignored) {
  return '<span class="pas-announcement-time">' + soy.$$escapeHtml(opt_data.time) + '</span>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasTime.soyTemplateName = 'Atlassian.PAS.Templates.pasTime';
}


Atlassian.PAS.Templates.pasUrl = function(opt_data, opt_ignored) {
  return '<p><a id="more-info" target="_blank" href=\'' + soy.$$escapeHtml(opt_data.url) + '\'>' + soy.$$escapeHtml('More information') + '</a></p>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasUrl.soyTemplateName = 'Atlassian.PAS.Templates.pasUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute('Filter') + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<div class="page-icon"><a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + ' class="icon icon-' + soy.$$escapeHtmlAttribute(opt_data.type) + '"></a></div><div class="page-title"><a class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</a></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="You haven\'t visited any pages yet. To get started, take a look under \u003cb\u003eMY SPACES\u003c/b\u003e in the sidebar."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\'t find any matching pages in your history."+" "+AJS.format("\u003ca href=\"{0}\"\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],type:a.type,name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b,d){d=d||[];var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("name");var e=g.toLowerCase();return d.indexOf(f.get("type"))==-1&&_.all(c,function(h){return e.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var h=a(this);var e=h.find("span");var g=e.data("properties");var f=g?g.spaceName:null;if(f&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(f));h.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){if(!AJS.Meta.get("remote-user")){return}var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o,["custom"]),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: 'Spaces', showIcon: true, text: 'Spaces'}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var h=b(".acs-side-bar");var g=h.find("a:not(.external_link a, #acs-configure-link)");c(g,"sidebar");var f=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Pages")+"']");c(f,"sidebar-pages");var j=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Blog")+"']");c(j,"sidebar-blogs");var e=h.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var i=h.find(".ia-secondary-container a:not(.more-children-link)");if(h.find(".ia-secondary-container").data("tree-type")=="pages"){c(i,"contextnavchildmode")}else{if(h.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(i,"contextnavpagetreemode")}else{c(i,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=require("confluence/confluence-storage-manager")("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:util-resources', location = '/js/atlassian/um-utils.js' */
define('user-management/helpers/um-utils', [
    'jquery'
], function (
    $
) {
    var isSiteAdminWRM = WRM.data.claim("com.atlassian.crowd.user-provisioning-plugin:create-users-resources.isSiteAdmin");
    /*
        This is going to have to change when UM moves to a different URL.
        We'll also need to look at usages of this because commumication
        will need to be a bit different, eg. using CORS
     */
    function restBaseUrl() {
        return '/admin';
    }

    return {

        /**
         * @returns A promise which resolves to a boolean.
         */
        isSiteAdmin: function() {
            return $.when(isSiteAdminWRM).promise();
        },
        restBaseUrl: restBaseUrl,
        productName: function() {
            var contextPath = AJS.contextPath();
            var productName = "Unknown";
            if (contextPath === "") {
                productName = "jira";
            } else if (contextPath === "/builds") {
                productName = "bamboo";
            } else if (contextPath === "/wiki") {
                productName = "confluence";
            }
            return productName;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:adminmenu-analytics', location = 'js/atlassian/analytics-upp.js' */
require([
    'user-management/helpers/um-utils'
], function(
    umUtils
) {
    var triggerAnalytics = function (name, properties) {
        AJS.trigger("analytics", {
            name: "unified.admin." + name,
            data: properties || {}
        });
    };

    var getProductName = umUtils.productName;

    AJS.$(document)
        .on("click", "#admin-billing-link", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin-discovernewapps-link", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#admin-management-link", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        // handle admin menu links from JIRA due to required use of web sections
        .on("click", "#admin_billing_section", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin_discovernewapps_section", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#user_management_section", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        .on("click", "#pending-invites-flag .icon-close", function () {
            triggerAnalytics("inproduct.invite.pending.message.dismissed")
        })
    ;

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:common-flag-resources', location = '/js/atlassian/aui-polyfill/flag.js' */
/*
 * Polyfill for aui/flag for use in products that don't provide a version (due to using an ancient AUI version).
 */
(function() {
    try {
        require('aui/flag')
    } catch (e) {
        define('aui/flag', [], displayFlagAsMessage);
    }

    function displayFlagAsMessage(args) {
        var type = (args.type || "").toLowerCase();
        var message = typeof AJS.messages[type] == 'function' ? AJS.messages[type] : AJS.messages.generic;

        // for some reason we display info messages as warnings... keeping that for backward compatibility
        message(".notifications", { body: args.message });
    }
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:common-flag-resources', location = '/js/atlassian/flag.js' */
/**
 * This is a wrapper around AUI Flag which will escape the body text of the Flag unless explicitly told not to.
 *
 * The body will NOT be escaped iff the passed in object has an attribute 'isHtml' and it is set to true.
 */
define('user-management-common/flag', [
    'aui/flag',
    'underscore',
    'jquery'
], function(
    flag,
    _,
    $
) {
    return function(options){
        var createdFlag;
        // If not explicitly HTML, escape the body
        if(!options.isHtml) {
            options.body = _.escape(options.body);
        }

        createdFlag = flag(options);
        $(createdFlag).on('aui-flag-close', function(){
            createdFlag.dispatchEvent(new CustomEvent('um-flag-close', { bubbles: true }));
        });
        return createdFlag;
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/helpers/cookies.js' */
define('user-management-common/helpers/cookies', [], function() {
    return {
        readCookie: function (name) {
            //document.cookie lists cookies in the format "name1=value1; name2=value2" etc
            //see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];

                //Remove any leading spaces (normally 1, but I don't want to make assumptions)
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }

                //Remove the name1= part and return what is left
                if (cookie.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                }
            }
            return null;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/impersonation/impersonation.js' */
/**
 * This module displays an informational message with a link to drop the impersonation, if the current user is
 * being impersonated. This script is used in both user management and user provisioning plugins.
 */
define('user-management-common/impersonation/impersonation', [
    'jquery',
    'underscore',
    'user-management-common/flag',
    'user-management-common/helpers/cookies'
], function(
    $,
    _,
    flag,
    cookies
) {
    var showImpersonationMessaging = function(username){
        var message = AJS.format("You\'\'re temporarily logged in as {0}. When you\'\'re done, {1}switch back{2} to your account.",
            _.escape(impersonation.getDisplayName()),
            '<a id="impersonation-dismiss-trigger" href="#">', '</a>');

        var messageFlag = flag({ type: 'info', isHtml: true, body: message });

        $(messageFlag).find("#impersonation-dismiss-trigger").click(function (e) {
            e.preventDefault();
            impersonation.dropImpersonation().then(function () {
                if (username) {
                    window.location = "/admin/users/view?username=" + encodeURIComponent(username);
                } else {
                    window.location = "/admin/users";
                }
            });
        });
    };

    var impersonation = {
        init: function () {
            if (impersonation.isImpersonated()) {
                showImpersonationMessaging(impersonation.getUsername());
            }
        },

        getUsername: function () {
            return cookies.readCookie("um.user.impersonated.username");
        },

        getDisplayName: function () {
            return cookies.readCookie("um.user.impersonated.displayname");
        },

        dropImpersonation: function () {
            return $.ajax({
                type: "POST",
                contentType: 'application/json',
                url: "/admin/rest/um/1/impersonate/release"
            });
        },

        isImpersonated: function () {
            return !!impersonation.getUsername();
        }
    };
    return impersonation;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/impersonation-init.js' */
require(['jquery', 'user-management-common/impersonation/impersonation'],
function($, impersonation) {
    $(impersonation.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user/request-invite.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/request-invite', [
    'jquery',
    'user-management/helpers/um-utils'
], function(
    $,
    umUtils
) {
    function requestInvite(emailAddresses, extraProductId, extraGroups){
        return $.ajax({
            type: 'PUT',
            url: umUtils.restBaseUrl() + '/rest/um/1/requestaccess',
            contentType: 'application/json',
            data: JSON.stringify({
                emailAddresses: emailAddresses,
                extraProductId: extraProductId,
                extraGroups: extraGroups
            })
        });
    }
    return {
        createUser: requestInvite
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user/pending-invites.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/pending-invites', [
    'jquery',
    'user-management-common/flag',
    'user-management-common/create-user/request-invite',
    'user-management/helpers/um-utils'
], function(
    $,
    flag,
    requestInvite,
    umUtils
) {
    var pendingInvites = {};
    pendingInvites.hasCompleted = false;
    var pendingInvitesFlag;
    var INVITES_FLAG_CLOSED_KEY = "uppPendingInvitesFlagClosed";
    var LAST_CHECK_FOR_PENDING_INVITES_TIME = "uppLastCheckForPendingInvitesTime";
    var PENDING_INVITES = "uppLastPendingInvites";
    var ONE_HOUR = (1000 * 60 * 60);

    pendingInvites.flagHasBeenDismissed = function () { //visible for testing
        var dismissed = false;
        var lastClosed = localStorage[INVITES_FLAG_CLOSED_KEY];
        if (lastClosed) {
            dismissed = (new Date().getTime() - lastClosed) < ONE_HOUR; // Show the flag again after one hour
        }
        return dismissed;
    };

    function pendingInviteCount() {
        var deferredCount = $.Deferred();
        if (localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] != null && (new Date().getTime() - localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME]) < ONE_HOUR) {
            deferredCount.resolve(localStorage[PENDING_INVITES]);
        } else {
            $.ajax({
                url: umUtils.restBaseUrl() + '/rest/um/1/user/search?activeFilter=pending&max-results=1',
                dataType: 'json',
                // Revert JIRA's override of jQuery's default. This means the &_=<timestamp>
                // query param is not included on requests
                cache: true
            }).then(function (invites) {
                localStorage[PENDING_INVITES] = invites.length;
                localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] = new Date().getTime();
                deferredCount.resolve(invites.length);
            }, deferredCount.reject);
        }

        return deferredCount.promise();
    }

    function showPendingInvitesFlag() {
        pendingInvitesFlag = flag({
            id: 'pending-invites-flag',
            type: 'info',
            isHtml: true,
            body: AJS.format("There are users with pending invites to your Atlassian Cloud. {0}Approve here{1}.", '<a href="/admin/users?activeFilter=pending&src=pending.flag.' + encodeURIComponent(umUtils.productName()) + '">', '</a>')
        });
        $(pendingInvitesFlag).on('um-flag-close', function() {
            localStorage[INVITES_FLAG_CLOSED_KEY] = new Date().getTime();
        });
    }

    pendingInvites.closePendingInvitesFlag = function() {
        if (pendingInvitesFlag != null) {
            pendingInvitesFlag.close();
        }
    };

    pendingInvites.init = function() {
        umUtils.isSiteAdmin().then(function (isSiteAdmin) {
            if (isSiteAdmin && !pendingInvites.flagHasBeenDismissed()) {
                return pendingInviteCount().then(function (inviteCount) {
                    if (inviteCount > 0) {
                        showPendingInvitesFlag();
                    }
                });
            }
        }).always(function() { pendingInvites.hasCompleted = true; })
    };

    return pendingInvites;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user-init.js' */
require(['jquery', 'user-management-common/create-user/request-invite', 'user-management-common/create-user/pending-invites'],
function($, requestInvite, pendingInvites) {
    $(pendingInvites.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = 'includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = 'includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-on-space.js' */
(function(a){a(function(){function b(){var c="com.atlassian.confluence.extra.team-calendars:tc-on-space-blueprint-webitem";Confluence.Blueprint.setDirectCallback(c,function(f,d){d.finalUrl=Confluence.getContextPath()+"/display/"+d.spaceKey+"/calendars?src=sidebar&openAddCalDialog=true"})}b()})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("/wiki") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){if(ev.type==="click"&&ev.which===2){window.open(state.finalUrl)}else{window.location=state.finalUrl}}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}return{success:function(callback){callback()}}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('With meeting notes you can...') + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Crowd-source your agenda') + '</h3><p>' + soy.$$escapeHtml('Distribute an agenda and keep meetings focused.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Capture meeting minutes') + '</h3><p>' + soy.$$escapeHtml('Take notes and make them available to everyone.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Create and assign tasks') + '</h3><p>' + soy.$$escapeHtml('Assign action items for attendees to work on afterward.') + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.growth.product-growth-confluence-plugin:growth-web-resources', location = 'js/store.js' */
var GROW=GROW||{};GROW.Store=GROW.Store||{};(function(a){GROW.Store.get=function(b){return AJS.Meta.get(b)};GROW.Store.getNumber=function(b){return AJS.Meta.getNumber(b)};GROW.Store.getBoolean=function(b){return AJS.Meta.getBoolean(b)};GROW.Store.set=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.setGlobal=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.remove=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})};GROW.Store.removeGlobal=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
require(["jquery","confluence/legacy","ajs","skate"],function(g,h,d,b){var c=function(){return !!g("#confluence-ui").length};var e=h.getContextPath();var f=function(l){var k=c();var j=d.Meta.get("page-id");var i=d.Meta.get("remote-user");var m=g("#page-restricted-container button");if(!k){g("#breadcrumbs").hide();g("#title-text.with-breadcrumbs").hide()}if(m.length){d.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:j,requestAccessUser:i}})}};var a=function(k,j,l){var q=g(k);var i=g(l);var m=d.Meta.get("page-id");var n=d.Meta.get("remote-user");d.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:m,requestAccessUser:n}});i.attr("aria-disabled","true");var o;var p=g(h.Request.Access.loading({}));i.replaceWith(p);g.ajax({url:e+"/rest/request-access/latest/page/restriction/"+m,success:function(r){o=g(h.Request.Access.result({success:true,recipient:r}));q.removeClass("page-restricted").addClass("access-requested")},error:function(r,s){o=g(h.Request.Access.result({success:false}))},complete:function(){p.replaceWith(o);h.Binder.userHover()}})};b("page-restricted",{events:{"click button":a},type:b.types.CLASS,attached:f})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
define("confluence-request-access-plugin/grant-access",["jquery","confluence/legacy","ajs"],function(d,f,a){var b=f.getContextPath();var c=function(g){g=g.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+g+"=([^&#]*)");var h=i.exec(location.search);return h==null?"":decodeURIComponent(h[1].replace(/\+/g," "))};var e=function(){var j=a.Meta.get("page-id");var n=a.Meta.get("remote-user");var l=c("username");var k=c("userFullName").split("+").join(" ");var h=d("#content-metadata-page-restrictions");var i=d("#content-metadata-page-restrictions.restricted").length!==0;if(!h.length||!i||!c("grantAccess")){return}var m=d(f.Request.Access.loading());var g=a.InlineDialog(h,"grantAccessDialog",function(p,o,q){p.css({padding:"20px"}).html(f.Grant.Access.dialog({requestAccessUsername:l,requestAccessUserFullName:k}));p.on("click",".aui-button.grant-access",function(t){t.stopPropagation();var r=p.find(".actions-result");r.replaceWith(m);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:j,grantAccessUser:n,requestAccessUser:l}});var s="";var u=true;d.ajax({url:b+"/rest/request-access/latest/page/restriction/"+j,type:"POST",contentType:"application/json; charset=utf-8",data:l,success:function(w,x,v){if(v.status==202){s="Access was already granted to the user."}else{s="Access was granted, a notification to the user will be sent."}},error:function(v){u=false;if(v.status==412){s="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(v.status==502){s="Access was granted, but an unexpected error happened while sending the notification."}else{s="Sorry, there was an unexpected error while granting access."}}},complete:function(v){m.replaceWith(d(f.Grant.Access.result({success:u,message:s})));setTimeout(function(){g.hide()},6000)}})});p.on("click",".aui-button.deny-access",function(r){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:j,grantAccessUser:n,requestAccessUser:l}});g.hide()});q();return false},{offsetY:10,offsetX:-20,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(g.hide(),5000)}});g.show()};return{init:e}});require("confluence/module-exporter").safeRequire("confluence-request-access-plugin/grant-access",function(a){AJS.toInit(function(){a.init()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_ignored) {
  var output = '<div id="request-access">';
  if (opt_data.success) {
    var usernameLink__soy6 = '' + Confluence.Request.Access.usernameLink({user: opt_data.recipient});
    output += '<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">' + soy.$$filterNoAutoescape(AJS.format('Your request has been sent to {0}. If approved you will receive an email shortly.',usernameLink__soy6)) + '</p>';
  } else {
    output += '<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml('Your request for access has not been sent. Contact your space admin.') + '</p>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Request.Access.result.soyTemplateName = 'Confluence.Request.Access.result';
}


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml('Loading, please wait') + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  output += '<h2 class="grant-access-title">' + soy.$$escapeHtml('Access request') + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(AJS.format('{0} wants to view this page.',usernameLink__soy4)) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml('Grant access') + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml('Deny') + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.result = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-' + ((opt_data.success) ? 'approve' : 'error') + '" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.result.soyTemplateName = 'Confluence.Grant.Access.result';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:synchrony-util', location = '/js/synchrony-util.js' */
define("confluence-collaborative-editor-plugin/synchrony-util","window jquery underscore confluence/meta confluence/get-content-id confluence/performance-session ajs".split(" "),function(f,g,l,h,i,j,c){function d(a){var b=h.get(a);if(b===void 0){b=g('meta[name="ajs-'+a+'"]').attr("content");if(b!==void 0)h.set(a,b);else{console.error("Missing '"+a+"' metadata value");k()&&c.trigger("editor.error.message",{messageKey:"collaborative-editor-load-failure",message:c.I18n.getText("editor.collaborative-editing.refresh-editor.error"),
close:"manual"})}}return b}function k(){return c.Rte.getEditor()&&c.Rte.getEditor().initialized}return{retrieveMetadata:d,getEntityId:function(){return"/"+d("synchrony-app-id")+"/confluence-"+i()},synchronyReady:function(){return i()!=="0"},getServiceUrl:function(){return d("synchrony-service-uri")},getXhrFallbackFlag:function(){return d("use-xhr-fallback")},getLatestRevisionWithAttr:function(a,b){return l.last(a.filter(function(a){return a.meta&&a.meta[b]}))},hasRevisionType:function(a,b){return a.some(function(a){return a.meta&&
a.meta.type===b})},hasRevisionTrigger:function(a,b){return a.some(function(a){return a.meta&&a.meta.trigger===b})},asArray:function(){return Array.prototype.slice.call(arguments)},time:function(a){j.debugTime(a)},timeEnd:function(a){j.debugTimeEnd(a)},loadScript:function(a){var b=g.Deferred(),c=f.document.getElementsByTagName("head")[0],e=f.document.createElement("script");e.onload=b.resolve;e.onerror=b.reject;e.type="text/javascript";e.src=d("synchrony-resources-uri")+a;c.appendChild(e);return b.promise()},
isEditorInitialised:k}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:synchrony-content', location = '/js/synchrony-content.js' */
define("confluence-collaborative-editor-plugin/synchrony-content",["jquery","underscore","ajs","confluence/meta","confluence-collaborative-editor-plugin/synchrony-util"],function(c,f,e,h,g){var b;return{getContent:function(a){if("limited"===a.syncRevSource)return{error:"limited-mode"};var d=a.title,b=a.editorContent;return{title:d,raw:b,html:"<body data-title='"+f.escape(d)+"'>"+b+"</body>",error:!!c("<div>"+b+"</div>").find(".fatal-render-error").length,confRev:a.confRev,syncRev:"dummy-sync-rev"===
a.syncRev?null:a.syncRev,syncRevSource:a.syncRevSource}},isUnpublished:function(){return g.retrieveMetadata("new-page")},fixTinymceCaretContainer:function(a,b){(!a.childNodes.length||1===a.childNodes.length&&a.firstChild&&a.firstChild.classList&&a.firstChild.classList.contains("synchrony-container")&&/^\s*$/.test(a.firstChild.textContent))&&b.setContent("")},writeTitleToRootElement:function(){var a=c("#content-title").val();if(a!==b){var d=frames.wysiwygTextarea_ifr;(void 0!==d.contentDocument?d.contentDocument:
d.document).body.setAttribute("data-title",a);b=a}},readTitleFromRootElement:function(a){a.hasAttribute("data-title")&&(a=a.getAttribute("data-title"),a!==b&&(c("#content-title").val(a),b=a))},bindPostPasteFix:function(){c(document).bind("prePaste",function(){e.trigger("synchrony.stop",{id:"confluence.postpaste-fix"})}).bind("postPaste",function(){setTimeout(function(){e.trigger("synchrony.start",{id:"confluence.postpaste-fix"})},0)})},isContentEmpty:function(a){return 0===c(a).find("img.editor-inline-macro").length&&
(/^\s+$/.test(a)||0===c(a).text().trim().length)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:officeconnector-analytics-resources', location = 'analytics/office-connector-analytics.js' */
AJS.toInit(function(a){Confluence.OfficeConnector=Confluence.OfficeConnector||{};Confluence.OfficeConnector.Analytics=(function(f,d){function g(h,i){AJS.trigger("analytics",{name:h,data:i})}function c(h){g("confluence.office.connector.word.import.submit",h)}function b(h){g("confluence.office.connector.editofficedocument",h)}function e(h){g("confluence.office.connector.view",{progId:h})}return{importWord:c,editOfficeDocument:b,viewMacros:e}})(AJS.$,window._)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:editinoffice', location = 'templates/extra/editinword/editInOffice.js' */
AJS.toInit(function(b){var a=AJS.Data.get("context-path");var c=b("a.office-editable, a.office-editable-pathauth");c.click(function(h){h.preventDefault();var g=b(this);var f=g.attr("data-use-path-auth");if(typeof(f)=="undefined"){f=(g.attr("id")=="edit-in-word-pathauth"||g.hasClass("office-editable-pathauth"))}else{f=(f==="true")}var i=g.attr("href");var d=g.attr("data-prog-id");if(typeof(d)=="undefined"){d=getProgID(i)}Confluence.OfficeConnector.Analytics.editOfficeDocument({programId:d});return doEditInOffice(a,i,d,f)})});function getProgID(b){var a=b.substring(b.lastIndexOf(".")+1);switch(a){case"ppt":case"pptx":case"ppsx":case"pot":case"potx":case"pptm":return"PowerPoint.Show";case"doc":case"docx":case"dot":case"dotx":return"Word.Document";case"xls":case"xlt":case"xlsx":case"xlst":case"xlsm":case"xltx":return"Excel.Sheet";default:return""}}function filterPath(b,c,a){AJS.$.ajax({url:contextPath+"/rest/office/1.0/authtoken",success:function(g){if(g.token){var d=b.split("/");var f="";for(var e=0;e<d.length-1;e++){if(d[e].length){f=f+"/"+d[e]}}f=f+"/ocauth/"+g.token+"/"+d[d.length-1];c(f)}else{a("Unable to retrieve a temporary auth token. Check your server logs.")}},error:function(d,f,e){a("Ajax error retrieving token: "+f+", error from server: "+e)},statusCode:{403:function(){a("The current configuration requires you to be logged in to use the Office Connector.")}}})}function getCookie(b){var f=document.cookie.split(";");var c="";var d="";var e="";for(var a=0;a<f.length;a++){c=f[a].split("=");d=c[0].replace(/^\s+|\s+$/g,"");if(d==b){if(c.length>1){e=unescape(c[1].replace(/^\s+|\s+$/g,""))}return e}c=null;d=""}return null}function getBaseUrl(){return location.protocol+"//"+location.host}function handleTokenError(a){alert(a)}function doEditInOffice(b,h,c,f){var e=getBaseUrl();var g=typeof window.InstallTrigger!=="undefined";if(window.ActiveXObject!==undefined){var a;try{a=new ActiveXObject("SharePoint.OpenDocuments.1")}catch(d){window.alert("Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.");return false}if(a){if(f){filterPath(h,function(i){a.EditDocument(e+i,c)},handleTokenError)}else{a.EditDocument(e+h,c)}return false}else{window.alert("Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.");return false}}else{if(!g){editWithMicrosoftOffice(f,h)}else{if(window.URLLauncher){if(isMicrosoftOffice(h)){editWithMicrosoftOffice(f,h)}else{editWithNonMicrosoftOffice(f,h)}}else{if(window.confirm("A plugin is required to use this feature. Would you like to download it?")){InstallTrigger.install({"WebDAV Launcher":"https://update.atlassian.com/office-connector/URLLauncher/latest/webdavloader.xpi"})}}}}return false}function editWithMicrosoftOffice(a,b){filterPath(b,launchWithOFE,handleTokenError)}function isMicrosoftOffice(a){var b=a.substring(a.lastIndexOf(".")+1).toLowerCase();return new URLLauncher().isMicrosoftOfficeInstalled(b)}function launchWithFF(c){try{var a=new URLLauncher();if(a.open2){var e=new RegExp(contextPath+"/plugins/servlet/[^/]+/");var d=c.match(e);var b=c.substring(d[0].length);a.open2(encodeURI(d[0]),encodeURI(b))}else{a.open(c)}}catch(f){window.alert("Unable to open your Office file. Have you installed MS Office yet?. Read more detail at https://confluence.atlassian.com/display/DOC/Installing+the+Firefox+Add-On+for+the+Office+Connector")}}function editWithNonMicrosoftOffice(b,c){var a=navigator.appVersion.indexOf("Mac")!=-1;if(b&&!a){c=filterPath(c,launchWithFF,handleTokenError)}else{launchWithFF(c)}}function getMicrosoftProtocol(a){var b=a.substring(a.lastIndexOf(".")+1).toLowerCase();switch(b){case"ppt":case"pptx":case"ppsx":case"pot":case"potx":case"pptm":return"ms-powerpoint";case"doc":case"docx":case"dot":case"dotx":return"ms-word";case"xls":case"xlt":case"xlsx":case"xlst":case"xlsm":case"xltx":return"ms-excel";default:return""}}function launchWithOFE(a){try{var b=getMicrosoftProtocol(a)+":ofe|u|"+getBaseUrl()+a;window.location=b}catch(c){window.alert("Unable to open your Office file. Have you installed MS Office yet?. Read more detail at https://confluence.atlassian.com/display/DOC/Installing+the+Firefox+Add-On+for+the+Office+Connector")}}function enableEdit(a){a.style.cursor="pointer";a.style.backgroundColor="#cccccc";a.style.color=""}function disableEdit(a){a.style.cursor="";a.style.backgroundColor="#ffffff";a.style.color="#ffffff"}if(typeof define!=="undefined"){define("office-connector/edit-in-office",[],function(){return{getProgID:getProgID,doEditInOffice:doEditInOffice}})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return a.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","backbone"],function(b,a,c){return c.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(f){var d=b(f.target).is(":checked");this.model.saveWatchPage(d)},changeWatchBlogs:function(f){var d=b(f.target).is(":checked");this.model.saveWatchBlogs(d)},changeWatchSpace:function(f){var d=b(f.target).is(":checked");this.model.saveWatchSpace(d)},togglePageEnabledState:function(d){var e=d.get("watchingPage");var g=d.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",g);this.$("#cw-watch-page").prop("checked",e||g);var f=g?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",f)},toggleBlogsEnabledState:function(d){var g=d.get("watchingBlogs");var f=d.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",f);this.$("#cw-watch-blogs").prop("checked",g||f);var e=f?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",e)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var e=this.model.get("watchingPage");var i=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var d=this.model.get("isBlogPost");function h(){if(g){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(e&&d&&i){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(e&&d){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(e){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(d&&i){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(d){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var f=h();this.$(".cw-title").text(f.title);this.$(".cw-title-description").text(f.description)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","skate","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(b,j,c,i,g,e,h){function a(k,o){f(k,o);var n=new g(o);var m=new e({model:n});i.InlineDialog(k,"confluence-watch",function(q,p,r){m.setElement(q);m.render();r()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){b(".tipsy").hide()}});n.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(p){f(k,p.toJSON())});n.on("change:watchingPage",function(p,r){var q=r?"watch-page":"unwatch-page";i.trigger("analytics",{name:q})});n.on("change:watchingBlogs",function(p,r){var q=r?"watch-blogs":"unwatch-blogs";i.trigger("analytics",{name:q})});n.on("change:watchingSpace",function(p,r){var q=r?"watch-space":"unwatch-space";i.trigger("analytics",{name:q})});d(n);var l=false;b(document).on("keyup",function(){l=false});window.CW_watchPage=function(){if(l){return}l=true;var r=n.get("watchingSpace");var q=n.get("watchingPage");if(r){b("body, #splitter-content").animate({scrollTop:0},300,function(){k.click();setTimeout(function(){b(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var s=!q;n.saveWatchPage(s);var p=s?"You started watching this page.":"You stopped watching this page.";h(p)}}}function f(l,r){var n=r.watchingPage;var k=r.isBlogPost&&r.watchingBlogs;var p=r.watchingSpace;if(n||k||p){var m=l.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var o=i.format("{0}W{1}atching","<u>","</u>");l.prop("title","Stop watching (w)").children("span").empty().append(m).append(" "+o)}else{var m=l.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var q=i.format("{0}W{1}atch","<u>","</u>");l.prop("title","Watch (w)").children("span").empty().append(m).append(" "+q)}}function d(k){k.on("change:watchingPage",function(l,n){var m=n?"watchpage.pageoperation":"unwatchpage.pageoperation";i.trigger(m)})}c("watch-content-button",{type:c.types.CLASS,events:{click:function(k,l){l.preventDefault()}},attached:function(o){var n=b(o);var l=n.attr("page-id")||i.Meta.get("page-id");var p=n.attr("space-key")||i.Meta.get("space-key");var k=n.attr("space-name")||i.Meta.get("space-name");var m=i.contextPath()+"/rest/watch-button/1.0/watchState/"+l;if(!l||!p||!k){i.debug("Could not initialize Watch content button because of missing pageId, spaceKey or spaceName");return}b.getJSON(m).then(function(q){j.extend(q,{pageId:l,spaceKey:p,spaceName:k});a(n,q);n.addClass("watch-state-initialised")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Watch.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_ignored) {
  return '<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ' + ((opt_data.watchingPage) ? 'checked' : '') + '><label for="cw-watch-page">' + ((opt_data.isBlogPost) ? soy.$$escapeHtml('Watch blog post') : soy.$$escapeHtml('Watch page')) + '</label></div></div>' + ((opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml('Watch for new blog posts in this space') + '</label></div></div>' : '') + '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ' + ((opt_data.watchingSpace) ? 'checked' : '') + '><label for="cw-watch-space">' + soy.$$escapeHtml('Watch all content in this space') + '</label></div></form>' + ((opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml('Manage Watchers') + '</button></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Watch.Templates.dialogBody.soyTemplateName = 'Confluence.Watch.Templates.dialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:autocomplete', location = 'js/autocomplete.js' */
define("confluence-share-page-plugin/js/autocomplete",["ajs"],function(a){return{autocomplete:function(e){e=e||document.body;var f=a.$,b=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var d=function(k){if(!k||!k.result){throw new Error("Invalid JSON format")}var g=[];for(var h=0;h<k.result.length;h++){var j=k.result[h];if(j.type=="group"){j=c(j)}}g.push(k.result);return g};function c(g){if(g.name=="confluence-users"||g.name=="confluence-administrators"){return g}g.title=g.name;g.group=g.name;g.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};g.link=[{href:Confluence.getContextPath(),rel:"self"}];return g}f("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",e).each(function(){var i=f(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var h=i.attr("data-max")||10,k=i.attr("data-alignment")||"left",j=i.attr("data-dropdown-target"),g=null;if(j){g=f(j)}else{g=f("<div></div>");i.after(g)}g.addClass("aui-dd-parent autocomplete");i.quicksearch(a.REST.getBaseUrl()+"search/user-or-group.json",function(){i.trigger("open.autocomplete-sharepage")},{makeParams:function(l){return{"max-results":h,query:l.replace("{|}","")}},dropdownPlacement:function(l){g.append(l)},makeRestMatrixFromData:d,addDropdownData:function(m){var l=f.trim(i.val());if(b.test(l)){m.push([{name:l,email:l,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!m.length){var n=i.attr("data-none-message");if(n){m.push([{name:n,className:"no-results",href:"#"}])}}return m},ajsDropDownOptions:{alignment:k,displayHandler:function(l){if(l.restObj&&l.restObj.username){return l.name+" ("+l.restObj.username+")"}return l.name},selectionHandler:function(n,m){if(m.find(".search-for").length){i.trigger("selected.autocomplete-sharepage",{searchFor:i.val()});return}if(m.find(".no-results").length){this.hide();n.preventDefault();return}var l=f("span:eq(0)",m).data("properties");if(!l.email){l=l.restObj}i.trigger("selected.autocomplete-sharepage",{content:l});this.hide();n.preventDefault()}}})})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:jquery-elastic', location = 'js/jquery-elastic.js' */
define("confluence-share-page-plugin/js/jquery-elastic",["jquery","ajs"],function(b,a){(function(c){b.fn.extend({elastic:function(){var d=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var j=b(this),e=b("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),l=parseInt(j.css("line-height"),10)||parseInt(j.css("font-size"),"10"),n=parseInt(j.css("height"),10)||l*3,m=parseInt(j.css("max-height"),10)||Number.MAX_VALUE,f=0;if(m<0){m=Number.MAX_VALUE}e.appendTo(j.parent());var h=d.length;while(h--){e.css(d[h].toString(),j.css(d[h].toString()))}function k(){var i=Math.floor(parseInt(j.width(),10));if(e.width()!==i){e.css({width:i+"px"});g(true)}}function o(i,q){var p=Math.floor(parseInt(i,10));if(j.height()!==p){j.css({height:p+"px",overflow:q})}}function g(r){var q=j.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=e.html().replace(/<br>/ig,"<br />");if(r||q+"&nbsp;"!==i){e.html(q+"&nbsp;");if(Math.abs(e.height()+l-j.height())>3){var p=e.height()+l;if(p>=m){o(m,"auto")}else{if(p<=n){o(n,"hidden")}else{o(p,"hidden")}}}}}j.css({overflow:"hidden"});j.bind("keyup change cut paste",function(){g()});c(window).bind("resize",k);j.bind("resize",k);j.bind("update",g);j.bind("input paste",function(i){setTimeout(g,250)});g()})}})})(a.$)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml('No matches') + '" placeholder="' + soy.$$escapeHtml('User name, group or email') + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml('Add an optional note') + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml('Share') + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml('Cancel') + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
define("confluence-share-button",["ajs","jquery","skate","confluence-share-page-plugin/js/autocomplete","confluence-share-page-plugin/js/jquery-elastic","confluence/legacy"],function(i,f,g,h,l,j){var d=function(p,n,o){if(p.find("input").length){o();return}p.append(j.Templates.Share.Dialog.shareContentPopup());j.SharePage.autocompleteUser();var q=function(s){j.SharePage.current.hide();if(s){setTimeout(function(){p.empty()},300)}return false};f(document).keyup(function(s){if(s.keyCode==27){q(true);f(document).unbind("keyup",arguments.callee);return false}return true});p.find(".close-dialog").click(function(){q(true)});p.find("#note").elastic();p.find("form").submit(function(){var x=[];p.find(".recipients li").each(function(y,z){x.push(f(z).attr("data-userKey"))});if(x.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");p.find(".progress-messages-icon").removeClass("error");p.find(".progress-messages").text("Sending");p.find(".progress-messages").attr("title","Sending");var u=Raphael.spinner(p.find(".progress-messages-icon")[0],7,"#666");p.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");p.find(".progress-messages").css("padding-left",p.find(".progress-messages-icon").innerWidth()+20);var x=[];p.find(".recipients li[data-userKey]").each(function(y,z){x.push(f(z).attr("data-userKey"))});var w=[];p.find(".recipients li[data-email]").each(function(y,z){w.push(f(z).attr("data-email"))});var s=[];p.find(".recipients li[data-group]").each(function(y,z){s.push(f(z).attr("data-group"))});var t=p.find("#note");var v={users:x,emails:w,groups:s,note:t.hasClass("placeholded")?"":t.val(),entityId:i.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:j.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(v),dataType:"text",success:function(){setTimeout(function(){u();p.find(".progress-messages-icon").addClass("done");p.find(".progress-messages").text("Sent");p.find(".progress-messages").attr("title","Sent");setTimeout(function(){p.find(".progress-messages").text("");p.find(".progress-messages-icon").removeClass("done");p.find("#note").val("");f("button,input,textarea",p).removeAttr("disabled");q(false)},1000)},500)},error:function(z,y){u();p.find(".progress-messages-icon").addClass("error");p.find(".progress-messages").text("Error sending");p.find(".progress-messages").attr("title","Error sending"+": "+y);f("button,input,textarea",p).removeAttr("disabled")}});return false});var r=p.find("#users");var m=p.find("input.submit");r.bind("selected.autocomplete-sharepage",function(t,s){var u=function(x,w,y){var A=p.find(".recipients"),z,v;z="li[data-"+x+'="'+y.content[x]+'"]';if(A.find(z).length>0){A.find(z).hide()}else{A.append(w(y.content))}v=A.find(z);v.find(".remove-recipient").click(function(){v.remove();if(A.find("li").length==0){m.attr("disabled","true")}j.SharePage.current.refresh();r.focus();return false});v.fadeIn(200)};if(s.content.email){u("email",j.Templates.Share.Dialog.recipientEmail,s)}else{if(s.content.type=="group"){u("group",j.Templates.Share.Dialog.recipientGroup,s)}else{u("userKey",j.Templates.Share.Dialog.recipientUser,s)}}j.SharePage.current.refresh();m.removeAttr("disabled");r.val("");r.focus();return false});r.bind("open.autocomplete-sharepage",function(t,s){if(f("a:not(.no-results)",i.dropDown.current.links).length>0){i.dropDown.current.moveDown()}});r.keypress(function(s){return s.keyCode!=13});f(document).bind("showLayer",function(u,t,s){if(t=="inlineDialog"&&s.popup==j.SharePage.current){s.popup.find("#users").focus()}});f(n).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);o()};var a=function(m){j.SharePage.initDialog(f("#shareContentLink"),"shareContentPopup")};var b={width:250};var e=function(m){j.SharePage={};j.SharePage.autocompleteUser=h.autocomplete;j.SharePage.initDialog=function(n,o){j.SharePage.current=i.InlineDialog(n,o,d,b)}};var c=function(m){};var k=function(){g("webitem-share-button",{type:g.types.CLASS,events:{},attached:a,detached:c,created:e})};return{attached:a,detached:c,init:k}});require("confluence/module-exporter").safeRequire("confluence-share-button",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-resources', location = 'com/atlassian/confluence/plugins/labels/labels.js' */
define("confluence-labels/labels/labels","ajs confluence/templates window document jquery confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(d,v,w,x,b,B){var m,q=function(a,e){if(!a||!e)var c=b("#dialog-label-list"),a=c.attr("entityid"),e=c.attr("entitytype");return!a||!e?b(k.labelView):b(".labels-section-content").filter(function(){return this.getAttribute("entityid")==a&&this.getAttribute("entitytype")==e}).find(k.labelView)};d.bind("init.rte-control",function(){var a=0;if(d.Meta.get("num-labels"))a=
d.Meta.get("num-labels");else if(b("#createPageLabelsString").val())a=b.trim(b("#createPageLabelsString").val()).split(/\s+/).length;if(a!=0){d.Meta.set("num-labels",a);b("#rte-button-labels").trigger("updateLabel")}});var y=function(a){a=b.trim(a);if(!a)return[];var e=[],c=(new Date).getTime();b(a.split(/\s+/)).each(function(a,b){var h=b.split(":"),i,d=h[0];if(h.length===2){i=h[0];d=h[1]}e.push({name:d,prefix:i,id:c});c++});return e},k={labelView:".label-list",labelItem:".aui-label",noLabelsMessage:".no-labels-message",
idAttribute:"data-label-id",labelsFormFieldId:d.Meta.get("labels-form-field-id")||"createPageLabelsString"},z=d.contextPath(),o={base:z+"/rest/ui/1.0/",getRestEndPoint:function(a){return this.base+(a=="attachment"?"attachment/":a=="template"?"template/":a=="space"?"space/":"content/")},index:z+"/labels/autocompletelabel.action?maxResults=3",validate:function(){return this.getRestEndPoint()+"labels/validate"},add:function(a,b){return this.getRestEndPoint(a)+b+"/labels"},remove:function(a,b,c){return this.getRestEndPoint(a)+
b+"/label/"+c},list:function(a,b){return this.getRestEndPoint(a)+b+"/labels"}},r=function(a){var e=b("#"+k.labelsFormFieldId);e.length&&e.val(a)},s=function(){var a=b("#"+k.labelsFormFieldId);return a.length?a.val():""},t=function(){return b(".space-administration").length},l=function(a){return a==="0"||!!x.getElementById("createpagetemplate")},A=function(a){p();if(a&&a.promise){a.always([C,D]);a.done(function(a,c){d.Meta.set("num-labels",q().first().find(k.labelItem).size());b("#rte-button-labels").trigger("updateLabel");
var f=c.not(".editable");c.find(".aui-label").length===0?f.find(".labels-edit-container").before(v.Labels.nolabels()):f.find(".no-labels-message").remove()})}return a},D=function(){b("#labels-string, #add-labels-editor-button").removeAttr("disabled aria-disabled")},C=function(){b("#labels-string").val("")},p=function(a){a=a||null;b("#label-operation-error-message").empty().toggle(!!a);d.messages.warning("#label-operation-error-message",{body:a})};b(x).on("click",".label-list.editable .aui-icon-close",
function(a){a.preventDefault();a=b("#dialog-label-list");m.removeLabel(b(this).closest("li"),a.attr("entityid"),a.attr("entitytype"))});d.toInit(function(){if(t()){m.bindAutocomplete();b(".label-list").addClass("editable")}});d.bind("editor-heartbeat",function(a,e){if(typeof e.labelsHash!=="undefined"){var c=b("#rte-button-labels");if(c.data("labelsHash")!==e.labelsHash){var f=d.Meta.get("content-type"),g=B.Drafts.isNewContent()?d.Meta.get("draft-id"):d.Meta.get("page-id");l(g)||b.ajax({url:o.list(f,
g),cache:false,success:function(a){d.Meta.set("num-labels",a.labels.length);b("#rte-button-labels").trigger("updateLabel");m.updateDialogLabelList(a.labels)},error:function(a,b){d.logError(b)}});c.data("labelsHash",e.labelsHash)}}});return m={addLabel:function(a,e,c){if(a){b("#labels-string, #add-labels-editor-button").attr({disabled:"disabled","aria-disabled":true});if(l(e)){var a=(s()+" "+a).split(/\s+/),f=[];b.each(a,function(a,c){b.inArray(c,f)===-1&&f.push(c)});a=f.join(" ")}var a={url:l(e)?
o.validate():o.add(c,e),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(y(a))},g=b.Deferred(),a=b.ajax(a);a.done(function(a){var f=b("#dialog-label-list").find(".label-list"),a=a.labels,j,u=[];b.each(a,function(a,b){b.prefix&&b.prefix!=="global"?u.push(b.prefix+":"+b.name):u.push(b.name)});j=u.join(" ");if(l()){var E=(new Date).getTime();b.each(a,function(a,b){b.id=E++})}r(j);m.updateDialogLabelList(a);j=d.Meta.get("space-key");var n=q(e,c).not(".editable");if(n.length){n.find("li.aui-label").remove();
n.find("li.labels-edit-container").before(v.Labels.dialogLabels({labels:a,spaceKey:j}))}g.resolve(a,n.add(f))});a.fail(function(a,b){var c;if(b==="timeout")c="Connecting to the server timed out, you\'ll need to try again";else try{c=JSON.parse(a.responseText).message}catch(f){c=b;d.log("Unexpected error when adding labels: "+f.message)}d.log("Failed to add labels: "+c);d.log("Failed to add labels xhr: "+a.responseText);p(c);g.reject(b)});a=g.promise()}else a=false;return A(a)},removeLabel:function(a,e,c){var f=a,g=e,h=c;if(f){f=f.jquery?
f:b(f);if(t()){g=d.Meta.get("space-key");h="space"}var i=f.attr(k.idAttribute),j=b.Deferred();if(l(g)){a=b.Deferred();a.resolve()}else{a={url:o.remove(h,g,i),type:"DELETE",dataType:"json",contentType:"application/json",data:{}};a=b.ajax(a)}a.done(function(){var a=t()?b("#space-categories-list"):q(g,h),c=a.find(k.labelItem).filter("["+k.idAttribute+"='"+i+"']");c.fadeOut("normal",function(){c.remove();j.resolve(f,a)});var d=b.trim(f.find("a").text()),e=s().split(/\s+/),e=b.grep(e,function(a){return a&&
a!==d});r(e.join(" "))});a.fail(function(a,b){d.log(b);p(b=="timeout"?"Connecting to the server timed out, you\'ll need to try again":b);j.reject(b)});a=j.promise()}else a=false;return A(a)},bindAutocomplete:function(){var a=b("#labels-string"),e=a.parents("#add-labels-form").length;if(a.length){b(w).bind("quicksearch.ajax-success",function(a,b){if(b.url=="/labels/autocompletelabel.action?maxResults=3"){m.queryTokens=b.json&&b.json.queryTokens||[];return false}});b(w).bind("quicksearch.ajax-error",function(a,b){if(b.url=="/labels/autocompletelabel.action?maxResults=3"){m.queryTokens=
[];return false}});a.quicksearch("/labels/autocompletelabel.action?maxResults=3",function(){if(!b("#labels-autocomplete-list .label-suggestion").length||a.val()==="")this.hide();else if(!e)for(var c=b("#labels-autocomplete-list a.label-suggestion"),f=0,d=c.length;f<d;f++)c.get(f).href="#"},{makeParams:function(a){return{query:a,contentId:d.params.pageId||""}},dropdownPlacement:function(a){b("#labels-autocomplete-list").append(a)},ajsDropDownOptions:{selectionHandler:function(c,d){if(d.find("a.label-suggestion").length){var g=
b("span",d),g=b.data(g[0],"properties"),h=a.val(),i=[];if(e){i=h.split(/\s+/);i[i.length-1]=g.name;a.val(i.join(" "))}else{for(var j=m.queryTokens,i=-1,k,l="",n=0,o=j.length;n<o;n++){l=j[n];k=h.lastIndexOf(l);k>i&&(i=k)}if(i!=-1){j=h.substr(0,i);(h=h.substr(i+l.length).match(/^\s+/))&&(j=j+h[0]);a.val(j+g.name)}else a.val(g.name)}}this.hide();c.preventDefault();a.focus()}}})}},labelsAreNotPersisted:l,routes:o,setLabelError:p,parseLabelStringToArray:y,getLabelLink:function(a,b){var c="/label/";a!==
null&&(a!=void 0&&a!=="")&&(c=c+(a+"/"));var d=encodeURI;var g=b.prefix,h=b.name;return d(c+(g==="global"||g==="team"||g===void 0||g===""||g===null?h:g+":"+h))},setLabelsInputField:r,getLabelsInputField:s}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-labels/labels/labels","AJS.Labels");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.soy' */
// This file was automatically generated from labels-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Labels.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Labels == 'undefined') { Confluence.Templates.Labels = {}; }


Confluence.Templates.Labels.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Add%2C+Remove+and+Search+for+Labels"});
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.helpLink.soyTemplateName = 'Confluence.Templates.Labels.helpLink';
}


Confluence.Templates.Labels.dialog = function(opt_data, opt_ignored) {
  return '<div id="labels-dialog"><form id="add-labels-form" method="GET" action="" class="aui"><div id="label-operation-error-container"><div id="label-operation-error-message" class="error-message" ></div></div><div id="label-input-fields"><input id="labels-string" autocomplete="off" name="labels-string" value="labels-string" class="text"><input id="add-labels-editor-button" type="submit" class="add-labels aui-button" value="' + soy.$$escapeHtml('Add') + '"></div><div id="labels-autocomplete-list" class="aui-dd-parent resize-to-input"></div><div id="dialog-label-list" class="labels-section-content"><!-- DIV placeholder for labels list, is copied into in labels-dialog.js --></div><div class="labels-tip"></div></form></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialog.soyTemplateName = 'Confluence.Templates.Labels.dialog';
}


Confluence.Templates.Labels.nolabels = function(opt_data, opt_ignored) {
  return '<li class="no-labels-message">' + soy.$$escapeHtml('No labels') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.nolabels.soyTemplateName = 'Confluence.Templates.Labels.nolabels';
}


Confluence.Templates.Labels.dialogLabelList = function(opt_data, opt_ignored) {
  return '<ul class="label-list editable">' + Confluence.Templates.Labels.dialogLabels(opt_data) + '</ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialogLabelList.soyTemplateName = 'Confluence.Templates.Labels.dialogLabelList';
}


Confluence.Templates.Labels.dialogLabels = function(opt_data, opt_ignored) {
  var output = '';
  var labelList18 = opt_data.labels;
  var labelListLen18 = labelList18.length;
  for (var labelIndex18 = 0; labelIndex18 < labelListLen18; labelIndex18++) {
    var labelData18 = labelList18[labelIndex18];
    output += '<li class="aui-label ' + ((opt_data.editable) ? 'aui-label-closeable aui-label-split' : '') + '" data-label-id="' + soy.$$escapeHtml(labelData18.id) + '"><a class="aui-label-split-main" href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(labelData18.link) + '" rel="tag">' + ((! labelData18.prefix || labelData18.prefix == 'global' || labelData18.prefix == 'team') ? soy.$$escapeHtml(labelData18.name) : soy.$$escapeHtml(labelData18.prefix) + ':' + soy.$$escapeHtml(labelData18.name)) + '</a>' + ((opt_data.editable) ? '<span class="aui-label-split-close"><span tabindex="0" class="aui-icon aui-icon-close"  title="' + soy.$$escapeHtml('Delete Label') + '" original-title="' + soy.$$escapeHtml('Delete Label') + '">' + soy.$$escapeHtml('Delete Label') + '</span></span>' : '') + '</li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialogLabels.soyTemplateName = 'Confluence.Templates.Labels.dialogLabels';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.js' */
define("confluence-labels/labels/dialog/labels-dialog","confluence/templates ajs confluence-labels/labels/labels confluence/meta jquery confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/dialog".split(" "),function(b,g,c,f,d,o,p){if(b.Labels){var h={},e=null,k=function(){d("#"+e.id).find(".label-list").removeClass("editable");e.hide();return false};h.bindOpenDialog=function(c){c.click(function(a){a.preventDefault();a=d(a.target).closest(".labels-section-content");a.length?h.openDialog(a):
h.openDialog()})};h.openDialog=function(i){var a,l,j;if(!e){e=p.component({width:600,height:250,id:"edit-labels-dialog",onCancel:k});e.addHeader("Labels");e.addPanel("Label Editor",b.Labels.dialog());e.addCancel("Close",k);e.addHelpText("Shortcut tip: In page view, pressing \u003cb\u003e{shortcut}\u003c/b\u003e also opens this dialog box",{shortcut:"l"});e.popup.element.find(".dialog-title").prepend(b.Labels.helpLink());d("#add-labels-form").submit(function(a){var b=d("#labels-string");a.preventDefault();a=d("#dialog-label-list");
c.addLabel(b.val(),a.attr("entityid"),a.attr("entitytype")).always(function(){d("#labels-autocomplete-list").find(".aui-dropdown").addClass("hidden");b.focus()})});c.bindAutocomplete()}if(i){a=i.attr("entityid");i=i.attr("entitytype")}else{i=f.get("content-type");a=o.Drafts.isNewContent()?f.get("draft-id"):f.get("page-id")}l=c.routes.list(i,a);j=d("#dialog-label-list");j.attr("entityid",a);j.attr("entitytype",i);var m=function(){e.show();d("#labels-string").val("").focus();g.trigger("labels.dialog.open")},
n=function(a){h.updateDialogLabelList(a.labels);f.set("num-labels",a.labels.length);d("#rte-button-labels").trigger("updateLabel");m()};if(c.labelsAreNotPersisted(a)){a=c.getLabelsInputField();a=c.parseLabelStringToArray(a);n({labels:a})}else d.ajax({url:l,cache:false,success:function(a){var b=[];d.each(a.labels,function(a,c){b.push(c.name)});c.setLabelsInputField(b.join(" "));n(a)},error:function(){c.setLabelError("Unable to fetch current labels from the server.");m()}});d("#dialog-label-list").attr("data-ready",
"true")};h.updateDialogLabelList=function(e){var a=d("#dialog-label-list");if(a.length){d.each(e,function(a,b){b.link=c.getLabelLink(f.get("space-key"),b)});a.html(b.Labels.dialogLabelList({labels:e,editable:true}))}};return h}});
require("confluence/module-exporter").safeRequire("confluence-labels/labels/dialog/labels-dialog",function(b){var g=require("ajs");g.Labels.bindOpenDialog=b.bindOpenDialog;g.Labels.openDialog=b.openDialog;g.Labels.updateDialogLabelList=b.updateDialogLabelList;g.toInit(function(c){c(document).on("click","#rte-button-labels",function(){b.openDialog()});c(".show-labels-editor").click(function(f){f.preventDefault();f=c(f.target).closest(".labels-section-content");b.openDialog(f)})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-analytics', location = 'includes/js/page.js' */
define("confluence/page",["ajs","jquery","confluence/analytics-support","window","document"],function(a,c,e,f,g){var i=a.Meta.get("page-id"),d=function(b,a){e.publish("confluence.page."+b,c.extend({pageID:i},a||{}))},j=(new Date).getTime();return function(){var b=c("#main-content");d("view");if(0<b.length){b.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(f.location.host)?"internal":"external";d("link.click",{linkType:a})});var h=c(f),e=(new Date).getTime();h.on("scroll.content",a.debounce(function(){var a=
g.body.scrollTop+g.body.offsetHeight,c=b.offset().top+b.height();a>c&&(d("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-j)/1E3}),h.off("scroll.content"))},200))}setTimeout(function(){d("reading")},3E5)}});require("confluence/module-exporter").safeRequire("confluence/page",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:linkpopup-resources', location = 'includes/js/linkpage.js' */
define("confluence/linkpage",["ajs","jquery","confluence-keyboard-shortcuts/confluence-keyboard-shortcuts","skate","aui/flag"],function(a,c,f,g,k){var d=null,h=function(){k({type:"error",body:"There was an error communicating with the server, please try again later.",close:"auto"})},i=function(e,l){if(!d){d=(new a.Dialog(600,225,"link-page-popup")).addHeader("Link to this Page").addPanel("Link to this Page","<form id='link-page-popup-form' class='aui'><fieldset></fieldset></form>").addCancel("Close",
function(){d.hide();return!1});f.keyboardShortcuts&&f.keyboardShortcuts.enabled&&d.addHelpText(a.format("Shortcut tip: Pressing \u003cb\u003e{0}\u003c/b\u003e also opens this dialog box","k"));var b=[{label:"Link",id:"link",value:e},{label:"Tiny Link",id:"tiny-link",value:l}];c.each(b,function(){c("#link-page-popup-form fieldset").append(a.format("<div class='field-group'><label for=''link-popup-field-{0}''>{1}:</label><input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''></div>",
this.id,this.label)).find("input:last").val(this.value)});b=c("#link-page-popup-form fieldset input.text");b.focus(function(){c(this).select()});b.mouseup(function(a){a.preventDefault()})}d.show();d.popup.element.find("#link-popup-field-tiny-link").select()},j=function(e){e.preventDefault();var e=c("link[rel=canonical]").attr("href"),d=c("link[rel=shortlink]").attr("href");e&&d?i(e,d):c.ajax({type:"GET",dataType:"json",url:a.contextPath()+"/rest/api/content/"+a.Meta.get("page-id"),error:function(){h()},
success:function(b){if(!b&&!b._links)h();else{var e=a.Meta.get("base-url")+b._links.webui,b=a.Meta.get("base-url")+b._links.tinyui;i(e,b)}}})};return{init:function(){g("action-link-page",{type:g.types.CLASS,attached:function(a){c(a).on("click",j)},detached:function(a){c(a).off("click",j)}})}}});require("confluence/module-exporter").safeRequire("confluence/linkpage",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:profile-macro-styles', location = 'includes/js/personal-sidebar.js' */
define("confluence/personal-sidebar",["jquery","confluence/storage-manager","ajs"],function(a,e,f){return{initialize:function(){function c(){b.toggleClass("collapsed");g.toggleClass("sidebar-collapsed");b.trigger("toggled")}var d=e("personal-sidebar"),b=a("#personal-info-sidebar"),h=b.height(),g=a("#content");d.getItemAsBoolean("show")&&c();a(".sidebar-collapse").click(function(a){c();d.setItem("show",b.hasClass("collapsed"));return f.stopEvent(a)}).height(h)}}});
require("confluence/module-exporter").safeRequire("confluence/personal-sidebar",function(a){require("ajs").toInit(a.initialize)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/templates-amd.js' */
define("tc/templates",function(){return Confluence.TeamCalendars.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/dialogs-amd.js' */
define("tc/dialogs",function(){return Confluence.TeamCalendars.Dialogs});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/backbone-amd.js' */
(function(a,b){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(e,f,d){a.Backbone=b(a,d,e,f)})}else{if(typeof exports!=="undefined"){var c=require("underscore");b(a,exports,c)}else{a.Backbone=b(a,{},a._,(a.jQuery||a.Zepto||a.ender||a.$))}}}(this,function(t,c,G,h){var r=t.Backbone;var j=[];var s=j.slice;c.VERSION="1.1.2";c.$=h;c.noConflict=function(){t.Backbone=r;return this};c.emulateHTTP=false;c.emulateJSON=false;var p=c.Events={on:function(J,M,L){if(!I(this,"on",J,[M,L])||!M){return this}this._events||(this._events={});var K=this._events[J]||(this._events[J]=[]);K.push({callback:M,context:L,ctx:L||this});return this},once:function(K,N,L){if(!I(this,"once",K,[N,L])||!N){return this}var J=this;var M=G.once(function(){J.off(K,M);N.apply(this,arguments)});M._callback=N;return this.on(K,M,L)},off:function(K,S,L){if(!this._events||!I(this,"off",K,[S,L])){return this}if(!K&&!S&&!L){this._events=void 0;return this}var R=K?[K]:G.keys(this._events);for(var Q=0,M=R.length;Q<M;Q++){K=R[Q];var T=this._events[K];if(!T){continue}if(!S&&!L){delete this._events[K];continue}var O=[];for(var P=0,N=T.length;P<N;P++){var J=T[P];if(S&&S!==J.callback&&S!==J.callback._callback||L&&L!==J.context){O.push(J)}}if(O.length){this._events[K]=O}else{delete this._events[K]}}return this},trigger:function(L){if(!this._events){return this}var K=s.call(arguments,1);if(!I(this,"trigger",L,K)){return this}var M=this._events[L];var J=this._events.all;if(M){d(M,K)}if(J){d(J,arguments)}return this},stopListening:function(M,K,O){var L=this._listeningTo;if(!L){return this}var J=!K&&!O;if(!O&&typeof K==="object"){O=this}if(M){(L={})[M._listenId]=M}for(var N in L){M=L[N];M.off(K,O,this);if(J||G.isEmpty(M._events)){delete this._listeningTo[N]}}return this}};var a=/\s+/;var I=function(Q,O,J,M){if(!J){return true}if(typeof J==="object"){for(var L in J){Q[O].apply(Q,[L,J[L]].concat(M))}return false}if(a.test(J)){var P=J.split(a);for(var K=0,N=P.length;K<N;K++){Q[O].apply(Q,[P[K]].concat(M))}return false}return true};var d=function(O,M){var P,N=-1,L=O.length,K=M[0],J=M[1],Q=M[2];switch(M.length){case 0:while(++N<L){(P=O[N]).callback.call(P.ctx)}return;case 1:while(++N<L){(P=O[N]).callback.call(P.ctx,K)}return;case 2:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J)}return;case 3:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J,Q)}return;default:while(++N<L){(P=O[N]).callback.apply(P.ctx,M)}return}};var q={listenTo:"on",listenToOnce:"once"};G.each(q,function(J,K){p[K]=function(N,L,P){var M=this._listeningTo||(this._listeningTo={});var O=N._listenId||(N._listenId=G.uniqueId("l"));M[O]=N;if(!P&&typeof L==="object"){P=this}N[J](L,P,this);return this}});p.bind=p.on;p.unbind=p.off;G.extend(c,p);var m=c.Model=function(J,L){var K=J||{};L||(L={});this.cid=G.uniqueId("c");this.attributes={};if(L.collection){this.collection=L.collection}if(L.parse){K=this.parse(K,L)||{}}K=G.defaults({},K,G.result(this,"defaults"));this.set(K,L);this.changed={};this.initialize.apply(this,arguments)};G.extend(m.prototype,p,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(J){return G.clone(this.attributes)},sync:function(){return c.sync.apply(this,arguments)},get:function(J){return this.attributes[J]},escape:function(J){return G.escape(this.get(J))},has:function(J){return this.get(J)!=null},set:function(R,K,V){var P,S,T,Q,O,U,L,N;if(R==null){return this}if(typeof R==="object"){S=R;V=K}else{(S={})[R]=K}V||(V={});if(!this._validate(S,V)){return false}T=V.unset;O=V.silent;Q=[];U=this._changing;this._changing=true;if(!U){this._previousAttributes=G.clone(this.attributes);this.changed={}}N=this.attributes,L=this._previousAttributes;if(this.idAttribute in S){this.id=S[this.idAttribute]}for(P in S){K=S[P];if(!G.isEqual(N[P],K)){Q.push(P)}if(!G.isEqual(L[P],K)){this.changed[P]=K}else{delete this.changed[P]}T?delete N[P]:N[P]=K}if(!O){if(Q.length){this._pending=V}for(var M=0,J=Q.length;M<J;M++){this.trigger("change:"+Q[M],this,N[Q[M]],V)}}if(U){return this}if(!O){while(this._pending){V=this._pending;this._pending=false;this.trigger("change",this,V)}}this._pending=false;this._changing=false;return this},unset:function(J,K){return this.set(J,void 0,G.extend({},K,{unset:true}))},clear:function(K){var J={};for(var L in this.attributes){J[L]=void 0}return this.set(J,G.extend({},K,{unset:true}))},hasChanged:function(J){if(J==null){return !G.isEmpty(this.changed)}return G.has(this.changed,J)},changedAttributes:function(L){if(!L){return this.hasChanged()?G.clone(this.changed):false}var N,M=false;var K=this._changing?this._previousAttributes:this.attributes;for(var J in L){if(G.isEqual(K[J],(N=L[J]))){continue}(M||(M={}))[J]=N}return M},previous:function(J){if(J==null||!this._previousAttributes){return null}return this._previousAttributes[J]},previousAttributes:function(){return G.clone(this._previousAttributes)},fetch:function(K){K=K?G.clone(K):{};if(K.parse===void 0){K.parse=true}var J=this;var L=K.success;K.success=function(M){if(!J.set(J.parse(M,K),K)){return false}if(L){L(J,M,K)}J.trigger("sync",J,M,K)};e(this,K);return this.sync("read",this,K)},save:function(N,K,R){var O,J,Q,L=this.attributes;if(N==null||typeof N==="object"){O=N;R=K}else{(O={})[N]=K}R=G.extend({validate:true},R);if(O&&!R.wait){if(!this.set(O,R)){return false}}else{if(!this._validate(O,R)){return false}}if(O&&R.wait){this.attributes=G.extend({},L,O)}if(R.parse===void 0){R.parse=true}var M=this;var P=R.success;R.success=function(T){M.attributes=L;var S=M.parse(T,R);if(R.wait){S=G.extend(O||{},S)}if(G.isObject(S)&&!M.set(S,R)){return false}if(P){P(M,T,R)}M.trigger("sync",M,T,R)};e(this,R);J=this.isNew()?"create":(R.patch?"patch":"update");if(J==="patch"){R.attrs=O}Q=this.sync(J,this,R);if(O&&R.wait){this.attributes=L}return Q},destroy:function(K){K=K?G.clone(K):{};var J=this;var N=K.success;var L=function(){J.trigger("destroy",J,J.collection,K)};K.success=function(O){if(K.wait||J.isNew()){L()}if(N){N(J,O,K)}if(!J.isNew()){J.trigger("sync",J,O,K)}};if(this.isNew()){K.success();return false}e(this,K);var M=this.sync("delete",this,K);if(!K.wait){L()}return M},url:function(){var J=G.result(this,"urlRoot")||G.result(this.collection,"url")||x();if(this.isNew()){return J}return J.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(K,J){return K},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return !this.has(this.idAttribute)},isValid:function(J){return this._validate({},G.extend(J||{},{validate:true}))},_validate:function(L,K){if(!K.validate||!this.validate){return true}L=G.extend({},this.attributes,L);var J=this.validationError=this.validate(L,K)||null;if(!J){return true}this.trigger("invalid",this,J,G.extend(K,{validationError:J}));return false}});var C=["keys","values","pairs","invert","pick","omit","chain"];G.each(C,function(J){if(!G[J]){return}m.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.attributes);return G[J].apply(G,K)}});var H=c.Collection=function(K,J){J||(J={});if(J.model){this.model=J.model}if(J.comparator!==void 0){this.comparator=J.comparator}this._reset();this.initialize.apply(this,arguments);if(K){this.reset(K,G.extend({silent:true},J))}};var z={add:true,remove:true,merge:true};var n={add:true,remove:false};G.extend(H.prototype,p,{model:m,initialize:function(){},toJSON:function(J){return this.map(function(K){return K.toJSON(J)})},sync:function(){return c.sync.apply(this,arguments)},add:function(K,J){return this.set(K,G.extend({merge:false},J,n))},remove:function(Q,L){var N=!G.isArray(Q);Q=N?[Q]:G.clone(Q);L||(L={});for(var M=0,O=Q.length;M<O;M++){var K=Q[M]=this.get(Q[M]);if(!K){continue}var P=this.modelId(K.attributes);if(P!=null){delete this._byId[P]}delete this._byId[K.cid];var J=this.indexOf(K);this.models.splice(J,1);this.length--;if(!L.silent){L.index=J;K.trigger("remove",K,this,L)}this._removeReference(K,L)}return N?Q[0]:Q},set:function(ab,L){L=G.defaults({},L,z);if(L.parse){ab=this.parse(ab,L)}var O=!G.isArray(ab);ab=O?(ab?[ab]:[]):ab.slice();var T,M,V,S,aa;var Q=L.at;var J=this.comparator&&(Q==null)&&L.sort!==false;var Z=G.isString(this.comparator)?this.comparator:null;var ac=[],W=[],U={};var R=L.add,N=L.merge,ad=L.remove;var X=!J&&R&&ad?[]:false;for(var Y=0,K=ab.length;Y<K;Y++){V=ab[Y];if(S=this.get(V)){if(ad){U[S.cid]=true}if(N&&V!==S){V=this._isModel(V)?V.attributes:V;if(L.parse){V=S.parse(V,L)}S.set(V,L);if(J&&!aa&&S.hasChanged(Z)){aa=true}}ab[Y]=S}else{if(R){M=ab[Y]=this._prepareModel(V,L);if(!M){continue}ac.push(M);this._addReference(M,L)}}M=S||M;if(!M){continue}T=this.modelId(M.attributes);if(X&&(M.isNew()||!U[T])){X.push(M)}U[T]=true}if(ad){for(var Y=0,K=this.length;Y<K;Y++){if(!U[(M=this.models[Y]).cid]){W.push(M)}}if(W.length){this.remove(W,L)}}if(ac.length||(X&&X.length)){if(J){aa=true}this.length+=ac.length;if(Q!=null){for(var Y=0,K=ac.length;Y<K;Y++){this.models.splice(Q+Y,0,ac[Y])}}else{if(X){this.models.length=0}var P=X||ac;for(var Y=0,K=P.length;Y<K;Y++){this.models.push(P[Y])}}}if(aa){this.sort({silent:true})}if(!L.silent){for(var Y=0,K=ac.length;Y<K;Y++){(M=ac[Y]).trigger("add",M,this,L)}if(aa||(X&&X.length)){this.trigger("sort",this,L)}}return O?ab[0]:ab},reset:function(M,J){J||(J={});for(var K=0,L=this.models.length;K<L;K++){this._removeReference(this.models[K],J)}J.previousModels=this.models;this._reset();M=this.add(M,G.extend({silent:true},J));if(!J.silent){this.trigger("reset",this,J)}return M},push:function(K,J){return this.add(K,G.extend({at:this.length},J))},pop:function(K){var J=this.at(this.length-1);this.remove(J,K);return J},unshift:function(K,J){return this.add(K,G.extend({at:0},J))},shift:function(K){var J=this.at(0);this.remove(J,K);return J},slice:function(){return s.apply(this.models,arguments)},get:function(J){if(J==null){return void 0}var K=this.modelId(this._isModel(J)?J.attributes:J);return this._byId[J]||this._byId[K]||this._byId[J.cid]},at:function(J){return this.models[J]},where:function(J,K){if(G.isEmpty(J)){return K?void 0:[]}return this[K?"find":"filter"](function(L){for(var M in J){if(J[M]!==L.get(M)){return false}}return true})},findWhere:function(J){return this.where(J,true)},sort:function(J){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}J||(J={});if(G.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(G.bind(this.comparator,this))}if(!J.silent){this.trigger("sort",this,J)}return this},pluck:function(J){return G.invoke(this.models,"get",J)},fetch:function(J){J=J?G.clone(J):{};if(J.parse===void 0){J.parse=true}var L=J.success;var K=this;J.success=function(M){var N=J.reset?"reset":"set";K[N](M,J);if(L){L(K,M,J)}K.trigger("sync",K,M,J)};e(this,J);return this.sync("read",this,J)},create:function(K,J){J=J?G.clone(J):{};if(!(K=this._prepareModel(K,J))){return false}if(!J.wait){this.add(K,J)}var M=this;var L=J.success;J.success=function(N,O){if(J.wait){M.add(N,J)}if(L){L(N,O,J)}};K.save(null,J);return K},parse:function(K,J){return K},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(J){return J[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(L,K){if(this._isModel(L)){if(!L.collection){L.collection=this}return L}K=K?G.clone(K):{};K.collection=this;var J=new this.model(L,K);if(!J.validationError){return J}this.trigger("invalid",this,J.validationError,K);return false},_isModel:function(J){return J instanceof m},_addReference:function(K,J){this._byId[K.cid]=K;var L=this.modelId(K.attributes);if(L!=null){this._byId[L]=K}K.on("all",this._onModelEvent,this)},_removeReference:function(K,J){if(this===K.collection){delete K.collection}K.off("all",this._onModelEvent,this)},_onModelEvent:function(L,K,N,J){if((L==="add"||L==="remove")&&N!==this){return}if(L==="destroy"){this.remove(K,J)}if(L==="change"){var M=this.modelId(K.previousAttributes());var O=this.modelId(K.attributes);if(M!==O){if(M!=null){delete this._byId[M]}if(O!=null){this._byId[O]=K}}}this.trigger.apply(this,arguments)}});var D=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample","partition"];G.each(D,function(J){if(!G[J]){return}H.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.models);return G[J].apply(G,K)}});var i=["groupBy","countBy","sortBy","indexBy"];G.each(i,function(J){if(!G[J]){return}H.prototype[J]=function(M,K){var L=G.isFunction(M)?M:function(N){return N.get(M)};return G[J](this.models,L,K)}});var w=c.View=function(J){this.cid=G.uniqueId("view");J||(J={});G.extend(this,G.pick(J,y));this._ensureElement();this.initialize.apply(this,arguments)};var g=/^(\S+)\s*(.*)$/;var y=["model","collection","el","id","attributes","className","tagName","events"];G.extend(w.prototype,p,{tagName:"div",$:function(J){return this.$el.find(J)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(J){this.undelegateEvents();this._setElement(J);this.delegateEvents();return this},_setElement:function(J){this.$el=J instanceof c.$?J:c.$(J);this.el=this.$el[0]},delegateEvents:function(L){if(!(L||(L=G.result(this,"events")))){return this}this.undelegateEvents();for(var K in L){var M=L[K];if(!G.isFunction(M)){M=this[L[K]]}if(!M){continue}var J=K.match(g);this.delegate(J[1],J[2],G.bind(M,this))}return this},delegate:function(K,J,L){this.$el.on(K+".delegateEvents"+this.cid,J,L)},undelegateEvents:function(){if(this.$el){this.$el.off(".delegateEvents"+this.cid)}return this},undelegate:function(K,J,L){this.$el.off(K+".delegateEvents"+this.cid,J,L)},_createElement:function(J){return document.createElement(J)},_ensureElement:function(){if(!this.el){var J=G.extend({},G.result(this,"attributes"));if(this.id){J.id=G.result(this,"id")}if(this.className){J["class"]=G.result(this,"className")}this.setElement(this._createElement(G.result(this,"tagName")));this._setAttributes(J)}else{this.setElement(G.result(this,"el"))}},_setAttributes:function(J){this.$el.attr(J)}});c.sync=function(Q,L,K){var N=u[Q];G.defaults(K||(K={}),{emulateHTTP:c.emulateHTTP,emulateJSON:c.emulateJSON});var P={type:N,dataType:"json"};if(!K.url){P.url=G.result(L,"url")||x()}if(K.data==null&&L&&(Q==="create"||Q==="update"||Q==="patch")){P.contentType="application/json";P.data=JSON.stringify(K.attrs||L.toJSON(K))}if(K.emulateJSON){P.contentType="application/x-www-form-urlencoded";P.data=P.data?{model:P.data}:{}}if(K.emulateHTTP&&(N==="PUT"||N==="DELETE"||N==="PATCH")){P.type="POST";if(K.emulateJSON){P.data._method=N}var M=K.beforeSend;K.beforeSend=function(R){R.setRequestHeader("X-HTTP-Method-Override",N);if(M){return M.apply(this,arguments)}}}if(P.type!=="GET"&&!K.emulateJSON){P.processData=false}var J=K.error;K.error=function(S,T,R){K.textStatus=T;K.errorThrown=R;if(J){J.apply(this,arguments)}};var O=K.xhr=c.ajax(G.extend(P,K));L.trigger("request",L,O,K);return O};var u={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};c.ajax=function(){return c.$.ajax.apply(c.$,arguments)};var F=c.Router=function(J){J||(J={});if(J.routes){this.routes=J.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var l=/\((.*?)\)/g;var k=/(\(\?)?:\w+/g;var E=/\*\w+/g;var f=/[\-{}\[\]+?.,\\\^$|#\s]/g;G.extend(F.prototype,p,{initialize:function(){},route:function(K,L,M){if(!G.isRegExp(K)){K=this._routeToRegExp(K)}if(G.isFunction(L)){M=L;L=""}if(!M){M=this[L]}var J=this;c.history.route(K,function(O){var N=J._extractParameters(K,O);if(J.execute(M,N,L)!==false){J.trigger.apply(J,["route:"+L].concat(N));J.trigger("route",L,N);c.history.trigger("route",J,L,N)}});return this},execute:function(L,K,J){if(L){L.apply(this,K)}},navigate:function(K,J){c.history.navigate(K,J);return this},_bindRoutes:function(){if(!this.routes){return}this.routes=G.result(this,"routes");var K,J=G.keys(this.routes);while((K=J.pop())!=null){this.route(K,this.routes[K])}},_routeToRegExp:function(J){J=J.replace(f,"\\$&").replace(l,"(?:$1)?").replace(k,function(L,K){return K?L:"([^/?]+)"}).replace(E,"([^?]*?)");return new RegExp("^"+J+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(J,K){var L=J.exec(K).slice(1);return G.map(L,function(N,M){if(M===L.length-1){return N||null}return N?decodeURIComponent(N):null})}});var b=c.History=function(){this.handlers=[];G.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var o=/^[#\/]|\s+$/g;var B=/^\/+|\/+$/g;var v=/#.*$/;b.started=false;G.extend(b.prototype,p,{interval:50,atRoot:function(){var J=this.location.pathname.replace(/[^\/]$/,"$&/");return J===this.root&&!this.location.search},getHash:function(K){var J=(K||this).location.href.match(/#(.*)$/);return J?J[1]:""},getPath:function(){var K=decodeURI(this.location.pathname+this.location.search);var J=this.root.slice(0,-1);if(!K.indexOf(J)){K=K.slice(J.length)}return K.slice(1)},getFragment:function(J){if(J==null){if(this._hasPushState||!this._wantsHashChange){J=this.getPath()}else{J=this.getHash()}}return J.replace(o,"")},start:function(K){if(b.started){throw new Error("Backbone.history has already been started")}b.started=true;this.options=G.extend({root:"/"},this.options,K);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange" in window;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);this.fragment=this.getFragment();var M=window.addEventListener||function(N,O){return attachEvent("on"+N,O)};this.root=("/"+this.root+"/").replace(B,"/");if(!this._hasHashChange&&this._wantsHashChange&&(!this._wantsPushState||!this._hasPushState)){var L=document.createElement("iframe");L.src="javascript:0";L.style.display="none";L.tabIndex=-1;var J=document.body;this.iframe=J.insertBefore(L,J.firstChild).contentWindow;this.navigate(this.fragment)}if(this._hasPushState){M("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){M("hashchange",this.checkUrl,false)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.location.replace(this.root+"#"+this.getPath());return true}else{if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}}if(!this.options.silent){return this.loadUrl()}},stop:function(){var J=window.removeEventListener||function(K,L){return detachEvent("on"+K,L)};if(this._hasPushState){J("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){J("hashchange",this.checkUrl,false)}}if(this.iframe){document.body.removeChild(this.iframe.frameElement);this.iframe=null}if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)}b.started=false},route:function(J,K){this.handlers.unshift({route:J,callback:K})},checkUrl:function(K){var J=this.getFragment();if(J===this.fragment&&this.iframe){J=this.getHash(this.iframe)}if(J===this.fragment){return false}if(this.iframe){this.navigate(J)}this.loadUrl()},loadUrl:function(J){J=this.fragment=this.getFragment(J);return G.any(this.handlers,function(K){if(K.route.test(J)){K.callback(J);return true}})},navigate:function(L,K){if(!b.started){return false}if(!K||K===true){K={trigger:!!K}}var J=this.root+(L=this.getFragment(L||""));L=decodeURI(L.replace(v,""));if(this.fragment===L){return}this.fragment=L;if(L===""&&J!=="/"){J=J.slice(0,-1)}if(this._hasPushState){this.history[K.replace?"replaceState":"pushState"]({},document.title,J)}else{if(this._wantsHashChange){this._updateHash(this.location,L,K.replace);if(this.iframe&&(L!==this.getHash(this.iframe))){if(!K.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,L,K.replace)}}else{return this.location.assign(J)}}if(K.trigger){return this.loadUrl(L)}},_updateHash:function(J,L,M){if(M){var K=J.href.replace(/(javascript:|#).*$/,"");J.replace(K+"#"+L)}else{J.hash="#"+L}}});c.history=new b;var A=function(J,L){var K=this;var N;if(J&&G.has(J,"constructor")){N=J.constructor}else{N=function(){return K.apply(this,arguments)}}G.extend(N,K,L);var M=function(){this.constructor=N};M.prototype=K.prototype;N.prototype=new M;if(J){G.extend(N.prototype,J)}N.__super__=K.prototype;return N};m.extend=H.extend=F.extend=w.extend=b.extend=A;var x=function(){throw new Error('A "url" property or function must be specified')};var e=function(L,K){var J=K.error;K.error=function(M){if(J){J(L,M,K)}L.trigger("error",L,M,K)}};return c}));if(typeof Backbone!=="undefined"){var backboneTCVersion=Backbone.noConflict();define("tc-backbone",["underscore"],function(){return backboneTCVersion})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/wrm-amd.js' */
define("wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-common', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/init-resources.js' */
define("tc/init-resources",["wrm","jquery"],function(a,c){var b=function(d){return d.removeClass("spinner").removeClass("aui-icon").removeClass("aui-icon-wait")};return{requireResources:function(){a.require(["wrc!com.atlassian.confluence.extra.team-calendars.resources-batch"],function(){b(c("div.plugin-calendar"));require(["tc/calendar-plugin"],function(d){d.onTeamCalendarsLoaded()})}).fail(function(){b(c("div.plugin-calendar")).text("Failed to load calendar resources")})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/initialiser.js' */
require(["ajs","tc/init-resources"],function(a,b){var d=function(e){e("calendar-container",{type:e.types.CLASS,attached:function(){b.requireResources()},create:function(){b.requireResources()},ready:function(){b.requireResources()}})};var c=a.Meta.get("version-number").split(".");if(c[0]==="5"&&c[1]<9){d(window.skate)}else{require(["skate"],function(e){d(e)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function(b){function a(e,d){var c;if(d>=20){AJS.log("unable to auto size flash - took too long to load");return}c=b([]);e.each(function(){var g=b(this);var i;var f;if(this.GetVariable){if(!g.attr("height")){i=this.GetVariable("height");if(i){g.height(i)}else{c=c.add(g);return}}if(!g.attr("width")){f=this.GetVariable("width");if(f){g.width(f)}else{c=c.add(g);return}}}});if(c.length){setTimeout(function(){a(c,d+1)},100)}}a(b('embed[type="application/x-shockwave-flash"]'),0);b(window).bind("render-content-loaded",function(d,c){a(b('embed[type="application/x-shockwave-flash"]',c),0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-hide-traditional', location = 'jscripts/add-comment-hider.js' */
define("confluence-quick-edit/add-comment-hider",[],function(){return function(a){a("#comments-actions").hide()}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/add-comment-hider",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};