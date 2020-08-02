<template>
  <v-container class="pa-20">
    <v-row dense justify="center">
      <v-col class="col-md-8 col-sm-10 col-xs-10">
        <v-card tile>
          <v-row dense justify="center" align="center" class="mb-10 mt-5 px-10 py-5">
            <v-col class="col-md-3 col-sm-12 col-xs-12">
              <v-img
                :src="this.item.img"
              ></v-img>
            </v-col>
            <v-col class="col-md-9 col-sm-12 col-xs-12 pa-6">
              <v-card-title class="px-0">
                {{ this.item.name }}
              </v-card-title>
              <form>
                <v-select
                  v-model="quantity"
                  :items="select_quantity"
                  label="個数の選択"
                ></v-select>
              </form>
              <v-card-title class="px-0">
                合計: {{ totalAmount }}円
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-card tile>
          <v-toolbar>
            <v-toolbar-title>
              お客様情報
            </v-toolbar-title>
          </v-toolbar>
          <v-row dense justify="center" align="center" class="mb-10">
            <v-col :cols="10">
              <form>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  label="名前"
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="メールアドレス"
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  label="電話番号"
                ></v-text-field>

                <v-text-field
                  v-model="zipcode"
                  label="郵便番号"
                ></v-text-field>

                <v-text-field
                  v-model="prefecture"
                  label="都道府県"
                ></v-text-field>

                <v-text-field
                  v-model="city"
                  label="市区町村"
                ></v-text-field>

                <v-text-field
                  v-model="address"
                  label="番地名"
                ></v-text-field>

                <v-text-field
                  v-model="building_name"
                  label="建物名"
                ></v-text-field>
              </form>
            </v-col>
          </v-row>
        </v-card>
        <v-btn block @click="purchase">
          購入する
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import shops from '@/data/shops.json'

const max_quantity = 100;
const quantityRange = [...Array(max_quantity).keys()].map(i => ++i);

export default {
  data() {
    return {
      item: shops[this.$route.params.shop]["items"][this.$route.params.item],
      select_quantity: quantityRange,
      name: '',
      email: '',
      phone: '',
      zipcode: '',
      prefecture: '',
      city: '',
      address: '',
      building_name: '',
      quantity: 1
    }
  },
  computed: {
    totalAmount() {
      const item = shops[this.$route.params.shop]["items"][this.$route.params.item]
      return item.price * this.quantity
    }
  },
  methods: {
    async purchase() {
      const params = { email: this.email }
      const apiUrl = 'https://7y40c0u2j0.execute-api.ap-northeast-1.amazonaws.com/v1/purchasemessage'
      await this.$axios.$post(apiUrl, params).then(response => {
        console.log('response data', response.data)
        return response
      }).catch(error => {
        console.log('error')
      })
    }
  }
}
</script>