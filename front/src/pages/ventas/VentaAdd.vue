<template>
  <q-page class="q-pa-xs">
    <div class="row">
      <div class="col-12">
<!--        btn atras-->
        <q-btn label="Atras" color="primary" @click="$router.push('/ventas')" no-caps icon="arrow_back" />
      </div>
      <div class="col-12 col-md-7">
        <q-card flat bordered class="q-ma-xs">
          <q-card-section>
            <q-input v-model="buscarProducto" label="Buscar producto" outlined dense debounce="300" @update:modelValue="buscarProductos" />
            <q-list bordered padding dense>
              <template v-for="producto in productos" :key="producto.id">
                <q-item  clickable v-ripple @click="agregarAlCarrito(producto)">
                  <q-item-section>
                    <q-item-label>{{ producto.nombre }}</q-item-label>
                    <q-item-label caption>{{ producto.precio }} Bs</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ producto.stock }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset />
              </template>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-5">
        <q-card flat bordered class="q-ma-xs">
          <q-card-section>
            <q-markup-table wrap-cells dense flat bordered>
              <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in carrito" :key="index">
                <td>{{ item.nombre }}</td>
                <td>
                  <q-input v-model.number="item.cantidadVenta" type="number" dense outlined />
                </td>
                <td>
<!--                  {{ item.precio }} Bs-->
                  <q-input v-model.number="item.precioVenta" type="number" dense outlined />
                </td>
                <td>{{ (item.cantidadVenta * item.precioVenta).toFixed(2) }} Bs</td>
                <td>
                  <q-btn icon="delete" color="red" dense @click="eliminarDelCarrito(index)" :loading="loading" />
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-right text-bold">Total</td>
                <td class="text-bold">{{ totalVenta }} Bs</td>
                <td></td>
              </tr>
              </tfoot>
            </q-markup-table>
            <q-btn label="Realizar Venta" color="positive" class="full-width q-mt-md" no-caps @click="realizarVenta"
                   :loading="loading"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="dialogVenta">
      <q-card flat bordered>
        <q-card-section>
          <q-form @submit.prevent="realizarVentaPost">
            <q-input v-model="venta.nombre" label="Nombre Cliente" outlined dense :rules="[val => !!val || 'Campo requerido']" />
<!--            <q-input v-model="venta.fecha" label="Fecha" type="date" outlined dense />-->
<!--            <q-input v-model="venta.total" label="Total" outlined dense />-->
<!--            <q-input v-model="venta.productos" label="Productos" outlined dense />-->
            <q-btn label="Realizar Venta" color="positive" type="submit" no-caps :loading="loading" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import {ref, computed, getCurrentInstance, onMounted} from "vue";

const { proxy } = getCurrentInstance();
const venta = ref({ nombre: "", fecha: new Date().toISOString().slice(0, 10) });
const productos = ref([]);
const productosAll = ref([]);
const carrito = ref([]);
let buscarProducto = ref("");
const dialogVenta = ref(false);
const loading = ref(false);

onMounted(() => {
  getProductos();
});
function getProductos() {
  proxy.$axios.get("/productos").then(response => {
    productos.value = response.data;
    productosAll.value = response.data;
  });
}

const totalVenta = computed(() => {
  return carrito.value.reduce((acc, item) => acc + (item.cantidadVenta * item.precioVenta), 0).toFixed(2);
});

function buscarProductos() {
  productos.value = productosAll.value.filter(p => p.nombre.toLowerCase().includes(buscarProducto.value.toLowerCase()));
}

function agregarAlCarrito(producto) {
  const item = carrito.value.find(p => p.id === producto.id);
  if (item) {
    item.cantidadVenta++;
  } else {
    carrito.value.push({ ...producto, cantidadVenta: 1, precioVenta: producto.precio });
  }
}

function eliminarDelCarrito(index) {
  carrito.value.splice(index, 1);
}

function realizarVenta() {
  // if (carrito.value.length === 0) {
  //   proxy.$q.notify({ color: "negative", message: "El carrito está vacío" });
  //   return;
  // }
  // proxy.$axios.post("/ventas", { ...venta.value, total: totalVenta.value, productos: carrito.value }).then(() => {
  //   carrito.value = [];
  //   venta.value = { nombre: "", fecha: new Date().toISOString().slice(0, 10) };
  //   proxy.$q.notify({ color: "positive", message: "Venta realizada con éxito" });
  // });
  if (carrito.value.length === 0) {
    proxy.$alert.error("El carrito está vacío", "Error");
    return;
  }
  dialogVenta.value = true;
  venta.value = { nombre: "SN", };
}
function realizarVentaPost() {
  if (carrito.value.length === 0) {
    proxy.$alert.error("El carrito está vacío");
    return;
  }
  loading.value = true;
  proxy.$axios.post("/ventas", { ...venta.value, total: totalVenta.value, productos: carrito.value }).then(async () => {
    carrito.value = [];
    venta.value = {nombre: "", fecha: new Date().toISOString().slice(0, 10)};
    dialogVenta.value = false;
    proxy.$alert.success("Venta realizada con éxito", "Éxito");
    await getProductos();
    buscarProducto.value = "";
  }).finally(() => {
    loading.value = false;
  });
}
</script>
