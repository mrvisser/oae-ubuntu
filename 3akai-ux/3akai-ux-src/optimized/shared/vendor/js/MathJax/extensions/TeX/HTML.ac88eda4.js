MathJax.Extension["TeX/HTML"]={version:"2.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=e.Definitions;t.Add({macros:{href:"HREF_attribute","class":"CLASS_attribute",style:"STYLE_attribute",cssId:"ID_attribute"}}),e.Parse.Augment({HREF_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML(e);this.Push(n.With({href:t}))},CLASS_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML(e);n["class"]!=null&&(t=n["class"]+" "+t),this.Push(n.With({"class":t}))},STYLE_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML(e);n.style!=null&&(t.charAt(t.length-1)!==";"&&(t+=";"),t=n.style+" "+t),this.Push(n.With({style:t}))},ID_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML(e);this.Push(n.With({id:t}))},GetArgumentMML:function(e){var t=this.ParseArg(e);return t.inferred&&t.data.length==1?t=t.data[0]:delete t.inferred,t}}),MathJax.Hub.Startup.signal.Post("TeX HTML Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/HTML.js");