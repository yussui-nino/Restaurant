(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),d=t.n(s),c=new URL(t(484),t.b),l=new URL(t(956),t.b),p=new URL(t(50),t.b),m=new URL(t(771),t.b),h=i()(r()),u=d()(c),f=d()(l),b=d()(p),g=d()(m);h.push([e.id,`#container{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 150px 1fr 150px ;\n    height: 100vh;\n}\n@font-face {\n    font-family: 'MainFont';\n    src: url(${u}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'hThreeFont';\n    src: url(${f}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'hTwoFont';\n    src: url(${b}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'ThisFont';\n    src: url(${g}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  \n.main{\n    grid-row: 1/2;\n    background-color: #c54b34;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    border: 6px #ffcb6f solid;\n    border-radius: 15px;\n}\n.main button{\n    width: 115px;\n    height: 45px;\n    border-radius: 10px;\n    background-color: #ffcb6f;\n    font-size: 25px;\n    border-color: #c54b34;\n    font-family:'MainFont';\n    \n    \n}\n.main .welcoming{\n    align-self: center;\n    justify-self: center;\n    color:#ffcb6f;\n    font-family: 'MainFont';\n   \n    \n}\n.middle{\n    display: grid;\n    grid-row: 2/3;\n    grid-template-columns: 1fr 600px ;\n    grid-template-rows: 550px 600px 1fr;\n    background-color: #ffdcbe;\n}\n.middle h2{\n   \n    grid-column: 1/2;\n    grid-row: 1;\n    width: 900px;\n    margin-left: 240px;\n    text-align: center;\n    display: flex; /* Added flex display */\n    align-items: center; /* Vertically center */\n    justify-content: center; /* Horizontally center if needed */\n    height: 100%; /* Ensure it takes the full height of the grid row */\n    font-family: 'hTwoFont';\n}\n\n\n.middle img{\n    grid-column: 2/3;\n    grid-row: 1;\n    height: 500px;\n}\n.middle .foods{\n    grid-column: 1/4;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n\n}\n\n.middle .foods .food {\n    width: 350px;\n    height: 350px;\n    border: 5px black solid;\n    gap: 150px;\n    margin-top: 40px;\n}\n.middle .foods .food img{\n    width: 350px;\n    height: 350px;\n    \n}\n\nh3{\n    font-family: 'ThisFont';\n}\n\n\n.last {\n    display: flex;\n    background-color: #c54b34;\n    border: 6px #ffcb6f solid;\n    border-radius: 15px;\n    justify-content: center;\n    align-items: center;\n}\n.last h2{\n    font-family: 'MainFont';\n    color: #ffcb6f;\n}\n\n.middle .MidContainer{\n    display: grid;\n    grid-template-rows: 550px 550px 550px 550px 550px 550px 550px 550px ;\n    grid-column: 1/4;\n    grid-row: 1/4;\n    justify-content: center;\n    align-items: center;\n}\n\n.MidContainer .menu{\n    height: 450px;\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: 650px 600px;\n    gap: 50px;\n    border: 6px #ffcb6f solid;\n    border-radius: 10px;\n    \n    \n}\n.menu img{\n    height: 450px;\n    width: 600px;\n}\n\n.menu h3{\n    font-family: 'hTwoFont';\n    align-items: center;\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 160px;\n   \n}\n\n.ContactMid{\n    grid-column: 1/4;\n    grid-row: 1/4;\n    height: 1000px;\n    width: 600px;\n    border: 6px #ffcb6f solid;\n    border-radius: 15px;\n    margin-left: 650px;\n    margin-top: 70px;\n    font-family: 'MainFont';\n    font-size: 18px;\n}\n\n.ContactMid img{\n    width: 600px;\n}`,""]);const v=h},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(h);else{var u=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},50:(e,n,t)=>{e.exports=t.p+"25dd42557aae5b4b8ef0.ttf"},956:(e,n,t)=>{e.exports=t.p+"cf56c1b149d0a5e8d7c6.ttf"},484:(e,n,t)=>{e.exports=t.p+"25dd42557aae5b4b8ef0.ttf"},771:(e,n,t)=>{e.exports=t.p+"25dd42557aae5b4b8ef0.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),s=t(659),d=t.n(s),c=t(56),l=t.n(c),p=t(540),m=t.n(p),h=t(113),u=t.n(h),f=t(208),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=m(),r()(f.A,b),f.A&&f.A.locals&&f.A.locals;const g=t.p+"a48acff57a28679109a7.jpg",v=t.p+"c9360ce3f6002c6e8759.jpg",w=t.p+"60066c04a44f6a35cb97.jpg",y=t.p+"673c4fadcad400e76615.jpg",x=t.p+"d04141abc8f9c028c1e1.jpg",C=t.p+"ea856f9afa50e0ee892b.jpg",E=t.p+"b6a08b2af1dd68919932.jpg",L=t.p+"24e57886d3e7a876f721.jpg",M=t.p+"442e135dcdda3b8415c2.jpg",T=t.p+"981bc40760de27bf82b8.jpg",I=t.p+"be976b8bd19c3b0eeda3.jpg",j=t.p+"2827439d50b522b3794c.jpg",q=t.p+"b1879a317eb8ce2294e8.jpg",A=t.p+"3e36c2135e3e7e0158f4.jpg";console.log("This means the webpack is running correctly");const H=document.querySelector("#container"),k=document.createElement("div"),S=document.createElement("div"),O=document.createElement("div");k.classList.add("main"),S.classList.add("middle"),O.classList.add("last"),H.appendChild(k),H.appendChild(S),H.appendChild(O),k.innerHTML='<nav> <button class="Home">Home</button><button class ="Menu">Menu</button><button class ="Contact">Contact</button></nav>';const $=document.createElement("h2");$.textContent="Welcome to our ramen shop!",$.classList.add("welcoming"),k.appendChild($),document.querySelector(".Home").addEventListener("click",(function(){S.innerHTML="";const e=document.createElement("h2");e.textContent="Welcome to our ramen shop!, we sell multiple types of ramens and our shop is inspired mainly by naruto ramen shop as we do love the idea of that shop we try to make the ramen in best quality and closest to naruto whether its flavors or looks feel free to order whatever u want and leave a review :).";const n=new Image;n.src=v,S.appendChild(e),S.appendChild(n);const t=document.createElement("div");t.classList.add("foods");const o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");o.classList.add("food"),r.classList.add("food"),a.classList.add("food"),i.classList.add("food"),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i);const s=new Image;s.src=w;const d=new Image;d.src=y;const c=new Image;c.src=x;const l=new Image;l.src=C;const p=document.createElement("h3"),m=document.createElement("h3"),h=document.createElement("h3"),u=document.createElement("h3");p.textContent="Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have.",m.textContent="Second ramen also have egg but it got more type of meats which taste very different when combined with the ramen sauce definitely best protein one we have",h.textContent="Our third ramen would be a ramen very close to naruto one but not quite as it does have quite a bit less things in it",u.textContent="last but not least we have naruto ramen everyone's favorite one always its the most popular option for most people too",o.appendChild(s),r.appendChild(d),a.appendChild(c),i.appendChild(l),o.appendChild(p),r.appendChild(m),a.appendChild(h),i.appendChild(u),S.appendChild(t)})),document.querySelector(".Menu").addEventListener("click",(function(){S.innerHTML="";const e=document.createElement("div");e.classList.add("MidContainer");const n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div");n.classList.add("menu"),t.classList.add("menu"),o.classList.add("menu"),r.classList.add("menu"),a.classList.add("menu"),i.classList.add("menu"),s.classList.add("menu"),d.classList.add("menu"),n.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",t.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",o.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",r.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",a.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",i.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",s.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",d.innerHTML="<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a),e.appendChild(i),e.appendChild(s),e.appendChild(d);const c=new Image;c.src=E;const l=new Image;l.src=L;const p=new Image;p.src=M;const m=new Image;m.src=T;const h=new Image;h.src=I;const u=new Image;u.src=j;const f=new Image;f.src=q;const b=new Image;b.src=A,n.appendChild(c),t.appendChild(l),o.appendChild(p),r.appendChild(m),a.appendChild(h),i.appendChild(u),s.appendChild(f),d.appendChild(b),S.appendChild(e)})),document.querySelector(".Contact").addEventListener("click",(function(){S.innerHTML="";const e=document.createElement("div");e.classList.add("ContactMid"),S.appendChild(e),e.innerHTML="<h3> Hello and thanks again for visiting our website. <br><br> If u want more infos about anything heres our email:<br><br> email@gmail.com <br><br> If you do happen to prefer contacting us with phone heres our number: <br><br> 1234567890 <br><br> And yeah we will make sure to respond to your requests :)</h3>";const n=new Image;n.src=g,e.appendChild(n)}));const F=document.createElement("h2");F.textContent="Welcome to our ramen shop!, we sell multiple types of ramens and our shop is inspired mainly by naruto ramen shop as we do love the idea of that shop we try to make the ramen in best quality and closest to naruto whether its flavors or looks feel free to order whatever u want and leave a review :).";const R=new Image;R.src=v,S.appendChild(F),S.appendChild(R);const U=document.createElement("div");U.classList.add("foods");const N=document.createElement("div"),P=document.createElement("div"),z=document.createElement("div"),_=document.createElement("div");N.classList.add("food"),P.classList.add("food"),z.classList.add("food"),_.classList.add("food"),U.appendChild(N),U.appendChild(P),U.appendChild(z),U.appendChild(_);const W=new Image;W.src=w;const B=new Image;B.src=y;const D=new Image;D.src=x;const J=new Image;J.src=C;const Q=document.createElement("h3"),V=document.createElement("h3"),G=document.createElement("h3"),K=document.createElement("h3");Q.textContent="Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have.",V.textContent="Second ramen also have egg but it got more type of meats which taste very different when combined with the ramen sauce definitely best protein one we have",G.textContent="Our third ramen would be a ramen very close to naruto one but not quite as it does have quite a bit less things in it",K.textContent="last but not least we have naruto ramen everyone's favorite one always its the most popular option for most people too",N.appendChild(W),P.appendChild(B),z.appendChild(D),_.appendChild(J),N.appendChild(Q),P.appendChild(V),z.appendChild(G),_.appendChild(K),S.appendChild(U);const X=document.createElement("h2");X.textContent="Thanks for visiting our website <3, Make sure to leave a review!",O.appendChild(X)})();