import{i,S as p}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S=document.querySelector(".form"),l=document.getElementById("searchInput"),b=document.querySelector(".gallery"),c=document.querySelector(".loader");function v(){return localStorage.getItem("searchQuery")||""}function L(t){localStorage.setItem("searchQuery",t)}function $(){const t=v();l.value=t}function q(){localStorage.removeItem("searchQuery")}function I(t){t.preventDefault(),q();const o="41833958-d4e1402628473c9a9cbd6bb32",a=l.value.trim();if(!a){i.warning({message:"Please enter a search query."});return}const n=`https://pixabay.com/api/?key=${o}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;c.style.display="block",fetch(n).then(e=>e.json()).then(e=>{if(e.hits.length===0){i.error({message:"No images found. Please try again with a different search query."});return}const r=e.hits.map(({webformatURL:u,largeImageURL:m,tags:f,likes:d,views:y,comments:g,downloads:h})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${m}">
                        <img class="gallery-image" src="${u}" alt="${f}" />
                    </a>
                    <div class="image-details">
                        <p>Likes </br> ${d}</p>
                        <p>Views </br>  ${y}</p>
                        <p>Comments </br>  ${g}</p>
                        <p>Downloads </br>  ${h}</p>
                    </div>
                </li>`).join("");b.innerHTML=r,new p(".gallery a").refresh()}).catch(()=>{i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c.style.display="none"})}$();l.addEventListener("input",()=>L(event.target.value));S.addEventListener("submit",I);
//# sourceMappingURL=commonHelpers.js.map
