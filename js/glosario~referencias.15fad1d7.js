(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario~referencias","chunk-515a8379"],{"0095":function(t,n,r){"use strict";r("95c5")},"057f":function(t,n,r){var e=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(e(t))}},"13aa":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=i,a=(r("0095"),r("2877")),u=Object(a["a"])(c,e,o,!1,null,null,null);n["default"]=u.exports},"1dde":function(t,n,r){var e=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[],r=n.constructor={};return r[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2909:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function o(t){if(Array.isArray(t))return e(t)}r.d(n,"a",(function(){return u}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function c(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||i(t)||c(t)||a()}},"4df4":function(t,n,r){"use strict";var e=r("0366"),o=r("7b0b"),i=r("9bdd"),c=r("e95a"),a=r("50c4"),u=r("8418"),f=r("35a1");t.exports=function(t){var n,r,s,l,d,b,p=o(t),v="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,g=void 0!==h,m=f(p),w=0;if(g&&(h=e(h,y>2?arguments[2]:void 0,2)),void 0==m||v==Array&&c(m))for(n=a(p.length),r=new v(n);n>w;w++)b=g?h(p[w],w):p[w],u(r,w,b);else for(l=m.call(p),d=l.next,r=new v;!(s=d.call(l)).done;w++)b=g?i(l,h,[s.value,w],!0):s.value,u(r,w,b);return r.length=w,r}},"4e82":function(t,n,r){"use strict";var e=r("23e7"),o=r("1c0b"),i=r("7b0b"),c=r("d039"),a=r("a640"),u=[],f=u.sort,s=c((function(){u.sort(void 0)})),l=c((function(){u.sort(null)})),d=a("sort"),b=s||!l||!d;e({target:"Array",proto:!0,forced:b},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},"65f0":function(t,n,r){var e=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,n){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?e(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},"746f":function(t,n,r){var e=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},8418:function(t,n,r){"use strict";var e=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},"95c5":function(t,n,r){},"9bdd":function(t,n,r){var e=r("825a"),o=r("2a62");t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(c){throw o(t),c}}},a4d3:function(t,n,r){"use strict";var e=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),f=r("fdbf"),s=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),y=r("fc6a"),h=r("c04e"),g=r("5c6c"),m=r("7c73"),w=r("df75"),S=r("241c"),O=r("057f"),A=r("7418"),j=r("06cf"),x=r("9bf2"),P=r("d1e7"),_=r("9112"),C=r("6eeb"),E=r("5692"),k=r("f772"),I=r("d012"),$=r("90e3"),D=r("b622"),N=r("e538"),J=r("746f"),T=r("d44e"),B=r("69f3"),M=r("b727").forEach,F=k("hidden"),L="Symbol",R="prototype",U=D("toPrimitive"),q=B.set,H=B.getterFor(L),Q=Object[R],W=o.Symbol,z=i("JSON","stringify"),G=j.f,K=x.f,V=O.f,X=P.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),nt=E("symbol-to-string-registry"),rt=E("wks"),et=o.QObject,ot=!et||!et[R]||!et[R].findChild,it=a&&s((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=G(Q,n);e&&delete Q[n],K(t,n,r),e&&t!==Q&&K(Q,n,e)}:K,ct=function(t,n){var r=Y[t]=m(W[R]);return q(r,{type:L,tag:t,description:n}),a||(r.description=n),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,n,r){t===Q&&ut(Z,n,r),p(t);var e=h(n,!0);return p(r),l(Y,e)?(r.enumerable?(l(t,F)&&t[F][e]&&(t[F][e]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,F)||K(t,F,g(1,{})),t[F][e]=!0),it(t,e,r)):K(t,e,r)},ft=function(t,n){p(t);var r=y(n),e=w(r).concat(pt(r));return M(e,(function(n){a&&!lt.call(r,n)||ut(t,n,r[n])})),t},st=function(t,n){return void 0===n?m(t):ft(m(t),n)},lt=function(t){var n=h(t,!0),r=X.call(this,n);return!(this===Q&&l(Y,n)&&!l(Z,n))&&(!(r||!l(this,n)||!l(Y,n)||l(this,F)&&this[F][n])||r)},dt=function(t,n){var r=y(t),e=h(n,!0);if(r!==Q||!l(Y,e)||l(Z,e)){var o=G(r,e);return!o||!l(Y,e)||l(r,F)&&r[F][e]||(o.enumerable=!0),o}},bt=function(t){var n=V(y(t)),r=[];return M(n,(function(t){l(Y,t)||l(I,t)||r.push(t)})),r},pt=function(t){var n=t===Q,r=V(n?Z:y(t)),e=[];return M(r,(function(t){!l(Y,t)||n&&!l(Q,t)||e.push(Y[t])})),e};if(u||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=$(t),r=function(t){this===Q&&r.call(Z,t),l(this,F)&&l(this[F],n)&&(this[F][n]=!1),it(this,n,g(1,t))};return a&&ot&&it(Q,n,{configurable:!0,set:r}),ct(n,t)},C(W[R],"toString",(function(){return H(this).tag})),C(W,"withoutSetter",(function(t){return ct($(t),t)})),P.f=lt,x.f=ut,j.f=dt,S.f=O.f=bt,A.f=pt,N.f=function(t){return ct(D(t),t)},a&&(K(W[R],"description",{configurable:!0,get:function(){return H(this).description}}),c||C(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),M(w(rt),(function(t){J(t)})),e({target:L,stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var r=W(n);return tt[n]=r,nt[r]=n,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),e({target:"Object",stat:!0,forced:s((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(v(t))}}),z){var vt=!u||s((function(){var t=W();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));e({target:"JSON",stat:!0,forced:vt},{stringify:function(t,n,r){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=n,(b(n)||void 0!==t)&&!at(t))return d(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!at(n))return n}),o[1]=n,z.apply(null,o)}})}W[R][U]||_(W[R],U,W[R].valueOf),T(W,L),I[F]=!0},a630:function(t,n,r){var e=r("23e7"),o=r("4df4"),i=r("1c7e"),c=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:c},{from:o})},a640:function(t,n,r){"use strict";var e=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},b727:function(t,n,r){var e=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),u=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,d=7==t,b=5==t||l;return function(p,v,y,h){for(var g,m,w=i(p),S=o(w),O=e(v,y,3),A=c(S.length),j=0,x=h||a,P=n?x(p,A):r||d?x(p,0):void 0;A>j;j++)if((b||j in S)&&(g=S[j],m=O(g,j,w),t))if(n)P[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:u.call(P,g)}else switch(t){case 4:return!1;case 7:u.call(P,g)}return l?-1:f||s?s:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},d28b:function(t,n,r){var e=r("746f");e("iterator")},e01a:function(t,n,r){"use strict";var e=r("23e7"),o=r("83ab"),i=r("da84"),c=r("5135"),a=r("861d"),u=r("9bf2").f,f=r("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var p=b.toString,v="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=p.call(t);if(c(l,t))return"";var r=v?n.slice(7,-1):n.replace(y,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,n,r){var e=r("b622");n.f=e},e8b5:function(t,n,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},ecc5:function(t,n,r){"use strict";n["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),n=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||n}},methods:{quitarAcentos(t){const n=t.replace(/<\/?[^>]+(>|$)/g,""),r={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map(t=>r[t]||t).join("").toString()}}}},fb6a:function(t,n,r){"use strict";var e=r("23e7"),o=r("861d"),i=r("e8b5"),c=r("23cb"),a=r("50c4"),u=r("fc6a"),f=r("8418"),s=r("b622"),l=r("1dde"),d=l("slice"),b=s("species"),p=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,n){var r,e,s,l=u(this),d=a(l.length),y=c(t,d),h=c(void 0===n?d:n,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,y,h);for(e=new(void 0===r?Array:r)(v(h-y,0)),s=0;y<h;y++,s++)y in l&&f(e,s,l[y]);return e.length=s,e}})}}]);
//# sourceMappingURL=glosario~referencias.15fad1d7.js.map