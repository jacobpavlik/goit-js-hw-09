function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=i);var r=i("7Y9D8");const l=document.querySelector("[name=delay]"),u=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]");function s(o,t){const n=Math.random()>.3;setTimeout((()=>{if(n)return Promise.resolve({position:o,delay:t}).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)}));Promise.reject({position:o,delay:t}).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}),t),console.log(`delay z setTimout ${t}`)}document.querySelector("button").addEventListener("click",(e=>{e.preventDefault();let o=l.value-u.value;for(let e=0;e<a.value;e+=1)position=e,o=+o,o+=+u.value,s(position,o)}));
//# sourceMappingURL=03-promises.7f20a468.js.map
