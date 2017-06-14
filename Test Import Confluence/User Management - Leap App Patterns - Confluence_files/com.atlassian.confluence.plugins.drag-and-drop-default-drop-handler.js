WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:default-drop-handler', location = 'js/default-drop-handler.js' */
define("confluence-drag-and-drop/default-drop-handler","ajs document confluence/meta jquery confluence/legacy underscore plupload window confluence-drag-and-drop/files-uploader-factory confluence-drag-and-drop/upload-progress-dialog confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence-drag-and-drop/upload-utils confluence-drag-and-drop/drag-and-drop-utils".split(" "),function(f,k,q,l,i,p,n,w,x,y,j,r,z){var h={},o=x.get();h.initialise=function(){function s(){var b=l(".aui-blanket:visible");
return b.length&&b.css("visibility")!=="hidden"&&!l("#drag-and-drop-progress-dialog:visible").length}function h(){for(;g.files.length;)g.removeFile(g.files[0])}var b,t=function(d,a,c){if(!a)return false;if(a.generalError){p.each(a.generalError.fileIds,function(e){b.renderError(e,a.generalError.message);(e=d.getFile(e))&&d.removeFile(e)});return true}if(a.fileErrors){p.each(a.fileErrors,function(a){b.renderError(a.id,a.message);(a=d.getFile(a.id))&&d.removeFile(a)});return a.fileErrors.length===c.length}},
m=k.getElementById("fileuploadShim");if(!m){m=k.createElement("div");m.setAttribute("id","fileuploadShim");k.body.appendChild(m)}var g=new n.Uploader({runtimes:"html5",dragdrop:true,drop_element:l("body")[0],browse_button:m.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+q.get("global-settings-attachment-max-size")}),u=function(){b=j&&j.isVisible()&&i.EditorUploadProgressDialog?i.EditorUploadProgressDialog:new y};b=null;g.init();var v={};if(typeof f.DragAndDrop==="undefined")f.DragAndDrop=
{};f.DragAndDrop.defaultDropHandler=null;g.bind("FilesAdded",function(d,a){function c(a,d){!b&&u();for(var c=0;c<d.length;c++){var e=d[c];e.status!==n.FAILED?b.render({workId:e.id,status:e.status,file:e}):a.removeFile(e)}o.filesAdded(a,d,v).then(function(c){c=t(a,c,d);b.show();if(c)b.showCloseButton();else{b.cancelListeners.push(function(c,d){var e=a.getFile(d.workId);e&&a.removeFile(e);b.renderInfo(d.workId,"File was manually removed from the queue.")});g.start()}})}if(s())h();else if(j&&
j.isVisible()){var e=p.reject(a,function(a){return a.status===n.FAILED});i.Uploader&&i.Uploader.trigger("FilesAdded",e)}else r.filterFiles(d,a,c)});g.bind("BeforeUpload",function(b,a){o.beforeUpload(b,a,v)});g.bind("UploadProgress",function(d,a){b.renderUpdateToBytesUploaded(a.id,a.loaded,a.size);b.hideCloseButton()});g.bind("FileUploaded",function(d,a,c){o.fileUploaded(d,a,c).done(function(){b.renderComplete(a.id)}).fail(function(b){t(d,b,[a])}).always(function(){if(!g.total.queued&&b){b.showCloseButton();
b.hasErrors()||setTimeout(function(){b.hide();b.clearRenderOutput();w.location.reload()},1E3)}})});g.bind("Error",function(d,a){if(s())h();else if(j&&j.isVisible())i.Uploader&&i.Uploader.trigger("Error",a);else{var c;if(a.response){c=o.serverError(a.response)||a.message;b.renderError(a.file.id,c);b.showCloseButton();f.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.server-unknown"})}else{c=a.message;if(a.code===n.FILE_SIZE_ERROR){c=f.format("is too big to upload. Files must be less than {0}.",
z.niceSize(q.get("global-settings-attachment-max-size")));f.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-size"})}else if(a.code===r.ErrorCode.FILE_IS_A_FOLDER_ERROR){c="might be a folder or an unsupported file type.";f.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-type"})}!b&&u();b.render({workId:a.file.id,status:a.file.status,file:a.file,errorMessage:c});if(!b.isVisible()){b.show();b.showCloseButton()}}}})};h.bind=function(){function f(){l(k).unbind("dragenter",
f);h.initialise()}l(k).bind("dragenter",f)};return h});require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(f){require("ajs").toInit(f.bind)});
}catch(e){WRMCB(e)};