if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>i(e,l),a={module:{uri:l},exports:c,require:o};s[l]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"1ed69dd40dbd1ad1285f9b2d7199561d"},{url:"android-chrome-512x512.png",revision:"174b3a480b6aefc2057e8fe30f6fd6cf"},{url:"apple-touch-icon.png",revision:"1ca2cee702eeec45d62ce96acf8b3f69"},{url:"assets/Button-6fe96076.js",revision:null},{url:"assets/createNote-9feb59cc.js",revision:null},{url:"assets/createSvgIcon-58188a5d.js",revision:null},{url:"assets/error-87d011f5.js",revision:null},{url:"assets/index-0353a0ef.js",revision:null},{url:"assets/index-0a15e2cb.css",revision:null},{url:"assets/index-762b397a.js",revision:null},{url:"assets/index-773e1185.js",revision:null},{url:"assets/index-8272c96d.js",revision:null},{url:"assets/message-3cd5b343.js",revision:null},{url:"assets/Paper-5b96336f.js",revision:null},{url:"assets/ReactToastify-55fec1ff.css",revision:null},{url:"assets/ReactToastify-dc1fe31d.js",revision:null},{url:"assets/TextField-a1f23333.js",revision:null},{url:"favicon-16x16.png",revision:"a26bdc9643c14e1b407b183773286566"},{url:"favicon-32x32.png",revision:"0d47f9588175364cf9da87d77c5a3b93"},{url:"favicon.ico",revision:"259de5ace06c2e6276fb53573b7cfbb4"},{url:"index.html",revision:"4b36c93ff7fbdc62dd53b2a5461dd777"},{url:"mstile-144x144.png",revision:"696d27ee8eba2b836fb21bec651acb3b"},{url:"mstile-150x150.png",revision:"1c185a5c1d67aba8b12ac325154a3e47"},{url:"mstile-310x150.png",revision:"24039a360a209344b20280465e4c1c3c"},{url:"mstile-310x310.png",revision:"db3a3b070a57b8fa42806183dda43b51"},{url:"mstile-70x70.png",revision:"18b4e8ec6b7c014596da2db69df28eef"},{url:"registerSW.js",revision:"b91c4d630394590d5dbbb67dcf1b0407"},{url:"safari-pinned-tab.svg",revision:"73d1a49290480e539c9ebbb24641f26a"},{url:"favicon.ico",revision:"259de5ace06c2e6276fb53573b7cfbb4"},{url:"apple-touch-icon.png",revision:"1ca2cee702eeec45d62ce96acf8b3f69"},{url:"manifest.webmanifest",revision:"8ce038001e289cde20e2048eb116c438"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
