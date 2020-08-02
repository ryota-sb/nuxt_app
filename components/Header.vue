<template>
  <div>
    <v-app-bar
      app
      fixed
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      fixed
    >
      <v-list shaped>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          v-ripple="{ class: $vuetify.theme.themes.light.tertiary }"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      miniVariant: false,
      title: 'SHOP',
      items: [
        {
          icon: 'mdi-home',
          title: 'TOP',
          to: '/'
        },
        {
          icon: 'mdi-information-outline',
          title: 'ABOUT',
          to: '/about'
        },
        {
          icon: 'mdi-store',
          title: 'SHOP',
          to: '/shops'
        }
      ],
    }
  }
}
</script>