import{s as R,g as lt,r as $,l as st,a4 as Q,o as Y,a,b as s,w as r,Q as z,e as U,aw as X,ap as F,f as A,c as w,a3 as B,Z as q,a2 as H,t as E,a0 as j,a1 as J,a5 as tt,a6 as it,h as nt}from"./index-C7TDVlhA.js";import{Q as et}from"./QSelect-Cy2My03Q.js";import{Q as at}from"./QForm-PMUZoa6V.js";import{c as Z,Q as G,a as L,b as I}from"./QList-DGWfZa6K.js";import{Q as rt}from"./QChip-c-zzsv59.js";import{Q as dt}from"./QMarkupTable-DxRm-XRG.js";import{Q as ct}from"./QPage-BljVUeCH.js";import{Q as ut}from"./QSpace-BcvqI9OC.js";import{h as C}from"./moment-C5S46NFB.js";import"./format-NdAOG4oG.js";var _={},ot;function pt(){if(ot)return _;ot=1,Object.defineProperty(_,"__esModule",{value:!0}),_.Printd=_.createIFrame=_.createLinkStyle=_.createStyle=void 0;var O=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,i=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,f=function(n){return O.test(n)||i.test(n)};function m(n,t){var o=n.createElement("style");return o.appendChild(n.createTextNode(t)),o}_.createStyle=m;function v(n,t){var o=n.createElement("link");return o.type="text/css",o.rel="stylesheet",o.href=t,o}_.createLinkStyle=v;function b(n){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),n.appendChild(t),t}_.createIFrame=b;var d={parent:window.document.body,headElements:[],bodyElements:[]},h=function(){function n(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[d,t||{}].reduce(function(o,c){return Object.keys(c).forEach(function(p){return o[p]=c[p]}),o},{}),this.iframe=b(this.opts.parent)}return n.prototype.getIFrame=function(){return this.iframe},n.prototype.print=function(t,o,c,p){if(!this.isLoading){var k=this.iframe,x=k.contentDocument,V=k.contentWindow;if(!(!x||!V)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=p;var y=V.document;y.open(),y.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var D=this.opts,T=D.headElements,P=D.bodyElements;Array.isArray(T)&&T.forEach(function(g){return y.head.appendChild(g)}),Array.isArray(P)&&P.forEach(function(g){return y.body.appendChild(g)}),Array.isArray(o)&&o.forEach(function(g){g&&y.head.appendChild(f(g)?v(y,g):m(y,g))}),y.body.appendChild(this.elCopy),Array.isArray(c)&&c.forEach(function(g){if(g){var M=y.createElement("script");f(g)?M.src=g:M.innerText=g,y.body.appendChild(M)}}),y.close()}}},n.prototype.printURL=function(t,o){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=o,this.iframe.src=t)},n.prototype.onBeforePrint=function(t){this.onbeforeprint=t},n.prototype.onAfterPrint=function(t){this.onafterprint=t},n.prototype.launchPrint=function(t){this.isLoading||t.print()},n.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var o=this.iframe.contentWindow;o&&(this.onbeforeprint&&o.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&o.addEventListener("afterprint",this.onafterprint))}},n.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var o=this.iframe,c=o.contentDocument,p=o.contentWindow;if(!c||!p)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(p)}}):this.launchPrint(p)}},n}();return _.Printd=h,_.default=h,_}var K=pt();class W{static imprimirSalas(i,f,m,v){let b='<table class="table">',d=0;i.forEach(t=>{b+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,d+=parseInt(t.total)}),b+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${d.toFixed(2)}</td>
      </tr>
    `,b+="</table>";const h=`
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
      <div class="text-right text-h6">Fecha: ${C().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(m).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div><span class="text-bold">Salas:</span> ${b}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=h,new K.Printd().print(document.getElementById("myElement"))}static imprimirProductos(i,f,m,v,b){const d=i.productos,h=i.productosCombo;let n='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',t=0;d.forEach(x=>{n+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${x.nombre}</td>
          <td class="text-right">${parseInt(x.precio).toFixed(2)}</td>
          <td class="text-right">${x.cantidad_total}</td>
          <td class="text-right">${(parseInt(x.precio)*parseInt(x.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,t+=parseInt(x.precio)*parseInt(x.cantidad_total)}),n+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${t.toFixed(2)}</td>
      </tr>
    `;let o='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',c=0;h.forEach(x=>{o+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${x.nombre}</td>
          <td class="text-right">${parseInt(x.precio).toFixed(2)}</td>
          <td class="text-right">${x.cantidad_total}</td>
<!--          <td class="text-right">${(parseInt(x.precio)*parseInt(x.cantidad_total)).toFixed(2)}</td>-->
          <td class="text-right">${0 .toFixed(2)}</td>
        </tr>
      `}),o+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,o+="</table></div>";const p=`
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
      <div class="text-right text-h6">Fecha: ${C().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(m).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div>${n}</div>
      <div>${o}</div
    </div>
    `;document.getElementById("myElement").innerHTML=p,new K.Printd().print(document.getElementById("myElement"))}static imprimirCaja(i,f,m,v){const b=i.cajas;let d="";b.forEach(t=>{d+=`
      <div>
        <div><span class="text-bold">Fecha Cierre:</span> ${C(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${t.observacion==null?"":t.observacion}</div>
      </div>
      `});const h=`
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
      <div class="text-right text-h6">Fecha: ${C(i.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(m).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(i.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(i.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(i.ventas)+parseInt(i.reservas)).toFixed(2)}</div>
      <div><span class="text-bold">Cajas:</span> ${d}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=h,new K.Printd().print(document.getElementById("myElement"))}static numeroALetras(i){if(i=parseInt(i),isNaN(i)||i<0||i>1e6)return"Número fuera de rango";const f=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],m=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],v={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},b=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function d(c){if(c<10)return f[c];if(c>=10&&c<20)return v[c];if(c<100){const k=c%10;return`${m[Math.floor(c/10)]}${k>0?" y "+f[k]:""}`}if(c===100)return"cien";const p=c%100;return`${b[Math.floor(c/100)]}${p>0?" "+d(p):""}`}if(i===1e6)return"un millón";let h=Math.floor(i/1e3),n=i%1e3,t=h>0?h===1?"mil":`${d(h)} mil`:"",o=n>0?d(n):"";return(t+" "+o).trim()}}const ft={class:"row"},mt={class:"col-12 col-md-2"},ht={class:"col-12 col-md-2"},vt={class:"col-12 col-md-2 flex flex-center"},xt={class:"col-12 col-md-2"},bt={class:"col-12 col-md-2"},gt={class:"col-12 col-md-2 flex flex-center"},yt={class:"col-12 col-md-4"},$t={class:"col-12 col-md-2 flex flex-center"},_t={class:"col-12 col-md-2 flex flex-center"},Ct={class:"row"},Yt={class:"col-12 col-md-4 q-pa-xs"},kt={class:"text-weight-bold"},Et={class:"col-12 col-md-4 q-pa-xs"},At={class:"text-weight-bold"},wt={class:"col-12 col-md-4 q-pa-xs"},Ft={class:"text-weight-bold"},Lt={key:1},Nt={__name:"Ventas",setup(O){const{proxy:i}=lt(),f=$(C().format("YYYY-MM-DD")),m=$(C().format("YYYY-MM-DD")),v=$([]),b=$([]),d=$(!1),h=$(""),n=$([]),t=$(""),o=$("CAJA"),c=$(!1),p=$({}),k=$([]),x=$(["CAJA","PRODUCTOS","SALA"]);st(()=>{N(),M(),V()});function V(){i.$axios.get("/productos").then(u=>{k.value=u.data})}function y(){if(!t.value){i.$alert.error("Seleccione un usuario","Por favor");return}const u=n.value.find(e=>e.id===t.value);d.value=!0,i.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:f.value,fechaFin:m.value,reporte:o.value}).then(e=>{o.value==="CAJA"&&W.imprimirCaja(e.data,f.value,m.value,u.name),o.value==="PRODUCTOS"&&W.imprimirProductos(e.data,f.value,m.value,u.name,k.value),o.value==="SALA"&&W.imprimirSalas(e.data,f.value,m.value,u.name)}).finally(()=>{d.value=!1})}function D(){c.value=!0,p.value={monto_inicial:0,monto_final:0,observacion:""}}function T(){d.value=!0,i.$axios.post("/cajas",p.value).then(u=>{c.value=!1,i.$alert.success("Registrado correctamente",u.data)}).finally(()=>{d.value=!1})}function P(){v.value=b.value.filter(u=>u.nombre.toLowerCase().includes(h.value.toLowerCase())||u.user?.name.toLowerCase().includes(h.value.toLowerCase())||u.detalleText.toLowerCase().includes(h.value.toLowerCase()))}function g(u){i.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{d.value=!0,i.$axios.put(`/ventas/${u}/anular`).then(()=>{N()}).finally(()=>{d.value=!1})})}function M(){i.$axios.get("/users").then(u=>{n.value=u.data})}function N(){d.value=!0,i.$axios.get("/ventas",{params:{fechaInicio:f.value,fechaFin:m.value}}).then(u=>{v.value=u.data,b.value=u.data}).finally(()=>{d.value=!1})}return(u,e)=>(Y(),Q(tt,null,[a(ct,{class:"q-pa-xs"},{default:r(()=>[a(z,{flat:"",bordered:""},{default:r(()=>[a(U,{class:"q-pa-xs"},{default:r(()=>[a(at,{onSubmit:X(N,["prevent"])},{default:r(()=>[s("div",ft,[s("div",mt,[a(F,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=l=>f.value=l),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),s("div",ht,[a(F,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),s("div",vt,[a(A,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:d.value},null,8,["loading"])]),s("div",xt,[u.$store.user.role==="Admin"?(Y(),w(et,{key:0,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),label:"Usuario",outlined:"",dense:"",options:n.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])):B("",!0)]),s("div",bt,[u.$store.user.role==="Admin"?(Y(),w(et,{key:0,modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),label:"Tipo Reporte",outlined:"",dense:"",options:x.value},null,8,["modelValue","options"])):B("",!0)]),s("div",gt,[u.$store.user.role==="Admin"?(Y(),w(A,{key:0,style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:d.value,onClick:y},null,8,["loading"])):B("",!0)]),e[11]||(e[11]=s("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),s("div",yt,[a(F,{modelValue:h.value,"onUpdate:modelValue":[e[4]||(e[4]=l=>h.value=l),P],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),s("div",$t,[a(A,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=l=>u.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:d.value},null,8,["loading"])]),e[12]||(e[12]=s("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),s("div",_t,[a(A,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:D,"no-caps":"",icon:"point_of_sale",loading:d.value},null,8,["loading"])])])]),_:1}),s("div",Ct,[s("div",Yt,[a(Z,{bordered:"",padding:"",dense:""},{default:r(()=>[q((Y(),w(G,{clickable:""},{default:r(()=>[a(L,{avatar:""},{default:r(()=>[a(H,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(L,null,{default:r(()=>[a(I,{lines:"1"},{default:r(()=>[s("span",kt,E(v.value.length)+" ventas ",1)]),_:1}),a(I,{caption:"",lines:"2"},{default:r(()=>e[13]||(e[13]=[j(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})]),s("div",Et,[a(Z,{bordered:"",padding:"",dense:""},{default:r(()=>[q((Y(),w(G,{clickable:""},{default:r(()=>[a(L,{avatar:""},{default:r(()=>[a(H,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(L,null,{default:r(()=>[a(I,{lines:"1"},{default:r(()=>[s("span",At," Bs "+E(v.value.filter(l=>!l.anulada).reduce((l,S)=>l+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(I,{caption:"",lines:"2"},{default:r(()=>e[14]||(e[14]=[j(" Total de reservas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})]),s("div",wt,[a(Z,{bordered:"",padding:"",dense:""},{default:r(()=>[q((Y(),w(G,{clickable:""},{default:r(()=>[a(L,{avatar:""},{default:r(()=>[a(H,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(L,null,{default:r(()=>[a(I,{lines:"1"},{default:r(()=>[s("span",Ft," Bs "+E(v.value.filter(l=>l.anulada).reduce((l,S)=>l+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(I,{caption:"",lines:"2"},{default:r(()=>e[15]||(e[15]=[j(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[J]])]),_:1})])])]),_:1})]),_:1}),a(z,{flat:"",bordered:"",class:"q-mt-md"},{default:r(()=>[a(U,null,{default:r(()=>[a(dt,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:r(()=>[e[16]||(e[16]=s("thead",null,[s("tr",null,[s("th",null,"Acciones"),s("th",null,"Fecha"),s("th",null,"Total"),s("th",null,"Nombre Cliente"),s("th",null,"Usuario"),s("th",null,"Detalle")])],-1)),s("tbody",null,[(Y(!0),Q(tt,null,it(v.value,l=>(Y(),Q("tr",{key:l.id},[s("td",null,[l.anulada?(Y(),Q("div",Lt,[a(rt,{color:"red","text-color":"white",label:"Anulada"})])):(Y(),w(A,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:S=>g(l.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),s("td",null,E(l.fecha),1),s("td",null,E(l.total),1),s("td",null,E(l.nombre),1),s("td",null,E(l.user?.name),1),s("td",null,E(l.detalleText),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(nt,{modelValue:c.value,"onUpdate:modelValue":e[10]||(e[10]=l=>c.value=l),persistent:""},{default:r(()=>[a(z,{flat:"",bordered:"",style:{width:"350px"}},{default:r(()=>[a(U,{class:"row items-center q-pb-none"},{default:r(()=>[e[17]||(e[17]=s("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(ut),a(A,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=l=>c.value=!1)})]),_:1}),a(U,null,{default:r(()=>[a(at,{onSubmit:X(T,["prevent"])},{default:r(()=>[a(F,{modelValue:p.value.monto_inicial,"onUpdate:modelValue":e[7]||(e[7]=l=>p.value.monto_inicial=l),label:"Monto Inicial",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(F,{modelValue:p.value.monto_final,"onUpdate:modelValue":e[8]||(e[8]=l=>p.value.monto_final=l),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(F,{type:"textarea",modelValue:p.value.observacion,"onUpdate:modelValue":e[9]||(e[9]=l=>p.value.observacion=l),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{label:"Cerrar Caja",color:"red",type:"submit",loading:d.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[18]||(e[18]=s("div",{id:"myElement"},null,-1))],64))}};export{Nt as default};
