<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <q-form @submit.prevent="getCompras">
          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md-2">
              <q-input v-model="fechaInicio" label="Fecha Inicio" type="date" outlined dense />
            </div>
            <div class="col-12 col-md-2">
              <q-input v-model="fechaFin" label="Fecha Fin" type="date" outlined dense />
            </div>
            <div class="col-12 col-md-2">
              <q-select v-model="user" label="Usuario" outlined dense :options="users"
                        option-label="name" option-value="id" emit-value map-options
                        v-if="$store.user.role === 'Admin'" />
            </div>
            <div class="col-12 col-md-2 flex flex-center">
              <q-btn label="Buscar" color="primary" type="submit" icon="search" no-caps :loading="loading" />
            </div>
            <div class="col-12 col-md-2">
              <q-btn label="Nueva Compra" color="positive" icon="add_circle_outline" no-caps
                     @click="$router.push('/compras/add')" :loading="loading" />
            </div>
            <div class="col-12 col-md-2">
              <q-btn label="Imprimir" color="indigo" icon="print" no-caps @click="imprimir" v-if="$store.user.role === 'Admin'" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-md">
      <q-card-section>
        <q-markup-table wrap-cells dense flat bordered>
          <thead>
          <tr class="bg-green text-white">
            <th>Acciones</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Detalle</th>
            <th>Proveedor</th>
            <th>Usuario</th>
            <th>Agencia</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="compra in compras" :key="compra.id">
            <td>
<!--              <q-btn icon="cancel" color="negative" dense @click="anular(compra.id)" label="Anular" no-caps v-if="!compra.anulada" />-->
<!--              <q-chip color="red" text-color="white" label="Anulada" v-else />-->
            </td>
            <td>{{ compra.fecha }}</td>
            <td>{{ compra.total }}</td>
            <td>
              <div style="wrap-option: break-word; width: 200px; line-height: 0.8">
                {{compra.detalleText}}
              </div>
            </td>
            <td>{{ compra.nombre }}</td>
            <td>{{ compra.user?.username }}</td>
            <td>{{ compra.agencia }}</td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import moment from 'moment';
import { Impresion } from '../../addons/impresion.js';

const { proxy } = getCurrentInstance();
const fechaInicio = ref(moment().format("YYYY-MM-DD"));
const fechaFin = ref(moment().format("YYYY-MM-DD"));
const compras = ref([]);
const loading = ref(false);
const users = ref([]);
const user = ref('');

onMounted(() => {
  getUsers();
  getCompras();
});

function getUsers() {
  users.value = [{ id: '', name: 'Todos' }];
  proxy.$axios.get("/usersSucursal").then(response => {
    response.data.forEach(user => {
      users.value.push({ id: user.id, name: user.name });
    });
  });
}

function getCompras() {
  loading.value = true;
  proxy.$axios.get("/compras", {
    params: {
      fechaInicio: fechaInicio.value,
      fechaFin: fechaFin.value,
      user_id: user.value
    }
  }).then(response => {
    compras.value = response.data;
  }).finally(() => {
    loading.value = false;
  });
}

function anular(id) {
  proxy.$q.dialog({
    title: "Anular Compra",
    message: "¿Está seguro de anular la compra?",
    ok: "Sí",
    cancel: "No"
  }).onOk(() => {
    loading.value = true;
    proxy.$axios.put(`/compras/${id}/anular`).then(() => {
      getCompras();
    }).finally(() => {
      loading.value = false;
    });
  });
}

function imprimir() {
  if (!user.value) {
    proxy.$alert.error("Seleccione un usuario", "Por favor");
    return;
  }
  loading.value = true;
  proxy.$axios.post("/compras/imprimir", {
    user_id: user.value,
    fechaInicio: fechaInicio.value,
    fechaFin: fechaFin.value
  }).then((res) => {
    const userFind = users.value.find(u => u.id === user.value);
    Impresion.imprimirCompras(res.data, fechaInicio.value, fechaFin.value, userFind?.name || '');
  }).finally(() => {
    loading.value = false;
  });
}
</script>
