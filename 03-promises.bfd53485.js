!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON"),u=document.querySelector("[name=delay]"),a=document.querySelector("[name=step]"),l=document.querySelector("[name=amount]");function c(n,o){var t=Math.random()>.3;setTimeout((function(){if(t)return Promise.resolve({position:n,delay:o}).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}));Promise.reject({position:n,delay:o}).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}),o)}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();for(var n=u.value-a.value,o=0;o<l.value;o+=1){n=+n,c(o,n+=+a.value)}}))}();
//# sourceMappingURL=03-promises.bfd53485.js.map