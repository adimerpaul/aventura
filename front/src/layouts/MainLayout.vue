<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black" bordered >
      <q-toolbar>
<!--        keyboard_double_arrow_left-->
        <q-btn
          dense
          rounded
          color="primary"
          :icon="leftDrawerOpen ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'"
          aria-label="Menu"
          size="10px"
          @click="toggleLeftDrawer"
          unelevated
        />
        <span class="q-pa-xs text-bold">{{version}}</span>
        <q-toolbar-title>
        </q-toolbar-title>
        <div>
          <q-btn-dropdown flat unelevated  no-caps dropdownIcon="expand_more">
            <template v-slot:label>
              <q-avatar rounded>
                <q-img :src="$url+ '../images/' + $store.user.avatar" v-if="$store.user.avatar" />
              </q-avatar>
              <div class="text-center" style="line-height: 1">
                <div style="width: 100px; white-space: normal; overflow-wrap: break-word;">
                  {{ $store.user.name }}
                  <div style="line-height: 0.9">
                    <q-chip :color="$store.user.sucursal=='Ayacucho'?'green':'blue'" dense size="xs" class="text-white">{{$store.user.sucursal}}</q-chip>
                    <q-chip :color="$store.user.role=='Admin'?'red':'grey'" dense size="xs" class="text-white">{{$store.user.role}}</q-chip>
                  </div>
                </div>
<!--                <pre>{{$store.user}}</pre>-->
              </div>
            </template>
            <q-item clickable v-ripple @click="logout" v-close-popup>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Salir</q-item-label>
              </q-item-section>
            </q-item>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      :width="200"
      :breakpoint="500"
      class="bg-primary text-white"
    >
      <q-list>
        <q-item-label
          header
          class="text-center"
        >
          <q-img src="/logo.png" width="100px" />
        </q-item-label>

<!--        <EssentialLink-->
<!--          v-for="link in linksList"-->
<!--          :key="link.title"-->
<!--          v-bind="link"-->
<!--        />-->
        <template v-for="link in linksList" :key="link.title">
<!--          v-if="link.can === 'Todos' || $store.permissions.some(permission => permission.name === link.can)"-->
          <q-item  clickable :to="link.link" exact
                   class="text-black"
                   active-class="menu"
                   dense
                   v-close-popup
                   v-if="link.can === 'Todos' || $store.user.role === link.can"
          >
            <q-item-section avatar>
              <q-icon :name="$route.path === link.link ? 'o_' + link.icon : link.icon"
                      :class="$route.path === link.link ? 'text-black' : ''"/>
            </q-item-section>
            <q-item-section>
              <q-item-label :class="$route.path === link.link ? `text-black text-bold ${link.color}` : ''">
                {{ link.title }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <q-item clickable class="text-black" @click="logout" v-close-popup>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Salir</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
const {proxy} = getCurrentInstance()
const linksList = ref([])


const leftDrawerOpen = ref(false)

const version =import.meta.env.VITE_API_VERSION

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const baseLinks = [
    { title: 'Principal', icon: 'home', link: '/', can: 'Todos' },
    { title: 'Usuarios', icon: 'people', link: '/usuarios', can: 'Admin' },
    { title: 'Confirmar reserva', icon: 'shopping_bag', link: '/reservas/lista', can: 'Todos' },
    { title: 'Productos', icon: 'shopping_cart', link: '/productos', can: 'Admin' },
    { title: 'Nueva Venta', icon: 'add_shopping_cart', link: '/ventas/add', can: 'Todos' },
    { title: 'Ventas', icon: 'storefront', link: '/ventas', can: 'Todos' },
    { title: 'Metricas', icon: 'analytics', link: '/metricas', can: 'Admin' },
    { title: 'Nueva Compra', icon: 'add_circle_outline', link: '/compras/add', can: 'Todos' },
    { title: 'Compras', icon: 'shopping_basket', link: '/compras', can: 'Todos' },
  ]

  const sucursalLinks = {
    'Ayacucho': { title: 'Ayacucho', icon: 'event', link: '/reservas', can: 'Todos', color: 'text-green' },
    'Oquendo': { title: 'Oquendo', icon: 'event', link: '/reservasOquendo', can: 'Todos', color: 'text-blue' },
  }

  const altSucursal = user.sucursal === 'Ayacucho' ? 'Oquendo' : 'Ayacucho'

  linksList.value = [
    ...baseLinks.slice(0, 2),
    sucursalLinks[user.sucursal],
    ...baseLinks.slice(2),
    sucursalLinks[altSucursal]
  ]
})

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function logout() {
  proxy.$alert.dialog('¿Desea salir del sistema?')
    .onOk(() => {
      proxy.$store.isLogged = false
      proxy.$store.user = {}
      localStorage.removeItem('tokenProvidencia')
      proxy.$router.push('/login')
    })
}
</script>
<style>
.menu{
  background-color: #fff;
  color: #000 !important;
  border-radius: 10px;
  margin: 5px;
  padding: 5px
}
</style>
