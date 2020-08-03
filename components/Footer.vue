<template>
  <v-footer
    app
    fixed
    class="pa-0"
  >
    <v-bottom-navigation
      v-model="activeBtn"
      :color="$vuetify.theme.themes.light.tertiary"
    >
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
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
