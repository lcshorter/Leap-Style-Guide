WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-editor-resources', location = 'includes/js/fh/slow-edit-handler.js' */
require(["confluence/fh/utils/dom","ajs","jquery"],function(c,a,d){a.toInit(function(){var b=a.Meta.get("browse-page-tree-mode");"create"!==b&&"edit"!==b||(c.addClassToPage(),d("#content").css({paddingRight:0}))})});
}catch(e){WRMCB(e)};