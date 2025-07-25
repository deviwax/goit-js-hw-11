import{a as u,i as s}from"./assets/vendor-CyHMW-y7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="51470641-9c85038c1716f2f4dcdf71359",f="https://pixabay.com/api/";async function p(n){const o={key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(f,{params:o})).data}catch{throw new Error("Failed to fetch images")}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(e=>`
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
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function h(){c.innerHTML=""}function g(){l.lassList.remove("hidden")}function b(){l.classList.add("hidden")}const L=document.querySelector(".form"),w=document.querySelector('.input[name="search-text"]');L.addEventListener("submit",async n=>{n.preventDefault();const o=w.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}g(),h();try{const e=await p(o);if(e.hits.length===0){s.info({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"});return}y(e.hits)}catch{s.error({title:"Error",position:"topRight",message:"Something went wrong. Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
