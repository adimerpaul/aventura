<template>
<!--  <q-page class="q-pa-xs">-->
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12">
            <div :class="`bg-${color} text-center text-white q-pa-xs`">
              {{agencia}}
            </div>
          </div>
          <div class="col-6 col-md-2">
            <q-input v-model="fecha" type="date" label="Fecha" dense outlined
                     @update:modelValue="getReservas(fecha,agencia)"
            />
          </div>
          <div class="col-6 col-md-2 text-center flex flex-center">
            <div class="text-bold text-red">{{fechaText}} </div>
          </div>
          <div class="col-6 col-md-2 flex flex-center">
            <q-btn color="green" label="Reservar" @click="clickReserva" no-caps icon="save" size="11px" :loading="loading" />
<!--            {{agencia}} {{color}}-->
          </div>
          <div class="col-6 col-md-2">
            <q-badge color="indigo" class="q-pa-sm">
              Tiempo Seleccionado: {{ tiempoSeleccionado }}
            </q-badge>
          </div>
          <div class="col-6 col-md-2 text-right">
            <q-btn color="red" label="Limpiar" @click="limpiar" no-caps icon="clear" size="11px" v-if="Object.keys(seleccionadas).length > 0" />
          </div>
          <div class="col-6 col-md-2 text-right">
          </div>

        </div>

        <q-markup-table wrap-cells dense bordered flat separator="cell" class="tabla-reservas">
          <thead>
          <tr>
            <q-th class="bg-grey text-white sticky-hora">Hora</q-th>
            <q-th :class="`bg-${color} text-white`" v-for="sala in salas" :key="sala.sala">{{ sala.sala }}</q-th>
          </tr>
          </thead>
          <tbody class="scroll-body">
          <template v-for="(hora, horaIndex) in horarios" :key="horaIndex">
            <tr>
              <q-td class="sticky-hora" style="padding: 0;margin: 0;border: 0">{{ hora.hora }}</q-td>
              <template v-for="(sala, salaIndex) in salas" :key="salaIndex">

                <td
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

                    <template v-if="esPrimeraCeldaReserva(horaIndex, salaIndex)">
                      {{ $store.reservas[`${horaIndex}-${salaIndex}`].nombre }}
                      <div style="font-size:10px;opacity:0.85;">{{ hora.hora.split('-')[0].trim() }}</div>
                      <div v-if="$store.reservas[`${horaIndex}-${salaIndex}`] && $store.reservas[`${horaIndex}-${salaIndex}`].fecha_confirmacion">
                        {{ $store.reservas[`${horaIndex}-${salaIndex}`].fecha_confirmacion.substring(11, 16) }}
                      </div>
                    </template>
                    <template v-else>
                      ...
                    </template>
                  </div>
                </td>
              </template>
            </tr>
          </template>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>


    <q-dialog v-model="dialogoReservar">
      <q-card style="min-width: 250px;">
        <q-card-section class="q-pb-none row items-center">
          <div class="text-subtitle2 text-bold">
            {{fechaText}}
            <div class="text-red">
              {{ Object.keys(seleccionadas).length > 0 ? salas[Object.keys(seleccionadas)[0].split("-")[1]].sala : "-" }}
            </div>
          </div>
          <q-space />
          <q-btn flat dense round icon="close" class="q-ml-auto" @click="dialogoReservar = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="confirmarReserva">
            <q-input v-model="nombre" label="Nombre" dense outlined class="" :rules="[val => !!val || 'Por favor, ingresa un nombre.']" />
            <q-input v-model.number="personas" type="number" label="Número de Personas" dense outlined class="" :rules="[val => val > 0 || 'Por favor, ingresa un número válido.']" />
            <q-select
              v-if="agencia === 'Ayacucho'"
              v-model="tipoConsola"
              :options="tiposConsola.filter(c => c.precio_1 > 0).map(c => ({ ...c, label: `${c.nombre} (${c.precio_1})` }))"
              option-label="label"
              option-value="id"
              label="Tipo de Consola"
              dense outlined
              emit-value
              map-options
              class=""
              :rules="[val => !!val || 'Por favor, selecciona un tipo de consola.']"
            />
            <q-input v-model.number="adelanto" type="number" label="Adelanto" dense outlined class="" :rules="[val => val >= 0 || 'Por favor, ingresa un número válido.']" />
            <q-input v-model="observacion" label="Observación" dense outlined type="textarea" />
            <q-toggle v-model="directo" :label="directo ? 'Venta Directa' : 'Reserva'"
                      :class="{'text-primary': directo, 'text-orange': !directo}"
                      @update:modelValue="adelanto = montoTotal"
                      v-if="$store.user.role === 'Admin'"
            />
            <q-toggle v-model="directo" :label="directo ? 'Venta Directa' : 'Reserva'"
                      :class="{'text-primary': directo, 'text-orange': !directo}"
                      @update:modelValue="adelanto = montoTotal"
                      v-else-if="$store.user.sucursal === agencia"
            />
<!--            <pre>{{$store.user.sucursal}} a</pre>-->
<!--            <pre>{{agencia}} b</pre>-->
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
    <!-- Diálogo editar reserva (solo Ayacucho) -->
    <q-dialog v-model="dialogoEditar">
      <q-card style="min-width: 280px">
        <q-card-section class="q-pb-none row items-center">
          <div class="text-subtitle2 text-bold">
            Modificar Reserva
            <div class="text-red">{{ reservaEditar.sala }}</div>
          </div>
          <q-space />
          <q-btn flat dense round icon="close" @click="dialogoEditar = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="guardarEditar">
            <q-input v-model="reservaEditar.nombre" label="Nombre" dense outlined class="q-mb-xs" required />
            <q-input v-model.number="reservaEditar.numero_personas" type="number" label="N° Personas" dense outlined class="q-mb-xs" required />
            <q-select
              v-model="reservaEditar.tipo_consola_id"
              :options="tiposConsola.filter(c => c.precio_1 > 0).map(c => ({ ...c, label: `${c.nombre} (${c.precio_1})` }))"
              option-label="label"
              option-value="id"
              label="Tipo de Consola"
              dense outlined emit-value map-options
              class="q-mb-xs"
            />
            <q-input v-model.number="reservaEditar.adelanto" type="number" label="Adelanto" dense outlined class="q-mb-xs" />
            <q-input v-model="reservaEditar.observaciones" label="Observación" dense outlined type="textarea" class="q-mb-xs" />

            <div class="text-bold text-blue bg-grey-3 q-pa-xs q-mb-xs">
              {{ reservaEditar.horario }} | {{ reservaEditar.tiempo }}
            </div>

            <div class="row q-gutter-xs q-mb-xs">
              <q-btn icon="remove" color="orange" dense no-caps size="sm" label="-30 min"
                @click="cambiarTiempo(-1)" :disable="editHoraIndices.length <= 1" :loading="loading" />
              <q-btn icon="add" color="teal" dense no-caps size="sm" label="+30 min"
                @click="cambiarTiempo(1)" :loading="loading" />
            </div>

            <div class="text-bold">Total: {{ montoTotalEditar }} Bs</div>
            <div class="text-red text-bold q-mb-sm">Saldo: {{ montoTotalEditar - (reservaEditar.adelanto || 0) }} Bs</div>

            <div class="row justify-between">
              <q-btn flat label="Eliminar" color="negative" no-caps icon="delete"
                @click="cancelarReservaEditar" :loading="loading" />
              <q-btn color="primary" label="Guardar" no-caps type="submit" :loading="loading" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
<!--  </q-page>-->
</template>
<script>
import moment from "moment";

export default {
  name: 'FormularioReservas',
  props: {
    agencia: {
      type: String,
      required: false, // o true si es obligatorio
    },
    color: {
      type: String,
      required: false,
    }
  },
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
      tiposConsola: [],
      tipoConsola: null,
      dialogoEditar: false,
      reservaEditar: {},
      editSalaIndex: null,
      editHoraIndices: [],
    };
  },
  computed: {
    fechaText(){
      const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      return `${dias[moment(this.fecha).day()]} ${moment(this.fecha).date()} de ${meses[moment(this.fecha).month()]} de ${moment(this.fecha).year()}`;
    },
    tiempoSeleccionado() {
      const horas = Math.floor(this.totalMinutos / 60);
      const minutos = this.totalMinutos % 60;
      return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
    },
    montoTotal() {
      if (this.agencia !== 'Ayacucho') {
        return (this.totalMinutos / 30) * 5 * (this.personas || 1);
      }
      if (!this.tipoConsola) return 0;
      const consola = this.tiposConsola.find(c => c.id === this.tipoConsola);
      if (!consola) return 0;
      return (this.totalMinutos / 60) * consola.precio_1 * (this.personas || 1);
    },
    horaMinima() {
      if (Object.keys(this.seleccionadas).length === 0) return "-";
      const horasSeleccionadas = Object.values(this.seleccionadas)
        .map(h => moment(h, "H:mm"))
        .sort((a, b) => a.diff(b));
      return horasSeleccionadas[0].format("H:mm");
    },
    montoTotalEditar() {
      if (!this.reservaEditar || !this.editHoraIndices.length) return 0;
      const horas = (this.editHoraIndices.length * 30) / 60;
      if (this.reservaEditar.tipo_consola_id) {
        const consola = this.tiposConsola.find(c => c.id === this.reservaEditar.tipo_consola_id);
        if (consola) return horas * consola.precio_1 * (this.reservaEditar.numero_personas || 1);
      }
      return this.editHoraIndices.length * 5 * (this.reservaEditar.numero_personas || 1);
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
    esPrimeraCeldaReserva(horaIndex, salaIndex) {
      const key = `${horaIndex}-${salaIndex}`;
      const prevKey = `${horaIndex - 1}-${salaIndex}`;
      if (!this.$store.reservas[key]) return false;
      // Es primera celda si no hay celda anterior con el mismo nombre
      return !this.$store.reservas[prevKey] ||
        this.$store.reservas[prevKey].nombre !== this.$store.reservas[key].nombre;
    },
    getRowspan(horaIndex, salaIndex) {
      const key = `${horaIndex}-${salaIndex}`;
      if (!this.$store.reservas[key]) return 1;
      let count = 1;
      while (this.$store.reservas[`${horaIndex + count}-${salaIndex}`] && this.$store.reservas[`${horaIndex + count}-${salaIndex}`].nombre === this.$store.reservas[key].nombre) {
        count++;
      }
      return count;
    },
    getReservas(fecha,agencia) {
      this.loading = true;
      this.$store.reservas = {};
      this.$axios.get('/reservas', {
        params: {
          fecha: fecha,
          agencia: agencia
        }
      })
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
      this.tipoConsola = null;
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
      this.tipoConsola = null;
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
      if (this.$store.reservas[key]) {
        if (this.agencia === 'Ayacucho' && this.$store.reservas[key].color === 'yellow') {
          this.abrirEditar(this.$store.reservas[key].id, salaIndex);
        }
        return;
      }
      if (Object.keys(this.seleccionadas).length === 0) {
        this.seleccionadas[key] = hora;
        this.calcularTotalMinutos();
        return;
      }
      if (Object.keys(this.seleccionadas).length > 0) {
        const salasSeleccionadas = new Set(Object.keys(this.seleccionadas).map(k => k.split('-')[1]));
        if (salasSeleccionadas.size > 0 && !salasSeleccionadas.has(String(salaIndex))) {
          this.$alert.error("Debes seleccionar en la misma sala.");
          return;
        }
        const horasSeleccionadas = Object.keys(this.seleccionadas)
          .map(k => parseInt(k.split('-')[0]))
          .sort((a, b) => a - b);
        if (horasSeleccionadas.length > 0) {
          const ultimaHora = horasSeleccionadas[horasSeleccionadas.length - 1];
          if (horaIndex !== ultimaHora + 1) {
            this.$alert.error("Debes seleccionar horarios consecutivos.");
            return;
          }
        }
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
    abrirEditar(id, salaIndex) {
      this.$axios.get(`/reservas/${id}`).then(res => {
        this.reservaEditar = { ...res.data };
        this.editSalaIndex = salaIndex;
        const json = JSON.parse(res.data.json || '{}');
        this.editHoraIndices = Object.keys(json)
          .map(k => parseInt(k.split('-')[0]))
          .sort((a, b) => a - b);
        this.dialogoEditar = true;
      });
    },
    cambiarTiempo(delta) {
      const json = JSON.parse(this.reservaEditar.json || '{}');
      if (delta === 1) {
        const maxIndex = Math.max(...this.editHoraIndices);
        const nextIndex = maxIndex + 1;
        const nextKey = `${nextIndex}-${this.editSalaIndex}`;
        if (this.$store.reservas[nextKey]) {
          this.$alert.error("El siguiente horario ya está ocupado");
          return;
        }
        if (nextIndex >= this.horarios.length) {
          this.$alert.error("No hay más horarios disponibles");
          return;
        }
        json[nextKey] = this.horarios[nextIndex].hora.split('-')[0].trim();
        this.editHoraIndices.push(nextIndex);
        this.editHoraIndices.sort((a, b) => a - b);
      } else {
        if (this.editHoraIndices.length <= 1) return;
        const maxIndex = Math.max(...this.editHoraIndices);
        delete json[`${maxIndex}-${this.editSalaIndex}`];
        this.editHoraIndices = this.editHoraIndices.filter(i => i !== maxIndex);
      }
      this.reservaEditar.json = JSON.stringify(json);
      const totalMin = this.editHoraIndices.length * 30;
      const h = Math.floor(totalMin / 60);
      const m = totalMin % 60;
      this.reservaEditar.tiempo = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const minH = this.horarios[Math.min(...this.editHoraIndices)].hora.split('-')[0].trim();
      const maxH = this.horarios[Math.max(...this.editHoraIndices)].hora.split('-')[1].trim();
      this.reservaEditar.horario = `${minH} - ${maxH}`;
    },
    guardarEditar() {
      this.loading = true;
      const total = this.montoTotalEditar;
      this.$axios.put(`/reservas/${this.reservaEditar.id}`, {
        ...this.reservaEditar,
        total,
        saldo: total - (this.reservaEditar.adelanto || 0),
      }).then(() => {
        this.$alert.success("Reserva actualizada");
        this.dialogoEditar = false;
        this.getReservas(this.fecha, this.agencia);
        this.$socket.emit(`reservas-${this.agencia}`);
      }).catch(err => {
        this.$alert.error(err.response?.data?.message || "Error al actualizar", "Error");
      }).finally(() => {
        this.loading = false;
      });
    },
    cancelarReservaEditar() {
      this.$alert.dialog('¿Está seguro de eliminar esta reserva?')
        .onOk(() => {
          this.loading = true;
          this.$axios.post('/reservasAnular', {
            id: this.reservaEditar.id,
            motivo: 'Cancelado manualmente'
          }).then(() => {
            this.$alert.success("Reserva eliminada");
            this.dialogoEditar = false;
            this.getReservas(this.fecha, this.agencia);
            this.$socket.emit(`reservas-${this.agencia}`);
          }).catch(err => {
            this.$alert.error(err.response?.data?.message || "Error", "Error");
          }).finally(() => {
            this.loading = false;
          });
        });
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
        agencia: this.agencia,
        tipo_consola_id: this.tipoConsola,
      }).then(() => {
        this.$alert.success("Reserva confirmada", "Reserva");
        this.limpiar();
        this.getReservas(this.fecha,this.agencia);
        this.dialogoReservar = false;
        this.$socket.emit(`reservas-${this.agencia}`)
      }).catch(error => {
        this.$alert.error(error.response.data.message, "Error al confirmar reserva");
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  mounted() {
    console.log('agencia '+ this.agencia)
    console.log('color '+ this.color)
    let cantidad = 20;
    if (this.agencia === "Ayacucho") {
      cantidad = 20;
    }
    for (let i = 0; i < cantidad; i++) {
      const numero = i + 1;
      const nombre = (this.agencia === "Ayacucho" && numero <= 10) ? "Play " + numero : "Sala " + (numero - 10);
      this.salas.push({ sala: nombre });
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
    this.getReservas(this.fecha,this.agencia);
    if (this.agencia === 'Ayacucho') {
      this.$axios.get('/tipoConsolas').then(res => {
        this.tiposConsola = res.data;
      });
    }
    // socketReservas
    let cm = this;
    if (!this.$store.socketReservas) {
      this.$store.socketReservas = {};
    }

    if (!this.$store.socketReservas[this.agencia]) {
      this.$socket.on(`reservas-${this.agencia}`, () => {
        cm.getReservas(this.fecha, this.agencia);
      });
      this.$store.socketReservas[this.agencia] = true;
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
