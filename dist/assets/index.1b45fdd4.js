import{S as b,P as v,W as M,T as S,M as w,a as d,b as z,A as P,c as l,B as T,d as g,e as y,f as A}from"./vendor.2469ae68.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};F();const o=new b,r=new v(75,window.innerWidth/window.innerHeight,.1,1e3),f=new M({canvas:document.querySelector("#bg")});f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);r.position.setZ(30);f.render(o,r);const j=new S(10,3,16,100),B=new w({color:16737095}),m=new d(j,B);o.add(m);const h=new z(16777215);h.position.set(5,5,5);const x=new P(16777215);x.position.set(5,5,5);o.add(h,x);function L(){requestAnimationFrame(L),m.rotation.x+=.01,m.rotation.y+=.005,m.rotation.z+=.01,f.render(o,r)}function G(){const n=new y(.25,24,24),s=new w({color:16777215}),a=new d(n,s),[c,e,t]=Array(3).fill().map(()=>A.randFloatSpread(100));a.position.set(c,e,t),o.add(a)}Array(200).fill().forEach(G);const O=new l().load("./assets/images/space.jpg");o.background=O;const R=new l().load("./assets/images/lino24.png"),u=new d(new T(3,3,3),new g({map:R}));u.position.set(2,3,5);o.add(u);const W=new l().load("./assets/images/moon.jpg"),q=new l().load("./assets/images/normal.jpg"),i=new d(new y(3,32,32),new g({map:W,normalMap:q}));i.position.z=30;i.position.setX(-10);o.add(i);function C(){const n=document.body.getBoundingClientRect().top;i.rotation.x+=.05,i.rotation.y+=.075,i.rotation.z+=.05,u.rotation.y+=.01,u.rotation.z+=.01,r.position.z=n*-.01,r.position.x=n*-2e-4,r.position.y=n*-2e-4}window.addEventListener("scroll",()=>C());L();
