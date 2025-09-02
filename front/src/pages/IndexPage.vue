<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="row q-col-gutter-md items-stretch">
      <!-- HEADER / FILTERS -->
      <div class="col-12">
        <q-card class="shadow-2 rounded-2xl">
          <q-card-section class="row q-col-gutter-md items-center">
            <div class="col-12 col-md-4">
              <div class="text-h6">Dashboard Cine</div>
              <div class="text-caption text-grey-7">Caja, Ventas, Reservas (según tu sucursal)</div>
            </div>

            <div class="col-6 col-md-3">
              <q-input v-model="filters.fechaInicio" label="Fecha inicio" type="date" dense outlined :disable="loading" />
            </div>
            <div class="col-6 col-md-3">
              <q-input v-model="filters.fechaFin" label="Fecha fin" type="date" dense outlined :disable="loading" />
            </div>

            <div class="col-12 col-md-2 flex items-center q-gutter-sm">
              <q-toggle v-model="filters.incluirAnuladas" label="Incluir anuladas (productos)" :disable="loading" />
              <q-btn :loading="loading" color="primary" icon="refresh" label="Actualizar" no-caps @click="loadAll" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- KPI CARDS -->
      <div class="col-12 col-sm-6 col-md-3" v-for="k in kpis" :key="k.key">
        <q-card class="kpi-card shadow-2">
          <q-card-section>
            <div class="row items-center justify-between">
              <div>
                <div class="text-caption text-grey-7">{{ k.label }}</div>
                <div class="text-h5 q-mt-xs">{{ k.formatter(k.value) }}</div>
              </div>
              <q-avatar :icon="k.icon" size="44px" :color="k.color" text-color="white" />
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="text-caption text-grey-7">
            {{ k.help }}
          </q-card-section>
        </q-card>
      </div>

      <!-- CHART: Caja por día (monto_real) -->
      <div class="col-12 col-lg-7">
        <q-card class="shadow-2">
          <q-card-section class="row items-center justify-between">
            <div class="text-subtitle1">Caja por día</div>
            <q-badge color="grey-7" text-color="white">Monto real</q-badge>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <apexchart v-if="seriesCaja.length" height="320" type="line" :options="chartCaja.options" :series="seriesCaja" />
            <div v-else class="text-grey-6 text-center q-pa-lg">Sin datos para el rango seleccionado</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- CHART: Ingresos Ventas vs Reservas (calculado localmente) -->
      <div class="col-12 col-lg-5">
        <q-card class="shadow-2">
          <q-card-section class="row items-center justify-between">
            <div class="text-subtitle1">Ingresos: Ventas vs Reservas</div>
            <q-badge color="grey-7" text-color="white">Periodo</q-badge>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <apexchart height="320" type="donut" :options="chartIngresos.options" :series="seriesIngresos" />
          </q-card-section>
        </q-card>
      </div>

      <!-- CHART: Reservas por estado (reservasAll) -->
      <div class="col-12 col-lg-4">
        <q-card class="shadow-2">
          <q-card-section class="row items-center justify-between">
            <div class="text-subtitle1">Reservas por estado</div>
            <q-badge color="grey-7" text-color="white">Conteo</q-badge>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <apexchart height="320" type="donut" :options="chartReservas.options" :series="seriesReservas" />
          </q-card-section>
        </q-card>
      </div>

      <!-- CHART: Top productos vendidos (desde ventas[].detalles) -->
      <div class="col-12 col-lg-8">
        <q-card class="shadow-2">
          <q-card-section class="row items-center justify-between">
            <div class="text-subtitle1">Top productos vendidos</div>
            <q-badge color="grey-7" text-color="white">Cantidad</q-badge>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <apexchart height="320" type="bar" :options="chartTopProd.options" :series="seriesTopProd" />
          </q-card-section>
        </q-card>
      </div>

      <!-- TABLAS RESUMEN -->
      <div class="col-12">
        <q-card class="shadow-2">
          <q-card-section class="row items-center justify-between">
            <div class="text-subtitle1">Últimas reservas</div>
            <q-btn flat dense icon="open_in_new" label="Ver todas" no-caps @click="$router.push('/reservas')" />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-markup-table flat bordered dense class="bg-white">
              <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Personas</th>
                <th>Estado</th>
                <th>Agencia</th>
                <th>Usuario</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="r in ultimasReservas" :key="r.id">
                <td>{{ formatDate(r.fecha) }}</td>
                <td>{{ r.nombre }}</td>
                <td class="text-right">{{ r.numero_personas }}</td>
                <td>
                  <q-chip dense square :color="estadoColor(r.estado)" text-color="black">{{ r.estado }}</q-chip>
                </td>
                <td>
                  <q-chip dense outline :color="r.agencia === 'Ayacucho' ? 'deep-orange' : 'indigo'" :text-color="r.agencia === 'Ayacucho' ? 'deep-orange-10' : 'indigo-10'">
                    {{ r.agencia || '—' }}
                  </q-chip>
                </td>
                <td>
                  <q-chip dense outline>{{ r.user && r.user.name ? r.user.name : '—' }}</q-chip>
                </td>
              </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import ApexCharts from 'vue3-apexcharts'
export default {
  name: 'DashboardCine',
  components: { apexchart: ApexCharts },
  data () {
    return {
      loading: false,
      filters: {
        fechaInicio: '',
        fechaFin: '',
        incluirAnuladas: false
      },

      // Raw data
      metricas: null,
      cajasPeriodo: [],
      reservasAll: [],
      ventasAll: [],
      productosAgg: [],

      // Resumen calculado local
      resumen: { ventas: 0, reservas: 0 },

      // Tables
      ultimasReservas: [],

      // Chart configs
      chartCaja: {
        options: {
          chart: { toolbar: { show: false }, zoom: { enabled: false } },
          stroke: { width: 3, curve: 'smooth' },
          dataLabels: { enabled: false },
          xaxis: { categories: [] },
          yaxis: { labels: { formatter: v => this.formatNumber(v) } },
          tooltip: { y: { formatter: v => 'Bs ' + this.money(v) } }
        }
      },
      chartIngresos: {
        options: {
          labels: ['Ventas', 'Reservas'],
          legend: { position: 'bottom' },
          tooltip: { y: { formatter: v => 'Bs ' + this.money(v) } }
        }
      },
      chartReservas: {
        options: {
          labels: ['Reservado', 'Finalizado', 'Cancelado'],
          legend: { position: 'bottom' }
        }
      },
      chartTopProd: {
        options: {
          chart: { toolbar: { show: false } },
          plotOptions: { bar: { horizontal: true, borderRadius: 6, barHeight: '65%' } },
          dataLabels: { enabled: false },
          xaxis: { categories: [] }
        }
      }
    }
  },
  computed: {
    kpis () {
      const totalCaja = this.cajasPeriodo.reduce((acc, d) => acc + Number(d.monto_total || 0), 0)
      const reservasActivas = this.reservasAll.filter(r => r.estado === 'Reservado').length
      const ticketProm = this.calcTicketPromedio()

      return [
        { key: 'caja', label: 'Total caja (periodo)', value: totalCaja, icon: 'point_of_sale', color: 'teal', formatter: v => 'Bs ' + this.money(v), help: 'Suma de montos reales de caja' },
        { key: 'ventas', label: 'Ventas del periodo', value: this.resumen.ventas, icon: 'receipt_long', color: 'indigo', formatter: v => 'Bs ' + this.money(v), help: 'Suma de ventas válidas' },
        { key: 'reservas', label: 'Reservas del periodo', value: this.resumen.reservas, icon: 'event_available', color: 'orange', formatter: v => 'Bs ' + this.money(v), help: 'Adelantos + saldos' },
        { key: 'avg', label: 'Ticket promedio', value: ticketProm, icon: 'show_chart', color: 'purple', formatter: v => 'Bs ' + this.money(v), help: 'Ventas / nº de ventas aprox.' }
      ]
    },
    seriesCaja () {
      const cats = this.cajasPeriodo.map(d => d.fechaFormat || d.fecha)
      const data = this.cajasPeriodo.map(d => Number(d.monto_total || 0))
      this.chartCaja.options.xaxis.categories = cats
      return [ { name: 'Caja (Bs)', data } ]
    },
    seriesIngresos () { return [ Number(this.resumen.ventas || 0), Number(this.resumen.reservas || 0) ] },
    seriesReservas () {
      const r = this.reservasAll
      return [
        r.filter(x => x.estado === 'Reservado').length,
        r.filter(x => x.estado === 'Finalizado').length,
        r.filter(x => x.estado === 'Cancelado').length
      ]
    },
    seriesTopProd () {
      const top = this.topProductos(this.productosAgg)
      this.chartTopProd.options.xaxis.categories = top.map(t => t.nombre)
      return [ { name: 'Cantidad', data: top.map(t => t.cantidad) } ]
    }
  },
  created () {
    this.initDates()
    // this.loadAll()
  },
  methods: {
    // ---------- UI helpers ----------
    initDates () {
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      this.filters.fechaInicio = `${yyyy}-${mm}-${dd}`
      this.filters.fechaFin = `${yyyy}-${mm}-${dd}`
    },
    estadoColor (estado) { return estado === 'Reservado' ? 'yellow' : estado === 'Finalizado' ? 'red' : 'grey' },
    formatDate (iso) { try { return new Date(iso).toLocaleString() } catch (e) { return iso || '—' } },
    formatNumber (n) { return new Intl.NumberFormat('es-BO').format(Number(n || 0)) },
    money (n) { return this.formatNumber(Number(n || 0).toFixed(2)) },

    // ---------- API ----------
    apiClient () {
      const instance = axios.create({ baseURL: '/api' })
      const token = localStorage.getItem('token')
      if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
      return instance
    },
    async loadAll () {
      proxy.$alert.dialogPromptPassword('Ingrese Codigo').onOk(async (data) => {
        // console.log(data)
        if (data === 'aventura') {
          this.loading = true
          try {
            await Promise.all([
              this.fetchMetricas(),
              this.fetchReservasAll(),
              this.fetchVentas()
            ])
            this.recalcularResumen()
            this.prepareTables()
          } catch (e) {
            this.$q.notify({type: 'negative', message: 'Error cargando datos', caption: e?.message || ''})
          } finally {
            this.loading = false
          }
        }
      })
    },
    async fetchMetricas () {
      const { fechaInicio, fechaFin } = this.filters
      const { data } = await this.$axios.get('/metricas', { params: { fechaInicio, fechaFin } })
      this.metricas = data
      this.cajasPeriodo = Array.isArray(data?.arrayFecha) ? data.arrayFecha : []
    },
    async fetchReservasAll () {
      const { fechaInicio, fechaFin } = this.filters
      const payload = { fechaInicio, fechaFin, user_id: 0, tipo: 'Todo' }
      const { data } = await this.$axios.get('/reservasAll', { params: payload })
      this.reservasAll = Array.isArray(data) ? data : []
    },
    async fetchVentas () {
      const { fechaInicio, fechaFin } = this.filters
      // el back agrega 00:00:00/23:59:59 y filtra por sucursal del usuario; Admin devuelve lista, otros roles devuelven []
      const { data } = await this.$axios.get('/ventas', { params: { fechaInicio, fechaFin, user_id: '' } })
      this.ventasAll = Array.isArray(data) ? data : []
      // construir agregados de productos desde detalles
      const acc = {}
      this.ventasFiltradas().forEach(v => {
        if (Array.isArray(v.detalles)) {
          v.detalles.forEach(d => {
            const id = d.producto_id || d.id || d.producto
            const name = d.producto || ('Producto ' + id)
            if (!acc[id]) acc[id] = { id, nombre: name, cantidad: 0 }
            acc[id].cantidad += Number(d.cantidad || 0)
          })
        }
      })
      this.productosAgg = Object.values(acc)
    },

    // ---------- Aggregations ----------
    inRange (iso) {
      if (!this.filters.fechaInicio && !this.filters.fechaFin) return true
      const d = new Date(iso)
      const fi = this.filters.fechaInicio ? new Date(this.filters.fechaInicio + 'T00:00:00') : null
      const ff = this.filters.fechaFin ? new Date(this.filters.fechaFin + 'T23:59:59') : null
      if (fi && d < fi) return false
      if (ff && d > ff) return false
      return true
    },
    ventasFiltradas ({ ignoreAnuladas } = {}) {
      return this.ventasAll.filter(v => {
        if (!this.inRange(v.fecha)) return false
        if (!this.filters.incluirAnuladas && !ignoreAnuladas) {
          if (v.anulada === 1 || v.anulada === true || v.anulada === '1') return false
        }
        return true
      })
    },
    recalcularResumen () {
      const ventasSum = this.ventasFiltradas().reduce((acc, v) => acc + Number(v.total || 0), 0)
      const reservasOk = this.reservasAll.filter(r => ['Reservado', 'Finalizado'].includes(r.estado))
      const reservasSum = reservasOk.reduce((acc, r) => acc + Number(r.adelanto || 0) + Number(r.saldo || 0), 0)
      this.resumen = { ventas: ventasSum, reservas: reservasSum }
    },
    calcTicketPromedio () {
      const ventasSum = Number(this.resumen.ventas || 0)
      const nVentas = this.ventasFiltradas().length || 1
      return ventasSum / nVentas
    },
    topProductos (arr) {
      const copy = Array.isArray(arr) ? arr.slice() : []
      copy.sort((a, b) => Number(b.cantidad || 0) - Number(a.cantidad || 0))
      return copy.slice(0, 10)
    },

    prepareTables () {
      this.ultimasReservas = [...this.reservasAll]
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        .slice(0, 10)
    }
  }
}
</script>

<style scoped>
.kpi-card { border-radius: 16px; }
.rounded-2xl { border-radius: 16px; }
</style>
