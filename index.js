import{a as f,S as m,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y=void 0;async function g(s){return(await f.get(p,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery");let c;function h(s){const o=s.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:n,comments:u,downloads:d})=>`
      <li>
        <a href="${t}">
          <img src="${i}" alt="${e}" loading="lazy"/>
          <div class="info">
            <p>Likes: ${r}</p>
            <p>Views: ${n}</p>
            <p>Comments: ${u}</p>
            <p>Downloads: ${d}</p>
          </div>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new m(".gallery a")}function L(){l.innerHTML=""}function b(){document.querySelector(".loader").classList.add("visible")}function v(){document.querySelector(".loader").classList.remove("visible")}const S=document.querySelector(".form input[name='search-text']"),q=document.querySelector(".form");q.addEventListener("submit",async s=>{var i;s.preventDefault();const o=S.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term!"});return}L(),b();try{const t=await g(o);if(!((i=t==null?void 0:t.hits)!=null&&i.length)){a.info({title:"No results",message:"No images found."});return}h(t.hits)}catch(t){console.error(t),a.error({title:"Error",message:"Failed to fetch images."})}finally{v()}});console.log("Main JS loaded");
//# sourceMappingURL=index.js.map
