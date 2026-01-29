import{a as f,S as d,i as n}from"./assets/vendor-xpOxgMII.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="54259802-cdd8f9ab8b839644c91fdf63a";async function y(t){return(await f.get(m,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:l,downloads:u})=>`
      <li>
        <a href="${i}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r}</p>
          <p class="info-item"><b>Views</b> ${a}</p>
          <p class="info-item"><b>Comments</b> ${l}</p>
          <p class="info-item"><b>Downloads</b> ${u}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function S(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}const v=document.querySelector(".form"),q=document.querySelector(".form input[name='search-text']"),w=document.querySelector(".gallery");v.addEventListener("submit",async t=>{t.preventDefault();const o=q.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search term!"});return}b(),L();try{const s=await y(o);if(!s.hits.length){n.info({title:"No results",message:"Sorry, there are no images matching your search query."});return}g(s.hits),w.scrollIntoView({behavior:"smooth"})}catch(s){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(s)}finally{S()}});
//# sourceMappingURL=index.js.map
