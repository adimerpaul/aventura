import{i as O,g as tt,r as y,V as et,a1 as I,o as C,a,b as o,w as r,Q as U,e as T,au as J,an as A,f as E,W as R,c as S,$ as z,t as $,Z as B,_ as N,a2 as G,a3 as at,h as lt}from"./index-BCEHSGBj.js";import{Q as W}from"./QSelect-MIwDrYF2.js";import{Q as K}from"./QForm-Dun49YRB.js";import{c as q,Q as H,a as M,b as V}from"./QList-DquoUKNy.js";import{Q as ot}from"./QChip-Dhh2cHiC.js";import{Q as it}from"./QMarkupTable-CgVrH0X8.js";import{Q as nt}from"./QPage-B9wyOFgf.js";import{Q as st}from"./QSpace-BXiu2jDa.js";import{h as _}from"./moment-C5S46NFB.js";import"./format-CPXK39VX.js";var g={},X;function rt(){if(X)return g;X=1,Object.defineProperty(g,"__esModule",{value:!0}),g.Printd=g.createIFrame=g.createLinkStyle=g.createStyle=void 0;var P=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,d=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,v=function(n){return P.test(n)||d.test(n)};function h(n,t){var i=n.createElement("style");return i.appendChild(n.createTextNode(t)),i}g.createStyle=h;function p(n,t){var i=n.createElement("link");return i.type="text/css",i.rel="stylesheet",i.href=t,i}g.createLinkStyle=p;function m(n){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),n.appendChild(t),t}g.createIFrame=m;var c={parent:window.document.body,headElements:[],bodyElements:[]},x=function(){function n(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[c,t||{}].reduce(function(i,u){return Object.keys(u).forEach(function(f){return i[f]=u[f]}),i},{}),this.iframe=m(this.opts.parent)}return n.prototype.getIFrame=function(){return this.iframe},n.prototype.print=function(t,i,u,f){if(!this.isLoading){var Y=this.iframe,Q=Y.contentDocument,k=Y.contentWindow;if(!(!Q||!k)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=f;var b=k.document;b.open(),b.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var D=this.opts,F=D.headElements,w=D.bodyElements;Array.isArray(F)&&F.forEach(function(s){return b.head.appendChild(s)}),Array.isArray(w)&&w.forEach(function(s){return b.body.appendChild(s)}),Array.isArray(i)&&i.forEach(function(s){s&&b.head.appendChild(v(s)?p(b,s):h(b,s))}),b.body.appendChild(this.elCopy),Array.isArray(u)&&u.forEach(function(s){if(s){var e=b.createElement("script");v(s)?e.src=s:e.innerText=s,b.body.appendChild(e)}}),b.close()}}},n.prototype.printURL=function(t,i){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=i,this.iframe.src=t)},n.prototype.onBeforePrint=function(t){this.onbeforeprint=t},n.prototype.onAfterPrint=function(t){this.onafterprint=t},n.prototype.launchPrint=function(t){this.isLoading||t.print()},n.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var i=this.iframe.contentWindow;i&&(this.onbeforeprint&&i.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&i.addEventListener("afterprint",this.onafterprint))}},n.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var i=this.iframe,u=i.contentDocument,f=i.contentWindow;if(!u||!f)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(f)}}):this.launchPrint(f)}},n}();return g.Printd=x,g.default=x,g}var j=rt();class Z{static imprimirSalas(d,v,h,p){let m='<table class="table">',c=0;d.forEach(t=>{m+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,c+=parseInt(t.total)}),m+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,m+="</table>";const x=`
    <style>
        .text-right {
            text-align: right;
        }
        .text-h6 {
            font-size: 10px;
        }
        .text-h5 {
            font-size: 12px;
        }
        .text-h4 {
            font-size: 14px;
        }
        .text-center {
            text-align: center;
        }
        .text-bold {
            font-weight: bold;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
        }
    </style>
    <div>
      <div class="text-right text-h6">Fecha: ${_().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${O().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${_(v).format("DD/MM/YYYY")} - ${_(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${p}</div>
      <div><span class="text-bold">Salas:</span> ${m}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=x,new j.Printd().print(document.getElementById("myElement"))}static imprimirProductos(d,v,h,p){let m='<div class="text-h5"><table class="table">',c=0;d.forEach(t=>{m+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td class="text-right">${parseInt(t.precio).toFixed(2)}</td>
          <td class="text-right">${t.cantidad_total}</td>
          <td class="text-right">${(parseInt(t.precio)*parseInt(t.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,c+=parseInt(t.precio)*parseInt(t.cantidad_total)}),m+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,m+="</table></div>";const x=`
    <style>
        .text-right {
            text-align: right;
        }
        .text-h6 {
            font-size: 10px;
        }
        .text-h5 {
            font-size: 12px;
        }
        .text-h4 {
            font-size: 14px;
        }
        .text-center {
            text-align: center;
        }
        .text-bold {
            font-weight: bold;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
        }
    </style>
    <div>
      <div class="text-right text-h6">Fecha: ${_().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${O().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${_(v).format("DD/MM/YYYY")} - ${_(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${p}</div>
      <div><span class="text-bold">Productos:</span> ${m}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=x,new j.Printd().print(document.getElementById("myElement"))}static imprimirCaja(d,v,h,p){const m=d.cajas;let c="";m.forEach(t=>{c+=`
      <div class="text-h5">
        <div><span class="text-bold">Fecha Cierre:</span> ${_(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${t.observacion}</div>
      </div>
      `});const x=`
    <style>
        .text-right {
            text-align: right;
        }
        .text-h6 {
            font-size: 10px;
        }
        .text-h5 {
            font-size: 12px;
        }
        .text-h4 {
            font-size: 14px;
        }
        .text-center {
            text-align: center;
        }
        .text-bold {
            font-weight: bold;
        }
    </style>
    <div>
      <div class="text-right text-h6">Fecha: ${_(d.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${O().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${_(v).format("DD/MM/YYYY")} - ${_(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${p}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(d.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(d.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(d.ventas)+parseInt(d.reservas)).toFixed(2)}</div>
      <div><span class="text-bold">Cajas:</span> ${c}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=x,new j.Printd().print(document.getElementById("myElement"))}static numeroALetras(d){if(d=parseInt(d),isNaN(d)||d<0||d>1e6)return"Número fuera de rango";const v=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],h=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],p={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},m=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function c(u){if(u<10)return v[u];if(u>=10&&u<20)return p[u];if(u<100){const Y=u%10;return`${h[Math.floor(u/10)]}${Y>0?" y "+v[Y]:""}`}if(u===100)return"cien";const f=u%100;return`${m[Math.floor(u/100)]}${f>0?" "+c(f):""}`}if(d===1e6)return"un millón";let x=Math.floor(d/1e3),n=d%1e3,t=x>0?x===1?"mil":`${c(x)} mil`:"",i=n>0?c(n):"";return(t+" "+i).trim()}}const dt={class:"row"},ct={class:"col-12 col-md-2"},ut={class:"col-12 col-md-2"},pt={class:"col-12 col-md-2 flex flex-center"},ft={class:"col-12 col-md-2"},vt={class:"col-12 col-md-2"},mt={class:"col-12 col-md-2 flex flex-center"},ht={class:"col-12 col-md-4"},xt={class:"col-12 col-md-2 flex flex-center"},bt={class:"col-12 col-md-2 flex flex-center"},yt={class:"row"},gt={class:"col-12 col-md-4 q-pa-xs"},_t={class:"text-weight-bold"},Ct={class:"col-12 col-md-4 q-pa-xs"},$t={class:"text-weight-bold"},Yt={class:"col-12 col-md-4 q-pa-xs"},Et={class:"text-weight-bold"},wt={key:1},Pt={__name:"Ventas",setup(P){const{proxy:d}=tt(),v=y(_().format("YYYY-MM-DD")),h=y(_().format("YYYY-MM-DD")),p=y([]),m=y([]),c=y(!1),x=y(""),n=y([]),t=y(""),i=y("SALA"),u=y(!1),f=y({}),Y=y(["CAJA","PRODUCTOS","SALA"]);et(()=>{w()});function Q(){if(!t.value){d.$alert.error("Seleccione un usuario","Error");return}const s=n.value.find(e=>e.id===t.value);c.value=!0,d.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:v.value,fechaFin:h.value,reporte:i.value}).then(e=>{i.value==="CAJA"&&Z.imprimirCaja(e.data,v.value,h.value,s.name),i.value==="PRODUCTOS"&&Z.imprimirProductos(e.data,v.value,h.value,s.name),i.value==="SALA"&&Z.imprimirSalas(e.data,v.value,h.value,s.name)}).finally(()=>{c.value=!1})}function k(){u.value=!0,f.value={monto_inicial:0,monto_final:0,observacion:""}}function b(){c.value=!0,d.$axios.post("/cajas",f.value).then(s=>{u.value=!1,d.$alert.success("Registrado correctamente",s.data)}).finally(()=>{c.value=!1})}function D(){p.value=m.value.filter(s=>s.nombre.toLowerCase().includes(x.value.toLowerCase())||s.user?.name.toLowerCase().includes(x.value.toLowerCase())||s.detalleText.toLowerCase().includes(x.value.toLowerCase()))}function F(s){d.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{c.value=!0,d.$axios.put(`/ventas/${s}/anular`).then(()=>{w()}).finally(()=>{c.value=!1})})}function w(){c.value=!0,d.$axios.get("/ventas",{params:{fechaInicio:v.value,fechaFin:h.value}}).then(s=>{p.value=s.data;for(let e of p.value)n.value.find(L=>L.id===e.user_id)||n.value.push({id:e.user_id,name:e.user?.name});p.value.length>0&&(t.value=p.value[0].user_id),m.value=s.data}).finally(()=>{c.value=!1})}return(s,e)=>(C(),I(G,null,[a(nt,{class:"q-pa-xs"},{default:r(()=>[a(U,{flat:"",bordered:""},{default:r(()=>[a(T,{class:"q-pa-xs"},{default:r(()=>[a(K,{onSubmit:J(w,["prevent"])},{default:r(()=>[o("div",dt,[o("div",ct,[a(A,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=l=>v.value=l),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),o("div",ut,[a(A,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=l=>h.value=l),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),o("div",pt,[a(E,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:c.value},null,8,["loading"])]),o("div",ft,[a(W,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),label:"Usuario",outlined:"",dense:"",options:n.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])]),o("div",vt,[a(W,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=l=>i.value=l),label:"Tipo Reporte",outlined:"",dense:"",options:Y.value},null,8,["modelValue","options"])]),o("div",mt,[a(E,{style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:c.value,onClick:Q},null,8,["loading"])]),e[11]||(e[11]=o("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),o("div",ht,[a(A,{modelValue:x.value,"onUpdate:modelValue":[e[4]||(e[4]=l=>x.value=l),D],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),o("div",xt,[a(E,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=l=>s.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:c.value},null,8,["loading"])]),e[12]||(e[12]=o("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),o("div",bt,[a(E,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:k,"no-caps":"",icon:"point_of_sale",loading:c.value},null,8,["loading"])])])]),_:1}),o("div",yt,[o("div",gt,[a(q,{bordered:"",padding:"",dense:""},{default:r(()=>[R((C(),S(H,{clickable:""},{default:r(()=>[a(M,{avatar:""},{default:r(()=>[a(z,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(M,null,{default:r(()=>[a(V,{lines:"1"},{default:r(()=>[o("span",_t,$(p.value.length)+" ventas ",1)]),_:1}),a(V,{caption:"",lines:"2"},{default:r(()=>e[13]||(e[13]=[B(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[N]])]),_:1})]),o("div",Ct,[a(q,{bordered:"",padding:"",dense:""},{default:r(()=>[R((C(),S(H,{clickable:""},{default:r(()=>[a(M,{avatar:""},{default:r(()=>[a(z,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(M,null,{default:r(()=>[a(V,{lines:"1"},{default:r(()=>[o("span",$t," Bs "+$(p.value.filter(l=>!l.anulada).reduce((l,L)=>l+parseFloat(L.total),0).toFixed(2)),1)]),_:1}),a(V,{caption:"",lines:"2"},{default:r(()=>e[14]||(e[14]=[B(" Total de reservas ")])),_:1})]),_:1})]),_:1})),[[N]])]),_:1})]),o("div",Yt,[a(q,{bordered:"",padding:"",dense:""},{default:r(()=>[R((C(),S(H,{clickable:""},{default:r(()=>[a(M,{avatar:""},{default:r(()=>[a(z,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(M,null,{default:r(()=>[a(V,{lines:"1"},{default:r(()=>[o("span",Et," Bs "+$(p.value.filter(l=>l.anulada).reduce((l,L)=>l+parseFloat(L.total),0).toFixed(2)),1)]),_:1}),a(V,{caption:"",lines:"2"},{default:r(()=>e[15]||(e[15]=[B(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[N]])]),_:1})])])]),_:1})]),_:1}),a(U,{flat:"",bordered:"",class:"q-mt-md"},{default:r(()=>[a(T,null,{default:r(()=>[a(it,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:r(()=>[e[16]||(e[16]=o("thead",null,[o("tr",null,[o("th",null,"Acciones"),o("th",null,"Fecha"),o("th",null,"Total"),o("th",null,"Nombre Cliente"),o("th",null,"Usuario"),o("th",null,"Detalle")])],-1)),o("tbody",null,[(C(!0),I(G,null,at(p.value,l=>(C(),I("tr",{key:l.id},[o("td",null,[l.anulada?(C(),I("div",wt,[a(ot,{color:"red","text-color":"white",label:"Anulada"})])):(C(),S(E,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:L=>F(l.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),o("td",null,$(l.fecha),1),o("td",null,$(l.total),1),o("td",null,$(l.nombre),1),o("td",null,$(l.user?.name),1),o("td",null,$(l.detalleText),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(lt,{modelValue:u.value,"onUpdate:modelValue":e[10]||(e[10]=l=>u.value=l),persistent:""},{default:r(()=>[a(U,{flat:"",bordered:"",style:{width:"350px"}},{default:r(()=>[a(T,{class:"row items-center q-pb-none"},{default:r(()=>[e[17]||(e[17]=o("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(st),a(E,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=l=>u.value=!1)})]),_:1}),a(T,null,{default:r(()=>[a(K,{onSubmit:J(b,["prevent"])},{default:r(()=>[a(A,{modelValue:f.value.monto_inicial,"onUpdate:modelValue":e[7]||(e[7]=l=>f.value.monto_inicial=l),label:"Monto Inicial",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{modelValue:f.value.monto_final,"onUpdate:modelValue":e[8]||(e[8]=l=>f.value.monto_final=l),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{type:"textarea",modelValue:f.value.observacion,"onUpdate:modelValue":e[9]||(e[9]=l=>f.value.observacion=l),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(E,{label:"Cerrar Caja",color:"red",type:"submit",loading:c.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[18]||(e[18]=o("div",{id:"myElement"},null,-1))],64))}};export{Pt as default};
