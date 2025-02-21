<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-6 col-md-2">
            <q-input v-model="fecha" type="date" label="Fecha" dense outlined />
          </div>
          <div class="col-6 col-md-2 flex flex-center">
            <q-btn color="primary" label="Consultar" @click="reservasGet" size="11px" no-caps icon="search" :loading="loading" />
          </div>
          <div class="col-6 col-md-2">
            <q-badge color="primary" class="q-pa-sm">
              Tiempo Seleccionado: {{ tiempoSeleccionado }}
            </q-badge>
          </div>
          <div class="col-6 col-md-3 text-right">
            <q-btn color="red" label="Limpiar" @click="limpiar" no-caps icon="clear" size="11px" v-if="Object.keys(seleccionadas).length > 0" />
          </div>
          <div class="col-6 col-md-3 text-right">
            <q-btn color="green" label="Reservar" @click="clickReserva" no-caps icon="save" size="11px" />
          </div>
<!--          <pre>{{seleccionadas}}</pre>-->
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
            <q-input v-model="observacion" label="Observación" dense outlined class="" hint="" type="textarea" />
            <div>
              <q-badge color="indigo" class="q-pa-sm">
                Horario Seleccionado: Desde {{ horaMinima }} hasta {{ horaMaxima }}
              </q-badge>
            </div>
            <q-badge color="blue" class="q-pa-sm">
              Tiempo Total: {{ tiempoSeleccionado }}
            </q-badge>
            <div class="q-mt-md text-bold">
              Monto Total: {{ montoTotal }} Bs
            </div>
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" v-close-popup no-caps :loading="loading" />
              <q-btn color="green" label="Confirmar" no-caps type="submit" :loading="loading" />
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
const observacion = ref("");
const loading = ref(false);

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
  // reservasGet();
});
function reservasGet() {
  loading.value = true;
  proxy.$axios.get('/reservas', { params: { fecha: fecha.value } })
    .then(res => {
      reservas.value = res.data || {}; // Asegurar que sea un objeto
      console.log("Reservas cargadas:", reservas.value);
    })
    .catch(error => {
      proxy.$alert.error("Error al obtener reservas");
    })
    .finally(() => {
      loading.value = false;
    });
}

function limpiar() {
  seleccionadas.value = {};
  totalMinutos.value = 0;
  nombre.value = "";
  personas.value = 1;
  adelanto.value = 0;
  observacion.value = "";// Object.keys(seleccionadas).length > 0

}
// Obtener la hora mínima seleccionada
const horaMinima = computed(() => {
  if (Object.keys(seleccionadas.value).length === 0) return "-";
  const horasSeleccionadas = Object.values(seleccionadas.value).sort();
  return horasSeleccionadas[0]; // Primera hora seleccionada
});
// Obtener la hora máxima seleccionada
const horaMaxima = computed(() => {
  if (Object.keys(seleccionadas.value).length === 0) return "-";

  const horasSeleccionadas = Object.values(seleccionadas.value).sort();
  const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];

  // Sumar 30 minutos usando moment.js
  return moment(ultimaHora, "H:mm").add(30, "minutes").format("H:mm");
});
function clickReserva() {
  if (totalMinutos.value === 0) {
    proxy.$alert.error("Por favor","selecciona al menos 30 minutos.");
    return;
  }
  dialogoReservar.value = true;
  nombre.value = "";
  personas.value = 1;
  adelanto.value = 0;
  observacion.value = "";
}
function consultarReservas() {
  // Lógica para consultar reservas
}

// Agrupa reservas continuas
const shouldShowCell = (horaIndex, salaIndex) => {
  const key = `${horaIndex}-${salaIndex}`;
  const prevKey = `${horaIndex - 1}-${salaIndex}`;

  if (!reservas.value[key]) return true;

  // Si la celda anterior tiene reserva y es del mismo usuario, ocultar
  if (horaIndex > 0 && reservas.value[prevKey] && reservas.value[prevKey].nombre === reservas.value[key].nombre) {
    return false;
  }

  return true;
};

const getRowspan = (horaIndex, salaIndex) => {
  const key = `${horaIndex}-${salaIndex}`;
  if (!reservas.value[key]) return 1;

  let count = 1;
  while (reservas.value[`${horaIndex + count}-${salaIndex}`] && reservas.value[`${horaIndex + count}-${salaIndex}`].nombre === reservas.value[key].nombre) {
    count++;
  }

  return count;
};


const toggleSeleccion = (horaIndex, salaIndex, hora) => {
  const key = `${horaIndex}-${salaIndex}`;

  // Si la celda ya está reservada, no permitir selección
  if (reservas.value[key]) return;

  // Si no hay selecciones previas, permitir cualquier selección
  if (Object.keys(seleccionadas.value).length === 0) {
    seleccionadas.value[key] = hora;
    calcularTotalMinutos();
    return;
  }

  // Obtener la sala ya seleccionada (si existe)
  const salasSeleccionadas = new Set(Object.keys(seleccionadas.value).map(k => k.split('-')[1]));

  // Si intenta seleccionar en una sala diferente, rechazar
  if (salasSeleccionadas.size > 0 && !salasSeleccionadas.has(String(salaIndex))) {
    proxy.$alert.error("Debes seleccionar en la misma sala.");
    return;
  }

  // Obtener índices de horarios ya seleccionados en esta sala
  const horasSeleccionadas = Object.keys(seleccionadas.value)
    .map(k => parseInt(k.split('-')[0])) // Extraer solo los índices de hora
    .sort((a, b) => a - b); // Ordenar

  // Verificar si la nueva selección es continua
  if (horasSeleccionadas.length > 0) {
    const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];

    if (horaIndex !== ultimaHora + 1) {
      proxy.$alert.error("Debes seleccionar horarios consecutivos.");
      return;
    }
  }

  // Si ya está seleccionada, quitarla; si no, agregarla
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

  const primerKey = Object.keys(seleccionadas.value)[0]; // Tomamos la primera clave "horaIndex-salaIndex"
  const salaIndex = primerKey.split("-")[1]; // Extraemos el índice de la sala
  const sala = salas.value[salaIndex]?.sala || "Desconocida"; // Obtenemos el nombre de la sala

  // Guardar en localStorage
  localStorage.setItem("reservas", JSON.stringify(reservas.value));
  dialogoReservar.value = false;
  limpiar();


  // alert(`Reserva confirmada para ${nombre.value} con ${personas.value} persona(s). Monto: ${montoTotal.value} Bs.`);

  // Limpiar selección
  // seleccionadas.value = {};
  // totalMinutos.value = 0;
  // nombre.value = "";
  // personas.value = 1;
  // dialogoReservar.value = false;
  // loading.value = true;
  // proxy.$axios.post('/reservas', {
  //   nombre: nombre.value,
  //   numero_personas: personas.value,
  //   observaciones: observacion.value,
  //   json: JSON.stringify(seleccionadas.value),
  //   sala: sala,
  //   total: montoTotal.value,
  //   adelanto: adelanto.value,
  //   tiempo: tiempoSeleccionado.value,
  //   horario: `${horaMinima.value} - ${horaMaxima.value}`,
  //   fecha: fecha.value,
  // }).then(res => {
  //   proxy.$alert.success("Reserva confirmada");
  //   limpiar();
  //   reservasGet();
  //   dialogoReservar.value = false;
  // }).catch(error => {
  //   proxy.$alert.error("Error al confirmar reserva");
  // }).finally(() => {
  //   loading.value = false;
  // });
};
</script>
