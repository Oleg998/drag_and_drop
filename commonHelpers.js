(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),a=document.getElementById("result");c.addEventListener("submit",u);function u(t){t.preventDefault(),a.innerHTML="";const{usertext:n}=t.currentTarget.elements,s=n.value;if(s.trim()==="")alert("Input should not be empty");else{for(let o=0;o<s.length;o++){const e=document.createElement("span");e.textContent=s[o],e.classList.add("draggable","letter"),e.setAttribute("draggable","true"),a.appendChild(e),e.ondragstart=l,e.ondragover=d,e.ondrop=f}t.currentTarget.reset()}}function l(t){t.dataTrasfer.setData("id",t.target.id)}function d(t){t.preventDefault()}function f(t){let n=t.dataTrasfer.getData("id");t.target.append(document.getElementById(n))}
//# sourceMappingURL=commonHelpers.js.map
