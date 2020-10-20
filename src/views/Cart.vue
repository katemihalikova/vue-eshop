<template>
  <div>
    <h3>Cart</h3>

    <p>
      <router-link to="/shipping">Shipping Prices</router-link>
    </p>

    <div class="cart-item" v-for="(item, index) in items" :key="index">
      <span>{{ item.name }}</span>
      <span>${{ item.price.toFixed(2) }}</span>
    </div>

    <form v-if="items.length > 0" @submit="onSubmit()">
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </div>

      <div>
          <label for="address">Address</label>
          <input id="address" type="text" v-model="address">
      </div>

      <button class="button" type="submit">Purchase</button>
    </form>
    <div v-else>No items in cart...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartService from '@/services/CartService';
import { Product } from '@/types';

@Component({})
export default class Cart extends Vue {
  items: Product[] = CartService.getItems();

  name: string = '';
  address: string = '';

  onSubmit() {
    alert(`Your order of ${this.items.length} item${this.items.length === 1 ? '' : 's'} has been accepted and will be send to ${this.name}, ${this.address}.`);

    this.items = CartService.clearCart();
    this.$router.push('/');
  }
}
</script>
