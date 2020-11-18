(function(t){function e(e){for(var r,o,s=e[0],c=e[1],i=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5f7b60ca"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"98be9d7e"}[t]+".css",a=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/itunesapp/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"021d":function(t,e,n){"use strict";var r=n("4206"),o=n.n(r);o.a},"1b74":function(t,e,n){"use strict";var r=n("3124"),o=n.n(r);o.a},"1fe9":function(t,e,n){},3124:function(t,e,n){},4175:function(t,e,n){"use strict";var r=n("8c15"),o=n.n(r);o.a},4206:function(t,e,n){},"4f74":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("the-navigation")],1),n("main",{staticClass:"content"},[n("router-view")],1)])},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/tunes"}},[t._v("Tunes")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)},s=[],c={},i=c,l=(n("6736"),n("2877")),f=Object(l["a"])(i,u,s,!1,null,"1500344f",null),p=f.exports,d={components:{TheNavigation:p}},m=d,v=(n("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),h=v.exports,g=(n("d3b7"),n("8c4f")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F585bbb3acb11b227491c32b0.png&f=1&nofb=1"}}),n("the-home")],1)},_=[],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Welcome, this is a page created with Vue.js "),n("br"),t._v(" to search for your favorite music. ")])}],j={},O=j,k=Object(l["a"])(O,y,w,!1,null,"cdc6a720",null),x=k.exports,E={name:"Home",components:{TheHome:x}},T=E,C=(n("1b74"),Object(l["a"])(T,b,_,!1,null,"98af8570",null)),$=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("iTunes")]),n("p",[t._v("Find your favorite song:")]),n("tunes-search-form",{on:{"add-new-songs":function(e){t.songs=e}}}),n("tunes-list",{attrs:{"new-songs":t.songs}})],1)},P=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.getMusic()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"searchInput",attrs:{type:"text"},domProps:{value:t.query},on:{keyup:function(e){return t.search()},input:function(e){e.target.composing||(t.query=e.target.value)}}})])},N=[],q=(n("99af"),n("4de4"),n("d81d"),n("bc3a")),F=n.n(q),M=n("85b1"),L={data:function(){return{query:"",limit:5}},methods:{search:Object(M["a"])((function(){this.getMusic()}),150),getMusic:function(){var t=this;F.a.get("https://itunes.apple.com/search?term=".concat(encodeURI(this.query),"&entity=musicTrack&limit=").concat(this.limit)).then((function(e){var n=e.data.results.filter((function(t){return"song"===t.kind})).map((function(e){return t.extractData(e)}));t.$emit("add-new-songs",n)}))},extractData:function(t){var e=t.trackId,n=t.artistName,r=t.previewUrl,o=t.artworkUrl100,a=t.trackName,u=t.collectionName;return{id:e,artist:n,url:r,cover:o,name:a,album:u}}},mounted:function(){this.$refs.searchInput.focus()}},D=L,H=(n("021d"),Object(l["a"])(D,A,N,!1,null,"674f48c1",null)),I=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.newSongs,(function(t){return n("tunes-song",{key:t.id,attrs:{song:t}})})),1)},B=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("article",{staticClass:"tunes-song"},[n("div",{staticClass:"inside"},[n("h2",[t._v(t._s(t._f("shorten")(t.song.name,50)))]),n("h4",[t._v(t._s(t.song.artist))]),n("hr"),n("div",{staticClass:"player-wrapper"},[t.song.cover?n("img",{attrs:{src:t.song.cover,alt:"obrazok"}}):t._e(),n("audio",{attrs:{controls:"",src:t.song.url}})])]),n("footer",{staticClass:"meta"},[t._v(" ALBUM: "+t._s(t._f("shorten")(t.song.album))+" ")])])])},V=[],z=n("749b"),K={props:{song:{type:Object}},data:function(){return{lovesongs:[]}},filters:{shorten:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return Object(z["a"])(t,{length:e})}}},R=K,W=(n("a4ef"),Object(l["a"])(R,J,V,!1,null,"ffa2101e",null)),G=W.exports,Q={components:{TunesSong:G},props:["new-songs"],data:function(){return{}}},X=Q,Y=(n("4175"),Object(l["a"])(X,U,B,!1,null,"69703aba",null)),Z=Y.exports,tt={components:{TunesSearchForm:I,TunesList:Z},data:function(){return{songs:[]}}},et=tt,nt=(n("8a30"),Object(l["a"])(et,S,P,!1,null,"3560a4ae",null)),rt=nt.exports;r["a"].use(g["a"]);var ot=[{path:"/",name:"Home",component:$},{path:"/tunes",name:"Tunes",component:rt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],at=new g["a"]({routes:ot}),ut=at,st={install:function(t){t.prototype.$log=function(t){console.log(t)}}},ct=st;r["a"].use(ct),r["a"].config.productionTip=!1,new r["a"]({router:ut,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6736:function(t,e,n){"use strict";var r=n("1fe9"),o=n.n(r);o.a},"8a30":function(t,e,n){"use strict";var r=n("bc7f"),o=n.n(r);o.a},"8c15":function(t,e,n){},"9c0c":function(t,e,n){},a4ef:function(t,e,n){"use strict";var r=n("4f74"),o=n.n(r);o.a},bc7f:function(t,e,n){}});
//# sourceMappingURL=app.d197b75e.js.map