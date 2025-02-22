<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <q-form @submit="getProductos">
          <div class="row">
            <div class="col-12 col-md-4">
              <q-input v-model="filter" label="Buscar producto" outlined dense @update:modelValue="filtroProductos" />
            </div>
            <div class="col-12 col-md-2 flex flex-center">
              <q-btn label="Agregar" color="primary" icon="add" no-caps @click="abrirModal" />
            </div>
          </div>
        </q-form>
        <q-markup-table wrap-cells dense flat bordered>
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.stock }}</td>
            <td>
              <q-btn icon="edit" color="blue" dense @click="editarProducto(producto)" />
              <q-btn icon="delete" color="red" dense @click="eliminarProducto(producto.id)" />
            </td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="modalVisible">
      <q-card>
        <q-card-section>
          <q-form @submit.prevent="guardarProducto">
            <q-input v-model="producto.nombre" label="Nombre" outlined dense required />
            <q-input v-model="producto.precio" label="Precio" type="number" outlined dense required />
            <q-input v-model="producto.stock" label="Stock" type="number" outlined dense required />
            <q-btn label="Guardar" color="primary" type="submit" class="q-mt-md" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
const productos = ref([]);
const productosAll = ref([]);
const filter = ref("");
const modalVisible = ref(false);
const producto = ref({ id: null, nombre: "", precio: "", stock: "" });

onMounted(() => {
  getProductos();
});

function filtroProductos() {
  productos.value = productosAll.value.filter(p => p.nombre.toLowerCase().includes(filter.value.toLowerCase()));
}

function getProductos() {
  proxy.$axios.get("/productos").then(response => {
    productos.value = response.data;
    productosAll.value = response.data;
  });
}

function abrirModal() {
  producto.value = { id: null, nombre: "", precio: "", stock: "" };
  modalVisible.value = true;
}

function editarProducto(p) {
  producto.value = { ...p };
  modalVisible.value = true;
}

function guardarProducto() {
  if (producto.value.id) {
    proxy.$axios.put(`/productos/${producto.value.id}`, producto.value).then(getProductos);
  } else {
    proxy.$axios.post("/productos", producto.value).then(getProductos);
  }
  modalVisible.value = false;
}

function eliminarProducto(id) {
  proxy.$axios.delete(`/productos/${id}`).then(getProductos);
}
</script>
