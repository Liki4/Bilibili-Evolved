!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/preserve-danmaku-input"]=t():e["video/player/preserve-danmaku-input"]=t()}(self,(function(){return function(){var e,t,n={389:function(e,t,n){var r=n(645)((function(e){return e[1]}));r.push([e.id,"@media screen and (max-width: 1200px) {\n  .bilibili-player.mode-webfullscreen .bilibili-player-video-inputbar {\n    display: flex !important;\n  }\n}",""]),e.exports=r},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},33:function(e,t,n){var r=n(389);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);o.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){u[e]=function(){return n[e]}}));return u.default=function(){return n},o.d(i,u),i},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return n}});var e=coreApis.componentApis.styledComponent,t=coreApis.utils.urls;const n={...(0,e.toggleStyle)("preserveDanmakuInput",(()=>Promise.resolve().then(o.t.bind(o,33,23)))),displayName:"强制保留弹幕发送栏",tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"在视频播放器网页全屏时, 即使宽度过小也强制保留弹幕发送栏, 注意这可能导致右侧的功能按钮挤出边界."},urlInclude:t.playerUrls,commitHash:"430c7d6a7b49d859ae8cb676c5df53a448972e82"}}(),i=i.component}()}));