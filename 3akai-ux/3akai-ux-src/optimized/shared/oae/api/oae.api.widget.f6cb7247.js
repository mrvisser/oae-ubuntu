define(["exports","jquery","underscore","oae.api.config","oae.api.i18n","oae.api.util"],function(e,t,n,r,i,s){var o=null,u={},a=null,f=e.init=function(e,n){a=e||r.getValue("oae-principals","user","defaultLanguage"),t.ajax({url:"/api/ui/widgets",success:function(e){o=e,h(),p(),n(null)},error:function(e,t){n({code:e.status,msg:e.statusText})}})},l=e.getWidgetManifest=function(e){if(!e||!o[e])throw new Error("A valid widget name should be provided");return o[e]},c=e.getWidgetManifests=function(e){if(!e)return o;var n={};return t.each(o,function(r,i){var s=!0;t.each(e,function(e,t){i[e]!==t&&(s=!1)}),s&&(n[r]=i)}),n},h=function(){t.each(c(),function(e,n){if(n.trigger&&n.trigger.onLoad){var r=t("<div>").attr("data-widget",e);t("body").prepend(r)}})},p=function(){t.each(c(),function(e,r){if(r.trigger&&!r.trigger.onLoad){r.trigger.events=r.trigger.events||[],n.isString(r.trigger.events)&&(r.trigger.events=[r.trigger.events]),r.trigger.selectors=r.trigger.selectors||[],n.isString(r.trigger.selectors)&&(r.trigger.selectors=[r.trigger.selectors]);var i=function(n){t.each(r.trigger.events,function(e,n){t(document).off(n)}),t.each(r.trigger.selectors,function(e,n){t(document).off("click",n)}),w(e,null,null,null,null,n)};t.each(r.trigger.events,function(e,n){t(document).on(n,function(){var e=Array.prototype.slice.call(arguments).slice(1);i(function(){t(document).trigger(n,e)})})}),t.each(r.trigger.selectors,function(e,n){t(document).on("click",n,function(e,n){return i(function(){t(e.target).trigger("click",[e,n])}),!1})})}})},d=function(e,t){return e?t?e.substring(0,1)==="/"||e.substring(0,4)==="http"?e:t+e:e:null},v=e.loadWidgets=function(e,n,r,i){i=i||function(){},n=n||!1,e=e?t(e):t("body"),r=r||{},m(e,n,r,i)},m=function(e,r,i,o){var f={};t("[data-widget]",e).each(function(e,n){$element=t(n);var o=$element.attr("data-widget"),c=l(o),h=$element.attr("id");h||(h=s.generateId(),$element.attr("id",h)),$element.removeAttr("data-widget");if(u[o])return b(o,h,r,i[h]);f[o]=f[o]||{},f[o].prefixPath="/node_modules/"+c.path,f[o].html=d(c.src,f[o].prefixPath),f[o].bundles={},c.i18n&&(f[o].bundles["default"]=c.i18n["default"]?d(c.i18n["default"].bundle,f[o].prefixPath):null,f[o].bundles[a]=c.i18n[a]?d(c.i18n[a].bundle,f[o].prefixPath):null),f[o].instances=f[o].instances||[],f[o].instances.push(h)});if(n.keys(f).length===0)return o();g(f,e,r,i,o)},g=function(e,n,r,i,o){var u=[];t.each(e,function(e,t){u.push(t.html),t.bundles["default"]&&u.push(t.bundles["default"]),t.bundles[a]&&u.push(t.bundles[a])}),s.staticBatch(u,function(t,s){if(t)return o(t);y(s,e,n,r,i,o)})},y=function(e,r,s,o,f,l){var c=0;t.each(r,function(s,h){var p=e[h.html];h.bundles["default"]&&i.parseWidgetBundles(s,e[h.bundles["default"]],h.bundles[a]?e[h.bundles[a]]:null),p=i.translate(p,s),p=p.replace(/<img/ig,"<imgtmp");var v=t(p);v.find("imgtmp").each(function(e,n){var i=t(n);i.attr("src",d(i.attr("src"),r[s].prefixPath))}),v.filter('link[rel="stylesheet"]').each(function(e,n){var i=t(n);i.attr("href",d(i.attr("href"),r[s].prefixPath)),t("head").append(i[0].outerHTML)});var m=[];v.filter("script").each(function(e,n){m.push(d(t(n).attr("src"),r[s].prefixPath))}),p=t("<div>").html(v.filter(":not(link):not(script)")).html(),p=p.replace(/imgtmp/ig,"img"),require(m,function(e){u[s]={html:p,widgetFunction:e};for(var t=0;t<h.instances.length;t++)b(s,h.instances[t],o,f[h.instances[t]]);c++,c===n.keys(r).length&&l()})})},b=function(e,n,r,i){var s=t("#"+n);s.html(u[e].html),u[e].widgetFunction&&u[e].widgetFunction(n,r,i)},w=e.insertWidget=function(e,n,r,i,u,a){if(!e||!o[e])throw new Error("A valid widget name should be provided");i=i||!1,r=r?t(r):t("body"),n=n||s.generateId();var f={};u&&(f[n]=u);var l=t("<div>").attr({id:n,"data-widget":e});r.prepend(l),v(r,i,f,a)}});