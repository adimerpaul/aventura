import{h as b}from"./moment-C5S46NFB.js";import{i as M}from"./index-D4Q0ew6z.js";var f={},F;function T(){if(F)return f;F=1,Object.defineProperty(f,"__esModule",{value:!0}),f.Printd=f.createIFrame=f.createLinkStyle=f.createStyle=void 0;var D=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,s=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,m=function(o){return D.test(o)||s.test(o)};function x(o,t){var e=o.createElement("style");return e.appendChild(o.createTextNode(t)),e}f.createStyle=x;function v(o,t){var e=o.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e}f.createLinkStyle=v;function c(o){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),o.appendChild(t),t}f.createIFrame=c;var h={parent:window.document.body,headElements:[],bodyElements:[]},d=function(){function o(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[h,t||{}].reduce(function(e,i){return Object.keys(i).forEach(function(n){return e[n]=i[n]}),e},{}),this.iframe=c(this.opts.parent)}return o.prototype.getIFrame=function(){return this.iframe},o.prototype.print=function(t,e,i,n){if(!this.isLoading){var p=this.iframe,g=p.contentDocument,l=p.contentWindow;if(!(!g||!l)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=n;var r=l.document;r.open(),r.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var y=this.opts,u=y.headElements,Y=y.bodyElements;Array.isArray(u)&&u.forEach(function(a){return r.head.appendChild(a)}),Array.isArray(Y)&&Y.forEach(function(a){return r.body.appendChild(a)}),Array.isArray(e)&&e.forEach(function(a){a&&r.head.appendChild(m(a)?v(r,a):x(r,a))}),r.body.appendChild(this.elCopy),Array.isArray(i)&&i.forEach(function(a){if(a){var E=r.createElement("script");m(a)?E.src=a:E.innerText=a,r.body.appendChild(E)}}),r.close()}}},o.prototype.printURL=function(t,e){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=e,this.iframe.src=t)},o.prototype.onBeforePrint=function(t){this.onbeforeprint=t},o.prototype.onAfterPrint=function(t){this.onafterprint=t},o.prototype.launchPrint=function(t){this.isLoading||t.print()},o.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var e=this.iframe.contentWindow;e&&(this.onbeforeprint&&e.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&e.addEventListener("afterprint",this.onafterprint))}},o.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var e=this.iframe,i=e.contentDocument,n=e.contentWindow;if(!i||!n)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(n)}}):this.launchPrint(n)}},o}();return f.Printd=d,f.default=d,f}var $=T();class P{static imprimirSalas(s,m,x,v){let c='<table class="table">',h=0;s.forEach(t=>{c+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${t.nombre}</td>
          <td>${t.sala}</td>
          <td>${t.horario}</td>
          <td>${t.estado}</td>
          <td class="text-right">${t.total}</td>
        </tr>
      `,h+=parseInt(t.total)}),c+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${h.toFixed(2)}</td>
      </tr>
    `,c+="</table>";const d=`
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
      <div class="text-right text-h6">Fecha: ${b().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${b(m).format("DD/MM/YYYY")} - ${b(x).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div><span class="text-bold">Salas:</span> ${c}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=d,new $.Printd().print(document.getElementById("myElement"))}static imprimirProductos(s,m,x,v,c){const h=s.productos,d=s.productosGaseosa,o=s.productosPipoca,t=s.productosFrape;let e='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Precio</th><th class="text-right">Cantidad</th><th class="text-right">Total</th></tr>',i=0;h.forEach(a=>{e+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${a.nombre}</td>
          <td class="text-right">${parseInt(a.precio).toFixed(2)}</td>
          <td class="text-right">${a.cantidad_total}</td>
          <td class="text-right">${(parseInt(a.precio)*parseInt(a.cantidad_total)).toFixed(2)}</td>
        </tr>
      `,i+=parseInt(a.precio)*parseInt(a.cantidad_total)}),e+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${i.toFixed(2)}</td>
      </tr>
    `,e+="</table></div>";let n=0,p='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';d.forEach(a=>{p+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${a.nombre}</td>
          <td class="text-right">${a.cantidad_total}</td>
        </tr>
        `,n+=parseInt(a.cantidad_total)}),p+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right text-bold">${n}</td>
      </tr>
    `,p+="</table></div>";let g=0,l='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';o.forEach(a=>{l+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${a.nombre}</td>
          <td class="text-right">${a.cantidad_total}</td>
        </tr>
        `,g+=parseInt(a.cantidad_total)}),l+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${g}</td>
      </tr>
      `,l+="</table></div>";let r=0,y='<div class="text-h5"><table class="table"><tr style="border-top: 1px solid black; border-bottom: 1px solid black;"><th>Nombre</th><th class="text-right">Cantidad</th></tr>';t.forEach(a=>{y+=`
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${a.nombre}</td>
          <td class="text-right">${a.cantidad_total}</td>
        </tr>
        `,r+=parseInt(a.cantidad_total)}),y+=`
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${r}</td>
      </tr>
      `,y+="</table></div>";const u=`
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
      <div class="text-right text-h6">Fecha: ${b().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${b(m).format("DD/MM/YYYY")} - ${b(x).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div>${e}</div>
      <div class="text-center">Gaseosas</div>
      <div>${p}</div>
      <div class="text-center">Pipocas</div>
      <div>${l}</div>
      <div class="text-center">Frape</div>
      <div>${y}</div>
    </div>
    `;document.getElementById("myElement").innerHTML=u,new $.Printd().print(document.getElementById("myElement"))}static imprimirCaja(s,m,x,v){const c=s.cajas;let h="<table>";c.forEach(t=>{h+=`
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${b(t.fecha_cierre).format("DD/MM/YYYY HH:mm:ss")}</div>
<!--        <div><span class="text-bold">Total Reservas:</span> ${parseInt(t.monto_reserva).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Total Venta:</span> ${parseInt(t.monto_venta).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Monto Inicial:</span> ${parseInt(t.monto_inicial).toFixed(2)}</div>-->
        <div><span class="text-bold">Total:</span> ${parseInt(t.monto_caja).toFixed(2)}</div>
        <div><span class="text-bold">Monto Final:</span> ${parseInt(t.monto_final).toFixed(2)}</div>
<!--        <div><span class="text-bold">Monto Real:</span> ${parseInt(t.monto_real).toFixed(2)}</div>-->
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(t.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${t.observacion==null?"":t.observacion}</div>
      </div>
      `});const d=`
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
      <div class="text-right text-h6">Fecha: ${b(s.fecha).format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-right text-h6">${M().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${b(m).format("DD/MM/YYYY")} - ${b(x).format("DD/MM/YYYY")}</div>
      <div><span class="text-bold">Usuario:</span> ${v}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(s.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(s.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(s.ventas)+parseInt(s.reservas)).toFixed(2)}</div>
      <div>
      <span class="text-bold">Cajas:</span>
      <div>
      ${h}
      </div>
      </div>
    </div>
    `;document.getElementById("myElement").innerHTML=d,new $.Printd().print(document.getElementById("myElement"))}static numeroALetras(s){if(s=parseInt(s),isNaN(s)||s<0||s>1e6)return"Número fuera de rango";const m=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],x=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],v={10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve"},c=["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];function h(i){if(i<10)return m[i];if(i>=10&&i<20)return v[i];if(i<100){const p=i%10;return`${x[Math.floor(i/10)]}${p>0?" y "+m[p]:""}`}if(i===100)return"cien";const n=i%100;return`${c[Math.floor(i/100)]}${n>0?" "+h(n):""}`}if(s===1e6)return"un millón";let d=Math.floor(s/1e3),o=s%1e3,t=d>0?d===1?"mil":`${h(d)} mil`:"",e=o>0?h(o):"";return(t+" "+e).trim()}static imprimirComprasTotales(s,m,x,v){let c=`
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
  `,h=0;s.forEach(t=>{const e=t.detalles||t.detalleText||[],i=Array.isArray(e)?e.map(n=>`${n.cantidad}x ${n.producto} (${n.precio} Bs) </br>`).join(""):t.detalleText;c+=`
      <tr>
        <td>${b(t.fecha).format("DD/MM/YYYY HH:mm")}</td>
        <td>${t.nombre||"-"}</td>
        <td>${t.user?.name||t.user?.username||"-"}</td>
        <td>${t.agencia||"-"}</td>
        <td class="text-right">${parseFloat(t.total).toFixed(2)}</td>
        <td>${i}</td>
      </tr>
    `,h+=parseFloat(t.total)}),c+=`
    <tr>
      <td colspan="4" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${h.toFixed(2)} Bs</td>
      <td></td>
    </tr>
  `,c+="</tbody></table>";const d=`
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; font-size: 11px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Impreso: ${b().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-h6">Usuario: ${v}</div>
      <div class="text-h6">Rango: ${b(m).format("DD/MM/YYYY")} - ${b(x).format("DD/MM/YYYY")}</div>
      <div class="text-h5 text-center text-bold">REPORTE GENERAL DE COMPRAS</div>
      ${c}
    </div>
  `;document.getElementById("myElement").innerHTML=d,new $.Printd().print(document.getElementById("myElement"))}static imprimirReporteGananciasPorProducto(s,m,x,v,c){const h=n=>{const p={};return n.forEach(g=>{g.detalles.forEach(l=>{const r=l.producto;p[r]||(p[r]={producto:r,cantidad:0,totalVenta:0,totalCompra:0,ganancia:0,precioVenta:l.precio,precioCompra:l.precio_compra}),p[r].cantidad+=l.cantidad,p[r].totalVenta+=l.cantidad*l.precio,p[r].totalCompra+=l.cantidad*l.precio_compra,p[r].ganancia+=(l.precio-l.precio_compra)*l.cantidad})}),Object.values(p)},d=(n,p)=>{let g=`
      <h5 style="margin-top: 20px">${p}</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th class="text-right">Cant.</th>
            <th class="text-right">Venta Bs</th>
            <th class="text-right">Compra Bs</th>
            <th class="text-right">Ganancia Bs</th>
          </tr>
        </thead>
        <tbody>
    `,l=0,r=0,y=0;return n.forEach(u=>{l+=u.totalVenta,r+=u.totalCompra,y+=u.ganancia,g+=`
        <tr>
          <td>${u.producto}</td>
          <td class="text-right">${u.cantidad}</td>
          <td class="text-right">${u.totalVenta.toFixed(2)}</td>
          <td class="text-right">${u.totalCompra.toFixed(2)}</td>
          <td class="text-right">${u.ganancia.toFixed(2)}</td>
        </tr>
      `}),g+=`
      <tr>
        <td colspan="2" class="text-right text-bold">TOTALES</td>
        <td class="text-right text-bold">${l.toFixed(2)}</td>
        <td class="text-right text-bold">${r.toFixed(2)}</td>
        <td class="text-right text-bold">${y.toFixed(2)}</td>
      </tr>
    `,g+="</tbody></table>",g},o=h(s),t=h(m),e=`
    <style>
      .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; font-size: 11px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
      h5 { margin: 10px 0; }
    </style>
    <div>
      <div class="text-right text-h6">Impreso: ${b().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-h6">Usuario: ${c}</div>
      <div class="text-h6">Rango: ${b(x).format("DD/MM/YYYY")} - ${b(v).format("DD/MM/YYYY")}</div>
      <div class="text-h5 text-center text-bold">REPORTE DE GANANCIAS POR PRODUCTO</div>
      ${d(o,"Sucursal Ayacucho")}
      ${d(t,"Sucursal Oquendo")}
    </div>
  `;document.getElementById("myElement").innerHTML=e,new $.Printd().print(document.getElementById("myElement"))}static imprimirCompraUnica(s,m){let x=`
    <table class="table">
      <thead>
        <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>
      </thead>
      <tbody>
  `,v=0;s.detalles.forEach(d=>{const o=d.cantidad*d.precio;v+=o,x+=`
      <tr>
        <td>${d.producto}</td>
        <td class="text-right">${d.cantidad}</td>
        <td class="text-right">${d.precio}</td>
        <td class="text-right">${o.toFixed(2)}</td>
      </tr>
    `}),x+=`
    <tr>
      <td colspan="3" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${v.toFixed(2)} Bs</td>
    </tr>
  `,x+="</tbody></table>";const c=`
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Fecha impresión: ${b().format("DD/MM/YYYY HH:mm:ss")}</div>
      <div class="text-h6">Usuario: ${m}</div>
      <div class="text-h6">Fecha Compra: ${b(s.fecha).format("DD/MM/YYYY HH:mm")}</div>
      <div class="text-h6">Proveedor: ${s.nombre}</div>
      <div class="text-h5 text-center text-bold">DETALLE DE COMPRA</div>
      ${x}
    </div>
  `;document.getElementById("myElement").innerHTML=c,new $.Printd().print(document.getElementById("myElement"))}}export{P as I};
