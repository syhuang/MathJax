/*
 *  /MathJax/jax/output/NativeMML/jax.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(b,e,d){var a,c=e.Browser.isMSIE;b.Augment({LEFTBUTTON:(c?1:0),MENUKEY:"altKey",noContextMenuBug:e.Browser.isKonequeror,msieQuirks:(c&&!(document.compatMode==="BackCompat")),msieEventBug:e.Browser.isIE9,config:{styles:{}},settings:e.config.menuSettings,Startup:function(){return MathJax.Ajax.Styles(this.config.styles)},Config:function(){this.SUPER(arguments).Config.call(this);if(this.settings.scale){this.config.scale=this.settings.scale}if(e.config.displayAlign!=="center"){var h=e.config.displayAlign,f=e.config.displayIndent;var g={"text-align":h+"!important"};g["margin-"+h]=f+"!important";MathJax.Hub.Insert(this.config.styles,{"div.MathJax_MathML":g,"div.MathJax_MathML math":{"text-align":h},"div.MathJax_MathContainer > span":{"text-align":h+"!important"}})}},InitializeMML:function(){this.initialized=true;if(MathJax.Hub.Browser.isMSIE){try{var f=document.createElement("object");f.id="mathplayer";f.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987";document.getElementsByTagName("head")[0].appendChild(f);document.namespaces.add("mjx","http://www.w3.org/1998/Math/MathML");document.namespaces.mjx.doImport("#mathplayer")}catch(g){alert("MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics.")}}},Translate:function(g){if(!g.parentNode){return}if(!this.initialized){this.InitializeMML()}var k=g.previousSibling;if(k&&String(k.className).match(/^MathJax(_MathML|_Display)?$/)){k.parentNode.removeChild(k)}var j=g.MathJax.elementJax.root;var i=(j.Get("display")==="block"?"div":"span");var h=document.createElement(i),f=h;h.className="MathJax_MathML";h.style.fontSize=this.config.scale+"%";if(c&&this.config.showMathMenuMSIE){f=MathJax.HTML.addElement(h,"span",{className:"MathJax_MathContainer",style:{display:"inline-block",position:"relative"}})}j.toNativeMML(f);g.parentNode.insertBefore(h,g);if(c){if(this.config.showMathMenuMSIE){this.MSIEoverlay(h)}}else{j=h.firstChild;j.oncontextmenu=this.ContextMenu;j.onmouseover=this.Mouseover;j.onmousedown=this.Mousedown;j.onclick=this.Click;j.ondblclick=this.DblClick}},Remove:function(f){var g=f.SourceElement();if(!g){return}g=g.previousSibling;if(!g){return}if(g.className.match(/MathJax_MathML/)){g.parentNode.removeChild(g)}},MMLnamespace:"http://www.w3.org/1998/Math/MathML",MSIEoverlay:function(m){var l=m.firstChild;m.style.position="absolute";var n=m.scrollHeight,h=m.offsetWidth;var j=MathJax.HTML.addElement(m,"img",{src:"about:blank",style:{width:0,height:n+"px"}});var f=m.scrollHeight-n;m.removeChild(j);m.style.position="";var k,i,g=(m.parentNode.nodeName.toLowerCase()==="div");if(g&&this.quirks){k=-n;i=Math.floor(-h/2)}else{k=f-n,i=-h}MathJax.HTML.addElement(m,"span",{style:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{style:{display:"inline-block",position:"absolute",left:i+"px",top:k+"px",width:l.offsetWidth+"px",height:n+"px",cursor:"pointer","background-color":"white",filter:"alpha(opacity=0)"},onmousedown:this.MSIEevent,oncontextmenu:this.MSIEevent,onclick:this.MSIEevent,onmousemove:this.MSIEevent,ondblclick:this.MSIEevent,onmouseover:this.MSIEevent,onmouseout:this.MSIEevent}]])},MSIEmath:function(f){var g=f.parentNode.previousSibling.firstChild;return(g.nodeName.toLowerCase()==="span"?g.firstChild:g)},MSIEevent:function(){var g=b.MSIEmath(this);var f=window.event;var h=b["MSIE"+f.type];if(h&&h.call(b,f,g,this)){return false}g.fireEvent("on"+f.type,f);return false},MSIEmousedown:function(h,g,f){if(h[this.MENUKEY]&&h.button===this.LEFTBUTTON&&this.settings.context!=="MathJax"){this.trapUp=this.trapClick=true;this.ContextMenu.call(f,h,true);return true}if(this.MSIEzoomKeys&&this.MSIEzoomKeys(h)){this.trapUp=true;return true}return false},MSIEcontextmenu:function(h,g,f){if(this.settings.context==="MathJax"){this.trapUp=this.trapClick=true;this.ContextMenu.call(f,h,true);return true}return false},ContextMenu:function(i,j){if(b.config.showMathMenu&&(b.settings.context==="MathJax"||j)){if(b.safariContextMenuBug){setTimeout("window.getSelection().empty()",0)}if(!i||b.msieEventBug){i=window.event}var g=MathJax.Menu;if(g){if(document.selection){setTimeout("document.selection.empty()",0)}var f=(c?this.parentNode.parentNode.nextSibling:this.parentNode.nextSibling);g.jax=e.getJaxFor(f);g.menu.items[1].menu.items[1].name=(g.jax.inputJax.id==="MathML"?"Original":g.jax.inputJax.id);delete b.trapClick;delete b.trapUp;return g.menu.Post(i)}else{if(!d.loadingMathMenu){d.loadingMathMenu=true;var h={pageX:i.pageX,pageY:i.pageY,clientX:i.clientX,clientY:i.clientY};MathJax.Callback.Queue(d.Require("[MathJax]/extensions/MathMenu.js"),function(){delete d.loadingMathMenu},[this,arguments.callee,h,j])}if(i.preventDefault){i.preventDefault()}if(i.stopPropagation){i.stopPropagation()}i.cancelBubble=true;i.returnValue=false;return false}}},Mousedown:function(f){if(b.config.showMathMenu){if(!f){f=window.event}if(b.settings.context==="MathJax"){if(!b.noContextMenuBug||f.button!==2){return}}else{if(!f[b.MENUKEY]||f.button!==b.LEFTBUTTON){return}}return b.ContextMenu.call(this,f,true)}},Mouseover:function(f){b.HandleEvent(f,"Mouseover",this)},Click:function(f){b.HandleEvent(f,"Click",this)},DblClick:function(f){b.HandleEvent(f,"DblClick",this)},HandleEvent:function(h,f,g){},NAMEDSPACE:{negativeveryverythinmathspace:"-.0556em",negativeverythinmathspace:"-.1111em",negativethinmathspace:"-.1667em",negativemediummathspace:"-.2222em",negativethickmathspace:"-.2778em",negativeverythickmathspace:"-.3333em",negativeveryverythickmathspace:"-.3889em"}});e.Register.StartupHook("mml Jax Ready",function(){a=MathJax.ElementJax.mml;a.mbase.Augment({toNativeMML:function(k){var h=this.NativeMMLelement(this.type);this.NativeMMLattributes(h);for(var j=0,g=this.data.length;j<g;j++){if(this.data[j]){this.data[j].toNativeMML(h)}else{h.appendChild(this.NativeMMLelement("mrow"))}}k.appendChild(h)},NativeMMLattributes:function(h){var l=this.defaults;var o=this.NativeMMLcopyAttributes,k=this.NativeMMLskipAttributes;if(this.type==="mstyle"){l=a.math.prototype.defaults}for(var n in l){if(!k[n]&&l.hasOwnProperty(n)){if(this[n]!=null){h.setAttribute(n,this.NativeMMLattribute(n,this[n]))}}}for(var j=0,g=o.length;j<g;j++){if(this[o[j]]!=null){h.setAttribute(o[j],this.NativeMMLattribute(o[j],this[o[j]]))}}},NativeMMLcopyAttributes:["fontfamily","fontsize","fontweight","fontstyle","color","background","id","class","href","style"],NativeMMLskipAttributes:{texClass:1,useHeight:1,texprimestyle:1},NativeMMLattribute:function(h,g){g=String(g);if(b.NAMEDSPACE[g]){g=b.NAMEDSPACE[g]}else{if(g.match(/^\s*([-+]?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)){g=((1/18)*RegExp.$1)+"em"}else{if(g==="-tex-caligraphic"){g="script"}else{if(g==="-tex-oldstyle"){g="normal"}}}}return g},NativeMMLelement:(c?function(g){return document.createElement("mjx:"+g)}:function(g){return document.createElementNS(b.MMLnamespace,g)})});a.mrow.Augment({toNativeMML:function(j){if(this.inferred&&this.parent.inferRow){for(var h=0,g=this.data.length;h<g;h++){if(this.data[h]){this.data[h].toNativeMML(j)}else{j.appendChild(this.NativeMMLelement("mrow"))}}}else{this.SUPER(arguments).toNativeMML.call(this,j)}}});a.msubsup.Augment({toNativeMML:function(l){var k=this.type;if(this.data[this.sup]==null){k="msub"}if(this.data[this.sub]==null){k="msup"}var h=this.NativeMMLelement(k);this.NativeMMLattributes(h);delete this.data[0].inferred;for(var j=0,g=this.data.length;j<g;j++){if(this.data[j]){this.data[j].toNativeMML(h)}}l.appendChild(h)}});a.munderover.Augment({toNativeMML:function(l){var k=this.type;if(this.data[this.under]==null){k="mover"}if(this.data[this.over]==null){k="munder"}var h=this.NativeMMLelement(k);this.NativeMMLattributes(h);delete this.data[0].inferred;for(var j=0,g=this.data.length;j<g;j++){if(this.data[j]){this.data[j].toNativeMML(h)}}l.appendChild(h)}});if(MathJax.Hub.Browser.isFirefox){a.mtable.Augment({toNativeMML:function(g){if(this.width){var h=(this.style||"").replace(/;\s*$/,"").split(";");h.push("width:"+this.width);this.style=h.join(";")}this.SUPER(arguments).toNativeMML.call(this,g)}});a.mlabeledtr.Augment({toNativeMML:function(k){var h=this.NativeMMLelement("mtr");this.NativeMMLattributes(h);for(var j=1,g=this.data.length;j<g;j++){if(this.data[j]){this.data[j].toNativeMML(h)}else{h.appendChild(this.NativeMMLelement("mrow"))}}k.appendChild(h)}});var f=MathJax.Hub.config.root+"/fonts/HTML-CSS/TeX/otf";b.Augment({config:{styles:{'[mathvariant="double-struck"]':{"font-family":"MathJax_AMS"},'[mathvariant="script"]':{"font-family":"MathJax_Script"},'[mathvariant="fraktur"]':{"font-family":"MathJax_Fraktur"},'[mathvariant="-tex-oldstyle"]':{"font-family":"MathJax_Caligraphic"},'[mathvariant="-tex-oldstyle-bold"]':{"font-family":"MathJax_Caligraphic","font-weight":"bold"},'[mathvariant="-tex-caligraphic"]':{"font-family":"MathJax_Caligraphic"},'[mathvariant="-tex-caligraphic-bold"]':{"font-family":"MathJax_Caligraphic","font-weight":"bold"},'[mathvariant="bold-script"]':{"font-family":"MathJax_Script","font-weight":"bold"},'[mathvariant="bold-fraktur"]':{"font-family":"MathJax_Fraktur","font-weight":"bold"},'[mathvariant="monospace"]':{"font-family":"monospace"},'[mathvariant="sans-serif"]':{"font-family":"sansserif"},'[mathvariant="bold-sans-serif"]':{"font-family":"sansserif","font-weight":"bold"},'[mathvariant="sans-serif-italic"]':{"font-family":"sansserif","font-style":"italic"},'[mathvariant="sans-serif-bold-italic"]':{"font-family":"sansserif","font-style":"italic","font-weight":"bold"},"@font-face /*1*/":{"font-family":"MathJax_AMS",src:"local('MathJax_AMS'), url('"+f+"/MathJax_AMS-Regular.otf')"},"@font-face /*2*/":{"font-family":"MathJax_Script",src:"local('MathJax_Script'), url('"+f+"/MathJax_Script-Regular.otf')"},"@font-face /*3*/":{"font-family":"MathJax_Fraktur",src:"local('MathJax_Fraktur'), url('"+f+"/MathJax_Fraktur-Regular.otf')"},"@font-face /*4*/":{"font-family":"MathJax_Caligraphic",src:"local('MathJax_Caligraphic'), url('"+f+"/MathJax_Caligraphic-Regular.otf')"},"@font-face /*5*/":{"font-family":"MathJax_Fraktur","font-weight":"bold",src:"local('MathJax_Fraktur-Bold'), url('"+f+"/MathJax_Fraktur-Bold.otf')"},"@font-face /*6*/":{"font-family":"MathJax_Caligraphic","font-weight":"bold",src:"local('MathJax_Caligraphic-Bold'), url('"+f+"/MathJax_Caligraphic-Bold.otf')"}}}})}a.TeXAtom.Augment({toNativeMML:function(h){var g=this.NativeMMLelement("mrow");this.data[0].toNativeMML(g);h.appendChild(g)}});a.chars.Augment({toNativeMML:function(g){g.appendChild(document.createTextNode(this.toString()))}});a.entity.Augment({toNativeMML:function(g){g.appendChild(document.createTextNode(this.toString()))}});a.xml.Augment({toNativeMML:function(j){for(var h=0,g=this.data.length;h<g;h++){j.appendChild(this.data[h].cloneNode(true))}}});e.Register.StartupHook("TeX mathchoice Ready",function(){a.TeXmathchoice.Augment({toNativeMML:function(g){this.Core().toNativeMML(g)}})});setTimeout(MathJax.Callback(["loadComplete",b,"jax.js"]),0)});e.Register.StartupHook("End Cookie",function(){if(e.config.menuSettings.zoom!=="None"){d.Require("[MathJax]/extensions/MathZoom.js")}})})(MathJax.OutputJax.NativeMML,MathJax.Hub,MathJax.Ajax);

