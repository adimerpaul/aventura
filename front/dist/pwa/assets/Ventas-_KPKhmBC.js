import{s as R,g as ot,r as g,l as it,a4 as P,o as C,a,b as i,w as d,Q as z,e as Q,aw as X,ap as A,f as E,c as w,a3 as B,Z as q,a2 as H,t as k,a0 as j,a1 as J,a5 as tt,a6 as st,h as nt}from"./index-CA1MPuH5.js";import{Q as et}from"./QSelect-C6Xfe84g.js";import{Q as at}from"./QForm-IUpnMKCy.js";import{c as Z,Q as G,a as L,b as F}from"./QList-Cv5DZRpc.js";import{Q as rt}from"./QChip-B5BDSPn6.js";import{Q as dt}from"./QMarkupTable-BBGNlyfr.js";import{Q as ct}from"./QPage-CK3pvUhf.js";import{Q as ut}from"./QSpace-D0jR5TXR.js";import{h as _}from"./moment-C5S46NFB.js";import"./format-B_bgxRV3.js";var $={},lt;function pt(){if(lt)return $;lt=1,Object.defineProperty($,"__esModule",{value:!0}),$.Printd=$.createIFrame=$.createLinkStyle=$.createStyle=void 0;var U=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,r=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,f=function(s){return U.test(s)||r.test(s)};function v(s,t){var n=s.createElement("style");return n.appendChild(s.createTextNode(t)),n}$.createStyle=v;function h(s,t){var n=s.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href=t,n}$.createLinkStyle=h;function x(s){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),s.appendChild(t),t}$.createIFrame=x;var c={parent:window.document.body,headElements:[],bodyElements:[]},m=function(){function s(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[c,t||{}].reduce(function(n,l){return Object.keys(l).forEach(function(p){return n[p]=l[p]}),n},{}),this.iframe=x(this.opts.parent)}return s.prototype.getIFrame=function(){return this.iframe},s.prototype.print=function(t,n,l,p){if(!this.isLoading){var Y=this.iframe,O=Y.contentDocument,V=Y.contentWindow;if(!(!O||!V)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=p;var y=V.document;y.open(),y.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var D=this.opts,I=D.headElements,T=D.bodyElements;Array.isArray(I)&&I.forEach(function(b){return y.head.appendChild(b)}),Array.isArray(T)&&T.forEach(function(b){return y.body.appendChild(b)}),Array.isArray(n)&&n.forEach(function(b){b&&y.head.appendChild(f(b)?h(y,b):v(y,b))}),y.body.appendChild(this.elCopy),Array.isArray(l)&&l.forEach(function(b){if(b){var M=y.createElement("script");f(b)?M.src=b:M.innerText=b,y.body.appendChild(M)}}),y.close()}}},s.prototype.printURL=function(t,n){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=n,this.iframe.src=t)},s.prototype.onBeforePrint=function(t){this.onbeforeprint=t},s.prototype.onAfterPrint=function(t){this.onafterprint=t},s.prototype.launchPrint=function(t){this.isLoading||t.print()},s.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var n=this.iframe.contentWindow;n&&(this.onbeforeprint&&n.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&n.addEventListener("afterprint",this.onafterprint))}},s.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var n=this.iframe,l=n.contentDocument,p=n.contentWindow;if(!l||!p)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(p)}}):this.launchPrint(p)}},s}();return $.Printd=m,$.default=m,$}var K=pt();class W{static imprimirSalas(r,f,v,h){let x='<table class="table">',c=0;r.forEach(t=>{x+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,c+=parseInt(t.total)}),x+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,x+="</table>";const m=`
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
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${_(f).format("DD/MM/YYYY")} - ${_(v).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${h}</div>
      <div><span class="text-bold">Salas:</span> ${x}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static imprimirProductos(r,f,v,h,x){let c='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',m=0;r.forEach(l=>{c+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${l.nombre}</td>
          <td class="text-right">${parseInt(l.precio).toFixed(2)}</td>
          <td class="text-right">${l.cantidad_total}</td>
          <td class="text-right">${(parseInt(l.precio)*parseInt(l.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,m+=parseInt(l.precio)*parseInt(l.cantidad_total)}),c+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${m.toFixed(2)}</td>
      </tr>
    `;let s='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>';x.forEach(l=>{s+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${l.nombre}</td>
          <td class="text-right">${parseInt(l.stock).toFixed(2)}</td>
          <td class="text-right"></td>
        </tr>
      `}),s+="</table></div>";const t=`
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
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${_(f).format("DD/MM/YYYY")} - ${_(v).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${h}</div>
      <div>${c}</div>
      <div>${s}</div
    </div>
    `;document.getElementById("myElement").innerHTML=t,new K.Printd().print(document.getElementById("myElement"))}static imprimirCaja(r,f,v,h){const x=r.cajas;let c="";x.forEach(t=>{c+=`
      <div>
        <div><span class="text-bold">Fecha Cierre:</span> ${_(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${t.observacion==null?"":t.observacion}</div>
      </div>
      `});const m=`
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
      <div class="text-right text-h6">Fecha: ${_(r.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${_(f).format("DD/MM/YYYY")} - ${_(v).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${h}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(r.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(r.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(r.ventas)+parseInt(r.reservas)).toFixed(2)}</div>
      <div><span class="text-bold">Cajas:</span> ${c}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static numeroALetras(r){if(r=parseInt(r),isNaN(r)||r<0||r>1e6)return"Número fuera de rango";const f=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],v=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],h={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},x=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function c(l){if(l<10)return f[l];if(l>=10&&l<20)return h[l];if(l<100){const Y=l%10;return`${v[Math.floor(l/10)]}${Y>0?" y "+f[Y]:""}`}if(l===100)return"cien";const p=l%100;return`${x[Math.floor(l/100)]}${p>0?" "+c(p):""}`}if(r===1e6)return"un millón";let m=Math.floor(r/1e3),s=r%1e3,t=m>0?m===1?"mil":`${c(m)} mil`:"",n=s>0?c(s):"";return(t+" "+n).trim()}}const ft={class:"row"},mt={class:"col-12 col-md-2"},vt={class:"col-12 col-md-2"},ht={class:"col-12 col-md-2 flex flex-center"},xt={class:"col-12 col-md-2"},bt={class:"col-12 col-md-2"},yt={class:"col-12 col-md-2 flex flex-center"},gt={class:"col-12 col-md-4"},$t={class:"col-12 col-md-2 flex flex-center"},_t={class:"col-12 col-md-2 flex flex-center"},Ct={class:"row"},Yt={class:"col-12 col-md-4 q-pa-xs"},kt={class:"text-weight-bold"},Et={class:"col-12 col-md-4 q-pa-xs"},wt={class:"text-weight-bold"},At={class:"col-12 col-md-4 q-pa-xs"},Lt={class:"text-weight-bold"},Ft={key:1},Nt={__name:"Ventas",setup(U){const{proxy:r}=ot(),f=g(_().format("YYYY-MM-DD")),v=g(_().format("YYYY-MM-DD")),h=g([]),x=g([]),c=g(!1),m=g(""),s=g([]),t=g(""),n=g("CAJA"),l=g(!1),p=g({}),Y=g([]),O=g(["CAJA","PRODUCTOS","SALA"]);it(()=>{N(),M(),V()});function V(){r.$axios.get("/productos").then(u=>{Y.value=u.data})}function y(){if(!t.value){r.$alert.error("Seleccione un usuario","Por favor");return}const u=s.value.find(e=>e.id===t.value);c.value=!0,r.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:f.value,fechaFin:v.value,reporte:n.value}).then(e=>{n.value==="CAJA"&&W.imprimirCaja(e.data,f.value,v.value,u.name),n.value==="PRODUCTOS"&&W.imprimirProductos(e.data,f.value,v.value,u.name,Y.value),n.value==="SALA"&&W.imprimirSalas(e.data,f.value,v.value,u.name)}).finally(()=>{c.value=!1})}function D(){l.value=!0,p.value={monto_inicial:0,monto_final:0,observacion:""}}function I(){c.value=!0,r.$axios.post("/cajas",p.value).then(u=>{l.value=!1,r.$alert.success("Registrado correctamente",u.data)}).finally(()=>{c.value=!1})}function T(){h.value=x.value.filter(u=>u.nombre.toLowerCase().includes(m.value.toLowerCase())||u.user?.name.toLowerCase().includes(m.value.toLowerCase())||u.detalleText.toLowerCase().includes(m.value.toLowerCase()))}function b(u){r.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{c.value=!0,r.$axios.put(`/ventas/${u}/anular`).then(()=>{N()}).finally(()=>{c.value=!1})})}function M(){r.$axios.get("/users").then(u=>{s.value=u.data})}function N(){c.value=!0,r.$axios.get("/ventas",{params:{fechaInicio:f.value,fechaFin:v.value}}).then(u=>{h.value=u.data,x.value=u.data}).finally(()=>{c.value=!1})}return(u,e)=>(C(),P(tt,null,[a(ct,{class:"q-pa-xs"},{default:d(()=>[a(z,{flat:"",bordered:""},{default:d(()=>[a(Q,{class:"q-pa-xs"},{default:d(()=>[a(at,{onSubmit:X(N,["prevent"])},{default:d(()=>[i("div",ft,[i("div",mt,[a(A,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=o=>f.value=o),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),i("div",vt,[a(A,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=o=>v.value=o),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ht,[a(E,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:c.value},null,8,["loading"])]),i("div",xt,[u.$store.user.role==="Admin"?(C(),w(et,{key:0,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value=o),label:"Usuario",outlined:"",dense:"",options:s.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])):B("",!0)]),i("div",bt,[u.$store.user.role==="Admin"?(C(),w(et,{key:0,modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),label:"Tipo Reporte",outlined:"",dense:"",options:O.value},null,8,["modelValue","options"])):B("",!0)]),i("div",yt,[u.$store.user.role==="Admin"?(C(),w(E,{key:0,style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:c.value,onClick:y},null,8,["loading"])):B("",!0)]),e[11]||(e[11]=i("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),i("div",gt,[a(A,{modelValue:m.value,"onUpdate:modelValue":[e[4]||(e[4]=o=>m.value=o),T],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),i("div",$t,[a(E,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=o=>u.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:c.value},null,8,["loading"])]),e[12]||(e[12]=i("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),i("div",_t,[a(E,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:D,"no-caps":"",icon:"point_of_sale",loading:c.value},null,8,["loading"])])])]),_:1}),i("div",Ct,[i("div",Yt,[a(Z,{bordered:"",padding:"",dense:""},{default:d(()=>[q((C(),w(G,{clickable:""},{default:d(()=>[a(L,{avatar:""},{default:d(()=>[a(H,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(L,null,{default:d(()=>[a(F,{lines:"1"},{default:d(()=>[i("span",kt,k(h.value.length)+" ventas ",1)]),_:1}),a(F,{caption:"",lines:"2"},{default:d(()=>e[13]||(e[13]=[j(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})]),i("div",Et,[a(Z,{bordered:"",padding:"",dense:""},{default:d(()=>[q((C(),w(G,{clickable:""},{default:d(()=>[a(L,{avatar:""},{default:d(()=>[a(H,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(L,null,{default:d(()=>[a(F,{lines:"1"},{default:d(()=>[i("span",wt," Bs "+k(h.value.filter(o=>!o.anulada).reduce((o,S)=>o+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(F,{caption:"",lines:"2"},{default:d(()=>e[14]||(e[14]=[j(" Total de reservas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})]),i("div",At,[a(Z,{bordered:"",padding:"",dense:""},{default:d(()=>[q((C(),w(G,{clickable:""},{default:d(()=>[a(L,{avatar:""},{default:d(()=>[a(H,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(L,null,{default:d(()=>[a(F,{lines:"1"},{default:d(()=>[i("span",Lt," Bs "+k(h.value.filter(o=>o.anulada).reduce((o,S)=>o+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(F,{caption:"",lines:"2"},{default:d(()=>e[15]||(e[15]=[j(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})])])]),_:1})]),_:1}),a(z,{flat:"",bordered:"",class:"q-mt-md"},{default:d(()=>[a(Q,null,{default:d(()=>[a(dt,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:d(()=>[e[16]||(e[16]=i("thead",null,[i("tr",null,[i("th",null,"Acciones"),i("th",null,"Fecha"),i("th",null,"Total"),i("th",null,"Nombre Cliente"),i("th",null,"Usuario"),i("th",null,"Detalle")])],-1)),i("tbody",null,[(C(!0),P(tt,null,st(h.value,o=>(C(),P("tr",{key:o.id},[i("td",null,[o.anulada?(C(),P("div",Ft,[a(rt,{color:"red","text-color":"white",label:"Anulada"})])):(C(),w(E,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:S=>b(o.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),i("td",null,k(o.fecha),1),i("td",null,k(o.total),1),i("td",null,k(o.nombre),1),i("td",null,k(o.user?.name),1),i("td",null,k(o.detalleText),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(nt,{modelValue:l.value,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value=o),persistent:""},{default:d(()=>[a(z,{flat:"",bordered:"",style:{width:"350px"}},{default:d(()=>[a(Q,{class:"row items-center q-pb-none"},{default:d(()=>[e[17]||(e[17]=i("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(ut),a(E,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=o=>l.value=!1)})]),_:1}),a(Q,null,{default:d(()=>[a(at,{onSubmit:X(I,["prevent"])},{default:d(()=>[a(A,{modelValue:p.value.monto_inicial,"onUpdate:modelValue":e[7]||(e[7]=o=>p.value.monto_inicial=o),label:"Monto Inicial",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{modelValue:p.value.monto_final,"onUpdate:modelValue":e[8]||(e[8]=o=>p.value.monto_final=o),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{type:"textarea",modelValue:p.value.observacion,"onUpdate:modelValue":e[9]||(e[9]=o=>p.value.observacion=o),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(E,{label:"Cerrar Caja",color:"red",type:"submit",loading:c.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[18]||(e[18]=i("div",{id:"myElement"},null,-1))],64))}};export{Nt as default};
