import{s as z,g as lt,r as $,l as st,a4 as Q,o as _,a,b as o,w as n,Q as B,e as O,aw as X,ap as P,c as w,a3 as U,f as A,Z as q,a2 as j,t as F,a0 as H,a1 as G,a5 as tt,a6 as it,h as rt}from"./index-vlrXenVv.js";import{Q as et}from"./QSelect-CQEPE5Dc.js";import{Q as at}from"./QForm-CL57bwBn.js";import{d as J,Q as Z,a as T,b as M,c as dt}from"./QList-CDQxO38C.js";import{Q as nt}from"./QMarkupTable-DPZIPnYj.js";import{Q as ct}from"./QPage-Bd47H5bF.js";import{Q as ut}from"./QSpace-B_HaSr5B.js";import{h as k}from"./moment-C5S46NFB.js";import"./format-WhqnXv3i.js";var C={},ot;function pt(){if(ot)return C;ot=1,Object.defineProperty(C,"__esModule",{value:!0}),C.Printd=C.createIFrame=C.createLinkStyle=C.createStyle=void 0;var N=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,s=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,h=function(d){return N.test(d)||s.test(d)};function f(d,t){var l=d.createElement("style");return l.appendChild(d.createTextNode(t)),l}C.createStyle=f;function b(d,t){var l=d.createElement("link");return l.type="text/css",l.rel="stylesheet",l.href=t,l}C.createLinkStyle=b;function g(d){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),d.appendChild(t),t}C.createIFrame=g;var u={parent:window.document.body,headElements:[],bodyElements:[]},m=function(){function d(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[u,t||{}].reduce(function(l,c){return Object.keys(c).forEach(function(v){return l[v]=c[v]}),l},{}),this.iframe=g(this.opts.parent)}return d.prototype.getIFrame=function(){return this.iframe},d.prototype.print=function(t,l,c,v){if(!this.isLoading){var y=this.iframe,I=y.contentDocument,E=y.contentWindow;if(!(!I||!E)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=v;var x=E.document;x.open(),x.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var Y=this.opts,L=Y.headElements,D=Y.bodyElements;Array.isArray(L)&&L.forEach(function(i){return x.head.appendChild(i)}),Array.isArray(D)&&D.forEach(function(i){return x.body.appendChild(i)}),Array.isArray(l)&&l.forEach(function(i){i&&x.head.appendChild(h(i)?b(x,i):f(x,i))}),x.body.appendChild(this.elCopy),Array.isArray(c)&&c.forEach(function(i){if(i){var V=x.createElement("script");h(i)?V.src=i:V.innerText=i,x.body.appendChild(V)}}),x.close()}}},d.prototype.printURL=function(t,l){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=l,this.iframe.src=t)},d.prototype.onBeforePrint=function(t){this.onbeforeprint=t},d.prototype.onAfterPrint=function(t){this.onafterprint=t},d.prototype.launchPrint=function(t){this.isLoading||t.print()},d.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var l=this.iframe.contentWindow;l&&(this.onbeforeprint&&l.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&l.addEventListener("afterprint",this.onafterprint))}},d.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var l=this.iframe,c=l.contentDocument,v=l.contentWindow;if(!c||!v)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(v)}}):this.launchPrint(v)}},d}();return C.Printd=m,C.default=m,C}var K=pt();class W{static imprimirSalas(s,h,f,b){let g='<table class="table">',u=0;s.forEach(t=>{g+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,u+=parseInt(t.total)}),g+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${u.toFixed(2)}</td>
      </tr>
    `,g+="</table>";const m=`
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
      <div class="text-right text-h6">Fecha: ${k().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${z().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${k(h).format("DD/MM/YYYY")} - ${k(f).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div><span class="text-bold">Salas:</span> ${g}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static imprimirProductos(s,h,f,b,g){const u=s.productos;s.productosCombo;const m=s.productosGaseosa,d=s.productosPipoca,t=s.productosFrape;let l='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',c=0;u.forEach(i=>{l+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${parseInt(i.precio).toFixed(2)}</td>
          <td class="text-right">${i.cantidad_total}</td>
          <td class="text-right">${(parseInt(i.precio)*parseInt(i.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,c+=parseInt(i.precio)*parseInt(i.cantidad_total)}),l+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,l+="</table></div>";let v=0,y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';m.forEach(i=>{y+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${i.cantidad_total}</td>
        </tr>
        `,v+=parseInt(i.cantidad_total)}),y+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right text-bold">${v}</td>
      </tr>
    `,y+="</table></div>";let I=0,E='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';d.forEach(i=>{E+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${i.cantidad_total}</td>
        </tr>
        `,I+=parseInt(i.cantidad_total)}),E+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${I}</td>
      </tr>
      `,E+="</table></div>";let x=0,Y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';t.forEach(i=>{Y+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${i.cantidad_total}</td>
        </tr>
        `,x+=parseInt(i.cantidad_total)}),Y+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${x}</td>
      </tr>
      `,Y+="</table></div>";const L=`
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
      <div class="text-right text-h6">Fecha: ${k().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${z().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${k(h).format("DD/MM/YYYY")} - ${k(f).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div>${l}</div>
      <div class="text-center">Gaseosas</div>
      <div>${y}</div>
      <div class="text-center">Pipocas</div>
      <div>${E}</div>
      <div class="text-center">Frape</div>
      <div>${Y}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=L,new K.Printd().print(document.getElementById("myElement"))}static imprimirCaja(s,h,f,b){const g=s.cajas;let u="<table>";g.forEach(t=>{u+=`
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${k(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
<!--        <div><span class="text-bold">Total Reservas:</span> ${parseInt(t.monto_reserva).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Total Venta:</span> ${parseInt(t.monto_venta).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Monto Inicial:</span> ${parseInt(t.monto_inicial).toFixed(2)}</div>-->
        <div><span class="text-bold">Total:</span> ${parseInt(t.monto_caja).toFixed(2)}</div>
        <div><span class="text-bold">Monto Final:</span> ${parseInt(t.monto_final).toFixed(2)}</div>
<!--        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>-->
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
      <div class="text-right text-h6">Fecha: ${k(s.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${z().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${k(h).format("DD/MM/YYYY")} - ${k(f).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(s.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(s.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(s.ventas)+parseInt(s.reservas)).toFixed(2)}</div>
      <div>
      <span class="text-bold">Cajas:</span>
      <div>
      ${u}
      </div>
      </div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static numeroALetras(s){if(s=parseInt(s),isNaN(s)||s<0||s>1e6)return"Número fuera de rango";const h=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],f=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],b={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},g=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function u(c){if(c<10)return h[c];if(c>=10&&c<20)return b[c];if(c<100){const y=c%10;return`${f[Math.floor(c/10)]}${y>0?" y "+h[y]:""}`}if(c===100)return"cien";const v=c%100;return`${g[Math.floor(c/100)]}${v>0?" "+u(v):""}`}if(s===1e6)return"un millón";let m=Math.floor(s/1e3),d=s%1e3,t=m>0?m===1?"mil":`${u(m)} mil`:"",l=d>0?u(d):"";return(t+" "+l).trim()}}const vt={class:"row"},ht={class:"col-12 col-md-2"},ft={class:"col-12 col-md-2"},mt={class:"col-12 col-md-2"},bt={class:"col-12 col-md-2 flex flex-center"},xt={class:"col-12 col-md-2"},gt={class:"col-12 col-md-2 flex flex-center"},yt={class:"col-12 col-md-4"},$t={class:"col-12 col-md-2 flex flex-center"},_t={class:"col-12 col-md-2 flex flex-center"},Ct={class:"row"},kt={class:"col-12 col-md-4 q-pa-xs"},Et={class:"text-weight-bold"},Yt={class:"col-12 col-md-4 q-pa-xs"},Ft={class:"text-weight-bold"},wt={class:"col-12 col-md-4 q-pa-xs"},At={class:"text-weight-bold"},It={key:1},Lt={style:{"max-width":"200px","wrap-option":"wrap"}},Nt={__name:"Ventas",setup(N){const{proxy:s}=lt(),h=$(k().format("YYYY-MM-DD")),f=$(k().format("YYYY-MM-DD")),b=$([]),g=$([]),u=$(!1),m=$(""),d=$([]),t=$(""),l=$("CAJA"),c=$(!1),v=$({}),y=$([]),I=$(["CAJA","PRODUCTOS","SALA"]);st(()=>{R(),V(),E()});function E(){s.$axios.get("/productos").then(p=>{y.value=p.data})}function x(){if(!t.value){s.$alert.error("Seleccione un usuario","Por favor");return}const p=d.value.find(e=>e.id===t.value);u.value=!0,s.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:h.value,fechaFin:f.value,reporte:l.value}).then(e=>{l.value==="CAJA"&&W.imprimirCaja(e.data,h.value,f.value,p.name),l.value==="PRODUCTOS"&&W.imprimirProductos(e.data,h.value,f.value,p.name,y.value),l.value==="SALA"&&W.imprimirSalas(e.data,h.value,f.value,p.name)}).finally(()=>{u.value=!1})}function Y(){c.value=!0,v.value={monto_inicial:0,monto_final:0,observacion:""}}function L(){u.value=!0,s.$axios.post("/cajas",v.value).then(p=>{c.value=!1,s.$alert.success("Registrado correctamente",p.data)}).finally(()=>{u.value=!1})}function D(){b.value=g.value.filter(p=>p.nombre.toLowerCase().includes(m.value.toLowerCase())||p.user?.name.toLowerCase().includes(m.value.toLowerCase())||p.detalleText.toLowerCase().includes(m.value.toLowerCase()))}function i(p){s.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{u.value=!0,s.$axios.put(`/ventas/${p}/anular`).then(()=>{R()}).finally(()=>{u.value=!1})})}function V(){d.value=[{id:"",name:"Todos"}],s.$axios.get("/usersSucursal").then(p=>{p.data.forEach(e=>{d.value.push({id:e.id,name:e.name})})})}function R(){u.value=!0,s.$axios.get("/ventas",{params:{fechaInicio:h.value,fechaFin:f.value,user_id:t.value}}).then(p=>{b.value=p.data,g.value=p.data}).finally(()=>{u.value=!1})}return(p,e)=>(_(),Q(tt,null,[a(ct,{class:"q-pa-xs"},{default:n(()=>[a(B,{flat:"",bordered:""},{default:n(()=>[a(O,{class:"q-pa-xs"},{default:n(()=>[a(at,{onSubmit:X(R,["prevent"])},{default:n(()=>[o("div",vt,[o("div",ht,[a(P,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=r=>h.value=r),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),o("div",ft,[a(P,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=r=>f.value=r),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),o("div",mt,[p.$store.user.role==="Admin"?(_(),w(et,{key:0,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value=r),label:"Usuario",outlined:"",dense:"",options:d.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])):U("",!0)]),o("div",bt,[a(A,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:u.value},null,8,["loading"])]),o("div",xt,[p.$store.user.role==="Admin"?(_(),w(et,{key:0,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value=r),label:"Tipo Reporte",outlined:"",dense:"",options:I.value},null,8,["modelValue","options"])):U("",!0)]),o("div",gt,[p.$store.user.role==="Admin"?(_(),w(A,{key:0,style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:u.value,onClick:x},null,8,["loading"])):U("",!0)]),e[10]||(e[10]=o("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),o("div",yt,[a(P,{modelValue:m.value,"onUpdate:modelValue":[e[4]||(e[4]=r=>m.value=r),D],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),o("div",$t,[a(A,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=r=>p.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:u.value},null,8,["loading"])]),e[11]||(e[11]=o("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),o("div",_t,[a(A,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:Y,"no-caps":"",icon:"point_of_sale",loading:u.value},null,8,["loading"])])])]),_:1}),o("div",Ct,[o("div",kt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((_(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[o("span",Et,F(b.value.length)+" ventas ",1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[12]||(e[12]=[H(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})]),o("div",Yt,[p.$store.user.role==="Admin"?(_(),w(J,{key:0,bordered:"",padding:"",dense:""},{default:n(()=>[q((_(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[o("span",Ft," Bs "+F(b.value.filter(r=>!r.anulada).reduce((r,S)=>r+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[13]||(e[13]=[H(" Total de ventas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})):U("",!0)]),o("div",wt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((_(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[o("span",At," Bs "+F(b.value.filter(r=>r.anulada).reduce((r,S)=>r+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[14]||(e[14]=[H(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})])])]),_:1})]),_:1}),a(B,{flat:"",bordered:"",class:"q-mt-md"},{default:n(()=>[a(O,null,{default:n(()=>[a(nt,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:n(()=>[e[15]||(e[15]=o("thead",null,[o("tr",null,[o("th",null,"Acciones"),o("th",null,"Fecha"),o("th",null,"Total"),o("th",null,"Nombre Cliente"),o("th",null,"Usuario"),o("th",null,"Detalle"),o("th",null,"Agencia")])],-1)),o("tbody",null,[(_(!0),Q(tt,null,it(b.value,r=>(_(),Q("tr",{key:r.id},[o("td",null,[r.anulada?(_(),Q("div",It,[a(dt,{color:"red","text-color":"white",label:"Anulada"})])):(_(),w(A,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:S=>i(r.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),o("td",null,F(r.fecha),1),o("td",null,F(r.total),1),o("td",null,F(r.nombre),1),o("td",null,F(r.user?.name),1),o("td",null,[o("div",Lt,F(r.detalleText),1)]),o("td",null,F(r.agencia),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(rt,{modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=r=>c.value=r),persistent:""},{default:n(()=>[a(B,{flat:"",bordered:"",style:{width:"350px"}},{default:n(()=>[a(O,{class:"row items-center q-pb-none"},{default:n(()=>[e[16]||(e[16]=o("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(ut),a(A,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=r=>c.value=!1)})]),_:1}),a(O,null,{default:n(()=>[a(at,{onSubmit:X(L,["prevent"])},{default:n(()=>[a(P,{modelValue:v.value.monto_final,"onUpdate:modelValue":e[7]||(e[7]=r=>v.value.monto_final=r),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(P,{type:"textarea",modelValue:v.value.observacion,"onUpdate:modelValue":e[8]||(e[8]=r=>v.value.observacion=r),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(A,{label:"Cerrar Caja",color:"red",type:"submit",loading:u.value,"no-caps":"",icon:"point_of_sale",class:"q-mt-md"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[17]||(e[17]=o("div",{id:"myElement"},null,-1))],64))}};export{Nt as default};
