WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:autoconvert-resources', location = 'com/atlassian/confluence/extra/calendar3/js/team-calendars-autoconvert.js' */
(function(b){var a=function(){if(window.tinymce&&window.tinymce.plugins&&window.tinymce.plugins.Autoconvert&&window.tinymce.plugins.Autoconvert.autoConvert&&window.tinymce.plugins.Autoconvert.autoConvert.addHandler&&b.isFunction(window.tinymce.plugins.Autoconvert.autoConvert.addHandler)){window.tinymce.plugins.Autoconvert.autoConvert.addHandler(function(g,f,d){var e=g.queryKey||{};var i=e.subCalendarId?e.subCalendarId:e.calendarId;var h=/display\/(.*)\/calendar\/(.*)/.test(g.path);if(h){var c=/display\/(.*)\/calendar\/(.*)/.exec(g.path);i=c[2]?c[2]:"unknown"}if((/\/calendar\/previewcalendar.action$/.test(g.path)||/\/calendar\/calendarPage.action$/.test(g.path)||h)&&i){window.tinymce.plugins.Autoconvert.convertMacroToDom({name:"calendar",params:{id:i}},d,d)}else{return d()}})}};b(a);AJS.bind("init.rte",a)})(jQuery);
}catch(e){WRMCB(e)};