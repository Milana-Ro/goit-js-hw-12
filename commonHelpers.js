import{a as b,S as R,i as l}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const I="https://pixabay.com/api/",N="43177088-2530548a60ff9c950be2fcaec",S=async({imageName:o="",page:t=1,perPage:i=15})=>await b(I,{params:{key:N,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:i}}),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=document.querySelector(".load-more-btn"),q=o=>{const t=o.reduce((i,n)=>{const{webformatURL:e,largeImageURL:s,tags:r,likes:p,views:y,comments:L,downloads:w}=n;return i+=`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              width="360"
              height="200"
              loading="lazy"
              src="${e}"
              alt="${r}"
            />
          </a>
          <ul class="description-list">
            <li>Likes <span>${p}</span></li>
            <li>Views <span>${y}</span></li>
            <li>Comments <span>${L}</span></li>
            <li>Downloads <span>${w}</span></li>
          </ul>
        </li>
        `,i},"");d.insertAdjacentHTML("beforeend",t),P()},v=()=>{d.innerHTML=""},C=()=>d.childElementCount,P=()=>{const o={captionsData:"alt",captionDelay:250};let t=new R(".gallery a",o);t.on("show.simplelightbox"),t.refresh()},A=()=>{m.classList.remove("is-hidden")},B=()=>{m.classList.add("is-hidden")},E=()=>{u.classList.remove("is-hidden")},g=()=>{u.classList.add("is-hidden")},M=()=>{const o=document.querySelector(".gallery-item"),{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},c=document.querySelector(".form");let a=1,h="";c.addEventListener("submit",O);u.addEventListener("click",$);async function O(o){o.preventDefault(),a=1;const t=new FormData(c).get("imageName").trim();if(!t){D();return}g(),v(),await f({imageName:t,page:a}),h=t,c.reset()}async function $(){a++,await f({imageName:h,page:a}),M()}async function f({imageName:o,page:t}){A();try{const{data:i}=await S({imageName:o,page:t}),{hits:n,totalHits:e}=i;if(!n.length){x();return}if(q(n),C()>=e){g(),F();return}E()}catch(i){H(i)}finally{B()}}function H(o){l.error({title:"Error",message:`${o.toString()}`,position:"topRight",messageLineHeight:"150%"})}function x(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageLineHeight:"150%"})}function D(){l.warning({title:"Caution",message:"Please fill the input",position:"topRight",messageLineHeight:"150%"})}function F(){l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",messageLineHeight:"150%"})}
//# sourceMappingURL=commonHelpers.js.map
