!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["utils/keymap-dark-mode"]=o():e["utils/keymap-dark-mode"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var a in t)e.o(t,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:t[a]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{plugin:()=>t});const t={name:"keymap.actions.darkMode",displayName:"快捷键扩展 - 夜间模式",description:'在快捷键的动作列表里添加一个 "夜间模式", 可以通过快捷键切换夜间模式',setup:e=>{let{addData:o,coreApis:{settings:t}}=e;o("keymap.actions",(e=>{e.darkMode={displayName:"夜间模式",run:()=>{const e=t.getComponentSettings("darkMode");e.enabled=!e.enabled}}})),o("keymap.presets",(e=>{e.darkMode=""}))},commitHash:"6049a6149a818e36f150dbe3f02183f57d4e3bce",coreVersion:"2.8.4"};return o=o.plugin})()));