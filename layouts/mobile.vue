<template>
  <div id="app-mobile">
    <script type="application/javascript">
      (function() {
          //version 1.0.0
          var adConfig = {
          "ads_host": "a.realsrv.com",
          "syndication_host": "syndication.realsrv.com",
          "idzone": 4451854,
          "popup_fallback": false,
          "popup_force": false,
          "chrome_enabled": true,
          "new_tab": false,
          "frequency_period": 60,
          "frequency_count": 1,
          "trigger_method": 3,
          "trigger_class": "",
          "only_inline": false,
          "t_venor": false
      };
      window.document.querySelectorAll||(document.querySelectorAll=document.body.querySelectorAll=Object.querySelectorAll=function(o,e,t,i,n){var r=document,c=r.createStyleSheet();for(n=r.all,e=[],t=(o=o.replace(/\[for\b/gi,"[htmlFor").split(",")).length;t--;){for(c.addRule(o[t],"k:v"),i=n.length;i--;)n[i].currentStyle.k&&e.push(n[i]);c.removeRule(0)}return e});var popMagic={version:"1.0.0",cookie_name:"",url:"",config:{},open_count:0,top:null,browser:null,venor_loaded:!1,venor:!1,configTpl:{ads_host:"",syndication_host:"",idzone:"",frequency_period:720,frequency_count:1,trigger_method:1,trigger_class:"",popup_force:!1,popup_fallback:!1,chrome_enabled:!0,new_tab:!1,cat:"",tags:"",el:"",sub:"",sub2:"",sub3:"",only_inline:!1,t_venor:!1,cookieconsent:!0},init:function(o){if(void 0!==o.idzone&&o.idzone){for(var e in this.configTpl)this.configTpl.hasOwnProperty(e)&&(void 0!==o[e]?this.config[e]=o[e]:this.config[e]=this.configTpl[e]);void 0!==this.config.idzone&&""!==this.config.idzone&&(!0!==this.config.only_inline&&this.loadHosted(),this.addEventToElement(window,"load",this.preparePop))}},getCountFromCookie:function(){if(!this.config.cookieconsent)return 0;var o=popMagic.getCookie(popMagic.cookie_name),e=void 0===o?0:parseInt(o);return isNaN(e)&&(e=0),e},shouldShow:function(){if(popMagic.open_count>=popMagic.config.frequency_count)return!1;var o=popMagic.getCountFromCookie();return popMagic.open_count=o,!(o>=popMagic.config.frequency_count)},venorShouldShow:function(){return!popMagic.config.t_venor||popMagic.venor_loaded&&"0"===popMagic.venor},setAsOpened:function(){var o=1;o=0!==popMagic.open_count?popMagic.open_count+1:popMagic.getCountFromCookie()+1,popMagic.config.cookieconsent&&popMagic.setCookie(popMagic.cookie_name,o,popMagic.config.frequency_period)},loadHosted:function(){var o=document.createElement("script");for(var e in o.type="application/javascript",o.async=!0,o.src="//"+this.config.ads_host+"/popunder1000.js",o.id="popmagicldr",this.config)this.config.hasOwnProperty(e)&&"ads_host"!==e&&"syndication_host"!==e&&o.setAttribute("data-exo-"+e,this.config[e]);var t=document.getElementsByTagName("body").item(0);t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o)},preparePop:function(){if("object"!=typeof exoJsPop101||!exoJsPop101.hasOwnProperty("add")){if(popMagic.top=self,popMagic.top!==self)try{top.document.location.toString()&&(popMagic.top=top)}catch(o){}if(popMagic.cookie_name="zone-cap-"+popMagic.config.idzone,popMagic.config.t_venor&&popMagic.shouldShow()){var o=new XMLHttpRequest;o.onreadystatechange=function(){o.readyState==XMLHttpRequest.DONE&&(popMagic.venor_loaded=!0,200==o.status&&(popMagic.venor=o.responseText))};var e="https:"!==document.location.protocol&&"http:"!==document.location.protocol?"https:":document.location.protocol;o.open("GET",e+"//"+popMagic.config.syndication_host+"/venor.php",!0);try{o.send()}catch(o){popMagic.venor_loaded=!0}}if(popMagic.buildUrl(),popMagic.browser=popMagic.browserDetector.detectBrowser(navigator.userAgent),popMagic.config.chrome_enabled||"chrome"!==popMagic.browser.name&&"crios"!==popMagic.browser.name){var t=popMagic.getPopMethod(popMagic.browser);popMagic.addEvent("click",t)}}},getPopMethod:function(o){return popMagic.config.popup_force?popMagic.methods.popup:popMagic.config.popup_fallback&&"chrome"===o.name&&o.version>=68&&!o.isMobile?popMagic.methods.popup:o.isMobile?popMagic.methods.default:"chrome"===o.name?popMagic.methods.chromeTab:popMagic.methods.default},buildUrl:function(){var o="https:"!==document.location.protocol&&"http:"!==document.location.protocol?"https:":document.location.protocol,e=top===self?document.URL:document.referrer,t={type:"inline",name:"popMagic",ver:this.version};this.url=o+"//"+this.config.syndication_host+"/splash.php?cat="+this.config.cat+"&idzone="+this.config.idzone+"&type=8&p="+encodeURIComponent(e)+"&sub="+this.config.sub+(""!==this.config.sub2?"&sub2="+this.config.sub2:"")+(""!==this.config.sub3?"&sub3="+this.config.sub3:"")+"&block=1&el="+this.config.el+"&tags="+this.config.tags+"&cookieconsent="+this.config.cookieconsent+"&scr_info="+function(o){var e=o.type+"|"+o.name+"|"+o.ver;return encodeURIComponent(btoa(e))}(t)},addEventToElement:function(o,e,t){o.addEventListener?o.addEventListener(e,t,!1):o.attachEvent?(o["e"+e+t]=t,o[e+t]=function(){o["e"+e+t](window.event)},o.attachEvent("on"+e,o[e+t])):o["on"+e]=o["e"+e+t]},addEvent:function(o,e){var t;if("3"!=popMagic.config.trigger_method)if("2"!=popMagic.config.trigger_method||""==popMagic.config.trigger_method)popMagic.addEventToElement(document,o,e);else{var i,n=[];i=-1===popMagic.config.trigger_class.indexOf(",")?popMagic.config.trigger_class.split(" "):popMagic.config.trigger_class.replace(/\s/g,"").split(",");for(var r=0;r<i.length;r++)""!==i[r]&&n.push("."+i[r]);for(t=document.querySelectorAll(n.join(", ")),r=0;r<t.length;r++)popMagic.addEventToElement(t[r],o,e)}else for(t=document.querySelectorAll("a"),r=0;r<t.length;r++)popMagic.addEventToElement(t[r],o,e)},setCookie:function(o,e,t){if(!this.config.cookieconsent)return!1;t=parseInt(t,10);var i=new Date;i.setMinutes(i.getMinutes()+parseInt(t));var n=encodeURIComponent(e)+"; expires="+i.toUTCString()+"; path=/";document.cookie=o+"="+n},getCookie:function(o){if(!this.config.cookieconsent)return!1;var e,t,i,n=document.cookie.split(";");for(e=0;e<n.length;e++)if(t=n[e].substr(0,n[e].indexOf("=")),i=n[e].substr(n[e].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))===o)return decodeURIComponent(i)},randStr:function(o,e){for(var t="",i=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<o;n++)t+=i.charAt(Math.floor(Math.random()*i.length));return t},isValidUserEvent:function(o){return!!("isTrusted"in o&&o.isTrusted&&"ie"!==popMagic.browser.name&&"safari"!==popMagic.browser.name)||0!=o.screenX&&0!=o.screenY},isValidHref:function(o){if(void 0===o||""==o)return!1;return!/\s?javascript\s?:/i.test(o)},findLinkToOpen:function(o){var e=o,t=!1;try{for(var i=0;i<20&&!e.getAttribute("href")&&e!==document&&"html"!==e.nodeName.toLowerCase();)e=e.parentNode,i++;var n=e.getAttribute("target");n&&-1!==n.indexOf("_blank")||(t=e.getAttribute("href"))}catch(o){}return popMagic.isValidHref(t)||(t=!1),t||window.location.href},getPuId:function(){return"ok_"+Math.floor(89999999*Math.random()+1e7)},browserDetector:{browserDefinitions:[["firefox",/Firefox\/([0-9.]+)(?:\s|$)/],["opera",/Opera\/([0-9.]+)(?:\s|$)/],["opera",/OPR\/([0-9.]+)(:?\s|$)$/],["edge",/Edg(?:e|)\/([0-9._]+)/],["ie",/Trident\/7\.0.*rv:([0-9.]+)\).*Gecko$/],["ie",/MSIE\s([0-9.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9._]+).*Safari/],["chrome",/(?!Chrom.*Edg(?:e|))Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9.]+)/],["android",/Android\s([0-9.]+)/],["ios",/Version\/([0-9._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9._]+)/],["crios",/CriOS\/([0-9.]+)(:?\s|$)/]],detectBrowser:function(o){var e=o.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WebOS|Windows Phone/i);for(var t in this.browserDefinitions){var i=this.browserDefinitions[t];if(i[1].test(o)){var n=i[1].exec(o),r=n&&n[1].split(/[._]/).slice(0,3),c=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,1===r.length?[0,0]:[0]),{name:i[0],version:r.join("."),versionNumber:parseFloat(r[0]+"."+c),isMobile:e}}}return{name:"other",version:"1.0",versionNumber:1,isMobile:e}}},methods:{default:function(o){if(!popMagic.shouldShow()||!popMagic.venorShouldShow()||!popMagic.isValidUserEvent(o))return!0;var e=o.target||o.srcElement,t=popMagic.findLinkToOpen(e);return window.open(t,"_blank"),popMagic.setAsOpened(),popMagic.top.document.location=popMagic.url,void 0!==o.preventDefault&&(o.preventDefault(),o.stopPropagation()),!0},chromeTab:function(o){if(!popMagic.shouldShow()||!popMagic.venorShouldShow()||!popMagic.isValidUserEvent(o))return!0;if(void 0===o.preventDefault)return!0;o.preventDefault(),o.stopPropagation();var e=top.window.document.createElement("a"),t=o.target||o.srcElement;e.href=popMagic.findLinkToOpen(t),document.getElementsByTagName("body")[0].appendChild(e);var i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!0,altKey:!1,shiftKey:!1,metaKey:!0,button:0});i.preventDefault=void 0,e.dispatchEvent(i),e.parentNode.removeChild(e),window.open(popMagic.url,"_self"),popMagic.setAsOpened()},popup:function(o){if(!popMagic.shouldShow()||!popMagic.venorShouldShow()||!popMagic.isValidUserEvent(o))return!0;var e="";if(popMagic.config.popup_fallback&&!popMagic.config.popup_force){var t=Math.max(Math.round(.8*window.innerHeight),300);e="menubar=1,resizable=1,width="+Math.max(Math.round(.7*window.innerWidth),300)+",height="+t+",top="+(window.screenY+100)+",left="+(window.screenX+100)}var i=document.location.href,n=window.open(i,popMagic.getPuId(),e);setTimeout(function(){n.location.href=popMagic.url},200),popMagic.setAsOpened(),void 0!==o.preventDefault&&(o.preventDefault(),o.stopPropagation())}}};    popMagic.init(adConfig);
      })();
    </script>
    <script data-cfasync="false" type="application/javascript">
      (function (c, d) {
        var a1 = b,
          e = c();
        while (!![]) {
          try {
            var f =
              -parseInt(a1(0x164)) / 0x1 +
              (-parseInt(a1(0x168)) / 0x2) * (-parseInt(a1(0x157)) / 0x3) +
              (-parseInt(a1(0x148)) / 0x4) * (parseInt(a1(0x16c)) / 0x5) +
              -parseInt(a1(0x16d)) / 0x6 +
              (parseInt(a1(0x151)) / 0x7) * (-parseInt(a1(0x161)) / 0x8) +
              parseInt(a1(0x15e)) / 0x9 +
              parseInt(a1(0x165)) / 0xa;
            if (f === d) break;
            else e["push"](e["shift"]());
          } catch (g) {
            e["push"](e["shift"]());
          }
        }
      })(a, 0x8a7d0),
        (function () {
          var a8 = b;
          function c() {
            var a2 = b,
              d = 7833,
              e = "a3klsam",
              f = "a",
              g = "db",
              h = a2(0x153),
              i = "ksu",
              j = a2(0x16f),
              k = f + g + h + i + j,
              l = "cs",
              m = f + g + h + i + l,
              n = a2(0x162),
              o = a2(0x159),
              p = "adMa",
              q = a2(0x174),
              r = "/" + n + o + "/" + p + q + a2(0x16b),
              s = null,
              t = null,
              u = new Date()
                ["toISOString"]()
                ["split"]("T")[0x0]
                ["replace"](/-/gi, ".")
                [a2(0x166)](0x2),
              v = function (z) {
                var a5 = a2,
                  A = "0123456789abcdef";
                function B(U) {
                  var a3 = b,
                    V,
                    W = "";
                  for (V = 0x0; V <= 0x3; V++)
                    W +=
                      A[a3(0x163)]((U >> (V * 0x8 + 0x4)) & 0xf) +
                      A[a3(0x163)]((U >> (V * 0x8)) & 0xf);
                  return W;
                }
                function C(U, V) {
                  var W = (U & 0xffff) + (V & 0xffff),
                    X = (U >> 0x10) + (V >> 0x10) + (W >> 0x10);
                  return (X << 0x10) | (W & 0xffff);
                }
                function D(U, V) {
                  return (U << V) | (U >>> (0x20 - V));
                }
                function E(U, V, W, X, Y, Z) {
                  return C(D(C(C(V, U), C(X, Z)), Y), W);
                }
                function F(U, V, W, X, Y, Z, a0) {
                  return E((V & W) | (~V & X), U, V, Y, Z, a0);
                }
                function G(U, V, W, X, Y, Z, a0) {
                  return E((V & X) | (W & ~X), U, V, Y, Z, a0);
                }
                function H(U, V, W, X, Y, Z, a0) {
                  return E(V ^ W ^ X, U, V, Y, Z, a0);
                }
                function I(U, V, W, X, Y, Z, a0) {
                  return E(W ^ (V | ~X), U, V, Y, Z, a0);
                }
                function J(U) {
                  var a4 = b,
                    V,
                    W = ((U[a4(0x15c)] + 0x8) >> 0x6) + 0x1,
                    X = new Array(W * 0x10);
                  for (V = 0x0; V < W * 0x10; V++) X[V] = 0x0;
                  for (V = 0x0; V < U[a4(0x15c)]; V++)
                    X[V >> 0x2] |= U[a4(0x170)](V) << ((V % 0x4) * 0x8);
                  return (
                    (X[V >> 0x2] |= 0x80 << ((V % 0x4) * 0x8)),
                    (X[W * 0x10 - 0x2] = U[a4(0x15c)] * 0x8),
                    X
                  );
                }
                var K,
                  L = J(z),
                  M = 0x67452301,
                  N = -0x10325477,
                  O = -0x67452302,
                  P = 0x10325476,
                  Q,
                  R,
                  S,
                  T;
                for (K = 0x0; K < L[a5(0x15c)]; K += 0x10) {
                  (Q = M),
                    (R = N),
                    (S = O),
                    (T = P),
                    (M = F(M, N, O, P, L[K + 0x0], 0x7, -0x28955b88)),
                    (P = F(P, M, N, O, L[K + 0x1], 0xc, -0x173848aa)),
                    (O = F(O, P, M, N, L[K + 0x2], 0x11, 0x242070db)),
                    (N = F(N, O, P, M, L[K + 0x3], 0x16, -0x3e423112)),
                    (M = F(M, N, O, P, L[K + 0x4], 0x7, -0xa83f051)),
                    (P = F(P, M, N, O, L[K + 0x5], 0xc, 0x4787c62a)),
                    (O = F(O, P, M, N, L[K + 0x6], 0x11, -0x57cfb9ed)),
                    (N = F(N, O, P, M, L[K + 0x7], 0x16, -0x2b96aff)),
                    (M = F(M, N, O, P, L[K + 0x8], 0x7, 0x698098d8)),
                    (P = F(P, M, N, O, L[K + 0x9], 0xc, -0x74bb0851)),
                    (O = F(O, P, M, N, L[K + 0xa], 0x11, -0xa44f)),
                    (N = F(N, O, P, M, L[K + 0xb], 0x16, -0x76a32842)),
                    (M = F(M, N, O, P, L[K + 0xc], 0x7, 0x6b901122)),
                    (P = F(P, M, N, O, L[K + 0xd], 0xc, -0x2678e6d)),
                    (O = F(O, P, M, N, L[K + 0xe], 0x11, -0x5986bc72)),
                    (N = F(N, O, P, M, L[K + 0xf], 0x16, 0x49b40821)),
                    (M = G(M, N, O, P, L[K + 0x1], 0x5, -0x9e1da9e)),
                    (P = G(P, M, N, O, L[K + 0x6], 0x9, -0x3fbf4cc0)),
                    (O = G(O, P, M, N, L[K + 0xb], 0xe, 0x265e5a51)),
                    (N = G(N, O, P, M, L[K + 0x0], 0x14, -0x16493856)),
                    (M = G(M, N, O, P, L[K + 0x5], 0x5, -0x29d0efa3)),
                    (P = G(P, M, N, O, L[K + 0xa], 0x9, 0x2441453)),
                    (O = G(O, P, M, N, L[K + 0xf], 0xe, -0x275e197f)),
                    (N = G(N, O, P, M, L[K + 0x4], 0x14, -0x182c0438)),
                    (M = G(M, N, O, P, L[K + 0x9], 0x5, 0x21e1cde6)),
                    (P = G(P, M, N, O, L[K + 0xe], 0x9, -0x3cc8f82a)),
                    (O = G(O, P, M, N, L[K + 0x3], 0xe, -0xb2af279)),
                    (N = G(N, O, P, M, L[K + 0x8], 0x14, 0x455a14ed)),
                    (M = G(M, N, O, P, L[K + 0xd], 0x5, -0x561c16fb)),
                    (P = G(P, M, N, O, L[K + 0x2], 0x9, -0x3105c08)),
                    (O = G(O, P, M, N, L[K + 0x7], 0xe, 0x676f02d9)),
                    (N = G(N, O, P, M, L[K + 0xc], 0x14, -0x72d5b376)),
                    (M = H(M, N, O, P, L[K + 0x5], 0x4, -0x5c6be)),
                    (P = H(P, M, N, O, L[K + 0x8], 0xb, -0x788e097f)),
                    (O = H(O, P, M, N, L[K + 0xb], 0x10, 0x6d9d6122)),
                    (N = H(N, O, P, M, L[K + 0xe], 0x17, -0x21ac7f4)),
                    (M = H(M, N, O, P, L[K + 0x1], 0x4, -0x5b4115bc)),
                    (P = H(P, M, N, O, L[K + 0x4], 0xb, 0x4bdecfa9)),
                    (O = H(O, P, M, N, L[K + 0x7], 0x10, -0x944b4a0)),
                    (N = H(N, O, P, M, L[K + 0xa], 0x17, -0x41404390)),
                    (M = H(M, N, O, P, L[K + 0xd], 0x4, 0x289b7ec6)),
                    (P = H(P, M, N, O, L[K + 0x0], 0xb, -0x155ed806)),
                    (O = H(O, P, M, N, L[K + 0x3], 0x10, -0x2b10cf7b)),
                    (N = H(N, O, P, M, L[K + 0x6], 0x17, 0x4881d05)),
                    (M = H(M, N, O, P, L[K + 0x9], 0x4, -0x262b2fc7)),
                    (P = H(P, M, N, O, L[K + 0xc], 0xb, -0x1924661b)),
                    (O = H(O, P, M, N, L[K + 0xf], 0x10, 0x1fa27cf8)),
                    (N = H(N, O, P, M, L[K + 0x2], 0x17, -0x3b53a99b)),
                    (M = I(M, N, O, P, L[K + 0x0], 0x6, -0xbd6ddbc)),
                    (P = I(P, M, N, O, L[K + 0x7], 0xa, 0x432aff97)),
                    (O = I(O, P, M, N, L[K + 0xe], 0xf, -0x546bdc59)),
                    (N = I(N, O, P, M, L[K + 0x5], 0x15, -0x36c5fc7)),
                    (M = I(M, N, O, P, L[K + 0xc], 0x6, 0x655b59c3)),
                    (P = I(P, M, N, O, L[K + 0x3], 0xa, -0x70f3336e)),
                    (O = I(O, P, M, N, L[K + 0xa], 0xf, -0x100b83)),
                    (N = I(N, O, P, M, L[K + 0x1], 0x15, -0x7a7ba22f)),
                    (M = I(M, N, O, P, L[K + 0x8], 0x6, 0x6fa87e4f)),
                    (P = I(P, M, N, O, L[K + 0xf], 0xa, -0x1d31920)),
                    (O = I(O, P, M, N, L[K + 0x6], 0xf, -0x5cfebcec)),
                    (N = I(N, O, P, M, L[K + 0xd], 0x15, 0x4e0811a1)),
                    (M = I(M, N, O, P, L[K + 0x4], 0x6, -0x8ac817e)),
                    (P = I(P, M, N, O, L[K + 0xb], 0xa, -0x42c50dcb)),
                    (O = I(O, P, M, N, L[K + 0x2], 0xf, 0x2ad7d2bb)),
                    (N = I(N, O, P, M, L[K + 0x9], 0x15, -0x14792c6f)),
                    (M = C(M, Q)),
                    (N = C(N, R)),
                    (O = C(O, S)),
                    (P = C(P, T));
                }
                return B(M) + B(N) + B(O) + B(P);
              },
              w = function (z) {
                return t + "/" + v(u + ":" + k + ":" + z);
              },
              x = function () {
                return t + "/" + v(u + ":" + m + ":tags");
              },
              y = document[a2(0x160)](a2(0x172));
            (s = v(u + ":" + k + a2(0x14e))[a2(0x166)](0x0, 0xa) + a2(0x152)),
              a2(0x154) in y
                ? ((r = r[a2(0x155)](a2(0x16b), a2(0x14b))),
                  (y[a2(0x167)] = a2(0x15f)))
                : ((r = r[a2(0x155)](a2(0x16b), ".l.js")),
                  (y[a2(0x150)] = !![])),
              (t = a2(0x14d) + v(s + ":" + k)["substring"](0x0, 0xa) + "." + s),
              (y[a2(0x16e)] = w(r) + a2(0x16b)),
              (y[a2(0x15d)] = function () {
                var a6 = a2;
                window[e]["ph"](w, x, s, u, v), window[e][a6(0x14f)](d);
              }),
              (y[a2(0x149)] = function () {
                var a7 = a2,
                  z = document[a7(0x160)](a7(0x172));
                (z[a7(0x16e)] = a7(0x173)),
                  z[a7(0x16a)](a7(0x15b), d),
                  (z[a7(0x14a)] = a7(0x14a)),
                  document[a7(0x158)]["appendChild"](z);
              }),
              document["head"][a2(0x15a)](y);
          }
          document[a8(0x14c)] === a8(0x169) ||
          document[a8(0x14c)] === a8(0x156) ||
          document["readyState"] === "interactive"
            ? c()
            : window["addEventListener"](a8(0x171), c);
        })();
      function b(c, d) {
        var e = a();
        return (
          (b = function (f, g) {
            f = f - 0x148;
            var h = e[f];
            return h;
          }),
          b(c, d)
        );
      }
      function a() {
        var a9 = [
          ".m.js",
          "readyState",
          "https://",
          ":domain",
          "init",
          "defer",
          "35sFYRlb",
          ".com",
          "loc",
          "noModule",
          "replace",
          "loaded",
          "99108pSYNcn",
          "head",
          "tic",
          "appendChild",
          "data-admpid",
          "length",
          "onload",
          "1217583seRcmB",
          "module",
          "createElement",
          "68632UCuVsL",
          "sta",
          "charAt",
          "224790YAUBaj",
          "17835240Xvtpip",
          "substring",
          "type",
          "6RguEkX",
          "complete",
          "setAttribute",
          ".js",
          "5NMhKiM",
          "690672ZOHJtT",
          "src",
          "cks",
          "charCodeAt",
          "DOMContentLoaded",
          "script",
          "https://js.wpadmngr.com/static/adManager.js",
          "nager",
          "4271496obOHmh",
          "onerror",
          "async",
        ];
        a = function () {
          return a9;
        };
        return a();
      }
    </script>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/NavbarMobile/NavbarMobile.vue';
import Footer from '~/components/FooterMobile/FooterMobile.vue';
export default {
  head:{
    script: [
    ]
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style-mobile.scss";
</style>
