function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequire7bc7;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=l);var r=l("7Y9D8");const u=document.querySelector("[name=delay]"),i=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]");function d(o,t){const n=Math.random()>.3;setTimeout((()=>{n?e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`):e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}),t),console.log(`delay z setTimout ${t}`)}document.querySelector("button").addEventListener("click",(e=>{e.preventDefault();let o=u.value-i.value;for(let e=0;e<a.value;e+=1)position=e,o=+o,o+=+i.value,d(e,o),console.log(`i: ${e}, delay: ${o}`)}));
//# sourceMappingURL=03-promises.0aabc873.js.map
