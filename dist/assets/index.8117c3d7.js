import{d as e,u as s,a as n,b as t,c as r,s as a,e as o,r as c,f as i,g as d,t as l,h as u,i as p,F as f,j as m,o as h,k as y,V as b}from"./vendor.eac7439e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var v=(e,s)=>{for(const[n,t]of s)e[n]=t;return e};const g=e({name:"App",setup(){const{open:e}=o(),{status:c,disconnect:i,error:d}=s(),{address:l,balance:u,chainId:p,isActivated:f}=n();return{isActivated:f,address:l,status:c,error:d,chainId:p,balance:u,open:e,disconnect:i,displayEther:t,displayChainName:r,shortenAddress:a}}}),A={class:"h-full flex flex-col justify-center items-center"},k={key:0,class:"text-red-500"},I={key:1,class:"text-center"},C=m("network: "),N={class:"capitalize"},x={class:"m-4"},E=["disabled"];const L=y(v(g,[["render",function(e,s,n,t,r,a){const o=c("vdapp-board");return h(),i(f,null,[d("div",A,[e.error?(h(),i("p",k,l(e.error),1)):u("",!0),e.isActivated?(h(),i("div",I,[d("p",null,l(e.shortenAddress(e.address)),1),d("p",null,l(e.displayEther(e.balance))+" ETH",1),d("p",null,[C,d("span",N,l(e.chainId?e.displayChainName(e.chainId):""),1)])])):u("",!0),d("div",x,[d("button",{onClick:s[0]||(s[0]=s=>e.isActivated?e.disconnect():e.open()),class:"btn",disabled:"connecting"===e.status},l("connected"===e.status?"Disconnect":"connecting"===e.status?"Connecting...":"Connect"),9,E)])]),p(o)],64)}]]));L.use(b,{infuraId:"ff6a249a74e048f1b413cba715f98d07"}),L.mount("#app");
