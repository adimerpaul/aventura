<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row q-mb-xs">
          <div class="col-12 col-md-6">
            <q-input v-model="filter" label="Buscar consola" outlined dense @update:modelValue="filtrar" />
          </div>
          <div class="col-12 col-md-6 text-right">
            <q-btn label="Agregar" color="green" icon="add_circle_outline" no-caps @click="abrirModal" :loading="loading" />
          </div>
        </div>

        <q-markup-table wrap-cells dense flat bordered>
          <thead>
            <tr class="text-bold bg-primary text-white">
              <th class="text-center">Acciones</th>
              <th class="text-left">Nombre</th>
              <th class="text-center">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="consola in consolas" :key="consola.id">
              <td class="text-center">
                <q-btn-dropdown label="Opciones" no-caps dropdown-icon="more_vert" color="primary" dense size="sm" :loading="loading" anchor="bottom left" self="top left">
                  <q-list dense>
                    <q-item clickable v-close-popup @click="editar(consola)">
                      <q-item-section avatar><q-icon name="edit" color="blue" /></q-item-section>
                      <q-item-section>Editar</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="eliminar(consola.id)">
                      <q-item-section avatar><q-icon name="delete" color="red" /></q-item-section>
                      <q-item-section class="text-red">Eliminar</q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </td>
              <td>{{ consola.nombre }}</td>
              <td class="text-center">Bs/ {{ consola.precio_1 }}</td>
            </tr>
            <tr v-if="consolas.length === 0">
              <td colspan="3" class="text-center text-grey">No hay tipos de consola registrados</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="modalVisible">
      <q-card style="min-width: 320px">
        <q-card-section class="text-h6 q-pb-none row items-center">
          <div>{{ form.id ? 'Editar consola' : 'Agregar consola' }}</div>
          <q-space />
          <q-btn flat dense icon="close" @click="modalVisible = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="guardar">
            <q-input v-model="form.nombre" label="Nombre" outlined dense required class="q-mb-sm" />
            <q-input v-model="form.precio_1" label="Precio 1" type="number" outlined dense required class="q-mb-sm" />
            <q-input v-model="form.precio_2" label="Precio 2" type="number" outlined dense required class="q-mb-sm" />
            <div class="text-right">
              <q-btn label="Guardar" color="primary" type="submit" :loading="loading" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useQuasar } from 'quasar'

const { proxy } = getCurrentInstance()
const $q = useQuasar()

const consolasAll = ref([])
const consolas = ref([])
const filter = ref('')
const modalVisible = ref(false)
const loading = ref(false)
const form = ref({ id: null, nombre: '', precio_1: '', precio_2: '' })

onMounted(() => {
  cargar()
})

function filtrar() {
  consolas.value = consolasAll.value.filter(c =>
    c.nombre.toLowerCase().includes(filter.value.toLowerCase())
  )
}

function cargar() {
  proxy.$axios.get('/tipoConsolas').then(res => {
    consolasAll.value = res.data
    consolas.value = res.data
  })
}

function abrirModal() {
  form.value = { id: null, nombre: '', precio_1: '', precio_2: '' }
  modalVisible.value = true
}

function editar(consola) {
  form.value = { ...consola }
  modalVisible.value = true
}

function guardar() {
  loading.value = true
  const req = form.value.id
    ? proxy.$axios.put(`/tipoConsolas/${form.value.id}`, form.value)
    : proxy.$axios.post('/tipoConsolas', form.value)

  req.then(() => {
    modalVisible.value = false
    cargar()
  }).finally(() => {
    loading.value = false
  })
}

function eliminar(id) {
  $q.dialog({
    title: 'Eliminar consola',
    message: '¿Está seguro de eliminar este tipo de consola?',
    persistent: true,
    ok: { label: 'Sí', color: 'negative', push: true },
    cancel: { label: 'No', color: 'primary', push: true }
  }).onOk(() => {
    loading.value = true
    proxy.$axios.delete(`/tipoConsolas/${id}`).then(cargar).catch(res => {
      proxy.$alert.error(res.response.data.message, 'Error')
    }).finally(() => {
      loading.value = false
    })
  })
}
</script>
