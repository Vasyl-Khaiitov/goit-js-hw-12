import{a as m,S as w,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const v=m.defaults.API_KEY="49359087-343ead2b9467da8fb57304bcb",P=m.defaults.baseURL="https://pixabay.com/api/";async function y(s,t){const r={params:{key:v,q:s.trim(),image_type:"photo",orientation:"horizontal",page:t,per_page:15,safesearch:"true"}},o=await m.get(P,r),{hits:e,totalHits:a}=o.data;return{hits:e,totalHits:a}}let p=null;function S(){b.innerHTML=""}function h(s){x(s)}function q(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}const b=document.querySelector(".gallery"),f=document.querySelector(".btn-more");function x(s=[]){const t=s.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}" class="gallery-item-link">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="text-info">
        <p><b>Likes:</b>${r.likes}</p>
        <p><b>Views:</b>${r.views}</p>
        <p><b>Comments:</b>${r.comments}</p>
        <p><b>Downloads:</b>${r.downloads}</p>
        </div>
        </li>`).join("");b.insertAdjacentHTML("beforeend",t),p?p.refresh():p=new w(".gallery a",{caption:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}const E=document.querySelector(".form"),i=document.querySelector(".loader");function L(s="top"){i.classList.remove("hidden"),s==="top"?(i.classList.add("loader-top"),i.classList.remove("loader-bottom")):s==="bottom"&&(i.classList.remove("loader-top"),i.classList.add("loader-bottom"))}f.addEventListener("click",A);E.addEventListener("submit",R);let c=null,l=1,g=28;async function R(s){s.preventDefault(),l=1,S();const t=s.currentTarget,{searchText:r}=t.elements;if(c=r.value.trim(),!c){n.show({title:"⛔",message:"Please write a search query!",color:"yellow",position:"topRight"});return}L("top"),d();try{const{hits:o,totalHits:e}=await y(c,l);if(!Array.isArray(o)){console.error("Invalid response structure. Hits is not an array."),n.show({title:"⚠️",message:"Unexpected response format. Please try again later!",color:"yellow",position:"topRight"}),hideLoader();return}if(o.length===0){n.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),hideLoader();return}h(o),o.length<e?q():d(),t.reset()}catch(o){let e="An unexpected error occurred. Please try again later!";o.response?e=`Server Error: ${o.response.data.message||o.message}`:o.request&&(e="Network Error: Failed to reach the server. Please check your internet connection."),n.show({title:"⚠️",message:e,color:"red",position:"topRight"}),console.error("Error:",o.message)}hideLoader()}async function A(s){l+=1,g+=1385,i.style.top=`${g}px`,L("bottom");try{const{hits:t,totalHits:r}=await y(c,l);console.log(t,r),t.length===0?d():(h(t),l*15>=r&&(n.show({title:"ℹ️",message:"We're sorry, but you've reached the end of search results",color:"blue",position:"topRight"}),d()))}catch(t){console.error("Error during fetching data:",t.message),n.show({title:"⚠️",message:"An error occurred. Please try again later!",color:"red",position:"topRight"})}finally{hideLoader()}}
//# sourceMappingURL=index.js.map
