<template>
  <!-- <div class="overflow-hidden">
    <v-btn
      dark
      rounded
      :color="$vuetify.theme.themes.light.tertiary"
      @click="showNav = !showNav"
    >
      <span><v-icon class="pr-2">mdi-menu</v-icon></span>
      Menu
    </v-btn>
  </div> -->

  <v-bottom-navigation
    app
    fixed
    v-model="activeBtn"
    :input-value="showNav"
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
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      showNav:false,
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