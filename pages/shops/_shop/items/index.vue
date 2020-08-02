<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        :cols="4"
      >
        <v-card
          tile
          flat
          outlined
          nuxt
          :to="{ name: 'shops-shop-items-item', params: { item: item.key } }"
          color=""
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="item.img"></v-img>
            </v-avatar>
            <div>
              <v-card-title
                class="col-9 text-truncate"
                v-text="item.name"
              ></v-card-title>
              <v-card-subtitle v-text="item.description"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import shops from '@/data/shops.json'

export default {
  data(){
    return {
      items: shops[this.$route.params.shop]["items"]
    }
  }
}
</script>