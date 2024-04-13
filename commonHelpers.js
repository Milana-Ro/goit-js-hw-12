import{a as h,S as y,i as l}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",w="43177088-2530548a60ff9c950be2fcaec",b=async(s="")=>await h(L,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15}}),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=s=>{const o=s.reduce((i,r)=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:u,views:g,comments:p,downloads:f}=r;return i+=`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
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
            <li>Likes <span>${u}</span></li>
            <li>Views <span>${g}</span></li>
            <li>Comments <span>${p}</span></li>
            <li>Downloads <span>${f}</span></li>
          </ul>
        </li>
        `,i},"");d.insertAdjacentHTML("afterbegin",o),N()},v=()=>{d.innerHTML=""},N=()=>{const s={captionsData:"alt",captionDelay:250};let o=new y(".gallery a",s);o.on("show.simplelightbox"),o.refresh()},q=()=>{m.classList.remove("is-hidden")},O=()=>{m.classList.add("is-hidden")},c=document.querySelector(".form"),a=document.querySelector(".load-more-btn");c.addEventListener("submit",P);a.addEventListener("click",R);async function P(s){s.preventDefault(),v(),a.classList.add("is-hidden");const o=new FormData(c).get("imageName").trim();if(!o){H();return}q();try{const{data:i}=await b(o),{hits:r,totalHits:e}=i;if(!r.length){A();return}S(r),a.classList.remove("is-hidden"),e<=15&&(a.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",messageLineHeight:"150%"}))}catch(i){$(i)}finally{O()}c.reset()}function R(){console.log("click!")}function $(s){l.error({title:"Error",message:`${s.toString()}`,position:"topRight",messageLineHeight:"150%"})}function A(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageLineHeight:"150%"})}function H(){l.warning({title:"Caution",message:"Please fill the input",position:"topRight",messageLineHeight:"150%"})}
//# sourceMappingURL=commonHelpers.js.map
