!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/special-danmaku"]=e():t["style/special-danmaku"]=e()}(globalThis,(()=>(()=>{var t,e,n={531:(t,e,n)=>{var i=n(218)((function(t){return t[1]}));i.push([t.id,'body.disable-highlight-danmaku-style .bili-dm.bili-high,\nbody.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-text,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .bili-dm.bili-up,\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .bili-dm.bili-up .bili-up-tip,\nbody.disable-up-danmaku-style .bili-dm.bili-up .b-danmaku-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .bili-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}\n\nbody.disable-vip-danmaku-style .bili-dm-vip {\n  display: contents !important;\n  text-shadow: inherit !important;\n}\nbody.disable-vip-danmaku-style .bili-dm:not([style*="--textShadow"]) {\n  --textShadow: var(--danmaku-text-shadow);\n}',""]),t.exports=i},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,i){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(i)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var d=this[o][0];null!=d&&(a[d]=!0)}for(var l=0;l<t.length;l++){var r=[].concat(t[l]);i&&a[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),e.push(r))}},e}},297:(t,e,n)=>{var i=n(531);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},177:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=177,t.exports=e},496:t=>{"use strict";t.exports="移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除.\n"}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,exports:{}};return n[t](o,o.exports,a),o.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var d={};t=t||[null,e({}),e([]),e(e)];for(var l=2&i&&n;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((t=>d[t]=()=>n[t]));return d.default=()=>n,a.d(o,d),o},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";a.d(o,{component:()=>p});const t=coreApis.componentApis.define,e=coreApis.utils.urls,n=coreApis.settings,i=coreApis.localStorage;var d=function(t){return t[t.Heavy=0]="Heavy",t[t.Stroke=1]="Stroke",t[t.Shadow=2]="Shadow",t}(d||{});const l={[d.Heavy]:"1px 0 1px #000000,0 1px 1px #000000,0 -1px 1px #000000,-1px 0 1px #000000",[d.Stroke]:"0px 0px 1px #000000,0 0 1px #000000,0 0 1px #000000",[d.Shadow]:"1px 1px 2px #000000,0 0 1px #000000"},r=(0,t.defineOptionsMetadata)({highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0},vip:{displayName:"禁用大会员弹幕",defaultValue:!0}}),s="disableSpecialDanmaku",p=(0,t.defineComponentMetadata)({name:s,entry:t=>{let{metadata:e,settings:a}=t;Object.keys(a.options).forEach((t=>{(0,n.addComponentListener)(`${e.name}.${t}`,(e=>{document.body.classList.toggle(`disable-${t}-danmaku-style`,e)}),!0)})),(()=>{const t="bpx_player_profile",e=t=>{const e=lodash.get(t,"dmSetting.fontborder");document.documentElement.style.setProperty("--danmaku-text-shadow",l[e])};e(JSON.parse(localStorage.getItem(t))),(0,i.watchLocalStorage)(((n,i)=>{n===t&&e(JSON.parse(i))}))})()},displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],instantStyles:[{name:s,style:()=>Promise.resolve().then(a.t.bind(a,297,23))}],urlInclude:e.playerUrls,options:r,commitHash:"6049a6149a818e36f150dbe3f02183f57d4e3bce",coreVersion:"2.8.4",description:(()=>{const t=a(177);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(a.t.bind(a,496,17)).then((t=>t.default))}})()})})(),o=o.component})()));