define(["jquery"],function(e){(function(e){e(document).on("click",".oae-clip-content > button:not(:disabled)",function(t){var n=e(this).parent();e("i.icon-caret-down, i.icon-caret-up",n).length>0&&(e("ul",n).toggle(),n.find("i.icon-caret-down, i.icon-caret-up").toggleClass("icon-caret-down icon-caret-up"))})})(e)});