<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="app-header text-black" bordered>
      <q-toolbar class="q-px-md">
        <q-btn
          flat
          dense
          round
          class="app-toggle"
          :icon="leftDrawerOpen ? 'menu_open' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-ml-sm">
          <div class="app-title">{{ currentTitle }}</div>
          <div class="app-subtitle">{{ currentSubtitle }}</div>
        </div>

        <q-space />

        <q-btn-dropdown flat unelevated no-caps dropdown-icon="expand_more" class="app-user">
          <template v-slot:label>
            <q-avatar size="34px" class="app-avatar">
              <q-img :src="$url + '../images/' + $store.user.avatar" v-if="$store.user.avatar" />
              <span v-else>{{ iniciales }}</span>
            </q-avatar>
            <div class="text-left q-ml-sm gt-xs">
              <div class="app-user-name">{{ $store.user.name }}</div>
              <div class="app-user-meta">
                <q-chip :color="$store.user.sucursal === 'Ayacucho' ? 'green' : 'blue'" dense size="xs" class="text-white">
                  {{ $store.user.sucursal }}
                </q-chip>
                <q-chip :color="$store.user.role === 'Admin' ? 'red' : 'grey'" dense size="xs" class="text-white">
                  {{ $store.user.role }}
                </q-chip>
              </div>
            </div>
          </template>
          <q-list style="min-width: 180px">
            <q-item clickable v-ripple @click="logout" v-close-popup>
              <q-item-section avatar>
                <q-icon name="logout" color="negative" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Salir</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="222"
      :breakpoint="500"
    >
      <div class="app-drawer column full-height">
        <!-- Marca -->
        <div class="app-brand">
          <div class="app-brand-logo">
            <q-img src="/logo.png" fit="contain" width="32px" height="32px" />
          </div>
          <div class="app-brand-text">
            <div class="app-brand-name">Aventura</div>
            <div class="app-brand-sub">Reservas, ventas e inventario</div>
          </div>
        </div>

        <!-- Navegación -->
        <q-scroll-area class="col app-nav">
          <q-list dense class="app-list">
            <template v-for="grupo in visibleGroups" :key="grupo.section">
              <q-item-label header class="app-section">{{ grupo.section }}</q-item-label>
              <q-item
                v-for="link in grupo.links"
                :key="link.title"
                clickable
                v-ripple
                :to="link.link"
                exact
                class="app-item"
                active-class="app-item--active"
                v-close-popup
              >
                <q-item-section avatar class="app-item-icon">
                  <q-icon :name="link.icon" size="18px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="app-item-label">{{ link.title }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-scroll-area>

        <!-- Pie -->
        <div class="app-foot">
          <div class="app-foot-version">Aventura {{ version }}</div>
          <div class="app-foot-copy">© {{ anio }} Minicine Aventura</div>
          <q-btn
            class="app-logout q-mt-xs"
            icon="logout"
            label="Salir"
            no-caps
            unelevated
            dense
            align="left"
            @click="logout"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, getCurrentInstance, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { proxy } = getCurrentInstance()
const route = useRoute()

const menuGroups = ref([])
const leftDrawerOpen = ref(false)
const version = import.meta.env.VITE_API_VERSION
const anio = new Date().getFullYear()

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const sucursalLinks = {
    'Ayacucho': { title: 'Ayacucho', icon: 'event_seat', link: '/reservas', can: 'Todos', subtitle: 'Tablero de reservas Ayacucho' },
    'Oquendo': { title: 'Oquendo', icon: 'event_seat', link: '/reservasOquendo', can: 'Todos', subtitle: 'Tablero de reservas Oquendo' },
  }
  const altSucursal = user.sucursal === 'Ayacucho' ? 'Oquendo' : 'Ayacucho'

  menuGroups.value = [
    {
      section: 'General',
      links: [
        { title: 'Inicio', icon: 'dashboard', link: '/', can: 'Todos', subtitle: 'Resumen general' },
        sucursalLinks[user.sucursal] || sucursalLinks['Ayacucho'],
        { title: 'Confirmar reserva', icon: 'event_available', link: '/reservas/lista', can: 'Todos', subtitle: 'Reservas pendientes de confirmación' },
      ],
    },
    {
      section: 'Ventas',
      links: [
        { title: 'Nueva venta', icon: 'add_shopping_cart', link: '/ventas/add', can: 'Todos', subtitle: 'Registrar una venta' },
        { title: 'Ventas', icon: 'storefront', link: '/ventas', can: 'Todos', subtitle: 'Historial de ventas' },
      ],
    },
    {
      section: 'Inventario',
      links: [
        { title: 'Productos', icon: 'inventory_2', link: '/productos', can: 'Admin', subtitle: 'Catálogo y stock' },
        { title: 'Nueva compra', icon: 'add_business', link: '/compras/add', can: 'Admin', subtitle: 'Registrar una compra' },
        { title: 'Compras', icon: 'shopping_basket', link: '/compras', can: 'Admin', subtitle: 'Historial de compras' },
      ],
    },
    {
      section: 'Administración',
      links: [
        { title: 'Usuarios', icon: 'group', link: '/usuarios', can: 'Admin', subtitle: 'Cuentas y permisos' },
        { title: 'Métricas', icon: 'analytics', link: '/metricas', can: 'Admin', subtitle: 'Indicadores del negocio' },
        { title: 'Tipo de consola', icon: 'sports_esports', link: '/tipo-consolas', can: 'Admin', subtitle: 'Consolas y tarifas' },
      ],
    },
    {
      section: 'Otra sucursal',
      links: [sucursalLinks[altSucursal]],
    },
  ]
})

const visibleGroups = computed(() => {
  const role = proxy.$store.user.role
  return menuGroups.value
    .map(grupo => ({
      section: grupo.section,
      links: grupo.links.filter(link => link && (link.can === 'Todos' || role === link.can)),
    }))
    .filter(grupo => grupo.links.length > 0)
})

const linkActual = computed(() =>
  visibleGroups.value.flatMap(g => g.links).find(link => link.link === route.path)
)
const currentTitle = computed(() => linkActual.value?.title || 'Aventura')
const currentSubtitle = computed(() => linkActual.value?.subtitle || 'Sistema de gestión')

const iniciales = computed(() => {
  const nombre = proxy.$store.user.name || ''
  return nombre.trim().split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase()
})

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function logout () {
  proxy.$alert.dialog('¿Desea salir del sistema?')
    .onOk(() => {
      proxy.$store.isLogged = false
      proxy.$store.user = {}
      localStorage.removeItem('tokenProvidencia')
      proxy.$router.push('/login')
    })
}
</script>

<style lang="scss" scoped>
$menu-top: #f57c00;
$menu-bottom: #e65100;
$menu-accent: #ffb74d;

/* ---------- Header ---------- */
.app-header {
  background: #fff;
}
.app-toggle {
  color: $menu-bottom;
}
.app-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.1;
  color: #212121;
}
.app-subtitle {
  font-size: 11px;
  line-height: 1.2;
  color: #9e9e9e;
}
.app-user {
  border-radius: 10px;
}
.app-avatar {
  background: linear-gradient(135deg, $menu-top, $menu-bottom);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
}
.app-user-name {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.1;
  color: #212121;
}
.app-user-meta {
  line-height: 1;
}

/* ---------- Drawer ---------- */
.app-drawer {
  background: linear-gradient(180deg, $menu-top 0%, $menu-bottom 100%);
  color: #fff;
  width: 100%;
}
.app-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.app-brand-logo {
  background: #fff;
  border-radius: 8px;
  padding: 3px;
  display: flex;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
}
.app-brand-name {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
}
.app-brand-sub {
  font-size: 10px;
  line-height: 1.2;
  opacity: 0.8;
}

.app-list {
  padding: 2px 0 6px;
}
.app-nav {
  min-height: 0;

  :deep(.q-scrollarea__thumb) {
    background: rgba(255, 255, 255, 0.55);
  }
}
.app-section {
  padding: 8px 14px 2px;
  min-height: 0;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.1;
}
.app-item {
  min-height: 30px;
  margin: 1px 6px;
  padding: 2px 8px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.92);
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
}
.app-item-icon {
  min-width: 26px;
  padding-right: 6px;
}
.app-item-label {
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.2;
}
.app-item--active {
  background: #fff;
  color: $menu-bottom;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);

  .app-item-label {
    font-weight: 700;
  }
}

/* ---------- Pie ---------- */
.app-foot {
  padding: 6px 10px 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}
.app-foot-version {
  font-size: 10px;
  font-weight: 600;
}
.app-foot-copy {
  font-size: 9px;
  opacity: 0.75;
}
.app-logout {
  width: 100%;
  background: rgba(0, 0, 0, 0.18);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  min-height: 28px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
