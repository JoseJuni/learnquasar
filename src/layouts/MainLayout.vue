<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Saude24
        </q-toolbar-title>

        <div> </div>
      </q-toolbar>
    </q-header>

    <q-drawer

      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list

      >
        <q-item-label
          header
        >
          MENU
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'DashBoard',
    caption: '',
    icon: 'home',
    link: '#'
  },
  {
    title: 'Categorias',
    caption: '',
    icon: 'view_list',
    link: '#/categorias'
  },
  {
    title: 'Produtos',
    caption: '',
    icon: 'next_week',
    link: '#/produtos'
  },
  {
    title: 'Stock',
    caption: '',
    icon: 'trending_down',
    link: '#/stock'
  },
  {
    title: 'Vendas',
    caption: '',
    icon: 'assignment',
    link: '#/vendas'
  },
  {
    title: 'Encomendas',
    caption: '',
    icon: 'label_important',
    link: '#/encomendas'
  },
  {
    title: 'Perfil',
    caption: '',
    icon: 'record_voice_over',
    link: '#/perfil'
  },
  {
    title: 'Logout',
    caption: '',
    icon: 'first_page',
    link: '#'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
