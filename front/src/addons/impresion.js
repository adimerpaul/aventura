
import { Printd } from 'printd'

import moment from 'moment'
import {useCounterStore} from "stores/example-store";
export class Impresion {
  static imprimirSalas (salas, fechaInicio, fechaFin, userFind) {
    // [
    //   {
    //     "id": 10,
    //     "nombre": "chamib",
    //     "numero_personas": 2,
    //     "observaciones": null,
    //     "estado": "Finalizado",
    //     "json": "{\"2-10\":\"9:00 a 9:30\",\"3-10\":\"9:30 a 10:00\",\"4-10\":\"10:00 a 10:30\",\"5-10\":\"10:30 a 11:00\",\"6-10\":\"11:00 a 11:30\"}",
    //     "sala": "Sala 11",
    //     "motivo_cancelacion": null,
    //     "total": "50.00",
    //     "adelanto": 20,
    //     "tiempo": "02:30",
    //     "horario": "9:00 - 11:30",
    //     "fecha": "2025-03-01",
    //     "fecha_confirmacion": "2025-03-01 07:16:00",
    //     "fecha_cancelacion": null,
    //     "user_id": 2,
    //     "user_cancelado_id": null,
    //     "color": "red"
    //   },
    //   {
    //     "id": 11,
    //     "nombre": "Angela",
    //     "numero_personas": 2,
    //     "observaciones": null,
    //     "estado": "Reservado",
    //     "json": "{\"4-8\":\"10:00 a 10:30\",\"5-8\":\"10:30 a 11:00\",\"6-8\":\"11:00 a 11:30\"}",
    //     "sala": "Sala 9",
    //     "motivo_cancelacion": null,
    //     "total": "30.00",
    //     "adelanto": 20,
    //     "tiempo": "01:30",
    //     "horario": "10:00 - 11:30",
    //     "fecha": "2025-03-01",
    //     "fecha_confirmacion": null,
    //     "fecha_cancelacion": null,
    //     "user_id": 2,
    //     "user_cancelado_id": null,
    //     "color": "yellow"
    //   },
    //   {
    //     "id": 12,
    //     "nombre": "sara",
    //     "numero_personas": 2,
    //     "observaciones": null,
    //     "estado": "Finalizado",
    //     "json": "{\"4-5\":\"10:00 a 10:30\",\"5-5\":\"10:30 a 11:00\",\"6-5\":\"11:00 a 11:30\"}",
    //     "sala": "Sala 6",
    //     "motivo_cancelacion": null,
    //     "total": "30.00",
    //     "adelanto": 20,
    //     "tiempo": "01:30",
    //     "horario": "10:00 - 11:30",
    //     "fecha": "2025-03-01",
    //     "fecha_confirmacion": "2025-03-01 07:15:56",
    //     "fecha_cancelacion": null,
    //     "user_id": 2,
    //     "user_cancelado_id": null,
    //     "color": "red"
    //   },
    //   {
    //     "id": 13,
    //     "nombre": "adalid",
    //     "numero_personas": 2,
    //     "observaciones": null,
    //     "estado": "Finalizado",
    //     "json": "{\"3-3\":\"9:30 a 10:00\",\"4-3\":\"10:00 a 10:30\",\"5-3\":\"10:30 a 11:00\",\"6-3\":\"11:00 a 11:30\"}",
    //     "sala": "Sala 4",
    //     "motivo_cancelacion": null,
    //     "total": "40.00",
    //     "adelanto": 20,
    //     "tiempo": "02:00",
    //     "horario": "9:30 - 11:30",
    //     "fecha": "2025-03-01",
    //     "fecha_confirmacion": "2025-03-01 07:16:07",
    //     "fecha_cancelacion": null,
    //     "user_id": 2,
    //     "user_cancelado_id": null,
    //     "color": "red"
    //   }
    // ]
    let textoSalas = '<table class="table">'
    let sumaTotal = 0
    salas.forEach((element) => {
      textoSalas += `
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${element.nombre}</td>
          <td>${element.sala}</td>
          <td>${element.horario}</td>
          <td>${element.estado}</td>
          <td class="text-right">${element.total}</td>
        </tr>
      `
      sumaTotal += parseInt(element.total)
    })
    textoSalas += `
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${sumaTotal.toFixed(2)}</td>
      </tr>
    `
    textoSalas += '</table>'
    const cadena = `
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
      <div class="text-right text-h6">Fecha: ${moment().format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-right text-h6">${useCounterStore().user.name}</div>
      <div class="text-center text-bold">CONTROL SALAS</div>
      <div><span class="text-bold">Fecha</span> ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div><span class="text-bold">Usuario:</span> ${userFind}</div>
      <div><span class="text-bold">Salas:</span> ${textoSalas}</div>
    </div>
    `
    document.getElementById('myElement').innerHTML = cadena
    const d = new Printd()
    d.print(document.getElementById('myElement'))

  }
  static imprimirProductos (data, fechaInicio, fechaFin, userFind, productosAll) {
    const productos = data.productos
    // const productosCombo = data.productosCombo

    const productosGaseosa = data.productosGaseosa
    const productosPipoca = data.productosPipoca
    const productosFrape = data.productosFrape

    // console.log(productosAll)
    let textoProductos = '<div class="text-h5"><table class="table">' +
      '<tr style="border-top: 1px solid black; border-bottom: 1px solid black;">' +
      '<th>Nombre</th>' +
      '<th class="text-right">Precio</th>' +
      '<th class="text-right">Cantidad</th>' +
      '<th class="text-right">Total</th>' +
      '</tr>'

    let sumaTotal = 0
    productos.forEach((element) => {
      textoProductos += `
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${element.nombre}</td>
          <td class="text-right">${parseInt(element.precio).toFixed(2)}</td>
          <td class="text-right">${element.cantidad_total}</td>
          <td class="text-right">${(parseInt(element.precio) * parseInt(element.cantidad_total)).toFixed(2)}</td>
        </tr>
      `
      sumaTotal += parseInt(element.precio) * parseInt(element.cantidad_total)
    })
    textoProductos += `
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right">${sumaTotal.toFixed(2)}</td>
      </tr>
    `
    textoProductos += '</table></div>'


//     let textoProductosAll = '<div class="text-h5"><table class="table">' +
//       '<tr style="border-top: 1px solid black; border-bottom: 1px solid black;">' +
//       '<th>Nombre</th>' +
//       '<th class="text-right">Precio</th>' +
//       '<th class="text-right">Cantidad</th>' +
//       '<th class="text-right">Total</th>' +
//       '</tr>'
//
//     let sumaTotalAll = 0
//     productosCombo.forEach((element) => {
//       textoProductosAll += `
//         <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
//           <td>${element.nombre}</td>
//           <td class="text-right">${parseInt(element.precio).toFixed(2)}</td>
//           <td class="text-right">${element.cantidad_total}</td>
// <!--          <td class="text-right">${(parseInt(element.precio) * parseInt(element.cantidad_total)).toFixed(2)}</td>-->
//           <td class="text-right">${(0).toFixed(2)}</td>
//         </tr>
//       `
//       // sumaTotalAll += parseInt(element.precio) * parseInt(element.cantidad_total)
//     })
//     textoProductosAll += `
//       <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
//         <td class="text-right"></td>
//         <td class="text-right"></td>
//         <td class="text-right text-bold">Total</td>
//         <td class="text-right">${sumaTotalAll.toFixed(2)}</td>
//       </tr>
//     `
//
//     textoProductosAll += '</table></div>'

    let sumGaseosa = 0
    let textoGaseosa = '<div class="text-h5"><table class="table">' +
      '<tr style="border-top: 1px solid black; border-bottom: 1px solid black;">' +
      '<th>Nombre</th>' +
      '<th class="text-right">Cantidad</th>' +
      '</tr>'

    productosGaseosa.forEach((element) => {
      textoGaseosa += `
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${element.nombre}</td>
          <td class="text-right">${element.cantidad_total}</td>
        </tr>
        `
      sumGaseosa += parseInt(element.cantidad_total)
    })
    textoGaseosa += `
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
        <td class="text-right"></td>
        <td class="text-right text-bold">Total</td>
        <td class="text-right text-bold">${sumGaseosa}</td>
      </tr>
    `
    textoGaseosa += '</table></div>'

    let sumPipoca = 0
    let textoPipoca = '<div class="text-h5"><table class="table">' +
      '<tr style="border-top: 1px solid black; border-bottom: 1px solid black;">' +
      '<th>Nombre</th>' +
      '<th class="text-right">Cantidad</th>' +
      '</tr>'
    productosPipoca.forEach((element) => {
      textoPipoca += `
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${element.nombre}</td>
          <td class="text-right">${element.cantidad_total}</td>
        </tr>
        `
      sumPipoca += parseInt(element.cantidad_total)
    })
    textoPipoca += `
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${sumPipoca}</td>
      </tr>
      `
    textoPipoca += '</table></div>'

    let sumFrape = 0
    let textoFrape = '<div class="text-h5"><table class="table">' +
      '<tr style="border-top: 1px solid black; border-bottom: 1px solid black;">' +
      '<th>Nombre</th>' +
      '<th class="text-right">Cantidad</th>' +
      '</tr>'

    productosFrape.forEach((element) => {
      textoFrape += `
        <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
          <td>${element.nombre}</td>
          <td class="text-right">${element.cantidad_total}</td>
        </tr>
        `
      sumFrape += parseInt(element.cantidad_total)
    })
    textoFrape += `
      <tr style="border-top: 1px solid black; border-bottom: 1px solid black;">
      <td class="text-right"></td>
      <td class="text-right text-bold">Total</td>
      <td class="text-right text-bold">${sumFrape}</td>
      </tr>
      `
    textoFrape += '</table></div>'

    const cadena = `
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
      <div class="text-right text-h6">Fecha: ${moment().format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-right text-h6">${useCounterStore().user.name}</div>
      <div class="text-center text-bold">CONTROL PRODUCTOS</div>
      <div><span class="text-bold">Fecha</span> ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div><span class="text-bold">Usuario:</span> ${userFind}</div>
      <div>${textoProductos}</div>
      <div class="text-center">Gaseosas</div>
      <div>${textoGaseosa}</div>
      <div class="text-center">Pipocas</div>
      <div>${textoPipoca}</div>
      <div class="text-center">Frape</div>
      <div>${textoFrape}</div>
    </div>
    `
    document.getElementById('myElement').innerHTML = cadena
    const d = new Printd()
    d.print(document.getElementById('myElement'))
  }
  static imprimirCaja (caja, fechaInicio, fechaFin, userFind) {
    // console.log(caja)
    const cajas = caja.cajas
    let textoCajas = '<table>'
    cajas.forEach((element) => {
      textoCajas += `
      <div style="border: 1px solid black; padding: 5px;border-radius: 5px;">
        <div><span class="text-bold">Fecha Cierre:</span> ${moment(element.fecha_cierre).format('DD/MM/YYYY HH:mm:ss')}</div>
<!--        <div><span class="text-bold">Total Reservas:</span> ${parseInt(element.monto_reserva).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Total Venta:</span> ${parseInt(element.monto_venta).toFixed(2)}</div>-->
<!--        <div><span class="text-bold">Monto Inicial:</span> ${parseInt(element.monto_inicial).toFixed(2)}</div>-->
        <div><span class="text-bold">Total:</span> ${parseInt(element.monto_caja).toFixed(2)}</div>
        <div><span class="text-bold">Monto Final:</span> ${parseInt(element.monto_final).toFixed(2)}</div>
<!--        <div><span class="text-bold">Monto Real:</span> ${parseInt(element.monto_real).toFixed(2)}</div>-->
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(element.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${element.observacion == null ? '' : element.observacion}</div>
      </div>
      `
    })

    const cadena = `
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
      <div class="text-right text-h6">Fecha: ${moment(caja.fecha).format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-right text-h6">${useCounterStore().user.name}</div>
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div><span class="text-bold">Usuario:</span> ${userFind}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(caja.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(caja.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(caja.ventas) + parseInt(caja.reservas)).toFixed(2)}</div>
      <div>
      <span class="text-bold">Cajas:</span>
      <div>
      ${textoCajas}
      </div>
      </div>
    </div>
    `
    document.getElementById('myElement').innerHTML = cadena
    const d = new Printd()
    d.print(document.getElementById('myElement'))
  }
  static numeroALetras(num) {
    num = parseInt(num);
    if (isNaN(num) || num < 0 || num > 1000000) return 'Número fuera de rango';

    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = {
      10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce',
      15: 'quince', 16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve'
    };
    const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    function convertirCentenas(n) {
      if (n < 10) return unidades[n];
      if (n >= 10 && n < 20) return especiales[n];
      if (n < 100) {
        const unidad = n % 10;
        return `${decenas[Math.floor(n / 10)]}${unidad > 0 ? ' y ' + unidades[unidad] : ''}`;
      }
      if (n === 100) return 'cien';
      const dec = n % 100;
      return `${centenas[Math.floor(n / 100)]}${dec > 0 ? ' ' + convertirCentenas(dec) : ''}`;
    }

    if (num === 1000000) return 'un millón';

    let miles = Math.floor(num / 1000);
    let resto = num % 1000;
    let milesTexto = miles > 0 ? (miles === 1 ? 'mil' : `${convertirCentenas(miles)} mil`) : '';
    let restoTexto = resto > 0 ? convertirCentenas(resto) : '';

    return (milesTexto + ' ' + restoTexto).trim();
  }
  static imprimirComprasTotales(compras, fechaInicio, fechaFin, usuario) {
    let tabla = `
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
  `;

    let suma = 0;
    compras.forEach(compra => {
      const detalles = compra.detalles || compra.detalleText || [];
      const textoDetalle = Array.isArray(detalles)
        ? detalles.map(d => `${d.cantidad}x ${d.producto} (${d.precio} Bs) </br>`).join('')
        : compra.detalleText;

      tabla += `
      <tr>
        <td>${moment(compra.fecha).format("DD/MM/YYYY HH:mm")}</td>
        <td>${compra.nombre || '-'}</td>
        <td>${compra.user?.name || compra.user?.username || '-'}</td>
        <td>${compra.agencia || '-'}</td>
        <td class="text-right">${parseFloat(compra.total).toFixed(2)}</td>
        <td>${textoDetalle}</td>
      </tr>
    `;

      suma += parseFloat(compra.total);
    });

    tabla += `
    <tr>
      <td colspan="4" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${suma.toFixed(2)} Bs</td>
      <td></td>
    </tr>
  `;

    tabla += `</tbody></table>`;

    const html = `
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; font-size: 11px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Impreso: ${moment().format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-h6">Usuario: ${usuario}</div>
      <div class="text-h6">Rango: ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div class="text-h5 text-center text-bold">REPORTE GENERAL DE COMPRAS</div>
      ${tabla}
    </div>
  `;

    document.getElementById('myElement').innerHTML = html;
    const d = new Printd();
    d.print(document.getElementById('myElement'));
  }
  static imprimirReporteGananciasPorProducto(ventasAyacucho, ventasOquendo, fechaInicio, fechaFin, usuario) {
    const agruparVentas = (ventas) => {
      const resumen = {};

      ventas.forEach(venta => {
        venta.detalles.forEach(detalle => {
          const clave = detalle.producto;
          if (!resumen[clave]) {
            resumen[clave] = {
              producto: clave,
              cantidad: 0,
              totalVenta: 0,
              totalCompra: 0,
              ganancia: 0,
              precioVenta: detalle.precio,
              precioCompra: detalle.precio_compra
            };
          }
          resumen[clave].cantidad += detalle.cantidad;
          resumen[clave].totalVenta += detalle.cantidad * detalle.precio;
          resumen[clave].totalCompra += detalle.cantidad * detalle.precio_compra;
          resumen[clave].ganancia += (detalle.precio - detalle.precio_compra) * detalle.cantidad;
        });
      });

      return Object.values(resumen);
    };

    const renderTabla = (productos, titulo) => {
      let tabla = `
      <h5 style="margin-top: 20px">${titulo}</h5>
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
    `;

      let totalVenta = 0, totalCompra = 0, totalGanancia = 0;
      productos.forEach(p => {
        totalVenta += p.totalVenta;
        totalCompra += p.totalCompra;
        totalGanancia += p.ganancia;

        tabla += `
        <tr>
          <td>${p.producto}</td>
          <td class="text-right">${p.cantidad}</td>
          <td class="text-right">${p.totalVenta.toFixed(2)}</td>
          <td class="text-right">${p.totalCompra.toFixed(2)}</td>
          <td class="text-right">${p.ganancia.toFixed(2)}</td>
        </tr>
      `;
      });

      tabla += `
      <tr>
        <td colspan="2" class="text-right text-bold">TOTALES</td>
        <td class="text-right text-bold">${totalVenta.toFixed(2)}</td>
        <td class="text-right text-bold">${totalCompra.toFixed(2)}</td>
        <td class="text-right text-bold">${totalGanancia.toFixed(2)}</td>
      </tr>
    `;

      tabla += `</tbody></table>`;
      return tabla;
    };

    const productosAyacucho = agruparVentas(ventasAyacucho);
    const productosOquendo = agruparVentas(ventasOquendo);

    const contenido = `
    <style>
      .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; font-size: 11px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
      h5 { margin: 10px 0; }
    </style>
    <div>
      <div class="text-right text-h6">Impreso: ${moment().format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-h6">Usuario: ${usuario}</div>
      <div class="text-h6">Rango: ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div class="text-h5 text-center text-bold">REPORTE DE GANANCIAS POR PRODUCTO</div>
      ${renderTabla(productosAyacucho, 'Sucursal Ayacucho')}
      ${renderTabla(productosOquendo, 'Sucursal Oquendo')}
    </div>
  `;

    document.getElementById('myElement').innerHTML = contenido;
    const d = new Printd();
    d.print(document.getElementById('myElement'));
  }

  static imprimirCompraUnica(compra, usuario) {
    let tabla = `
    <table class="table">
      <thead>
        <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>
      </thead>
      <tbody>
  `;

    let total = 0;
    compra.detalles.forEach(detalle => {
      const subtotal = detalle.cantidad * detalle.precio;
      total += subtotal;
      tabla += `
      <tr>
        <td>${detalle.producto}</td>
        <td class="text-right">${detalle.cantidad}</td>
        <td class="text-right">${detalle.precio}</td>
        <td class="text-right">${subtotal.toFixed(2)}</td>
      </tr>
    `;
    });

    tabla += `
    <tr>
      <td colspan="3" class="text-right text-bold">TOTAL</td>
      <td class="text-right text-bold">${total.toFixed(2)} Bs</td>
    </tr>
  `;

    tabla += `</tbody></table>`;

    const html = `
    <style>
      .table { width: 100%; border-collapse: collapse; }
      .table, .table td, .table th { border: 1px solid #000; padding: 4px; }
      .text-right { text-align: right; }
      .text-bold { font-weight: bold; }
    </style>
    <div>
      <div class="text-right text-h6">Fecha impresión: ${moment().format('DD/MM/YYYY HH:mm:ss')}</div>
      <div class="text-h6">Usuario: ${usuario}</div>
      <div class="text-h6">Fecha Compra: ${moment(compra.fecha).format('DD/MM/YYYY HH:mm')}</div>
      <div class="text-h6">Proveedor: ${compra.nombre}</div>
      <div class="text-h5 text-center text-bold">DETALLE DE COMPRA</div>
      ${tabla}
    </div>
  `;

    document.getElementById('myElement').innerHTML = html;
    const d = new Printd();
    d.print(document.getElementById('myElement'));
  }
}
