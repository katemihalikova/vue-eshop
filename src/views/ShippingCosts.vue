<template>
  <div>
    <h3>Shipping Prices</h3>

    <div class="shipping-item" v-for="(shipping, index) in shippingCosts" :key="index">
      <span>{{ shipping.type }}</span>
      <span>${{ shipping.price.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartService from '@/services/CartService';
import { Product, Shipping } from '@/types';

@Component({})
export default class ShippingCosts extends Vue {
  shippingCosts: Shipping[] = [];
  
  async mounted() {
    this.shippingCosts = await CartService.getShippingPrices();
  }
}
</script>
