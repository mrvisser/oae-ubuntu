require(["jquery","oae.core","jquery.history"],function(e,t){var n=function(){var n=History.getState().data.module,r=History.getState().data.type;o(n),e(".bs-docs-sidenav li").removeClass("active"),e('[data-id="'+n+'"]').addClass("active"),i(n,r,function(r){t.api.util.template().render(e("#doc-module-template"),{docs:r,module:n},e("#doc-module-container"));var i=0,s=History.getState().data.apiFunction;if(s){var o=e('a[name="'+n+"."+s+'"]');i=o.offset().top}window.scrollTo(0,i)})},r=function(n,r){t.api.util.template().render(e("#doc-modules-template"),n,e("#doc-modules-container"))},i=function(t,n,r){e.ajax({url:"/api/doc/"+n+"/"+t,success:function(e){r(e)},error:function(e){r(null)}})},s=function(t){var n={};e.ajax({url:"/api/doc/frontend",success:function(r){n.frontend=r,e.ajax({url:"/api/doc/backend",success:function(e){n.backend=e,t(n)}})}})},o=function(e){t.api.util.setBrowserTitle(["API Reference",e])},u=function(){return History.pushState({type:e(this).attr("data-type"),module:e(this).attr("data-id")},e("title").text(),e("a",e(this)).attr("href")),!1},a=function(){e(document).on("click","#doc-modules-container ul li",u),e(window).on("statechange",n)},f=function(){a(),s(function(t){t.frontend.sort(),t.backend.sort();var n=e.url(History.getState().hash),i=n.segment(2)||"frontend",s=n.segment(3)||t[i][0],o=n.segment(4);r(t,s),History.replaceState({type:i,module:s,apiFunction:o,_:Math.random()},e("title").text(),History.getState().cleanUrl)})};f()});