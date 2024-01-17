import{i,S as g}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=document.querySelector(".form");h.addEventListener("submit",$);const b=document.getElementById("searchInput"),L=document.querySelector(".gallery"),l=document.querySelector(".loader");function $(a){a.preventDefault();const t="41833958-d4e1402628473c9a9cbd6bb32",o=b.value.trim();if(!o){i.warning({message:"Please enter a search query."});return}const n=`https://pixabay.com/api/?key=${t}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;l.style.display="block",fetch(n).then(e=>e.json()).then(e=>{if(e.hits.length===0){i.error({message:"No images found. Please try again with a different search query."});return}const r=e.hits.map(({webformatURL:c,largeImageURL:u,tags:d,likes:f,views:m,comments:y,downloads:p})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${u}">
                        <img class="gallery-image" src="${c}" alt="${d}" />
                    </a>
                    <div class="image-details">
                        <p>Likes </br> ${f}</p>
                        <p>Views </br>  ${m}</p>
                        <p>Comments </br>  ${y}</p>
                        <p>Downloads </br>  ${p}</p>
                    </div>
                </li>`).join("");L.innerHTML=r,new g(".gallery a").refresh()}).catch(()=>{i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{l.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
