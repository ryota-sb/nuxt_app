<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(shop, i) in shops"
        :key="i"
        class="col-md-3 col-sm-6 col-xs-6"
      >
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            max-width="500"
            :elevation="hover ? 16 : 2"
            :to="{ name: 'shops-shop', params: { shop: shop.key } }"
          >
            <v-img
              class="white--text align-end"
              :src=shop.img
              height="150px"
            >
              <v-card-title>{{ shop.name }}</v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import shops from '@/data/shops.json'

export default {
  data() {
    return {
      shops: shops
    }
  }
}
</script>
