define(["exports","require","jquery","underscore","oae.api.config","jquery.validate","trimpath","jquery.autosuggest"],function(e,t,n,r,i){var s=e.init=function(e){d().init(),g().init(),h().init(e)},o=e.staticBatch=function(e,t){if(!e||e.length===0)throw new Error("At least one path should be provided to the static batch");n.ajax({url:"/api/ui/staticbatch",data:{files:e},success:function(e){t(null,e)},error:function(e,n){t({code:e.status,msg:e.statusText})}})},u=e.generateId=function(){return"oae-"+Math.round(Math.random()*1e7)+"-"+Math.round(Math.random()*1e7)},a=e.isBlank=function(e){var t=n("<div>").html(e).text();return n.trim(t)?!1:!0},f=e.setBrowserTitle=function(e){if(!e)throw new Error("No valid page title has been provided");r.isString(e)&&(e=[e]),e.splice(0,0,"__MSG__TITLE_PREFIX__"),document.title=t("oae.api.i18n").translate(e.join(" - "))},l=[],c=[],h=e.template=function(){var e={encodeForHTML:function(e){return b().encodeForHTML(e)},encodeForHTMLAttribute:function(e){return b().encodeForHTMLAttribute(e)},encodeForURL:function(e){return b().encodeForURL(e)}},r=function(e){t(["text!/shared/oae/macros/activity.47119b4e.html","text!/shared/oae/macros/list.8633681f.html"],function(n,r){var i=t("oae.api.i18n");c.push(i.translate(r)),c.push(i.translate(n)),e()})},i=function(r,i,s){if(!r)throw new Error("No valid template has been provided");i=i||{},i.oae=t("oae.core"),i._=t("underscore"),i.jQuery=t("jquery"),i.$=t("jquery"),i._MODIFIERS=e,r=n(r);if(r.length===0)throw new Error("The provided template could not be found");var o=r.attr("id");if(!l[o]){var u=r[0].firstChild.data.toString();u=c.join("")+u;try{l[o]=TrimPath.parseTemplate(u,o)}catch(a){throw new Error('Parsing of template "'+o+'" failed: '+a)}}var f=null;try{f=l[o].process(i,{throwExceptions:!0}),f=f.replace(/<!--(?:.|\n)*?-->/gm,"")}catch(a){throw new Error('Rendering of template "'+o+'" failed: '+a)}if(!s)return f;s=n(s),s.html(f)};return{init:r,render:i}},p=e.notification=function(e,t,r){if(!t)throw new Error("A valid notification message should be provided");var i=n("#oae-notification-container");i.length===0&&(i=n("<div>").attr("id","oae-notification-container").addClass("notifications top-center"),n("body").append(i)),e&&(t="<h4>"+b().encodeForHTML(e)+"</h4>"+t),i.notify({fadeOut:{enabled:!0,delay:5e3},type:r,message:{html:t},transition:"slideDown"}).show()},d=e.validation=function(){var e=function(){n.validator.addMethod("maxlength-short",function(e,t){return n.trim(e.length)<=1e3}),n.validator.addMethod("maxlength-medium",function(e,t){return n.trim(e.length)<=1e4}),n.validator.addMethod("maxlength-long",function(e,t){return n.trim(e.length)<=1e5}),n.validator.addMethod("nospaces",function(e,t){return this.optional(t)||e.indexOf(" ")===-1}),n.validator.addMethod("prependhttp",function(e,t){return n.trim(e)!==""&&e.substring(0,7)!=="http://"&&e.substring(0,6)!=="ftp://"&&e.substring(0,8)!=="https://"&&n(t).val("http://"+e),!0})},t=function(e,t){if(!e)throw new Error("A valid form should be provided");e=n(e),t=t||{};var i=null;t.invalidHandler&&n.isFunction(t.invalidHandler)&&(i=t.invalidHandler);var s=null;t.submitHandler&&n.isFunction(t.submitHandler)&&(s=t.submitHandler),t.methods&&n.each(t.methods,function(e,t){n.validator.addMethod(e,t.method,t.text)}),t.submitHandler=function(t,n){return r(e),s&&s(t,n),!1},t.invalidHandler=function(t,n){r(e),i&&i(t,n)},t.highlight=function(e){n(e).parents(".control-group").addClass("error")},t.unhighlight=function(e){n(e).parents(".control-group").removeClass("error")},t.errorPlacement=t.errorPlacement||function(e,t){e.attr("id",t.attr("name")+"-error"),t.attr("aria-invalid","true"),t.attr("aria-describedby",t.attr("name")+"-error"),e.addClass("oae-error");var r=n(".help",t.parents(".control-group"));r.length===0?(e.addClass("help-block"),e.insertAfter(t)):r.append(e)},e.validate(t)},r=function(e){if(!e)throw new Error("A valid form should be provided");e=n(e),e.find(".oae-error").remove(),e.find(".error").removeClass("error"),e.find("*[aria-invalid]").removeAttr("aria-invalid"),e.find("*[aria-describedby]").removeAttr("aria-describedby")};return{init:e,validate:t,clear:r}},v=e.clickover=function(e,t,r){if(!e)throw new Error("A valid trigger element should be provided");if(!t)throw new Error("A valid content element should be provided");e=n(e),t=n(t),r=r||{};var i={global_close:!0,html:!0,placement:"bottom",title:""};r=n.extend(i,r),r.onShown&&(showCallback=r.onShown,r.onShown=function(){showCallback(this.$tip)}),r.content=t.html(),e.clickover(r),e.trigger("click"),n(".popover-title").remove()},m=null,g=e.autoSuggest=function(){var e={canGenerateNewSelections:!1,minChars:2,retrieveLimit:10,url:"/api/search/general",scroll:117,searchObjProps:"id, displayName",selectedItemProp:"displayName",selectedValuesProp:"id"},s=function(){n(document).on("focus","ul.as-selections input",function(){n(this).parents("ul.as-selections").addClass("as-selections-focus")}),n(document).on("focusout","ul.as-selections input",function(){n(this).parents("ul.as-selections").removeClass("as-selections-focus")})},o=function(e){m?e():t(["text!/shared/oae/macros/autosuggest.68e93bf9.html"],function(r){r=t("oae.api.i18n").translate(r),m=n("<div>").append(r),e()})},u=function(s,u,a,f){if(!s)throw new Error("A valid input element should be provided.");o(function(){s=n(s);var o=t("oae.api.i18n");if(!u.startText){var l=s.attr("placeholder");u.startText=l?l:o.translate("__MSG__ENTER_NAME_HERE__")}u.emptyText||(u.emptyText=o.translate("__MSG__NO_RESULTS_FOUND__")),u=r.extend({},e,u),a||(a=["user","group"]),u.extraParams=u.extraParams||"",n.each(a,function(e,t){u.extraParams+="&resourceTypes="+t}),u.extraParams+="&includeExternal="+!i.getValue("oae-tenants","tenantprivacy","tenantprivate"),u.searchObjProps+=",query",u.preFill&&n.each(u.preFill,function(e,t){t[u.selectedItemProp]=b().encodeForHTML(t[u.selectedItemProp])}),u.ghosts&&n.each(u.ghosts,function(e,t){t[u.selectedItemProp]=b().encodeForHTML(t[u.selectedItemProp])});var c=null;u.retrieveComplete&&(c=u.retrieveComplete),u.retrieveComplete=function(e){var t=n.url(this.url).param("q");return n.each(e.results,function(e,n){n.displayName=b().encodeForHTML(n.displayName),n.query=t}),c?c(e):e.results},u.formatList||(u.formatList=function(e,t){return t.html(h().render(n("#autosuggest-suggested-template",m),{data:e}))});var p=null;u.selectionRemoved&&(p=u.selectionRemoved),u.selectionRemoved=function(e){var t=!1,i=n(e).data("originalData");u.preFill&&(t=r.some(u.preFill,function(e){return e.id===i.id&&e.fixed===!0})),!t&&u.ghosts&&(t=r.some(u.ghosts,function(e){return e.id===i.id})),t||(p?p(e):e.remove(),u.selectionChanged&&u.selectionChanged())};var d=null;u.selectionAdded&&(d=u.selectionAdded),u.selectionAdded=function(e){var t=n(e);t.addClass("oae-threedots");var r=t.data("originalData");if(r.resourceType){var i=n("<div>").addClass("oae-thumbnail icon-oae-"+r.resourceType);r.thumbnailUrl&&i.append(n("<img>").attr("src",r.thumbnailUrl)),t.prepend(i)}d&&d(e),u.selectionChanged&&u.selectionChanged()};var v=s.autoSuggest(u.url,u),g=v.parents("ul");u.preFill&&n.each(u.preFill,function(e,t){t.fixed&&n('li[data-value="'+t[u.selectedValuesProp]+'"]').addClass("as-fixed-item")}),u.ghosts&&n.each(u.ghosts,function(e,t){g.prepend(h().render(n("#autosuggest-selected-template",m),{index:e,ghostItem:t,options:u}));var r=n("li",g).first();r.data("originalData",t),r.on("click",function(){n(this).toggleClass("as-ghost-selected"),u.selectionChanged&&u.selectionChanged()})}),n(".as-input",g).before('<label class="oae-aural-text" for="'+n(".as-input",g).attr("id")+'">'+u.startText+"</label>"),r.isFunction(f)&&f()})},a=function(e){if(!e)throw new Error("An valid input element should be provided.");e=n(e),n(".as-selections input",e).focus()},f=function(e){if(!e)throw new Error("An valid input element should be provided.");e=n(e);var t=[];return n.each(e.find(".as-selections > li"),function(e,r){var i=n(r),s=i.attr("data-value"),o=i.data().originalData,u=i.hasClass("as-ghost-item");s&&o&&(!u||u&&i.hasClass("as-ghost-selected"))&&t.push({id:s,displayName:o.displayName,resourceType:o.resourceType,thumbnailUrl:o.thumbnailUrl,visibility:o.visibility})}),t};return{init:s,setup:u,focus:a,getSelection:f}},y=e.renderMath=function(e){},b=e.security=function(){var e=function(e){return e?n.encoder.encodeForHTML(e):""},t=function(e,t){return e?(t=t||"tmp",n.encoder.encodeForHTMLAttribute(t,e,!0)):""},r=function(e){return e?n.encoder.encodeForURL(e):""};return{encodeForHTML:e,encodeForHTMLAttribute:t,encodeForURL:r}},w=e.redirect=function(){var e=function(){window.location="/"},t=function(){window.location="/me"},r=function(){window.location="/accessdenied?url="+n.url().attr("path")},i=function(){window.location="/notfound"},s=function(){window.location="/unavailable"},o=function(){window.location="/maintenance"};return{login:e,me:t,accessdenied:r,notfound:i,unavailable:s,maintenance:o}},E=e.showPage=function(){n("body").show()}});