<template>
  <q-page class="q-pa-xs">
    <div class="row">
      <div class="col-12">
        <q-btn label="Atras" color="primary" @click="$router.push('/compras')" no-caps icon="arrow_back" dense size="10px"/>
      </div>
      <div class="col-12 col-md-5">
        <q-card flat bordered class="q-ma-xs">
          <q-card-section>
            <q-input v-model="buscarProducto" label="Buscar producto" outlined dense debounce="300" @update:modelValue="buscarProductos" />
            <q-list bordered padding dense>
              <template v-for="producto in productos" :key="producto.id">
                <q-item clickable v-ripple @click="agregarAlCarrito(producto)">
                  <q-item-section>
                    <q-item-label>{{ producto.nombre }}</q-item-label>
                    <q-item-label caption>
                      <span v-if="producto.producto_combo.length > 0">
                        <q-chip v-for="combo in producto.producto_combo" :key="combo.id" :label="combo.cantidad+' '+combo.producto_hijo.nombre" dense />
                      </span>
                      {{ producto.precio }} Bs
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>Stock <br> {{ producto.stock }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset />
              </template>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-7">
        <q-card flat bordered class="q-ma-xs">
          <q-card-section>
            <div class="div">
              <div class="text-h6 row items-center">
                <div>Carrito</div>
                <q-space />
                <q-btn icon="delete" color="red" dense @click="carrito = []" :loading="loading" size="10px" label="Limpiar" no-caps />
              </div>
              <div class="text-caption">Productos comprados</div>
            </div>
            <q-markup-table wrap-cells dense flat bordered>
              <thead>
              <tr class="bg-primary text-white">
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
<!--                <th>Acciones</th>-->
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in carrito" :key="index">
                <td>
                  <div style="wrap-option: break-word;width: 120px; line-height: 0.8">
                    <q-btn icon="delete" color="red" dense @click="eliminarDelCarrito(index)" :loading="loading" size="10px" />
                    {{ item.nombre }}
                  </div>
                </td>
                <td><input v-model.number="item.cantidadVenta" type="number" style="width: 60px" step="0.01"/></td>
                <td><input v-model.number="item.precioVenta" type="number" style="width: 60px" step="0.01"/></td>
                <td>
                  {{ (item.cantidadVenta * item.precioVenta).toFixed(2) }} Bs
<!--                  btn caulculadora-->
                  <q-btn icon="calculate" color="gray" flat dense @click="calcularCaja(item)" size="10px" no-caps />
                </td>
<!--                <td></td>-->
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-right text-bold">Total</td>
                <td class="text-bold">{{ totalCompra }} Bs</td>
<!--                <td></td>-->
              </tr>
              </tfoot>
            </q-markup-table>
            <q-btn label="Registrar Compra" color="positive" class="full-width q-mt-md" no-caps @click="realizarCompra"
                   :loading="loading" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="dialogCompra">
      <q-card flat bordered>
        <q-card-section class="q-pb-none row items-center">
          <div class="text-bold">Registrar Compra</div>
          <q-space />
          <q-btn flat dense round icon="close" @click="dialogCompra = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="realizarCompraPost">
            <q-input v-model="compra.nombre" label="Proveedor / Nota" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            <q-btn label="Registrar Compra" color="positive" type="submit" no-caps :loading="loading" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import {ref, computed, getCurrentInstance, onMounted} from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const { proxy } = getCurrentInstance();
const compra = ref({ nombre: "" });
const productos = ref([]);
const productosAll = ref([]);
const carrito = ref([]);
let buscarProducto = ref("");
const dialogCompra = ref(false);
const loading = ref(false);
import {useQuasar} from "quasar";
const $q = useQuasar();
onMounted(() => { getProductos(); });

function calcularCaja(item) {
  $q.dialog({
    title: 'Calcular Caja',
    html: true,
    message: `Producto: ${item.nombre} <br> Cantidad: ${item.cantidadVenta}`,
    prompt: {
      // model: item.total,
      type: 'number',
      label: 'Total de cajas',
      min: 1,
      max: 100000,
      required: true
    },
    cancel: true,
    ok: {
      label: 'Calcular',
      color: 'primary'
    }
  }).onOk((total) => {
    const precio = total / item.cantidadVenta;
    console.log(precio)
    item.precioVenta = precio.toFixed(3);
  });
}
function getProductos() {
  proxy.$axios.get("/productos").then(response => {
    productos.value = response.data;
    productosAll.value = response.data;
  });
}

const totalCompra = computed(() => {
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

function realizarCompra() {
  if (carrito.value.length === 0) {
    proxy.$alert.error("El carrito está vacío", "Error");
    return;
  }
  dialogCompra.value = true;
  compra.value = { nombre: "Proveedor", };
}

function realizarCompraPost() {
  if (carrito.value.length === 0) {
    proxy.$alert.error("El carrito está vacío");
    return;
  }
  loading.value = true;
  proxy.$axios.post("/compras", { ...compra.value, total: totalCompra.value, productos: carrito.value }).then(async () => {
    carrito.value = [];
    compra.value = { nombre: "" };
    dialogCompra.value = false;
    proxy.$alert.success("Compra registrada con éxito", "Éxito");
    router.push("/compras");
    buscarProducto.value = "";
  }).catch((res) => {
    proxy.$alert.error(res.response.data.message, "Error");
  }).finally(() => {
    loading.value = false;
  });
}
</script>
