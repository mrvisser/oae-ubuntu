MathJax.Extension.jsMath2jax={version:"2.0",config:{preview:"TeX"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub.CombineConfig("jsMath2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this,this.config.Augment),typeof this.config.previewTeX!="undefined"&&!this.config.previewTeX&&(this.config.preview="none"),this.previewClass=MathJax.Hub.config.preRemoveClass,this.configured=!0),typeof e=="string"&&(e=document.getElementById(e)),e||(e=document.body);var t=e.getElementsByTagName("span"),n;for(n=t.length-1;n>=0;n--)String(t[n].className).match(/(^| )math( |$)/)&&this.ConvertMath(t[n],"");var r=e.getElementsByTagName("div");for(n=r.length-1;n>=0;n--)String(r[n].className).match(/(^| )math( |$)/)&&this.ConvertMath(r[n],"; mode=display")},ConvertMath:function(e,t){if(e.getElementsByTagName("script").length===0){var n=e.parentNode,r=this.createMathTag(t,e.innerHTML);e.nextSibling?n.insertBefore(r,e.nextSibling):n.appendChild(r),this.config.preview!=="none"&&this.createPreview(e),n.removeChild(e)}},createPreview:function(e){var t;this.config.preview==="TeX"?t=[this.filterPreview(e.innerHTML)]:this.config.preview instanceof Array&&(t=this.config.preview),t&&(t=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},t),e.parentNode.insertBefore(t,e))},createMathTag:function(e,t){t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");var n=document.createElement("script");return n.type="math/tex"+e,MathJax.HTML.setScript(n,t),n},filterPreview:function(e){return e}},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.jsMath2jax]),MathJax.Ajax.loadComplete("[MathJax]/extensions/jsMath2jax.js");