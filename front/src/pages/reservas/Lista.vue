<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <q-form @submit="getReservas">
        <div class="row">
          <div class="col-6 col-md-2">
            <q-input v-model="fechaInicio" label="Fecha Inicio" type="date" outlined dense />
          </div>
          <div class="col-6 col-md-2">
            <q-input v-model="fechaFin" label="Fecha Fin" type="date" outlined dense />
          </div>
          <div class="col-6 col-md-2 flex flex-center">
            <q-btn label="Buscar" color="primary" type="submit" icon="search" no-caps :loading="loading" />
          </div>
        </div>
        </q-form>
        <pre>{{reservas}}</pre>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import moment from "moment";

const {proxy} = getCurrentInstance()
const fechaInicio = ref(moment().format('YYYY-MM-DD'))
const fechaFin = ref(moment().format('YYYY-MM-DD'))
const reservas = ref([])
const loading = ref(false)

onMounted(() => {
  getReservas()
})
function getReservas() {
  loading.value = true
  proxy.$axios.get('reservasAll',{
    params: {
      fechaInicio: fechaInicio.value,
      fechaFin: fechaFin.value
    }
  }).then(response => {
    reservas.value = response.data
  })
  .catch(error => {
    console.log(error)
  }).finally(() => {
    loading.value = false
  })
}
</script>
