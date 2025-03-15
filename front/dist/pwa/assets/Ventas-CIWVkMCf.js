import{s as R,g as lt,r as $,l as st,a4 as Q,o as k,a,b as l,w as n,Q as z,e as O,aw as X,ap as P,c as w,a3 as B,f as I,Z as q,a2 as j,t as F,a0 as H,a1 as G,a5 as tt,a6 as it,h as rt}from"./index-b2g0sqjI.js";import{Q as et}from"./QSelect-BUB02vKr.js";import{Q as at}from"./QForm-BcL_KyD8.js";import{c as J,Q as Z,a as T,b as M}from"./QList-BDQcQmyL.js";import{Q as dt}from"./QChip-Cn3oCSW5.js";import{Q as nt}from"./QMarkupTable-7GvYgFWW.js";import{Q as ct}from"./QPage-DfyhKIxz.js";import{Q as ut}from"./QSpace-BRebdimO.js";import{h as C}from"./moment-C5S46NFB.js";import"./format-BxD5oOQd.js";var _={},ot;function pt(){if(ot)return _;ot=1,Object.defineProperty(_,"__esModule",{value:!0}),_.Printd=_.createIFrame=_.createLinkStyle=_.createStyle=void 0;var U=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,s=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,f=function(d){return U.test(d)||s.test(d)};function h(d,t){var o=d.createElement("style");return o.appendChild(d.createTextNode(t)),o}_.createStyle=h;function b(d,t){var o=d.createElement("link");return o.type="text/css",o.rel="stylesheet",o.href=t,o}_.createLinkStyle=b;function g(d){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),d.appendChild(t),t}_.createIFrame=g;var u={parent:window.document.body,headElements:[],bodyElements:[]},m=function(){function d(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[u,t||{}].reduce(function(o,c){return Object.keys(c).forEach(function(v){return o[v]=c[v]}),o},{}),this.iframe=g(this.opts.parent)}return d.prototype.getIFrame=function(){return this.iframe},d.prototype.print=function(t,o,c,v){if(!this.isLoading){var y=this.iframe,A=y.contentDocument,E=y.contentWindow;if(!(!A||!E)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=v;var x=E.document;x.open(),x.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var Y=this.opts,L=Y.headElements,D=Y.bodyElements;Array.isArray(L)&&L.forEach(function(i){return x.head.appendChild(i)}),Array.isArray(D)&&D.forEach(function(i){return x.body.appendChild(i)}),Array.isArray(o)&&o.forEach(function(i){i&&x.head.appendChild(f(i)?b(x,i):h(x,i))}),x.body.appendChild(this.elCopy),Array.isArray(c)&&c.forEach(function(i){if(i){var V=x.createElement("script");f(i)?V.src=i:V.innerText=i,x.body.appendChild(V)}}),x.close()}}},d.prototype.printURL=function(t,o){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=o,this.iframe.src=t)},d.prototype.onBeforePrint=function(t){this.onbeforeprint=t},d.prototype.onAfterPrint=function(t){this.onafterprint=t},d.prototype.launchPrint=function(t){this.isLoading||t.print()},d.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var o=this.iframe.contentWindow;o&&(this.onbeforeprint&&o.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&o.addEventListener("afterprint",this.onafterprint))}},d.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var o=this.iframe,c=o.contentDocument,v=o.contentWindow;if(!c||!v)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(v)}}):this.launchPrint(v)}},d}();return _.Printd=m,_.default=m,_}var K=pt();class W{static imprimirSalas(s,f,h,b){let g='<table class="table">',u=0;s.forEach(t=>{g+=`
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
      <div class="text-right text-h6">Fecha: ${C().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div><span class="text-bold">Salas:</span> ${g}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static imprimirProductos(s,f,h,b,g){const u=s.productos;s.productosCombo;const m=s.productosGaseosa,d=s.productosPipoca,t=s.productosFrape;let o='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',c=0;u.forEach(i=>{o+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${parseInt(i.precio).toFixed(2)}</td>
          <td class="text-right">${i.cantidad_total}</td>
          <td class="text-right">${(parseInt(i.precio)*parseInt(i.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,c+=parseInt(i.precio)*parseInt(i.cantidad_total)}),o+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,o+="</table></div>";let v=0,y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';m.forEach(i=>{y+=`
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
    `,y+="</table></div>";let A=0,E='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';d.forEach(i=>{E+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${i.nombre}</td>
          <td class="text-right">${i.cantidad_total}</td>
        </tr>
        `,A+=parseInt(i.cantidad_total)}),E+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${A}</td>
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
      <div class="text-right text-h6">Fecha: ${C().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div>${o}</div>
      <div class="text-center">Gaseosas</div>
      <div>${y}</div>
      <div class="text-center">Pipocas</div>
      <div>${E}</div>
      <div class="text-center">Frape</div>
      <div>${Y}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=L,new K.Printd().print(document.getElementById("myElement"))}static imprimirCaja(s,f,h,b){const g=s.cajas;let u="<table>";g.forEach(t=>{u+=`
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${C(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
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
      <div class="text-right text-h6">Fecha: ${C(s.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(h).format("DD/MM/YYYY")}</div>
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
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static numeroALetras(s){if(s=parseInt(s),isNaN(s)||s<0||s>1e6)return"Número fuera de rango";const f=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],h=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],b={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},g=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function u(c){if(c<10)return f[c];if(c>=10&&c<20)return b[c];if(c<100){const y=c%10;return`${h[Math.floor(c/10)]}${y>0?" y "+f[y]:""}`}if(c===100)return"cien";const v=c%100;return`${g[Math.floor(c/100)]}${v>0?" "+u(v):""}`}if(s===1e6)return"un millón";let m=Math.floor(s/1e3),d=s%1e3,t=m>0?m===1?"mil":`${u(m)} mil`:"",o=d>0?u(d):"";return(t+" "+o).trim()}}const vt={class:"row"},ft={class:"col-12 col-md-2"},ht={class:"col-12 col-md-2"},mt={class:"col-12 col-md-2"},bt={class:"col-12 col-md-2 flex flex-center"},xt={class:"col-12 col-md-2"},gt={class:"col-12 col-md-2 flex flex-center"},yt={class:"col-12 col-md-4"},$t={class:"col-12 col-md-2 flex flex-center"},_t={class:"col-12 col-md-2 flex flex-center"},Ct={class:"row"},kt={class:"col-12 col-md-4 q-pa-xs"},Et={class:"text-weight-bold"},Yt={class:"col-12 col-md-4 q-pa-xs"},Ft={class:"text-weight-bold"},wt={class:"col-12 col-md-4 q-pa-xs"},It={class:"text-weight-bold"},At={key:1},Nt={__name:"Ventas",setup(U){const{proxy:s}=lt(),f=$(C().format("YYYY-MM-DD")),h=$(C().format("YYYY-MM-DD")),b=$([]),g=$([]),u=$(!1),m=$(""),d=$([]),t=$(""),o=$("CAJA"),c=$(!1),v=$({}),y=$([]),A=$(["CAJA","PRODUCTOS","SALA"]);st(()=>{N(),V(),E()});function E(){s.$axios.get("/productos").then(p=>{y.value=p.data})}function x(){if(!t.value){s.$alert.error("Seleccione un usuario","Por favor");return}const p=d.value.find(e=>e.id===t.value);u.value=!0,s.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:f.value,fechaFin:h.value,reporte:o.value}).then(e=>{o.value==="CAJA"&&W.imprimirCaja(e.data,f.value,h.value,p.name),o.value==="PRODUCTOS"&&W.imprimirProductos(e.data,f.value,h.value,p.name,y.value),o.value==="SALA"&&W.imprimirSalas(e.data,f.value,h.value,p.name)}).finally(()=>{u.value=!1})}function Y(){c.value=!0,v.value={monto_inicial:0,monto_final:0,observacion:""}}function L(){u.value=!0,s.$axios.post("/cajas",v.value).then(p=>{c.value=!1,s.$alert.success("Registrado correctamente",p.data)}).finally(()=>{u.value=!1})}function D(){b.value=g.value.filter(p=>p.nombre.toLowerCase().includes(m.value.toLowerCase())||p.user?.name.toLowerCase().includes(m.value.toLowerCase())||p.detalleText.toLowerCase().includes(m.value.toLowerCase()))}function i(p){s.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{u.value=!0,s.$axios.put(`/ventas/${p}/anular`).then(()=>{N()}).finally(()=>{u.value=!1})})}function V(){d.value=[{id:"",name:"Todos"}],s.$axios.get("/users").then(p=>{p.data.forEach(e=>{d.value.push({id:e.id,name:e.name})})})}function N(){u.value=!0,s.$axios.get("/ventas",{params:{fechaInicio:f.value,fechaFin:h.value,user_id:t.value}}).then(p=>{b.value=p.data,g.value=p.data}).finally(()=>{u.value=!1})}return(p,e)=>(k(),Q(tt,null,[a(ct,{class:"q-pa-xs"},{default:n(()=>[a(z,{flat:"",bordered:""},{default:n(()=>[a(O,{class:"q-pa-xs"},{default:n(()=>[a(at,{onSubmit:X(N,["prevent"])},{default:n(()=>[l("div",vt,[l("div",ft,[a(P,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=r=>f.value=r),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),l("div",ht,[a(P,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=r=>h.value=r),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),l("div",mt,[p.$store.user.role==="Admin"?(k(),w(et,{key:0,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value=r),label:"Usuario",outlined:"",dense:"",options:d.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])):B("",!0)]),l("div",bt,[a(I,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:u.value},null,8,["loading"])]),l("div",xt,[p.$store.user.role==="Admin"?(k(),w(et,{key:0,modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=r=>o.value=r),label:"Tipo Reporte",outlined:"",dense:"",options:A.value},null,8,["modelValue","options"])):B("",!0)]),l("div",gt,[p.$store.user.role==="Admin"?(k(),w(I,{key:0,style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:u.value,onClick:x},null,8,["loading"])):B("",!0)]),e[10]||(e[10]=l("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),l("div",yt,[a(P,{modelValue:m.value,"onUpdate:modelValue":[e[4]||(e[4]=r=>m.value=r),D],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),l("div",$t,[a(I,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=r=>p.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:u.value},null,8,["loading"])]),e[11]||(e[11]=l("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),l("div",_t,[a(I,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:Y,"no-caps":"",icon:"point_of_sale",loading:u.value},null,8,["loading"])])])]),_:1}),l("div",Ct,[l("div",kt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[l("span",Et,F(b.value.length)+" ventas ",1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[12]||(e[12]=[H(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})]),l("div",Yt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[l("span",Ft," Bs "+F(b.value.filter(r=>!r.anulada).reduce((r,S)=>r+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[13]||(e[13]=[H(" Total de reservas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})]),l("div",wt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),w(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(T,null,{default:n(()=>[a(M,{lines:"1"},{default:n(()=>[l("span",It," Bs "+F(b.value.filter(r=>r.anulada).reduce((r,S)=>r+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(M,{caption:"",lines:"2"},{default:n(()=>e[14]||(e[14]=[H(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})])])]),_:1})]),_:1}),a(z,{flat:"",bordered:"",class:"q-mt-md"},{default:n(()=>[a(O,null,{default:n(()=>[a(nt,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:n(()=>[e[15]||(e[15]=l("thead",null,[l("tr",null,[l("th",null,"Acciones"),l("th",null,"Fecha"),l("th",null,"Total"),l("th",null,"Nombre Cliente"),l("th",null,"Usuario"),l("th",null,"Detalle")])],-1)),l("tbody",null,[(k(!0),Q(tt,null,it(b.value,r=>(k(),Q("tr",{key:r.id},[l("td",null,[r.anulada?(k(),Q("div",At,[a(dt,{color:"red","text-color":"white",label:"Anulada"})])):(k(),w(I,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:S=>i(r.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),l("td",null,F(r.fecha),1),l("td",null,F(r.total),1),l("td",null,F(r.nombre),1),l("td",null,F(r.user?.name),1),l("td",null,F(r.detalleText),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(rt,{modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=r=>c.value=r),persistent:""},{default:n(()=>[a(z,{flat:"",bordered:"",style:{width:"350px"}},{default:n(()=>[a(O,{class:"row items-center q-pb-none"},{default:n(()=>[e[16]||(e[16]=l("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(ut),a(I,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=r=>c.value=!1)})]),_:1}),a(O,null,{default:n(()=>[a(at,{onSubmit:X(L,["prevent"])},{default:n(()=>[a(P,{modelValue:v.value.monto_final,"onUpdate:modelValue":e[7]||(e[7]=r=>v.value.monto_final=r),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(P,{type:"textarea",modelValue:v.value.observacion,"onUpdate:modelValue":e[8]||(e[8]=r=>v.value.observacion=r),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(I,{label:"Cerrar Caja",color:"red",type:"submit",loading:u.value,"no-caps":"",icon:"point_of_sale",class:"q-mt-md"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[17]||(e[17]=l("div",{id:"myElement"},null,-1))],64))}};export{Nt as default};
