define(["jquery","oae.api.content"],function(e){(function(){$(document).on("drop",".oae-dnd-upload",function(e,t){if(e.originalEvent.dataTransfer&&e.originalEvent.dataTransfer.files.length){e.preventDefault(),e.stopPropagation();var n={files:[]};$.each(e.originalEvent.dataTransfer.files,function(e,t){t.size>0&&t.name&&n.files.push(t)}),n.files.length&&$(document).trigger("oae.trigger.upload",{data:n})}}),$(document).on("dragover",".oae-dnd-upload",function(e){e.originalEvent.dataTransfer.dropEffect="copy",e.preventDefault(),e.stopPropagation()})})()});