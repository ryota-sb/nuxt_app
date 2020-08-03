<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <BottomNav v-if="$vuetify.breakpoint.xs"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'

export default {
  components: { Header, BottomNav }
}
</script>