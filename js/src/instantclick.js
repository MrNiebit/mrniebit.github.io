// build time:Tue Mar 10 2020 11:43:58 GMT+0800 (CST)
var InstantClick=function(e,t){function n(e){var t=e.indexOf("#");return 0>t?e:e.substr(0,t)}function r(e){for(;e&&"A"!=e.nodeName;)e=e.parentNode;return e}function a(e){var i=t.protocol+"//"+t.host;if(!(i=e.target||e.hasAttribute("download")||0!=e.href.indexOf(i+"/")||-1<e.href.indexOf("#")&&n(e.href)==T)){if(N){e:{do{if(!e.hasAttribute)break;if(e.hasAttribute("data-no-instant"))break;if(e.hasAttribute("data-instant")){e=!0;break e}}while(e=e.parentNode);e=!1}e=!e}else e:{do{if(!e.hasAttribute)break;if(e.hasAttribute("data-instant"))break;if(e.hasAttribute("data-no-instant")){e=!0;break e}}while(e=e.parentNode);e=!1}i=e}return i?!1:!0}function o(e,t,n,i){for(var r=!1,a=0;a<z[e].length;a++)if("receive"==e){var o=z[e][a](t,n,i);o&&("body"in o&&(n=o.body),"title"in o&&(i=o.title),r=o)}else z[e][a](t,n,i);return r}function s(t,i,r,a){e.documentElement.replaceChild(i,e.body);if(r){history.pushState(null,null,r);i=r.indexOf("#");i=-1<i&&e.getElementById(r.substr(i+1));a=0;if(i)for(;i.offsetParent;)a+=i.offsetTop,i=i.offsetParent;scrollTo(0,a);T=n(r)}else scrollTo(0,a);e.title=b&&e.title==t?t+String.fromCharCode(160):t;p();W.done();o("change",!1);t=e.createEvent("HTMLEvents");t.initEvent("instantclick:newpage",!0,!0);dispatchEvent(t)}function d(e){L>+new Date-500||(e=r(e.target))&&a(e)&&m(e.href)}function l(e){L>+new Date-500||(e=r(e.target))&&a(e)&&(e.addEventListener("mouseout",h),I?(E=e.href,w=setTimeout(m,I)):m(e.href))}function c(e){L=+new Date;(e=r(e.target))&&a(e)&&(S?e.removeEventListener("mousedown",d):e.removeEventListener("mouseover",l),m(e.href))}function f(e){var t=r(e.target);!t||!a(t)||1<e.which||e.metaKey||e.ctrlKey||(e.preventDefault(),y(t.href))}function h(){w?(clearTimeout(w),w=!1):Y&&!D&&(A.abort(),D=Y=!1)}function u(){if(!(4>A.readyState)&&0!=A.status){H.ready=+new Date-H.start;if(A.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var t=e.implementation.createHTMLDocument("");t.documentElement.innerHTML=A.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,"");C=t.title;O=t.body;var i=o("receive",x,O,C);i&&("body"in i&&(O=i.body),"title"in i&&(C=i.title));i=n(x);k[i]={body:O,title:C,scrollY:i in k?k[i].scrollY:0};for(var t=t.head.children,i=0,r,a=t.length-1;0<=a;a--)if(r=t[a],r.hasAttribute("data-instant-track")){r=r.getAttribute("href")||r.getAttribute("src")||r.innerHTML;for(var s=B.length-1;0<=s;s--)B[s]==r&&i++}i!=B.length&&(M=!0)}else M=!0;D&&(D=!1,y(x))}}function p(t){e.body.addEventListener("touchstart",c,!0);S?e.body.addEventListener("mousedown",d,!0):e.body.addEventListener("mouseover",l,!0);e.body.addEventListener("click",f,!0);if(!t){t=e.body.getElementsByTagName("script");var n,r,a,o;i=0;for(j=t.length;i<j;i++)n=t[i],n.hasAttribute("data-no-instant")||(r=e.createElement("script"),n.src&&(r.src=n.src),n.innerHTML&&(r.innerHTML=n.innerHTML),a=n.parentNode,o=n.nextSibling,a.removeChild(n),a.insertBefore(r,o))}}function m(e){!S&&"display"in H&&100>+new Date-(H.start+H.display)||(w&&(clearTimeout(w),w=!1),e||(e=E),Y&&(e==x||D))||(Y=!0,D=!1,x=e,M=O=!1,H={start:+new Date},o("fetch"),A.open("GET",e),A.send())}function y(e){"display"in H||(H.display=+new Date-H.start);w||!Y?w&&x&&x!=e?t.href=e:(m(e),W.start(0,!0),o("wait"),D=!0):D?t.href=e:M?t.href=x:O?(k[T].scrollY=pageYOffset,D=Y=!1,s(C,O,x)):(W.start(0,!0),o("wait"),D=!0)}var v=navigator.userAgent,b=-1<v.indexOf(" CriOS/"),g="createTouch"in e,T,E,w,L,k={},A,x=!1,C=!1,M=!1,O=!1,H={},Y=!1,D=!1,B=[],N,S,I,z={fetch:[],receive:[],wait:[],change:[]},W=function(){function t(t,a){c=t;e.getElementById(s.id)&&e.body.removeChild(s);s.style.opacity="1";e.getElementById(s.id)&&e.body.removeChild(s);r();a&&setTimeout(n,0);clearTimeout(f);f=setTimeout(i,500)}function n(){c=10;r()}function i(){c+=1+2*Math.random();98<=c?c=98:f=setTimeout(i,500);r()}function r(){d.style[l]="translate("+c+"%)";e.getElementById(s.id)||e.body.appendChild(s)}function a(){e.getElementById(s.id)?(clearTimeout(f),c=100,r(),s.style.opacity="0"):(t(100==c?0:c),setTimeout(a,0))}function o(){s.style.left=pageXOffset+"px";s.style.width=innerWidth+"px";s.style.top=pageYOffset+"px";var e="orientation"in window&&90==Math.abs(orientation);s.style[l]="scaleY("+innerWidth/screen[e?"height":"width"]*2+")"}var s,d,l,c,f;return{init:function(){s=e.createElement("div");s.id="instantclick";d=e.createElement("div");d.id="instantclick-bar";d.className="instantclick-bar";s.appendChild(d);var t=["Webkit","Moz","O"];l="transform";if(!(l in d.style))for(var n=0;3>n;n++)t[n]+"Transform"in d.style&&(l=t[n]+"Transform");var i="transition";if(!(i in d.style))for(n=0;3>n;n++)t[n]+"Transition"in d.style&&(i="-"+t[n].toLowerCase()+"-"+i);t=e.createElement("style");t.innerHTML="#instantclick{position:"+(g?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+i+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+i+":all .25s}";e.head.appendChild(t);g&&(o(),addEventListener("resize",o),addEventListener("scroll",o))},start:t,done:a}}(),K="pushState"in history&&(!v.match("Android")||v.match("Chrome/"))&&"file:"!=t.protocol;return{supported:K,init:function(){if(!T)if(K){for(var i=arguments.length-1;0<=i;i--){var r=arguments[i];!0===r?N=!0:"mousedown"==r?S=!0:"number"==typeof r&&(I=r)}T=n(t.href);k[T]={body:e.body,title:e.title,scrollY:pageYOffset};for(var r=e.head.children,a,i=r.length-1;0<=i;i--)a=r[i],a.hasAttribute("data-instant-track")&&(a=a.getAttribute("href")||a.getAttribute("src")||a.innerHTML,B.push(a));A=new XMLHttpRequest;A.addEventListener("readystatechange",u);p(!0);W.init();o("change",!0);addEventListener("popstate",function(){var e=n(t.href);e!=T&&(e in k?(k[T].scrollY=pageYOffset,T=e,s(k[e].title,k[e].body,!1,k[e].scrollY)):t.href=t.href)})}else o("change",!0)},on:function(e,t){z[e].push(t)}}}(document,location);
//rebuild by neat 