define(["exports","jquery","underscore","oae.api.util"],function(e,t,n,r){var i=e.createGroup=function(e,n,r,i,s,o,u){if(!e)throw new Error("A group displayName should be provided");var a={displayName:e,description:n,visibility:r,joinable:i,managers:s,members:o};t.ajax({url:"/api/group/create",type:"POST",data:a,success:function(e){u(null,e)},error:function(e,t){u({code:e.status,msg:e.statusText})}})},s=e.getGroup=function(e,n){if(!e)throw new Error("A valid group id should be provided");t.ajax({url:"/api/group/"+e,success:function(e){n(null,e)},error:function(e,t){n({code:e.status,msg:e.statusText})}})},o=e.updateGroup=function(e,r,i){if(!e)throw new Error("A valid group id should be provided");if(!r||n.keys(r).length===0)throw new Error("At least one parameter should be provided");var s=n.pick(r,"displayName","description","visibility","joinable");t.ajax({url:"/api/group/"+e,type:"POST",data:s,success:function(e){i(null,e)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},u=e.getGroupMembers=function(e,n,r,i){if(!e)throw new Error("A valid group id should be provided");var s={start:n,limit:r};t.ajax({url:"/api/group/"+e+"/members",data:s,success:function(e){i(null,e)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},a=e.setGroupMembers=function(e,r,i){if(!e)throw new Error("A valid group id should be provided");if(!r||n.keys(r).length===0)throw new Error("At least one member should be speficied.");t.ajax({url:"/api/group/"+e+"/members",type:"POST",data:r,success:function(){i(null)},error:function(e,t){i({code:e.status,msg:e.statusText})}})},f=e.memberOf=function(e,r,i,s){e=e||require("oae.core").data.me.id,i=i||10;if(!n.isNumber(i))throw new Error("A valid limit should be provided");t.ajax({url:"/api/user/"+e+"/memberships",success:function(e){s(null,e)},error:function(e,t){s({code:e.status,msg:e.statusText})}})},l=e.joinGroup=function(e,n){if(!e)throw new Error("A valid group id should be provided");t.ajax({url:"/api/group/"+e+"/join",type:"POST",success:function(e){n(null,e)},error:function(e,t){n({code:e.status,msg:e.statusText})}})},c=e.leaveGroup=function(e,n){if(!e)throw new Error("A valid group id should be provided");t.ajax({url:"/api/group/"+e+"/leave",type:"POST",success:function(e){n(null,e)},error:function(e,t){n({code:e.status,msg:e.statusText})}})}});