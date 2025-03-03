<template>
  <q-page class="q-pa-xs">
    <q-card>
      <q-card-section>
        <q-form @submit="getMetricas">
          <div class="row">
            <div class="col-12 col-md-2">
              <q-input dense outlined v-model="fechaInicio" label="Fecha Inicio" type="date" />
            </div>
            <div class="col-12 col-md-2">
              <q-input dense outlined v-model="fechaFin" label="Fecha Fin" type="date" />
            </div>
            <div class="col-12 col-md-2 flex flex-center">
              <q-btn color="primary" label="Buscar" type="submit" icon="search" no-caps />
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-12">
            <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
<!--        <q-table-->
<!--          :rows="metricas"-->
<!--          :columns="columns"-->
<!--          row-key="fecha"-->
<!--          dense-->
<!--        >-->
<!--          <template v-slot:body-cell(users)="props">-->
<!--            <q-td>-->
<!--              <div v-for="user in props.row.users" :key="user.id">-->
<!--                {{ user.name }} - {{ user.monto_real }} Bs-->
<!--              </div>-->
<!--            </q-td>-->
<!--          </template>-->
<!--        </q-table>-->
        <q-markup-table dense flat bordered>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Total (Bs)</th>
              <th>Usuarios y Montos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in metricas" :key="m.fecha">
              <td>{{ m.fechaFormat }}</td>
              <td>{{ m.monto_total }}</td>
              <td>
                <div v-for="caja in m.cajas" :key="caja.id">
                  {{ caja.user.name }} - {{ caja.monto_real }} Bs
                </div>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import moment from "moment";
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance();

const fechaInicio = ref(moment().startOf("isoWeek").format("YYYY-MM-DD"));
const fechaFin = ref(moment().endOf("isoWeek").format("YYYY-MM-DD"));

const metricas = ref([]);
const series = ref([]);
const chartOptions = ref({
  chart: { height: 350, type: "bar" },
  plotOptions: { bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 2, colors: ["transparent"] },
  xaxis: { categories: [] },
  yaxis: { title: { text: "Monto Total (Bs)" } },
  fill: { opacity: 1 },
  tooltip: { y: { formatter: (val) => `${val} Bs` } },
});

const columns = [
  { name: "fecha", required: true, label: "Fecha", align: "left", field: "fechaFormat" },
  { name: "monto_total", required: true, label: "Total (Bs)", align: "right", field: "monto_total" },
  { name: "users", required: true, label: "Usuarios y Montos", align: "left" },
];

onMounted(() => {
  getMetricas();
});

function getMetricas() {
  proxy.$axios.get("/metricas", {params: {fechaInicio: fechaInicio.value, fechaFin: fechaFin.value}})
    .then(response => {
      metricas.value = response.data;

      // Extraer categorías (fechas)
      const categories = response.data.map(d => d.fechaFormat);

      // Extraer montos por usuario
      const userMontos = {};
      response.data.forEach(d => {
        d.cajas.forEach(caja => {
          if (!userMontos[caja.user.name]) {
            userMontos[caja.user.name] = [];
          }
          userMontos[caja.user.name].push(caja.monto_real);
        });
      });

      // Construir series para ApexCharts
      series.value = Object.keys(userMontos).map(name => ({
        name,
        data: userMontos[name],
      }));

      chartOptions.value.xaxis.categories = categories;
    });
}
</script>
