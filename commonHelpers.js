import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h="https://pixabay.com/api/",y="43177088-2530548a60ff9c950be2fcaec",L=`${h}?key=${y}&image_type=photo&orientation=horizontal&safesearch=true`,w=(r="")=>fetch(`${L}&q=${r}`).then(t=>t.json()),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=r=>{const t=r.reduce((s,i)=>{const{webformatURL:e,largeImageURL:o,tags:n,likes:f,views:g,comments:u,downloads:d}=i;return s+=`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              width="360"
              height="200"
              loading="lazy"
              src="${e}"
              alt="${n}"
            />
          </a>
          <ul class="description-list">
            <li>Likes <span>${f}</span></li>
            <li>Views <span>${g}</span></li>
            <li>Comments <span>${u}</span></li>
            <li>Downloads <span>${d}</span></li>
          </ul>
        </li>
        `,s},"");c.insertAdjacentHTML("afterbegin",t),C()},$=()=>{c.innerHTML=""},C=()=>{const r={captionsData:"alt",captionDelay:250};let t=new p(".gallery a",r);t.on("show.simplelightbox"),t.refresh()},N=()=>{m.classList.remove("hide")},R=()=>{m.classList.add("hide")},a=document.querySelector(".form");a.addEventListener("submit",A);function A(r){r.preventDefault(),$();const t=new FormData(a).get("imageName").trim();if(!t){I();return}N(),w(t).then(s=>{const{hits:i,total:e}=s;if(!i.length||!e){S();return}b(i)}).catch(s=>P(s)).finally(()=>R()),a.reset()}function P(r){l.error({title:"Error",message:`${r.toString()}`,position:"topRight",messageColor:"#fff",messageLineHeight:"150%",backgroundColor:"red"})}function S(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",messageLineHeight:"150%",backgroundColor:"red"})}function I(){l.warning({title:"Caution",message:"Please fill the input",position:"topRight",messageColor:"#fff",messageLineHeight:"150%",backgroundColor:"orange"})}
//# sourceMappingURL=commonHelpers.js.map
