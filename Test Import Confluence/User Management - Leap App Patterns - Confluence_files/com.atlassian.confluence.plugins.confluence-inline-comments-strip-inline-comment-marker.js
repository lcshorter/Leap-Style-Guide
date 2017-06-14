WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:strip-inline-comment-marker', location = 'editor/paste-handler.js' */
(function(a){AJS.bind("init.rte",function(){a(document).unbind("postPaste",b).bind("postPaste",b);tinymce.activeEditor&&tinymce.activeEditor.onRemove.add(function(){a(document).unbind("postPaste",b)});function b(d,e,c){if(c&&c.node){a(".inline-comment-marker",c.node).contents().unwrap()}}})})(AJS.$);
}catch(e){WRMCB(e)};