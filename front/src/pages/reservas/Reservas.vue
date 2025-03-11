<template>
  <q-page class="q-pa-xs">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-6 col-md-2">
            <q-input v-model="fecha" type="date" label="Fecha" dense outlined
                     @update:modelValue="getReservas"
            />
          </div>
          <div class="col-6 col-md-2 flex flex-center">
            <q-btn color="green" label="Reservar" @click="clickReserva" no-caps icon="save" size="11px" :loading="loading" />
<!--            <q-btn color="primary" label="Consultar" @click="getReservas" size="11px" no-caps icon="search" :loading="loading" />-->
          </div>
          <div class="col-6 col-md-2">
            <q-badge color="indigo" class="q-pa-sm">
              Tiempo Seleccionado: {{ tiempoSeleccionado }}
            </q-badge>
          </div>
          <div class="col-6 col-md-3 text-right">
            <q-btn color="red" label="Limpiar" @click="limpiar" no-caps icon="clear" size="11px" v-if="Object.keys(seleccionadas).length > 0" />
          </div>
          <div class="col-6 col-md-3 text-right">
          </div>
<!--          <pre>{{seleccionadas}}</pre>-->
        </div>

        <q-markup-table wrap-cells dense bordered flat separator="cell" class="tabla-reservas">
          <thead>
          <tr>
            <q-th class="bg-grey text-white sticky-hora">Hora</q-th> <!-- Sticky en encabezado -->
            <q-th class="bg-blue text-white" v-for="sala in salas" :key="sala.sala">{{ sala.sala }}</q-th>
          </tr>
          </thead>
          <tbody class="scroll-body">
          <template v-for="(hora, horaIndex) in horarios" :key="horaIndex">
            <tr>
              <q-td class="sticky-hora" style="padding: 0;margin: 0;border: 0">{{ hora.hora }}</q-td>  <!-- Sticky en tbody -->
              <template v-for="(sala, salaIndex) in salas" :key="salaIndex">
                <template v-if="shouldShowCell(horaIndex, salaIndex)">
                  <td
                    :rowspan="getRowspan(horaIndex, salaIndex)"
                    :class="{
                'bg-green text-white': seleccionadas[`${horaIndex}-${salaIndex}`] && !$store.reservas[`${horaIndex}-${salaIndex}`],
                'bg-red text-white': $store.reservas[`${horaIndex}-${salaIndex}`]?.color === 'red',
                'bg-yellow text-black': $store.reservas[`${horaIndex}-${salaIndex}`]?.color === 'yellow',
                'bg-grey-3': !seleccionadas[`${horaIndex}-${salaIndex}`] && !$store.reservas[`${horaIndex}-${salaIndex}`]
              }"
                    class="text-center cursor-pointer"
                    @click="toggleSeleccion(horaIndex, salaIndex, hora.hora)"
                  >
                    <div v-if="$store.reservas[`${horaIndex}-${salaIndex}`]">
                      {{ $store.reservas[`${horaIndex}-${salaIndex}`].nombre }}
                    </div>
                    <div v-if="$store.reservas[`${horaIndex}-${salaIndex}`] && $store.reservas[`${horaIndex}-${salaIndex}`].fecha_confirmacion">
                      {{ $store.reservas[`${horaIndex}-${salaIndex}`].fecha_confirmacion.substring(11, 16) }}
                    </div>
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
            <q-input v-model="observacion" label="Observación" dense outlined type="textarea" />
            <q-toggle v-model="directo" :label="directo ? 'Venta Directa' : 'Reserva'"
                      :class="{'text-primary': directo, 'text-orange': !directo}"
                      @update:modelValue="adelanto = montoTotal"
            />
            <div>
              <q-badge color="indigo" class="q-pa-sm">
                Horario Seleccionado: Desde {{ horaMinima }} hasta {{ horaMaxima }}
              </q-badge>
            </div>
            <div class="text-bold q-mt-md text-blue bg-grey-3">
              Tiempo Total: {{ tiempoSeleccionado }}
            </div>
            <div class="text-bold">
              Monto Total: {{ montoTotal }} Bs
            </div>
            <div class="text-red text-bold">
              Saldo: {{ montoTotal - adelanto }} Bs
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

<!--<script>-->
<!--import moment from "moment";-->

<!--const {proxy} = getCurrentInstance();-->
<!--const fecha = ref(moment().format("YYYY-MM-DD"));-->
<!--const salas = ref([]);-->
<!--const horarios = ref([]);-->
<!--const seleccionadas = ref({});-->
<!--// const reservas = ref(JSON.parse(localStorage.getItem("reservas")) || {});-->
<!--const reservas = ref( {});-->
<!--const totalMinutos = ref(0);-->
<!--const dialogoReservar = ref(false);-->
<!--const nombre = ref("");-->
<!--const personas = ref(1);-->
<!--const adelanto = ref(0);-->
<!--const observacion = ref("");-->
<!--const loading = ref(false);-->
<!--const directo = ref(false);-->

<!--// Formatear tiempo total en HH:mm-->
<!--const tiempoSeleccionado = computed(() => {-->
<!--  const horas = Math.floor(totalMinutos.value / 60);-->
<!--  const minutos = totalMinutos.value % 60;-->
<!--  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;-->
<!--});-->

<!--// Calcular monto total (5 Bs por persona cada 30 min)-->
<!--const montoTotal = computed(() => {-->
<!--  return (totalMinutos.value / 30) * 5 * (personas.value || 1);-->
<!--});-->

<!--onMounted(() => {-->
<!--  for (let i = 0; i < 20; i++) {-->
<!--    salas.value.push({ sala: "Sala " + (i + 1) });-->
<!--  }-->

<!--  for (let i = 8; i < 23; i++) {-->
<!--    let horaInicio = `${i}:00`;-->
<!--    let horaFin = `${i}:30`;-->
<!--    horarios.value.push({ hora: `${horaInicio}-${horaFin}` });-->

<!--    horaInicio = `${i}:30`;-->
<!--    horaFin = `${i + 1}:00`;-->
<!--    horarios.value.push({ hora: `${horaInicio}-${horaFin}` });-->
<!--  }-->

<!--  calcularTotalMinutos();-->
<!--  getReservas();-->

<!--  if (!proxy.$store.socketReservas) {-->
<!--    proxy.$socket.on("reservas", () => {-->
<!--      getReservas();-->
<!--    });-->
<!--    proxy.$store.socketReservas = true;-->
<!--  }-->
<!--});-->
<!--function getReservas() {-->
<!--  loading.value = true;-->
<!--  reservas.value = {};-->
<!--  proxy.$axios.get('/reservas', { params: { fecha: fecha.value } })-->
<!--    .then(res => {-->
<!--      reservas.value = res.data || {}; // Asegurar que sea un objeto-->
<!--      console.log("Reservas cargadas:", reservas.value);-->
<!--    })-->
<!--    .catch(error => {-->
<!--      proxy.$alert.error("Error al obtener reservas");-->
<!--    })-->
<!--    .finally(() => {-->
<!--      loading.value = false;-->
<!--    });-->
<!--}-->

<!--function limpiar() {-->
<!--  seleccionadas.value = {};-->
<!--  totalMinutos.value = 0;-->
<!--  nombre.value = "";-->
<!--  personas.value = 1;-->
<!--  adelanto.value = 0;-->
<!--  observacion.value = "";// Object.keys(seleccionadas).length > 0-->

<!--}-->
<!--// Obtener la hora mínima seleccionada-->
<!--const horaMinima = computed(() => {-->
<!--  if (Object.keys(seleccionadas.value).length === 0) return "-";-->

<!--  // Extraer y ordenar correctamente los valores de hora-->
<!--  const horasSeleccionadas = Object.values(seleccionadas.value)-->
<!--    .map(h => moment(h, "H:mm")) // Convertir a objetos moment-->
<!--    .sort((a, b) => a.diff(b)); // Ordenar por diferencia de tiempo-->

<!--  return horasSeleccionadas[0].format("H:mm"); // Retornar la primera hora formateada-->
<!--});-->

<!--// Obtener la hora máxima seleccionada-->
<!--const horaMaxima = computed(() => {-->
<!--  if (Object.keys(seleccionadas.value).length === 0) return "-";-->

<!--  const horasSeleccionadas = Object.values(seleccionadas.value)-->
<!--    .map(h => moment(h, "H:mm")) // Convertir a objetos moment-->
<!--    .sort((a, b) => a.diff(b)); // Ordenar por diferencia de tiempo-->

<!--  const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];-->

<!--  // Sumar 30 minutos y formatear-->
<!--  return ultimaHora.add(30, "minutes").format("H:mm");-->
<!--});-->

<!--function clickReserva() {-->
<!--  if (totalMinutos.value === 0) {-->
<!--    proxy.$alert.error("Por favor","selecciona al menos 30 minutos.");-->
<!--    return;-->
<!--  }-->
<!--  dialogoReservar.value = true;-->
<!--  nombre.value = "";-->
<!--  personas.value = 2;-->
<!--  adelanto.value = 0;-->
<!--  observacion.value = "";-->
<!--  directo.value = false;-->
<!--}-->
<!--function consultarReservas() {-->
<!--  // Lógica para consultar reservas-->
<!--}-->

<!--// Agrupa reservas continuas-->
<!--const shouldShowCell = (horaIndex, salaIndex) => {-->
<!--  const key = `${horaIndex}-${salaIndex}`;-->
<!--  const prevKey = `${horaIndex - 1}-${salaIndex}`;-->

<!--  if (!reservas.value[key]) return true;-->

<!--  // Si la celda anterior tiene reserva y es del mismo usuario, ocultar-->
<!--  if (horaIndex > 0 && reservas.value[prevKey] && reservas.value[prevKey].nombre === reservas.value[key].nombre) {-->
<!--    return false;-->
<!--  }-->

<!--  return true;-->
<!--};-->

<!--const getRowspan = (horaIndex, salaIndex) => {-->
<!--  const key = `${horaIndex}-${salaIndex}`;-->
<!--  if (!reservas.value[key]) return 1;-->

<!--  let count = 1;-->
<!--  while (reservas.value[`${horaIndex + count}-${salaIndex}`] && reservas.value[`${horaIndex + count}-${salaIndex}`].nombre === reservas.value[key].nombre) {-->
<!--    count++;-->
<!--  }-->

<!--  return count;-->
<!--};-->


<!--const toggleSeleccion = (horaIndex, salaIndex, hora) => {-->

<!--  //   loading.value = true;-->
<!--  // proxy.$axios.get('/verificarCaja')-->
<!--  //   .then(res => {-->
<!--  //     console.log(res.data.estado);-->
<!--  //     if (res.data.estado === "cerrada") {-->
<!--  //       proxy.$alert.error("La caja está cerrada, no se pueden realizar reservas");-->
<!--  //       return false;-->
<!--  //     }-->
<!--  //-->
<!--  //     // console.log("Seleccionando:", horaIndex, salaIndex, hora);-->
<!--  //     // return false;-->
<!--  //   })-->
<!--  //   .catch(error => {-->
<!--  //     proxy.$alert.error("Error al obtener reservas");-->
<!--  //   })-->
<!--  //   .finally(() => {-->
<!--  //     loading.value = false;-->
<!--  //   });-->

<!--  const key = `${horaIndex}-${salaIndex}`;-->

<!--  // Si la celda ya está reservada, no permitir selección-->
<!--  if (reservas.value[key]) return;-->

<!--  // Si no hay selecciones previas, permitir cualquier selección-->
<!--  if (Object.keys(seleccionadas.value).length === 0) {-->
<!--    seleccionadas.value[key] = hora;-->
<!--    calcularTotalMinutos();-->
<!--    return;-->
<!--  }-->

<!--  // Obtener la sala ya seleccionada (si existe)-->
<!--  const salasSeleccionadas = new Set(Object.keys(seleccionadas.value).map(k => k.split('-')[1]));-->

<!--  // Si intenta seleccionar en una sala diferente, rechazar-->
<!--  if (salasSeleccionadas.size > 0 && !salasSeleccionadas.has(String(salaIndex))) {-->
<!--    proxy.$alert.error("Debes seleccionar en la misma sala.");-->
<!--    return;-->
<!--  }-->

<!--  // Obtener índices de horarios ya seleccionados en esta sala-->
<!--  const horasSeleccionadas = Object.keys(seleccionadas.value)-->
<!--    .map(k => parseInt(k.split('-')[0])) // Extraer solo los índices de hora-->
<!--    .sort((a, b) => a - b); // Ordenar-->

<!--  // Verificar si la nueva selección es continua-->
<!--  if (horasSeleccionadas.length > 0) {-->
<!--    const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];-->

<!--    if (horaIndex !== ultimaHora + 1) {-->
<!--      proxy.$alert.error("Debes seleccionar horarios consecutivos.");-->
<!--      return;-->
<!--    }-->
<!--  }-->

<!--  // Si ya está seleccionada, quitarla; si no, agregarla-->
<!--  if (seleccionadas.value[key]) {-->
<!--    delete seleccionadas.value[key];-->
<!--  } else {-->
<!--    seleccionadas.value[key] = hora;-->
<!--  }-->

<!--  calcularTotalMinutos();-->
<!--};-->

<!--// Recalcular tiempo total seleccionado-->
<!--const calcularTotalMinutos = () => {-->
<!--  totalMinutos.value = Object.keys(seleccionadas.value).length * 30;-->
<!--};-->

<!--// Confirmar Reserva-->
<!--const confirmarReserva = () => {-->

<!--  // Guardar en el objeto de reservas-->
<!--  Object.keys(seleccionadas.value).forEach((key) => {-->
<!--    reservas.value[key] = {-->
<!--      nombre: nombre.value,-->
<!--      personas: personas.value,-->
<!--      color: "yellow",-->
<!--    };-->
<!--  });-->

<!--  const primerKey = Object.keys(seleccionadas.value)[0]; // Tomamos la primera clave "horaIndex-salaIndex"-->
<!--  const salaIndex = primerKey.split("-")[1]; // Extraemos el índice de la sala-->
<!--  const sala = salas.value[salaIndex]?.sala || "Desconocida"; // Obtenemos el nombre de la sala-->

<!--  // Guardar en localStorage-->
<!--  // localStorage.setItem("reservas", JSON.stringify(reservas.value));-->
<!--  // dialogoReservar.value = false;-->
<!--  // limpiar();-->


<!--  // alert(`Reserva confirmada para ${nombre.value} con ${personas.value} persona(s). Monto: ${montoTotal.value} Bs.`);-->

<!--  // Limpiar selección-->
<!--  // seleccionadas.value = {};-->
<!--  // totalMinutos.value = 0;-->
<!--  // nombre.value = "";-->
<!--  // personas.value = 1;-->
<!--  // dialogoReservar.value = false;-->
<!--  loading.value = true;-->
<!--  // reservas.value = {};-->
<!--  proxy.$axios.post('/reservas', {-->
<!--    nombre: nombre.value,-->
<!--    numero_personas: personas.value,-->
<!--    observaciones: observacion.value,-->
<!--    json: JSON.stringify(seleccionadas.value),-->
<!--    sala: sala,-->
<!--    total: montoTotal.value,-->
<!--    adelanto: adelanto.value,-->
<!--    tiempo: tiempoSeleccionado.value,-->
<!--    horario: `${horaMinima.value} - ${horaMaxima.value}`,-->
<!--    fecha: fecha.value,-->
<!--    directo: directo.value,-->
<!--  }).then(res => {-->
<!--    proxy.$alert.success("Reserva confirmada", "Reserva");-->
<!--    limpiar();-->
<!--    getReservas();-->
<!--    proxy.$socket.emit("reservas");-->
<!--    dialogoReservar.value = false;-->
<!--  }).catch(error => {-->
<!--    proxy.$alert.error(error.response.data.message, "Error al confirmar reserva");-->
<!--  }).finally(() => {-->
<!--    loading.value = false;-->
<!--    // proxy.$socket.emit("reservas");-->
<!--  });-->
<!--};-->
<!--</script>-->
<script>
import moment from "moment";

export default {
  data() {
    return {
      fecha: moment().format("YYYY-MM-DD"),
      salas: [],
      horarios: [],
      seleccionadas: {},
      // reservas: [],
      totalMinutos: 0,
      dialogoReservar: false,
      nombre: "",
      personas: 1,
      adelanto: 0,
      observacion: "",
      loading: false,
      directo: false,
    };
  },
  computed: {
    tiempoSeleccionado() {
      const horas = Math.floor(this.totalMinutos / 60);
      const minutos = this.totalMinutos % 60;
      return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
    },
    montoTotal() {
      return (this.totalMinutos / 30) * 5 * (this.personas || 1);
    },
    horaMinima() {
      if (Object.keys(this.seleccionadas).length === 0) return "-";
      const horasSeleccionadas = Object.values(this.seleccionadas)
        .map(h => moment(h, "H:mm"))
        .sort((a, b) => a.diff(b));
      return horasSeleccionadas[0].format("H:mm");
    },
    horaMaxima() {
      if (Object.keys(this.seleccionadas).length === 0) return "-";
      const horasSeleccionadas = Object.values(this.seleccionadas)
        .map(h => moment(h, "H:mm"))
        .sort((a, b) => a.diff(b));
      const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];
      return ultimaHora.add(30, "minutes").format("H:mm");
    }
  },
  methods: {
    getRowspan(horaIndex, salaIndex) {
      const key = `${horaIndex}-${salaIndex}`;
      if (!this.$store.reservas[key]) return 1;
      let count = 1;
      while (this.$store.reservas[`${horaIndex + count}-${salaIndex}`] && this.$store.reservas[`${horaIndex + count}-${salaIndex}`].nombre === this.$store.reservas[key].nombre) {
        count++;
      }
      return count;
    },
    getReservas() {
      this.loading = true;
      this.$store.reservas = {};
      this.$axios.get('/reservas', { params: { fecha: this.fecha } })
        .then(res => {
          this.$store.reservas = res.data;
        })
        .catch(() => {
          this.$alert.error("Error al obtener reservas");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    limpiar() {
      this.seleccionadas = {};
      this.totalMinutos = 0;
      this.nombre = "";
      this.personas = 1;
      this.adelanto = 0;
      this.observacion = "";
    },
    clickReserva() {
      if (this.totalMinutos === 0) {
        this.$alert.error("Por favor selecciona al menos 30 minutos.");
        return;
      }
      this.dialogoReservar = true;
      this.nombre = "";
      this.personas = 2;
      this.adelanto = 0;
      this.observacion = "";
      this.directo = false;
    },
    shouldShowCell(horaIndex, salaIndex) {
      const key = `${horaIndex}-${salaIndex}`;
      const prevKey = `${horaIndex - 1}-${salaIndex}`;
      if (!this.$store.reservas[key]) return true;
      if (horaIndex > 0 && this.$store.reservas[prevKey] && this.$store.reservas[prevKey].nombre === this.$store.reservas[key].nombre) {
        return false;
      }
      return true;
    },
    toggleSeleccion(horaIndex, salaIndex, hora) {
      const key = `${horaIndex}-${salaIndex}`;
      if (this.$store.reservas[key]) return;
      if (Object.keys(this.seleccionadas).length === 0) {
        this.seleccionadas[key] = hora;
        this.calcularTotalMinutos();
        return;
      }
      if (this.seleccionadas[key]) {
        delete this.seleccionadas[key];
      } else {
        this.seleccionadas[key] = hora;
      }
      this.calcularTotalMinutos();
    },
    calcularTotalMinutos() {
      this.totalMinutos = Object.keys(this.seleccionadas).length * 30;
    },
    confirmarReserva() {
      Object.keys(this.seleccionadas).forEach(key => {
        this.$store.reservas[key] = {
          nombre: this.nombre,
          personas: this.personas,
          color: "yellow",
        };
      });
      const primerKey = Object.keys(this.seleccionadas)[0];
      const salaIndex = primerKey.split("-")[1];
      const sala = this.salas[salaIndex]?.sala || "Desconocida";
      this.loading = true;
      this.$axios.post('/reservas', {
        nombre: this.nombre,
        numero_personas: this.personas,
        observaciones: this.observacion,
        json: JSON.stringify(this.seleccionadas),
        sala: sala,
        total: this.montoTotal,
        adelanto: this.adelanto,
        tiempo: this.tiempoSeleccionado,
        horario: `${this.horaMinima} - ${this.horaMaxima}`,
        fecha: this.fecha,
        directo: this.directo,
      }).then(() => {
        this.$alert.success("Reserva confirmada", "Reserva");
        this.limpiar();
        this.getReservas();
        this.dialogoReservar = false;
        this.$socket.emit("reservas");
      }).catch(error => {
        this.$alert.error(error.response.data.message, "Error al confirmar reserva");
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.salas.push({ sala: "Sala " + (i + 1) });
    }
    for (let i = 8; i < 23; i++) {
      let horaInicio = `${i}:00`;
      let horaFin = `${i}:30`;
      this.horarios.push({ hora: `${horaInicio}-${horaFin}` });
      horaInicio = `${i}:30`;
      horaFin = `${i + 1}:00`;
      this.horarios.push({ hora: `${horaInicio}-${horaFin}` });
    }
    this.calcularTotalMinutos();
    this.getReservas();
    // socketReservas
    let cm = this;
    if (!this.$store.socketReservas) {
      this.$socket.on("reservas", () => {
        cm.getReservas();
      });
      this.$store.socketReservas = true;
    }
  }
};
</script>
<style>
.tabla-reservas {
  max-height: 500px; /* Ajusta según sea necesario */
  overflow-y: auto;
  display: block;
}
.tabla-reservas thead {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
}
/* Estilos para hacer sticky la columna "Hora" */
.sticky-hora {
  position: sticky;
  left: 0;
  z-index: 3;
  background-color: white;
  border-right: 2px solid #ccc;
  font-weight: bold;
  min-width: 70px;
  text-align: center;
  font-size: 11px !important;
}

/* Mantener la cabecera de la tabla fija */
.tabla-reservas thead tr {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 4;
}

/* Asegurar que toda la columna de hora tenga un fondo adecuado */
.tabla-reservas tbody tr td.sticky-hora {
  position: sticky;
  background-color: white;
}

</style>
