
import { Printd } from 'printd'

import moment from 'moment'

export class Impresion {
  // Impresion.imprimirCaja(res.data,fechaInicio.value,fechaFin.value,userFind.name);
  static imprimirCaja (caja, fechaInicio, fechaFin, userFind) {
    console.log(caja)
    // {
    //   "ventas": 76,
    //   "reservas": "50.00",
    //   "cajas": [
    //   {
    //     "id": 1,
    //     "fecha_cierre": "2025-03-01 05:29:53",
    //     "monto_inicial": "10.00",
    //     "monto_final": "150.00",
    //     "monto_real": "140.00",
    //     "monto_diferencia": "64.00",
    //     "observacion": "asda",
    //     "user_id": 2
    //   }
    // ]
    // }
    const cajas = caja.cajas
    let textoCajas = ''
    cajas.forEach((element) => {
      textoCajas += `
      <div class="text-h5">
        <div><span class="text-bold">Fecha Cierre:</span> ${moment(element.fecha_cierre).format('DD/MM/YYYY HH:mm:ss')}</div>
        <div><span class="text-bold">Monto Real:</span> ${parseInt(element.monto_real).toFixed(2)}</div>
        <div><span class="text-bold">Monto Diferencia:</span> ${parseInt(element.monto_diferencia).toFixed(2)}</div>
        <div><span class="text-bold">Observación:</span> ${element.observacion}</div>
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
      <div class="text-center text-bold">CONTROL CAJA</div>
      <div><span class="text-bold">Fecha</span> ${moment(fechaInicio).format('DD/MM/YYYY')} - ${moment(fechaFin).format('DD/MM/YYYY')}</div>
      <div><span class="text-bold">Usuario:</span> ${userFind}</div>
      <div><span class="text-bold">Total Ventas:</span> ${parseInt(caja.ventas).toFixed(2)}</div>
      <div><span class="text-bold">Total Reservas:</span> ${parseInt(caja.reservas).toFixed(2)}</div>
      <div><span class="text-bold">Total:</span> ${(parseInt(caja.ventas) + parseInt(caja.reservas)).toFixed(2)}</div>
      <div><span class="text-bold">Cajas:</span> ${textoCajas}</div>
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
}
