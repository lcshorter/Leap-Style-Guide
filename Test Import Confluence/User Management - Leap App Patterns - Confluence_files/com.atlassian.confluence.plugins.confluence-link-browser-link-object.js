WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-object', location = 'js/link-object.js' */
define("confluence-link-browser/link-object",["jquery","ajs","confluence-rest/confluence-rest"],function(c,g,m){function j(a){return c.nodeName(a,"img")?a:a.hasChildNodes()&&1===a.childNodes.length&&c.nodeName(a,"a")&&c.nodeName(a.firstChild,"img")?a.firstChild:null}function k(a){return!a?"":c(a).attr("data-linked-resource-default-alias")||c(a).attr("src")}function l(a){var b={};"A"===a.nodeName&&c(a.attributes).each(function(){b[this.name]=this.value});return b}function i(a,b){for(var c=a;c&&c!=
b;){if(3!=c.nodeType)return!1;c=c.nextSibling}return 3===b.nodeType}var e={isLink:function(a){return a&&!!a.fillNode}},f=function(a){if(e.isLink(a))return a;var b={insert:function(){return require("confluence-link-browser/link-adapter").setLink(b)},fillNode:function(a){var b=this.attrs;b.href=b.href||"#";a.attr(b);this.classes&&this.classes.length&&a.addClass(this.classes.join(" "));a.html(this.body.html);return a},getData:function(){var a={},b;for(b in this)this.hasOwnProperty(b)&&!c.isFunction(this[b])&&
(a[b]=this[b]);return a},getLinkedImage:function(){return this.body&&this.body.jquery?1===this.body.length&&this.body.is("img")&&this.body:null},getResourceId:function(){return this.attrs["data-linked-resource-id"]||""},getResourceVersion:function(){return this.attrs["data-linked-resource-version"]||""},isToConfluenceEntity:function(){return this.attrs["data-linked-resource-id"]},isToAttachmentOnSamePage:function(a){return"attachment"==this.attrs["data-linked-resource-type"]&&this.attrs["data-linked-resource-container-id"]==
a},isCustomAtlassianContentLink:function(){return this.classes&&this.classes.length?-1!=c.inArray("confluence-link",this.classes):!1},hasAnchor:function(){return this.attrs["data-anchor"]},getResourceType:function(){return this.attrs["data-linked-resource-type"]},getDefaultAlias:function(){return this.attrs["data-linked-resource-default-alias"]},getHref:function(){return this.attrs.href},getAnchor:function(){return this.attrs["data-anchor"]},getHtml:function(){return this.body.html},getShortcut:function(){return this.attrs["data-linked-resource-shortcut"]},
isHrefValid:function(){return this.attrs.href&&"http://"!=this.attrs.href},isImage:function(){return this.body.isImage},isNewLink:function(){return c.isEmptyObject(this.attrs)},isShortcutLink:function(){return"shortcut"===this.getResourceType()},showsBreadcrumbs:function(){return!0}};if(a&&a.attrs){var f={},h=null;c.each(a.attrs,function(a,b){"class"==a?h=b:f[a]=b});a.attrs=f;if(h){var d=h.split(" ");a.classes=a.classes&&a.classes.length?a.classes.concat(d):d}}c.extend(b,a);return b};e.fromData=function(a){return f(a)};
e.fromNode=function(a,b){f({attrs:{},body:{html:b,text:b}});return f({attrs:l(a),body:{html:b,text:b}})};e.fromSelectedAnchor=function(a,b){var e=c(a),h=j(a),d=!h&&i(a.firstChild,a.lastChild);return f({attrs:l(a),body:{isEditable:d,isImage:!!h,html:e.html(),imgName:k(h),text:b}})};e.fromSelection=function(a,b,c,e){var b=j(b),d;if(d=!b)if(a.collapsed)d=!0;else if(d=a.startContainer,d==a.endContainer)d=3===d.nodeType?!0:i(d.childNodes[a.startOffset],d.childNodes[a.endOffset-1]);else{var g=require("tinymce").activeEditor.dom;
d=g.isBlock(a.startContainer)?a.startContainer.childNodes[a.startOffset]:a.startContainer;a=g.isBlock(a.endContainer)?a.endContainer.childNodes[a.endOffset-1]:a.endContainer;a=d&&a&&d.parentNode==a.parentNode?{start:d,end:a}:null;d=!!a&&i(a.start,a.end)}return f({attrs:{},body:{isEditable:d,isImage:!!b,html:c,imgName:k(b),text:e}})};e.fromREST=function(a){var b=f({attrs:{"data-base-url":g.Confluence.getBaseUrl(),"data-linked-resource-id":a.id,"data-linked-resource-type":a.type,"data-linked-resource-content-type":a.contentType,
href:m.REST.findLink(a.link),"data-linked-resource-default-alias":a.title},body:{html:g.escapeHtml(a.title),text:g.escapeHtml(a.title)},classes:["confluence-link"]});"user"===a.type&&(b.attrs["data-linked-resource-type"]="userinfo");return b};e.createLinkToNewPage=function(a,b){return f({attrs:{"data-space-key":b,"data-content-title":a,href:g.contextPath()+"/pages/createpage.action?spaceKey="+b+"&title="+a},body:{html:g.escapeEntities(a),text:a},classes:["createlink","confluence-link"]})};e.makeExternalLink=
function(a){return f({attrs:{href:a},body:{html:a,text:a}})};e.isExternalLink=function(a){return a&&(a.match(/^(\/\/|mailto:|file:|http:|https:)/)||0===a.indexOf("\\"))};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-object","Confluence.Link");
}catch(e){WRMCB(e)};