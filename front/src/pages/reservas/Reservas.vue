<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-2">
            <q-input v-model="fecha" type="date" label="Fecha" dense outlined />
          </div>
        </div>
        <q-markup-table wrap-cells dense bordered flat separator="cell">
          <thead>
            <tr>
              <th>Hora</th>
              <template v-for="sala in salas">
                <th>{{ sala.sala }}</th>
              </template>
            </tr>
          </thead>
          <tbody>
            <template v-for="hora in horarios">
              <tr>
                <td class="text-right">{{ hora.hora }}</td>
                <template v-for="sala in salas">
                  <td class="bg-green text-center">
                  </td>
                </template>
              </tr>
            </template>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import {onMounted, ref} from "vue";
import moment from "moment";

const fecha = ref(moment().format("YYYY-MM-DD"));
const salas = ref([])
const horarios = ref([])
onMounted(() => {
  // for 20
  for (let i = 0; i < 20; i++) {
    salas.value.push({
      sala: "Sala "+(i + 1),
    })
  }
  // horasio de 8:00 hasta las 23 horas de medio hora mas medio hora
  for (let i = 8; i < 23; i++) {
    horarios.value.push({
      hora: `${i}:00`
    })
    horarios.value.push({
      hora: `${i}:30`
    })
  }
});
</script>
