!function(e,t){function n(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=f[e[h]];return t||(t={},d++,e[h]=d,f[d]=t),t}function a(e,n,a){return n||(n=t),l?n.createElement(e):(a||(a=r(n)),n=a.cache[e]?a.cache[e].cloneNode():u.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),n.canHaveChildren&&!m.test(e)?a.frag.appendChild(n):n)}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function o(e){e||(e=t);var n=r(e);if(g.shivCSS&&!i&&!n.hasCSS){var a,o=e;a=o.createElement("p"),o=o.getElementsByTagName("head")[0]||o.documentElement,a.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",a=o.insertBefore(a.lastChild,o.firstChild),n.hasCSS=!!a}return l||c(e,n),e}var i,l,s=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",d=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",i="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();n="undefined"==typeof r.cloneNode||"undefined"==typeof r.createDocumentFragment||"undefined"==typeof r.createElement}l=n}catch(a){l=i=!0}}();var g={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==s.shivCSS,supportsUnknownElements:l,shivMethods:!1!==s.shivMethods,type:"default",shivDocument:o,createElement:a,createDocumentFragment:function(e,a){if(e||(e=t),l)return e.createDocumentFragment();for(var a=a||r(e),c=a.frag.cloneNode(),o=0,i=n(),s=i.length;s>o;o++)c.createElement(i[o]);return c}};e.html5=g,o(t)}(this,document);
window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,i=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,a),t=42===r.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(document),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,n.mediaQueriesSupported;var a,i,r,s=e.document,o=s.documentElement,l=[],d=[],m=[],h={},u=30,c=s.getElementsByTagName("head")[0]||o,p=s.getElementsByTagName("base")[0],f=c.getElementsByTagName("link"),y=[],v=function(){for(var t=0;f.length>t;t++){var n=f[t],a=n.href,i=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();a&&r&&!h[a]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,a,i),h[a]=!0):(!/^([a-zA-Z:]*\/\/)/.test(a)&&!p||a.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&y.push({href:a,media:i}))}g()},g=function(){if(y.length){var e=y.shift();T(e.href,function(t){x(t,e.href,e.media),h[e.href]=!0,setTimeout(function(){g()},0)})}},x=function(e,t,n){var a=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),i=a&&a.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},s=!i&&n;t.length&&(t+="/"),s&&(i=1);for(var o=0;i>o;o++){var m,h,u,c;s?(m=n,d.push(r(e))):(m=a[o].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,d.push(RegExp.$2&&r(RegExp.$2))),u=m.split(","),c=u.length;for(var p=0;c>p;p++)h=u[p],l.push({media:h.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:d.length-1,hasquery:h.indexOf("(")>-1,minw:h.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:h.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},E=function(){var e,t=s.createElement("div"),n=s.body,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=s.createElement("body"),n.style.background="none"),n.appendChild(t),o.insertBefore(n,o.firstChild),e=t.offsetWidth,a?o.removeChild(n):n.removeChild(t),e=r=parseFloat(e)},w=function(e){var t="clientWidth",n=o[t],h="CSS1Compat"===s.compatMode&&n||s.body[t]||n,p={},y=f[f.length-1],v=(new Date).getTime();if(e&&a&&u>v-a)return clearTimeout(i),void(i=setTimeout(w,u));a=v;for(var g in l)if(l.hasOwnProperty(g)){var x=l[g],T=x.minw,C=x.maxw,S=null===T,$=null===C,b="em";T&&(T=parseFloat(T)*(T.indexOf(b)>-1?r||E():1)),C&&(C=parseFloat(C)*(C.indexOf(b)>-1?r||E():1)),x.hasquery&&(S&&$||!(S||h>=T)||!($||C>=h))||(p[x.media]||(p[x.media]=[]),p[x.media].push(d[x.rules]))}for(var R in m)m.hasOwnProperty(R)&&m[R]&&m[R].parentNode===c&&c.removeChild(m[R]);for(var M in p)if(p.hasOwnProperty(M)){var O=s.createElement("style"),B=p[M].join("\n");O.type="text/css",O.media=M,c.insertBefore(O,y.nextSibling),O.styleSheet?O.styleSheet.cssText=B:O.appendChild(s.createTextNode(B)),m.push(O)}},T=function(e,t){var n=C();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},C=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();v(),n.update=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}(this);