if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const r=e=>a(e,n),f={module:{uri:n},exports:d,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"providencia"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/axios-6SetXDA0.js",revision:"82d90ee2f025860a0633a3d6a0ba5bd0"},{url:"assets/axios-CKqI5u1g.css",revision:"f3eec5c8b864d3cad5bfed29b5185fb6"},{url:"assets/ClosePopup-bGATT9hV.js",revision:"a19c5e2c85222d8603098994f6944962"},{url:"assets/ErrorNotFound-Pgw3KxFo.js",revision:"8d6829f4f81859f8c7988851aee12c4a"},{url:"assets/fa-brands-400-D_cYUPeE.woff2",revision:"cbcf42b2e9228a8f5bad42717d8a88db"},{url:"assets/fa-brands-400-D1LuMI3I.ttf",revision:"15d54d142da2f2d6f2e90ed1d55121af"},{url:"assets/fa-regular-400-BjRzuEpd.woff2",revision:"89672701a5874b80be27649e0494e354"},{url:"assets/fa-regular-400-DZaxPHgR.ttf",revision:"262525e2081311609d1fdab966c82bfc"},{url:"assets/fa-solid-900-CTAAxXor.woff2",revision:"4a6591ab5460ae5cbff1ecbd6e52193a"},{url:"assets/fa-solid-900-D0aA9rwL.ttf",revision:"269f971cec0d5dc864fe9ae080b19e23"},{url:"assets/fa-v4compatibility-C9RhG_FT.woff2",revision:"a772da7bff216cd36214bc44165bba3e"},{url:"assets/fa-v4compatibility-CCth-dXg.ttf",revision:"4ed293ceaca9b5b2d9cd74a477963fae"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format-JFtu5K03.js",revision:"440a2b4c1310ae577284907830b1a265"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg-DZhiGvEA.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY-BpWbwl2n.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index-DoTxXct_.js",revision:"e00dad2624c859a0bd91635e911fbe40"},{url:"assets/index-Dy51zlJg.css",revision:"0a4d1ec3e4da2428c8296875bcc59d5e"},{url:"assets/IndexPage-DAQic2Hr.js",revision:"d42f1d12f2fb29b647575267daf79db5"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/Lista-DxqW-MlG.js",revision:"3dedf1afd857980ebcc283e0e1d30f41"},{url:"assets/LoginPage-B6Zw2dNd.css",revision:"887f8e61574852e2cdeb2b163d354932"},{url:"assets/LoginPage-BHkKUnmD.js",revision:"6ed589fc3547be96571ec19fce8a3a19"},{url:"assets/MainLayout-B7TL8ZVs.js",revision:"361289be41d8a7b8608b025b919cfc32"},{url:"assets/MainLayout-CtnXSZ-K.css",revision:"5b1ab2a2e620809962c90d18fe68b67c"},{url:"assets/Metricas-ZqJAA_fC.js",revision:"3e7bec8d8a3fe89e7ab43e481e73b5fe"},{url:"assets/moment-C5S46NFB.js",revision:"ca3e70dacca8da605beb6efc0ed4bd74"},{url:"assets/Nunito-VariableFont_wght-D2sADkEI.ttf",revision:"ea0ad4c72a135f9a43ec7bb83f2469aa"},{url:"assets/Producto-CMABcC9Z.js",revision:"9bc1d3552f57f5741352567286630f3f"},{url:"assets/QBtnDropdown-aARZ_mzC.js",revision:"9891382715d573e922b0aa9438d97158"},{url:"assets/QBtnGroup-tHkBRKMP.js",revision:"a0c45197be91b42754ee2388975f5d04"},{url:"assets/QChip-DHsotkmB.js",revision:"6c5644e6e8e425c9cb84459d2fdf07ed"},{url:"assets/QForm-BJbwm7rZ.js",revision:"c2f825a36f41a255f921af4308e3e859"},{url:"assets/QLayout-CFtX8nN4.js",revision:"addaa0bce81193e48ccf1d4e7fc5713d"},{url:"assets/QList-BHfyo9Fm.js",revision:"0d9b4acc988e265e4194199e545afd06"},{url:"assets/QMarkupTable-LhTg9RbA.js",revision:"d57562f12dae9c4eccd80d8629316b00"},{url:"assets/QPage-BQRSUEjc.js",revision:"e9cf078757fdb35f50b717cef36c60de"},{url:"assets/QSelect-BI1pwFRM.js",revision:"3c899443bece97abd4cba877fc36b522"},{url:"assets/QSpace-QwOUZKnE.js",revision:"10be5b8c76185ec38d1cda09353da286"},{url:"assets/QTh-CpmdxOKW.js",revision:"16ea0ab3be227d72f03b6f675d35ccae"},{url:"assets/Reservas-Byns_XiM.js",revision:"f2ae48299720239ca2cbe1b31227d2bb"},{url:"assets/Reservas-D7eyImTk.css",revision:"ef5dc819c938b671871ed6e6d4264344"},{url:"assets/Usuarios-DbGCXMbj.js",revision:"ac78dc929f713ccb87df93a493c52a99"},{url:"assets/VentaAdd-Cq8fDYQP.js",revision:"facc713378df4661e100a0b48b1cd0a1"},{url:"assets/Ventas-u918k_95.js",revision:"b5e9a8860ca093b7ae5e45544d162b77"},{url:"bg.jpg",revision:"9191732a81145cb3d1cbce3679a458db"},{url:"favicon.ico",revision:"2ec35555ac18437c7dff09bbfcb23f8a"},{url:"icons/apple-icon-120x120.png",revision:"c084603d9625a3f33e054eca976b6153"},{url:"icons/apple-icon-152x152.png",revision:"0d8b8320e5b11c14ddd02b4c7a7ef193"},{url:"icons/apple-icon-167x167.png",revision:"bd97bbdeea018ea32f330b46e3c67d2a"},{url:"icons/apple-icon-180x180.png",revision:"730ca23ae27653492ab6152e2939a5f3"},{url:"icons/apple-launch-1080x2340.png",revision:"865f868c149707f7cfd0715f83d2fbd8"},{url:"icons/apple-launch-1125x2436.png",revision:"e2d2cfdd3a24aa2d6297be2e5044b6ef"},{url:"icons/apple-launch-1170x2532.png",revision:"9cac8825817b190c9da4085f885f3635"},{url:"icons/apple-launch-1179x2556.png",revision:"2f4b37dc806bf0d89d79b35d3cee8308"},{url:"icons/apple-launch-1242x2208.png",revision:"c1d24c517a804eacc1186986cb148869"},{url:"icons/apple-launch-1242x2688.png",revision:"4256e48408a1149caed740f01957251d"},{url:"icons/apple-launch-1284x2778.png",revision:"8ebe763f28743260bbb5ddf4af1e7597"},{url:"icons/apple-launch-1290x2796.png",revision:"45b11be3eea90580ba4d5717ce82dccf"},{url:"icons/apple-launch-1536x2048.png",revision:"9295d6965c6bb357703ab5c17f9de4e9"},{url:"icons/apple-launch-1620x2160.png",revision:"2b078ff62942d6f5fc19305c70150735"},{url:"icons/apple-launch-1668x2224.png",revision:"d89e1949f12a430717a420c65e71fb9f"},{url:"icons/apple-launch-1668x2388.png",revision:"97c564037a1ef22e19d1bd1293573a05"},{url:"icons/apple-launch-2048x2732.png",revision:"f7c8c0208999514547cf8986aa9bfeb8"},{url:"icons/apple-launch-750x1334.png",revision:"17d4f14c2ff747b64ba8c52ed20da66f"},{url:"icons/apple-launch-828x1792.png",revision:"6686bf42f5811f39cd074b04766c2ae4"},{url:"icons/favicon-128x128.png",revision:"fc8d7c90b256c3e0cd7766ef69a043ab"},{url:"icons/favicon-16x16.png",revision:"734e3d9ac6467d2ee4ca0f1522c9b428"},{url:"icons/favicon-32x32.png",revision:"2864266bed5fa444d72c6c54a604fdc4"},{url:"icons/favicon-96x96.png",revision:"643745518e50fa66595dd10b3cc96342"},{url:"icons/icon-128x128.png",revision:"fc8d7c90b256c3e0cd7766ef69a043ab"},{url:"icons/icon-192x192.png",revision:"bd93bc1eb8e39b3758d0b4134960e2d3"},{url:"icons/icon-256x256.png",revision:"3df95d4a8751d3a69a06079ce3b5c700"},{url:"icons/icon-384x384.png",revision:"3c8cc487aadd86bfc49a9404f3bca569"},{url:"icons/icon-512x512.png",revision:"c822ab4fbc8925edd1526467f25f2497"},{url:"icons/ms-icon-144x144.png",revision:"1a42edddb6fc8681c76f768737bf7d11"},{url:"icons/safari-pinned-tab.svg",revision:"0ed72dd8dcc8e3d2c6956b5b56cd5097"},{url:"index.html",revision:"4213c982c5c6730a8d27eb0cc6d18027"},{url:"logo.png",revision:"e9cb2d9f86d4c2cd8bfe8835c1d2b133"},{url:"logo1Old.png",revision:"157c9d458e689a01e1732d832c4f8fa0"},{url:"logoOld.png",revision:"25246375f87e8c85f5f645f0bdaeacf4"},{url:"manifest.json",revision:"9024afda40c9d373afee8641b958c839"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
