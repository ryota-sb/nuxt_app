<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        class="col-md-4 col-sm-12 col-xs-12"
      >
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            tile
            flat
            outlined
            nuxt
            :elevation="hover ? 10 : 2"
            :to="{ name: 'shops-shop-items-item', params: { item: item.key } }"
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
        </v-hover>
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