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
<!--              <q-btn label="Imprimir" color="indigo" icon="print" no-caps @click="imprimirTotal" v-if="$store.user.role === 'Admin'" />-->
              <q-btn-dropdown color="indigo" icon="print" no-caps label="Imprimir" v-if="$store.user.role === 'Admin'">
                <q-list>
                  <q-item clickable @click="imprimirTotal" v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="print" />
                    </q-item-section>
                    <q-item-section>
                      Imprimir Totales
                    </q-item-section>
                  </q-item>
                  <q-item clickable @click="imprimirReporteGanancias" v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="bar_chart" />
                    </q-item-section>
                    <q-item-section>
                      Reporte Ganancias por Producto
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-md">
      <div class="row q-mt-md">
        <div class="col-12 col-md-3 q-pa-xs">
          <q-list bordered padding dense>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="indigo" text-color="white" icon="event" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <span class="text-weight-bold">{{ compras.length }} compras</span>
                </q-item-label>
                <q-item-label caption>Cantidad total de compras</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-3 q-pa-xs">
          <q-list bordered padding dense>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="green" text-color="white" icon="attach_money" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
            <span class="text-weight-bold">
              Bs {{ compras.filter(c => !c.anulada).reduce((a, c) => a + parseFloat(c.total), 0).toFixed(2) }}
            </span>
                </q-item-label>
                <q-item-label caption>Monto total gastado</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-3 q-pa-xs">
          <q-list bordered padding dense>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="amber" text-color="white" icon="trending_up" />
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1">
          <span class="text-weight-bold">
            Bs {{ gananciaAyacucho.toFixed(2)}}
          </span>
                </q-item-label>
                <q-item-label caption lines="2">
                  Ganancia Ayacucho
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-3 q-pa-xs">
          <q-list bordered padding dense>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="amber" text-color="white" icon="trending_up" />
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1">
          <span class="text-weight-bold">
            Bs {{ gananciaOquendo.toFixed(2)}}
          </span>
                </q-item-label>
                <q-item-label caption lines="2">
                  Ganancia Oquendo
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

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
<!--              <q-btn icon="cancel" color="negative" dense @click="anular(compra.id)" label="Anular" no-caps v-if="!compra.anulada"-->
<!--              size="10px"/>-->
              <q-btn-dropdown v-if="!compra.anulada" color="primary" dense size="10px"
                              label="Acciones" no-caps>
                <q-list>
                  <q-item clickable @click="anular(compra.id)" v-if="!compra.anulada" v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="cancel" color="negative" />
                    </q-item-section>
                    <q-item-section>
                      Anular
                    </q-item-section>
                  </q-item>
                  <q-item clickable @click="imprimirCompra(compra)" v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="print" color="indigo" />
                    </q-item-section>
                    <q-item-section>
                      Imprimir
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-chip color="red" text-color="white" label="Anulada" v-else />
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
<!--    myElement-->
    <div id="myElement" class="hidden"></div>
  </q-page>
</template>

<script setup>
import {ref, onMounted, getCurrentInstance, computed} from 'vue';
import moment from 'moment';
import { Impresion } from '../../addons/impresion.js';

const { proxy } = getCurrentInstance();
const fechaInicio = ref(moment().format("YYYY-MM-DD"));
const fechaFin = ref(moment().format("YYYY-MM-DD"));
const compras = ref([]);
const loading = ref(false);
const users = ref([]);
const user = ref('');
const gananciaOquendo = ref(0);
const gananciaAyacucho = ref(0);
const ventasAyacucho = ref([]);
const ventasOquendo = ref([]);

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
    compras.value = response.data.compras;
    gananciaOquendo.value = response.data.gananciaOquendo;
    gananciaAyacucho.value = response.data.gananciaAyacucho;
    ventasAyacucho.value = response.data.ventasAyacucho;
    ventasOquendo.value = response.data.ventasOquendo;
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
function imprimirReporteGanancias() {
  const userFind = users.value.find(u => u.id === user.value)?.name || 'Todos';
  Impresion.imprimirReporteGananciasPorProducto(
    ventasAyacucho.value,
    ventasOquendo.value,
    fechaInicio.value,
    fechaFin.value,
    userFind
  );
}

function imprimirTotal() {
  const userFind = users.value.find(u => u.id === user.value)?.name || 'Todos';

  // tambien filtarr si seleciona un suaurio
  const comprasFiltradas = compras.value.filter(compra => !compra.anulada);
  // const comprasFiltradas = compras.value.filter(compra => {
  //   return compra.fecha >= fechaInicio.value && compra.fecha <= fechaFin.value && !compra.anulada;
  // });
  Impresion.imprimirComprasTotales(comprasFiltradas, fechaInicio.value, fechaFin.value, userFind);
}
function imprimirCompra(compra) {
  const userFind = compra.user?.name || '';
  Impresion.imprimirCompraUnica(compra, userFind);
}
const totalGastado = computed(() =>
  compras.value.filter(c => !c.anulada).reduce((acc, c) => acc + parseFloat(c.total), 0)
);

const totalAnulado = computed(() =>
  compras.value.filter(c => c.anulada).reduce((acc, c) => acc + parseFloat(c.total), 0)
);

const cantidadCompras = computed(() =>
  compras.value.filter(c => !c.anulada).length
);

const cantidadAnuladas = computed(() =>
  compras.value.filter(c => c.anulada).length
);
</script>
