const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");t.classList.add("start"),e.classList.add("stop"),t.addEventListener("click",(function(){d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),o(!0)})),e.disabled=!0;let d=0;function o(a){t.disabled=a,e.disabled=!a}e.addEventListener("click",(function(){clearInterval(d),o(!1)}));
//# sourceMappingURL=01-color-switcher.51ab2e01.js.map