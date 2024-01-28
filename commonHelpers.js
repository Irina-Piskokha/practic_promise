import{a as l}from"./assets/vendor-a2e8d7fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const s=l.create({baseURL:"https://dummyjson.com"});async function f(){try{return await s.get("/products")}catch(e){console.log(e)}}async function m(e){try{return await s.get(`/products/${e}`)}catch(r){console.log(r)}}async function p(e){return await s.post("/products/add",e)}const a={getAll:f,getById:m,add:p},u={formRef:document.querySelector("#singleProductForm"),ulContainer:document.querySelector("#allProducts"),singleProductRef:document.querySelector("#singleProduct"),newProductSectionRef:document.querySelector("#newProductSection"),addNewProductFormRef:document.querySelector("#addNewProductForm")},y=e=>e.map(({title:r,description:n,price:c})=>`<li><h3>${r}</h3>
      <p>${n}</p>
      <p>${c}</p></li>`).join("");function d({title:e,description:r,price:n}){return`<h3>${e}</h3>
      <p>${r}</p>
      <p>${n}</p>`}async function g(){try{const e=await a.getAll();u.ulContainer.innerHTML=y(e.data.products)}catch(e){console.log(e)}}async function h(e){e.preventDefault();const r=e.currentTarget.elements.id.value.trim();try{const n=await a.getById(r);u.singleProductRef.innerHTML=d(n.data)}catch(n){console.log(n)}}async function P(e){e.preventDefault();try{const r={};new FormData(e.currentTarget).forEach((t,o)=>r[o]=t);const n=await a.add(r),c=d(n.data);u.newProductSectionRef.innerHTML=c}catch(r){console.log(r)}}g();u.formRef.addEventListener("submit",h);u.addNewProductFormRef.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
