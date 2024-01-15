import{S as y,i as h}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g=document.querySelector(".form");g.addEventListener("submit",$);const b=document.getElementById("searchInput"),L=document.querySelector(".gallery"),i=document.querySelector(".loader");function $(l){l.preventDefault();const r="41833958-d4e1402628473c9a9cbd6bb32",s=b.value,o=`https://pixabay.com/api/?key=${r}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;i.style.display="block",fetch(o).then(e=>e.json()).then(e=>{console.log(e);const t=e.hits.map(({webformatURL:a,largeImageURL:c,tags:u,likes:d,views:p,comments:f,downloads:m})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${c}">
                        <img class="gallery-image" src="${a}" alt="${u}" />
                    </a>
                    <div class="image-details">
                        <p>Likes </br> ${d}</p>
                        <p>Views </br>  ${p}</p>
                        <p>Comments </br>  ${f}</p>
                        <p>Downloads </br>  ${m}</p>
                    </div>
                </li>`).join("");L.innerHTML=t,new y(".gallery a").refresh()}).catch(e=>{console.error("Error:",e),h.show({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{i.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
