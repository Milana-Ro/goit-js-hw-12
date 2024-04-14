import{a as b,S,i as l}from"./assets/vendor-95dc692e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",v="43177088-2530548a60ff9c950be2fcaec",N=async(s="",t=1)=>await b(q,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}}),u=document.querySelector(".gallery"),m=document.querySelector(".loader"),d=document.querySelector(".load-more-btn"),P=s=>{const t=s.reduce((i,r)=>{const{webformatURL:e,largeImageURL:o,tags:n,likes:h,views:y,comments:L,downloads:w}=r;return i+=`<li class="gallery-item">
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
            <li>Likes <span>${h}</span></li>
            <li>Views <span>${y}</span></li>
            <li>Comments <span>${L}</span></li>
            <li>Downloads <span>${w}</span></li>
          </ul>
        </li>
        `,i},"");u.insertAdjacentHTML("beforeend",t),M()},R=()=>{u.innerHTML=""},M=()=>{const s={captionsData:"alt",captionDelay:250};let t=new S(".gallery a",s);t.on("show.simplelightbox"),t.refresh()},O=()=>{m.classList.remove("is-hidden")},$=()=>{m.classList.add("is-hidden")},A=()=>{d.classList.remove("is-hidden")},g=()=>{d.classList.add("is-hidden")},c=document.querySelector(".form");let p="",a=1;c.addEventListener("submit",H);d.addEventListener("click",I);async function H(s){s.preventDefault(),a=1;const t=new FormData(c).get("imageName").trim();if(!t){x();return}g(),R(),await f(t,a),p=t,c.reset()}async function I(){a++,await f(p,a)}async function f(s,t){O();try{const{data:i}=await N(s,t),{hits:r,totalHits:e}=i;if(!r.length){E();return}P(r),A(),e<=15&&(g(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",messageLineHeight:"150%"}))}catch(i){B(i)}finally{$()}}function B(s){l.error({title:"Error",message:`${s.toString()}`,position:"topRight",messageLineHeight:"150%"})}function E(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageLineHeight:"150%"})}function x(){l.warning({title:"Caution",message:"Please fill the input",position:"topRight",messageLineHeight:"150%"})}
//# sourceMappingURL=commonHelpers.js.map
