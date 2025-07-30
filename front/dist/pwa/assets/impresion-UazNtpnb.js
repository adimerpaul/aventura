import{h}from"./moment-C5S46NFB.js";import{s as M}from"./index-DPNgNDZA.js";var v={},F;function T(){if(F)return v;F=1,Object.defineProperty(v,"__esModule",{value:!0}),v.Printd=v.createIFrame=v.createLinkStyle=v.createStyle=void 0;var D=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,a=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,p=function(i){return D.test(i)||a.test(i)};function l(i,t){var s=i.createElement("style");return s.appendChild(i.createTextNode(t)),s}v.createStyle=l;function x(i,t){var s=i.createElement("link");return s.type="text/css",s.rel="stylesheet",s.href=t,s}v.createLinkStyle=x;function d(i){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),i.appendChild(t),t}v.createIFrame=d;var c={parent:window.document.body,headElements:[],bodyElements:[]},r=function(){function i(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[c,t||{}].reduce(function(s,o){return Object.keys(o).forEach(function(n){return s[n]=o[n]}),s},{}),this.iframe=d(this.opts.parent)}return i.prototype.getIFrame=function(){return this.iframe},i.prototype.print=function(t,s,o,n){if(!this.isLoading){var m=this.iframe,y=m.contentDocument,f=m.contentWindow;if(!(!y||!f)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=n;var b=f.document;b.open(),b.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var u=this.opts,$=u.headElements,Y=u.bodyElements;Array.isArray($)&&$.forEach(function(e){return b.head.appendChild(e)}),Array.isArray(Y)&&Y.forEach(function(e){return b.body.appendChild(e)}),Array.isArray(s)&&s.forEach(function(e){e&&b.head.appendChild(p(e)?x(b,e):l(b,e))}),b.body.appendChild(this.elCopy),Array.isArray(o)&&o.forEach(function(e){if(e){var E=b.createElement("script");p(e)?E.src=e:E.innerText=e,b.body.appendChild(E)}}),b.close()}}},i.prototype.printURL=function(t,s){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=s,this.iframe.src=t)},i.prototype.onBeforePrint=function(t){this.onbeforeprint=t},i.prototype.onAfterPrint=function(t){this.onafterprint=t},i.prototype.launchPrint=function(t){this.isLoading||t.print()},i.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var s=this.iframe.contentWindow;s&&(this.onbeforeprint&&s.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&s.addEventListener("afterprint",this.onafterprint))}},i.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var s=this.iframe,o=s.contentDocument,n=s.contentWindow;if(!o||!n)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(n)}}):this.launchPrint(n)}},i}();return v.Printd=r,v.default=r,v}var g=T();class L{static imprimirSalas(a,p,l,x){let d='<table class="table">',c=0;a.forEach(t=>{d+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,c+=parseInt(t.total)}),d+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${c.toFixed(2)}</td>
      </tr>
    `,d+="</table>";const r=`
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
      <div class="text-right text-h6">Fecha: ${h().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${h(p).format("DD/MM/YYYY")} - ${h(l).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${x}</div>
      <div><span class="text-bold">Salas:</span> ${d}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=r,new g.Printd().print(document.getElementById("myElement"))}static imprimirProductos(a,p,l,x,d){const c=a.productos,r=a.productosGaseosa,i=a.productosPipoca,t=a.productosFrape;let s='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',o=0;c.forEach(e=>{s+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${e.nombre}</td>
          <td class="text-right">${parseInt(e.precio).toFixed(2)}</td>
          <td class="text-right">${e.cantidad_total}</td>
          <td class="text-right">${(parseInt(e.precio)*parseInt(e.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,o+=parseInt(e.precio)*parseInt(e.cantidad_total)}),s+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${o.toFixed(2)}</td>
      </tr>
    `,s+="</table></div>";let n=0,m='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';r.forEach(e=>{m+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${e.nombre}</td>
          <td class="text-right">${e.cantidad_total}</td>
        </tr>
        `,n+=parseInt(e.cantidad_total)}),m+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right text-bold">${n}</td>
      </tr>
    `,m+="</table></div>";let y=0,f='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';i.forEach(e=>{f+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${e.nombre}</td>
          <td class="text-right">${e.cantidad_total}</td>
        </tr>
        `,y+=parseInt(e.cantidad_total)}),f+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${y}</td>
      </tr>
      `,f+="</table></div>";let b=0,u='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';t.forEach(e=>{u+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${e.nombre}</td>
          <td class="text-right">${e.cantidad_total}</td>
        </tr>
        `,b+=parseInt(e.cantidad_total)}),u+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${b}</td>
      </tr>
      `,u+="</table></div>";const $=`
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
      <div class="text-right text-h6">Fecha: ${h().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${h(p).format("DD/MM/YYYY")} - ${h(l).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${x}</div>
      <div>${s}</div>
      <div class="text-center">Gaseosas</div>
      <div>${m}</div>
      <div class="text-center">Pipocas</div>
      <div>${f}</div>
      <div class="text-center">Frape</div>
      <div>${u}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=$,new g.Printd().print(document.getElementById("myElement"))}static imprimirCaja(a,p,l,x){const d=a.cajas;let c="<table>";d.forEach(t=>{c+=`
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${h(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
<!--        <div><span class="text-bold">Total Reservas:</span> ${parseInt(t.monto_reserva).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Total Venta:</span> ${parseInt(t.monto_venta).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Monto Inicial:</span> ${parseInt(t.monto_inicial).toFixed(2)}</div>-->
        <div><span class="text-bold">Total:</span> ${parseInt(t.monto_caja).toFixed(2)}</div>
        <div><span class="text-bold">Monto Final:</span> ${parseInt(t.monto_final).toFixed(2)}</div>
<!--        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>-->
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${t.observacion==null?"":t.observacion}</div>
      </div>
      `});const r=`
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
      <div class="text-right text-h6">Fecha: ${h(a.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${h(p).format("DD/MM/YYYY")} - ${h(l).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${x}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(a.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(a.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(a.ventas)+parseInt(a.reservas)).toFixed(2)}</div>
      <div>
      <span class="text-bold">Cajas:</span>
      <div>
      ${c}
      </div>
      </div>
    </div>
    `;document.getElementById("myElement").innerHTML=r,new g.Printd().print(document.getElementById("myElement"))}static numeroALetras(a){if(a=parseInt(a),isNaN(a)||a<0||a>1e6)return"Número fuera de rango";const p=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],l=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],x={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},d=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function c(o){if(o<10)return p[o];if(o>=10&&o<20)return x[o];if(o<100){const m=o%10;return`${l[Math.floor(o/10)]}${m>0?" y "+p[m]:""}`}if(o===100)return"cien";const n=o%100;return`${d[Math.floor(o/100)]}${n>0?" "+c(n):""}`}if(a===1e6)return"un millón";let r=Math.floor(a/1e3),i=a%1e3,t=r>0?r===1?"mil":`${c(r)} mil`:"",s=i>0?c(i):"";return(t+" "+s).trim()}static imprimirComprasTotales(a,p,l,x){let d=`
    <table class="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Proveedor</th>
          <th>Usuario</th>
          <th>Agencia</th>
          <th>Total</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
  `,c=0;a.forEach(t=>{const s=t.detalles||t.detalleText||[],o=Array.isArray(s)?s.map(n=>`${n.cantidad}x ${n.producto} (${n.precio} Bs)`).join(", "):t.detalleText;d+=`
      <tr>
        <td>${h(t.fecha).format("DD/MM/YYYY HH:mm")}</td>
        <td>${t.nombre||"-"}</td>
        <td>${t.user?.name||t.user?.username||"-"}</td>
        <td>${t.agencia||"-"}</td>
        <td class="text-right">${parseFloat(t.total).toFixed(2)}</td>
        <td>${o}</td>
      </tr>
    `,c+=parseFloat(t.total)}),d+=`
    <tr>
      <td colspan="4" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${c.toFixed(2)} Bs</td>
      <td></td>
    </tr>
  `,d+="</tbody></table>";const r=`
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; font-size: 11px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Impreso: ${h().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-h6">Usuario: ${x}</div>
      <div class="text-h6">Rango: ${h(p).format("DD/MM/YYYY")} - ${h(l).format("DD/MM/YYYY")}</div>
      <div class="text-h5 text-center text-bold">REPORTE GENERAL DE COMPRAS</div>
      ${d}
    </div>
  `;document.getElementById("myElement").innerHTML=r,new g.Printd().print(document.getElementById("myElement"))}static imprimirCompraUnica(a,p){let l=`
    <table class="table">
      <thead>
        <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>
      </thead>
      <tbody>
  `,x=0;a.detalles.forEach(r=>{const i=r.cantidad*r.precio;x+=i,l+=`
      <tr>
        <td>${r.producto}</td>
        <td class="text-right">${r.cantidad}</td>
        <td class="text-right">${r.precio}</td>
        <td class="text-right">${i.toFixed(2)}</td>
      </tr>
    `}),l+=`
    <tr>
      <td colspan="3" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${x.toFixed(2)} Bs</td>
    </tr>
  `,l+="</tbody></table>";const d=`
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Fecha impresión: ${h().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-h6">Usuario: ${p}</div>
      <div class="text-h6">Fecha Compra: ${h(a.fecha).format("DD/MM/YYYY HH:mm")}</div>
      <div class="text-h6">Proveedor: ${a.nombre}</div>
      <div class="text-h5 text-center text-bold">DETALLE DE COMPRA</div>
      ${l}
    </div>
  `;document.getElementById("myElement").innerHTML=d,new g.Printd().print(document.getElementById("myElement"))}}export{L as I};
