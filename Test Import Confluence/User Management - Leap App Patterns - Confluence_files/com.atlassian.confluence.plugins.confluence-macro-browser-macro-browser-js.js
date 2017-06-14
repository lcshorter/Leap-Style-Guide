WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-parameter-serializer.js' */
define("confluence-macro-browser/macro-parameter-serializer",["jquery"],function(h){function e(d){return d.replace(/\\/g,"\\\\").replace(/=/g,"\\=").replace(/[|]/g,"\\|")}return{serialize:function(d){var a=[],b;for(b in d)a.push(e(b)+"="+e(d[b]));return a.join("|")},deserialize:function(d){function a(f,d){for(var c=[],b=[],a,f=f||"",g=0,e=f.length;g<e;g++)a=f[g],"\\"==a?c.push(a+(g+1!=f.length?f[++g]:"")):a==d?(b.push(c.join("")),c=[]):c.push(a);b.push(c.join(""));return b}var b={};h.each(a(d||"",
"|"),function(d,e){var c=a(e,"=");2===c.length&&c[0]&&(b[c[0].replace(/\\(.)/g,"$1")]=c[1].replace(/\\(.)/g,"$1"))});return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-parameter-serializer","Confluence.MacroParameterSerializer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-fields.js' */
define("confluence-macro-browser/macro-browser-fields","ajs jquery underscore confluence/legacy confluence/templates confluence/autocomplete-user confluence/autocomplete-content".split(" "),function(h,e,p,q,k,r,m){function o(i,g,l){return function(j,b){if(j.multiple)return i.string(j,b);var a=e(k.MacroBrowser.macroParameterSelect()),c=e("select",a),b=b||{};b.setValue=b.setValue||function(a){var b=false;c.find("option").each(function(){if(this.value==a){b=true;return false}});if(b)delete c.tempValue;
else{c.append(e("<option/>").attr("value",a).text(a+" ("+"Not found"+")"));c.tempValue=a}try{c.val(a)}catch(n){h.logError(n)}c.change()};a=g(a,c,b);a.updateDependencies=l;a.getData=function(a){if(a.title&&a.spaceKey||a.pageId||a.draftId){var f=c.tempValue||c.val();if(b.fileTypes)a.fileTypes=b.fileTypes;var n=h.contextPath()+(a.draftId?"/json/draftattachmentsearch.action":"/json/attachmentsearch.action");e.getJSON(n,a,function(a){if(!a.error){e("option",c).remove();
a=a.attachments;if(!a||!a.length){c.append(e("<option/>").attr("value","").html("No appropriate attachments"));c.tempValue&&b.setValue(c.tempValue)}else{for(var d=0,n=a.length;d<n;d++)c.append(e("<option/>").attr("value",a[d].name).text(a[d].name));f=f||c.tempValue;b.setValue(f||a[0].name)}c.attr("style","")}})}else h.log("Not enough parameters to send attachmentsearch request")};return a}}return function(i){var g=function(b,a,c){var c=c||{},d=c.setValue||function(b){a.val(b)},
e=c.getValue||function(){return a.val()};a.change(c.onchange||i.paramChanged);return{paramDiv:b,input:a,setValue:d,getValue:e}},l=function(b,a,c){if(a&&a.length)for(var d=0,e=a.length;d<e;d++)i.fields[a[d]]&&i.fields[a[d]].dependencyUpdated(b,c)},j={updateDependencies:l,username:function(b,a){var a=a||{},c=b.multiple?"autocomplete-multiuser":"autocomplete-user",d=e(k.MacroBrowser.macroParameter()),f=e("input[type='text']",d);f.addClass(c).attr("data-none-message","Not found");
b.required&&f.keyup(i.processRequiredParameters);if(b.multiple){q.Binder.autocompleteMultiUser(d);a.setValue=function(a){f.val(a);for(var a=a.split(","),b=[],c=[],d=0,g=a.length;d<g;d++)b.push(function(a){return e.getJSON(h.contextPath()+"/rest/prototype/1/user/non-system/"+a).done(function(a){a&&a.name&&c.push({id:a.name,text:a.displayName,imgSrc:a.avatarUrl})}).fail(function(b){h.logError("Cannot parse user data for macro browser field with: "+b);c.push({id:a,text:h.format("Unknown User ({0})",
a),imgSrc:h.contextPath()+"/images/icons/profilepics/default.png"})})}(a[d]));e.when.apply(e,p.map(b,function(a){var b=e.Deferred();a.always(function(){b.resolve()});return b.promise()})).done(function(){c.length&&f.auiSelect2("data",c)})}}else{f.bind("selected.autocomplete-content",function(c,d){if(a.onselect)a.onselect(d.selection);else if(a.setValue)a.setValue(d.content.username);else{l(b.name,a.dependencies,f.val());typeof a.onchange==="function"&&a.onchange.apply(f)}});r(d)}return g(d,f,a)},
spacekey:function(b,a){if(b.multiple)return j.string(b,a);var a=a||{},c=e(k.MacroBrowser.macroParameter()),d=e("input[type='text']",c);d.addClass("autocomplete-space").attr("data-template","{key}").attr("data-none-message","Not found");b.required&&d.keyup(i.processRequiredParameters);d.bind("selected.autocomplete-content",function(c,e){if(a.onselect)a.onselect(e.selection);else if(a.setValue)a.setValue(e.content.key);else{l(b.name,a.dependencies,d.val());
typeof a.onchange==="function"&&a.onchange.apply(d)}});m.autocompleteSpace(c);return g(c,d)},attachment:o(j,g,l),full_attachment:o(j,g,l),"confluence-content":function(b,a){if(b.multiple)return j.string(b,a);a=a||{};b.options=b.options||{};var c=e(k.MacroBrowser.macroParameter()),d=e("input[type='text']",c).attr("data-none-message","Not found").attr("data-template","");b.required&&d.keyup(i.processRequiredParameters);a.onchange=a.onchange||function(){var c=
d.val();l(b.name,a.dependencies,c)};a.setValue=a.setValue||function(b){d.val(b);typeof a.onchange==="function"&&a.onchange.apply(d)};d.bind("selected.autocomplete-content",function(c,e){var f="";if(b.options.includeDatePath=="true"&&e.content.type==="blogpost"){f=e.content.createdDate.date.split("-");f="/"+f[0]+"/"+f[1]+"/"+f[2].substring(0,2)+"/"}var g=e.content.space&&e.content.space.key,i=g&&g!=h.Meta.get("space-key");e.content.title.indexOf(":")!==-1&&(i=true);f=(i?g+":":"")+f+e.content.title;
d.val(f);if(a.onselect)a.onselect(e.selection);else a.setValue(f,d)});if(b.options.spaceKey){if(b.options.spaceKey.toLowerCase()==="@self")b.options.spaceKey=h.Meta.get("space-key");d.attr("data-spacekey",b.options.spaceKey)}var f=b.options.type;if(typeof f==="string")if(f==="page"){d.addClass("autocomplete-page");m.autocompletePage(c)}else if(f==="blogpost"){d.addClass("autocomplete-blogpost");m.autocompleteBlogpost(c)}else{if(f==="attachment"||f==="full_attachment"){d.addClass("autocomplete-attachment");
m.autocompleteAttachment(c)}}else{d.addClass("autocomplete-confluence-content");m.autocompleteConfluenceContent(c)}return g(c,d,a)},string:function(b,a){var c=e(k.MacroBrowser.macroParameter()),d=e("input",c);b.required&&d.keyup(i.processRequiredParameters);return g(c,d,a)},"boolean":function(b,a){var c=e(k.MacroBrowser.macroParameterBoolean()),d=e("input",c),a=a||{};a.setValue=a.setValue||function(a){(/true/i.test(a)||/true/i.test(b.defaultValue)&&!/false/i.test(a))&&d.prop("checked",true)};return g(c,
d,a)},"enum":function(b,a){if(b.multiple)return j.string(b,a);var c=e(k.MacroBrowser.macroParameterSelect()),d=e("select",c);!b.required&&!b.defaultValue&&d.append(e("<option/>").attr("value",""));e(b.enumValues).each(function(){d.append(e("<option/>").attr("value",this).html(""+this))});return g(c,d,a)},_hidden:function(b,a){var c=e(k.MacroBrowser.macroParameterHidden()).hide(),d=e("input",c);return g(c,d,a)}};return{Field:g,ParameterFields:j}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-fields");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-smartfields.js' */
define("confluence-macro-browser/macro-browser-smartfields",["ajs","confluence/macro-js-overrides"],function(c,f){return function(h,d){var e=function(a){this.fileTypes=a};e.prototype.beforeParamsSet=function(a){!a.page&&(!a.date&&!a.space)&&("page"==c.params.contentType||"blogpost"==c.params.contentType?a.page=c.Editor.getCurrentTitle():"comment"==c.params.contentType&&(a.page=c.params.pageTitle));if(a.date){var b=a.date.split("/");a.page=["",b[2],b[0],b[1],a.page].join("/")}a.space&&(a.page=a.space+
":"+a.page);return a};e.prototype.beforeParamsRetrieved=function(a){if(a.page){var b=a.page.split(":");1<b.length&&(a.space=b[0],a.page=b[1]);b=a.page.split("/");1<b.length&&(a.date=[b[2],b[3],b[1]].join("/"),a.page=b[4]);(("page"==c.params.contentType||"blogpost"==c.params.contentType)&&a.page==c.Editor.getCurrentTitle()||"comment"==c.params.contentType&&a.page==c.params.pageTitle)&&delete a.page}return a};e.prototype.fields={attachment:function(a){a=d.attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=
function(a,g){c.debug("attachment:dependencyUpdated called: "+a+", "+g);var d=e.prototype.fields._parsePageLink(g);this.getData(d)};return a},full_attachment:function(a){a=d.full_attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=function(a,d){c.debug("attachment:dependencyUpdated called: "+a+", "+d);var f=e.prototype.fields._parsePageLink(d);this.getData(f)};return a},"confluence-content":function(a){return d["confluence-content"](a,{dependencies:["name"]})},_parsePageLink:function(a){var b=
{},a=a.split(":",2);b.spaceKey=2===a.length&&a[0]||c.Meta.get("space-key");b.title=a[a.length-1];0===b.title.indexOf("/")&&(b.postingDay=b.title.substr(1,10),b.title=b.title.substr(12));b.title===c.Editor.getCurrentTitle()&&(b.title="");b.title||(c.params.newPage?b.draftId=c.Meta.get("content-id"):b.pageId=c.params.pageId);return b}};h.activateSmartFieldsAttachmentsOnPage=function(a,b){f.put(a,new e(b))}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-smartfields");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-utils.js' */
define("confluence-macro-browser/macro-browser-utils",["jquery"],function(a){return{makeDefaultKey:function(){return a.makeArray(arguments).join(".")}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-utils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-cql.js' */
define("confluence-macro-browser/macro-browser-cql",["ajs","underscore","confluence/templates","confluence-ui-components/js/cql/cql-component","jquery"],function(i,g,m,n,d){function j(b){var a=b.param;return d.extend({},b,a.options,{defaultValue:a.defaultValue||a.options.defaultValue})}function k(b){return d(m.MacroBrowser.CQL.sections({hasRenderParameters:0<b.renderParams.length}))}return{build:function(b){var a=k(b),e=b.container;e.append(a);e.bind("cql-field-adding",function(b,c){c.element.addClass("macro-param-div");
c.element.find(".cql-field-input").addClass("macro-param-input")});e.addClass("loading");a.filter(".cql-render-heading").find("button").click(function(){var b=d(this),c=b.closest(".cql-render-heading").next(),a=c.is(":visible");a?c.slideUp(300):(c.removeClass("hidden").show(),c=d(".cql-render-heading").position().top,d(".macro-input-fields").animate({scrollTop:c},300));a=a?"Show":"Hide";
b.text(a)});var f,h={param:b.cqlParam,value:b.cqlValue,container:a.filter(".cql-filter-fields")},h=j(h);f=n.build(h);e.data("cqlComponent",f);var l=d.Deferred();f.loading.done(function(){var a=b.cqlParam.options.requiredFields;if(a){var c=a.split(",");g.each(f.fieldRegistry||f.fieldArrays,function(a){var d=!1;g.each(a,function(a){!d&&g.contains(c,a.fieldName)&&(b.flagRequiredParam(a.element),d=!0,a.onChange(b.paramChanged))})})}e.removeClass("loading");l.resolve()});return{elements:a,loading:l}},
_makeCqlComponentOptions:j,_renderCqlSections:k}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser-cql.soy' */
// This file was automatically generated from macro-browser-cql.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.CQL.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }
if (typeof Confluence.Templates.MacroBrowser.CQL == 'undefined') { Confluence.Templates.MacroBrowser.CQL = {}; }


Confluence.Templates.MacroBrowser.CQL.sections = function(opt_data, opt_ignored) {
  return '<div class="cql-filter-fields"></div>' + ((opt_data.hasRenderParameters) ? '<h4 class="cql-render-heading"><span>' + soy.$$escapeHtml('Options') + '</span>' + aui.buttons.button({type: 'link', text: 'Show', extraAttributes: {type: 'button'}}) + '</h4><div class="cql-render-fields hidden"></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.CQL.sections.soyTemplateName = 'Confluence.Templates.MacroBrowser.CQL.sections';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-editor.js' */
define("confluence-macro-browser/macro-browser-editor","ajs jquery confluence/templates confluence-macro-browser/macro-browser-cql confluence/macro-js-overrides underscore".split(" "),function(q,d,p,u,r,s){return function(k){function o(g){var a=d("#macro-insert-container").find(".macro-name").val(),b,c=k,e={},f;f={};for(var h=0,l=g.formDetails.parameters.length;h<l;h++){var i=g.formDetails.parameters[h],j;if(i.type&&i.type.name==="cql")j=d(".macro-input-fields form").data("cqlComponent").getValue();
else{j=d("#macro-param-"+i.name);var n=j.val();j.attr("type")=="checkbox"&&(n=""+j.prop("checked"));j=n}if(j){i.shared&&(e[i.name]=j);if(i.hidden||!i.defaultValue||i.defaultValue!=j)f[i.name]=j}}f[""]&&(b=f[""]);d.extend(f,c.unknownParams);(h=r.getFunction(a,"beforeParamsRetrieved"))&&(f=h(f,g,e));return{name:a,bodyHtml:c.getMacroBody(),params:f,defaultParameterValue:b}}function v(g,a,b){var c=k,e,f=a.type.name;if(b){var h=b.fields&&b.fields[f];h&&typeof h!=="function"&&(h=h[a.name]);typeof h==="function"&&
(e=h.call(b,a))}if(!e){f in c.ParameterFields&&typeof c.ParameterFields[f]==="function"||(f="string");e=c.ParameterFields[f](a)}c.fields[a.name]=e;b=e.paramDiv;c=e.input;e="macro-param-"+a.name;b.attr("id","macro-param-div-"+a.name);c.addClass("macro-param-input").attr("id",e);a.hidden&&b.hide();c=g.pluginKey;if(a.displayName==k.Utils.makeDefaultKey(c,g.macroName,"param",a.name,"label"))a.displayName=a.name;if(a.description==k.Utils.makeDefaultKey(c,g.macroName,"param",a.name,"desc"))a.description=
"";d("label",b).attr("for",e).text(a.displayName);a.required&&t(b);a.description&&b.append(p.MacroBrowser.macroParameterDesc({description:a.description}));return b}function t(d){var a=d.find("label"),b=a.text()+" *";a.text(b);d.addClass("required")}return{loadMacroInBrowser:function(g){if(!g||!g.formDetails){q.trigger("analytics",{name:"macro-browser.unknown-macro-error"});alert("Could not load unknown macro in the macro browser.")}else{var a=require("tinymce"),b=k,c=g.formDetails,e=c.macroName,
f=r.get(e),h=b.settings.selectedMacro,l=a.confluence.macrobrowser.editedMacroDiv;if(f&&typeof f.opener==="function"){b.close();f.opener({name:e})}else{var a=c.parameters,i=s.find(a,function(a){return a.type.name==="cql"});d("#save-warning-span").addClass("hidden");d("#macro-insert-container .macro-name").val(e);var j=d("#macro-insert-container .macro-input-fields form");j.empty();var n=g.extendedDescription||g.description;if(i)c.documentationLink&&b.UI.setHelpLink(b.dialog,{href:c.documentationLink});
else if(n||c.documentationLink){n=d(p.MacroBrowser.macroDescription({descriptionHtml:n,documentationLink:c.documentationLink}));j.append(n)}if(c.body&&c.body.bodyType!="NONE"&&l&&d(l).hasClass("editor-inline-macro")){l=g.pluginKey;if(c.body.label==k.Utils.makeDefaultKey(l,e,"body","label"))c.body.label="";if(c.body.description==k.Utils.makeDefaultKey(l,e,"body","desc"))c.body.description="";c=c.body;l=b.selectedMacroDefinition;n=k;e=d(p.MacroBrowser.macroBody());l=l?l.body:n.settings.selectedText;
d("textarea",e).val(l||"");c.label&&d("label",e).text(c.label);c.description&&e.append(p.MacroBrowser.macroParameterDesc({description:c.description}));c.hidden&&e.hide();e&&j.append(e)}var m=h?d.extend({},h.params):{},o=j;if(i){a=s.without(a,i);i=u.build({cqlParam:i,renderParams:a,cqlValue:m.cql,container:j,flagRequiredParam:t,paramChanged:k.paramChanged});delete m.cql;o=i.elements.filter(".cql-render-fields");i.loading.done(function(){k.paramChanged();k.Preview.previewMacro(g,h);k.UI.focusOnMacroDetailsFirstInput()})}d(a).each(function(){o.append(v(g,
this,f))});f&&typeof f.beforeParamsSet==="function"&&(m=f.beforeParamsSet(m,!h));d(a).each(function(){var a;a=this.name==""?b.selectedMacroDefinition?b.selectedMacroDefinition.defaultParameterValue:this.defaultValue:m[this.name];a!=null?delete m[this.name]:d(this.aliases).each(function(){if(m[this]){a=m[this];delete m[this]}});if(a==null)a=this.defaultValue;a!=null&&b.fields[this.name].setValue(a)});b.unknownParams=m;d("a",j).click(function(){window.open(this.href,"_blank").focus();return false});
d("#macro-browser-dialog:visible").length||b.showBrowserDialog();a={};d.extend(true,a,g);if(!a.formDetails)a.formDetails={};if(!a.formDetails.body)a.formDetails.body={};b.dialog.activeMetadata=a;a.formDetails.body.content=b.settings.selectedMacro?b.settings.selectedMacro.body:a.formDetails.body.bodyType&&a.formDetails.body.bodyType.toLowerCase()==="plain_text"?b.settings.selectedText:b.settings.selectedHtml}}},getMacroParametersFromForm:function(d){return o(d).params},getMacroDefinitionFromForm:o,
processRequiredParameters:function(){if(d(".macro-input-fields form").is(".loading")){q.log("Form still loading - cannot processRequiredParameters");return false}var g=d("#macro-insert-container .macro-param-div.required .macro-param-input").not(".select2-container").filter(function(){var a=d(this).val();return a===null||a===""}).length===0,a=g?"":"disabled",b=a?"addClass":"removeClass";d("#macro-browser-dialog button.ok").prop("disabled",a);d("#macro-browser-dialog .macro-preview-header .refresh-link").prop("disabled",
a)[b]("disabled");return g}}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-editor");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preview.js' */
define("confluence-macro-browser/macro-browser-preview",["jquery","ajs","confluence/macro-js-overrides","confluence/get-content-id"],function(f,e,l,n){return function(b){function i(){return f("#macro-insert-container .macro-preview")}function m(){i().html("")}function j(d){d?(b.UI.showPreviewSpinner(!0),g.disable()):(b.UI.showPreviewSpinner(!1),g.enable())}var g={disable:function(){f("#macro-browser-preview-link").attr("disabled",!0).addClass("disabled")},enable:function(){f("#macro-browser-preview-link").removeAttr("disabled").removeClass("disabled")}};
return{previewMacro:function(d,h){var k=b;m();if(!b.Editor.processRequiredParameters())return e.trigger("analytics",{name:"macro-browser.missing-params-error"}),e.log("previewMacro: missing required params"),!1;"object"!==typeof h&&(h=b.Editor.getMacroDefinitionFromForm(d));var a=h.params,g=l.getFunction(d.macroName,"updateMacroParametersForPreview");g&&(a=g(a));a[""]&&delete a[""];k={contentId:n(),macroName:d.macroName,params:a,body:k.getMacroBody(),defaultParameterValue:h.defaultParameterValue,
successCallback:function(a){var c=i().find("iframe")[0],b=l.getFunction(d.macroName,"updateMacroPreviewIframe");if(!b||!b(d,c,a))c=c.contentDocument||c.contentWindow.document,c.write(a),c.close(),f(c).ready(function(){e.trigger("macro-browser.preview-ready")}),f("div.error span.error",c).length&&e.logError("Error rendering macro definition : ");setTimeout(function(){j(!1)},1E3)},errorCallback:function(a){e.logError(a);j(!1)}};a=e.params.staticResourceUrlPrefix+"/blank.html";i().html('<iframe src="'+
a+'" frameborder="0" name="macro-browser-preview-frame" id="macro-preview-iframe"></iframe>');j(!0);b.Rest.fetchMacroPreviewData(k)},removePreviewContainer:m}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preview");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-model.js' */
define("confluence-macro-browser/macro-browser-model",["ajs"],function(h){return function(f){function g(a){a.title==f.Utils.makeDefaultKey(a.pluginKey,a.macroName,"label")&&(a.title=a.macroName.charAt(0).toUpperCase()+a.macroName.substring(1).replace(/-/g," "));a.description==f.Utils.makeDefaultKey(a.pluginKey,a.macroName,"desc")&&(a.description="");a.id="macro-"+(a.alternateId||a.macroName);var b=[a.macroName,a.title].concat(a.aliases||[]);a.keywordsNoDesc=b.join(",");var d=a.description&&a.description.replace(/,/g,
" ")||"";b.push(d);a.keywords=b.join(",");return a}return{loadMacros:function(a){if(a){var b=f;b.metadataList=[];b.aliasMap={};for(var d=0,i=a.length;d<i;d++){var c=a[d],c=g(c);if(c.aliases)for(var e=0,j=c.aliases.length;e<j;e++)c.aliases[e]=c.aliases[e].toLowerCase(),b.aliasMap[c.aliases[e]]=c.macroName.toLowerCase();b.metadataList.push(c)}b.metadataList.sort(function(a,b){return a.title.toLowerCase()>b.title.toLowerCase()?1:-1})}else h.log("AJS.MacroBrowser.loadModel - no macro data, aborting")},
transformMetaDataDefault:g}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-model");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-rest.js' */
define("confluence-macro-browser/macro-browser-rest",["jquery","ajs","wrm","confluence/api/constants"],function(b,f,g,d){function c(a){f.logError(a)}var h=g.data.claim("confluence.macro.metadata.provider:macro-browser-metadata-resources.macro-meta-client-cache-key");return{loadMacroMetadata:function(a){a.data=a.data||{};a.data.macroMetadataClientCacheKey=h;return b.ajax({type:"GET",cache:!0,timeout:a.timeout||3E4,dataType:"json",url:(a.context||d.CONTEXT_PATH)+"/plugins/macrobrowser/browse-macros.action",
data:a.data,success:a.successCallback,error:a.errorCallback||c}).promise()},fetchMacroMetadataDetails:function(a){var e={id:a.id};a.alternateId&&(e.alternateId=a.alternateId);b.ajax({type:"GET",dataType:"json",url:(a.context||d.CONTEXT_PATH)+"/plugins/macrobrowser/browse-macros-details.action",data:e,success:a.successCallback,error:a.errorCallback||c})},fetchMacroPreviewData:function(a){if(!a.contentId||!a.macroName)return(a.errorCallback||c)("invalid parameters");b.ajax({type:"POST",contentType:"application/json; charset=utf-8",
url:(a.context||d.CONTEXT_PATH)+"/rest/tinymce/1/macro/preview",data:b.toJSON({contentId:a.contentId,macro:{name:a.macroName,body:a.body,params:a.params,defaultParameterValue:a.defaultParameterValue}}),dataType:"html",success:a.successCallback,error:a.errorCallback||c})}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-rest");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-UI.js' */
define("confluence-macro-browser/macro-browser-UI","jquery ajs confluence/templates confluence/api/constants confluence/dom-filter-field confluence/meta confluence/dialog".split(" "),function(e,f,j,m,r,s,t){return function(k){function n(a){return e(j.MacroBrowser.macroSummaryList({category:a}))}function p(a,b){var g=e(j.MacroBrowser.macroSummaryItem());if(a.icon){var c=(a.icon.relative?f.params.staticResourceUrlPrefix:"")+a.icon.location;!a.icon.relative&&e.browser.msie&&!window.location.href.indexOf("https")&&
c.indexOf("https")?g.prepend("<span class='macro-icon-holder icon-"+a.macroName+"'></span>"):g.prepend("<img src='"+c+"' alt='icon' width='"+a.icon.width+"' height='"+a.icon.height+"' title='"+a.title+"'/>")}else g.prepend("<span class='macro-icon-holder icon-"+a.macroName+"'></span>");e(".macro-title",g).text(a.title);e(".macro-desc",g).prepend(a.description);if(a.macroName=="gadget")if(c=a.gadgetUrl){c.match("^https?://.*")||(c=m.CONTEXT_PATH+"/"+c);e(".macro-title",g).after(j.MacroBrowser.gadgetLink({url:c}))}g.click(function(c){b(c,
a)});return g}function q(a,b){var e;e=b?j.Dialog.helpLink(b):j.MacroBrowser.helpLink();a.getPage(a.curpage).element.find(".dialog-title").prepend(e)}return{createDialog:function(a){for(var b=a.macros,g=a.onClickMacroSummary,c={all:n("all")},h=0,m=b.length;h<m;h++){var i=b[h];if(i.hidden)if(k.isHiddenMacroShown(i))i.categories.push("hidden-macros");else continue;c.all.append(p(i,g).attr("id",i.id));for(var o=0,u=i.categories.length;o<u;o++){var l=i.categories[o];c[l]=c[l]||n(l);c[l].append(p(i,g).attr("id",
l+"-"+i.id))}}var d=t.component({width:a.width||865,height:a.height||530,id:"macro-browser-dialog",onSubmit:a.onSubmit,onCancel:a.onCancel});d.popup.element.on("keydown",".aui-button",function(a){a.stopPropagation()});d.getPage(0).element.attr("id","select-macro-page");d.addHeader(a.title);d.addPanel("All",c.all,"all","category-button-all").getPanel(0).setPadding(0);b=0;for(g=a.categories.length;b<g;b++){h=a.categories[b];d.addPanel(h.displayName,c[h.name]||
n(h.name),h.name,"category-button-"+h.name).getPanel(b+1).setPadding(0)}d.addCancel("Cancel",a.onCancel);q(d);d.addHelpText("Hint: type \"\u003cstrong\u003e{\u003c/strong\u003e\" in the Editor to insert macros on the page.");c=e(j.MacroBrowser.insertMacroPanel());c.find("form").submit(function(a){k.complete();return f.stopEvent(a)});e("#macro-browser-preview-link",c).click(function(a){e(this).prop("disabled")||k.previewMacro(d.activeMetadata);return f.stopEvent(a)});d.addPage().addPanel("X",c,"macro-input-panel").addLink("Select macro",
function(a){a.prevPage();a.searcher.focus()},"dialog-back-link").addButton("insert.name",function(){k.complete()},"ok").addCancel("Cancel",function(){return a.onCancel()}).getPanel(0).setPadding(0);d.getPage(1).element.attr("id","macro-details-page");e("#macro-browser-dialog .dialog-button-panel .ok").before("<span id='save-warning-span' class='hidden'/>");d.searcher=r({items:"#macro-browser-dialog .dialog-panel-body #category-all .macro-list-item",formId:"macro-browser-search-form",
inputId:"macro-browser-search",searcher:function(a,b){var c=null;if(b!=""){d.getCurrentPanel()!=d.getPanel(0)&&d.gotoPanel(0);var f=k.searchSummaries(b),c={};e.each(f,function(){c[this.id]=this})}a.each(function(){!c||this.id in c?e(this).show():e(this).hide()})},submitCallback:function(a,b){b!=""&&a.length===1&&a.click()}});d.page[0].header.append(d.searcher.form);d.page[0].ontabchange=function(a){a!=d.getPanel(0,0)&&d.searcher.reset()};c=e(j.MacroBrowser.missingUserMacroMetadataPanel({showAdminMessage:s.getBoolean("is-admin")}));
d.addPage().addPanel("No macro metadata",c,"missing-metadata-panel").addLink("Back",function(a){a.gotoPage(0);a.searcher.focus()},"dialog-back-link").addCancel("Cancel",function(){return a.onCancel()});d.gotoPage(2);d.addHeader("No macro metadata");d.gotoPanel(0,0);d.ready=true;return d},showBrowserSpinner:function(a){var b=e("#macro-browser-dialog");a?b.spin("large"):b.spinStop()},
showPreviewSpinner:function(a){var b=e("#macro-browser-preview");a?b.spin("large"):b.spinStop()},updateButtonText:function(a){var b=e("#macro-browser-dialog .dialog-button-panel .ok");a=="edit"?b.text("Save"):b.text("Insert")},enableSaveButton:function(a){e("#macro-browser-dialog .dialog-button-panel .ok").prop("disabled",!a)},focusOnMacroDetailsFirstInput:function(){var a=e("#macro-insert-container").find(".macro-input-fields :input:visible:not(button,.select2-offscreen)").first();
if(a.length){if(a.hasClass("select2-input")){var b=a.closest(".select2-container").parent().find(".select2-offscreen");if(typeof b.select2!=="function"){f.log("select2Hidden is not a select2 hidden input, skipping focus attempt.");return}b.select2("open");b.select2("close")}else a.focus();!k.selectedMacroDefinition&&a.val()!==""&&a.select()}else f.log("No input to focus")},setHelpLink:q}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-UI");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser.js' */
define("confluence-macro-browser/macro-browser","window jquery ajs confluence-macro-browser/macro-browser-utils confluence-macro-browser/macro-browser-editor confluence-macro-browser/macro-browser-fields confluence-macro-browser/macro-browser-model confluence-macro-browser/macro-browser-preview confluence-macro-browser/macro-browser-rest confluence-macro-browser/macro-browser-UI confluence-macro-browser/macro-browser-smartfields confluence-macro-browser/macro-parameter-serializer confluence/macro-js-overrides underscore".split(" "),
function(k,f,d,m,n,l,o,p,q,r,s,t,h){var a={},l=l(a);a.ParameterFields=l.ParameterFields;a.Field=l.Field;s(a,a.ParameterFields);a.Utils=m;a.Editor=n(a);a.Preview=p(a);a.Model=o(a);a.Rest=q;a.UI=r(a);var g,i=function(b,c){var e={id:b.macroName,successCallback:function(b){if(b&&b.details)b.details=a.Model.transformMetaDataDefault(b.details);a.Editor.loadMacroInBrowser(b.details,c);i.displayDetails();a.Preview.previewMacro(b.details)},errorCallback:function(){d.trigger("analytics",{name:"macro-browser.fetch-metadata-error"});
k.alert("There has been an error loading the macro browser. Please try again or see your system administrator.");i.displayDetails()}};if(b.alternateId)e.alternateId=b.alternateId;i.setUI(c,b.title);a.Rest.fetchMacroMetadataDetails(e)};i.setUI=function(b,c){var e=b=="edit"?a.editTitle:a.insertTitle;f("#macro-insert-container").hide();a.UI.updateButtonText(b);a.UI.enableSaveButton(false);a.dialog.gotoPage(1).addHeader(e.replace(/\{0\}/,c));a.dialog.show();a.UI.showBrowserSpinner(true)};i.displayDetails=function(){a.UI.showBrowserSpinner(false);a.UI.enableSaveButton(false);
f("#macro-insert-container").show();a.UI.focusOnMacroDetailsFirstInput()};a.reset=function(){g&&g.resolve&&g.resolve();g=null;a.initMacroBrowserAfterRequest=null;a.initData=null;a.hasInit=false;a.metadataList=[];a.aliasMap={};a.fields={};h.reset();a.Macros=h.elements()};a.getMacroJsOverride=h.get;a.setMacroJsOverride=h.put;a.Macros=h.elements();a.hasInit=false;a.metadataList=[];a.aliasMap={};a.fields={};a.processRequiredParameters=function(){return a.Editor.processRequiredParameters()};a.paramChanged=
function(){a.Editor.processRequiredParameters()};a.loadMacroInBrowser=function(b,c){a.Editor.loadMacroInBrowser(b,c)};a.getMacroDefinitionFromForm=function(b){a.Editor.getMacroDefinitionFromForm(b)};a.getMacroParametersFromForm=function(b){a.Editor.getMacroParametersFromForm(b)};a.previewMacro=function(b){a.Preview.previewMacro(b)};a.previewOnload=function(b){var c=h.getFunction(a.dialog.activeMetadata.macroName,"postPreview");c&&c(f("#macro-preview-iframe")[0],a.dialog.activeMetadata);d.Editor.disableFrame(b);
f(b).click(function(a){if(a.target.tagName.toLowerCase()==="a"){(a=f(a.target).attr("href"))&&(a.indexOf("#")!=0&&a.indexOf(k.location)==-1)&&k.open(a,"_blank").focus();return false}})};a.getMacroMetadata=function(b){for(var c=0,e=a.metadataList.length;c<e;c++){var d=a.metadataList[c];if(d.macroName==b)return d}return null};a.getMetadataPromise=function(){return g};a.open=function(b){if(!b){b={};d.log("No settings to open the macro browser.")}var c=b.selectedMacro;!c&&b.presetMacroMetadata&&(c={name:b.presetMacroMetadata.macroName});
if(c&&c.name){var e=h.getFunction(c.name,"opener");if(e){e(c);return}}if(!a.hasInit){d.debug("init macro browser");a.UI.showBrowserSpinner(true);if(a.initData!==null&&f.isEmptyObject(a.initData)){d.trigger("analytics",{name:"macro-browser.init-reattempt"});d.logError("Macro browser preload failed. Trying again...");a.initMacroBrowserAfterRequest=b;a.preLoadMacro();return}if(a.initData)a.initBrowser();else{d.trigger("analytics",{name:"macro-browser.init-overlap"});d.debug("Waiting for macro browser preloading...");
a.initMacroBrowserAfterRequest=b;return}}a.openMacroBrowser(b)};a.openMacroBrowser=function(b){a.settings=b;a.selectedMacroDefinition=b.selectedMacro;var c=a.selectedMacroDefinition&&a.selectedMacroDefinition.name||b.presetMacroName;if(b.presetMacroName)b.presetMacroMetadata=a.getMacroMetadata(b.presetMacroName);var e=b.presetMacroMetadata;if(!e){var j=b.selectedMacro;if(j){var c=j.name.toLowerCase(),c=a.aliasMap[c]||c,g=h.getFunction(c,"updateSelectedMacro"),i=h.getFunction(c,"getMacroDetailsFromSelectedMacro");
g&&g(j);i&&(e=i(a.metadataList,j));e||(e=a.getMacroMetadata(c))}}j=f("#macro-browser-dialog").find("button.back");if(e){d.debug("Open macro browser to edit macro: "+e.macroName);j.hide();a.replicateSelectMacro(e,b.mode||"edit")}else if(c){j.show();a.dialog.overrideLastTab();a.dialog.gotoPage(2);a.showBrowserDialog()}else{j.show();if(b.selectedCategory){c=f("#select-macro-page .dialog-page-menu button").index(f("#category-button-"+b.selectedCategory));c<0&&(c=0);a.dialog.overrideLastTab();a.dialog.gotoPanel(0,
c)}else a.dialog.gotoPage(0);a.showBrowserDialog();a.dialog.searcher.focusAndSearch(b.searchText)}};a.showBrowserDialog=function(){a.dialog.show();a.UI.showBrowserSpinner(false)};a.complete=function(){if(f("#macro-browser-dialog .dialog-button-panel .ok").is(":visible:not(:disabled)")){var b=a.dialog.activeMetadata,c=h.getFunction(b.macroName,"manipulateMarkup");c&&c(b);b=a.Editor.getMacroDefinitionFromForm(b);a.close();if(a.settings.onComplete)a.settings.onComplete(b)}};a.cancel=function(){a.close();
if(typeof a.settings.onCancel=="function")a.settings.onCancel();return false};a.close=function(){this.unknownParams={};this.fields={};a.Preview.removePreviewContainer();this.dialog.hide()};a.replicateSelectMacro=function(a,c){i(a,c)};a.initBrowser=function(){var b=a.initData;if(!b.categories||!a.metadataList.length){d.trigger("analytics",{name:"macro-browser.init-browser-error"});k.alert("There has been an error loading the macro browser. Please try again or see your system administrator.");a.UI.showBrowserSpinner(false);return false}a.editTitle=b.editTitle;
a.insertTitle=b.insertTitle;var c;b.categories=f.map(b.categories,function(a){if(a.name=="hidden-macros"){c=a;return null}return a});b.categories.sort(function(a,b){return a.displayName.toLowerCase()>b.displayName.toLowerCase()?1:-1});c&&d.params.showHiddenUserMacros&&b.categories.push(c);a.dialog=a.UI.createDialog({title:b.title,categories:b.categories,macros:a.metadataList,onClickMacroSummary:function(a,b){a.preventDefault();i(b,"insert")},onSubmit:a.complete,onCancel:a.cancel});return a.hasInit=
true};a.searchSummaries=function(b,c){c=f.extend({splitRegex:/[\s\-]+/},c);return d.filterBySearch(a.metadataList,b,c)};a.getMacroBody=function(){var b="";if(f("#macro-insert-container .macro-body-div textarea").length)b=f("#macro-insert-container .macro-body-div textarea").val();else if(a.selectedMacroDefinition){if(a.selectedMacroDefinition.body)b=a.selectedMacroDefinition.body}else if(a.dialog.activeMetadata)b=a.dialog.activeMetadata.formDetails.body.content;return b};a.getMacroParams=function(a){return t.deserialize(a.getAttribute("data-macro-parameters"))};
a.getMacroName=function(a){return!a.hasAttribute("data-macro-name")?void 0:a.getAttribute("data-macro-name")};a.isHiddenMacroShown=function(a){return d.params.showHiddenUserMacros&&a.pluginKey=="_-user-macro-_"};a.hasRequiredParameters=function(a){return a.anyParameterRequired};a.setWhitelist=function(b){a.whitelist=b};a.preLoadMacro=function(){a.initData=null;if(g&&g.state()==="pending")return g;g=a.Rest.loadMacroMetadata({data:a.whitelist?{whitelist:a.whitelist}:{detailed:false},successCallback:function(b){a.initData=
b;a.Model.loadMacros(b.macros);if(a.initMacroBrowserAfterRequest){a.initBrowser();a.openMacroBrowser(a.initMacroBrowserAfterRequest)}},errorCallback:function(b){d.trigger("analytics",{name:"macro-browser.preload-error"});d.logError("Error requesting macro browser metadata:");d.logError(b);a.initData={}}})};return a});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-browser","AJS.MacroBrowser");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser.soy' */
// This file was automatically generated from macro-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }


Confluence.Templates.MacroBrowser.macroSummaryList = function(opt_data, opt_ignored) {
  return '<ol id="category-' + soy.$$escapeHtml(opt_data.category) + '" class="macro-list"></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryList.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryList';
}


Confluence.Templates.MacroBrowser.macroSummaryItem = function(opt_data, opt_ignored) {
  return '<li class="macro-list-item"><h4 class="macro-title"></h4>' + Confluence.Templates.MacroBrowser.macroDescription({description: ''}) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryItem.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryItem';
}


Confluence.Templates.MacroBrowser.macroDescription = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="macro-desc">' + ((opt_data.descriptionHtml) ? soy.$$filterNoAutoescape(opt_data.descriptionHtml) : '') + ((opt_data.documentationLink) ? ' <a href="' + soy.$$escapeHtml(opt_data.documentationLink) + '" class="macro-doco-link">' + soy.$$escapeHtml('Documentation') + '</a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroDescription.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroDescription';
}


Confluence.Templates.MacroBrowser.insertMacroPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-insert-container"><input class="macro-name" type="hidden"/><div class="macro-input-fields dialog-panel"><form action="#" class="aui"></form></div><div class="macro-preview-container dialog-panel"><div class="macro-preview-header"><ul class="macro-preview-links"><li><a id="macro-browser-preview-link" class="refresh-link icon icon-refresh" href="#">' + soy.$$escapeHtml('Refresh') + '</a></li></ul><span>' + soy.$$escapeHtml('Preview') + '</span></div><div id="macro-browser-preview" class="macro-preview"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.insertMacroPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.insertMacroPanel';
}


Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-missing-metadata-container"><p>' + 'There is no metadata configured for this macro which means no configuration screen can be presented here.' + '</p>' + ((opt_data.showAdminMessage) ? '<p>' + AJS.format('If this is a user macro then you can add metadata to the template using the \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eUser Macro Administration\x3c/a\x3e console.',"/wiki" + '/admin/usermacros.action') + '</p>' : '<p>' + 'You must contact an administrator to configure metadata for this macro.' + '</p>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel';
}


Confluence.Templates.MacroBrowser.macroParameter = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><input type="text" class="text"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameter.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameter';
}


Confluence.Templates.MacroBrowser.macroParameterBoolean = function(opt_data, opt_ignored) {
  return '<div class="checkbox macro-param-div boolean-param"><input class="checkbox" type="checkbox" value="true"/><label></label></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterBoolean.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterBoolean';
}


Confluence.Templates.MacroBrowser.macroParameterSelect = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><select class="select"></select></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterSelect.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterSelect';
}


Confluence.Templates.MacroBrowser.macroParameterHidden = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><input type="hidden"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterHidden.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterHidden';
}


Confluence.Templates.MacroBrowser.macroParameterDesc = function(opt_data, opt_ignored) {
  return '<div class="macro-param-desc">' + soy.$$filterNoAutoescape(opt_data.description) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterDesc.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterDesc';
}


Confluence.Templates.MacroBrowser.macroBody = function(opt_data, opt_ignored) {
  return '<div class="macro-body-div"><label>' + soy.$$escapeHtml('Body text') + '</label><textarea class="monospaceInput textarea" type="text" rows="10"></textarea></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroBody.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroBody';
}


Confluence.Templates.MacroBrowser.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Macros"});
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.helpLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.helpLink';
}


Confluence.Templates.MacroBrowser.gadgetLink = function(opt_data, opt_ignored) {
  return '<a class=\'macro-uri\' href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.url) + '" target=\'_blank\'>' + soy.$$escapeHtml('Gadget URL') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.gadgetLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.gadgetLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preload.js' */
define("confluence-macro-browser/macro-browser-preload",["jquery","ajs","window"],function(a,b,c){return{macroBrowserPreload:function(){a(c).bind("render-content-loaded",function(c,d){a("#macro-preview-iframe").contents().find("body")[0]==d&&b.MacroBrowser.previewOnload(d)});b.MacroBrowser.preLoadMacro()}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preload",function(a){require("ajs").toInit(a.macroBrowserPreload)});
}catch(e){WRMCB(e)};