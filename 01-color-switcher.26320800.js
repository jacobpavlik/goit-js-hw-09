!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=null;console.log(t),console.log(e),e.disabled=!0,t.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.26320800.js.map
