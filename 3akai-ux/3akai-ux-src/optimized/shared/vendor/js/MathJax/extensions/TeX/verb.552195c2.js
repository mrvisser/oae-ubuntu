MathJax.Extension["TeX/verb"]={version:"2.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,n=t.Definitions;n.macros.verb="Verb",t.Parse.Augment({Verb:function(n){var r=this.GetNext(),i=++this.i;r==""&&t.Error(n+" requires an argument");while(this.i<this.string.length&&this.string.charAt(this.i)!=r)this.i++;this.i==this.string.length&&t.Error("Can't find closing delimiter for "+n);var s=this.string.slice(i,this.i);this.i++,this.Push(e.mtext(s).With({mathvariant:e.VARIANT.MONOSPACE}))}}),MathJax.Hub.Startup.signal.Post("TeX verb Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/verb.js");