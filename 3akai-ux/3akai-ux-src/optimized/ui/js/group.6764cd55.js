require(["jquery","oae.core"],function(e,t){var n="g:"+e.url().segment(2)+":"+e.url().segment(3),r=null,i="/group/"+e.url().segment(2)+"/"+e.url().segment(3),s=function(){t.api.group.getGroup(n,function(n,i){n&&n.code===404?t.api.util.redirect().notfound():n&&n.code===401&&t.api.util.redirect().accessdenied(),r=i,t.api.util.setBrowserTitle(r.displayName),u(),o(),!r.isMember&&r.visibility==="private"&&r.canJoin?e("#group-join-view").show():a()})},o=function(){e(document).on("oae.context.get",function(t,n){n?e(document).trigger("oae.context.send."+n,r):e(document).trigger("oae.context.send",r)}),e(document).trigger("oae.context.send",r)},u=function(){t.api.util.template().render(e("#group-clip-template"),{group:r},e("#group-clip-container")),r.isManager?e("#group-manager-actions").show():!r.isMember&&r.canJoin&&e("#group-join-actions").show()},a=function(){var n=[];r.isMember&&n.push({id:"activity",title:t.api.i18n.translate("__MSG__RECENT_ACTIVITY__"),icon:"icon-dashboard",layout:[{width:"span12",widgets:[{id:"activity",settings:{principalId:r.id,canManage:r.isManager}}]}]}),n.push({id:"library",title:t.api.i18n.translate("__MSG__LIBRARY__"),icon:"icon-briefcase",layout:[{width:"span12",widgets:[{id:"contentlibrary",settings:{principalId:r.id,canManage:r.isManager}}]}]},{id:"discussions",title:t.api.i18n.translate("__MSG__DISCUSSIONS__"),icon:"icon-comments",layout:[{width:"span12",widgets:[{id:"discussionslibrary",settings:{principalId:r.id,canManage:r.isManager}}]}]},{id:"members",title:t.api.i18n.translate("__MSG__MEMBERS__"),icon:"icon-user",layout:[{width:"span12",widgets:[{id:"members",settings:{principalId:r.id,canManage:r.isManager}}]}]}),e(window).trigger("oae.trigger.lhnavigation",[n,i]),e(window).on("oae.ready.lhnavigation",function(){e(window).trigger("oae.trigger.lhnavigation",[n,i])})};e(document).on("oae.changepic.finished",function(e,t){r=t,u()});var f=function(){return{contextProfile:r,messages:{accessNotUpdatedBody:t.api.i18n.translate("__MSG__GROUP_ACCESS_COULD_NOT_BE_UPDATED__"),accessNotUpdatedTitle:t.api.i18n.translate("__MSG__GROUP_ACCESS_NOT_UPDATED__"),accessUpdatedBody:t.api.i18n.translate("__MSG__GROUP_ACCESS_SUCCESSFULLY_UPDATED__"),accessUpdatedTitle:t.api.i18n.translate("__MSG__GROUP_ACCESS_UPDATED__"),membersTitle:t.api.i18n.translate("__MSG__GROUP_MEMBERS__"),"private":t.api.i18n.translate("__MSG__PARTICIPANTS_ONLY__"),loggedin:t.api.util.security().encodeForHTML(r.tenant.displayName),"public":t.api.i18n.translate("__MSG__PUBLIC__"),privateDescription:t.api.i18n.translate("__MSG__GROUP_PRIVATE_DESCRIPTION_PRESENT__"),loggedinDescription:t.api.i18n.translate("__MSG__GROUP_LOGGEDIN_DESCRIPTION__",null,{tenant:t.api.util.security().encodeForHTML(r.tenant.displayName)}),publicDescription:t.api.i18n.translate("__MSG__GROUP_PUBLIC_DESCRIPTION_PRESENT__")},roles:{member:t.api.i18n.translate("__MSG__MEMBER__"),manager:t.api.i18n.translate("__MSG__MANAGER__")},api:{getMembersURL:"/api/group/"+r.id+"/members",setMembers:t.api.group.setGroupMembers,setVisibility:t.api.group.updateGroup}}};e(document).on("click",".group-trigger-manageaccess",function(){e(document).trigger("oae.trigger.manageaccess",f())}),e(document).on("click",".group-trigger-manageaccess-add",function(){e(document).trigger("oae.trigger.manageaccess-add",f())}),e(document).on("oae.manageaccess.done",function(e){u()}),e(".group-join").on("click",function(){e(".group-join").prop("disabled",!0),t.api.group.joinGroup(r.id,function(n){n?(t.api.util.notification(t.api.i18n.translate("__MSG__GROUP_JOIN_FAILED__"),t.api.i18n.translate("__MSG__GROUP_NOT_JOINED__"),"error"),e(".group-join").prop("disabled",!1)):(t.api.util.notification(t.api.i18n.translate("__MSG__GROUP_JOINED__"),t.api.i18n.translate("__MSG__GROUP_JOIN_SUCCESS__")),setTimeout(function(){document.location.reload()},2e3))})}),e(document).on("oae.editgroup.done",function(e,t){t.isManager=r.isManager,t.isMember=r.isMember,r=t,u()}),s()});