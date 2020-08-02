<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(shop, i) in shops"
        :key="i"
        class="col-md-3 col-sm-6 col-xs-6"
      >
        <v-card
          max-width="500"
        >
          <v-img
            class="white--text align-end"
            :src=shop.img
            height="150px"
          >
            <v-card-title>{{ shop.name }}</v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn
              :to="{ name: 'shops-shop', params: { shop: shop.key } }"
              style="text-decoration: none"
              :color="$vuetify.theme.themes.light.tertiary"
              dark
            >
              お店詳細
            </v-btn>
            
            <v-btn
              :to="{ name: 'shops-shop-items', params: { shop: shop.key } }"
              style="text-decoration: none"
              :color="$vuetify.theme.themes.light.tertiary"
              dark
            >
              商品一覧
            </v-btn>
          </v-card-actions>
        </v-card>
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
