WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-select2', location = 'node_modules/@atlassian/aui/src/js/aui/select2.js' */
("undefined"===typeof window?global:window).__cbae0711ad03dade6eafbd2c419f6a9c=function(){"use strict";var b=__307d3e18fd611f85395c67cddeb1fe24,d=b&&b.__esModule?b:{"default":b};__f8808db850ac1b5b58d33da133a8f08d;var e=d.default.fn.select2;d.default.fn.auiSelect2=function(b){var c;if(d.default.isPlainObject(b)){var a=d.default.extend({},b);c=a.hasAvatar?" aui-has-avatar":"";a.containerCssClass="aui-select2-container"+c+(a.containerCssClass?" "+a.containerCssClass:"");a.dropdownCssClass="aui-select2-drop aui-dropdown2 aui-style-default"+
c+(a.dropdownCssClass?" "+a.dropdownCssClass:"");c=Array.prototype.slice.call(arguments,1);c.unshift(a)}else c=arguments.length?arguments:[{containerCssClass:"aui-select2-container",dropdownCssClass:"aui-select2-drop aui-dropdown2 aui-style-default"}];return e.apply(this,c)};return{}}.call(this);
}catch(e){WRMCB(e)};