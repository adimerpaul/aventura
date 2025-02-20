<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-2">
            <q-input v-model="fecha" type="date" label="Fecha" dense outlined />
          </div>
          <div class="col-2 flex flex-center">
            <q-btn color="primary" label="Consultar" @click="consultarReservas" size="11px" no-caps icon="search" />
          </div>
          <div class="col-6 q-ml-md">
            <q-badge color="primary" class="q-pa-sm">
              Tiempo Seleccionado: {{ tiempoSeleccionado }}
            </q-badge>
          </div>
          <div class="col-auto q-ml-auto">
            <q-btn color="green" label="Reservar" @click="clickReserva" no-caps icon="save" size="11px" />
          </div>
        </div>

        <q-markup-table wrap-cells dense bordered flat separator="cell">
          <thead>
          <tr>
            <th>Hora</th>
            <th v-for="sala in salas" :key="sala.sala">{{ sala.sala }}</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(hora, horaIndex) in horarios" :key="horaIndex">
            <tr>
              <td class="text-right">{{ hora.hora }}</td>
              <template v-for="(sala, salaIndex) in salas" :key="salaIndex">
                <template v-if="shouldShowCell(horaIndex, salaIndex)">
                  <td
                    :rowspan="getRowspan(horaIndex, salaIndex)"
                    :class="{
                        'bg-green text-white': seleccionadas[`${horaIndex}-${salaIndex}`] && !reservas[`${horaIndex}-${salaIndex}`],
                        'bg-red text-white': reservas[`${horaIndex}-${salaIndex}`]?.color === 'red',
                        'bg-yellow text-black': reservas[`${horaIndex}-${salaIndex}`]?.color === 'yellow',
                        'bg-grey-3': !seleccionadas[`${horaIndex}-${salaIndex}`] && !reservas[`${horaIndex}-${salaIndex}`]
                      }"
                    class="text-center cursor-pointer"
                    @click="toggleSeleccion(horaIndex, salaIndex, hora.hora)"
                  >
                      <span v-if="reservas[`${horaIndex}-${salaIndex}`]">
                        {{ reservas[`${horaIndex}-${salaIndex}`].nombre }}
                      </span>
                  </td>
                </template>
              </template>
            </tr>
          </template>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>

    <!-- Dialogo de Reserva -->
    <q-dialog v-model="dialogoReservar">
      <q-card style="min-width: 250px;">
        <q-card-section class="q-pb-none row items-center">
          <div class="text-h6">Reservar Sala</div>
          <q-space />
          <q-btn flat dense round icon="close" class="q-ml-auto" @click="dialogoReservar = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="confirmarReserva">
            <q-input v-model="nombre" label="Nombre" dense outlined class="" :rules="[val => !!val || 'Por favor, ingresa un nombre.']" />
            <q-input v-model.number="personas" type="number" label="Número de Personas" dense outlined class="" :rules="[val => val > 0 || 'Por favor, ingresa un número válido.']" />
            <q-input v-model.number="adelanto" type="number" label="Adelanto" dense outlined class="" :rules="[val => val >= 0 || 'Por favor, ingresa un número válido.']" />
            <q-badge color="blue" class="q-pa-sm">
              Tiempo Total: {{ tiempoSeleccionado }}
            </q-badge>
            <div class="q-mt-md text-bold">
              Monto Total: {{ montoTotal }} Bs
            </div>
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" v-close-popup no-caps />
              <q-btn color="green" label="Confirmar" no-caps type="submit" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import {onMounted, ref, computed, getCurrentInstance} from "vue";
import moment from "moment";

const {proxy} = getCurrentInstance();
const fecha = ref(moment().format("YYYY-MM-DD"));
const salas = ref([]);
const horarios = ref([]);
const seleccionadas = ref({});
const reservas = ref(JSON.parse(localStorage.getItem("reservas")) || {});
const totalMinutos = ref(0);
const dialogoReservar = ref(false);
const nombre = ref("");
const personas = ref(1);
const adelanto = ref(0);

// Formatear tiempo total en HH:mm
const tiempoSeleccionado = computed(() => {
  const horas = Math.floor(totalMinutos.value / 60);
  const minutos = totalMinutos.value % 60;
  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
});

// Calcular monto total (5 Bs por persona cada 30 min)
const montoTotal = computed(() => {
  return (totalMinutos.value / 30) * 5 * (personas.value || 1);
});

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    salas.value.push({ sala: "Sala " + (i + 1) });
  }

  for (let i = 8; i < 23; i++) {
    horarios.value.push({hora: `${i}:00`});
    horarios.value.push({hora: `${i}:30`});
  }

  calcularTotalMinutos();
});
function clickReserva() {
  if (totalMinutos.value === 0) {
    // alert("Por favor, selecciona al menos 30 minutos.");
    proxy.$alert.error("Por favor","selecciona al menos 30 minutos.");
    return;
  }
  dialogoReservar.value = true;
  nombre.value = "";
  personas.value = 1;
  adelanto.value = 0;
}
function consultarReservas() {
  // Lógica para consultar reservas
}

// Agrupa reservas continuas
const shouldShowCell = (horaIndex, salaIndex) => {
  if (!reservas.value[`${horaIndex}-${salaIndex}`]) return true;
  if (horaIndex > 0 && reservas.value[`${horaIndex - 1}-${salaIndex}`]) return false;
  return true;
};

const getRowspan = (horaIndex, salaIndex) => {
  if (!reservas.value[`${horaIndex}-${salaIndex}`]) return 1;
  let count = 1;
  while (reservas.value[`${horaIndex + count}-${salaIndex}`]) {
    count++;
  }
  return count;
};

const toggleSeleccion = (horaIndex, salaIndex, hora) => {
  const key = `${horaIndex}-${salaIndex}`;
  if (reservas.value[key]) return;

  if (seleccionadas.value[key]) {
    delete seleccionadas.value[key];
  } else {
    seleccionadas.value[key] = hora;
  }

  calcularTotalMinutos();
};

// Recalcular tiempo total seleccionado
const calcularTotalMinutos = () => {
  totalMinutos.value = Object.keys(seleccionadas.value).length * 30;
};

// Confirmar Reserva
const confirmarReserva = () => {

  // Guardar en el objeto de reservas
  Object.keys(seleccionadas.value).forEach((key) => {
    reservas.value[key] = {
      nombre: nombre.value,
      personas: personas.value,
      color: "yellow",
    };
  });

  // Guardar en localStorage
  localStorage.setItem("reservas", JSON.stringify(reservas.value));

  alert(`Reserva confirmada para ${nombre.value} con ${personas.value} persona(s). Monto: ${montoTotal.value} Bs.`);

  // Limpiar selección
  seleccionadas.value = {};
  totalMinutos.value = 0;
  nombre.value = "";
  personas.value = 1;
  dialogoReservar.value = false;
};
</script>
