<template>
  <v-row justify="center">
    <v-col class="col-md-10 col-sm-12 col-sx-12 pa-0">
      <v-card
       flat
       tile
      >
        <v-img
          class="white--text align-end"
          :src="this.shop.img"
          height="300"
        >
          <v-card-title>{{ this.shop.name }}</v-card-title>
          <v-card-subtitle class="white--text">
            {{ this.shop.prefecture + this.shop.city + this.shop.address + this.shop.building_name }}
          </v-card-subtitle>
        </v-img>
      </v-card>

      <v-card>
        <v-card-title>INFORMATION</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-post</v-icon>
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
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>営業時間</v-list-item-subtitle>
              <v-list-item-title>{{ this.shop.phone }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>定休日</v-list-item-subtitle>
              <v-list-item-title>{{ this.shop.phone }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
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

<style>
  h1 {
    margin-bottom: 20px;
  }
</style>