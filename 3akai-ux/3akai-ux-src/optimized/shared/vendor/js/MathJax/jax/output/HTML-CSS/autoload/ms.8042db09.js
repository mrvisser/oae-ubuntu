MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var e="2.0",t=MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.ms.Augment({toHTML:function(e){e=this.HTMLhandleSize(this.HTMLcreateSpan(e));var t=this.getValues("lquote","rquote"),n=this.data.join(""),r=[];return t.lquote.length===1&&r.push(this.HTMLquoteRegExp(t.lquote)),t.rquote.length===1&&r.push(this.HTMLquoteRegExp(t.rquote)),r.length&&(n=n.replace(RegExp("("+r.join("|")+")","g"),"\\$1")),this.HTMLhandleVariant(e,this.HTMLgetVariant(),t.lquote+n+t.rquote),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLquoteRegExp:function(e){return e.replace(/([.*+?|{}()\[\]\\])/g,"\\$1")}}),t.ms.prototype.defaults.mathvariant="monospace",MathJax.Hub.Startup.signal.Post("HTML-CSS ms Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/ms.js")});