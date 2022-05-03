var er=Object.defineProperty;var p=Object.getOwnPropertySymbols;var ur=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var b=(r,e,u)=>e in r?er(r,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[e]=u,x=(r,e)=>{for(var u in e||(e={}))ur.call(e,u)&&b(r,u,e[u]);if(p)for(var u of p(e))or.call(e,u)&&b(r,u,e[u]);return r};import{n as U,V as L}from"./js/vueComponentNormalizer.87056a83.js";import"./js/index.02c35f2a.js";import{d as ar,a as nr}from"./js/index.0f8634bc.js";import{S as M}from"./js/Standalone.13c0aa99.js";import{C as tr,a as sr}from"./js/Overview.4f0f89d4.js";import{e as ir}from"./js/elemLoaded.b1f6e29c.js";import{c as i}from"./js/client.93f15631.js";import"./js/Rocket.8cc34606.js";import"./js/Index.6d59ffe7.js";import"./js/External.8868c638.js";import"./js/DonutChartWithLegend.fe87aad2.js";import"./js/AnimatedNumber.b6059bfd.js";var cr=function(){var r=this,e=r.$createElement,u=r._self._c||e;return r.internalOptions.internal?u("div",[u("core-seo-setup",{attrs:{isWpDashboard:!0}})],1):r._e()},fr=[];const dr={mixins:[M],components:{CoreSeoSetup:tr},computed:x({},ar(["internalOptions"]))},v={};var lr=U(dr,cr,fr,!1,pr,null,null,null);function pr(r){for(let e in v)this[e]=v[e]}var br=function(){return lr.exports}(),xr=function(){var r=this,e=r.$createElement,u=r._self._c||e;return u("div",{staticClass:"aioseo-app",staticStyle:{"background-color":"transparent"}},[u("core-overview",{attrs:{isWpDashboard:!0}})],1)},vr=[];const mr={components:{CoreOverview:sr},mixins:[M]},m={};var gr=U(mr,xr,vr,!1,$r,null,null,null);function $r(r){for(let e in m)this[e]=m[e]}var _r=function(){return gr.exports}(),Sr=typeof i=="object"&&i&&i.Object===Object&&i,yr=Sr,Rr=yr,Ar=typeof self=="object"&&self&&self.Object===Object&&self,hr=Rr||Ar||Function("return this")(),Cr=hr,Or=Cr,Tr=Or.Symbol,l=Tr;function jr(r,e){for(var u=-1,a=r==null?0:r.length,o=Array(a);++u<a;)o[u]=e(r[u],u,r);return o}var Ur=jr,Lr=Array.isArray,Mr=Lr,g=l,E=Object.prototype,Er=E.hasOwnProperty,Wr=E.toString,s=g?g.toStringTag:void 0;function kr(r){var e=Er.call(r,s),u=r[s];try{r[s]=void 0;var a=!0}catch{}var o=Wr.call(r);return a&&(e?r[s]=u:delete r[s]),o}var wr=kr,zr=Object.prototype,Ir=zr.toString;function Nr(r){return Ir.call(r)}var Zr=Nr,$=l,Dr=wr,Fr=Zr,Pr="[object Null]",Gr="[object Undefined]",_=$?$.toStringTag:void 0;function Hr(r){return r==null?r===void 0?Gr:Pr:_&&_ in Object(r)?Dr(r):Fr(r)}var Vr=Hr;function Jr(r){return r!=null&&typeof r=="object"}var Yr=Jr,Br=Vr,qr=Yr,Kr="[object Symbol]";function Qr(r){return typeof r=="symbol"||qr(r)&&Br(r)==Kr}var Xr=Qr,S=l,re=Ur,ee=Mr,ue=Xr,oe=1/0,y=S?S.prototype:void 0,R=y?y.toString:void 0;function W(r){if(typeof r=="string")return r;if(ee(r))return re(r,W)+"";if(ue(r))return R?R.call(r):"";var e=r+"";return e=="0"&&1/r==-oe?"-0":e}var ae=W,ne=ae;function te(r){return r==null?"":ne(r)}var c=te;function se(r,e,u){var a=-1,o=r.length;e<0&&(e=-e>o?0:o+e),u=u>o?o:u,u<0&&(u+=o),o=e>u?0:u-e>>>0,e>>>=0;for(var n=Array(o);++a<o;)n[a]=r[a+e];return n}var ie=se,ce=ie;function fe(r,e,u){var a=r.length;return u=u===void 0?a:u,!e&&u>=a?r:ce(r,e,u)}var de=fe,le="\\ud800-\\udfff",pe="\\u0300-\\u036f",be="\\ufe20-\\ufe2f",xe="\\u20d0-\\u20ff",ve=pe+be+xe,me="\\ufe0e\\ufe0f",ge="\\u200d",$e=RegExp("["+ge+le+ve+me+"]");function _e(r){return $e.test(r)}var k=_e;function Se(r){return r.split("")}var ye=Se,w="\\ud800-\\udfff",Re="\\u0300-\\u036f",Ae="\\ufe20-\\ufe2f",he="\\u20d0-\\u20ff",Ce=Re+Ae+he,Oe="\\ufe0e\\ufe0f",Te="["+w+"]",f="["+Ce+"]",d="\\ud83c[\\udffb-\\udfff]",je="(?:"+f+"|"+d+")",z="[^"+w+"]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",N="[\\ud800-\\udbff][\\udc00-\\udfff]",Ue="\\u200d",Z=je+"?",D="["+Oe+"]?",Le="(?:"+Ue+"(?:"+[z,I,N].join("|")+")"+D+Z+")*",Me=D+Z+Le,Ee="(?:"+[z+f+"?",f,I,N,Te].join("|")+")",We=RegExp(d+"(?="+d+")|"+Ee+Me,"g");function ke(r){return r.match(We)||[]}var we=ke,ze=ye,Ie=k,Ne=we;function Ze(r){return Ie(r)?Ne(r):ze(r)}var De=Ze,Fe=de,Pe=k,Ge=De,He=c;function Ve(r){return function(e){e=He(e);var u=Pe(e)?Ge(e):void 0,a=u?u[0]:e.charAt(0),o=u?Fe(u,1).join(""):e.slice(1);return a[r]()+o}}var Je=Ve,Ye=Je,Be=Ye("toUpperCase"),qe=Be,Ke=c,Qe=qe;function Xe(r){return Qe(Ke(r).toLowerCase())}var ru=Xe;function eu(r,e,u,a){var o=-1,n=r==null?0:r.length;for(a&&n&&(u=r[++o]);++o<n;)u=e(u,r[o],o,r);return u}var uu=eu;function ou(r){return function(e){return r==null?void 0:r[e]}}var au=ou,nu=au,tu={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},su=nu(tu),iu=su,cu=iu,fu=c,du=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lu="\\u0300-\\u036f",pu="\\ufe20-\\ufe2f",bu="\\u20d0-\\u20ff",xu=lu+pu+bu,vu="["+xu+"]",mu=RegExp(vu,"g");function gu(r){return r=fu(r),r&&r.replace(du,cu).replace(mu,"")}var $u=gu,_u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Su(r){return r.match(_u)||[]}var yu=Su,Ru=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Au(r){return Ru.test(r)}var hu=Au,F="\\ud800-\\udfff",Cu="\\u0300-\\u036f",Ou="\\ufe20-\\ufe2f",Tu="\\u20d0-\\u20ff",ju=Cu+Ou+Tu,P="\\u2700-\\u27bf",G="a-z\\xdf-\\xf6\\xf8-\\xff",Uu="\\xac\\xb1\\xd7\\xf7",Lu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mu="\\u2000-\\u206f",Eu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",H="A-Z\\xc0-\\xd6\\xd8-\\xde",Wu="\\ufe0e\\ufe0f",V=Uu+Lu+Mu+Eu,J="['\u2019]",A="["+V+"]",ku="["+ju+"]",Y="\\d+",wu="["+P+"]",B="["+G+"]",q="[^"+F+V+Y+P+G+H+"]",zu="\\ud83c[\\udffb-\\udfff]",Iu="(?:"+ku+"|"+zu+")",Nu="[^"+F+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",Q="[\\ud800-\\udbff][\\udc00-\\udfff]",t="["+H+"]",Zu="\\u200d",h="(?:"+B+"|"+q+")",Du="(?:"+t+"|"+q+")",C="(?:"+J+"(?:d|ll|m|re|s|t|ve))?",O="(?:"+J+"(?:D|LL|M|RE|S|T|VE))?",X=Iu+"?",rr="["+Wu+"]?",Fu="(?:"+Zu+"(?:"+[Nu,K,Q].join("|")+")"+rr+X+")*",Pu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hu=rr+X+Fu,Vu="(?:"+[wu,K,Q].join("|")+")"+Hu,Ju=RegExp([t+"?"+B+"+"+C+"(?="+[A,t,"$"].join("|")+")",Du+"+"+O+"(?="+[A,t+h,"$"].join("|")+")",t+"?"+h+"+"+C,t+"+"+O,Gu,Pu,Y,Vu].join("|"),"g");function Yu(r){return r.match(Ju)||[]}var Bu=Yu,qu=yu,Ku=hu,Qu=c,Xu=Bu;function ro(r,e,u){return r=Qu(r),e=u?void 0:e,e===void 0?Ku(r)?Xu(r):qu(r):r.match(e)||[]}var eo=ro,uo=uu,oo=$u,ao=eo,no="['\u2019]",to=RegExp(no,"g");function so(r){return function(e){return uo(ao(oo(e).replace(to,"")),r,"")}}var io=so,co=ru,fo=io,lo=fo(function(r,e,u){return e=e.toLowerCase(),r+(u?co(e):e)}),T=lo;L.config.productionTip=!1;const po=[{id:"aioseo-seo-setup-app",component:br},{id:"aioseo-overview-app",component:_r}],j=r=>{new L({store:nr,render:e=>e(r.component)}).$mount("#"+r.id)};po.forEach(r=>{document.getElementById(r.id)?j(r):(ir("#"+r.id,T(r.id)),document.addEventListener("animationstart",function(e){T(r.id)===e.animationName&&j(r)},{passive:!0}))});
