define(["exports","jquery","underscore","oae.api.config","globalize"],function(e,t,n,r){var i=e.init=function(e,t){var n=r.getValue("oae-principals","user","defaultLanguage");e=e||n,e==="debug"&&(e=n),e=e.replace("_","-"),require(["/shared/vendor/js/l10n/cultures.c4f256e5/globalize.culture."+e+".js"],function(){Globalize.culture(e),t()})},s=function(e,t){n.isNumber(e)?e=new Date(e):n.isString(e)&&(e=new Date(parseInt(e,10)));if(t!==!1){var r=require("oae.core").data.me.locale;if(r){var i=r.timezone.offset;e.setTime(e.getTime()+i*60*60*1e3)}}return e},o=e.transformDate=function(e){if(!e)throw new Error("A date must be provided");return e=s(e),Globalize.format(e,"d")},u=e.transformDateTime=function(e,t){if(!e)throw new Error("A date must be provided");return e=s(e),t?Globalize.format(e,"d")+" "+Globalize.format(e,"t"):Globalize.format(e,"D")+" "+Globalize.format(e,"t")},a=e.transformNumber=function(e,t){if(!n.isNumber(e))throw new Error("A valid number must be provided");return Globalize.format(e,t!==null?"n"+t:"n")},f=e.timeAgo=function(e){if(!e)throw new Error("A date must be provided");return e=s(e,!1),t.timeago(e)}});