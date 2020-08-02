<template>
  <v-container class="pt-0">
    <v-row justify="center" align="center">
      <v-col class="col-md-12 col-sm-12 col-sx-12 pa-0">
        <v-card
         flat
         tile
        >
          <v-img
            class="align-end"
            :src="this.shop.img"
            height="300"
          >
            <v-card-title class="white--text">{{ this.shop.name }}</v-card-title>
            <v-card-subtitle class="white--text">
              {{ this.shop.prefecture + this.shop.city + this.shop.address + this.shop.building_name }}
            </v-card-subtitle>
          </v-img>
        </v-card>

        <v-card
          flat
          tile
          class="mb-5"
        >
          <div class="d-flex justify-space-between">
            <v-card-title class="pb-0">ITEMS</v-card-title>
            <v-card-actions class="px-3 pt-3 pb-0">
              <v-btn
                text
                :color="$vuetify.theme.themes.light.tertiary"
                :to="{ name: 'shops-shop-items', params: { shop: shop.key } }"
              >
                すべて表示
              </v-btn>
            </v-card-actions>
          </div>
          <v-slide-group>
            <v-slide-item
              v-for="(item, index) in this.shop.items"
              :key="index"
              v-slot:default="{ toggle }"
            >
              <v-hover
                v-slot:default="{ hover }"
              >
                <v-card
                  tile
                  class="ma-3"
                  @click="toggle"
                  :elevation="hover ? 10 : 2"
                  :to="{ name: 'shops-shop-items-item', params: { item: item.key } }"
                >
                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                  >
                    <v-img :src="item.img"></v-img>
                  </v-avatar>
                  <v-card-subtitle class="py-0 px-2">{{ item.name }}</v-card-subtitle>
                  <v-card-subtitle class="pt-0 pb-2 px-2">{{ "￥" + item.price }}</v-card-subtitle>
                </v-card>
              </v-hover>
            </v-slide-item>
          </v-slide-group>
        </v-card>
        
        <v-card
          flat
          tile
          :style="{ background: $vuetify.theme.themes.light.secondary }"
        >
          <v-card-title>INFORMATION</v-card-title>
          <v-card-text>
          <v-list
            :style="{ background: $vuetify.theme.themes.light.secondary }"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-mailbox</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>郵便番号</v-list-item-subtitle>
                <v-list-item-title>{{ this.shop.zipcode }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>電話番号</v-list-item-subtitle>
                <v-list-item-title>{{ this.shop.phone }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-calendar-clock</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>営業時間</v-list-item-subtitle>
                <v-list-item-title>{{ this.shop.business_hours }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-calendar-remove</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>定休日</v-list-item-subtitle>
                <v-list-item-title>{{ this.shop.holiday }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-card-text>
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
      shop: shops[this.$route.params.shop]
    }
  }
}
</script>