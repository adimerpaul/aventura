if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const d=e=>a(e,n),r={module:{uri:n},exports:f,require:d};s[n]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),f)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"providencia"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/axios-CKqI5u1g.css",revision:"f3eec5c8b864d3cad5bfed29b5185fb6"},{url:"assets/axios-YgSK3JkS.js",revision:"e5f5f22b87c79e8f934e14f4c759dd26"},{url:"assets/ClosePopup-nVQmPBQH.js",revision:"bb523c8898348992d627b8c18b6f96ab"},{url:"assets/ErrorNotFound-CYFbKbM5.js",revision:"ec1d86b73077836afb9fb31748ff221b"},{url:"assets/fa-brands-400-D_cYUPeE.woff2",revision:"cbcf42b2e9228a8f5bad42717d8a88db"},{url:"assets/fa-brands-400-D1LuMI3I.ttf",revision:"15d54d142da2f2d6f2e90ed1d55121af"},{url:"assets/fa-regular-400-BjRzuEpd.woff2",revision:"89672701a5874b80be27649e0494e354"},{url:"assets/fa-regular-400-DZaxPHgR.ttf",revision:"262525e2081311609d1fdab966c82bfc"},{url:"assets/fa-solid-900-CTAAxXor.woff2",revision:"4a6591ab5460ae5cbff1ecbd6e52193a"},{url:"assets/fa-solid-900-D0aA9rwL.ttf",revision:"269f971cec0d5dc864fe9ae080b19e23"},{url:"assets/fa-v4compatibility-C9RhG_FT.woff2",revision:"a772da7bff216cd36214bc44165bba3e"},{url:"assets/fa-v4compatibility-CCth-dXg.ttf",revision:"4ed293ceaca9b5b2d9cd74a477963fae"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format-DwSgTpKk.js",revision:"48516bd8246f797e139d8f9e698b7b5c"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg-DZhiGvEA.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY-BpWbwl2n.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index-CY5VhK_4.js",revision:"e3980002b95f0bb6e63c44d7035c17e2"},{url:"assets/index-Dy51zlJg.css",revision:"0a4d1ec3e4da2428c8296875bcc59d5e"},{url:"assets/IndexPage-BAHGTToH.js",revision:"fbad2ae0595a5a9a9e714b8bb1b8b0a6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/Lista-DK1VeekL.js",revision:"31e9160618405152705b3bd193e9384c"},{url:"assets/LoginPage-_n6m7Ilw.js",revision:"fe5a08fe63c6b7f20737b5625ca4a38c"},{url:"assets/LoginPage-B6Zw2dNd.css",revision:"887f8e61574852e2cdeb2b163d354932"},{url:"assets/MainLayout-CLohJEsW.js",revision:"300cfd59c9d3f03aed15502aac6fd32d"},{url:"assets/MainLayout-CtnXSZ-K.css",revision:"5b1ab2a2e620809962c90d18fe68b67c"},{url:"assets/Metricas-qYLKqnpL.js",revision:"d03e4a32f14594d7f2f0a9d8f96672c5"},{url:"assets/moment-C5S46NFB.js",revision:"ca3e70dacca8da605beb6efc0ed4bd74"},{url:"assets/Nunito-VariableFont_wght-D2sADkEI.ttf",revision:"ea0ad4c72a135f9a43ec7bb83f2469aa"},{url:"assets/Producto-CDen7NME.js",revision:"06de8254875a92edcd8b376e07eb9afe"},{url:"assets/QBtnDropdown-DSpJny57.js",revision:"6a4048b8c42c407aa5cbc151ed02f64a"},{url:"assets/QBtnGroup-BIdLrq3_.js",revision:"3c6477a0a7d34eec885a2655b3dce651"},{url:"assets/QChip-XsTbZiY1.js",revision:"824064c8c5fc27e0f58c846f99a71214"},{url:"assets/QForm-BWUYqdlr.js",revision:"966f6d80678d5d779e4b636d5a4fce81"},{url:"assets/QLayout-D5wLEsOE.js",revision:"387e318c317ca645e9f67ae2c77cd9dd"},{url:"assets/QList-CxtA7-a9.js",revision:"aaee9aa0d2e5028e273b873c4e2f5236"},{url:"assets/QMarkupTable-GNksAD2U.js",revision:"f4bc8399bdf39f0a2df6d6533b4a49ef"},{url:"assets/QPage-BjSq3l6J.js",revision:"88a58b639bfcf50ba399e8ad2bc79b1a"},{url:"assets/QSelect-BOVnSLmS.js",revision:"f8eeacccb057cf2c438bc49059fd6326"},{url:"assets/QSpace-B1jy978k.js",revision:"4d66e65084398ae90d3351c51a501915"},{url:"assets/QTh-zacvQ5PI.js",revision:"04ec820bacad05266cf74a3a61e5c21f"},{url:"assets/Reservas-D7AlGkqr.js",revision:"82110e4952e27c48e48182281fd6731c"},{url:"assets/Reservas-D7eyImTk.css",revision:"ef5dc819c938b671871ed6e6d4264344"},{url:"assets/Usuarios-BfCIKTZY.js",revision:"bfe6c86fe983f39083f3929ab26ac898"},{url:"assets/VentaAdd-DiVaLA6d.js",revision:"4f420a937ac333a1d9a50811f57bd064"},{url:"assets/Ventas-BuoXW6Fj.js",revision:"1fad6330df85f8b21ca3a0f20fd87fea"},{url:"bg.jpg",revision:"9191732a81145cb3d1cbce3679a458db"},{url:"favicon.ico",revision:"2ec35555ac18437c7dff09bbfcb23f8a"},{url:"icons/apple-icon-120x120.png",revision:"c084603d9625a3f33e054eca976b6153"},{url:"icons/apple-icon-152x152.png",revision:"0d8b8320e5b11c14ddd02b4c7a7ef193"},{url:"icons/apple-icon-167x167.png",revision:"bd97bbdeea018ea32f330b46e3c67d2a"},{url:"icons/apple-icon-180x180.png",revision:"730ca23ae27653492ab6152e2939a5f3"},{url:"icons/apple-launch-1080x2340.png",revision:"865f868c149707f7cfd0715f83d2fbd8"},{url:"icons/apple-launch-1125x2436.png",revision:"e2d2cfdd3a24aa2d6297be2e5044b6ef"},{url:"icons/apple-launch-1170x2532.png",revision:"9cac8825817b190c9da4085f885f3635"},{url:"icons/apple-launch-1179x2556.png",revision:"2f4b37dc806bf0d89d79b35d3cee8308"},{url:"icons/apple-launch-1242x2208.png",revision:"c1d24c517a804eacc1186986cb148869"},{url:"icons/apple-launch-1242x2688.png",revision:"4256e48408a1149caed740f01957251d"},{url:"icons/apple-launch-1284x2778.png",revision:"8ebe763f28743260bbb5ddf4af1e7597"},{url:"icons/apple-launch-1290x2796.png",revision:"45b11be3eea90580ba4d5717ce82dccf"},{url:"icons/apple-launch-1536x2048.png",revision:"9295d6965c6bb357703ab5c17f9de4e9"},{url:"icons/apple-launch-1620x2160.png",revision:"2b078ff62942d6f5fc19305c70150735"},{url:"icons/apple-launch-1668x2224.png",revision:"d89e1949f12a430717a420c65e71fb9f"},{url:"icons/apple-launch-1668x2388.png",revision:"97c564037a1ef22e19d1bd1293573a05"},{url:"icons/apple-launch-2048x2732.png",revision:"f7c8c0208999514547cf8986aa9bfeb8"},{url:"icons/apple-launch-750x1334.png",revision:"17d4f14c2ff747b64ba8c52ed20da66f"},{url:"icons/apple-launch-828x1792.png",revision:"6686bf42f5811f39cd074b04766c2ae4"},{url:"icons/favicon-128x128.png",revision:"fc8d7c90b256c3e0cd7766ef69a043ab"},{url:"icons/favicon-16x16.png",revision:"734e3d9ac6467d2ee4ca0f1522c9b428"},{url:"icons/favicon-32x32.png",revision:"2864266bed5fa444d72c6c54a604fdc4"},{url:"icons/favicon-96x96.png",revision:"643745518e50fa66595dd10b3cc96342"},{url:"icons/icon-128x128.png",revision:"fc8d7c90b256c3e0cd7766ef69a043ab"},{url:"icons/icon-192x192.png",revision:"bd93bc1eb8e39b3758d0b4134960e2d3"},{url:"icons/icon-256x256.png",revision:"3df95d4a8751d3a69a06079ce3b5c700"},{url:"icons/icon-384x384.png",revision:"3c8cc487aadd86bfc49a9404f3bca569"},{url:"icons/icon-512x512.png",revision:"c822ab4fbc8925edd1526467f25f2497"},{url:"icons/ms-icon-144x144.png",revision:"1a42edddb6fc8681c76f768737bf7d11"},{url:"icons/safari-pinned-tab.svg",revision:"0ed72dd8dcc8e3d2c6956b5b56cd5097"},{url:"index.html",revision:"8e559d73f195e702dd32298d08267024"},{url:"logo.png",revision:"e9cb2d9f86d4c2cd8bfe8835c1d2b133"},{url:"logo1Old.png",revision:"157c9d458e689a01e1732d832c4f8fa0"},{url:"logoOld.png",revision:"25246375f87e8c85f5f645f0bdaeacf4"},{url:"manifest.json",revision:"9024afda40c9d373afee8641b958c839"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
