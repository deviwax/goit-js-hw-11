import{a as u,S as d,i as s}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="51470641-9c85038c1716f2f4dcdf71359",p="https://pixabay.com/api/";async function m(n){const o={key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(p,{params:o})).data}catch{throw new Error("Failed to fetch images")}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const o=n.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${e.likes}</p>
                <p><b>Views:</b> ${e.views}</p>
                <p><b>Comments:</b> ${e.comments}</p>
                <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');w.addEventListener("submit",async n=>{n.preventDefault();const o=S.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),g();try{const e=await m(o);if(e.hits.length===0){s.info({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"});return}h(e.hits)}catch{s.error({title:"Error",position:"topRight",message:"Something went wrong. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
