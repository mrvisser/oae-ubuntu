!function(e){"use strict";var t=function(e,t){this.cinit("clickover",e,t)};t.prototype=e.extend({},e.fn.popover.Constructor.prototype,{constructor:t,cinit:function(t,n,r){this.attr={},this.attr.me=(Math.random()*10+"").replace(/\D/g,""),this.attr.click_event_ns="click."+this.attr.me+" touchstart."+this.attr.me,r||(r={}),r.trigger="manual",this.init(t,n,r),this.$element.on("click",this.options.selector,e.proxy(this.clickery,this))},clickery:function(t){t&&(t.preventDefault(),t.stopPropagation()),this.options.width&&this.tip().width(this.options.width),this.options.height&&this.tip().height(this.options.height),this.options.tip_id&&this.tip().attr("id",this.options.tip_id),this.options.class_name&&this.tip().addClass(this.options.class_name),this[this.isShown()?"hide":"show"]();if(this.isShown()){var n=this;this.options.global_close&&e("body").on(this.attr.click_event_ns,function(e){n.tip().has(e.target).length||n.clickery()}),this.options.esc_close&&e(document).bind("keyup.clickery",function(e){e.keyCode==27&&n.clickery();return}),!this.options.allow_multiple&&e("[data-clickover-open=1]").each(function(){e(this).data("clickover")&&e(this).data("clickover").clickery()}),this.$element.attr("data-clickover-open",1),this.tip().on("click",'[data-dismiss="clickover"]',e.proxy(this.clickery,this)),this.options.auto_close&&this.options.auto_close>0&&(this.attr.tid=setTimeout(e.proxy(this.clickery,this),this.options.auto_close)),typeof this.options.onShown=="function"&&this.options.onShown.call(this),this.$element.trigger("shown")}else this.$element.removeAttr("data-clickover-open"),this.options.esc_close&&e(document).unbind("keyup.clickery"),e("body").off(this.attr.click_event_ns),typeof this.attr.tid=="number"&&(clearTimeout(this.attr.tid),delete this.attr.tid),typeof this.options.onHidden=="function"&&this.options.onHidden.call(this),this.$element.trigger("hidden")},isShown:function(){return this.tip().hasClass("in")},resetPosition:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip(),s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(s),n=this.getPosition(t),r=e[0].offsetWidth,i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}e.css(o)}},debughide:function(){var e=(new Date).toString();console.log(e+": clickover hide"),this.hide()}}),e.fn.clickover=function(n){return this.each(function(){var r=e(this),i=r.data("clickover"),s=typeof n=="object"&&n;i||r.data("clickover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.clickover.Constructor=t,e.fn.clickover.defaults=e.extend({},e.fn.popover.defaults,{trigger:"manual",auto_close:0,global_close:1,esc_close:1,onShown:null,onHidden:null,width:null,height:null,tip_id:null,class_name:"clickover",allow_multiple:0})}(jQuery);