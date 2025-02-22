<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <q-form @submit.prevent="getVentas">
          <div class="row">
            <div class="col-6 col-md-2">
              <q-input v-model="fechaInicio" label="Fecha Inicio" type="date" outlined dense />
            </div>
            <div class="col-6 col-md-2">
              <q-input v-model="fechaFin" label="Fecha Fin" type="date" outlined dense />
            </div>
            <div class="col-12 col-md-2 flex flex-center">
              <q-btn label="Buscar" color="primary" type="submit" icon="search" no-caps :loading="loading" />
            </div>
            <div class="col-12 col-md-4">
              <q-input v-model="filter" label="Filtro" outlined dense @update:modelValue="filtroVentas" />
            </div>
            <div class="col-12 col-md-2 text-right">
              <q-btn label="Venta" color="positive" @click="$router.push('/ventas/add')" no-caps icon="add_circle_outline"  />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-md">
      <q-card-section>
        <q-markup-table wrap-cells dense flat bordered>
          <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre Cliente</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="venta in ventas" :key="venta.id">
            <td>{{ venta.fecha }}</td>
            <td>{{ venta.nombre }}</td>
            <td>{{ venta.total }}</td>
            <td>
              <q-btn icon="visibility" color="blue" dense @click="verDetalles(venta.id)" />
            </td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
const fechaInicio = ref(new Date().toISOString().slice(0, 10));
const fechaFin = ref(new Date().toISOString().slice(0, 10));
const ventas = ref([]);
const loading = ref(false);
const filter = ref("");

onMounted(() => {
  getVentas();
});

function filtroVentas() {
  ventas.value = ventas.value.filter(v => v.nombre.toLowerCase().includes(filter.value.toLowerCase()));
}

function getVentas() {
  loading.value = true;
  proxy.$axios.get("/ventas", {
    params: { fechaInicio: fechaInicio.value, fechaFin: fechaFin.value }
  }).then(response => {
    ventas.value = response.data;
  }).finally(() => {
    loading.value = false;
  });
}

function verDetalles(id) {
  proxy.$router.push(`/ventas/${id}`);
}
</script>
