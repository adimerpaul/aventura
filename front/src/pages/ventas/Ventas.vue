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
              <q-btn label="Venta" color="positive" @click="$router.push('/ventas/add')" no-caps icon="add_circle_outline"
                     :loading="loading"
              />
            </div>
          </div>
        </q-form>
        <div class="row">
          <div class="col-12 col-md-4 q-pa-xs">
            <q-list bordered padding dense>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="indigo" text-color="white" icon="event" />
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-bold">
                      {{ventas.length}} ventas
                    </span>
                  </q-item-label>
                  <q-item-label caption lines="2">
                    Cantida de ventas
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <q-list bordered padding dense>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="green" text-color="white" icon="attach_money" />
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-bold">
                      Bs {{ventas.filter(venta => !venta.anulada).reduce((acc, venta) => acc + parseFloat(venta.total), 0).toFixed(2)}}
                    </span>
                  </q-item-label>
                  <q-item-label caption lines="2">
                    Total de reservas
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <!--          total cancalado anulados-->
          <div class="col-12 col-md-4 q-pa-xs">
            <q-list bordered padding dense>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="red" text-color="white" icon="cancel" />
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-bold">
                      Bs {{ventas.filter(venta => venta.anulada).reduce((acc, venta) => acc + parseFloat(venta.total), 0).toFixed(2)}}
                    </span>
                  </q-item-label>
                  <q-item-label caption lines="2">
                    Total de reservas canceladas
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-md">
      <q-card-section>
        <q-markup-table wrap-cells dense flat bordered>
          <thead>
          <tr>
            <th>Acciones</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Nombre Cliente</th>
            <th>Usuario</th>
            <th>Detalle</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="venta in ventas" :key="venta.id">
            <td>
              <q-btn style="width: 80px" icon="remove_circle_outline" color="negative" dense @click="anular(venta.id)" label="Anular" no-caps size="10px"
                     v-if="!venta.anulada"
              />
              <div v-else>
                <q-chip color="red" text-color="white" label="Anulada" />
              </div>
            </td>
            <td>{{ venta.fecha }}</td>
            <td>{{ venta.total }}</td>
            <td>{{ venta.nombre }}</td>
            <td>{{ venta.user?.name }}</td>
            <td>{{ venta.detalleText }}</td>
          </tr>
          </tbody>
        </q-markup-table>
<!--        <pre>{{ventas}}</pre>-->
<!--        [-->
<!--        {-->
<!--        "id": 31,-->
<!--        "fecha": "2025-02-21 22:28:25",-->
<!--        "total": 20,-->
<!--        "nombre": "SN",-->
<!--        "anulada": 0,-->
<!--        "user_id": 1,-->
<!--        "detalleText": "1 COMBO PIPOCA Y 2 GASEOSA 20",-->
<!--        "detalles": [-->
<!--        {-->
<!--        "id": 27,-->
<!--        "cantidad": 1,-->
<!--        "producto": "COMBO PIPOCA Y 2 GASEOSA",-->
<!--        "precio": 20,-->
<!--        "producto_id": 15,-->
<!--        "venta_id": 31,-->
<!--        "user_id": 1-->
<!--        }-->
<!--        ],-->
<!--        "user": {-->
<!--        "id": 1,-->
<!--        "name": "Adimer Paul Chambi Ajata",-->
<!--        "avatar": "default.png",-->
<!--        "username": "admin",-->
<!--        "email": null,-->
<!--        "role": "Admin",-->
<!--        "email_verified_at": null,-->
<!--        "color": "red"-->
<!--        }-->
<!--        },-->
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import moment from "moment";

const { proxy } = getCurrentInstance();
const fechaInicio = ref(moment().format("YYYY-MM-DD"));
const fechaFin = ref(moment().format("YYYY-MM-DD"));
const ventas = ref([]);
const ventasAll = ref([]);
const loading = ref(false);
const filter = ref("");

onMounted(() => {
  getVentas();
});

function filtroVentas() {
  ventas.value = ventasAll.value.filter(venta => {
    return (
      venta.nombre.toLowerCase().includes(filter.value.toLowerCase()) ||
      venta.user?.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      venta.detalleText.toLowerCase().includes(filter.value.toLowerCase())
    //    texto de detalle
    );
  });
}

function anular(id) {
  proxy.$q.dialog({
    title: "Anular Venta",
    message: "¿Está seguro de anular la venta?",
    ok: "Sí",
    cancel: "No"
  }).onOk(() => {
    loading.value = true;
    proxy.$axios.put(`/ventas/${id}/anular`).then(() => {
      getVentas();
    }).finally(() => {
      loading.value = false;
    });
  });
}
function getVentas() {
  loading.value = true;
  proxy.$axios.get("/ventas", {
    params: { fechaInicio: fechaInicio.value, fechaFin: fechaFin.value }
  }).then(response => {
    ventas.value = response.data;
    ventasAll.value = response.data;
  }).finally(() => {
    loading.value = false;
  });
}

function verDetalles(id) {
  proxy.$router.push(`/ventas/${id}`);
}
</script>
