import {useEffect} from "react";
import {loadPublicHeroVideo} from "../features/admin-panel/management-api";
export default function ManagedPublicContent(){
 useEffect(()=>{
  if(window.location.pathname!=="/")return;
  let disposed=false;let url="";let observer:MutationObserver|null=null;let video:HTMLVideoElement|null=null;
  const mount=()=>{const root=document.querySelector(".main-container");const target=Array.from(root?.querySelectorAll<HTMLElement>("div")??[]).find(x=>x.className.includes("h-[380px]")&&x.className.includes("rounded-[24px]")&&x.className.includes("overflow-hidden"));if(!target||disposed||window.location.pathname!=="/")return false;
   video=document.createElement("video");video.dataset.mahManagedHero="true";video.src=url;video.autoplay=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload="metadata";video.setAttribute("aria-hidden","true");Object.assign(video.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none",zIndex:"0"});target.prepend(video);void video.play().catch(()=>undefined);return true;};
  loadPublicHeroVideo().then(blob=>{if(disposed||!blob)return;url=URL.createObjectURL(blob);if(!mount()){observer=new MutationObserver(()=>{if(mount())observer?.disconnect()});observer.observe(document.body,{childList:true,subtree:true})}}).catch(()=>undefined);
  return()=>{disposed=true;observer?.disconnect();video?.remove();if(url)URL.revokeObjectURL(url)};
 },[]);
 return null;
}
