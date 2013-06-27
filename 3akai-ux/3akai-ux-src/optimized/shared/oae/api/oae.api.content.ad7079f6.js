define(["exports","jquery","underscore","oae.api.i18n"],function(e,t,n,r){var i=e.getContent=function(e,n){if(!e)throw new Error("A valid content id should be provided");t.ajax({url:"/api/content/"+e,success:function(e){n(null,e)},error:function(e,t){n({code:e.status,msg:e.statusText})}})},s=e.createLink=function(e,n,r,i,s,o,u){if(!e)throw new Error("A valid link name should be provided");if(!i)throw new Error("A valid link should be provided");var a={resourceSubType:"link",displayName:e,description:n,visibility:r,link:i,managers:s,viewers:o};t.ajax({url:"/api/content/create",type:"POST",data:a,success:function(e){u(null,e)},error:function(e,t){u({code:e.status,msg:e.statusText})}})},o=e.createFile=function(e,n,r,i,s,o,u,a){if(!e)throw new Error("A valid file name should be provided");if(!i)throw new Error("A valid jquery.fileUpload container should be provided");if(!s)throw new Error("A valid jquery.fileUpload file object should be provided");var f=[{name:"resourceSubType",value:"file"},{name:"displayName",value:e},{name:"description",value:n},{name:"visibility",value:r}];o=o||[],t.each(o,function(e,t){f.push({name:"managers",value:t})}),u=u||[],t.each(u,function(e,t){f.push({name:"viewers",value:t})}),t(i).fileupload("send",{files:[s],formData:f,success:function(e){e instanceof t&&(e=e.find("pre").text()),a(null,JSON.parse(e))},error:function(e,t){a({code:e.status,msg:e.statusText})}})},u=e.uploadNewVersion=function(e,n,r){if(!e)throw new Error("A valid jquery.fileUpload container should be provided");if(!n)throw new Error("A valid jquery.fileUpload file object should be provided");t(e).fileupload("send",{files:[n],success:function(e){e instanceof t&&(e=e.find("pre").text()),r(null,JSON.parse(e))},error:function(e,t){r({code:e.status,msg:e.statusText})}})},a=e.createCollabDoc=function(e,n,r,i,s,o){if(!e)throw new Error("A valid document name should be provided");var u={resourceSubType:"collabdoc",displayName:e,description:n,visibility:r,managers:i,viewers:s};t.ajax({url:"/api/content/create",type:"POST",data:u,success:function(e){o(null,e)},error:function(e,t){o({code:e.status,msg:e.statusText})}})},f=e.restoreRevision=function(e,n,r){if(!e)throw new Error("A valid content id should be provided");if(!n)throw new Error("A valid revision id should be provided");t.ajax({url:"/api/content/"+e+"/revisions/"+n+"/restore",type:"POST",success:function(e){r(null,e)},error:function(e,t){r({code:e.status,msg:e.statusText})}})},l=e.updateContent=function(e,r,i){if(!e)throw new Error("A valid content id should be provided");if(!r||n.keys(r).length===0)throw new Error("At least one update parameter should be provided");t.ajax({url:"/api/content/"+e,type:"POST",data:r,success:function(e){i(null,e)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},c=e.deleteContent=function(e,n){if(!e)throw new Error("A valid content id should be provided");t.ajax({url:"/api/content/"+e,type:"DELETE",success:function(){n(null)},error:function(e,t){n({code:e.status,msg:e.statusText})}})},h=e.getMembers=function(e,n,r,i){if(!e)throw new Error("A content ID should be provided");var s={start:n,limit:r};t.ajax({url:"/api/content/"+e+"/members",data:s,success:function(e){i(null,e)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},p=e.updateMembers=function(e,r,i){if(!e)throw new Error("A valid content id should be provided");if(!r||n.keys(r).length===0)throw new Error("The updatedMembers hash should contain at least 1 update.");t.ajax({url:"/api/content/"+e+"/members",type:"POST",data:r,success:function(){i(null)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},d=e.shareContent=function(e,n,r){if(!e)throw new Error("A content ID should be provided");if(!n.length)throw new Error("A user or group to share with should be provided");var i={viewers:n};t.ajax({url:"/api/content/"+e+"/share",type:"POST",data:i,success:function(e){r(null,e)},error:function(e,t){r({code:e.status,msg:e.statusText})}})},v=e.getLibrary=function(e,n,r,i){if(!e)throw new Error("A user or group ID should be provided");var s={start:nextToken,limit:r};t.ajax({url:"/api/content/library/"+e,data:s,success:function(e){i(null,e)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},m=e.deleteContentFromLibrary=function(e,n,r){if(!e)throw new Error("A valid user or group ID should be provided");if(!n)throw new Error("A valid content ID should be provided");t.ajax({url:"/api/content/library/"+e+"/"+n,type:"DELETE",success:function(){r(null)},error:function(e,t){r({code:e.status,msg:e.statusText})}})},g={archive:{description:"__MSG__ARCHIVE__",regex:["application/zip","application/x-zip*","application/x-tar"]},audio:{description:"__MSG__AUDIO__",regex:["audio/*","kaltura/audio"]},collabdoc:{description:"__MSG__DOCUMENT__"},css:{description:"__MSG__CSS_FILE__",regex:"text/css"},image:{description:"__MSG__IMAGE__",regex:"image/*"},flash:{description:"__MSG__FLASH_FILE__",regex:"application/x-shockwave-flash"},html:{description:"__MSG__HTML_DOCUMENT__",regex:"text/html"},link:{description:"__MSG__LINK__"},other:{description:"__MSG__OTHER_DOCUMENT__"},pdf:{description:"__MSG__PDF_DOCUMENT__",regex:["application/pdf","application/x-download","application/x-pdf"]},presentation:{description:"__MSG__PRESENTATION__",regex:["application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.presentation*"]},spreadsheet:{description:"__MSG__SPREADSHEET__",regex:["application/vnd.oasis.opendocument.spreadsheet","application/vnd.openxmlformats-officedocument.spreadsheet*","application/vnd.ms-excel"]},text:{description:"__MSG__TEXT_DOCUMENT__",regex:["text/plain","text/rtf"]},xml:{description:"__MSG__XML_DOCUMENT__",regex:"text/xml"},video:{description:"__MSG__VIDEO__",regex:["video/*","kaltura/video"]},word:{description:"__MSG__WORD_DOCUMENT__",regex:["application/doc","application/msword","application/vnd.openxmlformats-officedocument.word*","application/vnd.oasis.opendocument.text"]}},y=e.getMimeTypeDescription=function(e){var i=e.resourceSubType||e["oae:resourceSubType"],s=null;if(i==="file"){var o=e.mime||e["oae:mimeType"];o&&t.each(g,function(e,t){if(t.regex){var r=t.regex;r=n.isArray(r)?r:[r];var i=new RegExp(r.join("|"),"i");if(o.match(i))return s=t,!1}})}else s=g[i];return s||(s=g.other),r.translate(s.description)},b=e.getFileSize=function(e){}});