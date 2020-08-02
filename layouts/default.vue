<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: { Header, Footer }
}
</script>