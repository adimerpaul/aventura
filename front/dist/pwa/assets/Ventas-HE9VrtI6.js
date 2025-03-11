import{s as R,g as lt,r as $,l as st,a4 as Q,o as k,a,b as s,w as n,Q as z,e as U,aw as X,ap as M,c as I,a3 as B,f as w,Z as q,a2 as j,t as F,a0 as H,a1 as G,a5 as tt,a6 as it,h as rt}from"./index-CZFE6UgH.js";import{Q as et}from"./QSelect-CS9ZouKa.js";import{Q as at}from"./QForm-DDtxcMLv.js";import{c as J,Q as Z,a as T,b as V}from"./QList-f7krN1WU.js";import{Q as dt}from"./QChip-DxsUiBZo.js";import{Q as nt}from"./QMarkupTable-CQIEHrXa.js";import{Q as ct}from"./QPage-Dhn9d1Kv.js";import{Q as ut}from"./QSpace-DaS5WRS5.js";import{h as C}from"./moment-C5S46NFB.js";import"./format-Ys_cSTZD.js";var _={},ot;function pt(){if(ot)return _;ot=1,Object.defineProperty(_,"__esModule",{value:!0}),_.Printd=_.createIFrame=_.createLinkStyle=_.createStyle=void 0;var O=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,i=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,f=function(d){return O.test(d)||i.test(d)};function h(d,t){var o=d.createElement("style");return o.appendChild(d.createTextNode(t)),o}_.createStyle=h;function b(d,t){var o=d.createElement("link");return o.type="text/css",o.rel="stylesheet",o.href=t,o}_.createLinkStyle=b;function g(d){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),d.appendChild(t),t}_.createIFrame=g;var u={parent:window.document.body,headElements:[],bodyElements:[]},m=function(){function d(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[u,t||{}].reduce(function(o,c){return Object.keys(c).forEach(function(p){return o[p]=c[p]}),o},{}),this.iframe=g(this.opts.parent)}return d.prototype.getIFrame=function(){return this.iframe},d.prototype.print=function(t,o,c,p){if(!this.isLoading){var y=this.iframe,A=y.contentDocument,E=y.contentWindow;if(!(!A||!E)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=p;var x=E.document;x.open(),x.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var Y=this.opts,L=Y.headElements,D=Y.bodyElements;Array.isArray(L)&&L.forEach(function(r){return x.head.appendChild(r)}),Array.isArray(D)&&D.forEach(function(r){return x.body.appendChild(r)}),Array.isArray(o)&&o.forEach(function(r){r&&x.head.appendChild(f(r)?b(x,r):h(x,r))}),x.body.appendChild(this.elCopy),Array.isArray(c)&&c.forEach(function(r){if(r){var P=x.createElement("script");f(r)?P.src=r:P.innerText=r,x.body.appendChild(P)}}),x.close()}}},d.prototype.printURL=function(t,o){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=o,this.iframe.src=t)},d.prototype.onBeforePrint=function(t){this.onbeforeprint=t},d.prototype.onAfterPrint=function(t){this.onafterprint=t},d.prototype.launchPrint=function(t){this.isLoading||t.print()},d.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var o=this.iframe.contentWindow;o&&(this.onbeforeprint&&o.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&o.addEventListener("afterprint",this.onafterprint))}},d.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var o=this.iframe,c=o.contentDocument,p=o.contentWindow;if(!c||!p)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(p)}}):this.launchPrint(p)}},d}();return _.Printd=m,_.default=m,_}var K=pt();class W{static imprimirSalas(i,f,h,b){let g='<table class="table">',u=0;i.forEach(t=>{g+=`
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
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static imprimirProductos(i,f,h,b,g){const u=i.productos;i.productosCombo;const m=i.productosGaseosa,d=i.productosPipoca,t=i.productosFrape;let o='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',c=0;u.forEach(r=>{o+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${r.nombre}</td>
          <td class="text-right">${parseInt(r.precio).toFixed(2)}</td>
          <td class="text-right">${r.cantidad_total}</td>
          <td class="text-right">${(parseInt(r.precio)*parseInt(r.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,c+=parseInt(r.precio)*parseInt(r.cantidad_total)}),o+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,o+="</table></div>";let p=0,y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';m.forEach(r=>{y+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${r.nombre}</td>
          <td class="text-right">${r.cantidad_total}</td>
        </tr>
        `,p+=parseInt(r.cantidad_total)}),y+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right text-bold">${p}</td>
      </tr>
    `,y+="</table></div>";let A=0,E='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';d.forEach(r=>{E+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${r.nombre}</td>
          <td class="text-right">${r.cantidad_total}</td>
        </tr>
        `,A+=parseInt(r.cantidad_total)}),E+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${A}</td>
      </tr>
      `,E+="</table></div>";let x=0,Y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';t.forEach(r=>{Y+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${r.nombre}</td>
          <td class="text-right">${r.cantidad_total}</td>
        </tr>
        `,x+=parseInt(r.cantidad_total)}),Y+=`
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
    `;document.getElementById("myElement").innerHTML=L,new K.Printd().print(document.getElementById("myElement"))}static imprimirCaja(i,f,h,b){const g=i.cajas;let u="<table>";g.forEach(t=>{u+=`
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${C(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
        <div><span class="text-bold">Monto Inicial:</span> ${parseInt(t.monto_inicial).toFixed(2)}</div>
        <div><span class="text-bold">Monto Final:</span> ${parseInt(t.monto_final).toFixed(2)}</div>
        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Total:</span> ${parseInt(t.monto_caja).toFixed(2)}</div>
        <div><span class="text-bold">Total Reservas:</span> ${parseInt(t.monto_reserva).toFixed(2)}</div>
        <div><span class="text-bold">Total Venta:</span> ${parseInt(t.monto_venta).toFixed(2)}</div>
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
      <div class="text-right text-h6">Fecha: ${C(i.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${R().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${C(f).format("DD/MM/YYYY")} - ${C(h).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${b}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(i.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(i.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(i.ventas)+parseInt(i.reservas)).toFixed(2)}</div>
      <div>
      <span class="text-bold">Cajas:</span>
      <div>
      ${u}
      </div>
      </div>
    </div>
    `;document.getElementById("myElement").innerHTML=m,new K.Printd().print(document.getElementById("myElement"))}static numeroALetras(i){if(i=parseInt(i),isNaN(i)||i<0||i>1e6)return"Número fuera de rango";const f=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],h=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],b={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},g=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function u(c){if(c<10)return f[c];if(c>=10&&c<20)return b[c];if(c<100){const y=c%10;return`${h[Math.floor(c/10)]}${y>0?" y "+f[y]:""}`}if(c===100)return"cien";const p=c%100;return`${g[Math.floor(c/100)]}${p>0?" "+u(p):""}`}if(i===1e6)return"un millón";let m=Math.floor(i/1e3),d=i%1e3,t=m>0?m===1?"mil":`${u(m)} mil`:"",o=d>0?u(d):"";return(t+" "+o).trim()}}const vt={class:"row"},ft={class:"col-12 col-md-2"},ht={class:"col-12 col-md-2"},mt={class:"col-12 col-md-2"},bt={class:"col-12 col-md-2 flex flex-center"},xt={class:"col-12 col-md-2"},gt={class:"col-12 col-md-2 flex flex-center"},yt={class:"col-12 col-md-4"},$t={class:"col-12 col-md-2 flex flex-center"},_t={class:"col-12 col-md-2 flex flex-center"},Ct={class:"row"},kt={class:"col-12 col-md-4 q-pa-xs"},Et={class:"text-weight-bold"},Yt={class:"col-12 col-md-4 q-pa-xs"},Ft={class:"text-weight-bold"},It={class:"col-12 col-md-4 q-pa-xs"},wt={class:"text-weight-bold"},At={key:1},Nt={__name:"Ventas",setup(O){const{proxy:i}=lt(),f=$(C().format("YYYY-MM-DD")),h=$(C().format("YYYY-MM-DD")),b=$([]),g=$([]),u=$(!1),m=$(""),d=$([]),t=$(""),o=$("CAJA"),c=$(!1),p=$({}),y=$([]),A=$(["CAJA","PRODUCTOS","SALA"]);st(()=>{N(),P(),E()});function E(){i.$axios.get("/productos").then(v=>{y.value=v.data})}function x(){if(!t.value){i.$alert.error("Seleccione un usuario","Por favor");return}const v=d.value.find(e=>e.id===t.value);u.value=!0,i.$axios.post("/ventas/imprimir",{user_id:t.value,fechaInicio:f.value,fechaFin:h.value,reporte:o.value}).then(e=>{o.value==="CAJA"&&W.imprimirCaja(e.data,f.value,h.value,v.name),o.value==="PRODUCTOS"&&W.imprimirProductos(e.data,f.value,h.value,v.name,y.value),o.value==="SALA"&&W.imprimirSalas(e.data,f.value,h.value,v.name)}).finally(()=>{u.value=!1})}function Y(){c.value=!0,p.value={monto_inicial:0,monto_final:0,observacion:""}}function L(){u.value=!0,i.$axios.post("/cajas",p.value).then(v=>{c.value=!1,i.$alert.success("Registrado correctamente",v.data)}).finally(()=>{u.value=!1})}function D(){b.value=g.value.filter(v=>v.nombre.toLowerCase().includes(m.value.toLowerCase())||v.user?.name.toLowerCase().includes(m.value.toLowerCase())||v.detalleText.toLowerCase().includes(m.value.toLowerCase()))}function r(v){i.$q.dialog({title:"Anular Venta",message:"¿Está seguro de anular la venta?",ok:"Sí",cancel:"No"}).onOk(()=>{u.value=!0,i.$axios.put(`/ventas/${v}/anular`).then(()=>{N()}).finally(()=>{u.value=!1})})}function P(){d.value=[{id:"",name:"Todos"}],i.$axios.get("/users").then(v=>{v.data.forEach(e=>{d.value.push({id:e.id,name:e.name})})})}function N(){u.value=!0,i.$axios.get("/ventas",{params:{fechaInicio:f.value,fechaFin:h.value,user_id:t.value}}).then(v=>{b.value=v.data,g.value=v.data}).finally(()=>{u.value=!1})}return(v,e)=>(k(),Q(tt,null,[a(ct,{class:"q-pa-xs"},{default:n(()=>[a(z,{flat:"",bordered:""},{default:n(()=>[a(U,{class:"q-pa-xs"},{default:n(()=>[a(at,{onSubmit:X(N,["prevent"])},{default:n(()=>[s("div",vt,[s("div",ft,[a(M,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=l=>f.value=l),label:"Fecha Inicio",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),s("div",ht,[a(M,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=l=>h.value=l),label:"Fecha Fin",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),s("div",mt,[v.$store.user.role==="Admin"?(k(),I(et,{key:0,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),label:"Usuario",outlined:"",dense:"",options:d.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"])):B("",!0)]),s("div",bt,[a(w,{style:{width:"150px"},label:"Buscar",color:"primary",type:"submit",icon:"search","no-caps":"",loading:u.value},null,8,["loading"])]),s("div",xt,[v.$store.user.role==="Admin"?(k(),I(et,{key:0,modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),label:"Tipo Reporte",outlined:"",dense:"",options:A.value},null,8,["modelValue","options"])):B("",!0)]),s("div",gt,[v.$store.user.role==="Admin"?(k(),I(w,{key:0,style:{width:"150px"},label:"Imprimir",color:"indigo",icon:"print","no-caps":"",loading:u.value,onClick:x},null,8,["loading"])):B("",!0)]),e[11]||(e[11]=s("div",{class:"col-12 col-md-12 flex flex-center"},null,-1)),s("div",yt,[a(M,{modelValue:m.value,"onUpdate:modelValue":[e[4]||(e[4]=l=>m.value=l),D],label:"Filtro",outlined:"",dense:""},null,8,["modelValue"])]),s("div",$t,[a(w,{style:{width:"150px"},label:"Venta",color:"positive",onClick:e[5]||(e[5]=l=>v.$router.push("/ventas/add")),"no-caps":"",icon:"add_circle_outline",loading:u.value},null,8,["loading"])]),e[12]||(e[12]=s("div",{class:"col-12 col-md-4 flex flex-center"},null,-1)),s("div",_t,[a(w,{style:{width:"150px"},label:"Cerrar Caja",color:"red",onClick:Y,"no-caps":"",icon:"point_of_sale",loading:u.value},null,8,["loading"])])])]),_:1}),s("div",Ct,[s("div",kt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),I(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"indigo","text-color":"white",icon:"event"})]),_:1}),a(T,null,{default:n(()=>[a(V,{lines:"1"},{default:n(()=>[s("span",Et,F(b.value.length)+" ventas ",1)]),_:1}),a(V,{caption:"",lines:"2"},{default:n(()=>e[13]||(e[13]=[H(" Cantida de ventas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})]),s("div",Yt,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),I(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"green","text-color":"white",icon:"attach_money"})]),_:1}),a(T,null,{default:n(()=>[a(V,{lines:"1"},{default:n(()=>[s("span",Ft," Bs "+F(b.value.filter(l=>!l.anulada).reduce((l,S)=>l+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(V,{caption:"",lines:"2"},{default:n(()=>e[14]||(e[14]=[H(" Total de reservas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})]),s("div",It,[a(J,{bordered:"",padding:"",dense:""},{default:n(()=>[q((k(),I(Z,{clickable:""},{default:n(()=>[a(T,{avatar:""},{default:n(()=>[a(j,{color:"red","text-color":"white",icon:"cancel"})]),_:1}),a(T,null,{default:n(()=>[a(V,{lines:"1"},{default:n(()=>[s("span",wt," Bs "+F(b.value.filter(l=>l.anulada).reduce((l,S)=>l+parseFloat(S.total),0).toFixed(2)),1)]),_:1}),a(V,{caption:"",lines:"2"},{default:n(()=>e[15]||(e[15]=[H(" Total de reservas canceladas ")])),_:1})]),_:1})]),_:1})),[[G]])]),_:1})])])]),_:1})]),_:1}),a(z,{flat:"",bordered:"",class:"q-mt-md"},{default:n(()=>[a(U,null,{default:n(()=>[a(nt,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:n(()=>[e[16]||(e[16]=s("thead",null,[s("tr",null,[s("th",null,"Acciones"),s("th",null,"Fecha"),s("th",null,"Total"),s("th",null,"Nombre Cliente"),s("th",null,"Usuario"),s("th",null,"Detalle")])],-1)),s("tbody",null,[(k(!0),Q(tt,null,it(b.value,l=>(k(),Q("tr",{key:l.id},[s("td",null,[l.anulada?(k(),Q("div",At,[a(dt,{color:"red","text-color":"white",label:"Anulada"})])):(k(),I(w,{key:0,style:{width:"80px"},icon:"remove_circle_outline",color:"negative",dense:"",onClick:S=>r(l.id),label:"Anular","no-caps":"",size:"10px"},null,8,["onClick"]))]),s("td",null,F(l.fecha),1),s("td",null,F(l.total),1),s("td",null,F(l.nombre),1),s("td",null,F(l.user?.name),1),s("td",null,F(l.detalleText),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),a(rt,{modelValue:c.value,"onUpdate:modelValue":e[10]||(e[10]=l=>c.value=l),persistent:""},{default:n(()=>[a(z,{flat:"",bordered:"",style:{width:"350px"}},{default:n(()=>[a(U,{class:"row items-center q-pb-none"},{default:n(()=>[e[17]||(e[17]=s("div",{class:"text-bold"}," Cerrar Caja ",-1)),a(ut),a(w,{flat:"",dense:"",icon:"close",onClick:e[6]||(e[6]=l=>c.value=!1)})]),_:1}),a(U,null,{default:n(()=>[a(at,{onSubmit:X(L,["prevent"])},{default:n(()=>[a(M,{modelValue:p.value.monto_inicial,"onUpdate:modelValue":e[7]||(e[7]=l=>p.value.monto_inicial=l),label:"Monto Inicial",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(M,{modelValue:p.value.monto_final,"onUpdate:modelValue":e[8]||(e[8]=l=>p.value.monto_final=l),label:"Monto Final",type:"number",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(M,{type:"textarea",modelValue:p.value.observacion,"onUpdate:modelValue":e[9]||(e[9]=l=>p.value.observacion=l),label:"Observación",outlined:"",dense:"",hint:""},null,8,["modelValue"]),a(w,{label:"Cerrar Caja",color:"red",type:"submit",loading:u.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[18]||(e[18]=s("div",{id:"myElement"},null,-1))],64))}};export{Nt as default};
