WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.profile-picture:profile-picture-editor_resources', location = 'js/profile-picture.js' */
AJS.bind("init.rte", function() {
    AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("viewProfile", function(e, macroNode) {
        var $macroDiv = AJS.$(macroNode);

        var params = {};
        if ($macroDiv.attr("data-macro-parameters")) {
            AJS.$.each($macroDiv.attr("data-macro-parameters").split("|"), function(idx, item) {
                var param = item.split("=");
                params[param[0]] = param[1];
            });
        }
        window.open(AJS.Confluence.getBaseUrl() + "/display/~" + params["user"]);
    });
});
}catch(e){WRMCB(e)};