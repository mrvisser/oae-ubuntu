require(["jquery","oae.core"],function(e,t){t.data.me.anon&&t.api.util.redirect().login();var n="/me";t.api.util.setBrowserTitle(t.data.me.displayName);var r=[{id:"dashboard",title:t.api.i18n.translate("__MSG__RECENT_ACTIVITY__"),icon:"icon-dashboard",layout:[{width:"span12",widgets:[{id:"activity",settings:{principalId:t.data.me.id,canManage:!0}}]}]},{id:"library",title:t.api.i18n.translate("__MSG__MY_LIBRARY__"),icon:"icon-briefcase",layout:[{width:"span12",widgets:[{id:"contentlibrary",settings:{principalId:t.data.me.id,canManage:!0}}]}]},{id:"discussions",title:t.api.i18n.translate("__MSG__MY_DISCUSSIONS__"),icon:"icon-comments",layout:[{width:"span12",widgets:[{id:"discussionslibrary",settings:{principalId:t.data.me.id,canManage:!0}}]}]},{id:"groups",title:t.api.i18n.translate("__MSG__MY_GROUPS__"),icon:"icon-group",layout:[{width:"span12",widgets:[{id:"memberships",settings:{principalId:t.data.me.id,canManage:!0}}]}]}],i=function(){e(window).trigger("oae.trigger.lhnavigation",[r,n]),e(window).on("oae.ready.lhnavigation",function(){e(window).trigger("oae.trigger.lhnavigation",[r,n])})},s=function(){t.api.util.template().render(e("#me-clip-template"),null,e("#me-clip-container"))};e(document).on("oae.context.get",function(n,r){r?e(document).trigger("oae.context.send."+r,t.data.me):e(document).trigger("oae.context.send",t.data.me)}),e(document).trigger("oae.context.send",t.data.me),e(document).on("oae.changepic.finished",function(e,n){t.data.me.picture=n.picture,s()}),e(document).on("oae.editprofile.done",function(e,n){t.data.me=n,s()}),s(),i()});